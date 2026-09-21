# Machine Learning knowledge map

This document is generated from the typed sequence. Run `node scripts/write-knowledge-map.mjs` after an editorial change, then format the generated Markdown.

The canonical implementation specification supplies the section titles and sequential numbers. Its 22 chapters replace the previous 11 broad sections. The accompanying conceptual outline informed the structure; where their example numbers differ, the implementation specification takes precedence.

## Current coverage

- Ordered sections: 22.
- Concepts: 404.
- Published concepts: 1.
- Planned concepts: 403.
- Draft concepts in the sequence: 0.
- Existing article: `what-machines-learn`, referenced from 01.01, rather than copied into a new page.
- The existing article draft `why-models-overfit` remains private. The Overfitting concept is a public planned entry with no draft link.

## Data and reusable UI

`src/data/topic-sequences/types.ts` defines TopicSequence, KnowledgeSection, and a discriminated KnowledgeConcept union. Published concepts require an articleSlug. Every concept has a stable id, display number, section-local slug, title, description, level, and status; grouping is optional.

`src/data/topic-sequences/machine-learning.ts` is the single canonical ML source. `index.ts` registers books, computes public counts, builds paths, and projects public content. It can register other subjects without introducing subject-specific UI.

Five new components in `src/components/knowledge/` provide TopicKnowledgeLayout, TopicSidebar, TopicConceptList, TopicConceptStatus, and TopicSectionPager. They reuse TopicInsight, ConceptFlow, ArticleList, and BuildMethod. The other 14 subjects continue using their existing book layout until their data is migrated.

The old Machine Learning entry was removed from topic-sections.json. Its sectionsFor adapter now reads the typed sequence, so the directory count cannot drift from the new book.

## URLs and compatibility

- Overview: `/blogs/topics/machine-learning/`.
- Chapter: `/blogs/topics/machine-learning/clustering/`.
- Concept: `/blogs/topics/machine-learning/clustering/#k-means`.
- Published article: `/blogs/articles/what-machines-learn/`.
- There are 22 new static section pages. Concepts are anchored rows, not hundreds of empty routes.
- The old overview fragment links are mapped through legacyHashes, including start-here, evaluation, ensemble-learning, and former concept fragments. Browser navigation replaces these with their new URLs. Without JavaScript, the overview still provides the chapter directory.
- Each section has its own canonical URL, title, description, breadcrumbs, and previous/next links. Sequence numbers describe editorial order, never personal completion.

## Status and publication rules

- `published`: the title links to an eligible published article. Mark this only when the article supports the concept.
- `planned`: render the concept title, intended guide scope, level, and “Article in preparation”. The row does not link to an invented article.
- `draft`: omit the concept from public navigation, content, counts, and the concept index. Article drafts and future-dated articles are excluded by the existing publishedArticles helper.
- publicSequence also downgrades a published mapping to planned if its referenced article is unavailable, removing articleSlug from the public projection. The build gate flags invalid published mappings so editors can correct them before release.
- Descriptions of planned guides are coverage plans, not claims that those guides or experiments already exist.

## Add a concept

1. Edit the relevant section in machine-learning.ts. Add a unique stable id and slug, the display number, title, scope description, level, and status planned.
2. Use group for a logical right-column heading where useful. Concept numbers remain sequential within the chapter.
3. Keep an existing concept’s stable id and slug when editing its title. Counts, menus, concept rows, and search entries are derived from this record.
4. Regenerate this document, update the deliberate structural count assertions to match the reviewed editorial change, and run the checks below.

## Publish an article for a concept

1. Complete the article under the existing editorial/source rules. Set the article status and publication date appropriately.
2. Set the concept status to published and articleSlug to the real article slug. Reuse the existing article instead of duplicating it.
3. Build the site. Confirm that the concept title opens the article, article breadcrumbs include the section, and search reports a published article available.

## Reorder safely

Reorder the sections array and update display numbers and concept numbers together. Never rename stable concept IDs or section/concept slugs just to match new numbering. Previous/next navigation derives from array order. If a URL must change, add a compatibility mapping and test it; do not silently break shared links. Review the expected canonical order assertions when the editorial sequence intentionally changes.

## Search and navigation

`concept-index.json` contains only public concept metadata and valid section anchors. The existing search combines exact/punctuation-normalized concept-title matches with Pagefind article and section results. Planned results show the topic, section, and “Article in preparation”. Choosing an article-type filter limits results to articles; topic filters apply to both sources.

The requested K-Means, SHAP, Random Forest, PCA, Cross Validation, and Data Drift queries have dedicated browser checks. Draft concepts never enter this JSON endpoint; hidden draft content also never enters static section HTML.

Desktop navigation is sticky with an internal scroll region. Section links and disclosure controls are separate keyboard targets. Native details elements allow collapse/reopen, with one chapter expanded at a time. At 1000px and below, the sidebar becomes a topic/selected-section disclosure. Escape closes it, and a concept deep link opens its chapter and highlights its current row. Native page routes and disclosures work without JavaScript.

## Verification commands

