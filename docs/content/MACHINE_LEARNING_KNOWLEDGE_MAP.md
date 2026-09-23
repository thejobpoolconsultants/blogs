# Machine Learning knowledge map

Generated from src/data/topic-sequences/machine-learning.ts. Regenerate with node scripts/write-knowledge-map.mjs, then format the generated Markdown.

The supplied canonical sequence replaces the previous 11-section outline. The top-level chapter names and complete numbered lists take precedence over abbreviated sidebar examples.

## Coverage

- Sections: 22, plus Overview.
- Concepts: 404.
- Published concept references: 1.
- Planned concepts: 403.
- Draft concepts: 0.
- Learning path: ML Engineer learning path at /blogs/learn/ml-engineer/.

Counts are calculated from the data. Sequence numbers describe editorial order, never personal completion. Planned descriptions state intended coverage; they are not full articles or claims of completed experiments.

## Reusable architecture

TopicSequence → KnowledgeSection → KnowledgeConcept. Each concept has a stable id, display number, section-local slug, title, description, level, optional group, and published/planned/draft status. Published concepts require an articleSlug.

The shared TopicKnowledgeLayout, TopicSidebar, TopicConceptList, TopicConceptStatus, and TopicSectionPager render every registered book. TopicInsight, ConceptFlow, ArticleList, and BuildMethod are reused. Optional navTitle, notice, relatedArticleSlugs, and diagram fields support concise sidebar labels, editorial notes, published related reading, and a staged learning-cycle visual.

Related reading retains the referenced article’s original topic, type, title, URL, sources, and research attribution. It does not publish a new concept guide or duplicate an article body.

The sequence registry projects only public content and supplies the sectionsFor adapter, keeping the Topics directory count consistent. Other topics can be added to the registry without a separate topic-specific UI.

## URL convention

- Overview: /blogs/topics/machine-learning/
- Section: /blogs/topics/machine-learning/ml-foundations/
- Concept: /blogs/topics/machine-learning/ml-foundations/#why-machine-learning
- Article: /blogs/articles/{articleSlug}/

Each chapter has a real static route, canonical metadata, breadcrumbs, previous/next links, an overview link, and the topic learning path. Concepts use anchors within chapter pages; there are no empty concept routes. Existing fragment URLs migrate through legacyHashes. Preserve those mappings when renaming sections.

## Status and publication

- published: the concept title opens an eligible published article.
- planned: show the concept with Article in preparation and no invented article link.
- draft: omit the concept from public navigation, rows, counts, and search.
- publicSequence removes draft concepts, excludes unpublished related reading, and removes article links when the target article is unavailable. The build gate flags invalid published mappings before release.
- The existing article publication-date and status filters also exclude drafts and future-dated articles. No draft body is copied into the knowledge index.

## How to add and publish articles

1. Edit src/data/topic-sequences/machine-learning.ts. Add a concept with a unique stable id and slug, the correct display number, a scope description, level, optional group, and planned status.
2. Write the real article using the existing content schema and editorial/source rules. Keep it draft until ready. Date emerging-architecture coverage and identify the source/model version.
3. Set the concept to published with the real articleSlug only when the article supports it. To supply background instead, add its slug to the section’s relatedArticleSlugs. The article keeps its original classification.
4. Regenerate this document, run the build and browser checks, and verify the concept link, search status, article breadcrumbs, and research/source disclosures.

## Reorder safely

Reorder the sections array and update display numbers and concept numbers together. Keep stable IDs and slugs unchanged when changing display order or wording. Previous/next links derive from array order. If a URL must change, add a compatibility mapping and test it. Update the deliberate canonical count/order assertions only for an intentional editorial change.

## Search and navigation

The public concept-index.json endpoint contains metadata and valid chapter anchors. Search combines normalized concept-title matches with Pagefind results. Planned matches show the topic, chapter, and Article in preparation. Topic filters apply to both result sources; article-type filters exclude concept-index entries. Draft concepts and unavailable article links never enter the public concept projection.

Desktop navigation is sticky, sized to the available viewport, and internally scrollable without blocking the footer. Chapter links and disclosure controls are separate keyboard targets. Only one chapter expands at a time. At 1000px and below the menu is a collapsible topic/section control. Escape closes it; concept anchors highlight the selected concept. Native links and disclosures work without JavaScript.

## Verification

- npm run build: site links/assets, metadata, feeds, draft exclusion, research safeguards, and knowledge-sequence checks.
- npm run verify:knowledge: every concept number, ID, anchor, status, article mapping, and public search entry.
- npm run test:machine-learning: responsive layouts, themes, navigation, keyboard access, deep links, search, and accessibility.
- npm run check; npm run lint; npm run format:check.

## Published concept mappings

| ID      | Number | Concept                   | Article slug        |
| ------- | ------ | ------------------------- | ------------------- |
| ML-0101 | 01.01  | What is Machine Learning? | what-machines-learn |

## Complete section and concept inventory

### 01 — ML Foundations

URL: /blogs/topics/machine-learning/ml-foundations/

Build a foundation in learning systems, training, inference, and generalization.

