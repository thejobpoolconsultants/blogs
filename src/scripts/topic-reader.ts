export function initTopicSidebar(root: HTMLElement) {
  const navigation = root.querySelector<HTMLElement>(
    '[data-sidebar-navigation]',
  )!;
  const scroller = root.querySelector<HTMLElement>('[data-sidebar-scroll]')!;
  const desktop = root.querySelector<HTMLElement>('[data-sidebar-desktop]')!;
  const drawer = root.querySelector<HTMLDialogElement>('dialog')!;
  const browse = root.querySelector<HTMLButtonElement>('[data-browse-topic]')!;
  const close = root.querySelector<HTMLButtonElement>('[data-close-topic]')!;
  const wide = matchMedia('(min-width: 1001px)');
  function revealCurrent() {
    const current = navigation.querySelector<HTMLElement>(
      '[aria-current="page"]',
    );
    if (!current) return;
    const entry = current.getBoundingClientRect();
    const frame = scroller.getBoundingClientRect();
    if (entry.top < frame.top || entry.bottom > frame.bottom)
      scroller.scrollTop += entry.top - frame.top - 64;
  }
  function sync() {
    browse.hidden = wide.matches;
    if (wide.matches) {
      if (drawer.open) drawer.close();
      if (navigation.parentElement !== desktop) desktop.append(navigation);
    } else if (navigation.parentElement !== drawer) drawer.append(navigation);
    const header = document.querySelector<HTMLElement>('body > header');
    const position = header && getComputedStyle(header).position;
    const offset =
      header && (position === 'sticky' || position === 'fixed')
        ? header.getBoundingClientRect().height + 16
        : 24;
    root.style.setProperty('--reader-top', offset + 'px');
    if (wide.matches) {
      scroller.style.maxHeight =
        Math.max(
          160,
          innerHeight -
            Math.max(offset, scroller.getBoundingClientRect().top) -
            24,
        ) + 'px';
      revealCurrent();
    } else scroller.style.removeProperty('max-height');
  }
  browse.addEventListener('click', () => {
    drawer.showModal();
    revealCurrent();
  });
  close.addEventListener('click', () => drawer.close());
  drawer.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const controls = [
      ...drawer.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], summary, [tabindex="0"]',
      ),
    ].filter((control) => {
      const closedSection = control.closest('details:not([open])');
      return (
        control.getClientRects().length > 0 &&
        (!closedSection || closedSection.querySelector('summary') === control)
      );
    });
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
  drawer.addEventListener('close', () => {
    if (!wide.matches) browse.focus();
  });
  drawer.addEventListener('click', (event) => {
    const box = drawer.getBoundingClientRect();
    if (
      event.target === drawer &&
      (event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom)
    )
      drawer.close();
  });
  navigation.addEventListener('click', (event) => {
    const anchor = (event.target as Element).closest<HTMLAnchorElement>('a');
    if (
      anchor &&
      drawer.open &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey &&
      !event.altKey &&
      event.button === 0
    )
      drawer.close();
  });
  wide.addEventListener('change', sync);
  window.addEventListener('resize', sync);
  sync();
  void document.fonts.ready.then(sync);
}

export function initArticleToc(root: HTMLElement) {
  const details = root.querySelector<HTMLDetailsElement>('details')!;
  const links = [...root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
  const wide = matchMedia('(min-width: 1400px)');
  const targets = links.flatMap((link) => {
    const element = document.getElementById(
      decodeURIComponent(link.hash.slice(1)),
    );
    return element ? [element] : [];
  });
  const select = (id: string) =>
    links.forEach((link) => {
      if (decodeURIComponent(link.hash.slice(1)) === id)
        link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  const updateActiveHeading = () => {
    const readingLine = innerHeight * 0.2;
    const current =
      targets
        .filter((target) => target.getBoundingClientRect().top <= readingLine)
        .at(-1) || targets[0];
    if (current) select(current.id);
  };
  const readingLineObserver = new IntersectionObserver(updateActiveHeading, {
    rootMargin: '-20% 0px -75% 0px',
    threshold: [0, 1],
  });
  const viewportObserver = new IntersectionObserver(updateActiveHeading);
  targets.forEach((target) => {
    readingLineObserver.observe(target);
    viewportObserver.observe(target);
  });
  if (targets[0]) select(targets[0].id);
  const sync = () => {
    details.open = wide.matches;
  };
  wide.addEventListener('change', sync);
  root.addEventListener('click', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>(
      'a[href^="#"]',
    );
    if (link) select(decodeURIComponent(link.hash.slice(1)));
  });
  sync();
}