- `npm run build`: existing site/research checks plus the knowledge-sequence gate.
- `npm run verify:knowledge`: all chapter metadata, anchors, numbers, statuses, mappings, counts, draft exclusion, and the concept search projection.
- `npm run test:machine-learning`: the requested pages at 375px, 768px, and 1440px in both themes; accessibility, keyboard/disclosures, deep links, search, history, and no-JavaScript navigation.
- `npm run test:topics`: regression checks for the existing topic books.
- `npm run check`, `npm run lint`, `npm run format:check`.

## Complete ordered concept inventory

### 01 — ML Foundations

URL: `/blogs/topics/machine-learning/ml-foundations/`

Build a foundation in learning systems, training, inference, and generalization.

| Number | Concept                          | Level    | Status    | Group |
| ------ | -------------------------------- | -------- | --------- | ----- |
| 01.01  | What is Machine Learning?        | beginner | published | —     |
| 01.02  | Why Machine Learning?            | beginner | planned   | —     |
| 01.03  | AI vs ML vs Deep Learning        | beginner | planned   | —     |
| 01.04  | Training vs Inference            | beginner | planned   | —     |
| 01.05  | Model vs Algorithm               | beginner | planned   | —     |
| 01.06  | Data, Features, Labels & Targets | beginner | planned   | —     |
| 01.07  | Supervised Learning              | beginner | planned   | —     |
| 01.08  | Unsupervised Learning            | beginner | planned   | —     |
| 01.09  | Semi-Supervised Learning         | beginner | planned   | —     |
| 01.10  | Self-Supervised Learning         | beginner | planned   | —     |
| 01.11  | Reinforcement Learning           | beginner | planned   | —     |
| 01.12  | Batch Learning                   | beginner | planned   | —     |
| 01.13  | Online Learning                  | beginner | planned   | —     |
| 01.14  | Parametric Models                | beginner | planned   | —     |
| 01.15  | Non-Parametric Models            | beginner | planned   | —     |
| 01.16  | Hypothesis Space                 | beginner | planned   | —     |
| 01.17  | Inductive Bias                   | beginner | planned   | —     |
| 01.18  | Generalization                   | beginner | planned   | —     |
| 01.19  | Underfitting                     | beginner | planned   | —     |
| 01.20  | Overfitting                      | beginner | planned   | —     |
| 01.21  | Bias                             | beginner | planned   | —     |
| 01.22  | Variance                         | beginner | planned   | —     |
| 01.23  | Bias-Variance Tradeoff           | beginner | planned   | —     |
| 01.24  | Model Complexity                 | beginner | planned   | —     |

### 02 — Math & Statistics

URL: `/blogs/topics/machine-learning/math-statistics/`

Work through probability, descriptive statistics, distributions, sampling, and statistical testing.

| Number | Concept                             | Level    | Status  | Group                  |
| ------ | ----------------------------------- | -------- | ------- | ---------------------- |
| 02.01  | Probability Fundamentals            | beginner | planned | Probability            |
| 02.02  | Conditional Probability             | beginner | planned | Probability            |
| 02.03  | Joint Probability                   | beginner | planned | Probability            |
| 02.04  | Marginal Probability                | beginner | planned | Probability            |
| 02.05  | Bayes' Theorem                      | beginner | planned | Probability            |
| 02.06  | Probability vs Likelihood           | beginner | planned | Probability            |
| 02.07  | Maximum Likelihood Estimation       | beginner | planned | Probability            |
| 02.08  | Mean, Median & Mode                 | beginner | planned | Descriptive Statistics |
| 02.09  | Variance                            | beginner | planned | Descriptive Statistics |
| 02.10  | Standard Deviation                  | beginner | planned | Descriptive Statistics |
| 02.11  | Percentiles                         | beginner | planned | Descriptive Statistics |
| 02.12  | Covariance                          | beginner | planned | Descriptive Statistics |
| 02.13  | Correlation                         | beginner | planned | Descriptive Statistics |
| 02.14  | Pearson Correlation                 | beginner | planned | Descriptive Statistics |
| 02.15  | Spearman Correlation                | beginner | planned | Descriptive Statistics |
| 02.16  | Correlation vs Causation            | beginner | planned | Descriptive Statistics |
| 02.17  | Random Variables                    | beginner | planned | Distributions          |
| 02.18  | Probability Distributions           | beginner | planned | Distributions          |
| 02.19  | Normal Distribution                 | beginner | planned | Distributions          |
| 02.20  | Bernoulli Distribution              | beginner | planned | Distributions          |
| 02.21  | Binomial Distribution               | beginner | planned | Distributions          |
| 02.22  | Poisson Distribution                | beginner | planned | Distributions          |
| 02.23  | Population vs Sample                | beginner | planned | Sampling               |
| 02.24  | Sampling Techniques                 | beginner | planned | Sampling               |
| 02.25  | Sampling Bias                       | beginner | planned | Sampling               |
| 02.26  | Central Limit Theorem               | beginner | planned | Sampling               |
| 02.27  | Standard Error                      | beginner | planned | Sampling               |
| 02.28  | Confidence Intervals                | beginner | planned | Sampling               |
| 02.29  | Hypothesis Testing                  | beginner | planned | Statistical Testing    |
| 02.30  | Null & Alternative Hypothesis       | beginner | planned | Statistical Testing    |
| 02.31  | P-Values                            | beginner | planned | Statistical Testing    |
| 02.32  | Significance Level                  | beginner | planned | Statistical Testing    |
| 02.33  | Type I & Type II Errors             | beginner | planned | Statistical Testing    |
| 02.34  | Statistical Power                   | beginner | planned | Statistical Testing    |
| 02.35  | Z-Test                              | beginner | planned | Statistical Testing    |
| 02.36  | T-Test                              | beginner | planned | Statistical Testing    |
| 02.37  | Chi-Square Test                     | beginner | planned | Statistical Testing    |
| 02.38  | ANOVA                               | beginner | planned | Statistical Testing    |
| 02.39  | Two-Way ANOVA                       | beginner | planned | Statistical Testing    |
| 02.40  | Parametric vs Non-Parametric Tests  | beginner | planned | Statistical Testing    |
| 02.41  | Choosing the Right Statistical Test | beginner | planned | Statistical Testing    |