| ID      | Number | Concept                          | Level    | Status    | Group |
| ------- | ------ | -------------------------------- | -------- | --------- | ----- |
| ML-0101 | 01.01  | What is Machine Learning?        | beginner | published | —     |
| ML-0102 | 01.02  | Why Machine Learning?            | beginner | planned   | —     |
| ML-0103 | 01.03  | AI vs ML vs Deep Learning        | beginner | planned   | —     |
| ML-0104 | 01.04  | Training vs Inference            | beginner | planned   | —     |
| ML-0105 | 01.05  | Model vs Algorithm               | beginner | planned   | —     |
| ML-0106 | 01.06  | Data, Features, Labels & Targets | beginner | planned   | —     |
| ML-0107 | 01.07  | Supervised Learning              | beginner | planned   | —     |
| ML-0108 | 01.08  | Unsupervised Learning            | beginner | planned   | —     |
| ML-0109 | 01.09  | Semi-Supervised Learning         | beginner | planned   | —     |
| ML-0110 | 01.10  | Self-Supervised Learning         | beginner | planned   | —     |
| ML-0111 | 01.11  | Reinforcement Learning           | beginner | planned   | —     |
| ML-0112 | 01.12  | Batch Learning                   | beginner | planned   | —     |
| ML-0113 | 01.13  | Online Learning                  | beginner | planned   | —     |
| ML-0114 | 01.14  | Parametric Models                | beginner | planned   | —     |
| ML-0115 | 01.15  | Non-Parametric Models            | beginner | planned   | —     |
| ML-0116 | 01.16  | Hypothesis Space                 | beginner | planned   | —     |
| ML-0117 | 01.17  | Inductive Bias                   | beginner | planned   | —     |
| ML-0118 | 01.18  | Generalization                   | beginner | planned   | —     |
| ML-0119 | 01.19  | Underfitting                     | beginner | planned   | —     |
| ML-0120 | 01.20  | Overfitting                      | beginner | planned   | —     |
| ML-0121 | 01.21  | Bias                             | beginner | planned   | —     |
| ML-0122 | 01.22  | Variance                         | beginner | planned   | —     |
| ML-0123 | 01.23  | Bias-Variance Tradeoff           | beginner | planned   | —     |
| ML-0124 | 01.24  | Model Complexity                 | beginner | planned   | —     |

### 02 — Math & Statistics

URL: /blogs/topics/machine-learning/math-statistics/

Work through probability, descriptive statistics, distributions, sampling, and statistical testing.

| ID      | Number | Concept                             | Level    | Status  | Group                  |
| ------- | ------ | ----------------------------------- | -------- | ------- | ---------------------- |
| ML-0201 | 02.01  | Probability Fundamentals            | beginner | planned | Probability            |
| ML-0202 | 02.02  | Conditional Probability             | beginner | planned | Probability            |
| ML-0203 | 02.03  | Joint Probability                   | beginner | planned | Probability            |
| ML-0204 | 02.04  | Marginal Probability                | beginner | planned | Probability            |
| ML-0205 | 02.05  | Bayes' Theorem                      | beginner | planned | Probability            |
| ML-0206 | 02.06  | Probability vs Likelihood           | beginner | planned | Probability            |
| ML-0207 | 02.07  | Maximum Likelihood Estimation       | beginner | planned | Probability            |
| ML-0208 | 02.08  | Mean, Median & Mode                 | beginner | planned | Descriptive Statistics |
| ML-0209 | 02.09  | Variance                            | beginner | planned | Descriptive Statistics |
| ML-0210 | 02.10  | Standard Deviation                  | beginner | planned | Descriptive Statistics |
| ML-0211 | 02.11  | Percentiles                         | beginner | planned | Descriptive Statistics |
| ML-0212 | 02.12  | Covariance                          | beginner | planned | Descriptive Statistics |
| ML-0213 | 02.13  | Correlation                         | beginner | planned | Descriptive Statistics |
| ML-0214 | 02.14  | Pearson Correlation                 | beginner | planned | Descriptive Statistics |
| ML-0215 | 02.15  | Spearman Correlation                | beginner | planned | Descriptive Statistics |
| ML-0216 | 02.16  | Correlation vs Causation            | beginner | planned | Descriptive Statistics |
| ML-0217 | 02.17  | Random Variables                    | beginner | planned | Distributions          |
| ML-0218 | 02.18  | Probability Distributions           | beginner | planned | Distributions          |
| ML-0219 | 02.19  | Normal Distribution                 | beginner | planned | Distributions          |
| ML-0220 | 02.20  | Bernoulli Distribution              | beginner | planned | Distributions          |
| ML-0221 | 02.21  | Binomial Distribution               | beginner | planned | Distributions          |
| ML-0222 | 02.22  | Poisson Distribution                | beginner | planned | Distributions          |
| ML-0223 | 02.23  | Population vs Sample                | beginner | planned | Sampling               |
| ML-0224 | 02.24  | Sampling Techniques                 | beginner | planned | Sampling               |
| ML-0225 | 02.25  | Sampling Bias                       | beginner | planned | Sampling               |
| ML-0226 | 02.26  | Central Limit Theorem               | beginner | planned | Sampling               |
| ML-0227 | 02.27  | Standard Error                      | beginner | planned | Sampling               |
| ML-0228 | 02.28  | Confidence Intervals                | beginner | planned | Sampling               |
| ML-0229 | 02.29  | Hypothesis Testing                  | beginner | planned | Statistical Testing    |
| ML-0230 | 02.30  | Null & Alternative Hypothesis       | beginner | planned | Statistical Testing    |
| ML-0231 | 02.31  | P-Values                            | beginner | planned | Statistical Testing    |
| ML-0232 | 02.32  | Significance Level                  | beginner | planned | Statistical Testing    |
| ML-0233 | 02.33  | Type I & Type II Errors             | beginner | planned | Statistical Testing    |
| ML-0234 | 02.34  | Statistical Power                   | beginner | planned | Statistical Testing    |
| ML-0235 | 02.35  | Z-Test                              | beginner | planned | Statistical Testing    |
| ML-0236 | 02.36  | T-Test                              | beginner | planned | Statistical Testing    |
| ML-0237 | 02.37  | Chi-Square Test                     | beginner | planned | Statistical Testing    |
| ML-0238 | 02.38  | ANOVA                               | beginner | planned | Statistical Testing    |
| ML-0239 | 02.39  | Two-Way ANOVA                       | beginner | planned | Statistical Testing    |
| ML-0240 | 02.40  | Parametric vs Non-Parametric Tests  | beginner | planned | Statistical Testing    |
| ML-0241 | 02.41  | Choosing the Right Statistical Test | beginner | planned | Statistical Testing    |

### 03 — Data Preparation

URL: /blogs/topics/machine-learning/data-preparation/

Plan how to inspect, clean, split, and transform data before training a model.

