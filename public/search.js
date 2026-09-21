'use strict';
const query = document.querySelector('#query');
const topic = document.querySelector('#topic-filter');
const type = document.querySelector('#type-filter');
const results = document.querySelector('#search-results');
const searchStatus = document.querySelector('#search-status');
const more = document.querySelector('#load-more');
let pagefind;
let generation = 0;
let found = [];
let shown = 0;
async function showResults(token) {
  const batch = await Promise.all(
    found.slice(shown, shown + 10).map((r) => r.data()),
  );
  if (token !== generation) return;
  for (const data of batch) {
    const article = document.createElement('article');
    article.className = 'search-result';
    const meta = document.createElement('p');
    meta.className = 'meta';
    meta.textContent = [
      data.meta.topic,
      data.meta.typeLabel || data.meta.type,
      data.meta.date,
    ]
      .filter(Boolean)
      .join(' · ');
    const heading = document.createElement('h2');
    const link = document.createElement('a');
    link.href = data.url;
    link.textContent = data.meta.title || 'Read result';
    heading.append(link);
    const excerpt = document.createElement('p');
    // Pagefind highlights are converted to text; no HTML from the index is injected.
    const parsed = new DOMParser().parseFromString(data.excerpt, 'text/html');
    excerpt.textContent = parsed.body.textContent;
    article.append(meta, heading, excerpt);
    results.append(article);
  }
  shown += batch.length;
  more.hidden = shown >= found.length;
}
async function search() {
  const token = ++generation;
  const term = query.value.trim();
  results.replaceChildren();
  more.hidden = true;
  const params = new URLSearchParams();
  if (term) params.set('q', term);
  if (topic.value) params.set('topic', topic.value);
  if (type.value) params.set('type', type.value);
  history.replaceState(
    null,
    '',
    location.pathname + (params.size ? '?' + params.toString() : ''),
  );
  if (!term) {
    searchStatus.textContent = 'Enter a search term to begin.';
    return;
  }
  searchStatus.textContent = 'Searching the library…';
  try {
    pagefind ||= await import(
      /* @vite-ignore */ document.querySelector('#search').dataset.index
    );
    const filters = {};
    if (topic.value) filters.Topic = topic.value;
    if (type.value) filters.Type = type.value;
    const response = await pagefind.search(term, { filters });
    if (token !== generation) return;
    found = response.results;
    shown = 0;
    searchStatus.textContent = found.length
      ? found.length + ' results for “' + term + '”.'
      : 'No results for “' + term + '”. Try a broader term or remove a filter.';
    await showResults(token);
  } catch (error) {
    console.error('Search index could not be loaded', error);
    if (token === generation)
      searchStatus.textContent =
        'Search is temporarily unavailable. Please try again, or browse topics and articles using the navigation.';
  }
}
document.querySelector('#search-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  void search();
});
topic.addEventListener('change', () => void search());
type.addEventListener('change', () => void search());
more.addEventListener('click', () => void showResults(generation));
const params = new URLSearchParams(location.search);
query.value = params.get('q') || '';
topic.value = params.get('topic') || '';
type.value = params.get('type') || '';
if (query.value) void search();

export {};