### 03 — Data Preparation

URL: `/blogs/topics/machine-learning/data-preparation/`

Plan how to inspect, clean, split, and transform data before training a model.

| Number | Concept                         | Level    | Status  | Group |
| ------ | ------------------------------- | -------- | ------- | ----- |
| 03.01  | Understanding a Dataset         | beginner | planned | —     |
| 03.02  | Structured vs Unstructured Data | beginner | planned | —     |
| 03.03  | Numerical Variables             | beginner | planned | —     |
| 03.04  | Categorical Variables           | beginner | planned | —     |
| 03.05  | Ordinal Variables               | beginner | planned | —     |
| 03.06  | Missing Values                  | beginner | planned | —     |
| 03.07  | Duplicate Records               | beginner | planned | —     |
| 03.08  | Outliers                        | beginner | planned | —     |
| 03.09  | Invalid Values                  | beginner | planned | —     |
| 03.10  | Data Leakage                    | beginner | planned | —     |
| 03.11  | Train / Validation / Test Split | beginner | planned | —     |
| 03.12  | Random Sampling                 | beginner | planned | —     |
| 03.13  | Stratified Sampling             | beginner | planned | —     |
| 03.14  | Time-Based Splits               | beginner | planned | —     |
| 03.15  | Data Transformation             | beginner | planned | —     |
| 03.16  | Normalization                   | beginner | planned | —     |
| 03.17  | Standardization                 | beginner | planned | —     |
| 03.18  | Robust Scaling                  | beginner | planned | —     |

### 04 — Feature Engineering

URL: `/blogs/topics/machine-learning/feature-engineering/`

Explore feature creation, encoding, scaling, selection, and leakage checks.

| Number | Concept                   | Level        | Status  | Group |
| ------ | ------------------------- | ------------ | ------- | ----- |
| 04.01  | What is a Feature?        | intermediate | planned | —     |
| 04.02  | Feature Engineering       | intermediate | planned | —     |
| 04.03  | Feature Extraction        | intermediate | planned | —     |
| 04.04  | Feature Transformation    | intermediate | planned | —     |
| 04.05  | Feature Selection         | intermediate | planned | —     |
| 04.06  | Numerical Features        | intermediate | planned | —     |
| 04.07  | Categorical Features      | intermediate | planned | —     |
| 04.08  | One-Hot Encoding          | intermediate | planned | —     |
| 04.09  | Ordinal Encoding          | intermediate | planned | —     |
| 04.10  | Target Encoding           | intermediate | planned | —     |
| 04.11  | Frequency Encoding        | intermediate | planned | —     |
| 04.12  | High-Cardinality Features | intermediate | planned | —     |
| 04.13  | Interaction Terms         | intermediate | planned | —     |
| 04.14  | Polynomial Features       | intermediate | planned | —     |
| 04.15  | Binning                   | intermediate | planned | —     |
| 04.16  | Log Transformations       | intermediate | planned | —     |
| 04.17  | Date / Time Features      | intermediate | planned | —     |
| 04.18  | Feature Scaling           | intermediate | planned | —     |
| 04.19  | Feature Leakage           | intermediate | planned | —     |
| 04.20  | Multicollinearity         | intermediate | planned | —     |
| 04.21  | Variance Inflation Factor | intermediate | planned | —     |
| 04.22  | Weight of Evidence        | intermediate | planned | —     |
| 04.23  | Information Value         | intermediate | planned | —     |

### 05 — Regression

URL: `/blogs/topics/machine-learning/regression/`

Study linear regression, error metrics, assumptions, and diagnostic tools.

