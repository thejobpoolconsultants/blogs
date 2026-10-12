---
title: 'How AI Assistants Work with Knowledge and Tools.'
status: draft
---

An operations employee asks, “What approval do I need to request remote work?” A useful assistant should find the current policy, show the supporting section and explain what can happen next. A fluent answer alone is not enough: the employee needs evidence, and the application must control any action.

## Knowledge arrives through a separate preparation process

First, a document owner approves the sample policy for use. The application splits it into passages, preserves document and section identifiers, and builds a searchable index. Access metadata travels with each passage. When the employee asks a question, the application searches only the material that employee may read.

Retrieval-augmented generation, often shortened to RAG, supplies retrieved material as context for generation. The foundational [RAG paper](https://arxiv.org/abs/2005.11401) describes combining a language model with retrieved external information. Our small example illustrates request-time retrieval, not the paper’s training procedure. Searching an index does not update the model’s weights.

## Evidence supports an answer; it does not authorize an action

Our fictional policy §1 requires manager review. The assistant may answer that a request can be prepared, while approval still needs review. Its reference should point to §1, and that section should actually support the claim. A reference attached to an unrelated sentence is not evidence.

A draft tool can prepare a local request. A submission tool changes the outside world. The application must independently check the caller’s permission before executing that tool. Neither retrieved text nor a model’s proposed tool call grants permission. The policy check belongs in application code.

In the explainer, try the missing-evidence and denied-action scenarios. An overseas-work question has no supporting passage in this sample; the useful response states the gap and asks the policy owner. A caller allowed to draft but forbidden to submit receives a denied action. These are authored outcomes, not live model responses.

## Build a small evaluation before adding autonomy

Create two approved policy paragraphs and five test questions: two answerable questions, an ambiguous question, a missing-policy question and an action the user may not perform. For each answerable question, write the expected supporting section before asking a model to answer.

Record three checks separately: did retrieval find the right permitted passage, did the answer stay within that evidence, and did the tool authorization behave correctly? This separates a search failure from a generation failure or an access-control failure.

## Exercise: audit a referenced answer

Give a partner the fictional policy and the sentence “All remote-work requests are automatically approved, source §1.” Ask them to highlight the words the passage supports. They should reject “automatically approved.” Rewrite the answer and record the exact section. Then write a tool policy allowing draft creation and denying submission. Test both operations without sending a real request.

This exercise needs only a text editor. An optional implementation can use a small local index, but it should preserve the same reference and permission checks. Document coverage can be incomplete, stale or inaccessible, and a grounded-looking answer can still be wrong.

Continue with retrieval foundations before agent orchestration. The project example below expands the exercise into an assistant with an evaluation set and explicit tool permissions; confirm current program requirements with the team.