| ID      | Number | Concept                         | Level    | Status  | Group |
| ------- | ------ | ------------------------------- | -------- | ------- | ----- |
| ML-0301 | 03.01  | Understanding a Dataset         | beginner | planned | —     |
| ML-0302 | 03.02  | Structured vs Unstructured Data | beginner | planned | —     |
| ML-0303 | 03.03  | Numerical Variables             | beginner | planned | —     |
| ML-0304 | 03.04  | Categorical Variables           | beginner | planned | —     |
| ML-0305 | 03.05  | Ordinal Variables               | beginner | planned | —     |
| ML-0306 | 03.06  | Missing Values                  | beginner | planned | —     |
| ML-0307 | 03.07  | Duplicate Records               | beginner | planned | —     |
| ML-0308 | 03.08  | Outliers                        | beginner | planned | —     |
| ML-0309 | 03.09  | Invalid Values                  | beginner | planned | —     |
| ML-0310 | 03.10  | Data Leakage                    | beginner | planned | —     |
| ML-0311 | 03.11  | Train / Validation / Test Split | beginner | planned | —     |
| ML-0312 | 03.12  | Random Sampling                 | beginner | planned | —     |
| ML-0313 | 03.13  | Stratified Sampling             | beginner | planned | —     |
| ML-0314 | 03.14  | Time-Based Splits               | beginner | planned | —     |
| ML-0315 | 03.15  | Data Transformation             | beginner | planned | —     |
| ML-0316 | 03.16  | Normalization                   | beginner | planned | —     |
| ML-0317 | 03.17  | Standardization                 | beginner | planned | —     |
| ML-0318 | 03.18  | Robust Scaling                  | beginner | planned | —     |

### 04 — Feature Engineering

URL: /blogs/topics/machine-learning/feature-engineering/

Explore feature creation, encoding, scaling, selection, and leakage checks.

| ID      | Number | Concept                   | Level        | Status  | Group |
| ------- | ------ | ------------------------- | ------------ | ------- | ----- |
| ML-0401 | 04.01  | What is a Feature?        | intermediate | planned | —     |
| ML-0402 | 04.02  | Feature Engineering       | intermediate | planned | —     |
| ML-0403 | 04.03  | Feature Extraction        | intermediate | planned | —     |
| ML-0404 | 04.04  | Feature Transformation    | intermediate | planned | —     |
| ML-0405 | 04.05  | Feature Selection         | intermediate | planned | —     |
| ML-0406 | 04.06  | Numerical Features        | intermediate | planned | —     |
| ML-0407 | 04.07  | Categorical Features      | intermediate | planned | —     |
| ML-0408 | 04.08  | One-Hot Encoding          | intermediate | planned | —     |
| ML-0409 | 04.09  | Ordinal Encoding          | intermediate | planned | —     |
| ML-0410 | 04.10  | Target Encoding           | intermediate | planned | —     |
| ML-0411 | 04.11  | Frequency Encoding        | intermediate | planned | —     |
| ML-0412 | 04.12  | High-Cardinality Features | intermediate | planned | —     |
| ML-0413 | 04.13  | Interaction Terms         | intermediate | planned | —     |
| ML-0414 | 04.14  | Polynomial Features       | intermediate | planned | —     |
| ML-0415 | 04.15  | Binning                   | intermediate | planned | —     |
| ML-0416 | 04.16  | Log Transformations       | intermediate | planned | —     |
| ML-0417 | 04.17  | Date / Time Features      | intermediate | planned | —     |
| ML-0418 | 04.18  | Feature Scaling           | intermediate | planned | —     |
| ML-0419 | 04.19  | Feature Leakage           | intermediate | planned | —     |
| ML-0420 | 04.20  | Multicollinearity         | intermediate | planned | —     |
| ML-0421 | 04.21  | Variance Inflation Factor | intermediate | planned | —     |
| ML-0422 | 04.22  | Weight of Evidence        | intermediate | planned | —     |
| ML-0423 | 04.23  | Information Value         | intermediate | planned | —     |

### 05 — Regression

URL: /blogs/topics/machine-learning/regression/

Study linear regression, error metrics, assumptions, and diagnostic tools.

| ID      | Number | Concept                        | Level    | Status  | Group        |
| ------- | ------ | ------------------------------ | -------- | ------- | ------------ |
| ML-0501 | 05.01  | What is Regression?            | beginner | planned | Fundamentals |
| ML-0502 | 05.02  | Simple Linear Regression       | beginner | planned | Fundamentals |
| ML-0503 | 05.03  | Multiple Linear Regression     | beginner | planned | Fundamentals |
| ML-0504 | 05.04  | Ordinary Least Squares         | beginner | planned | Fundamentals |
| ML-0505 | 05.05  | Regression Coefficients        | beginner | planned | Fundamentals |
| ML-0506 | 05.06  | Intercept                      | beginner | planned | Fundamentals |
| ML-0507 | 05.07  | Residuals                      | beginner | planned | Fundamentals |
| ML-0508 | 05.08  | Sum of Squares                 | beginner | planned | Fundamentals |
| ML-0509 | 05.09  | MAE                            | beginner | planned | Metrics      |
| ML-0510 | 05.10  | MSE                            | beginner | planned | Metrics      |
| ML-0511 | 05.11  | RMSE                           | beginner | planned | Metrics      |
| ML-0512 | 05.12  | MAPE                           | beginner | planned | Metrics      |
| ML-0513 | 05.13  | R                              | beginner | planned | Metrics      |
| ML-0514 | 05.14  | R²                             | beginner | planned | Metrics      |
| ML-0515 | 05.15  | Adjusted R²                    | beginner | planned | Metrics      |
| ML-0516 | 05.16  | Linearity                      | beginner | planned | Assumptions  |
| ML-0517 | 05.17  | Independence                   | beginner | planned | Assumptions  |
| ML-0518 | 05.18  | Normality of Residuals         | beginner | planned | Assumptions  |
| ML-0519 | 05.19  | Homoskedasticity               | beginner | planned | Assumptions  |
| ML-0520 | 05.20  | Heteroskedasticity             | beginner | planned | Assumptions  |
| ML-0521 | 05.21  | Autocorrelation                | beginner | planned | Assumptions  |
| ML-0522 | 05.22  | Durbin-Watson Test             | beginner | planned | Assumptions  |
| ML-0523 | 05.23  | Breusch-Godfrey Test           | beginner | planned | Assumptions  |
| ML-0524 | 05.24  | Multicollinearity              | beginner | planned | Assumptions  |
| ML-0525 | 05.25  | VIF                            | beginner | planned | Assumptions  |
| ML-0526 | 05.26  | Residual Plots                 | beginner | planned | Diagnostics  |
| ML-0527 | 05.27  | Regression Output Explained    | beginner | planned | Diagnostics  |
| ML-0528 | 05.28  | Coefficient Significance       | beginner | planned | Diagnostics  |
| ML-0529 | 05.29  | Confidence Intervals           | beginner | planned | Diagnostics  |
| ML-0530 | 05.30  | AIC                            | beginner | planned | Diagnostics  |
| ML-0531 | 05.31  | BIC                            | beginner | planned | Diagnostics  |
| ML-0532 | 05.32  | Interpolation vs Extrapolation | beginner | planned | Diagnostics  |