| Number | Concept                        | Level    | Status  | Group        |
| ------ | ------------------------------ | -------- | ------- | ------------ |
| 05.01  | What is Regression?            | beginner | planned | Fundamentals |
| 05.02  | Simple Linear Regression       | beginner | planned | Fundamentals |
| 05.03  | Multiple Linear Regression     | beginner | planned | Fundamentals |
| 05.04  | Ordinary Least Squares         | beginner | planned | Fundamentals |
| 05.05  | Regression Coefficients        | beginner | planned | Fundamentals |
| 05.06  | Intercept                      | beginner | planned | Fundamentals |
| 05.07  | Residuals                      | beginner | planned | Fundamentals |
| 05.08  | Sum of Squares                 | beginner | planned | Fundamentals |
| 05.09  | MAE                            | beginner | planned | Metrics      |
| 05.10  | MSE                            | beginner | planned | Metrics      |
| 05.11  | RMSE                           | beginner | planned | Metrics      |
| 05.12  | MAPE                           | beginner | planned | Metrics      |
| 05.13  | R                              | beginner | planned | Metrics      |
| 05.14  | R²                             | beginner | planned | Metrics      |
| 05.15  | Adjusted R²                    | beginner | planned | Metrics      |
| 05.16  | Linearity                      | beginner | planned | Assumptions  |
| 05.17  | Independence                   | beginner | planned | Assumptions  |
| 05.18  | Normality of Residuals         | beginner | planned | Assumptions  |
| 05.19  | Homoskedasticity               | beginner | planned | Assumptions  |
| 05.20  | Heteroskedasticity             | beginner | planned | Assumptions  |
| 05.21  | Autocorrelation                | beginner | planned | Assumptions  |
| 05.22  | Durbin-Watson Test             | beginner | planned | Assumptions  |
| 05.23  | Breusch-Godfrey Test           | beginner | planned | Assumptions  |
| 05.24  | Multicollinearity              | beginner | planned | Assumptions  |
| 05.25  | VIF                            | beginner | planned | Assumptions  |
| 05.26  | Residual Plots                 | beginner | planned | Diagnostics  |
| 05.27  | Regression Output Explained    | beginner | planned | Diagnostics  |
| 05.28  | Coefficient Significance       | beginner | planned | Diagnostics  |
| 05.29  | Confidence Intervals           | beginner | planned | Diagnostics  |
| 05.30  | AIC                            | beginner | planned | Diagnostics  |
| 05.31  | BIC                            | beginner | planned | Diagnostics  |
| 05.32  | Interpolation vs Extrapolation | beginner | planned | Diagnostics  |

### 06 — Classification

URL: `/blogs/topics/machine-learning/classification/`

Explore classification tasks, decision boundaries, thresholds, and logistic regression.

| Number | Concept                                    | Level    | Status  | Group               |
| ------ | ------------------------------------------ | -------- | ------- | ------------------- |
| 06.01  | What is Classification?                    | beginner | planned | —                   |
| 06.02  | Binary Classification                      | beginner | planned | —                   |
| 06.03  | Multiclass Classification                  | beginner | planned | —                   |
| 06.04  | Multilabel Classification                  | beginner | planned | —                   |
| 06.05  | Decision Boundary                          | beginner | planned | —                   |
| 06.06  | Classification Probability                 | beginner | planned | —                   |
| 06.07  | Thresholds                                 | beginner | planned | —                   |
| 06.08  | Logistic Regression                        | beginner | planned | Logistic Regression |
| 06.09  | Odds                                       | beginner | planned | Logistic Regression |
| 06.10  | Odds Ratio                                 | beginner | planned | Logistic Regression |
| 06.11  | Log Odds                                   | beginner | planned | Logistic Regression |
| 06.12  | Logit Function                             | beginner | planned | Logistic Regression |
| 06.13  | Sigmoid Function                           | beginner | planned | Logistic Regression |
| 06.14  | Maximum Likelihood for Logistic Regression | beginner | planned | Logistic Regression |
| 06.15  | Logistic Regression Output Explained       | beginner | planned | Logistic Regression |

### 07 — Trees & Ensembles

URL: `/blogs/topics/machine-learning/trees-ensembles/`

Follow decision trees into bagging, boosting, and ensemble methods.

| Number | Concept               | Level        | Status  | Group     |
| ------ | --------------------- | ------------ | ------- | --------- |
| 07.01  | Decision Trees        | intermediate | planned | Trees     |
| 07.02  | Classification Trees  | intermediate | planned | Trees     |
| 07.03  | Regression Trees      | intermediate | planned | Trees     |
| 07.04  | Tree vs Linear Models | intermediate | planned | Trees     |
| 07.05  | Splitting Criteria    | intermediate | planned | Trees     |
| 07.06  | Entropy               | intermediate | planned | Trees     |
| 07.07  | Information Gain      | intermediate | planned | Trees     |
| 07.08  | Gini Impurity         | intermediate | planned | Trees     |
| 07.09  | Tree Depth            | intermediate | planned | Trees     |
| 07.10  | Pruning               | intermediate | planned | Trees     |
| 07.11  | Tree Overfitting      | intermediate | planned | Trees     |
| 07.12  | Ensemble Learning     | intermediate | planned | Ensembles |
| 07.13  | Bagging               | intermediate | planned | Ensembles |
| 07.14  | Random Forest         | intermediate | planned | Ensembles |
| 07.15  | Voting Classifiers    | intermediate | planned | Ensembles |
| 07.16  | Boosting              | intermediate | planned | Ensembles |
| 07.17  | AdaBoost              | intermediate | planned | Ensembles |
| 07.18  | Gradient Boosting     | intermediate | planned | Ensembles |
| 07.19  | XGBoost               | intermediate | planned | Ensembles |
| 07.20  | LightGBM              | intermediate | planned | Ensembles |
| 07.21  | CatBoost              | intermediate | planned | Ensembles |
| 07.22  | Stacking              | intermediate | planned | Ensembles |
| 07.23  | Blending              | intermediate | planned | Ensembles |

### 08 — Distance-Based Learning

