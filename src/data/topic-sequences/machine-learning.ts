import type { TopicSequence } from './types';

export const machineLearning: TopicSequence = {
  id: 'machine-learning',
  title: 'Machine Learning',
  description:
    'Learning patterns from evidence, then testing what generalizes.',
  insight:
    'A model that fits the training data is interesting. A model that survives new data is useful.',
  stages: ['Beginner', 'Intermediate', 'Advanced', 'Production'],
  flow: [
    'Data',
    'Features',
    'Model',
    'Training',
    'Prediction',
    'Evaluation',
    'Improvement',
  ],
  learningPath: {
    id: 'ml-engineer',
    title: 'ML Engineer learning path',
  },
  sections: [
    {
      number: '01',
      slug: 'ml-foundations',
      title: 'ML Foundations',
      description:
        'Build a foundation in learning systems, training, inference, and generalization.',
      introduction:
        'Build a foundation in learning systems, training, inference, and generalization.',
      concepts: [
        {
          id: 'ML-0101',
          number: '01.01',
          slug: 'what-is-machine-learning',
          title: 'What is Machine Learning?',
          description:
            'Start with the gap between memorizing examples and learning a pattern that survives new data.',
          level: 'beginner',
          status: 'published',
          articleSlug: 'what-machines-learn',
        },
        {
          id: 'ML-0102',
          number: '01.02',
          slug: 'why-machine-learning',
          title: 'Why Machine Learning?',
          description:
            'Decide when learning from examples is useful and when a simpler rule may be enough.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0103',
          number: '01.03',
          slug: 'ai-vs-ml-vs-deep-learning',
          title: 'AI vs ML vs Deep Learning',
          description:
            'Place machine learning and deep learning within the wider field of artificial intelligence.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0104',
          number: '01.04',
          slug: 'training-vs-inference',
          title: 'Training vs Inference',
          description:
            'Compare the work of fitting a model with using it to make predictions.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0105',
          number: '01.05',
          slug: 'model-vs-algorithm',
          title: 'Model vs Algorithm',
          description:
            'Distinguish the learned model from the procedure used to fit it.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0106',
          number: '01.06',
          slug: 'data-features-labels-targets',
          title: 'Data, Features, Labels & Targets',
          description:
            'Identify the inputs, observations, labels, and targets in a learning problem.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0107',
          number: '01.07',
          slug: 'supervised-learning',
          title: 'Supervised Learning',
          description:
            'Frame a learning problem using examples with known targets.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0108',
          number: '01.08',
          slug: 'unsupervised-learning',
          title: 'Unsupervised Learning',
          description:
            'Explore learning problems where examples do not come with target labels.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0109',
          number: '01.09',
          slug: 'semi-supervised-learning',
          title: 'Semi-Supervised Learning',
          description:
            'Explore how a learning setup can use both labeled and unlabeled examples.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0110',
          number: '01.10',
          slug: 'self-supervised-learning',
          title: 'Self-Supervised Learning',
          description:
            'Explore how learning tasks can be constructed from the data itself.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0111',
          number: '01.11',
          slug: 'reinforcement-learning',
          title: 'Reinforcement Learning',
          description:
            'Introduce learning through actions, feedback, and rewards.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0112',
          number: '01.12',
          slug: 'batch-learning',
          title: 'Batch Learning',
          description: 'Plan training around a collected batch of examples.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0113',
          number: '01.13',
          slug: 'online-learning',
          title: 'Online Learning',
          description:
            'Explore updates as new observations arrive and the checks those updates need.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0114',
          number: '01.14',
          slug: 'parametric-models',
          title: 'Parametric Models',
          description:
            'Examine models described by a fixed set of learned parameters.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0115',
          number: '01.15',
          slug: 'non-parametric-models',
          title: 'Non-Parametric Models',
          description:
            'Explore flexible model families and how their capacity relates to the data.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0116',
          number: '01.16',
          slug: 'hypothesis-space',
          title: 'Hypothesis Space',
          description:
            'Describe the candidate solutions a learning procedure can consider.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0117',
          number: '01.17',
          slug: 'inductive-bias',
          title: 'Inductive Bias',
          description:
            'Identify the assumptions that guide learning beyond the observed examples.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0118',
          number: '01.18',
          slug: 'generalization',
          title: 'Generalization',
          description:
            'Ask whether a learned pattern holds on appropriate unseen examples.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0119',
          number: '01.19',
          slug: 'underfitting',
          title: 'Underfitting',
          description:
            'Investigate when a model misses useful patterns in the training data.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0120',
          number: '01.20',
          slug: 'overfitting',
          title: 'Overfitting',
          description:
            'Explore why strong training performance can coexist with weaker performance on unseen data.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0121',
          number: '01.21',
          slug: 'bias',
          title: 'Bias',
          description:
            'Study the simplifying assumptions and systematic errors in a learning setup.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0122',
          number: '01.22',
          slug: 'variance',
          title: 'Variance',
          description:
            'Examine how a fitted model can change across different training samples.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0123',
          number: '01.23',
          slug: 'bias-variance-tradeoff',
          title: 'Bias-Variance Tradeoff',
          description:
            'Compare sources of prediction error when choosing model complexity.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0124',
          number: '01.24',
          slug: 'model-complexity',
          title: 'Model Complexity',
          description:
            'Explore capacity, training fit, and evaluation beyond the training set.',
          level: 'beginner',
          status: 'planned',
        },
      ],
      insight:
        'Training finds a pattern. Generalization proves it was worth finding.',
      insightSupporting:
        'Here, generalization means evidence from appropriate held-out data. It is not a guarantee for every future input.',
    },
    {
      number: '02',
      slug: 'math-statistics',
      title: 'Math & Statistics',
      description:
        'Work through probability, descriptive statistics, distributions, sampling, and statistical testing.',
      introduction:
        'Work through probability, descriptive statistics, distributions, sampling, and statistical testing.',
      concepts: [
        {
          id: 'ML-0201',
          number: '02.01',
          slug: 'probability-fundamentals',
          title: 'Probability Fundamentals',
          description:
            'Planned guide: Probability Fundamentals. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'ML-0202',
          number: '02.02',
          slug: 'conditional-probability',
          title: 'Conditional Probability',
          description:
            'Planned guide: Conditional Probability. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'ML-0203',
          number: '02.03',
          slug: 'joint-probability',
          title: 'Joint Probability',
          description:
            'Planned guide: Joint Probability. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'ML-0204',
          number: '02.04',
          slug: 'marginal-probability',
          title: 'Marginal Probability',
          description:
            'Planned guide: Marginal Probability. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'ML-0205',
          number: '02.05',
          slug: 'bayes-theorem',
          title: "Bayes' Theorem",
          description:
            "Planned guide: Bayes' Theorem. Focus on intuition, assumptions, and a worked example.",
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'ML-0206',
          number: '02.06',
          slug: 'probability-vs-likelihood',
          title: 'Probability vs Likelihood',
          description:
            'Planned guide: Probability vs Likelihood. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'ML-0207',
          number: '02.07',
          slug: 'maximum-likelihood-estimation',
          title: 'Maximum Likelihood Estimation',
          description:
            'Planned guide: Maximum Likelihood Estimation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'ML-0208',
          number: '02.08',
          slug: 'mean-median-mode',
          title: 'Mean, Median & Mode',
          description:
            'Planned guide: Mean, Median & Mode. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0209',
          number: '02.09',
          slug: 'variance',
          title: 'Variance',
          description:
            'Planned guide: Variance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0210',
          number: '02.10',
          slug: 'standard-deviation',
          title: 'Standard Deviation',
          description:
            'Planned guide: Standard Deviation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0211',
          number: '02.11',
          slug: 'percentiles',
          title: 'Percentiles',
          description:
            'Planned guide: Percentiles. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0212',
          number: '02.12',
          slug: 'covariance',
          title: 'Covariance',
          description:
            'Planned guide: Covariance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0213',
          number: '02.13',
          slug: 'correlation',
          title: 'Correlation',
          description:
            'Planned guide: Correlation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0214',
          number: '02.14',
          slug: 'pearson-correlation',
          title: 'Pearson Correlation',
          description:
            'Planned guide: Pearson Correlation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0215',
          number: '02.15',
          slug: 'spearman-correlation',
          title: 'Spearman Correlation',
          description:
            'Planned guide: Spearman Correlation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0216',
          number: '02.16',
          slug: 'correlation-vs-causation',
          title: 'Correlation vs Causation',
          description:
            'Planned guide: Correlation vs Causation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Descriptive Statistics',
        },
        {
          id: 'ML-0217',
          number: '02.17',
          slug: 'random-variables',
          title: 'Random Variables',
          description:
            'Planned guide: Random Variables. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Distributions',
        },
        {
          id: 'ML-0218',
          number: '02.18',
          slug: 'probability-distributions',
          title: 'Probability Distributions',
          description:
            'Planned guide: Probability Distributions. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Distributions',
        },
        {
          id: 'ML-0219',
          number: '02.19',
          slug: 'normal-distribution',
          title: 'Normal Distribution',
          description:
            'Planned guide: Normal Distribution. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Distributions',
        },
        {
          id: 'ML-0220',
          number: '02.20',
          slug: 'bernoulli-distribution',
          title: 'Bernoulli Distribution',
          description:
            'Planned guide: Bernoulli Distribution. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Distributions',
        },
        {
          id: 'ML-0221',
          number: '02.21',
          slug: 'binomial-distribution',
          title: 'Binomial Distribution',
          description:
            'Planned guide: Binomial Distribution. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Distributions',
        },
        {
          id: 'ML-0222',
          number: '02.22',
          slug: 'poisson-distribution',
          title: 'Poisson Distribution',
          description:
            'Planned guide: Poisson Distribution. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Distributions',
        },
        {
          id: 'ML-0223',
          number: '02.23',
          slug: 'population-vs-sample',
          title: 'Population vs Sample',
          description:
            'Planned guide: Population vs Sample. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Sampling',
        },
        {
          id: 'ML-0224',
          number: '02.24',
          slug: 'sampling-techniques',
          title: 'Sampling Techniques',
          description:
            'Planned guide: Sampling Techniques. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Sampling',
        },
        {
          id: 'ML-0225',
          number: '02.25',
          slug: 'sampling-bias',
          title: 'Sampling Bias',
          description:
            'Planned guide: Sampling Bias. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Sampling',
        },
        {
          id: 'ML-0226',
          number: '02.26',
          slug: 'central-limit-theorem',
          title: 'Central Limit Theorem',
          description:
            'Planned guide: Central Limit Theorem. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Sampling',
        },
        {
          id: 'ML-0227',
          number: '02.27',
          slug: 'standard-error',
          title: 'Standard Error',
          description:
            'Planned guide: Standard Error. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Sampling',
        },
        {
          id: 'ML-0228',
          number: '02.28',
          slug: 'confidence-intervals',
          title: 'Confidence Intervals',
          description:
            'Planned guide: Confidence Intervals. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Sampling',
        },
        {
          id: 'ML-0229',
          number: '02.29',
          slug: 'hypothesis-testing',
          title: 'Hypothesis Testing',
          description:
            'Planned guide: Hypothesis Testing. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0230',
          number: '02.30',
          slug: 'null-alternative-hypothesis',
          title: 'Null & Alternative Hypothesis',
          description:
            'Planned guide: Null & Alternative Hypothesis. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0231',
          number: '02.31',
          slug: 'p-values',
          title: 'P-Values',
          description:
            'Planned guide: P-Values. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0232',
          number: '02.32',
          slug: 'significance-level',
          title: 'Significance Level',
          description:
            'Planned guide: Significance Level. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0233',
          number: '02.33',
          slug: 'type-i-type-ii-errors',
          title: 'Type I & Type II Errors',
          description:
            'Planned guide: Type I & Type II Errors. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0234',
          number: '02.34',
          slug: 'statistical-power',
          title: 'Statistical Power',
          description:
            'Planned guide: Statistical Power. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0235',
          number: '02.35',
          slug: 'z-test',
          title: 'Z-Test',
          description:
            'Planned guide: Z-Test. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0236',
          number: '02.36',
          slug: 't-test',
          title: 'T-Test',
          description:
            'Planned guide: T-Test. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0237',
          number: '02.37',
          slug: 'chi-square-test',
          title: 'Chi-Square Test',
          description:
            'Planned guide: Chi-Square Test. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0238',
          number: '02.38',
          slug: 'anova',
          title: 'ANOVA',
          description:
            'Planned guide: ANOVA. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0239',
          number: '02.39',
          slug: 'two-way-anova',
          title: 'Two-Way ANOVA',
          description:
            'Planned guide: Two-Way ANOVA. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0240',
          number: '02.40',
          slug: 'parametric-vs-non-parametric-tests',
          title: 'Parametric vs Non-Parametric Tests',
          description:
            'Planned guide: Parametric vs Non-Parametric Tests. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
        {
          id: 'ML-0241',
          number: '02.41',
          slug: 'choosing-the-right-statistical-test',
          title: 'Choosing the Right Statistical Test',
          description:
            'Planned guide: Choosing the Right Statistical Test. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Statistical Testing',
        },
      ],
    },
    {
      number: '03',
      slug: 'data-preparation',
      title: 'Data Preparation',
      description:
        'Plan how to inspect, clean, split, and transform data before training a model.',
      introduction:
        'Plan how to inspect, clean, split, and transform data before training a model.',
      concepts: [
        {
          id: 'ML-0301',
          number: '03.01',
          slug: 'understanding-a-dataset',
          title: 'Understanding a Dataset',
          description:
            'Planned guide: Understanding a Dataset. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0302',
          number: '03.02',
          slug: 'structured-vs-unstructured-data',
          title: 'Structured vs Unstructured Data',
          description:
            'Planned guide: Structured vs Unstructured Data. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0303',
          number: '03.03',
          slug: 'numerical-variables',
          title: 'Numerical Variables',
          description:
            'Planned guide: Numerical Variables. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0304',
          number: '03.04',
          slug: 'categorical-variables',
          title: 'Categorical Variables',
          description:
            'Planned guide: Categorical Variables. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0305',
          number: '03.05',
          slug: 'ordinal-variables',
          title: 'Ordinal Variables',
          description:
            'Planned guide: Ordinal Variables. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0306',
          number: '03.06',
          slug: 'missing-values',
          title: 'Missing Values',
          description:
            'Planned guide: Missing Values. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0307',
          number: '03.07',
          slug: 'duplicate-records',
          title: 'Duplicate Records',
          description:
            'Planned guide: Duplicate Records. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0308',
          number: '03.08',
          slug: 'outliers',
          title: 'Outliers',
          description:
            'Planned guide: Outliers. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0309',
          number: '03.09',
          slug: 'invalid-values',
          title: 'Invalid Values',
          description:
            'Planned guide: Invalid Values. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0310',
          number: '03.10',
          slug: 'data-leakage',
          title: 'Data Leakage',
          description:
            'Planned guide: Data Leakage. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0311',
          number: '03.11',
          slug: 'train-validation-test-split',
          title: 'Train / Validation / Test Split',
          description:
            'Planned guide: Train / Validation / Test Split. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0312',
          number: '03.12',
          slug: 'random-sampling',
          title: 'Random Sampling',
          description:
            'Planned guide: Random Sampling. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0313',
          number: '03.13',
          slug: 'stratified-sampling',
          title: 'Stratified Sampling',
          description:
            'Planned guide: Stratified Sampling. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0314',
          number: '03.14',
          slug: 'time-based-splits',
          title: 'Time-Based Splits',
          description:
            'Planned guide: Time-Based Splits. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0315',
          number: '03.15',
          slug: 'data-transformation',
          title: 'Data Transformation',
          description:
            'Planned guide: Data Transformation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0316',
          number: '03.16',
          slug: 'normalization',
          title: 'Normalization',
          description:
            'Planned guide: Normalization. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0317',
          number: '03.17',
          slug: 'standardization',
          title: 'Standardization',
          description:
            'Planned guide: Standardization. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0318',
          number: '03.18',
          slug: 'robust-scaling',
          title: 'Robust Scaling',
          description:
            'Planned guide: Robust Scaling. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
      ],
    },
    {
      number: '04',
      slug: 'feature-engineering',
      title: 'Feature Engineering',
      description:
        'Explore feature creation, encoding, scaling, selection, and leakage checks.',
      introduction:
        'Explore feature creation, encoding, scaling, selection, and leakage checks.',
      concepts: [
        {
          id: 'ML-0401',
          number: '04.01',
          slug: 'what-is-a-feature',
          title: 'What is a Feature?',
          description:
            'Planned guide: What is a Feature. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0402',
          number: '04.02',
          slug: 'feature-engineering',
          title: 'Feature Engineering',
          description:
            'Planned guide: Feature Engineering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0403',
          number: '04.03',
          slug: 'feature-extraction',
          title: 'Feature Extraction',
          description:
            'Planned guide: Feature Extraction. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0404',
          number: '04.04',
          slug: 'feature-transformation',
          title: 'Feature Transformation',
          description:
            'Planned guide: Feature Transformation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0405',
          number: '04.05',
          slug: 'feature-selection',
          title: 'Feature Selection',
          description:
            'Planned guide: Feature Selection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0406',
          number: '04.06',
          slug: 'numerical-features',
          title: 'Numerical Features',
          description:
            'Planned guide: Numerical Features. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0407',
          number: '04.07',
          slug: 'categorical-features',
          title: 'Categorical Features',
          description:
            'Planned guide: Categorical Features. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0408',
          number: '04.08',
          slug: 'one-hot-encoding',
          title: 'One-Hot Encoding',
          description:
            'Planned guide: One-Hot Encoding. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0409',
          number: '04.09',
          slug: 'ordinal-encoding',
          title: 'Ordinal Encoding',
          description:
            'Planned guide: Ordinal Encoding. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0410',
          number: '04.10',
          slug: 'target-encoding',
          title: 'Target Encoding',
          description:
            'Planned guide: Target Encoding. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0411',
          number: '04.11',
          slug: 'frequency-encoding',
          title: 'Frequency Encoding',
          description:
            'Planned guide: Frequency Encoding. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0412',
          number: '04.12',
          slug: 'high-cardinality-features',
          title: 'High-Cardinality Features',
          description:
            'Planned guide: High-Cardinality Features. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0413',
          number: '04.13',
          slug: 'interaction-terms',
          title: 'Interaction Terms',
          description:
            'Planned guide: Interaction Terms. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0414',
          number: '04.14',
          slug: 'polynomial-features',
          title: 'Polynomial Features',
          description:
            'Planned guide: Polynomial Features. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0415',
          number: '04.15',
          slug: 'binning',
          title: 'Binning',
          description:
            'Planned guide: Binning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0416',
          number: '04.16',
          slug: 'log-transformations',
          title: 'Log Transformations',
          description:
            'Planned guide: Log Transformations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0417',
          number: '04.17',
          slug: 'date-time-features',
          title: 'Date / Time Features',
          description:
            'Planned guide: Date / Time Features. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0418',
          number: '04.18',
          slug: 'feature-scaling',
          title: 'Feature Scaling',
          description:
            'Planned guide: Feature Scaling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0419',
          number: '04.19',
          slug: 'feature-leakage',
          title: 'Feature Leakage',
          description:
            'Planned guide: Feature Leakage. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0420',
          number: '04.20',
          slug: 'multicollinearity',
          title: 'Multicollinearity',
          description:
            'Planned guide: Multicollinearity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0421',
          number: '04.21',
          slug: 'variance-inflation-factor',
          title: 'Variance Inflation Factor',
          description:
            'Planned guide: Variance Inflation Factor. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0422',
          number: '04.22',
          slug: 'weight-of-evidence',
          title: 'Weight of Evidence',
          description:
            'Planned guide: Weight of Evidence. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0423',
          number: '04.23',
          slug: 'information-value',
          title: 'Information Value',
          description:
            'Planned guide: Information Value. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '05',
      slug: 'regression',
      title: 'Regression',
      description:
        'Study linear regression, error metrics, assumptions, and diagnostic tools.',
      introduction:
        'Study linear regression, error metrics, assumptions, and diagnostic tools.',
      concepts: [
        {
          id: 'ML-0501',
          number: '05.01',
          slug: 'what-is-regression',
          title: 'What is Regression?',
          description:
            'Planned guide: What is Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0502',
          number: '05.02',
          slug: 'simple-linear-regression',
          title: 'Simple Linear Regression',
          description:
            'Planned guide: Simple Linear Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0503',
          number: '05.03',
          slug: 'multiple-linear-regression',
          title: 'Multiple Linear Regression',
          description:
            'Planned guide: Multiple Linear Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0504',
          number: '05.04',
          slug: 'ordinary-least-squares',
          title: 'Ordinary Least Squares',
          description:
            'Planned guide: Ordinary Least Squares. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0505',
          number: '05.05',
          slug: 'regression-coefficients',
          title: 'Regression Coefficients',
          description:
            'Planned guide: Regression Coefficients. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0506',
          number: '05.06',
          slug: 'intercept',
          title: 'Intercept',
          description:
            'Planned guide: Intercept. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0507',
          number: '05.07',
          slug: 'residuals',
          title: 'Residuals',
          description:
            'Planned guide: Residuals. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0508',
          number: '05.08',
          slug: 'sum-of-squares',
          title: 'Sum of Squares',
          description:
            'Planned guide: Sum of Squares. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'ML-0509',
          number: '05.09',
          slug: 'mae',
          title: 'MAE',
          description:
            'Planned guide: MAE. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Metrics',
        },
        {
          id: 'ML-0510',
          number: '05.10',
          slug: 'mse',
          title: 'MSE',
          description:
            'Planned guide: MSE. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Metrics',
        },
        {
          id: 'ML-0511',
          number: '05.11',
          slug: 'rmse',
          title: 'RMSE',
          description:
            'Planned guide: RMSE. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Metrics',
        },
        {
          id: 'ML-0512',
          number: '05.12',
          slug: 'mape',
          title: 'MAPE',
          description:
            'Planned guide: MAPE. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Metrics',
        },
        {
          id: 'ML-0513',
          number: '05.13',
          slug: 'r',
          title: 'R',
          description:
            'Planned guide: R. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Metrics',
        },
        {
          id: 'ML-0514',
          number: '05.14',
          slug: 'r2',
          title: 'R²',
          description:
            'Planned guide: R². Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Metrics',
        },
        {
          id: 'ML-0515',
          number: '05.15',
          slug: 'adjusted-r2',
          title: 'Adjusted R²',
          description:
            'Planned guide: Adjusted R². Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Metrics',
        },
        {
          id: 'ML-0516',
          number: '05.16',
          slug: 'linearity',
          title: 'Linearity',
          description:
            'Planned guide: Linearity. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0517',
          number: '05.17',
          slug: 'independence',
          title: 'Independence',
          description:
            'Planned guide: Independence. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0518',
          number: '05.18',
          slug: 'normality-of-residuals',
          title: 'Normality of Residuals',
          description:
            'Planned guide: Normality of Residuals. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0519',
          number: '05.19',
          slug: 'homoskedasticity',
          title: 'Homoskedasticity',
          description:
            'Planned guide: Homoskedasticity. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0520',
          number: '05.20',
          slug: 'heteroskedasticity',
          title: 'Heteroskedasticity',
          description:
            'Planned guide: Heteroskedasticity. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0521',
          number: '05.21',
          slug: 'autocorrelation',
          title: 'Autocorrelation',
          description:
            'Planned guide: Autocorrelation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0522',
          number: '05.22',
          slug: 'durbin-watson-test',
          title: 'Durbin-Watson Test',
          description:
            'Planned guide: Durbin-Watson Test. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0523',
          number: '05.23',
          slug: 'breusch-godfrey-test',
          title: 'Breusch-Godfrey Test',
          description:
            'Planned guide: Breusch-Godfrey Test. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0524',
          number: '05.24',
          slug: 'multicollinearity',
          title: 'Multicollinearity',
          description:
            'Planned guide: Multicollinearity. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0525',
          number: '05.25',
          slug: 'vif',
          title: 'VIF',
          description:
            'Planned guide: VIF. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Assumptions',
        },
        {
          id: 'ML-0526',
          number: '05.26',
          slug: 'residual-plots',
          title: 'Residual Plots',
          description:
            'Planned guide: Residual Plots. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Diagnostics',
        },
        {
          id: 'ML-0527',
          number: '05.27',
          slug: 'regression-output-explained',
          title: 'Regression Output Explained',
          description:
            'Planned guide: Regression Output Explained. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Diagnostics',
        },
        {
          id: 'ML-0528',
          number: '05.28',
          slug: 'coefficient-significance',
          title: 'Coefficient Significance',
          description:
            'Planned guide: Coefficient Significance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Diagnostics',
        },
        {
          id: 'ML-0529',
          number: '05.29',
          slug: 'confidence-intervals',
          title: 'Confidence Intervals',
          description:
            'Planned guide: Confidence Intervals. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Diagnostics',
        },
        {
          id: 'ML-0530',
          number: '05.30',
          slug: 'aic',
          title: 'AIC',
          description:
            'Planned guide: AIC. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Diagnostics',
        },
        {
          id: 'ML-0531',
          number: '05.31',
          slug: 'bic',
          title: 'BIC',
          description:
            'Planned guide: BIC. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Diagnostics',
        },
        {
          id: 'ML-0532',
          number: '05.32',
          slug: 'interpolation-vs-extrapolation',
          title: 'Interpolation vs Extrapolation',
          description:
            'Planned guide: Interpolation vs Extrapolation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Diagnostics',
        },
      ],
    },
    {
      number: '06',
      slug: 'classification',
      title: 'Classification',
      description:
        'Explore classification tasks, decision boundaries, thresholds, and logistic regression.',
      introduction:
        'Explore classification tasks, decision boundaries, thresholds, and logistic regression.',
      concepts: [
        {
          id: 'ML-0601',
          number: '06.01',
          slug: 'what-is-classification',
          title: 'What is Classification?',
          description:
            'Planned guide: What is Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0602',
          number: '06.02',
          slug: 'binary-classification',
          title: 'Binary Classification',
          description:
            'Planned guide: Binary Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0603',
          number: '06.03',
          slug: 'multiclass-classification',
          title: 'Multiclass Classification',
          description:
            'Planned guide: Multiclass Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0604',
          number: '06.04',
          slug: 'multilabel-classification',
          title: 'Multilabel Classification',
          description:
            'Planned guide: Multilabel Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0605',
          number: '06.05',
          slug: 'decision-boundary',
          title: 'Decision Boundary',
          description:
            'Planned guide: Decision Boundary. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0606',
          number: '06.06',
          slug: 'classification-probability',
          title: 'Classification Probability',
          description:
            'Planned guide: Classification Probability. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0607',
          number: '06.07',
          slug: 'thresholds',
          title: 'Thresholds',
          description:
            'Planned guide: Thresholds. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0608',
          number: '06.08',
          slug: 'logistic-regression',
          title: 'Logistic Regression',
          description:
            'Planned guide: Logistic Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
        {
          id: 'ML-0609',
          number: '06.09',
          slug: 'odds',
          title: 'Odds',
          description:
            'Planned guide: Odds. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
        {
          id: 'ML-0610',
          number: '06.10',
          slug: 'odds-ratio',
          title: 'Odds Ratio',
          description:
            'Planned guide: Odds Ratio. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
        {
          id: 'ML-0611',
          number: '06.11',
          slug: 'log-odds',
          title: 'Log Odds',
          description:
            'Planned guide: Log Odds. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
        {
          id: 'ML-0612',
          number: '06.12',
          slug: 'logit-function',
          title: 'Logit Function',
          description:
            'Planned guide: Logit Function. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
        {
          id: 'ML-0613',
          number: '06.13',
          slug: 'sigmoid-function',
          title: 'Sigmoid Function',
          description:
            'Planned guide: Sigmoid Function. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
        {
          id: 'ML-0614',
          number: '06.14',
          slug: 'maximum-likelihood-for-logistic-regression',
          title: 'Maximum Likelihood for Logistic Regression',
          description:
            'Planned guide: Maximum Likelihood for Logistic Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
        {
          id: 'ML-0615',
          number: '06.15',
          slug: 'logistic-regression-output-explained',
          title: 'Logistic Regression Output Explained',
          description:
            'Planned guide: Logistic Regression Output Explained. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Logistic Regression',
        },
      ],
    },
    {
      number: '07',
      slug: 'trees-ensembles',
      title: 'Trees & Ensembles',
      description:
        'Follow decision trees into bagging, boosting, and ensemble methods.',
      introduction:
        'Follow decision trees into bagging, boosting, and ensemble methods.',
      concepts: [
        {
          id: 'ML-0701',
          number: '07.01',
          slug: 'decision-trees',
          title: 'Decision Trees',
          description:
            'Planned guide: Decision Trees. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0702',
          number: '07.02',
          slug: 'classification-trees',
          title: 'Classification Trees',
          description:
            'Planned guide: Classification Trees. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0703',
          number: '07.03',
          slug: 'regression-trees',
          title: 'Regression Trees',
          description:
            'Planned guide: Regression Trees. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0704',
          number: '07.04',
          slug: 'tree-vs-linear-models',
          title: 'Tree vs Linear Models',
          description:
            'Planned guide: Tree vs Linear Models. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0705',
          number: '07.05',
          slug: 'splitting-criteria',
          title: 'Splitting Criteria',
          description:
            'Planned guide: Splitting Criteria. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0706',
          number: '07.06',
          slug: 'entropy',
          title: 'Entropy',
          description:
            'Planned guide: Entropy. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0707',
          number: '07.07',
          slug: 'information-gain',
          title: 'Information Gain',
          description:
            'Planned guide: Information Gain. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0708',
          number: '07.08',
          slug: 'gini-impurity',
          title: 'Gini Impurity',
          description:
            'Planned guide: Gini Impurity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0709',
          number: '07.09',
          slug: 'tree-depth',
          title: 'Tree Depth',
          description:
            'Planned guide: Tree Depth. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0710',
          number: '07.10',
          slug: 'pruning',
          title: 'Pruning',
          description:
            'Planned guide: Pruning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0711',
          number: '07.11',
          slug: 'tree-overfitting',
          title: 'Tree Overfitting',
          description:
            'Planned guide: Tree Overfitting. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Trees',
        },
        {
          id: 'ML-0712',
          number: '07.12',
          slug: 'ensemble-learning',
          title: 'Ensemble Learning',
          description:
            'Planned guide: Ensemble Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0713',
          number: '07.13',
          slug: 'bagging',
          title: 'Bagging',
          description:
            'Planned guide: Bagging. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0714',
          number: '07.14',
          slug: 'random-forest',
          title: 'Random Forest',
          description:
            'Planned guide: Random Forest. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0715',
          number: '07.15',
          slug: 'voting-classifiers',
          title: 'Voting Classifiers',
          description:
            'Planned guide: Voting Classifiers. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0716',
          number: '07.16',
          slug: 'boosting',
          title: 'Boosting',
          description:
            'Planned guide: Boosting. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0717',
          number: '07.17',
          slug: 'adaboost',
          title: 'AdaBoost',
          description:
            'Planned guide: AdaBoost. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0718',
          number: '07.18',
          slug: 'gradient-boosting',
          title: 'Gradient Boosting',
          description:
            'Planned guide: Gradient Boosting. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0719',
          number: '07.19',
          slug: 'xgboost',
          title: 'XGBoost',
          description:
            'Planned guide: XGBoost. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0720',
          number: '07.20',
          slug: 'lightgbm',
          title: 'LightGBM',
          description:
            'Planned guide: LightGBM. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0721',
          number: '07.21',
          slug: 'catboost',
          title: 'CatBoost',
          description:
            'Planned guide: CatBoost. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0722',
          number: '07.22',
          slug: 'stacking',
          title: 'Stacking',
          description:
            'Planned guide: Stacking. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
        {
          id: 'ML-0723',
          number: '07.23',
          slug: 'blending',
          title: 'Blending',
          description:
            'Planned guide: Blending. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Ensembles',
        },
      ],
    },
    {
      number: '08',
      slug: 'distance-based-learning',
      title: 'Distance-Based Learning',
      description:
        'Explore distance measures, nearest neighbors, scaling, and high-dimensional data.',
      introduction:
        'Explore distance measures, nearest neighbors, scaling, and high-dimensional data.',
      concepts: [
        {
          id: 'ML-0801',
          number: '08.01',
          slug: 'distance-based-learning',
          title: 'Distance-Based Learning',
          description:
            'Planned guide: Distance-Based Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0802',
          number: '08.02',
          slug: 'euclidean-distance',
          title: 'Euclidean Distance',
          description:
            'Planned guide: Euclidean Distance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0803',
          number: '08.03',
          slug: 'manhattan-distance',
          title: 'Manhattan Distance',
          description:
            'Planned guide: Manhattan Distance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0804',
          number: '08.04',
          slug: 'minkowski-distance',
          title: 'Minkowski Distance',
          description:
            'Planned guide: Minkowski Distance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0805',
          number: '08.05',
          slug: 'cosine-similarity',
          title: 'Cosine Similarity',
          description:
            'Planned guide: Cosine Similarity. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0806',
          number: '08.06',
          slug: 'k-nearest-neighbors',
          title: 'K-Nearest Neighbors',
          description:
            'Planned guide: K-Nearest Neighbors. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0807',
          number: '08.07',
          slug: 'knn-classification',
          title: 'KNN Classification',
          description:
            'Planned guide: KNN Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0808',
          number: '08.08',
          slug: 'knn-regression',
          title: 'KNN Regression',
          description:
            'Planned guide: KNN Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0809',
          number: '08.09',
          slug: 'choosing-k',
          title: 'Choosing K',
          description:
            'Planned guide: Choosing K. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0810',
          number: '08.10',
          slug: 'scaling-for-knn',
          title: 'Scaling for KNN',
          description:
            'Planned guide: Scaling for KNN. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-0811',
          number: '08.11',
          slug: 'curse-of-dimensionality',
          title: 'Curse of Dimensionality',
          description:
            'Planned guide: Curse of Dimensionality. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
      ],
    },
    {
      number: '09',
      slug: 'probabilistic-learning',
      title: 'Probabilistic Learning',
      description:
        'Work through priors, likelihood, posterior probability, and Naive Bayes methods.',
      introduction:
        'Work through priors, likelihood, posterior probability, and Naive Bayes methods.',
      concepts: [
        {
          id: 'ML-0901',
          number: '09.01',
          slug: 'probability-in-ml',
          title: 'Probability in ML',
          description:
            'Planned guide: Probability in ML. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0902',
          number: '09.02',
          slug: 'bayes-theorem',
          title: "Bayes' Theorem",
          description:
            "Planned guide: Bayes' Theorem. Focus on intuition, assumptions, and a worked example.",
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0903',
          number: '09.03',
          slug: 'prior-probability',
          title: 'Prior Probability',
          description:
            'Planned guide: Prior Probability. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0904',
          number: '09.04',
          slug: 'likelihood',
          title: 'Likelihood',
          description:
            'Planned guide: Likelihood. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0905',
          number: '09.05',
          slug: 'posterior-probability',
          title: 'Posterior Probability',
          description:
            'Planned guide: Posterior Probability. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0906',
          number: '09.06',
          slug: 'maximum-likelihood',
          title: 'Maximum Likelihood',
          description:
            'Planned guide: Maximum Likelihood. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0907',
          number: '09.07',
          slug: 'naive-bayes',
          title: 'Naive Bayes',
          description:
            'Planned guide: Naive Bayes. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0908',
          number: '09.08',
          slug: 'gaussian-naive-bayes',
          title: 'Gaussian Naive Bayes',
          description:
            'Planned guide: Gaussian Naive Bayes. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0909',
          number: '09.09',
          slug: 'multinomial-naive-bayes',
          title: 'Multinomial Naive Bayes',
          description:
            'Planned guide: Multinomial Naive Bayes. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-0910',
          number: '09.10',
          slug: 'bernoulli-naive-bayes',
          title: 'Bernoulli Naive Bayes',
          description:
            'Planned guide: Bernoulli Naive Bayes. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '10',
      slug: 'model-evaluation',
      title: 'Model Evaluation',
      description:
        'Compare classification and regression metrics, validation strategies, and probability calibration.',
      introduction:
        'Compare classification and regression metrics, validation strategies, and probability calibration.',
      concepts: [
        {
          id: 'ML-1001',
          number: '10.01',
          slug: 'confusion-matrix',
          title: 'Confusion Matrix',
          description:
            'Planned guide: Confusion Matrix. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1002',
          number: '10.02',
          slug: 'true-positive',
          title: 'True Positive',
          description:
            'Planned guide: True Positive. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1003',
          number: '10.03',
          slug: 'true-negative',
          title: 'True Negative',
          description:
            'Planned guide: True Negative. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1004',
          number: '10.04',
          slug: 'false-positive',
          title: 'False Positive',
          description:
            'Planned guide: False Positive. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1005',
          number: '10.05',
          slug: 'false-negative',
          title: 'False Negative',
          description:
            'Planned guide: False Negative. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1006',
          number: '10.06',
          slug: 'accuracy',
          title: 'Accuracy',
          description:
            'Planned guide: Accuracy. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1007',
          number: '10.07',
          slug: 'precision',
          title: 'Precision',
          description:
            'Planned guide: Precision. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1008',
          number: '10.08',
          slug: 'recall-sensitivity',
          title: 'Recall / Sensitivity',
          description:
            'Planned guide: Recall / Sensitivity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1009',
          number: '10.09',
          slug: 'specificity',
          title: 'Specificity',
          description:
            'Planned guide: Specificity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1010',
          number: '10.10',
          slug: 'f1-score',
          title: 'F1 Score',
          description:
            'Planned guide: F1 Score. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1011',
          number: '10.11',
          slug: 'fbeta-score',
          title: 'Fβ Score',
          description:
            'Planned guide: Fβ Score. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1012',
          number: '10.12',
          slug: 'roc-curve',
          title: 'ROC Curve',
          description:
            'Planned guide: ROC Curve. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1013',
          number: '10.13',
          slug: 'auc',
          title: 'AUC',
          description:
            'Planned guide: AUC. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1014',
          number: '10.14',
          slug: 'precision-recall-curve',
          title: 'Precision-Recall Curve',
          description:
            'Planned guide: Precision-Recall Curve. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1015',
          number: '10.15',
          slug: 'pr-auc',
          title: 'PR-AUC',
          description:
            'Planned guide: PR-AUC. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1016',
          number: '10.16',
          slug: 'log-loss',
          title: 'Log Loss',
          description:
            'Planned guide: Log Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'ML-1017',
          number: '10.17',
          slug: 'mae',
          title: 'MAE',
          description:
            'Planned guide: MAE. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'ML-1018',
          number: '10.18',
          slug: 'mse',
          title: 'MSE',
          description:
            'Planned guide: MSE. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'ML-1019',
          number: '10.19',
          slug: 'rmse',
          title: 'RMSE',
          description:
            'Planned guide: RMSE. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'ML-1020',
          number: '10.20',
          slug: 'r2',
          title: 'R²',
          description:
            'Planned guide: R². Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'ML-1021',
          number: '10.21',
          slug: 'adjusted-r2',
          title: 'Adjusted R²',
          description:
            'Planned guide: Adjusted R². Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'ML-1022',
          number: '10.22',
          slug: 'holdout-validation',
          title: 'Holdout Validation',
          description:
            'Planned guide: Holdout Validation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Validation',
        },
        {
          id: 'ML-1023',
          number: '10.23',
          slug: 'cross-validation',
          title: 'Cross-Validation',
          description:
            'Planned guide: Cross-Validation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Validation',
        },
        {
          id: 'ML-1024',
          number: '10.24',
          slug: 'k-fold',
          title: 'K-Fold',
          description:
            'Planned guide: K-Fold. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Validation',
        },
        {
          id: 'ML-1025',
          number: '10.25',
          slug: 'stratified-k-fold',
          title: 'Stratified K-Fold',
          description:
            'Planned guide: Stratified K-Fold. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Validation',
        },
        {
          id: 'ML-1026',
          number: '10.26',
          slug: 'leave-one-out',
          title: 'Leave-One-Out',
          description:
            'Planned guide: Leave-One-Out. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Validation',
        },
        {
          id: 'ML-1027',
          number: '10.27',
          slug: 'time-series-cross-validation',
          title: 'Time-Series Cross Validation',
          description:
            'Planned guide: Time-Series Cross Validation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Validation',
        },
        {
          id: 'ML-1028',
          number: '10.28',
          slug: 'probability-calibration',
          title: 'Probability Calibration',
          description:
            'Planned guide: Probability Calibration. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Calibration',
        },
        {
          id: 'ML-1029',
          number: '10.29',
          slug: 'calibration-curves',
          title: 'Calibration Curves',
          description:
            'Planned guide: Calibration Curves. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Calibration',
        },
        {
          id: 'ML-1030',
          number: '10.30',
          slug: 'brier-score',
          title: 'Brier Score',
          description:
            'Planned guide: Brier Score. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Calibration',
        },
        {
          id: 'ML-1031',
          number: '10.31',
          slug: 'threshold-selection',
          title: 'Threshold Selection',
          description:
            'Planned guide: Threshold Selection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Calibration',
        },
      ],
      insight:
        'A demo shows what worked once. Evaluation shows whether it works again.',
    },
    {
      number: '11',
      slug: 'model-diagnostics',
      title: 'Model Diagnostics',
      description:
        'Investigate errors, residuals, learning curves, data leakage, and performance across segments.',
      introduction:
        'Investigate errors, residuals, learning curves, data leakage, and performance across segments.',
      concepts: [
        {
          id: 'ML-1101',
          number: '11.01',
          slug: 'error-analysis',
          title: 'Error Analysis',
          description:
            'Planned guide: Error Analysis. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1102',
          number: '11.02',
          slug: 'residual-analysis',
          title: 'Residual Analysis',
          description:
            'Planned guide: Residual Analysis. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1103',
          number: '11.03',
          slug: 'learning-curves',
          title: 'Learning Curves',
          description:
            'Planned guide: Learning Curves. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1104',
          number: '11.04',
          slug: 'validation-curves',
          title: 'Validation Curves',
          description:
            'Planned guide: Validation Curves. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1105',
          number: '11.05',
          slug: 'bias-diagnostics',
          title: 'Bias Diagnostics',
          description:
            'Planned guide: Bias Diagnostics. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1106',
          number: '11.06',
          slug: 'variance-diagnostics',
          title: 'Variance Diagnostics',
          description:
            'Planned guide: Variance Diagnostics. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1107',
          number: '11.07',
          slug: 'feature-leakage-detection',
          title: 'Feature Leakage Detection',
          description:
            'Planned guide: Feature Leakage Detection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1108',
          number: '11.08',
          slug: 'out-of-distribution-inputs',
          title: 'Out-of-Distribution Inputs',
          description:
            'Planned guide: Out-of-Distribution Inputs. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1109',
          number: '11.09',
          slug: 'calibration-diagnostics',
          title: 'Calibration Diagnostics',
          description:
            'Planned guide: Calibration Diagnostics. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1110',
          number: '11.10',
          slug: 'segment-level-evaluation',
          title: 'Segment-Level Evaluation',
          description:
            'Planned guide: Segment-Level Evaluation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '12',
      slug: 'regularization',
      title: 'Regularization',
      description:
        'Study penalties, model complexity, sparsity, and early stopping.',
      introduction:
        'Study penalties, model complexity, sparsity, and early stopping.',
      concepts: [
        {
          id: 'ML-1201',
          number: '12.01',
          slug: 'why-regularization-matters',
          title: 'Why Regularization Matters',
          description:
            'Planned guide: Why Regularization Matters. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1202',
          number: '12.02',
          slug: 'l1-regularization',
          title: 'L1 Regularization',
          description:
            'Planned guide: L1 Regularization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1203',
          number: '12.03',
          slug: 'l2-regularization',
          title: 'L2 Regularization',
          description:
            'Planned guide: L2 Regularization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1204',
          number: '12.04',
          slug: 'elastic-net',
          title: 'Elastic Net',
          description:
            'Planned guide: Elastic Net. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1205',
          number: '12.05',
          slug: 'ridge-regression',
          title: 'Ridge Regression',
          description:
            'Planned guide: Ridge Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1206',
          number: '12.06',
          slug: 'lasso-regression',
          title: 'Lasso Regression',
          description:
            'Planned guide: Lasso Regression. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1207',
          number: '12.07',
          slug: 'regularization-strength',
          title: 'Regularization Strength',
          description:
            'Planned guide: Regularization Strength. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1208',
          number: '12.08',
          slug: 'sparsity',
          title: 'Sparsity',
          description:
            'Planned guide: Sparsity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1209',
          number: '12.09',
          slug: 'model-complexity',
          title: 'Model Complexity',
          description:
            'Planned guide: Model Complexity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1210',
          number: '12.10',
          slug: 'early-stopping',
          title: 'Early Stopping',
          description:
            'Planned guide: Early Stopping. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1211',
          number: '12.11',
          slug: 'regularization-vs-feature-selection',
          title: 'Regularization vs Feature Selection',
          description:
            'Planned guide: Regularization vs Feature Selection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '13',
      slug: 'unsupervised-learning',
      title: 'Unsupervised Learning',
      description:
        'Explore unlabeled data through pattern discovery, clustering, and latent structure.',
      introduction:
        'Explore unlabeled data through pattern discovery, clustering, and latent structure.',
      concepts: [
        {
          id: 'ML-1301',
          number: '13.01',
          slug: 'what-is-unsupervised-learning',
          title: 'What is Unsupervised Learning?',
          description:
            'Planned guide: What is Unsupervised Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-1302',
          number: '13.02',
          slug: 'supervised-vs-unsupervised',
          title: 'Supervised vs Unsupervised',
          description:
            'Planned guide: Supervised vs Unsupervised. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-1303',
          number: '13.03',
          slug: 'pattern-discovery',
          title: 'Pattern Discovery',
          description:
            'Planned guide: Pattern Discovery. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-1304',
          number: '13.04',
          slug: 'latent-structure',
          title: 'Latent Structure',
          description:
            'Planned guide: Latent Structure. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-1305',
          number: '13.05',
          slug: 'clustering',
          title: 'Clustering',
          description:
            'Planned guide: Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-1306',
          number: '13.06',
          slug: 'dimensionality-reduction',
          title: 'Dimensionality Reduction',
          description:
            'Planned guide: Dimensionality Reduction. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-1307',
          number: '13.07',
          slug: 'density-estimation',
          title: 'Density Estimation',
          description:
            'Planned guide: Density Estimation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'ML-1308',
          number: '13.08',
          slug: 'anomaly-detection',
          title: 'Anomaly Detection',
          description:
            'Planned guide: Anomaly Detection. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
      ],
    },
    {
      number: '14',
      slug: 'clustering',
      title: 'Clustering',
      description:
        'Learn K-Means, hierarchical clustering, DBSCAN, Gaussian mixture models, cluster validation, and how to choose an appropriate clustering approach.',
      introduction:
        'Find structure without labels. This section outlines the methods, distance choices, and validation questions to explore before interpreting a cluster.',
      concepts: [
        {
          id: 'ML-1401',
          number: '14.01',
          slug: 'what-is-clustering',
          title: 'What is Clustering?',
          description:
            'Planned guide: What is Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1402',
          number: '14.02',
          slug: 'distance-in-clustering',
          title: 'Distance in Clustering',
          description:
            'Planned guide: Distance in Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1403',
          number: '14.03',
          slug: 'k-means',
          title: 'K-Means',
          description:
            'Plan a worked example of K-Means, including initialization, assignment, and interpretation.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1404',
          number: '14.04',
          slug: 'k-means-initialization',
          title: 'K-Means Initialization',
          description:
            'Planned guide: K-Means Initialization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1405',
          number: '14.05',
          slug: 'choosing-k',
          title: 'Choosing K',
          description:
            'Planned guide: Choosing K. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1406',
          number: '14.06',
          slug: 'elbow-method',
          title: 'Elbow Method',
          description:
            'Planned guide: Elbow Method. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1407',
          number: '14.07',
          slug: 'silhouette-score',
          title: 'Silhouette Score',
          description:
            'Use a planned example to examine cluster separation and the limitations of a single score.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1408',
          number: '14.08',
          slug: 'hierarchical-clustering',
          title: 'Hierarchical Clustering',
          description:
            'Planned guide: Hierarchical Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1409',
          number: '14.09',
          slug: 'agglomerative-clustering',
          title: 'Agglomerative Clustering',
          description:
            'Planned guide: Agglomerative Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1410',
          number: '14.10',
          slug: 'divisive-clustering',
          title: 'Divisive Clustering',
          description:
            'Planned guide: Divisive Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1411',
          number: '14.11',
          slug: 'dendrograms',
          title: 'Dendrograms',
          description:
            'Planned guide: Dendrograms. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1412',
          number: '14.12',
          slug: 'dbscan',
          title: 'DBSCAN',
          description:
            'Planned guide: DBSCAN. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1413',
          number: '14.13',
          slug: 'density-based-clustering',
          title: 'Density-Based Clustering',
          description:
            'Planned guide: Density-Based Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1414',
          number: '14.14',
          slug: 'gaussian-mixture-models',
          title: 'Gaussian Mixture Models',
          description:
            'Planned guide: Gaussian Mixture Models. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1415',
          number: '14.15',
          slug: 'soft-clustering',
          title: 'Soft Clustering',
          description:
            'Planned guide: Soft Clustering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1416',
          number: '14.16',
          slug: 'cluster-validation',
          title: 'Cluster Validation',
          description:
            'Planned guide: Cluster Validation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1417',
          number: '14.17',
          slug: 'cluster-assumptions',
          title: 'Cluster Assumptions',
          description:
            'Planned guide: Cluster Assumptions. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1418',
          number: '14.18',
          slug: 'choosing-the-right-clustering-algorithm',
          title: 'Choosing the Right Clustering Algorithm',
          description:
            'Planned guide: Choosing the Right Clustering Algorithm. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1419',
          number: '14.19',
          slug: 'clustering-failure-modes',
          title: 'Clustering Failure Modes',
          description:
            'Investigate unstable or misleading groupings before treating clusters as meaningful categories.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
      insight:
        'Clusters are easy to draw. The hard part is deciding whether they mean anything.',
    },
    {
      number: '15',
      slug: 'dimensionality-reduction',
      title: 'Dimensionality Reduction',
      description:
        'Explore PCA, LDA, t-SNE, UMAP, and the assumptions behind lower-dimensional representations.',
      introduction:
        'Explore PCA, LDA, t-SNE, UMAP, and the assumptions behind lower-dimensional representations.',
      concepts: [
        {
          id: 'ML-1501',
          number: '15.01',
          slug: 'what-is-dimensionality-reduction',
          title: 'What is Dimensionality Reduction?',
          description:
            'Planned guide: What is Dimensionality Reduction. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1502',
          number: '15.02',
          slug: 'curse-of-dimensionality',
          title: 'Curse of Dimensionality',
          description:
            'Planned guide: Curse of Dimensionality. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1503',
          number: '15.03',
          slug: 'feature-selection-vs-dimensionality-reduction',
          title: 'Feature Selection vs Dimensionality Reduction',
          description:
            'Planned guide: Feature Selection vs Dimensionality Reduction. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1504',
          number: '15.04',
          slug: 'pca',
          title: 'PCA',
          description:
            'Plan a PCA example that connects transformed features with explained variance.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1505',
          number: '15.05',
          slug: 'pca-intuition',
          title: 'PCA Intuition',
          description:
            'Planned guide: PCA Intuition. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1506',
          number: '15.06',
          slug: 'covariance-matrix',
          title: 'Covariance Matrix',
          description:
            'Planned guide: Covariance Matrix. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1507',
          number: '15.07',
          slug: 'eigenvalues',
          title: 'Eigenvalues',
          description:
            'Planned guide: Eigenvalues. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1508',
          number: '15.08',
          slug: 'eigenvectors',
          title: 'Eigenvectors',
          description:
            'Planned guide: Eigenvectors. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1509',
          number: '15.09',
          slug: 'principal-components',
          title: 'Principal Components',
          description:
            'Planned guide: Principal Components. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1510',
          number: '15.10',
          slug: 'explained-variance',
          title: 'Explained Variance',
          description:
            'Planned guide: Explained Variance. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1511',
          number: '15.11',
          slug: 'choosing-pca-components',
          title: 'Choosing PCA Components',
          description:
            'Planned guide: Choosing PCA Components. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1512',
          number: '15.12',
          slug: 'pca-practical-tips',
          title: 'PCA Practical Tips',
          description:
            'Planned guide: PCA Practical Tips. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1513',
          number: '15.13',
          slug: 'lda',
          title: 'LDA',
          description:
            'Planned guide: LDA. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1514',
          number: '15.14',
          slug: 'pca-vs-lda',
          title: 'PCA vs LDA',
          description:
            'Planned guide: PCA vs LDA. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1515',
          number: '15.15',
          slug: 't-sne',
          title: 't-SNE',
          description:
            'Planned guide: t-SNE. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1516',
          number: '15.16',
          slug: 'umap',
          title: 'UMAP',
          description:
            'Planned guide: UMAP. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1517',
          number: '15.17',
          slug: 'factor-analysis',
          title: 'Factor Analysis',
          description:
            'Planned guide: Factor Analysis. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1518',
          number: '15.18',
          slug: 'dimensionality-reduction-assumptions',
          title: 'Dimensionality Reduction Assumptions',
          description:
            'Planned guide: Dimensionality Reduction Assumptions. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1519',
          number: '15.19',
          slug: 'advantages-limitations',
          title: 'Advantages & Limitations',
          description:
            'Planned guide: Advantages & Limitations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '16',
      slug: 'model-selection-tuning',
      title: 'Model Selection & Tuning',
      description:
        'Plan baselines, model comparisons, hyperparameter searches, and reproducible validation.',
      introduction:
        'Plan baselines, model comparisons, hyperparameter searches, and reproducible validation.',
      concepts: [
        {
          id: 'ML-1601',
          number: '16.01',
          slug: 'parameters-vs-hyperparameters',
          title: 'Parameters vs Hyperparameters',
          description:
            'Planned guide: Parameters vs Hyperparameters. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1602',
          number: '16.02',
          slug: 'baseline-models',
          title: 'Baseline Models',
          description:
            'Planned guide: Baseline Models. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1603',
          number: '16.03',
          slug: 'model-comparison',
          title: 'Model Comparison',
          description:
            'Planned guide: Model Comparison. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1604',
          number: '16.04',
          slug: 'grid-search',
          title: 'Grid Search',
          description:
            'Planned guide: Grid Search. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1605',
          number: '16.05',
          slug: 'random-search',
          title: 'Random Search',
          description:
            'Planned guide: Random Search. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1606',
          number: '16.06',
          slug: 'bayesian-optimization',
          title: 'Bayesian Optimization',
          description:
            'Planned guide: Bayesian Optimization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1607',
          number: '16.07',
          slug: 'automated-optimization',
          title: 'Automated Optimization',
          description:
            'Planned guide: Automated Optimization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1608',
          number: '16.08',
          slug: 'nested-cross-validation',
          title: 'Nested Cross-Validation',
          description:
            'Planned guide: Nested Cross-Validation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1609',
          number: '16.09',
          slug: 'choosing-the-right-metric',
          title: 'Choosing the Right Metric',
          description:
            'Planned guide: Choosing the Right Metric. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1610',
          number: '16.10',
          slug: 'search-space-design',
          title: 'Search Space Design',
          description:
            'Planned guide: Search Space Design. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1611',
          number: '16.11',
          slug: 'early-stopping',
          title: 'Early Stopping',
          description:
            'Planned guide: Early Stopping. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1612',
          number: '16.12',
          slug: 'over-tuning',
          title: 'Over-Tuning',
          description:
            'Planned guide: Over-Tuning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1613',
          number: '16.13',
          slug: 'reproducibility',
          title: 'Reproducibility',
          description:
            'Planned guide: Reproducibility. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '17',
      slug: 'imbalanced-learning',
      title: 'Imbalanced Learning',
      description:
        'Explore rare events, sampling, class weights, threshold tuning, and evaluation under class imbalance.',
      introduction:
        'Explore rare events, sampling, class weights, threshold tuning, and evaluation under class imbalance.',
      concepts: [
        {
          id: 'ML-1701',
          number: '17.01',
          slug: 'imbalanced-datasets',
          title: 'Imbalanced Datasets',
          description:
            'Planned guide: Imbalanced Datasets. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1702',
          number: '17.02',
          slug: 'why-accuracy-can-fail',
          title: 'Why Accuracy Can Fail',
          description:
            'Planned guide: Why Accuracy Can Fail. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1703',
          number: '17.03',
          slug: 'precision-recall-tradeoff',
          title: 'Precision-Recall Tradeoff',
          description:
            'Planned guide: Precision-Recall Tradeoff. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1704',
          number: '17.04',
          slug: 'class-weights',
          title: 'Class Weights',
          description:
            'Planned guide: Class Weights. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1705',
          number: '17.05',
          slug: 'undersampling',
          title: 'Undersampling',
          description:
            'Planned guide: Undersampling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1706',
          number: '17.06',
          slug: 'oversampling',
          title: 'Oversampling',
          description:
            'Planned guide: Oversampling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1707',
          number: '17.07',
          slug: 'smote',
          title: 'SMOTE',
          description:
            'Planned guide: SMOTE. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1708',
          number: '17.08',
          slug: 'threshold-tuning',
          title: 'Threshold Tuning',
          description:
            'Planned guide: Threshold Tuning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1709',
          number: '17.09',
          slug: 'cost-sensitive-learning',
          title: 'Cost-Sensitive Learning',
          description:
            'Planned guide: Cost-Sensitive Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1710',
          number: '17.10',
          slug: 'rare-event-modeling',
          title: 'Rare Event Modeling',
          description:
            'Planned guide: Rare Event Modeling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1711',
          number: '17.11',
          slug: 'fraud-detection',
          title: 'Fraud Detection',
          description:
            'Planned guide: Fraud Detection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1712',
          number: '17.12',
          slug: 'anomaly-detection',
          title: 'Anomaly Detection',
          description:
            'Planned guide: Anomaly Detection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '18',
      slug: 'explainability',
      title: 'Explainability',
      description:
        'Study global and local explanations, feature importance, and the limits of interpreting model behavior.',
      introduction:
        'Study global and local explanations, feature importance, and the limits of interpreting model behavior.',
      concepts: [
        {
          id: 'ML-1801',
          number: '18.01',
          slug: 'explainability-vs-interpretability',
          title: 'Explainability vs Interpretability',
          description:
            'Planned guide: Explainability vs Interpretability. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1802',
          number: '18.02',
          slug: 'global-explanations',
          title: 'Global Explanations',
          description:
            'Planned guide: Global Explanations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1803',
          number: '18.03',
          slug: 'local-explanations',
          title: 'Local Explanations',
          description:
            'Planned guide: Local Explanations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1804',
          number: '18.04',
          slug: 'linear-model-coefficients',
          title: 'Linear Model Coefficients',
          description:
            'Planned guide: Linear Model Coefficients. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1805',
          number: '18.05',
          slug: 'feature-importance',
          title: 'Feature Importance',
          description:
            'Planned guide: Feature Importance. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1806',
          number: '18.06',
          slug: 'permutation-importance',
          title: 'Permutation Importance',
          description:
            'Planned guide: Permutation Importance. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1807',
          number: '18.07',
          slug: 'partial-dependence',
          title: 'Partial Dependence',
          description:
            'Planned guide: Partial Dependence. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1808',
          number: '18.08',
          slug: 'ice-plots',
          title: 'ICE Plots',
          description:
            'Planned guide: ICE Plots. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1809',
          number: '18.09',
          slug: 'shap',
          title: 'SHAP',
          description:
            'Explore SHAP explanations and the limits of interpreting feature contributions.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1810',
          number: '18.10',
          slug: 'lime',
          title: 'LIME',
          description:
            'Planned guide: LIME. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1811',
          number: '18.11',
          slug: 'counterfactual-explanations',
          title: 'Counterfactual Explanations',
          description:
            'Planned guide: Counterfactual Explanations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1812',
          number: '18.12',
          slug: 'explanation-limitations',
          title: 'Explanation Limitations',
          description:
            'Planned guide: Explanation Limitations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
      insight:
        'An explanation can describe model behavior. It does not automatically reveal causation.',
    },
    {
      number: '19',
      slug: 'applied-ml',
      title: 'Applied ML',
      description:
        'Connect the learning sequence to recommendations, ranking, forecasting, and other applied problems.',
      introduction:
        'Connect the learning sequence to recommendations, ranking, forecasting, and other applied problems.',
      concepts: [
        {
          id: 'ML-1901',
          number: '19.01',
          slug: 'recommendation-systems',
          title: 'Recommendation Systems',
          description:
            'Planned guide: Recommendation Systems. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1902',
          number: '19.02',
          slug: 'collaborative-filtering',
          title: 'Collaborative Filtering',
          description:
            'Planned guide: Collaborative Filtering. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1903',
          number: '19.03',
          slug: 'content-based-recommendations',
          title: 'Content-Based Recommendations',
          description:
            'Planned guide: Content-Based Recommendations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1904',
          number: '19.04',
          slug: 'learning-to-rank',
          title: 'Learning to Rank',
          description:
            'Planned guide: Learning to Rank. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1905',
          number: '19.05',
          slug: 'search-ranking',
          title: 'Search Ranking',
          description:
            'Planned guide: Search Ranking. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1906',
          number: '19.06',
          slug: 'fraud-detection',
          title: 'Fraud Detection',
          description:
            'Planned guide: Fraud Detection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1907',
          number: '19.07',
          slug: 'churn-prediction',
          title: 'Churn Prediction',
          description:
            'Planned guide: Churn Prediction. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1908',
          number: '19.08',
          slug: 'customer-segmentation',
          title: 'Customer Segmentation',
          description:
            'Planned guide: Customer Segmentation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1909',
          number: '19.09',
          slug: 'demand-forecasting',
          title: 'Demand Forecasting',
          description:
            'Planned guide: Demand Forecasting. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1910',
          number: '19.10',
          slug: 'predictive-maintenance',
          title: 'Predictive Maintenance',
          description:
            'Planned guide: Predictive Maintenance. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1911',
          number: '19.11',
          slug: 'credit-risk-modeling',
          title: 'Credit Risk Modeling',
          description:
            'Planned guide: Credit Risk Modeling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1912',
          number: '19.12',
          slug: 'marketing-propensity',
          title: 'Marketing Propensity',
          description:
            'Planned guide: Marketing Propensity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1913',
          number: '19.13',
          slug: 'time-series-forecasting',
          title: 'Time-Series Forecasting',
          description:
            'Planned guide: Time-Series Forecasting. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'ML-1914',
          number: '19.14',
          slug: 'anomaly-detection',
          title: 'Anomaly Detection',
          description:
            'Planned guide: Anomaly Detection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '20',
      slug: 'production-ml',
      title: 'Production ML',
      description:
        'Follow models into pipelines, deployment, monitoring, drift detection, retraining, and governance.',
      introduction:
        'Follow models into pipelines, deployment, monitoring, drift detection, retraining, and governance.',
      concepts: [
        {
          id: 'ML-2001',
          number: '20.01',
          slug: 'from-notebook-to-production',
          title: 'From Notebook to Production',
          description:
            'Planned guide: From Notebook to Production. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2002',
          number: '20.02',
          slug: 'training-pipelines',
          title: 'Training Pipelines',
          description:
            'Planned guide: Training Pipelines. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2003',
          number: '20.03',
          slug: 'inference-pipelines',
          title: 'Inference Pipelines',
          description:
            'Planned guide: Inference Pipelines. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2004',
          number: '20.04',
          slug: 'batch-inference',
          title: 'Batch Inference',
          description:
            'Planned guide: Batch Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2005',
          number: '20.05',
          slug: 'online-inference',
          title: 'Online Inference',
          description:
            'Planned guide: Online Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2006',
          number: '20.06',
          slug: 'real-time-prediction',
          title: 'Real-Time Prediction',
          description:
            'Planned guide: Real-Time Prediction. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2007',
          number: '20.07',
          slug: 'feature-stores',
          title: 'Feature Stores',
          description:
            'Planned guide: Feature Stores. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2008',
          number: '20.08',
          slug: 'model-registry',
          title: 'Model Registry',
          description:
            'Planned guide: Model Registry. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2009',
          number: '20.09',
          slug: 'model-versioning',
          title: 'Model Versioning',
          description:
            'Planned guide: Model Versioning. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2010',
          number: '20.10',
          slug: 'data-versioning',
          title: 'Data Versioning',
          description:
            'Planned guide: Data Versioning. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2011',
          number: '20.11',
          slug: 'experiment-tracking',
          title: 'Experiment Tracking',
          description:
            'Planned guide: Experiment Tracking. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2012',
          number: '20.12',
          slug: 'deployment-strategies',
          title: 'Deployment Strategies',
          description:
            'Planned guide: Deployment Strategies. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2013',
          number: '20.13',
          slug: 'shadow-deployment',
          title: 'Shadow Deployment',
          description:
            'Planned guide: Shadow Deployment. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2014',
          number: '20.14',
          slug: 'canary-deployment',
          title: 'Canary Deployment',
          description:
            'Planned guide: Canary Deployment. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2015',
          number: '20.15',
          slug: 'a-b-testing-models',
          title: 'A/B Testing Models',
          description:
            'Planned guide: A/B Testing Models. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2016',
          number: '20.16',
          slug: 'model-monitoring',
          title: 'Model Monitoring',
          description:
            'Planned guide: Model Monitoring. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2017',
          number: '20.17',
          slug: 'data-drift',
          title: 'Data Drift',
          description:
            'Plan checks for changing input data and distinguish detection from a performance conclusion.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2018',
          number: '20.18',
          slug: 'concept-drift',
          title: 'Concept Drift',
          description:
            'Planned guide: Concept Drift. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2019',
          number: '20.19',
          slug: 'prediction-drift',
          title: 'Prediction Drift',
          description:
            'Planned guide: Prediction Drift. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2020',
          number: '20.20',
          slug: 'performance-degradation',
          title: 'Performance Degradation',
          description:
            'Planned guide: Performance Degradation. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2021',
          number: '20.21',
          slug: 'retraining',
          title: 'Retraining',
          description:
            'Planned guide: Retraining. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2022',
          number: '20.22',
          slug: 'ml-observability',
          title: 'ML Observability',
          description:
            'Planned guide: ML Observability. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2023',
          number: '20.23',
          slug: 'model-governance',
          title: 'Model Governance',
          description:
            'Planned guide: Model Governance. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2024',
          number: '20.24',
          slug: 'reproducibility',
          title: 'Reproducibility',
          description:
            'Planned guide: Reproducibility. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'ML-2025',
          number: '20.25',
          slug: 'production-failure-modes',
          title: 'Production Failure Modes',
          description:
            'Planned guide: Production Failure Modes. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
      ],
      insight:
        'Deployment is not the finish line. It is where the real experiment begins.',
    },
    {
      number: '21',
      slug: 'advanced-ml',
      title: 'Advanced ML',
      description:
        'Explore transfer, active learning, weak supervision, distribution shift, and other advanced directions.',
      introduction:
        'Explore transfer, active learning, weak supervision, distribution shift, and other advanced directions.',
      concepts: [
        {
          id: 'ML-2101',
          number: '21.01',
          slug: 'semi-supervised-learning',
          title: 'Semi-Supervised Learning',
          description:
            'Planned guide: Semi-Supervised Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2102',
          number: '21.02',
          slug: 'self-supervised-learning',
          title: 'Self-Supervised Learning',
          description:
            'Planned guide: Self-Supervised Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2103',
          number: '21.03',
          slug: 'transfer-learning',
          title: 'Transfer Learning',
          description:
            'Planned guide: Transfer Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2104',
          number: '21.04',
          slug: 'active-learning',
          title: 'Active Learning',
          description:
            'Planned guide: Active Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2105',
          number: '21.05',
          slug: 'online-learning',
          title: 'Online Learning',
          description:
            'Planned guide: Online Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2106',
          number: '21.06',
          slug: 'incremental-learning',
          title: 'Incremental Learning',
          description:
            'Planned guide: Incremental Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2107',
          number: '21.07',
          slug: 'multi-task-learning',
          title: 'Multi-Task Learning',
          description:
            'Planned guide: Multi-Task Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2108',
          number: '21.08',
          slug: 'meta-learning',
          title: 'Meta-Learning',
          description:
            'Planned guide: Meta-Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2109',
          number: '21.09',
          slug: 'automl',
          title: 'AutoML',
          description:
            'Planned guide: AutoML. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2110',
          number: '21.10',
          slug: 'ensemble-optimization',
          title: 'Ensemble Optimization',
          description:
            'Planned guide: Ensemble Optimization. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2111',
          number: '21.11',
          slug: 'weak-supervision',
          title: 'Weak Supervision',
          description:
            'Planned guide: Weak Supervision. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2112',
          number: '21.12',
          slug: 'synthetic-data-for-ml',
          title: 'Synthetic Data for ML',
          description:
            'Planned guide: Synthetic Data for ML. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2113',
          number: '21.13',
          slug: 'distribution-shift',
          title: 'Distribution Shift',
          description:
            'Planned guide: Distribution Shift. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2114',
          number: '21.14',
          slug: 'domain-adaptation',
          title: 'Domain Adaptation',
          description:
            'Planned guide: Domain Adaptation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2115',
          number: '21.15',
          slug: 'causal-ml',
          title: 'Causal ML',
          description:
            'Planned guide: Causal ML. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'ML-2116',
          number: '21.16',
          slug: 'graph-machine-learning',
          title: 'Graph Machine Learning',
          description:
            'Planned guide: Graph Machine Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '22',
      slug: 'projects-experiments',
      title: 'Projects & Experiments',
      description:
        'Choose a proposed project, define a baseline, and plan how to evaluate the result.',
      introduction:
        'Choose a proposed project, define a baseline, and plan how to evaluate the result.',
      concepts: [
        {
          id: 'ML-2201',
          number: '22.01',
          slug: 'predict-house-prices',
          title: 'Predict House Prices',
          description:
            'Proposed project: Predict House Prices. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'ML-2202',
          number: '22.02',
          slug: 'customer-churn-classification',
          title: 'Customer Churn Classification',
          description:
            'Proposed project: Customer Churn Classification. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'ML-2203',
          number: '22.03',
          slug: 'loan-risk-classification',
          title: 'Loan Risk Classification',
          description:
            'Proposed project: Loan Risk Classification. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'ML-2204',
          number: '22.04',
          slug: 'customer-segmentation',
          title: 'Customer Segmentation',
          description:
            'Proposed project: Customer Segmentation. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'ML-2205',
          number: '22.05',
          slug: 'spam-detection',
          title: 'Spam Detection',
          description:
            'Proposed project: Spam Detection. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'ML-2206',
          number: '22.06',
          slug: 'fraud-detection-with-imbalanced-data',
          title: 'Fraud Detection with Imbalanced Data',
          description:
            'Proposed project: Fraud Detection with Imbalanced Data. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'ML-2207',
          number: '22.07',
          slug: 'recommendation-system',
          title: 'Recommendation System',
          description:
            'Proposed project: Recommendation System. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'ML-2208',
          number: '22.08',
          slug: 'demand-forecasting',
          title: 'Demand Forecasting',
          description:
            'Proposed project: Demand Forecasting. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'ML-2209',
          number: '22.09',
          slug: 'model-explainability-with-shap',
          title: 'Model Explainability with SHAP',
          description:
            'Proposed project: Model Explainability with SHAP. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'ML-2210',
          number: '22.10',
          slug: 'compare-tree-ensembles',
          title: 'Compare Tree Ensembles',
          description:
            'Proposed project: Compare Tree Ensembles. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'ML-2211',
          number: '22.11',
          slug: 'production-ml-api',
          title: 'Production ML API',
          description:
            'Proposed project: Production ML API. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'ML-2212',
          number: '22.12',
          slug: 'end-to-end-training-pipeline',
          title: 'End-to-End Training Pipeline',
          description:
            'Proposed project: End-to-End Training Pipeline. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'ML-2213',
          number: '22.13',
          slug: 'model-monitoring-system',
          title: 'Model Monitoring System',
          description:
            'Proposed project: Model Monitoring System. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'ML-2214',
          number: '22.14',
          slug: 'drift-detection-pipeline',
          title: 'Drift Detection Pipeline',
          description:
            'Proposed project: Drift Detection Pipeline. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'ML-2215',
          number: '22.15',
          slug: 'automated-model-evaluation',
          title: 'Automated Model Evaluation',
          description:
            'Proposed project: Automated Model Evaluation. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'ML-2216',
          number: '22.16',
          slug: 'feature-store-design',
          title: 'Feature Store Design',
          description:
            'Proposed project: Feature Store Design. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'ML-2217',
          number: '22.17',
          slug: 'batch-vs-online-inference-experiment',
          title: 'Batch vs Online Inference Experiment',
          description:
            'Proposed project: Batch vs Online Inference Experiment. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
      ],
    },
  ],
  legacyHashes: {
    'start-here': 'ml-foundations',
    'ml-fundamentals': 'ml-foundations',
    'supervised-learning': 'ml-foundations',
    'ensemble-learning': 'trees-ensembles',
    'unsupervised-learning': 'unsupervised-learning',
    'feature-engineering': 'feature-engineering',
    evaluation: 'model-evaluation',
    optimization: 'model-selection-tuning',
    'advanced-ml': 'advanced-ml',
    explainability: 'explainability',
    'production-ml': 'production-ml',
    'start-here--what-is-machine-learning':
      'ml-foundations/#what-is-machine-learning',
    'start-here--training-vs-inference':
      'ml-foundations/#training-vs-inference',
    'start-here--dataset-basics': 'ml-foundations',
    'start-here--features': 'ml-foundations',
    'start-here--labels': 'ml-foundations',
    'start-here--models': 'ml-foundations',
    'ml-fundamentals--generalization': 'ml-foundations/#generalization',
    'ml-fundamentals--bias': 'ml-foundations/#bias',
    'ml-fundamentals--variance': 'ml-foundations/#variance',
    'ml-fundamentals--overfitting': 'ml-foundations/#overfitting',
    'ml-fundamentals--underfitting': 'ml-foundations/#underfitting',
    'ml-fundamentals--train-validation-test-sets': 'ml-foundations',
    'supervised-learning--regression': 'ml-foundations',
    'supervised-learning--classification': 'ml-foundations',
    'supervised-learning--linear-regression': 'ml-foundations',
    'supervised-learning--logistic-regression':
      'classification/#logistic-regression',
    'supervised-learning--decision-trees': 'trees-ensembles/#decision-trees',
    'supervised-learning--random-forests': 'ml-foundations',
    'supervised-learning--svm': 'ml-foundations',
    'supervised-learning--knn': 'ml-foundations',
    'supervised-learning--naive-bayes': 'probabilistic-learning/#naive-bayes',
    'ensemble-learning--bagging': 'trees-ensembles/#bagging',
    'ensemble-learning--boosting': 'trees-ensembles/#boosting',
    'ensemble-learning--gradient-boosting':
      'trees-ensembles/#gradient-boosting',
    'ensemble-learning--xgboost': 'trees-ensembles/#xgboost',
    'ensemble-learning--lightgbm': 'trees-ensembles/#lightgbm',
    'ensemble-learning--catboost': 'trees-ensembles/#catboost',
    'unsupervised-learning--clustering': 'unsupervised-learning/#clustering',
    'unsupervised-learning--k-means': 'clustering/#k-means',
    'unsupervised-learning--hierarchical-clustering':
      'clustering/#hierarchical-clustering',
    'unsupervised-learning--dbscan': 'clustering/#dbscan',
    'unsupervised-learning--dimensionality-reduction':
      'unsupervised-learning/#dimensionality-reduction',
    'unsupervised-learning--pca': 'dimensionality-reduction/#pca',
    'feature-engineering--missing-values': 'data-preparation/#missing-values',
    'feature-engineering--encoding': 'feature-engineering',
    'feature-engineering--scaling': 'feature-engineering',
    'feature-engineering--feature-selection':
      'feature-engineering/#feature-selection',
    'feature-engineering--feature-extraction':
      'feature-engineering/#feature-extraction',
    'feature-engineering--leakage': 'feature-engineering',
    'evaluation--accuracy': 'model-evaluation/#accuracy',
    'evaluation--precision': 'model-evaluation/#precision',
    'evaluation--recall': 'model-evaluation',
    'evaluation--f1': 'model-evaluation',
    'evaluation--roc-auc': 'model-evaluation',
    'evaluation--pr-auc': 'model-evaluation/#pr-auc',
    'evaluation--confusion-matrix': 'model-evaluation/#confusion-matrix',
    'evaluation--calibration': 'model-evaluation',
    'evaluation--cross-validation': 'model-evaluation/#cross-validation',
    'optimization--hyperparameters': 'model-selection-tuning',
    'optimization--grid-search': 'model-selection-tuning/#grid-search',
    'optimization--random-search': 'model-selection-tuning/#random-search',
    'optimization--bayesian-optimization':
      'model-selection-tuning/#bayesian-optimization',
    'advanced-ml--anomaly-detection':
      'unsupervised-learning/#anomaly-detection',
    'advanced-ml--recommendation-systems': 'applied-ml/#recommendation-systems',
    'advanced-ml--ranking': 'advanced-ml',
    'advanced-ml--time-series': 'advanced-ml',
    'advanced-ml--forecasting': 'advanced-ml',
    'explainability--feature-importance': 'explainability/#feature-importance',
    'explainability--shap': 'explainability/#shap',
    'explainability--lime': 'explainability/#lime',
    'explainability--interpretability': 'explainability',
    'production-ml--serving': 'production-ml',
    'production-ml--monitoring': 'production-ml',
    'production-ml--drift': 'production-ml',
    'production-ml--retraining': 'production-ml/#retraining',
    'production-ml--mlops': 'production-ml',
  },
};