### 06 — Classification

URL: /blogs/topics/machine-learning/classification/

Explore classification tasks, decision boundaries, thresholds, and logistic regression.

| ID      | Number | Concept                                    | Level    | Status  | Group               |
| ------- | ------ | ------------------------------------------ | -------- | ------- | ------------------- |
| ML-0601 | 06.01  | What is Classification?                    | beginner | planned | —                   |
| ML-0602 | 06.02  | Binary Classification                      | beginner | planned | —                   |
| ML-0603 | 06.03  | Multiclass Classification                  | beginner | planned | —                   |
| ML-0604 | 06.04  | Multilabel Classification                  | beginner | planned | —                   |
| ML-0605 | 06.05  | Decision Boundary                          | beginner | planned | —                   |
| ML-0606 | 06.06  | Classification Probability                 | beginner | planned | —                   |
| ML-0607 | 06.07  | Thresholds                                 | beginner | planned | —                   |
| ML-0608 | 06.08  | Logistic Regression                        | beginner | planned | Logistic Regression |
| ML-0609 | 06.09  | Odds                                       | beginner | planned | Logistic Regression |
| ML-0610 | 06.10  | Odds Ratio                                 | beginner | planned | Logistic Regression |
| ML-0611 | 06.11  | Log Odds                                   | beginner | planned | Logistic Regression |
| ML-0612 | 06.12  | Logit Function                             | beginner | planned | Logistic Regression |
| ML-0613 | 06.13  | Sigmoid Function                           | beginner | planned | Logistic Regression |
| ML-0614 | 06.14  | Maximum Likelihood for Logistic Regression | beginner | planned | Logistic Regression |
| ML-0615 | 06.15  | Logistic Regression Output Explained       | beginner | planned | Logistic Regression |

### 07 — Trees & Ensembles

URL: /blogs/topics/machine-learning/trees-ensembles/

Follow decision trees into bagging, boosting, and ensemble methods.

| ID      | Number | Concept               | Level        | Status  | Group     |
| ------- | ------ | --------------------- | ------------ | ------- | --------- |
| ML-0701 | 07.01  | Decision Trees        | intermediate | planned | Trees     |
| ML-0702 | 07.02  | Classification Trees  | intermediate | planned | Trees     |
| ML-0703 | 07.03  | Regression Trees      | intermediate | planned | Trees     |
| ML-0704 | 07.04  | Tree vs Linear Models | intermediate | planned | Trees     |
| ML-0705 | 07.05  | Splitting Criteria    | intermediate | planned | Trees     |
| ML-0706 | 07.06  | Entropy               | intermediate | planned | Trees     |
| ML-0707 | 07.07  | Information Gain      | intermediate | planned | Trees     |
| ML-0708 | 07.08  | Gini Impurity         | intermediate | planned | Trees     |
| ML-0709 | 07.09  | Tree Depth            | intermediate | planned | Trees     |
| ML-0710 | 07.10  | Pruning               | intermediate | planned | Trees     |
| ML-0711 | 07.11  | Tree Overfitting      | intermediate | planned | Trees     |
| ML-0712 | 07.12  | Ensemble Learning     | intermediate | planned | Ensembles |
| ML-0713 | 07.13  | Bagging               | intermediate | planned | Ensembles |
| ML-0714 | 07.14  | Random Forest         | intermediate | planned | Ensembles |
| ML-0715 | 07.15  | Voting Classifiers    | intermediate | planned | Ensembles |
| ML-0716 | 07.16  | Boosting              | intermediate | planned | Ensembles |
| ML-0717 | 07.17  | AdaBoost              | intermediate | planned | Ensembles |
| ML-0718 | 07.18  | Gradient Boosting     | intermediate | planned | Ensembles |
| ML-0719 | 07.19  | XGBoost               | intermediate | planned | Ensembles |
| ML-0720 | 07.20  | LightGBM              | intermediate | planned | Ensembles |
| ML-0721 | 07.21  | CatBoost              | intermediate | planned | Ensembles |
| ML-0722 | 07.22  | Stacking              | intermediate | planned | Ensembles |
| ML-0723 | 07.23  | Blending              | intermediate | planned | Ensembles |

### 08 — Distance-Based Learning

URL: /blogs/topics/machine-learning/distance-based-learning/

Explore distance measures, nearest neighbors, scaling, and high-dimensional data.

| ID      | Number | Concept                 | Level    | Status  | Group |
| ------- | ------ | ----------------------- | -------- | ------- | ----- |
| ML-0801 | 08.01  | Distance-Based Learning | beginner | planned | —     |
| ML-0802 | 08.02  | Euclidean Distance      | beginner | planned | —     |
| ML-0803 | 08.03  | Manhattan Distance      | beginner | planned | —     |
| ML-0804 | 08.04  | Minkowski Distance      | beginner | planned | —     |
| ML-0805 | 08.05  | Cosine Similarity       | beginner | planned | —     |
| ML-0806 | 08.06  | K-Nearest Neighbors     | beginner | planned | —     |
| ML-0807 | 08.07  | KNN Classification      | beginner | planned | —     |
| ML-0808 | 08.08  | KNN Regression          | beginner | planned | —     |
| ML-0809 | 08.09  | Choosing K              | beginner | planned | —     |
| ML-0810 | 08.10  | Scaling for KNN         | beginner | planned | —     |
| ML-0811 | 08.11  | Curse of Dimensionality | beginner | planned | —     |