URL: `/blogs/topics/machine-learning/distance-based-learning/`

Explore distance measures, nearest neighbors, scaling, and high-dimensional data.

| Number | Concept                 | Level    | Status  | Group |
| ------ | ----------------------- | -------- | ------- | ----- |
| 08.01  | Distance-Based Learning | beginner | planned | —     |
| 08.02  | Euclidean Distance      | beginner | planned | —     |
| 08.03  | Manhattan Distance      | beginner | planned | —     |
| 08.04  | Minkowski Distance      | beginner | planned | —     |
| 08.05  | Cosine Similarity       | beginner | planned | —     |
| 08.06  | K-Nearest Neighbors     | beginner | planned | —     |
| 08.07  | KNN Classification      | beginner | planned | —     |
| 08.08  | KNN Regression          | beginner | planned | —     |
| 08.09  | Choosing K              | beginner | planned | —     |
| 08.10  | Scaling for KNN         | beginner | planned | —     |
| 08.11  | Curse of Dimensionality | beginner | planned | —     |

### 09 — Probabilistic Learning

URL: `/blogs/topics/machine-learning/probabilistic-learning/`

Work through priors, likelihood, posterior probability, and Naive Bayes methods.

| Number | Concept                 | Level        | Status  | Group |
| ------ | ----------------------- | ------------ | ------- | ----- |
| 09.01  | Probability in ML       | intermediate | planned | —     |
| 09.02  | Bayes' Theorem          | intermediate | planned | —     |
| 09.03  | Prior Probability       | intermediate | planned | —     |
| 09.04  | Likelihood              | intermediate | planned | —     |
| 09.05  | Posterior Probability   | intermediate | planned | —     |
| 09.06  | Maximum Likelihood      | intermediate | planned | —     |
| 09.07  | Naive Bayes             | intermediate | planned | —     |
| 09.08  | Gaussian Naive Bayes    | intermediate | planned | —     |
| 09.09  | Multinomial Naive Bayes | intermediate | planned | —     |
| 09.10  | Bernoulli Naive Bayes   | intermediate | planned | —     |

### 10 — Model Evaluation

URL: `/blogs/topics/machine-learning/model-evaluation/`

Compare classification and regression metrics, validation strategies, and probability calibration.

| Number | Concept                      | Level        | Status  | Group          |
| ------ | ---------------------------- | ------------ | ------- | -------------- |
| 10.01  | Confusion Matrix             | intermediate | planned | Classification |
| 10.02  | True Positive                | intermediate | planned | Classification |
| 10.03  | True Negative                | intermediate | planned | Classification |
| 10.04  | False Positive               | intermediate | planned | Classification |
| 10.05  | False Negative               | intermediate | planned | Classification |
| 10.06  | Accuracy                     | intermediate | planned | Classification |
| 10.07  | Precision                    | intermediate | planned | Classification |
| 10.08  | Recall / Sensitivity         | intermediate | planned | Classification |
| 10.09  | Specificity                  | intermediate | planned | Classification |
| 10.10  | F1 Score                     | intermediate | planned | Classification |
| 10.11  | Fβ Score                     | intermediate | planned | Classification |
| 10.12  | ROC Curve                    | intermediate | planned | Classification |
| 10.13  | AUC                          | intermediate | planned | Classification |
| 10.14  | Precision-Recall Curve       | intermediate | planned | Classification |
| 10.15  | PR-AUC                       | intermediate | planned | Classification |
| 10.16  | Log Loss                     | intermediate | planned | Classification |
| 10.17  | MAE                          | intermediate | planned | Regression     |
| 10.18  | MSE                          | intermediate | planned | Regression     |
| 10.19  | RMSE                         | intermediate | planned | Regression     |
| 10.20  | R²                           | intermediate | planned | Regression     |
| 10.21  | Adjusted R²                  | intermediate | planned | Regression     |
| 10.22  | Holdout Validation           | intermediate | planned | Validation     |
| 10.23  | Cross-Validation             | intermediate | planned | Validation     |
| 10.24  | K-Fold                       | intermediate | planned | Validation     |
| 10.25  | Stratified K-Fold            | intermediate | planned | Validation     |
| 10.26  | Leave-One-Out                | intermediate | planned | Validation     |
| 10.27  | Time-Series Cross Validation | intermediate | planned | Validation     |
| 10.28  | Probability Calibration      | intermediate | planned | Calibration    |
| 10.29  | Calibration Curves           | intermediate | planned | Calibration    |
| 10.30  | Brier Score                  | intermediate | planned | Calibration    |
| 10.31  | Threshold Selection          | intermediate | planned | Calibration    |

### 11 — Model Diagnostics

URL: `/blogs/topics/machine-learning/model-diagnostics/`

Investigate errors, residuals, learning curves, data leakage, and performance across segments.

| Number | Concept                    | Level        | Status  | Group |
| ------ | -------------------------- | ------------ | ------- | ----- |
| 11.01  | Error Analysis             | intermediate | planned | —     |
| 11.02  | Residual Analysis          | intermediate | planned | —     |
| 11.03  | Learning Curves            | intermediate | planned | —     |
| 11.04  | Validation Curves          | intermediate | planned | —     |
| 11.05  | Bias Diagnostics           | intermediate | planned | —     |
| 11.06  | Variance Diagnostics       | intermediate | planned | —     |
| 11.07  | Feature Leakage Detection  | intermediate | planned | —     |
| 11.08  | Out-of-Distribution Inputs | intermediate | planned | —     |
| 11.09  | Calibration Diagnostics    | intermediate | planned | —     |
| 11.10  | Segment-Level Evaluation   | intermediate | planned | —     |

