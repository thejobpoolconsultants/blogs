import {
  programExplainers,
  demonstrationState,
  servingSimulation,
  navigationReplay,
  architectureScenario,
  acceptanceChecks,
  type ProgramKind,
} from '../data/program-explainers';

interface MotionFrame {
  parts: { name: string; svg: string }[];
  order: string[];
}
interface MotionAsset {
  sequences: MotionFrame[][];
}
interface TweenAttribute {
  target: Element;
  name: string;
  pieces: string[];
  values: number[];
}
const svgNumber = /-?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?/gi;

export function mountProgramDemonstrations() {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  for (const root of document.querySelectorAll<HTMLElement>(
    '[data-program-demo]',
  )) {
    if (root.dataset.mounted) continue;
    root.dataset.mounted = 'true';
    const kind = root.dataset.programDemo as ProgramKind;
    const demo = programExplainers[kind];
    const controls = root.querySelector<HTMLElement>('.mechanism-controls')!;
    const select = root.querySelector<HTMLSelectElement>('[data-demo-choice]')!;
    const replay = root.querySelector<HTMLButtonElement>('[data-demo-replay]')!;
    const reset = root.querySelector<HTMLButtonElement>('[data-demo-reset]')!;
    const title = root.querySelector<HTMLElement>('[data-demo-title]')!;
    const result = root.querySelector<HTMLElement>('[data-demo-result]')!;
    const hint = root.querySelector<HTMLElement>('.mechanism-hint')!;
    const parent = root.querySelector<SVGGElement>('[data-anatomy-parts]')!;
    const parts = [...parent.children] as SVGGElement[];
    const byName = new Map(parts.map((part) => [part.dataset.partName!, part]));
    const initialMarkup = new Map(
      parts.map((part) => [part.dataset.partName!, part.innerHTML]),
    );
    const initialOrder = parts.map((part) => part.dataset.partName!);
    const axes = JSON.parse(root.dataset.axes!) as number[][];
    let choice = 0,
      requestId = 0,
      running = false,
      inView = false,
      elapsed = 0,
      lastTime = 0;
    let tick: ((seconds: number) => boolean) | undefined;
    let asset: Promise<MotionAsset> | undefined;
    let token = 0,
      frameIndex = -1;

    function say(text: string, heading?: string) {
      result.textContent = text;
      if (heading) title.textContent = heading;
    }
    function stop() {
      cancelAnimationFrame(requestId);
      requestId = 0;
      running = false;
      root.dataset.running = 'false';
      replay.textContent = reduced.matches ? 'Show result' : 'Replay';
    }
    function restore() {
      for (const part of parts) {
        part.innerHTML = initialMarkup.get(part.dataset.partName!)!;
        part.removeAttribute('transform');
      }
      for (const name of initialOrder) parent.append(byName.get(name)!);
      frameIndex = -1;
      root.dataset.frame = '0';
    }
    function paintState() {
      const state = demonstrationState(kind, choice);
      root.dataset.choice = String(choice);
      select.value = String(choice);
      say(state.text, state.title);
      for (const part of parts) {
        const name = part.dataset.partName!;
        const active = state.active.some((prefix) => name.startsWith(prefix));
        part.classList.toggle('mechanism-active', active);
        part.classList.toggle(
          'mechanism-muted',
          !active && !name.startsWith('stand.'),
        );
        part.classList.remove(
          'mechanism-failed',
          'mechanism-hidden',
          'mechanism-route',
        );
      }
      root
        .querySelectorAll<SVGGElement>('[data-screen-document]')
        .forEach((screen) => {
          screen.style.opacity =
            screen.dataset.screenDocument === String(choice % 3) ? '1' : '0';
        });
      hint.textContent = demo.hint;
      if (kind === 'research') {
        const path = navigationReplay(choice).positions;
        for (const [col, row] of path)
          byName
            .get(`field.tile-${row}-${col}`)
            ?.classList.add('mechanism-route');
      }
      if (kind === 'cloud') {
        if (choice === 1)
          for (const part of parts.filter((p) =>
            p.dataset.partName!.startsWith('access'),
          ))
            part.classList.add('mechanism-failed');
        if (choice === 2)
          for (const part of parts.filter((p) =>
            p.dataset.partName!.startsWith('service-0'),
          ))
            part.classList.add('mechanism-failed');
      }
      if (kind === 'performance') {
        for (const part of parts.filter((p) =>
          p.dataset.partName!.startsWith('request-'),
        ))
          part.classList.toggle(
            'mechanism-hidden',
            choice === 0 && part.dataset.partName !== 'request-0-0',
          );
      }
      if (kind === 'leadership') {
        const demand =
          root.querySelector<HTMLSelectElement>('[data-demo-demand]')!;
        const budget =
          root.querySelector<HTMLSelectElement>('[data-demo-budget]')!;
        const resilient = root.querySelector<HTMLInputElement>(
          '[data-demo-resilience]',
        )!;
        demand.value = choice === 1 ? '4' : '2';
        budget.value = choice === 0 ? '6' : '8';
        resilient.checked = choice === 2;
        paintArchitecture();
      }
      paintCooling();
    }
    function paintCooling() {
      if (kind !== 'infrastructure') return;
      const cooling = root.querySelector<HTMLInputElement>(
        '[data-demo-cooling]',
      )!;
      for (const part of parts.filter((p) =>
        p.dataset.partName!.startsWith('cooling'),
      )) {
        part.classList.toggle('mechanism-muted', !cooling.checked);
        part.classList.toggle('mechanism-active', cooling.checked);
      }
      const state = demonstrationState(kind, choice);
      say(
        `${state.text} ${cooling.checked ? 'Cooling highlighted: the fins and fan carry heat away.' : 'Cooling hidden from emphasis: removing heat is still a required infrastructure role.'}`,
      );
    }
    function paintArchitecture() {
      if (kind !== 'leadership') return;
      const demand = Number(
        root.querySelector<HTMLSelectElement>('[data-demo-demand]')!.value,
      );
      const budget = Number(
        root.querySelector<HTMLSelectElement>('[data-demo-budget]')!.value,
      );
      const resilient = root.querySelector<HTMLInputElement>(
        '[data-demo-resilience]',
      )!.checked;
      const scenario = architectureScenario(demand, budget, resilient);
      say(scenario.text);
      for (let tray = 0; tray < 3; tray++) {
        const count = [
          scenario.application,
          scenario.data,
          scenario.infrastructure,
        ][tray];
        for (let row = 0; row < 3; row++)
          for (let col = 0; col < 2; col++) {
            const part = byName.get(`capacity-${tray}.token-${row}-${col}`)!;
            part.classList.toggle('mechanism-hidden', row * 2 + col >= count);
            part.classList.remove('mechanism-muted');
          }
      }
      for (const part of parts.filter((p) =>
        p.dataset.partName!.startsWith('constraint'),
      ))
        part.classList.toggle('mechanism-failed', scenario.shortfall > 0);
    }
    function drawFrame(frame: MotionFrame, index: number) {
      if (frameIndex === index) return;
      frameIndex = index;
      root.dataset.frame = String(index);
      for (const part of frame.parts)
        byName.get(part.name)!.innerHTML = part.svg;
      for (const name of frame.order) parent.append(byName.get(name)!);
    }
    async function frames() {
      asset ??= fetch(root.dataset.motionUrl!).then((response) => {
        if (!response.ok) throw new Error('Motion asset unavailable');
        return response.json() as Promise<MotionAsset>;
      });
      return asset;
    }
    function frameLoop(time: number) {
      requestId = 0;
      if (!running || !inView || document.hidden) return;
      elapsed += Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      if (!tick?.(elapsed)) {
        stop();
        return;
      }
      requestId = requestAnimationFrame(frameLoop);
    }
    function start(update: (seconds: number) => boolean) {
      stop();
      tick = update;
      elapsed = 0;
      running = true;
      root.dataset.running = String(inView && !document.hidden);
      replay.textContent = 'Pause';
      lastTime = performance.now();
      if (inView && !document.hidden)
        requestId = requestAnimationFrame(frameLoop);
    }
    async function animateMechanism() {
      const requestToken = ++token;
      replay.disabled = true;
      try {
        const data = await frames();
        if (requestToken !== token) return;
        const sequence = data.sequences[kind === 'research' ? choice : 0];
        if (kind === 'cloud' && choice === 1) {
          drawFrame(sequence[0], 0);
          return;
        }
        const duration =
          kind === 'research'
            ? navigationReplay(choice).moves * 0.45
            : kind === 'cloud'
              ? 2.4
              : 4.5;
        if (reduced.matches) {
          drawFrame(sequence.at(-1)!, sequence.length - 1);
          return;
        }
        // Prebuilt paths have identical topology. Interpolate projected coordinates
        // on existing nodes: translations and the telescoping wrist stay smooth,
        // without reparsing or replacing SVG during animation.
        const compiled = new Map<MotionFrame, TweenAttribute[]>();
        function compile(frame: MotionFrame) {
          if (compiled.has(frame)) return compiled.get(frame)!;
          const attributes: TweenAttribute[] = [];
          for (const part of frame.parts) {
            const source = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'svg',
            );
            source.innerHTML = part.svg;
            const nodes = [...source.querySelectorAll('path,circle')];
            const targets = [
              ...byName.get(part.name)!.querySelectorAll('path,circle'),
            ];
            if (nodes.length !== targets.length)
              throw new Error('Motion topology mismatch');
            nodes.forEach((node, index) => {
              for (const name of ['d', 'cx', 'cy', 'r']) {
                const value = node.getAttribute(name);
                if (value === null) continue;
                attributes.push({
                  target: targets[index],
                  name,
                  pieces: value.split(svgNumber),
                  values: [...value.matchAll(svgNumber)].map((match) =>
                    Number(match[0]),
                  ),
                });
              }
            });
          }
          compiled.set(frame, attributes);
          return attributes;
        }
        function blend(cursor: number) {
          const lo = Math.floor(cursor),
            hi = Math.ceil(cursor),
            mix = cursor - lo;
          const first = compile(sequence[lo]),
            second = compile(sequence[hi]);
          first.forEach((attribute, index) => {
            const next = second[index];
            if (
              !next ||
              next.values.length !== attribute.values.length ||
              next.pieces.join('|') !== attribute.pieces.join('|')
            )
              throw new Error('Motion path mismatch');
            let value = attribute.pieces[0];
            attribute.values.forEach((number, i) => {
              value +=
                (number + (next.values[i] - number) * mix).toFixed(3) +
                attribute.pieces[i + 1];
            });
            attribute.target.setAttribute(attribute.name, value);
          });
          const nearest = Math.round(cursor);
          if (frameIndex !== nearest)
            for (const name of sequence[nearest].order)
              parent.append(byName.get(name)!);
          frameIndex = nearest;
          root.dataset.frame = String(nearest);
          root.dataset.tween = 'true';
        }
        blend(0);
        start((seconds) => {
          const progress = Math.min(1, seconds / duration);
          const smooth = (1 - Math.cos(progress * Math.PI)) / 2;
          blend(smooth * (sequence.length - 1));
          hint.textContent =
            kind === 'cloud'
              ? 'Permission granted → gate opens → request passes'
              : progress === 1
                ? kind === 'robotics'
                  ? 'Amber block placed in the matching bin'
                  : 'Fixed policy replay complete'
                : kind === 'robotics'
                  ? 'Observe → lift → move → place'
                  : 'Replaying decisions; no live training';
          return progress < 1;
        });
      } catch {
        say(
          `${demonstrationState(kind, choice).text} The static explanation remains available; replay could not load.`,
        );
      } finally {
        replay.disabled = false;
      }
    }
    function animatePerformance() {
      const simulation = servingSimulation(choice === 1);
      const movers = parts.filter((part) =>
        part.hasAttribute('data-moving-selector'),
      );
      const offsets = movers.map((part) => Number(part.dataset.sortLift));
      function draw(ms: number) {
        const batch = choice === 1;
        const progress = batch
          ? Math.max(0, Math.min(1, (ms - 3) / 8))
          : Math.min(1, (ms % 5) / 4);
        const settled = ms >= simulation.elapsed;
        const amount = settled ? 1 : (1 - Math.cos(progress * Math.PI)) / 2;
        movers.forEach((part) =>
          part.setAttribute(
            'transform',
            `translate(${axes[0][0] * 84 * amount} ${axes[0][1] * 84 * amount})`,
          ),
        );
        const keys = new Map(
          parts.map((part) => [
            part,
            Number(part.dataset.sortKey) +
              (movers.includes(part)
                ? offsets[movers.indexOf(part)] * amount
                : 0),
          ]),
        );
        for (const part of [...parts].sort(
          (a, b) => keys.get(a)! - keys.get(b)!,
        ))
          parent.append(part);
        const completed = simulation.completions.filter(
          (time) => time <= ms,
        ).length;
        for (let i = 0; i < 4; i++)
          byName
            .get(`output.request-${i}`)!
            .classList.toggle('mechanism-hidden', i >= completed);
        hint.textContent = `Simulated replay · ${Math.min(ms, simulation.elapsed).toFixed(0)} ms · ${completed}/4 complete`;
        root.dataset.frame = String(Math.round(ms));
      }
      if (reduced.matches) {
        draw(simulation.elapsed);
        return;
      }
      draw(0);
      start((seconds) => {
        const ms = Math.min(simulation.elapsed, seconds * 5);
        draw(ms);
        return ms < simulation.elapsed;
      });
    }
    function replayStages() {
      if (reduced.matches) {
        if (kind === 'deployment')
          say(
            acceptanceChecks(choice)
              .map(
                (check) =>
                  `${check.passed ? 'Pass' : 'Fail'}: ${check.criterion} = ${check.actual}`,
              )
              .join('; ') + '.',
            'Acceptance checks',
          );
        else if (kind === 'leadership') paintArchitecture();
        else if (kind === 'infrastructure') paintCooling();
        else {
          choice = demo.states.length - 1;
          paintState();
        }
        return;
      }
      if (kind === 'deployment') {
        const checks = acceptanceChecks(choice);
        const steps = [
          `Connect the ${choice ? 'Returns' : 'Orders'} source for this customer need.`,
          `Run the prototype against the connected sample record. Verify the returned ID, status and source.`,
          checks
            .map(
              (check) =>
                `${check.passed ? 'Pass' : 'Fail'}: ${check.criterion} = ${check.actual}`,
            )
            .join('; ') + '.',
        ];
        let stage = -1;
        start((seconds) => {
          const next = Math.min(2, Math.floor(seconds / 1.5));
          if (next !== stage) {
            stage = next;
            say(
              steps[stage],
              ['Connect source', 'Run prototype', 'Acceptance checks'][stage],
            );
            for (const part of parts.filter((p) =>
              p.dataset.partName!.startsWith('acceptance'),
            ))
              part.classList.toggle('mechanism-muted', stage < 2);
          }
          return seconds < 4.5;
        });
        return;
      }
      let stage = -1;
      start((seconds) => {
        const next = Math.min(
          demo.states.length - 1,
          Math.floor(seconds / 1.6),
        );
        if (next !== stage) {
          stage = next;
          choice = stage;
          paintState();
        }
        return seconds < demo.states.length * 1.6;
      });
    }
    function play() {
      if (running) {
        stop();
        return;
      }
      restore();
      paintState();
      if (kind === 'robotics' || kind === 'research' || kind === 'cloud') {
        if (kind === 'robotics') {
          choice = 2;
          paintState();
        }
        void animateMechanism();
      } else if (kind === 'performance') animatePerformance();
      else replayStages();
    }
    function choose() {
      token++;
      stop();
      restore();
      choice = Number(select.value);
      paintState();
      if (
        (kind === 'robotics' && choice === 2) ||
        kind === 'research' ||
        kind === 'cloud'
      )
        void animateMechanism();
      else if (kind === 'performance') animatePerformance();
    }
    select.addEventListener('change', choose);
    replay.addEventListener('click', play);
    reset.addEventListener('click', () => {
      token++;
      stop();
      restore();
      choice = 0;
      select.value = '0';
      root
        .querySelector<HTMLInputElement>('[data-demo-cooling]')
        ?.setAttribute('checked', '');
      const cooling = root.querySelector<HTMLInputElement>(
        '[data-demo-cooling]',
      );
      if (cooling) cooling.checked = true;
      paintState();
    });
    root
      .querySelector('[data-demo-cooling]')
      ?.addEventListener('change', paintCooling);
    for (const input of root.querySelectorAll(
      '[data-demo-demand],[data-demo-budget],[data-demo-resilience]',
    ))
      input.addEventListener('change', () => {
        stop();
        paintArchitecture();
      });
    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries[0].isIntersecting;
        if (!inView) {
          cancelAnimationFrame(requestId);
          requestId = 0;
          root.dataset.running = 'false';
        } else if (running && !document.hidden && !requestId) {
          root.dataset.running = 'true';
          lastTime = performance.now();
          requestId = requestAnimationFrame(frameLoop);
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(root);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(requestId);
        requestId = 0;
        root.dataset.running = 'false';
      } else if (running && inView && !requestId) {
        root.dataset.running = 'true';
        lastTime = performance.now();
        requestId = requestAnimationFrame(frameLoop);
      }
    });
    reduced.addEventListener('change', () => {
      token++;
      stop();
      restore();
      paintState();
      replay.textContent = reduced.matches ? 'Show result' : 'Replay';
    });
    controls.hidden = false;
    paintState();
    replay.textContent = reduced.matches ? 'Show result' : 'Replay';
  }
}