### 09 — Probabilistic Learning

URL: /blogs/topics/machine-learning/probabilistic-learning/

Work through priors, likelihood, posterior probability, and Naive Bayes methods.

| ID      | Number | Concept                 | Level        | Status  | Group |
| ------- | ------ | ----------------------- | ------------ | ------- | ----- |
| ML-0901 | 09.01  | Probability in ML       | intermediate | planned | —     |
| ML-0902 | 09.02  | Bayes' Theorem          | intermediate | planned | —     |
| ML-0903 | 09.03  | Prior Probability       | intermediate | planned | —     |
| ML-0904 | 09.04  | Likelihood              | intermediate | planned | —     |
| ML-0905 | 09.05  | Posterior Probability   | intermediate | planned | —     |
| ML-0906 | 09.06  | Maximum Likelihood      | intermediate | planned | —     |
| ML-0907 | 09.07  | Naive Bayes             | intermediate | planned | —     |
| ML-0908 | 09.08  | Gaussian Naive Bayes    | intermediate | planned | —     |
| ML-0909 | 09.09  | Multinomial Naive Bayes | intermediate | planned | —     |
| ML-0910 | 09.10  | Bernoulli Naive Bayes   | intermediate | planned | —     |

### 10 — Model Evaluation

URL: /blogs/topics/machine-learning/model-evaluation/

Compare classification and regression metrics, validation strategies, and probability calibration.

| ID      | Number | Concept                      | Level        | Status  | Group          |
| ------- | ------ | ---------------------------- | ------------ | ------- | -------------- |
| ML-1001 | 10.01  | Confusion Matrix             | intermediate | planned | Classification |
| ML-1002 | 10.02  | True Positive                | intermediate | planned | Classification |
| ML-1003 | 10.03  | True Negative                | intermediate | planned | Classification |
| ML-1004 | 10.04  | False Positive               | intermediate | planned | Classification |
| ML-1005 | 10.05  | False Negative               | intermediate | planned | Classification |
| ML-1006 | 10.06  | Accuracy                     | intermediate | planned | Classification |
| ML-1007 | 10.07  | Precision                    | intermediate | planned | Classification |
| ML-1008 | 10.08  | Recall / Sensitivity         | intermediate | planned | Classification |
| ML-1009 | 10.09  | Specificity                  | intermediate | planned | Classification |
| ML-1010 | 10.10  | F1 Score                     | intermediate | planned | Classification |
| ML-1011 | 10.11  | Fβ Score                     | intermediate | planned | Classification |
| ML-1012 | 10.12  | ROC Curve                    | intermediate | planned | Classification |
| ML-1013 | 10.13  | AUC                          | intermediate | planned | Classification |
| ML-1014 | 10.14  | Precision-Recall Curve       | intermediate | planned | Classification |
| ML-1015 | 10.15  | PR-AUC                       | intermediate | planned | Classification |
| ML-1016 | 10.16  | Log Loss                     | intermediate | planned | Classification |
| ML-1017 | 10.17  | MAE                          | intermediate | planned | Regression     |
| ML-1018 | 10.18  | MSE                          | intermediate | planned | Regression     |
| ML-1019 | 10.19  | RMSE                         | intermediate | planned | Regression     |
| ML-1020 | 10.20  | R²                           | intermediate | planned | Regression     |
| ML-1021 | 10.21  | Adjusted R²                  | intermediate | planned | Regression     |
| ML-1022 | 10.22  | Holdout Validation           | intermediate | planned | Validation     |
| ML-1023 | 10.23  | Cross-Validation             | intermediate | planned | Validation     |
| ML-1024 | 10.24  | K-Fold                       | intermediate | planned | Validation     |
| ML-1025 | 10.25  | Stratified K-Fold            | intermediate | planned | Validation     |
| ML-1026 | 10.26  | Leave-One-Out                | intermediate | planned | Validation     |
| ML-1027 | 10.27  | Time-Series Cross Validation | intermediate | planned | Validation     |
| ML-1028 | 10.28  | Probability Calibration      | intermediate | planned | Calibration    |
| ML-1029 | 10.29  | Calibration Curves           | intermediate | planned | Calibration    |
| ML-1030 | 10.30  | Brier Score                  | intermediate | planned | Calibration    |
| ML-1031 | 10.31  | Threshold Selection          | intermediate | planned | Calibration    |

### 11 — Model Diagnostics

URL: /blogs/topics/machine-learning/model-diagnostics/

Investigate errors, residuals, learning curves, data leakage, and performance across segments.

| ID      | Number | Concept                    | Level        | Status  | Group |
| ------- | ------ | -------------------------- | ------------ | ------- | ----- |
| ML-1101 | 11.01  | Error Analysis             | intermediate | planned | —     |
| ML-1102 | 11.02  | Residual Analysis          | intermediate | planned | —     |
| ML-1103 | 11.03  | Learning Curves            | intermediate | planned | —     |
| ML-1104 | 11.04  | Validation Curves          | intermediate | planned | —     |
| ML-1105 | 11.05  | Bias Diagnostics           | intermediate | planned | —     |
| ML-1106 | 11.06  | Variance Diagnostics       | intermediate | planned | —     |
| ML-1107 | 11.07  | Feature Leakage Detection  | intermediate | planned | —     |
| ML-1108 | 11.08  | Out-of-Distribution Inputs | intermediate | planned | —     |
| ML-1109 | 11.09  | Calibration Diagnostics    | intermediate | planned | —     |
| ML-1110 | 11.10  | Segment-Level Evaluation   | intermediate | planned | —     |

### 12 — Regularization

URL: /blogs/topics/machine-learning/regularization/

Study penalties, model complexity, sparsity, and early stopping.