### 12 — Regularization

URL: `/blogs/topics/machine-learning/regularization/`

Study penalties, model complexity, sparsity, and early stopping.

| Number | Concept                             | Level        | Status  | Group |
| ------ | ----------------------------------- | ------------ | ------- | ----- |
| 12.01  | Why Regularization Matters          | intermediate | planned | —     |
| 12.02  | L1 Regularization                   | intermediate | planned | —     |
| 12.03  | L2 Regularization                   | intermediate | planned | —     |
| 12.04  | Elastic Net                         | intermediate | planned | —     |
| 12.05  | Ridge Regression                    | intermediate | planned | —     |
| 12.06  | Lasso Regression                    | intermediate | planned | —     |
| 12.07  | Regularization Strength             | intermediate | planned | —     |
| 12.08  | Sparsity                            | intermediate | planned | —     |
| 12.09  | Model Complexity                    | intermediate | planned | —     |
| 12.10  | Early Stopping                      | intermediate | planned | —     |
| 12.11  | Regularization vs Feature Selection | intermediate | planned | —     |

### 13 — Unsupervised Learning

URL: `/blogs/topics/machine-learning/unsupervised-learning/`

Explore unlabeled data through pattern discovery, clustering, and latent structure.

| Number | Concept                        | Level    | Status  | Group |
| ------ | ------------------------------ | -------- | ------- | ----- |
| 13.01  | What is Unsupervised Learning? | beginner | planned | —     |
| 13.02  | Supervised vs Unsupervised     | beginner | planned | —     |
| 13.03  | Pattern Discovery              | beginner | planned | —     |
| 13.04  | Latent Structure               | beginner | planned | —     |
| 13.05  | Clustering                     | beginner | planned | —     |
| 13.06  | Dimensionality Reduction       | beginner | planned | —     |
| 13.07  | Density Estimation             | beginner | planned | —     |
| 13.08  | Anomaly Detection              | beginner | planned | —     |

### 14 — Clustering

URL: `/blogs/topics/machine-learning/clustering/`

Learn K-Means, hierarchical clustering, DBSCAN, Gaussian mixture models, cluster validation, and how to choose an appropriate clustering approach.

| Number | Concept                                 | Level        | Status  | Group |
| ------ | --------------------------------------- | ------------ | ------- | ----- |
| 14.01  | What is Clustering?                     | intermediate | planned | —     |
| 14.02  | Distance in Clustering                  | intermediate | planned | —     |
| 14.03  | K-Means                                 | intermediate | planned | —     |
| 14.04  | K-Means Initialization                  | intermediate | planned | —     |
| 14.05  | Choosing K                              | intermediate | planned | —     |
| 14.06  | Elbow Method                            | intermediate | planned | —     |
| 14.07  | Silhouette Score                        | intermediate | planned | —     |
| 14.08  | Hierarchical Clustering                 | intermediate | planned | —     |
| 14.09  | Agglomerative Clustering                | intermediate | planned | —     |
| 14.10  | Divisive Clustering                     | intermediate | planned | —     |
| 14.11  | Dendrograms                             | intermediate | planned | —     |
| 14.12  | DBSCAN                                  | intermediate | planned | —     |
| 14.13  | Density-Based Clustering                | intermediate | planned | —     |
| 14.14  | Gaussian Mixture Models                 | intermediate | planned | —     |
| 14.15  | Soft Clustering                         | intermediate | planned | —     |
| 14.16  | Cluster Validation                      | intermediate | planned | —     |
| 14.17  | Cluster Assumptions                     | intermediate | planned | —     |
| 14.18  | Choosing the Right Clustering Algorithm | intermediate | planned | —     |
| 14.19  | Clustering Failure Modes                | intermediate | planned | —     |

### 15 — Dimensionality Reduction

URL: `/blogs/topics/machine-learning/dimensionality-reduction/`

Explore PCA, LDA, t-SNE, UMAP, and the assumptions behind lower-dimensional representations.

| Number | Concept                                       | Level        | Status  | Group |
| ------ | --------------------------------------------- | ------------ | ------- | ----- |
| 15.01  | What is Dimensionality Reduction?             | intermediate | planned | —     |
| 15.02  | Curse of Dimensionality                       | intermediate | planned | —     |
| 15.03  | Feature Selection vs Dimensionality Reduction | intermediate | planned | —     |
| 15.04  | PCA                                           | intermediate | planned | —     |
| 15.05  | PCA Intuition                                 | intermediate | planned | —     |
| 15.06  | Covariance Matrix                             | intermediate | planned | —     |
| 15.07  | Eigenvalues                                   | intermediate | planned | —     |
| 15.08  | Eigenvectors                                  | intermediate | planned | —     |
| 15.09  | Principal Components                          | intermediate | planned | —     |
| 15.10  | Explained Variance                            | intermediate | planned | —     |
| 15.11  | Choosing PCA Components                       | intermediate | planned | —     |
| 15.12  | PCA Practical Tips                            | intermediate | planned | —     |
| 15.13  | LDA                                           | intermediate | planned | —     |
| 15.14  | PCA vs LDA                                    | intermediate | planned | —     |
| 15.15  | t-SNE                                         | intermediate | planned | —     |
| 15.16  | UMAP                                          | intermediate | planned | —     |
| 15.17  | Factor Analysis                               | intermediate | planned | —     |
| 15.18  | Dimensionality Reduction Assumptions          | intermediate | planned | —     |
| 15.19  | Advantages & Limitations                      | intermediate | planned | —     |

