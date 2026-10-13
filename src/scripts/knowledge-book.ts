/** Preserve legacy fragments and concept anchors without storing reader state. */
export function initKnowledgeBook(root: HTMLElement) {
  const legacy = document.getElementById('knowledge-legacy-links');
  const aliases: Record<string, string> = legacy
    ? JSON.parse(legacy.textContent || '{}')
    : {};
  function selectConcept(focus = false) {
    let hash: string;
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
    if (
      focus &&
      target &&
      root.contains(target) &&
      target.matches('.knowledge-concept')
    ) {
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }
  selectConcept(Boolean(location.hash));
  window.addEventListener('hashchange', () => selectConcept(true));
}