| ID      | Number | Concept                             | Level        | Status  | Group |
| ------- | ------ | ----------------------------------- | ------------ | ------- | ----- |
| ML-1201 | 12.01  | Why Regularization Matters          | intermediate | planned | —     |
| ML-1202 | 12.02  | L1 Regularization                   | intermediate | planned | —     |
| ML-1203 | 12.03  | L2 Regularization                   | intermediate | planned | —     |
| ML-1204 | 12.04  | Elastic Net                         | intermediate | planned | —     |
| ML-1205 | 12.05  | Ridge Regression                    | intermediate | planned | —     |
| ML-1206 | 12.06  | Lasso Regression                    | intermediate | planned | —     |
| ML-1207 | 12.07  | Regularization Strength             | intermediate | planned | —     |
| ML-1208 | 12.08  | Sparsity                            | intermediate | planned | —     |
| ML-1209 | 12.09  | Model Complexity                    | intermediate | planned | —     |
| ML-1210 | 12.10  | Early Stopping                      | intermediate | planned | —     |
| ML-1211 | 12.11  | Regularization vs Feature Selection | intermediate | planned | —     |

### 13 — Unsupervised Learning

URL: /blogs/topics/machine-learning/unsupervised-learning/

Explore unlabeled data through pattern discovery, clustering, and latent structure.

| ID      | Number | Concept                        | Level    | Status  | Group |
| ------- | ------ | ------------------------------ | -------- | ------- | ----- |
| ML-1301 | 13.01  | What is Unsupervised Learning? | beginner | planned | —     |
| ML-1302 | 13.02  | Supervised vs Unsupervised     | beginner | planned | —     |
| ML-1303 | 13.03  | Pattern Discovery              | beginner | planned | —     |
| ML-1304 | 13.04  | Latent Structure               | beginner | planned | —     |
| ML-1305 | 13.05  | Clustering                     | beginner | planned | —     |
| ML-1306 | 13.06  | Dimensionality Reduction       | beginner | planned | —     |
| ML-1307 | 13.07  | Density Estimation             | beginner | planned | —     |
| ML-1308 | 13.08  | Anomaly Detection              | beginner | planned | —     |

### 14 — Clustering

URL: /blogs/topics/machine-learning/clustering/

Learn K-Means, hierarchical clustering, DBSCAN, Gaussian mixture models, cluster validation, and how to choose an appropriate clustering approach.

| ID      | Number | Concept                                 | Level        | Status  | Group |
| ------- | ------ | --------------------------------------- | ------------ | ------- | ----- |
| ML-1401 | 14.01  | What is Clustering?                     | intermediate | planned | —     |
| ML-1402 | 14.02  | Distance in Clustering                  | intermediate | planned | —     |
| ML-1403 | 14.03  | K-Means                                 | intermediate | planned | —     |
| ML-1404 | 14.04  | K-Means Initialization                  | intermediate | planned | —     |
| ML-1405 | 14.05  | Choosing K                              | intermediate | planned | —     |
| ML-1406 | 14.06  | Elbow Method                            | intermediate | planned | —     |
| ML-1407 | 14.07  | Silhouette Score                        | intermediate | planned | —     |
| ML-1408 | 14.08  | Hierarchical Clustering                 | intermediate | planned | —     |
| ML-1409 | 14.09  | Agglomerative Clustering                | intermediate | planned | —     |
| ML-1410 | 14.10  | Divisive Clustering                     | intermediate | planned | —     |
| ML-1411 | 14.11  | Dendrograms                             | intermediate | planned | —     |
| ML-1412 | 14.12  | DBSCAN                                  | intermediate | planned | —     |
| ML-1413 | 14.13  | Density-Based Clustering                | intermediate | planned | —     |
| ML-1414 | 14.14  | Gaussian Mixture Models                 | intermediate | planned | —     |
| ML-1415 | 14.15  | Soft Clustering                         | intermediate | planned | —     |
| ML-1416 | 14.16  | Cluster Validation                      | intermediate | planned | —     |
| ML-1417 | 14.17  | Cluster Assumptions                     | intermediate | planned | —     |
| ML-1418 | 14.18  | Choosing the Right Clustering Algorithm | intermediate | planned | —     |
| ML-1419 | 14.19  | Clustering Failure Modes                | intermediate | planned | —     |

### 15 — Dimensionality Reduction

URL: /blogs/topics/machine-learning/dimensionality-reduction/

Explore PCA, LDA, t-SNE, UMAP, and the assumptions behind lower-dimensional representations.

| ID      | Number | Concept                                       | Level        | Status  | Group |
| ------- | ------ | --------------------------------------------- | ------------ | ------- | ----- |
| ML-1501 | 15.01  | What is Dimensionality Reduction?             | intermediate | planned | —     |
| ML-1502 | 15.02  | Curse of Dimensionality                       | intermediate | planned | —     |
| ML-1503 | 15.03  | Feature Selection vs Dimensionality Reduction | intermediate | planned | —     |
| ML-1504 | 15.04  | PCA                                           | intermediate | planned | —     |
| ML-1505 | 15.05  | PCA Intuition                                 | intermediate | planned | —     |
| ML-1506 | 15.06  | Covariance Matrix                             | intermediate | planned | —     |
| ML-1507 | 15.07  | Eigenvalues                                   | intermediate | planned | —     |
| ML-1508 | 15.08  | Eigenvectors                                  | intermediate | planned | —     |
| ML-1509 | 15.09  | Principal Components                          | intermediate | planned | —     |
| ML-1510 | 15.10  | Explained Variance                            | intermediate | planned | —     |
| ML-1511 | 15.11  | Choosing PCA Components                       | intermediate | planned | —     |
| ML-1512 | 15.12  | PCA Practical Tips                            | intermediate | planned | —     |
| ML-1513 | 15.13  | LDA                                           | intermediate | planned | —     |
| ML-1514 | 15.14  | PCA vs LDA                                    | intermediate | planned | —     |
| ML-1515 | 15.15  | t-SNE                                         | intermediate | planned | —     |
| ML-1516 | 15.16  | UMAP                                          | intermediate | planned | —     |
| ML-1517 | 15.17  | Factor Analysis                               | intermediate | planned | —     |
| ML-1518 | 15.18  | Dimensionality Reduction Assumptions          | intermediate | planned | —     |
| ML-1519 | 15.19  | Advantages & Limitations                      | intermediate | planned | —     |

