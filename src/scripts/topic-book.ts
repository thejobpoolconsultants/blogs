/** Enhance ordinary in-page links. With JavaScript disabled every section remains readable. */
export function initTopicBook(root: HTMLElement) {
  const panels = [...root.querySelectorAll<HTMLElement>('[data-book-panel]')];
  const links = [...root.querySelectorAll<HTMLAnchorElement>('[data-section]')];
  const concepts = [...root.querySelectorAll<HTMLElement>('[data-concepts]')];
  const menu = root.querySelector<HTMLDetailsElement>('.book-menu')!;
  const wide = matchMedia('(min-width: 1001px)');
  let active = panels[0];

  function selectHash(moveFocus = false) {
    let id = '';
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      /* Unknown fragment: show overview. */
    }
    const target = document.getElementById(id);
    // A global skip link must not change the currently selected section.
    if (target && !root.contains(target)) return;
    const selected =
      target?.closest<HTMLElement>('[data-book-panel]') || panels[0];
    active = selected;
    panels.forEach((panel) => {
      panel.hidden = panel !== selected;
    });
    links.forEach((link) => {
      if (link.dataset.section === selected.id)
        link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    concepts.forEach((list) => {
      list.hidden = list.dataset.concepts !== selected.id;
    });
    root.classList.add('book-ready');
    if (!wide.matches) menu.open = false;
    if (moveFocus) {
      const focusTarget =
        target && target !== selected
          ? target
          : selected.querySelector<HTMLElement>('.book-panel-title');
      focusTarget?.focus({ preventScroll: true });
      (target || selected).scrollIntoView({
        block: 'start',
        behavior: 'instant',
      });
    }
  }
  function syncMenu() {
    menu.open = wide.matches;
  }
  syncMenu();
  selectHash(Boolean(location.hash));
  wide.addEventListener('change', syncMenu);
  window.addEventListener('hashchange', () => selectHash(true));
  root.addEventListener('click', (event) => {
    const mouse = event as MouseEvent;
    if (
      mouse.button !== 0 ||
      mouse.metaKey ||
      mouse.ctrlKey ||
      mouse.shiftKey ||
      mouse.altKey
    )
      return;
    const anchor = (event.target as Element).closest<HTMLAnchorElement>(
      'a[href^="#"]',
    );
    if (!anchor) return;
    if (anchor.hash === location.hash) {
      event.preventDefault();
      selectHash(true);
    }
    // New hashes use native history and the hashchange listener.
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !wide.matches && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
  // Opening a long menu places its current section within the scrollable region.
  menu.addEventListener('toggle', () => {
    if (menu.open && !wide.matches) {
      const current = links.find((link) => link.dataset.section === active.id);
      const scroller = root.querySelector<HTMLElement>('.book-navigation');
      if (current && scroller)
        scroller.scrollTop = Math.max(
          0,
          current.offsetTop - scroller.offsetTop - 70,
        );
    }
  });
}
