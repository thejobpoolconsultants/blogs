"""Reproduces the browser's tabular Q-learning returns without dependencies."""
import json


def train(seed=17, episodes=80):
    state = seed

    def random():
        nonlocal state
        state = (1664525 * state + 1013904223) & 0xffffffff
        return state / 2**32

    q = [[0.0] * 4 for _ in range(16)]
    returns = []
    actions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
    obstacles = {(1, 1), (2, 1), (1, 3)}
    for _ in range(episodes):
        x, y, total = 0, 0, 0
        for _ in range(40):
            index = y * 4 + x
            action = int(random()*4) if random() < .25 else q[index].index(max(q[index]))
            nx, ny = x + actions[action][0], y + actions[action][1]
            blocked = not (0 <= nx < 4 and 0 <= ny < 4) or (nx, ny) in obstacles
            if blocked:
                nx, ny = x, y
            goal = (nx, ny) == (3, 3)
            reward = 19 if goal else -5 if blocked else -1
            target = reward + (0 if goal else .9 * max(q[ny*4+nx]))
            q[index][action] += .5 * (target - q[index][action])
            x, y = nx, ny
            total += reward
            if goal:
                break
        returns.append(total)
    return returns


if __name__ == "__main__":
    values = train()
    assert values == train() and len(values) == 80
    print(json.dumps({"algorithm": "tabular Q-learning", "seed": 17,
                      "episodes": 80, "step_cap": 40, "alpha": .5,
                      "gamma": .9, "epsilon": .25, "returns": values}))
