import { retrievalResult, retrievalSamples } from '../data/retrieval-demo';

export function mountRetrievalDemo(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('.retrieval-stage')!;
  const select = root.querySelector<HTMLSelectElement>('select')!;
  const tourButton = root.querySelector<HTMLButtonElement>('.demo-tour')!;
  const output = root.querySelector<HTMLElement>('[data-output]')!;
  const answer = root.querySelector<HTMLElement>('[data-answer]')!;
  const title = root.querySelector<HTMLElement>('[data-document-title]')!;
  const excerpt = root.querySelector<HTMLElement>('[data-document-excerpt]')!;
  const readout = root.querySelector<HTMLElement>('[data-readout]')!;
  const announcement = root.querySelector<HTMLElement>(
    '[data-demo-announcement]',
  )!;
  const partsRoot = stage.querySelector<SVGGElement>('[data-anatomy-parts]')!;
  const parts = [...partsRoot.children] as SVGGElement[];
  const moving = parts.filter((part) =>
    part.hasAttribute('data-moving-selector'),
  );
  const screens = [
    ...stage.querySelectorAll<SVGGElement>('[data-screen-document]'),
  ];
  const axis = [Number(stage.dataset.axisX), Number(stage.dataset.axisY)];
  const still = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false,
    frame = 0,
    last = 0,
    position = 0,
    chosen = 0,
    committed = 0;
  let touring = !still.matches,
    idle = 0,
    userInitiated = false;
  let sorted = parts;
  const updateTourButton = () => {
    tourButton.textContent = still.matches
      ? 'Motion reduced'
      : touring
        ? 'Pause tour'
        : 'Play tour';
    tourButton.disabled = still.matches;
    tourButton.setAttribute('aria-pressed', String(touring));
    root.dataset.touring = String(touring);
  };
  const draw = () => {
    for (const part of moving)
      part.setAttribute(
        'transform',
        `translate(${axis[0] * position} ${axis[1] * position})`,
      );
    const nextOrder = [...parts].sort(
      (a, b) =>
        Number(a.dataset.sortKey) +
        Number(a.dataset.sortLift) * position -
        Number(b.dataset.sortKey) -
        Number(b.dataset.sortLift) * position,
    );
    if (nextOrder.some((node, index) => node !== sorted[index])) {
      partsRoot.append(...nextOrder);
      sorted = nextOrder;
    }
    root.dataset.position = position.toFixed(6);
  };
  const commit = () => {
    committed = chosen;
    const sample = retrievalResult(committed);
    root.dataset.phase = 'ready';
    root.dataset.document = sample.id;
    output.setAttribute('aria-busy', 'false');
    title.textContent = `Document ${sample.id} / ${sample.title}`;
    excerpt.textContent = sample.excerpt;
    answer.textContent = sample.answer;
    readout.textContent = `Document ${sample.id} · Ready`;
    screens.forEach((screen) => {
      screen.style.opacity = String(
        Number(screen.dataset.screenDocument) === committed ? 1 : 0,
      );
    });
    if (userInitiated)
      announcement.textContent = `Document ${sample.id}. ${sample.answer}`;
    userInitiated = false;
  };
  const choose = (index: number, byUser: boolean) => {
    const sample = retrievalResult(index);
    chosen = sample.index;
    select.value = String(chosen);
    userInitiated = byUser;
    idle = 0;
    if (Math.abs(position - sample.position) < 0.0001) {
      commit();
      return;
    }
    root.dataset.phase = 'retrieving';
    delete root.dataset.document;
    output.setAttribute('aria-busy', 'true');
    title.textContent = 'Selecting a matching sample document';
    excerpt.textContent =
      'The answer appears when the scanner reaches the document.';
    answer.textContent = 'Retrieving the source…';
    readout.textContent = 'Selector moving · Retrieving';
    screens.forEach((screen) => {
      screen.style.opacity = '0';
    });
    if (still.matches) {
      position = sample.position;
      draw();
      commit();
    } else run();
  };
  const tick = (now: number) => {
    const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
    last = now;
    const target = retrievalResult(chosen).position;
    position = still.matches
      ? target
      : position + (target - position) * (1 - Math.exp(-dt / 0.22));
    if (Math.abs(position - target) < 0.0001) position = target;
    draw();
    if (position === target && root.dataset.phase !== 'ready') commit();
    if (touring && !still.matches && position === target) {
      idle += dt;
      if (idle > (committed === 0 ? 4 : 6))
        choose((chosen + 1) % retrievalSamples.length, false);
    }
    frame =
      visible &&
      !document.hidden &&
      (touring || position !== retrievalResult(chosen).position)
        ? requestAnimationFrame(tick)
        : 0;
    if (!frame) root.dataset.animating = 'false';
  };
  function run() {
    if (!frame && visible && !document.hidden) {
      last = 0;
      root.dataset.animating = 'true';
      frame = requestAnimationFrame(tick);
    }
  }
  const pauseTour = () => {
    touring = false;
    updateTourButton();
  };
  select.disabled = false;
  tourButton.disabled = false;
  updateTourButton();
  draw();
  select.addEventListener('change', () => {
    pauseTour();
    choose(Number(select.value), true);
  });
  select.addEventListener('focus', pauseTour);
  root.addEventListener('pointerenter', pauseTour);
  tourButton.addEventListener('click', () => {
    touring = !touring && !still.matches;
    idle = 0;
    updateTourButton();
    run();
  });
  new IntersectionObserver(
    (entries) => {
      visible = entries[entries.length - 1].isIntersecting;
      if (visible) run();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
        root.dataset.animating = 'false';
      }
    },
    { threshold: 0.05 },
  ).observe(root);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
      root.dataset.animating = 'false';
    } else run();
  });
  still.addEventListener('change', () => {
    if (still.matches) {
      pauseTour();
      position = retrievalResult(chosen).position;
      draw();
      commit();
    }
    run();
  });
}