### 16 — Model Selection & Tuning

URL: /blogs/topics/machine-learning/model-selection-tuning/

Plan baselines, model comparisons, hyperparameter searches, and reproducible validation.

| ID      | Number | Concept                       | Level        | Status  | Group |
| ------- | ------ | ----------------------------- | ------------ | ------- | ----- |
| ML-1601 | 16.01  | Parameters vs Hyperparameters | intermediate | planned | —     |
| ML-1602 | 16.02  | Baseline Models               | intermediate | planned | —     |
| ML-1603 | 16.03  | Model Comparison              | intermediate | planned | —     |
| ML-1604 | 16.04  | Grid Search                   | intermediate | planned | —     |
| ML-1605 | 16.05  | Random Search                 | intermediate | planned | —     |
| ML-1606 | 16.06  | Bayesian Optimization         | intermediate | planned | —     |
| ML-1607 | 16.07  | Automated Optimization        | intermediate | planned | —     |
| ML-1608 | 16.08  | Nested Cross-Validation       | intermediate | planned | —     |
| ML-1609 | 16.09  | Choosing the Right Metric     | intermediate | planned | —     |
| ML-1610 | 16.10  | Search Space Design           | intermediate | planned | —     |
| ML-1611 | 16.11  | Early Stopping                | intermediate | planned | —     |
| ML-1612 | 16.12  | Over-Tuning                   | intermediate | planned | —     |
| ML-1613 | 16.13  | Reproducibility               | intermediate | planned | —     |

### 17 — Imbalanced Learning

URL: /blogs/topics/machine-learning/imbalanced-learning/

Explore rare events, sampling, class weights, threshold tuning, and evaluation under class imbalance.

| ID      | Number | Concept                   | Level        | Status  | Group |
| ------- | ------ | ------------------------- | ------------ | ------- | ----- |
| ML-1701 | 17.01  | Imbalanced Datasets       | intermediate | planned | —     |
| ML-1702 | 17.02  | Why Accuracy Can Fail     | intermediate | planned | —     |
| ML-1703 | 17.03  | Precision-Recall Tradeoff | intermediate | planned | —     |
| ML-1704 | 17.04  | Class Weights             | intermediate | planned | —     |
| ML-1705 | 17.05  | Undersampling             | intermediate | planned | —     |
| ML-1706 | 17.06  | Oversampling              | intermediate | planned | —     |
| ML-1707 | 17.07  | SMOTE                     | intermediate | planned | —     |
| ML-1708 | 17.08  | Threshold Tuning          | intermediate | planned | —     |
| ML-1709 | 17.09  | Cost-Sensitive Learning   | intermediate | planned | —     |
| ML-1710 | 17.10  | Rare Event Modeling       | intermediate | planned | —     |
| ML-1711 | 17.11  | Fraud Detection           | intermediate | planned | —     |
| ML-1712 | 17.12  | Anomaly Detection         | intermediate | planned | —     |

### 18 — Explainability

URL: /blogs/topics/machine-learning/explainability/

Study global and local explanations, feature importance, and the limits of interpreting model behavior.

| ID      | Number | Concept                            | Level        | Status  | Group |
| ------- | ------ | ---------------------------------- | ------------ | ------- | ----- |
| ML-1801 | 18.01  | Explainability vs Interpretability | intermediate | planned | —     |
| ML-1802 | 18.02  | Global Explanations                | intermediate | planned | —     |
| ML-1803 | 18.03  | Local Explanations                 | intermediate | planned | —     |
| ML-1804 | 18.04  | Linear Model Coefficients          | intermediate | planned | —     |
| ML-1805 | 18.05  | Feature Importance                 | intermediate | planned | —     |
| ML-1806 | 18.06  | Permutation Importance             | intermediate | planned | —     |
| ML-1807 | 18.07  | Partial Dependence                 | intermediate | planned | —     |
| ML-1808 | 18.08  | ICE Plots                          | intermediate | planned | —     |
| ML-1809 | 18.09  | SHAP                               | intermediate | planned | —     |
| ML-1810 | 18.10  | LIME                               | intermediate | planned | —     |
| ML-1811 | 18.11  | Counterfactual Explanations        | intermediate | planned | —     |
| ML-1812 | 18.12  | Explanation Limitations            | intermediate | planned | —     |

### 19 — Applied ML

URL: /blogs/topics/machine-learning/applied-ml/

Connect the learning sequence to recommendations, ranking, forecasting, and other applied problems.

| ID      | Number | Concept                       | Level        | Status  | Group |
| ------- | ------ | ----------------------------- | ------------ | ------- | ----- |
| ML-1901 | 19.01  | Recommendation Systems        | intermediate | planned | —     |
| ML-1902 | 19.02  | Collaborative Filtering       | intermediate | planned | —     |
| ML-1903 | 19.03  | Content-Based Recommendations | intermediate | planned | —     |
| ML-1904 | 19.04  | Learning to Rank              | intermediate | planned | —     |
| ML-1905 | 19.05  | Search Ranking                | intermediate | planned | —     |
| ML-1906 | 19.06  | Fraud Detection               | intermediate | planned | —     |
| ML-1907 | 19.07  | Churn Prediction              | intermediate | planned | —     |
| ML-1908 | 19.08  | Customer Segmentation         | intermediate | planned | —     |
| ML-1909 | 19.09  | Demand Forecasting            | intermediate | planned | —     |
| ML-1910 | 19.10  | Predictive Maintenance        | intermediate | planned | —     |
| ML-1911 | 19.11  | Credit Risk Modeling          | intermediate | planned | —     |
| ML-1912 | 19.12  | Marketing Propensity          | intermediate | planned | —     |
| ML-1913 | 19.13  | Time-Series Forecasting       | intermediate | planned | —     |
| ML-1914 | 19.14  | Anomaly Detection             | intermediate | planned | —     |

