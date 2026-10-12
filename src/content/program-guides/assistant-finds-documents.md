---
title: 'How an AI Assistant Finds Answers in Your Documents.'
status: draft
---

You ask an assistant, “What approval do I need to request remote work?” It replies with a confident paragraph. Before trusting it, ask a more useful question: which document supports that answer?

## Documents need preparation before questions arrive

Suppose a fictional organization approves a short remote-work policy for its employees. A preparation process splits the document into passages, keeps section identifiers and builds an index that can be searched. Document access rules belong with those passages.

This is different from answering a request. Preparation happens when documents are added or refreshed. A question later searches the prepared collection. Neither searching nor attaching a passage to a prompt changes a model’s weights.

## Follow the question through the system

First the application identifies the caller and limits search to permitted documents. Retrieval selects relevant passages. The application supplies the question and those passages to a language model. The model generates an answer, and the application displays the supporting references.

This pattern is called retrieval-augmented generation, or RAG. The [original RAG paper](https://arxiv.org/abs/2005.11401) studies models combining learned knowledge with retrieved external information. The simple pipeline here illustrates a common request-time pattern; it does not reproduce the paper’s training experiment.

Our fictional policy §1 says a manager must review requests. A supported answer explains that review requirement and cites §1. It should not convert that passage into a claim that every request will be approved.

## Missing evidence is a useful result

Now ask whether overseas remote work is allowed. That rule is absent from the sample collection. The assistant should explain that it lacks a permitted supporting passage and suggest checking with the policy owner.

An index can contain stale or incomplete information. Retrieval can choose the wrong passage. Generation can add a claim the source does not support. References make checking easier, but a reference alone does not establish correctness.

## Exercise: separate search from answering

Write two fictional policy paragraphs and assign each a section ID. Create four questions: two supported, one ambiguous and one unsupported. Manually match each question to a passage before writing an answer.

For each answer sentence, underline the part of the passage that supports it. If no passage supports a sentence, remove it or state the uncertainty. This exercise needs only a text editor and makes the evidence relationship visible before adding code.

An optional second version can use a keyword search. Preserve the same checks and make the matched section visible. Do not add confidential documents to a public demonstration.

## Learn actions separately

Finding a policy does not grant permission to submit a request. An assistant that uses tools needs a separate application permission check and an appropriate review process. The deeper Program 01 example explores that boundary.

Continue with retrieval, source checking and a small evaluation set. Confirm the current program curriculum and prerequisites with the team if you want guided engineering practice.
