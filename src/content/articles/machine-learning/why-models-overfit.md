---
title: 'Why models overfit'
description: 'Editorial draft: explain why improving training performance can coexist with worsening performance on unseen examples.'
slug: 'why-models-overfit'
publishedAt: '2026-09-20'
status: 'draft'
type: 'explainer'
topic: 'machine-learning'
subtopics: ['model selection', 'cross validation']
tags: ['Fundamentals', 'Evaluation']
series: 'ml-first-principles'
seriesOrder: 2
difficulty: 'beginner'
audience: ['Students and engineers']
authors: ['thejobpoolconsultants']
sources:
  [
    {
      'title': 'Scikit-learn: cross-validation and time-series splits',
      'url': 'https://scikit-learn.org/stable/modules/cross_validation.html',
      'role': 'supporting',
      'kind': 'docs',
      'supports': 'Validation/test separation, cross-validation and time-aware splitting; not measurements from the illustrative delivery-time example.',
    },
  ]
relatedArticles: ['what-machines-learn']
prerequisites: ['Training and inference']
learningOutcomes: ['Distinguish training fit from evidence of generalization.']
---

## Editorial draft — not for publication

Open with two models that have similar training errors but different held-out errors. Build a small reproducible experiment before making quantitative claims. Plot training and validation error as model capacity changes; include a simple baseline and a fixed random seed.

Explain that leakage, distribution shift, and noisy labels can also produce misleading evaluation. Do not attribute every train/test gap to the same mechanism. Review temporal and grouped splits before selecting an example.

Remaining editorial work: execute the experiment, verify the plots, document assumptions, link the relevant source sections, and add a next reading step. Keep this file in draft state until those tasks are complete.