### 20 — Production ML

URL: /blogs/topics/machine-learning/production-ml/

Follow models into pipelines, deployment, monitoring, drift detection, retraining, and governance.

| ID      | Number | Concept                     | Level      | Status  | Group |
| ------- | ------ | --------------------------- | ---------- | ------- | ----- |
| ML-2001 | 20.01  | From Notebook to Production | production | planned | —     |
| ML-2002 | 20.02  | Training Pipelines          | production | planned | —     |
| ML-2003 | 20.03  | Inference Pipelines         | production | planned | —     |
| ML-2004 | 20.04  | Batch Inference             | production | planned | —     |
| ML-2005 | 20.05  | Online Inference            | production | planned | —     |
| ML-2006 | 20.06  | Real-Time Prediction        | production | planned | —     |
| ML-2007 | 20.07  | Feature Stores              | production | planned | —     |
| ML-2008 | 20.08  | Model Registry              | production | planned | —     |
| ML-2009 | 20.09  | Model Versioning            | production | planned | —     |
| ML-2010 | 20.10  | Data Versioning             | production | planned | —     |
| ML-2011 | 20.11  | Experiment Tracking         | production | planned | —     |
| ML-2012 | 20.12  | Deployment Strategies       | production | planned | —     |
| ML-2013 | 20.13  | Shadow Deployment           | production | planned | —     |
| ML-2014 | 20.14  | Canary Deployment           | production | planned | —     |
| ML-2015 | 20.15  | A/B Testing Models          | production | planned | —     |
| ML-2016 | 20.16  | Model Monitoring            | production | planned | —     |
| ML-2017 | 20.17  | Data Drift                  | production | planned | —     |
| ML-2018 | 20.18  | Concept Drift               | production | planned | —     |
| ML-2019 | 20.19  | Prediction Drift            | production | planned | —     |
| ML-2020 | 20.20  | Performance Degradation     | production | planned | —     |
| ML-2021 | 20.21  | Retraining                  | production | planned | —     |
| ML-2022 | 20.22  | ML Observability            | production | planned | —     |
| ML-2023 | 20.23  | Model Governance            | production | planned | —     |
| ML-2024 | 20.24  | Reproducibility             | production | planned | —     |
| ML-2025 | 20.25  | Production Failure Modes    | production | planned | —     |

### 21 — Advanced ML

URL: /blogs/topics/machine-learning/advanced-ml/

Explore transfer, active learning, weak supervision, distribution shift, and other advanced directions.

| ID      | Number | Concept                  | Level    | Status  | Group |
| ------- | ------ | ------------------------ | -------- | ------- | ----- |
| ML-2101 | 21.01  | Semi-Supervised Learning | advanced | planned | —     |
| ML-2102 | 21.02  | Self-Supervised Learning | advanced | planned | —     |
| ML-2103 | 21.03  | Transfer Learning        | advanced | planned | —     |
| ML-2104 | 21.04  | Active Learning          | advanced | planned | —     |
| ML-2105 | 21.05  | Online Learning          | advanced | planned | —     |
| ML-2106 | 21.06  | Incremental Learning     | advanced | planned | —     |
| ML-2107 | 21.07  | Multi-Task Learning      | advanced | planned | —     |
| ML-2108 | 21.08  | Meta-Learning            | advanced | planned | —     |
| ML-2109 | 21.09  | AutoML                   | advanced | planned | —     |
| ML-2110 | 21.10  | Ensemble Optimization    | advanced | planned | —     |
| ML-2111 | 21.11  | Weak Supervision         | advanced | planned | —     |
| ML-2112 | 21.12  | Synthetic Data for ML    | advanced | planned | —     |
| ML-2113 | 21.13  | Distribution Shift       | advanced | planned | —     |
| ML-2114 | 21.14  | Domain Adaptation        | advanced | planned | —     |
| ML-2115 | 21.15  | Causal ML                | advanced | planned | —     |
| ML-2116 | 21.16  | Graph Machine Learning   | advanced | planned | —     |

### 22 — Projects & Experiments

URL: /blogs/topics/machine-learning/projects-experiments/

Choose a proposed project, define a baseline, and plan how to evaluate the result.

| ID      | Number | Concept                              | Level        | Status  | Group        |
| ------- | ------ | ------------------------------------ | ------------ | ------- | ------------ |
| ML-2201 | 22.01  | Predict House Prices                 | beginner     | planned | Beginner     |
| ML-2202 | 22.02  | Customer Churn Classification        | beginner     | planned | Beginner     |
| ML-2203 | 22.03  | Loan Risk Classification             | beginner     | planned | Beginner     |
| ML-2204 | 22.04  | Customer Segmentation                | beginner     | planned | Beginner     |
| ML-2205 | 22.05  | Spam Detection                       | beginner     | planned | Beginner     |
| ML-2206 | 22.06  | Fraud Detection with Imbalanced Data | intermediate | planned | Intermediate |
| ML-2207 | 22.07  | Recommendation System                | intermediate | planned | Intermediate |
| ML-2208 | 22.08  | Demand Forecasting                   | intermediate | planned | Intermediate |
| ML-2209 | 22.09  | Model Explainability with SHAP       | intermediate | planned | Intermediate |
| ML-2210 | 22.10  | Compare Tree Ensembles               | intermediate | planned | Intermediate |
| ML-2211 | 22.11  | Production ML API                    | advanced     | planned | Advanced     |
| ML-2212 | 22.12  | End-to-End Training Pipeline         | advanced     | planned | Advanced     |
| ML-2213 | 22.13  | Model Monitoring System              | advanced     | planned | Advanced     |
| ML-2214 | 22.14  | Drift Detection Pipeline             | advanced     | planned | Advanced     |
| ML-2215 | 22.15  | Automated Model Evaluation           | advanced     | planned | Advanced     |
| ML-2216 | 22.16  | Feature Store Design                 | advanced     | planned | Advanced     |
| ML-2217 | 22.17  | Batch vs Online Inference Experiment | advanced     | planned | Advanced     |
