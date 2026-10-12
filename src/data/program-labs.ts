/** All numbers below are authored teaching inputs, never device benchmarks. */
export function weightStorage(parametersBillion: number, bits: number) {
  const bytes = (parametersBillion * 1e9 * bits) / 8;
  return { bytes, gb: bytes / 1e9, gib: bytes / 2 ** 30 };
}
export function servingTimeline(batch: boolean) {
  const arrivals = [0, 1, 2, 3];
  let clock = 0;
  const requests = arrivals.map((arrival, i) => {
    const start = batch ? 3 : Math.max(clock, arrival);
    const finish = batch ? 11 : start + 5;
    clock = finish;
    return {
      id: i + 1,
      arrival,
      start,
      finish,
      wait: start - arrival,
      latency: finish - arrival,
    };
  });
  const makespan = Math.max(...requests.map((r) => r.finish));
  return {
    requests,
    makespan,
    throughput: (requests.length / makespan) * 1000,
    meanLatency:
      requests.reduce((sum, r) => sum + r.latency, 0) / requests.length,
  };
}
export type Point = [number, number];
export const navigationObstacles: Point[] = [
  [1, 1],
  [2, 1],
  [1, 3],
];
export function plannedRoute(obstacles: Point[] = navigationObstacles) {
  const queue: Point[][] = [[[0, 0]]];
  const seen = new Set(['0,0']);
  while (queue.length) {
    const route = queue.shift()!;
    const [x, y] = route[route.length - 1];
    if (x === 3 && y === 3) return route;
    for (const [dx, dy] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]) {
      const next: Point = [x + dx, y + dy];
      const key = next.join(',');
      if (
        next.some((v) => v < 0 || v > 3) ||
        seen.has(key) ||
        obstacles.some((p) => p[0] === next[0] && p[1] === next[1])
      )
        continue;
      seen.add(key);
      queue.push([...route, next]);
    }
  }
  return [];
}
export function seededTraining(seed = 17, episodes = 80) {
  let state = seed >>> 0;
  const random = () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
  const q = Array.from({ length: 16 }, () => [0, 0, 0, 0]);
  const returns: number[] = [];
  const actions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  for (let episode = 0; episode < episodes; episode++) {
    let x = 0,
      y = 0,
      total = 0;
    for (let step = 0; step < 40; step++) {
      const index = y * 4 + x;
      const action =
        random() < 0.25
          ? Math.floor(random() * 4)
          : q[index].indexOf(Math.max(...q[index]));
      const nx = x + actions[action][0],
        ny = y + actions[action][1];
      const blocked =
        nx < 0 ||
        ny < 0 ||
        nx > 3 ||
        ny > 3 ||
        navigationObstacles.some((p) => p[0] === nx && p[1] === ny);
      const nextX = blocked ? x : nx,
        nextY = blocked ? y : ny;
      const goal = nextX === 3 && nextY === 3;
      const reward = goal ? 19 : blocked ? -5 : -1;
      const target =
        reward + (goal ? 0 : 0.9 * Math.max(...q[nextY * 4 + nextX]));
      q[index][action] += 0.5 * (target - q[index][action]);
      x = nextX;
      y = nextY;
      total += reward;
      if (goal) break;
    }
    returns.push(total);
  }
  return { seed, episodes, returns, q };
}
export function roofline(intensity: number, peak = 100, bandwidth = 10) {
  return Math.min(peak, bandwidth * intensity);
}
