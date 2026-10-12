---
title: 'How Reinforcement Learning Turns Feedback into Better Decisions.'
status: draft
---

An agent in a small grid must choose between moving toward a destination and exploring an unfamiliar direction. It receives feedback after each action. Reinforcement learning studies how such interaction can shape a policy: a rule for choosing actions.

## Define the environment before discussing learning

In this example, state is the agent’s cell. Available actions are right, up, left and down. A blocked move leaves the agent in place. An episode ends at the destination or after forty steps. Each move costs one reward unit; a collision costs four extra units; reaching the goal adds twenty.

An observation is what the agent is given about the environment. Here it sees the full state, but other environments may provide incomplete information. A reward is numerical feedback, not a statement that the action was ethically or practically correct. The policy determines which action to select.

[Gymnasium’s basic usage documentation](https://gymnasium.farama.org/introduction/basic_usage/) demonstrates the separation between reset, actions, observations, rewards and episode termination. Our exercise uses the same conceptual separation without requiring Gymnasium.

## Receiving feedback is not the same as updating a policy

The browser graph runs actual tabular Q-learning with seed 17. It updates an action-value estimate toward the observed reward plus a discounted estimate of future value. The learning rate controls the update size; the discount controls the contribution of future reward. At the terminal goal, there is no future value to bootstrap.

Exploration chooses a random action with probability 0.25; otherwise the agent selects its highest current estimate. It can therefore make a worse choice even after finding a useful route. The recorded eighty episode returns fluctuate. The graph shows generated records, not an attractive invented learning curve.

The [Sutton and Barto textbook](https://mitpress.mit.edu/9780262039246/reinforcement-learning/) develops action values, exploration and temporal-difference learning in detail. This tiny fully observed grid is much simpler than language-model post-training or a research-scale environment.

## A poorly chosen reward can reward the wrong behavior

Switch the reward example to “reward every step.” A fixed forty-step loop earns forty units, while a six-step completion earns eleven under the alternate rule. That objective rewards delay. These comparisons are calculated rollouts of specified policies; switching the button does not train another agent.

## Exercise: reproduce and challenge the result

Run the downloadable CPU-only Python Q-learning example. It uses the same linear-congruential random-number generator and settings as the browser, so seed 17 should reproduce the same eighty returns. Change only the seed, retain the settings, and compare returns without selecting only the most favorable run.

Next change the reward rule and write down the behavior you want before examining the recorded outcome. Report episode caps, collisions, termination and whether the agent reached the goal. A higher return can reflect the reward design rather than a better solution to your intended task.

Build a reproducible experiment with explicit settings, policy comparisons and limitations. Learn probability, programming and experimentation foundations as needed; ask the program team for its current prerequisites rather than treating this exercise as an admission standard.
