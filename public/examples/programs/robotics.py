"""Discrete navigation simulation with known and incomplete maps."""
from collections import deque

OBSTACLES = {(1, 1), (2, 1), (1, 3)}


def plan(obstacles=OBSTACLES):
    queue = deque([[(0, 0)]])
    seen = {(0, 0)}
    while queue:
        route = queue.popleft()
        x, y = route[-1]
        if (x, y) == (3, 3):
            return route
        for dx, dy in [(1, 0), (0, 1), (-1, 0), (0, -1)]:
            cell = x + dx, y + dy
            if all(0 <= v < 4 for v in cell) and cell not in seen | obstacles:
                seen.add(cell)
                queue.append(route + [cell])
    return []


def follow(route, actual_obstacles):
    result = []
    for cell in route:
        if cell in actual_obstacles:
            break
        result.append(cell)
    return result


if __name__ == "__main__":
    route = plan()
    stopped = follow(route, OBSTACLES | {(2, 0)})
    assert len(route) == 7 and route[-1] == (3, 3)
    assert stopped[-1] == (1, 0)
    assert not plan(OBSTACLES | {(3, 2), (2, 3)})
    print("Coordinates are cells; four-direction moves; instantaneous stop.")
    print("Planned:", route)
    print("Actual, incomplete map:", stopped)
    print("This does not demonstrate physical robot safety.")
