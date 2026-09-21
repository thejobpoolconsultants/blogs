export function initKnowledgeBook(root: HTMLElement) {
  const menu = root.querySelector<HTMLDetailsElement>('.knowledge-menu')!;
  const scroller = root.querySelector<HTMLElement>('.book-navigation')!;
  const wide = matchMedia('(min-width: 1001px)');
  const disclosures = [
    ...root.querySelectorAll<HTMLDetailsElement>('.chapter-disclosure'),
  ];
  const conceptLinks = [
    ...root.querySelectorAll<HTMLAnchorElement>('[data-concept-link]'),
  ];
  const legacy = document.getElementById('knowledge-legacy-links');
  const aliases: Record<string, string> = legacy
    ? JSON.parse(legacy.textContent || '{}')
    : {};

  function showCurrentInMenu() {
    const current =
      root.querySelector<HTMLElement>(
        '.knowledge-subtopics [aria-current="location"]',
      ) ||
      root.querySelector<HTMLElement>(
        '.book-section-link[aria-current="page"]',
      );
    if (!current) return;
    const item = current.getBoundingClientRect();
    const frame = scroller.getBoundingClientRect();
    if (item.top < frame.top || item.bottom > frame.bottom)
      scroller.scrollTop += item.top - frame.top - 60;
  }
  function sizeMenu() {
    if (wide.matches)
      scroller.style.maxHeight =
        Math.max(
          160,
          innerHeight - Math.max(24, scroller.getBoundingClientRect().top) - 24,
        ) + 'px';
    else scroller.style.removeProperty('max-height');
  }
  function syncMenu() {
    menu.open = wide.matches;
    sizeMenu();
    if (wide.matches) showCurrentInMenu();
  }
  function selectConcept(focus = false) {
    let hash = '';
    try {
      hash = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    if (Object.hasOwn(aliases, hash)) {
      location.replace(aliases[hash]);
      return;
    }
    const target = document.getElementById(hash);
    const concept = target?.matches('.knowledge-concept') ? target : null;
    conceptLinks.forEach((link) => {
      if (
        link.pathname === location.pathname &&
        link.dataset.conceptLink === hash
      )
        link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (!concept) return;
    const active = disclosures.find(
      (disclosure) =>
        disclosure.dataset.chapter === root.dataset.selectedSection,
    );
    if (active) active.open = true;
    if (focus) {
      if (!wide.matches) menu.open = false;
      concept.focus({ preventScroll: true });
      concept.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
    if (wide.matches) showCurrentInMenu();
  }
  syncMenu();
  selectConcept(Boolean(location.hash));
  wide.addEventListener('change', syncMenu);
  window.addEventListener('resize', sizeMenu);
  window.addEventListener('scroll', sizeMenu, { passive: true });
  window.addEventListener('hashchange', () => selectConcept(true));
  disclosures.forEach((disclosure) =>
    disclosure.addEventListener('toggle', () => {
      if (disclosure.open)
        disclosures.forEach((other) => {
          if (other !== disclosure) other.open = false;
        });
    }),
  );
  menu.addEventListener('toggle', () => {
    if (menu.open) showCurrentInMenu();
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !wide.matches && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
  conceptLinks.forEach((link) =>
    link.addEventListener('click', (event) => {
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      )
        return;
      if (link.pathname === location.pathname && link.hash === location.hash) {
        event.preventDefault();
        selectConcept(true);
      }
    }),
  );
}