### 16 — Model Selection & Tuning

URL: `/blogs/topics/machine-learning/model-selection-tuning/`

Plan baselines, model comparisons, hyperparameter searches, and reproducible validation.

| Number | Concept                       | Level        | Status  | Group |
| ------ | ----------------------------- | ------------ | ------- | ----- |
| 16.01  | Parameters vs Hyperparameters | intermediate | planned | —     |
| 16.02  | Baseline Models               | intermediate | planned | —     |
| 16.03  | Model Comparison              | intermediate | planned | —     |
| 16.04  | Grid Search                   | intermediate | planned | —     |
| 16.05  | Random Search                 | intermediate | planned | —     |
| 16.06  | Bayesian Optimization         | intermediate | planned | —     |
| 16.07  | Automated Optimization        | intermediate | planned | —     |
| 16.08  | Nested Cross-Validation       | intermediate | planned | —     |
| 16.09  | Choosing the Right Metric     | intermediate | planned | —     |
| 16.10  | Search Space Design           | intermediate | planned | —     |
| 16.11  | Early Stopping                | intermediate | planned | —     |
| 16.12  | Over-Tuning                   | intermediate | planned | —     |
| 16.13  | Reproducibility               | intermediate | planned | —     |

### 17 — Imbalanced Learning

URL: `/blogs/topics/machine-learning/imbalanced-learning/`

Explore rare events, sampling, class weights, threshold tuning, and evaluation under class imbalance.

| Number | Concept                   | Level        | Status  | Group |
| ------ | ------------------------- | ------------ | ------- | ----- |
| 17.01  | Imbalanced Datasets       | intermediate | planned | —     |
| 17.02  | Why Accuracy Can Fail     | intermediate | planned | —     |
| 17.03  | Precision-Recall Tradeoff | intermediate | planned | —     |
| 17.04  | Class Weights             | intermediate | planned | —     |
| 17.05  | Undersampling             | intermediate | planned | —     |
| 17.06  | Oversampling              | intermediate | planned | —     |
| 17.07  | SMOTE                     | intermediate | planned | —     |
| 17.08  | Threshold Tuning          | intermediate | planned | —     |
| 17.09  | Cost-Sensitive Learning   | intermediate | planned | —     |
| 17.10  | Rare Event Modeling       | intermediate | planned | —     |
| 17.11  | Fraud Detection           | intermediate | planned | —     |
| 17.12  | Anomaly Detection         | intermediate | planned | —     |

### 18 — Explainability

URL: `/blogs/topics/machine-learning/explainability/`

Study global and local explanations, feature importance, and the limits of interpreting model behavior.

| Number | Concept                            | Level        | Status  | Group |
| ------ | ---------------------------------- | ------------ | ------- | ----- |
| 18.01  | Explainability vs Interpretability | intermediate | planned | —     |
| 18.02  | Global Explanations                | intermediate | planned | —     |
| 18.03  | Local Explanations                 | intermediate | planned | —     |
| 18.04  | Linear Model Coefficients          | intermediate | planned | —     |
| 18.05  | Feature Importance                 | intermediate | planned | —     |
| 18.06  | Permutation Importance             | intermediate | planned | —     |
| 18.07  | Partial Dependence                 | intermediate | planned | —     |
| 18.08  | ICE Plots                          | intermediate | planned | —     |
| 18.09  | SHAP                               | intermediate | planned | —     |
| 18.10  | LIME                               | intermediate | planned | —     |
| 18.11  | Counterfactual Explanations        | intermediate | planned | —     |
| 18.12  | Explanation Limitations            | intermediate | planned | —     |

### 19 — Applied ML

URL: `/blogs/topics/machine-learning/applied-ml/`

Connect the learning sequence to recommendations, ranking, forecasting, and other applied problems.

| Number | Concept                       | Level        | Status  | Group |
| ------ | ----------------------------- | ------------ | ------- | ----- |
| 19.01  | Recommendation Systems        | intermediate | planned | —     |
| 19.02  | Collaborative Filtering       | intermediate | planned | —     |
| 19.03  | Content-Based Recommendations | intermediate | planned | —     |
| 19.04  | Learning to Rank              | intermediate | planned | —     |
| 19.05  | Search Ranking                | intermediate | planned | —     |
| 19.06  | Fraud Detection               | intermediate | planned | —     |
| 19.07  | Churn Prediction              | intermediate | planned | —     |
| 19.08  | Customer Segmentation         | intermediate | planned | —     |
| 19.09  | Demand Forecasting            | intermediate | planned | —     |
| 19.10  | Predictive Maintenance        | intermediate | planned | —     |
| 19.11  | Credit Risk Modeling          | intermediate | planned | —     |
| 19.12  | Marketing Propensity          | intermediate | planned | —     |
| 19.13  | Time-Series Forecasting       | intermediate | planned | —     |
| 19.14  | Anomaly Detection             | intermediate | planned | —     |

