/** Enhance existing section anchors; every panel stays readable without JavaScript. */
export function initTopicBook(root: HTMLElement) {
  const panels = [...root.querySelectorAll<HTMLElement>('[data-book-panel]')];
  const links = [
    ...root.querySelectorAll<HTMLAnchorElement>('.book-section-link'),
  ];
  function selectHash(focus = false) {
    let id = '';
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      /* Unknown fragment uses overview. */
    }
    const target = document.getElementById(id);
    if (target && !root.contains(target)) return;
    const selected =
      target?.closest<HTMLElement>('[data-book-panel]') || panels[0];
    panels.forEach((panel) => {
      panel.hidden = panel !== selected;
    });
    links.forEach((link) => {
      if (
        link.hash === '#' + selected.id ||
        (!link.hash && selected === panels[0])
      )
        link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const disclosure = root.querySelector<HTMLDetailsElement>(
      '[data-chapter="' + selected.id + '"]',
    );
    if (disclosure) disclosure.open = true;
    root.classList.add('book-ready');
    if (focus) {
      const heading =
        target && target !== selected
          ? target
          : selected.querySelector<HTMLElement>('.book-panel-title');
      heading?.focus({ preventScroll: true });
      (target || selected).scrollIntoView({
        block: 'start',
        behavior: 'instant',
      });
    }
  }
  selectHash(Boolean(location.hash));
  window.addEventListener('hashchange', () => selectHash(true));
}
