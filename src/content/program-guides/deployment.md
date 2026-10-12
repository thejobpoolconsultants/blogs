---
title: 'How a Forward Deployed Engineer Turns a Customer Problem into a Working System.'
status: draft
---

A fictional operations team says it cannot find current internal procedures. “Build an AI assistant” is one possible implementation, but it is not yet a problem definition. A forward deployed engineer needs to understand the workflow, available information and how the customer will judge a useful result.

## Agree on the problem before choosing the technology

Ask which users are affected, which questions recur, where procedures live and who maintains them. Define the scope in terms the team can check. In this example, the first deliverable is a problem brief for procedure lookup, not a promise that AI will save a certain number of hours.

Next assess the data: document owners, current versions, permissions and integration access. If procedures are incomplete, discovery changes the plan. Narrow the prototype to complete approved sections, record uncovered questions and ask the owners to resolve missing coverage.

## Define acceptance before prototyping

The fictional team agrees on ten lookup questions. Answers must cite the correct current section. Unsupported questions must say evidence is missing, and denied documents must remain unavailable. These are authored acceptance criteria, not measured customer results.

An engineer can then prototype a small search-and-answer workflow. Keep the interface modest and show the source alongside the response. Review each acceptance failure with the team: it may reveal stale content, a misunderstood workflow, retrieval failure or an incorrect answer.

## Integration and deployment are separate deliverables

A prototype on a laptop does not establish that the system fits the customer’s environment. Define identity, document-refresh contracts, supported interfaces, operational logs, service ownership and rollback. Specify the validation process after integration rather than treating deployment as the final proof.

The walkthrough shows six artifacts: problem statement, data assessment, acceptance criteria, prototype, deployment plan and validation report. A new discovery finding can affect several artifacts, not just the model prompt. Selecting incomplete data makes that change explicit.

## Exercise: write a brief and test a tiny prototype

Use the supplied CPU-only procedure-search example with Python 3.10 or later. Its approved sample collection contains fictional sections. It returns a matched reference or a missing-evidence result, and an acceptance test checks both. It is a keyword prototype, not a language model or a production search system.

Write a one-page brief naming a user, a lookup problem and three acceptance questions. Replace the sample collection with approved fictional data; do not enter customer secrets. Add an unanswerable question and a permission-denied document. Record actual test results and limits.

The [Python unittest documentation](https://docs.python.org/3/library/unittest.html) describes a standard tool for executable checks. You can also record a manual acceptance table, provided it identifies the input, expected result, observed result and evidence.

## Report what was established

A validation report should explain which agreed checks passed, which failed and which integration questions remain. Time savings or business impact need a baseline and an agreed measurement method. No such result is asserted here.

The verified program source names this pathway Forward Deployed Engineering. Confirm any updated lesson list, prerequisites or renamed offering with the team before treating this educational example as official course information.