### 20 — Production ML

URL: `/blogs/topics/machine-learning/production-ml/`

Follow models into pipelines, deployment, monitoring, drift detection, retraining, and governance.

| Number | Concept                     | Level      | Status  | Group |
| ------ | --------------------------- | ---------- | ------- | ----- |
| 20.01  | From Notebook to Production | production | planned | —     |
| 20.02  | Training Pipelines          | production | planned | —     |
| 20.03  | Inference Pipelines         | production | planned | —     |
| 20.04  | Batch Inference             | production | planned | —     |
| 20.05  | Online Inference            | production | planned | —     |
| 20.06  | Real-Time Prediction        | production | planned | —     |
| 20.07  | Feature Stores              | production | planned | —     |
| 20.08  | Model Registry              | production | planned | —     |
| 20.09  | Model Versioning            | production | planned | —     |
| 20.10  | Data Versioning             | production | planned | —     |
| 20.11  | Experiment Tracking         | production | planned | —     |
| 20.12  | Deployment Strategies       | production | planned | —     |
| 20.13  | Shadow Deployment           | production | planned | —     |
| 20.14  | Canary Deployment           | production | planned | —     |
| 20.15  | A/B Testing Models          | production | planned | —     |
| 20.16  | Model Monitoring            | production | planned | —     |
| 20.17  | Data Drift                  | production | planned | —     |
| 20.18  | Concept Drift               | production | planned | —     |
| 20.19  | Prediction Drift            | production | planned | —     |
| 20.20  | Performance Degradation     | production | planned | —     |
| 20.21  | Retraining                  | production | planned | —     |
| 20.22  | ML Observability            | production | planned | —     |
| 20.23  | Model Governance            | production | planned | —     |
| 20.24  | Reproducibility             | production | planned | —     |
| 20.25  | Production Failure Modes    | production | planned | —     |

### 21 — Advanced ML

URL: `/blogs/topics/machine-learning/advanced-ml/`

Explore transfer, active learning, weak supervision, distribution shift, and other advanced directions.

| Number | Concept                  | Level    | Status  | Group |
| ------ | ------------------------ | -------- | ------- | ----- |
| 21.01  | Semi-Supervised Learning | advanced | planned | —     |
| 21.02  | Self-Supervised Learning | advanced | planned | —     |
| 21.03  | Transfer Learning        | advanced | planned | —     |
| 21.04  | Active Learning          | advanced | planned | —     |
| 21.05  | Online Learning          | advanced | planned | —     |
| 21.06  | Incremental Learning     | advanced | planned | —     |
| 21.07  | Multi-Task Learning      | advanced | planned | —     |
| 21.08  | Meta-Learning            | advanced | planned | —     |
| 21.09  | AutoML                   | advanced | planned | —     |
| 21.10  | Ensemble Optimization    | advanced | planned | —     |
| 21.11  | Weak Supervision         | advanced | planned | —     |
| 21.12  | Synthetic Data for ML    | advanced | planned | —     |
| 21.13  | Distribution Shift       | advanced | planned | —     |
| 21.14  | Domain Adaptation        | advanced | planned | —     |
| 21.15  | Causal ML                | advanced | planned | —     |
| 21.16  | Graph Machine Learning   | advanced | planned | —     |

### 22 — Projects & Experiments

URL: `/blogs/topics/machine-learning/projects-experiments/`

Choose a proposed project, define a baseline, and plan how to evaluate the result.

| Number | Concept                              | Level        | Status  | Group        |
| ------ | ------------------------------------ | ------------ | ------- | ------------ |
| 22.01  | Predict House Prices                 | beginner     | planned | Beginner     |
| 22.02  | Customer Churn Classification        | beginner     | planned | Beginner     |
| 22.03  | Loan Risk Classification             | beginner     | planned | Beginner     |
| 22.04  | Customer Segmentation                | beginner     | planned | Beginner     |
| 22.05  | Spam Detection                       | beginner     | planned | Beginner     |
| 22.06  | Fraud Detection with Imbalanced Data | intermediate | planned | Intermediate |
| 22.07  | Recommendation System                | intermediate | planned | Intermediate |
| 22.08  | Demand Forecasting                   | intermediate | planned | Intermediate |
| 22.09  | Model Explainability with SHAP       | intermediate | planned | Intermediate |
| 22.10  | Compare Tree Ensembles               | intermediate | planned | Intermediate |
| 22.11  | Production ML API                    | advanced     | planned | Advanced     |
| 22.12  | End-to-End Training Pipeline         | advanced     | planned | Advanced     |
| 22.13  | Model Monitoring System              | advanced     | planned | Advanced     |
| 22.14  | Drift Detection Pipeline             | advanced     | planned | Advanced     |
| 22.15  | Automated Model Evaluation           | advanced     | planned | Advanced     |
| 22.16  | Feature Store Design                 | advanced     | planned | Advanced     |
| 22.17  | Batch vs Online Inference Experiment | advanced     | planned | Advanced     |
