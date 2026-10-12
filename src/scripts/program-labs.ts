import {
  weightStorage,
  servingTimeline,
  plannedRoute,
  navigationObstacles,
  roofline,
  type Point,
} from '../data/program-labs';
const text = (root: HTMLElement, selector: string, value: string) => {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
};
export function mountProgramLabs() {
  for (const root of document.querySelectorAll<HTMLElement>('[data-lab]')) {
    if (root.dataset.mounted) continue;
    root.dataset.mounted = 'true';
    const output = (value: string) => text(root, '.scenario-output', value);
    const updateWeights = () => {
      const count = Number(
        root.querySelector<HTMLSelectElement>('[data-parameters]')?.value || 7,
      );
      const bits = Number(
        root.querySelector<HTMLSelectElement>('[data-bits]')?.value || 16,
      );
      for (const bit of [32, 16, 8, 4]) {
        const value = weightStorage(count, bit);
        text(
          root,
          '[data-weight-value="' + bit + '"]',
          value.gb.toFixed(2) + ' GB / ' + value.gib.toFixed(2) + ' GiB',
        );
        const bar = root.querySelector<HTMLElement>(
          '[data-weight-bar="' + bit + '"]',
        );
        if (bar) bar.style.width = (bit / 32) * 100 + '%';
      }
      const selected = weightStorage(count, bits);
      text(
        root,
        '[data-weight-output]',
        count +
          ' billion × ' +
          bits +
          ' bits ÷ 8 = ' +
          selected.gb.toFixed(2) +
          ' GB / ' +
          selected.gib.toFixed(2) +
          ' GiB. Bar scale: selected count at 32-bit = 100%.',
      );
    };
    root.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      if (target.matches('[data-parameters], [data-bits]')) updateWeights();
      if (target.matches('[data-intensity]')) {
        const intensity = Number(target.value);
        text(
          root,
          '[data-roof-output]',
          intensity +
            ' FLOP/byte × 10 GB/s, capped at 100 GFLOP/s = ' +
            roofline(intensity) +
            ' GFLOP/s ceiling; ' +
            (intensity < 10
              ? 'limited by data movement.'
              : intensity === 10
                ? 'at the meeting point of the two ceilings.'
                : 'limited by the compute ceiling.'),
        );
      }
      if (target.matches('[data-constraint]')) {
        const statements: Record<string, string> = {
          autonomy:
            'Team autonomy: examine the application teams’ release dependencies and support ownership. Neither design removes the need for a shared data contract.',
          residency:
            'Data residency: inspect the shared data service, deployment region and each application’s access boundary. A shared platform may need regional instances; team-owned systems still need an explicit data policy.',
          integration:
            'Integration complexity: inspect application → interface → shared data dependencies. A common interface can reduce duplicated integration, while coupling teams to its release and availability.',
        };
        output(statements[target.value]);
        const affected: Record<string, string[]> = {
          autonomy: ['applications', 'interface'],
          residency: ['data', 'platform'],
          integration: ['applications', 'interface', 'data'],
        };
        root
          .closest('.teaching-grid')
          ?.querySelectorAll<HTMLElement>('[data-system]')
          .forEach((node) => {
            node.dataset.affected = String(
              affected[target.value].includes(node.dataset.system || ''),
            );
          });
      }
      if (target.matches('[data-delivery]')) updateDelivery();
    });
    let missingData = false;
    const updateDelivery = () => {
      const stage = Number(
        root.querySelector<HTMLSelectElement>('[data-delivery]')?.value || 0,
      );
      const stages = [
        'Problem statement: procedure lookup is difficult. Confirm which users need which documents and how a useful answer will be checked.',
        'Data assessment: inventory current procedures, owners, access rules and update dates. Exclude personal or unapproved records.',
        'Acceptance criteria: ten agreed lookup questions must cite the correct current section; unsupported questions must say evidence is missing; denied documents must stay unavailable.',
        'Prototype: use a small approved collection, document references and a missing-evidence response. Review errors with the operations team.',
        'Deployment plan: name the service owner, integration contract, access controls, logging, rollback and document-refresh process.',
        'Validation report: record each acceptance check, observed failures and unresolved integration limits. Do not claim time savings without a baseline.',
      ];
      output(
        stages[stage] +
          (missingData
            ? ' Discovery finding: procedures are incomplete. Narrow the prototype to approved complete sections, request owner review, and record missing coverage before expanding.'
            : ' Approved sample data is available for this hypothetical walkthrough.'),
      );
      root
        .closest('.detail-section')
        ?.querySelectorAll<HTMLElement>('.workflow-steps li')
        .forEach((item, index) => {
          item.dataset.affected = String(index === stage);
        });
    };
    root.addEventListener('click', (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
        'button',
      );
      if (!button) return;
      button.parentElement
        ?.querySelectorAll('button')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      if (button.dataset.scenario) {
        const outcomes: Record<string, string> = {
          evidence:
            'Evidence available: cite Sample remote-work policy §1. A draft may be prepared for manager review; retrieval does not grant permission to submit it.',
          missing:
            'Missing evidence: no permitted passage answers whether overseas remote work is allowed. Explain the gap and ask the policy owner. Do not reuse a different rule as proof.',
          denied:
            'Denied action: the caller has draft permission but no submit permission. The application’s tool authorization check blocks submission before execution. Nothing is sent.',
        };
        output(outcomes[button.dataset.scenario]);
      }
      if (button.dataset.policy) {
        const batch = button.dataset.policy === 'batch';
        const simulation = servingTimeline(batch);
        root
          .querySelectorAll<HTMLElement>('.request-track')
          .forEach((track, i) => {
            const r = simulation.requests[i];
            const wait = track.querySelector<HTMLElement>('.request-wait')!;
            const compute =
              track.querySelector<HTMLElement>('.request-compute')!;
            wait.style.left = (r.arrival / 20) * 100 + '%';
            wait.style.width = (r.wait / 20) * 100 + '%';
            compute.style.left = (r.start / 20) * 100 + '%';
            compute.style.width = ((r.finish - r.start) / 20) * 100 + '%';
            track.setAttribute(
              'aria-label',
              'Arrives ' +
                r.arrival +
                ' ms, waits ' +
                r.wait +
                ' ms, processes ' +
                (r.finish - r.start) +
                ' ms, completes ' +
                r.finish +
                ' ms',
            );
          });
        text(
          root,
          '[data-timeline-output]',
          (batch ? 'Batch of four: ' : 'Individual: ') +
            simulation.throughput.toFixed(2) +
            ' requests/s; mean latency ' +
            simulation.meanLatency.toFixed(2) +
            ' ms; first response ' +
            simulation.requests[0].finish +
            ' ms. Calculated from this finite workload. ' +
            (batch
              ? 'Higher throughput here, but the first request waits longer.'
              : 'Each request starts when the worker is free.'),
        );
      }
      if (button.dataset.map) {
        const mode = button.dataset.map;
        const obstacles: Point[] =
          mode === 'moved'
            ? [
                [1, 0],
                [2, 1],
                [1, 3],
              ]
            : mode === 'missing'
              ? [...navigationObstacles, [2, 0]]
              : [...navigationObstacles];
        const plan = plannedRoute(
          mode === 'missing' ? navigationObstacles : obstacles,
        );
        const actual: Point[] = [];
        for (const cell of plan) {
          if (obstacles.some((p) => p[0] === cell[0] && p[1] === cell[1]))
            break;
          actual.push(cell);
        }
        const coordinates = (p: Point[]) =>
          p.map(([x, y]) => 65 + x * 55 + ',' + (230 - y * 55)).join(' ');
        root
          .querySelector('[data-route]')
          ?.setAttribute('points', coordinates(plan));
        root
          .querySelector('[data-actual]')
          ?.setAttribute('points', coordinates(actual));
        const group = root.querySelector('[data-obstacles]');
        group?.replaceChildren(
          ...obstacles.map(([x, y]) => {
            const rect = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'rect',
            );
            for (const [key, value] of Object.entries({
              x: 40 + x * 55,
              y: 205 - y * 55,
              width: 50,
              height: 50,
              fill: '#d97706',
            }))
              rect.setAttribute(key, String(value));
            return rect;
          }),
        );
        output(
          (mode === 'missing'
            ? 'Incomplete map: an unrecorded obstacle at (2,0) stops the simulated robot. '
            : 'Recomputed breadth-first route using the selected map. ') +
            'Plan: ' +
            plan.map((p) => '(' + p.join(',') + ')').join(' → ') +
            '. Simulated trajectory: ' +
            actual.map((p) => '(' + p.join(',') + ')').join(' → ') +
            '. Violet dashes = plan; teal = actual.',
        );
      }
      if (button.dataset.reward)
        output(
          button.dataset.reward === 'steps'
            ? 'Poor reward example: +1 for every step, +5 extra at the goal. A fixed 40-step loop without reaching the goal returns 40; a six-step completion returns 11. That reward favors delay. These are calculated policy rollouts, not newly trained agents.'
            : 'With −1 per move and +20 at the goal, a six-move route returns 14. Finishing sooner avoids extra movement penalties.',
        );
      if (button.dataset.access) {
        const outcomes: Record<string, string> = {
          read: 'Authenticated employee, GET procedures: policy allows the read. Route to procedure service → model context → answer; observability records the decision.',
          write:
            'Authenticated employee, POST procedure update: authorization middleware denies the operation because the caller lacks publisher permission. The request stops before the procedure service; authentication succeeded.',
          anonymous:
            'No valid identity: authentication rejects the request before authorization and routing. This differs from an authenticated caller being denied an operation.',
        };
        output(outcomes[button.dataset.access]);
      }
      if (button.dataset.finding) {
        missingData = button.dataset.finding === 'missing';
        updateDelivery();
      }
    });
  }
}
