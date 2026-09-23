import type { TopicSequence } from './types';

export const deepLearning: TopicSequence = {
  id: 'deep-learning',
  title: 'Deep Learning',
  description: 'Simple operations. Learned representations. Powerful networks.',
  insight:
    'The breakthrough wasn’t more rules. It was learning the representation.',
  stages: ['Beginner', 'Intermediate', 'Advanced', 'Production'],
  flow: [
    'Data',
    'Neuron',
    'Layer',
    'Network',
    'Loss',
    'Backpropagation',
    'Representation',
    'Attention',
    'Transformer',
    'Generative / Multimodal Systems',
    'Production',
  ],
  learningPath: {
    id: 'deep-learning-engineer',
    title: 'Deep Learning Engineer path',
  },
  sections: [
    {
      number: '01',
      slug: 'deep-learning-foundations',
      title: 'Deep Learning Foundations',
      description:
        'Build a foundation in neural networks, learned representations, training, and generalization.',
      introduction:
        'Build a foundation in neural networks, learned representations, training, and generalization.',
      concepts: [
        {
          id: 'DL-0101',
          number: '01.01',
          slug: 'what-is-deep-learning',
          title: 'What is Deep Learning?',
          description:
            'Follow a signal through a neural network, then follow the gradient to understand what training changes.',
          level: 'beginner',
          status: 'published',
          articleSlug: 'neural-networks-learn-representations',
        },
        {
          id: 'DL-0102',
          number: '01.02',
          slug: 'machine-learning-vs-deep-learning',
          title: 'Machine Learning vs Deep Learning',
          description:
            'Planned guide: Machine Learning vs Deep Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0103',
          number: '01.03',
          slug: 'why-neural-networks',
          title: 'Why Neural Networks?',
          description:
            'Planned guide: Why Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0104',
          number: '01.04',
          slug: 'biological-neuron-vs-artificial-neuron',
          title: 'Biological Neuron vs Artificial Neuron',
          description:
            'Planned guide: Biological Neuron vs Artificial Neuron. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0105',
          number: '01.05',
          slug: 'deep-vs-shallow-networks',
          title: 'Deep vs Shallow Networks',
          description:
            'Planned guide: Deep vs Shallow Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0106',
          number: '01.06',
          slug: 'representation-learning',
          title: 'Representation Learning',
          description:
            'Planned guide: Representation Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0107',
          number: '01.07',
          slug: 'training-vs-inference',
          title: 'Training vs Inference',
          description:
            'Planned guide: Training vs Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0108',
          number: '01.08',
          slug: 'parameters-vs-hyperparameters',
          title: 'Parameters vs Hyperparameters',
          description:
            'Planned guide: Parameters vs Hyperparameters. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0109',
          number: '01.09',
          slug: 'model-capacity',
          title: 'Model Capacity',
          description:
            'Planned guide: Model Capacity. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0110',
          number: '01.10',
          slug: 'generalization',
          title: 'Generalization',
          description:
            'Planned guide: Generalization. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0111',
          number: '01.11',
          slug: 'overfitting',
          title: 'Overfitting',
          description:
            'Planned guide: Overfitting. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0112',
          number: '01.12',
          slug: 'underfitting',
          title: 'Underfitting',
          description:
            'Planned guide: Underfitting. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0113',
          number: '01.13',
          slug: 'bias-and-variance',
          title: 'Bias and Variance',
          description:
            'Planned guide: Bias and Variance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0114',
          number: '01.14',
          slug: 'deep-learning-workflow',
          title: 'Deep Learning Workflow',
          description:
            'Planned guide: Deep Learning Workflow. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0115',
          number: '01.15',
          slug: 'when-deep-learning-makes-sense',
          title: 'When Deep Learning Makes Sense',
          description:
            'Planned guide: When Deep Learning Makes Sense. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0116',
          number: '01.16',
          slug: 'when-not-to-use-deep-learning',
          title: 'When Not to Use Deep Learning',
          description:
            'Planned guide: When Not to Use Deep Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
      ],
      insight:
        'Depth is useful when each layer learns something the next layer can build on.',
    },
    {
      number: '02',
      slug: 'math-for-deep-learning',
      title: 'Math for Deep Learning',
      description:
        'Work through the linear algebra, calculus, probability, and optimization mathematics used in deep learning.',
      introduction:
        'Work through the linear algebra, calculus, probability, and optimization mathematics used in deep learning.',
      concepts: [
        {
          id: 'DL-0201',
          number: '02.01',
          slug: 'scalars',
          title: 'Scalars',
          description:
            'Planned guide: Scalars. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0202',
          number: '02.02',
          slug: 'vectors',
          title: 'Vectors',
          description:
            'Planned guide: Vectors. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0203',
          number: '02.03',
          slug: 'matrices',
          title: 'Matrices',
          description:
            'Planned guide: Matrices. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0204',
          number: '02.04',
          slug: 'tensors',
          title: 'Tensors',
          description:
            'Planned guide: Tensors. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0205',
          number: '02.05',
          slug: 'vector-operations',
          title: 'Vector Operations',
          description:
            'Planned guide: Vector Operations. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0206',
          number: '02.06',
          slug: 'matrix-multiplication',
          title: 'Matrix Multiplication',
          description:
            'Planned guide: Matrix Multiplication. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0207',
          number: '02.07',
          slug: 'dot-product',
          title: 'Dot Product',
          description:
            'Planned guide: Dot Product. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0208',
          number: '02.08',
          slug: 'transpose',
          title: 'Transpose',
          description:
            'Planned guide: Transpose. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0209',
          number: '02.09',
          slug: 'identity-matrix',
          title: 'Identity Matrix',
          description:
            'Planned guide: Identity Matrix. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0210',
          number: '02.10',
          slug: 'inverse-matrix',
          title: 'Inverse Matrix',
          description:
            'Planned guide: Inverse Matrix. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0211',
          number: '02.11',
          slug: 'eigenvalues',
          title: 'Eigenvalues',
          description:
            'Planned guide: Eigenvalues. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0212',
          number: '02.12',
          slug: 'eigenvectors',
          title: 'Eigenvectors',
          description:
            'Planned guide: Eigenvectors. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Linear Algebra',
        },
        {
          id: 'DL-0213',
          number: '02.13',
          slug: 'functions',
          title: 'Functions',
          description:
            'Planned guide: Functions. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Calculus',
        },
        {
          id: 'DL-0214',
          number: '02.14',
          slug: 'derivatives',
          title: 'Derivatives',
          description:
            'Planned guide: Derivatives. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Calculus',
        },
        {
          id: 'DL-0215',
          number: '02.15',
          slug: 'partial-derivatives',
          title: 'Partial Derivatives',
          description:
            'Planned guide: Partial Derivatives. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Calculus',
        },
        {
          id: 'DL-0216',
          number: '02.16',
          slug: 'gradients',
          title: 'Gradients',
          description:
            'Planned guide: Gradients. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Calculus',
        },
        {
          id: 'DL-0217',
          number: '02.17',
          slug: 'chain-rule',
          title: 'Chain Rule',
          description:
            'Planned guide: Chain Rule. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Calculus',
        },
        {
          id: 'DL-0218',
          number: '02.18',
          slug: 'jacobian',
          title: 'Jacobian',
          description:
            'Planned guide: Jacobian. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Calculus',
        },
        {
          id: 'DL-0219',
          number: '02.19',
          slug: 'hessian',
          title: 'Hessian',
          description:
            'Planned guide: Hessian. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Calculus',
        },
        {
          id: 'DL-0220',
          number: '02.20',
          slug: 'probability-fundamentals',
          title: 'Probability Fundamentals',
          description:
            'Planned guide: Probability Fundamentals. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'DL-0221',
          number: '02.21',
          slug: 'random-variables',
          title: 'Random Variables',
          description:
            'Planned guide: Random Variables. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'DL-0222',
          number: '02.22',
          slug: 'probability-distributions',
          title: 'Probability Distributions',
          description:
            'Planned guide: Probability Distributions. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'DL-0223',
          number: '02.23',
          slug: 'expectation',
          title: 'Expectation',
          description:
            'Planned guide: Expectation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'DL-0224',
          number: '02.24',
          slug: 'variance',
          title: 'Variance',
          description:
            'Planned guide: Variance. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'DL-0225',
          number: '02.25',
          slug: 'conditional-probability',
          title: 'Conditional Probability',
          description:
            'Planned guide: Conditional Probability. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'DL-0226',
          number: '02.26',
          slug: 'bayes-theorem',
          title: "Bayes' Theorem",
          description:
            "Planned guide: Bayes' Theorem. Focus on intuition, assumptions, and a worked example.",
          level: 'beginner',
          status: 'planned',
          group: 'Probability',
        },
        {
          id: 'DL-0227',
          number: '02.27',
          slug: 'objective-functions',
          title: 'Objective Functions',
          description:
            'Planned guide: Objective Functions. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Optimization Mathematics',
        },
        {
          id: 'DL-0228',
          number: '02.28',
          slug: 'convex-vs-non-convex-functions',
          title: 'Convex vs Non-Convex Functions',
          description:
            'Planned guide: Convex vs Non-Convex Functions. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Optimization Mathematics',
        },
        {
          id: 'DL-0229',
          number: '02.29',
          slug: 'local-vs-global-minima',
          title: 'Local vs Global Minima',
          description:
            'Planned guide: Local vs Global Minima. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Optimization Mathematics',
        },
        {
          id: 'DL-0230',
          number: '02.30',
          slug: 'gradient-based-optimization',
          title: 'Gradient-Based Optimization',
          description:
            'Planned guide: Gradient-Based Optimization. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Optimization Mathematics',
        },
      ],
    },
    {
      number: '03',
      slug: 'neural-network-fundamentals',
      title: 'Neural Network Fundamentals',
      description:
        'Explore neurons, weights, biases, activations, layers, and computational graphs.',
      introduction:
        'Explore neurons, weights, biases, activations, layers, and computational graphs.',
      concepts: [
        {
          id: 'DL-0301',
          number: '03.01',
          slug: 'artificial-neuron',
          title: 'Artificial Neuron',
          description:
            'Planned guide: Artificial Neuron. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0302',
          number: '03.02',
          slug: 'inputs',
          title: 'Inputs',
          description:
            'Planned guide: Inputs. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0303',
          number: '03.03',
          slug: 'weights',
          title: 'Weights',
          description:
            'Planned guide: Weights. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0304',
          number: '03.04',
          slug: 'bias',
          title: 'Bias',
          description:
            'Planned guide: Bias. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0305',
          number: '03.05',
          slug: 'weighted-sum',
          title: 'Weighted Sum',
          description:
            'Planned guide: Weighted Sum. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0306',
          number: '03.06',
          slug: 'activation-function',
          title: 'Activation Function',
          description:
            'Planned guide: Activation Function. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0307',
          number: '03.07',
          slug: 'layers',
          title: 'Layers',
          description:
            'Planned guide: Layers. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0308',
          number: '03.08',
          slug: 'input-layer',
          title: 'Input Layer',
          description:
            'Planned guide: Input Layer. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0309',
          number: '03.09',
          slug: 'hidden-layers',
          title: 'Hidden Layers',
          description:
            'Planned guide: Hidden Layers. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0310',
          number: '03.10',
          slug: 'output-layer',
          title: 'Output Layer',
          description:
            'Planned guide: Output Layer. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0311',
          number: '03.11',
          slug: 'dense-fully-connected-layer',
          title: 'Dense / Fully Connected Layer',
          description:
            'Planned guide: Dense / Fully Connected Layer. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0312',
          number: '03.12',
          slug: 'network-depth',
          title: 'Network Depth',
          description:
            'Planned guide: Network Depth. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0313',
          number: '03.13',
          slug: 'network-width',
          title: 'Network Width',
          description:
            'Planned guide: Network Width. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0314',
          number: '03.14',
          slug: 'parameters',
          title: 'Parameters',
          description:
            'Planned guide: Parameters. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0315',
          number: '03.15',
          slug: 'computational-graphs',
          title: 'Computational Graphs',
          description:
            'Planned guide: Computational Graphs. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0316',
          number: '03.16',
          slug: 'multi-layer-perceptron',
          title: 'Multi-Layer Perceptron',
          description:
            'Planned guide: Multi-Layer Perceptron. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0317',
          number: '03.17',
          slug: 'universal-approximation-intuition',
          title: 'Universal Approximation Intuition',
          description:
            'Planned guide: Universal Approximation Intuition. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
      ],
      relatedArticleSlugs: ['neural-networks-learn-representations'],
    },
    {
      number: '04',
      slug: 'forward-propagation',
      title: 'Forward Propagation',
      description:
        'Follow inputs through weighted transformations and activations to a network output.',
      introduction:
        'Follow inputs through weighted transformations and activations to a network output.',
      concepts: [
        {
          id: 'DL-0401',
          number: '04.01',
          slug: 'what-is-forward-propagation',
          title: 'What is Forward Propagation?',
          description:
            'Planned guide: What is Forward Propagation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0402',
          number: '04.02',
          slug: 'input-transformation',
          title: 'Input Transformation',
          description:
            'Planned guide: Input Transformation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0403',
          number: '04.03',
          slug: 'weighted-sum',
          title: 'Weighted Sum',
          description:
            'Planned guide: Weighted Sum. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0404',
          number: '04.04',
          slug: 'activation',
          title: 'Activation',
          description:
            'Planned guide: Activation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0405',
          number: '04.05',
          slug: 'layer-to-layer-flow',
          title: 'Layer-to-Layer Flow',
          description:
            'Planned guide: Layer-to-Layer Flow. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0406',
          number: '04.06',
          slug: 'output-computation',
          title: 'Output Computation',
          description:
            'Planned guide: Output Computation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0407',
          number: '04.07',
          slug: 'batch-processing',
          title: 'Batch Processing',
          description:
            'Planned guide: Batch Processing. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0408',
          number: '04.08',
          slug: 'tensor-shapes',
          title: 'Tensor Shapes',
          description:
            'Planned guide: Tensor Shapes. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0409',
          number: '04.09',
          slug: 'forward-pass-example',
          title: 'Forward Pass Example',
          description:
            'Planned guide: Forward Pass Example. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0410',
          number: '04.10',
          slug: 'computational-graph-of-a-forward-pass',
          title: 'Computational Graph of a Forward Pass',
          description:
            'Planned guide: Computational Graph of a Forward Pass. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
      ],
      insight:
        'Prediction moves forward. Learning begins when the error moves back.',
      insightSupporting:
        'In this gradient-based training picture, backpropagation computes gradients and the optimizer uses them to update parameters.',
      relatedArticleSlugs: ['neural-networks-learn-representations'],
    },
    {
      number: '05',
      slug: 'loss-functions',
      title: 'Loss Functions',
      description:
        'Compare loss functions for regression, classification, representation learning, and other objectives.',
      introduction:
        'Compare loss functions for regression, classification, representation learning, and other objectives.',
      concepts: [
        {
          id: 'DL-0501',
          number: '05.01',
          slug: 'what-is-a-loss-function',
          title: 'What is a Loss Function?',
          description:
            'Planned guide: What is a Loss Function. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'DL-0502',
          number: '05.02',
          slug: 'loss-vs-metric',
          title: 'Loss vs Metric',
          description:
            'Planned guide: Loss vs Metric. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'DL-0503',
          number: '05.03',
          slug: 'objective-function',
          title: 'Objective Function',
          description:
            'Planned guide: Objective Function. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Fundamentals',
        },
        {
          id: 'DL-0504',
          number: '05.04',
          slug: 'mean-squared-error',
          title: 'Mean Squared Error',
          description:
            'Planned guide: Mean Squared Error. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'DL-0505',
          number: '05.05',
          slug: 'mean-absolute-error',
          title: 'Mean Absolute Error',
          description:
            'Planned guide: Mean Absolute Error. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'DL-0506',
          number: '05.06',
          slug: 'huber-loss',
          title: 'Huber Loss',
          description:
            'Planned guide: Huber Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Regression',
        },
        {
          id: 'DL-0507',
          number: '05.07',
          slug: 'binary-cross-entropy',
          title: 'Binary Cross-Entropy',
          description:
            'Planned guide: Binary Cross-Entropy. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'DL-0508',
          number: '05.08',
          slug: 'categorical-cross-entropy',
          title: 'Categorical Cross-Entropy',
          description:
            'Planned guide: Categorical Cross-Entropy. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'DL-0509',
          number: '05.09',
          slug: 'sparse-categorical-cross-entropy',
          title: 'Sparse Categorical Cross-Entropy',
          description:
            'Planned guide: Sparse Categorical Cross-Entropy. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'DL-0510',
          number: '05.10',
          slug: 'negative-log-likelihood',
          title: 'Negative Log-Likelihood',
          description:
            'Planned guide: Negative Log-Likelihood. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Classification',
        },
        {
          id: 'DL-0511',
          number: '05.11',
          slug: 'contrastive-loss',
          title: 'Contrastive Loss',
          description:
            'Planned guide: Contrastive Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-0512',
          number: '05.12',
          slug: 'triplet-loss',
          title: 'Triplet Loss',
          description:
            'Planned guide: Triplet Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-0513',
          number: '05.13',
          slug: 'hinge-loss',
          title: 'Hinge Loss',
          description:
            'Planned guide: Hinge Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-0514',
          number: '05.14',
          slug: 'focal-loss',
          title: 'Focal Loss',
          description:
            'Planned guide: Focal Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-0515',
          number: '05.15',
          slug: 'kl-divergence',
          title: 'KL Divergence',
          description:
            'Planned guide: KL Divergence. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-0516',
          number: '05.16',
          slug: 'perceptual-loss',
          title: 'Perceptual Loss',
          description:
            'Planned guide: Perceptual Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-0517',
          number: '05.17',
          slug: 'custom-loss-functions',
          title: 'Custom Loss Functions',
          description:
            'Planned guide: Custom Loss Functions. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
          group: 'Advanced',
        },
      ],
    },
    {
      number: '06',
      slug: 'backpropagation',
      title: 'Backpropagation',
      description:
        'Trace loss gradients through a network and distinguish gradient computation from parameter updates.',
      introduction:
        'Trace loss gradients through a network and distinguish gradient computation from parameter updates.',
      concepts: [
        {
          id: 'DL-0601',
          number: '06.01',
          slug: 'what-is-backpropagation',
          title: 'What is Backpropagation?',
          description:
            'Planned guide: What is Backpropagation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0602',
          number: '06.02',
          slug: 'error-signal',
          title: 'Error Signal',
          description:
            'Planned guide: Error Signal. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0603',
          number: '06.03',
          slug: 'chain-rule-in-neural-networks',
          title: 'Chain Rule in Neural Networks',
          description:
            'Planned guide: Chain Rule in Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0604',
          number: '06.04',
          slug: 'local-gradients',
          title: 'Local Gradients',
          description:
            'Planned guide: Local Gradients. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0605',
          number: '06.05',
          slug: 'gradient-flow',
          title: 'Gradient Flow',
          description:
            'Planned guide: Gradient Flow. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0606',
          number: '06.06',
          slug: 'weight-gradients',
          title: 'Weight Gradients',
          description:
            'Planned guide: Weight Gradients. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0607',
          number: '06.07',
          slug: 'bias-gradients',
          title: 'Bias Gradients',
          description:
            'Planned guide: Bias Gradients. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0608',
          number: '06.08',
          slug: 'backpropagation-through-layers',
          title: 'Backpropagation Through Layers',
          description:
            'Planned guide: Backpropagation Through Layers. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0609',
          number: '06.09',
          slug: 'parameter-updates',
          title: 'Parameter Updates',
          description:
            'Planned guide: Parameter Updates. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0610',
          number: '06.10',
          slug: 'backpropagation-example',
          title: 'Backpropagation Example',
          description:
            'Planned guide: Backpropagation Example. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0611',
          number: '06.11',
          slug: 'automatic-differentiation',
          title: 'Automatic Differentiation',
          description:
            'Planned guide: Automatic Differentiation. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0612',
          number: '06.12',
          slug: 'vanishing-gradients',
          title: 'Vanishing Gradients',
          description:
            'Planned guide: Vanishing Gradients. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0613',
          number: '06.13',
          slug: 'exploding-gradients',
          title: 'Exploding Gradients',
          description:
            'Planned guide: Exploding Gradients. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
        {
          id: 'DL-0614',
          number: '06.14',
          slug: 'gradient-checking',
          title: 'Gradient Checking',
          description:
            'Planned guide: Gradient Checking. Focus on intuition, assumptions, and a worked example.',
          level: 'beginner',
          status: 'planned',
        },
      ],
      relatedArticleSlugs: ['neural-networks-learn-representations'],
      diagram: {
        label: 'From prediction to parameter update',
        stages: [
          {
            label: 'Forward pass',
            steps: ['Inputs', 'Network', 'Prediction', 'Loss'],
          },
          {
            label: 'Backward pass',
            steps: ['Loss', 'Chain rule', 'Parameter gradients'],
          },
          {
            label: 'Update',
            steps: [
              'Gradients',
              'Optimizer',
              'Updated parameters',
              'Next forward pass',
            ],
          },
        ],
        caption:
          'Backpropagation computes gradients. The optimizer uses them to update parameters for the next forward pass; neither step guarantees better performance on unseen data.',
      },
    },
    {
      number: '07',
      slug: 'optimization',
      title: 'Optimization',
      description:
        'Explore gradient descent, adaptive optimizers, learning-rate schedules, and gradient clipping.',
      introduction:
        'Explore gradient descent, adaptive optimizers, learning-rate schedules, and gradient clipping.',
      concepts: [
        {
          id: 'DL-0701',
          number: '07.01',
          slug: 'optimization-in-neural-networks',
          title: 'Optimization in Neural Networks',
          description:
            'Planned guide: Optimization in Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0702',
          number: '07.02',
          slug: 'gradient-descent',
          title: 'Gradient Descent',
          description:
            'Planned guide: Gradient Descent. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0703',
          number: '07.03',
          slug: 'batch-gradient-descent',
          title: 'Batch Gradient Descent',
          description:
            'Planned guide: Batch Gradient Descent. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0704',
          number: '07.04',
          slug: 'stochastic-gradient-descent',
          title: 'Stochastic Gradient Descent',
          description:
            'Planned guide: Stochastic Gradient Descent. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0705',
          number: '07.05',
          slug: 'mini-batch-gradient-descent',
          title: 'Mini-Batch Gradient Descent',
          description:
            'Planned guide: Mini-Batch Gradient Descent. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0706',
          number: '07.06',
          slug: 'momentum',
          title: 'Momentum',
          description:
            'Planned guide: Momentum. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0707',
          number: '07.07',
          slug: 'nesterov-momentum',
          title: 'Nesterov Momentum',
          description:
            'Planned guide: Nesterov Momentum. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0708',
          number: '07.08',
          slug: 'adagrad',
          title: 'AdaGrad',
          description:
            'Planned guide: AdaGrad. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0709',
          number: '07.09',
          slug: 'rmsprop',
          title: 'RMSProp',
          description:
            'Planned guide: RMSProp. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0710',
          number: '07.10',
          slug: 'adam',
          title: 'Adam',
          description:
            'Planned guide: Adam. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0711',
          number: '07.11',
          slug: 'adamw',
          title: 'AdamW',
          description:
            'Planned guide: AdamW. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0712',
          number: '07.12',
          slug: 'learning-rate',
          title: 'Learning Rate',
          description:
            'Planned guide: Learning Rate. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0713',
          number: '07.13',
          slug: 'learning-rate-scheduling',
          title: 'Learning Rate Scheduling',
          description:
            'Planned guide: Learning Rate Scheduling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0714',
          number: '07.14',
          slug: 'warmup',
          title: 'Warmup',
          description:
            'Planned guide: Warmup. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0715',
          number: '07.15',
          slug: 'cosine-decay',
          title: 'Cosine Decay',
          description:
            'Planned guide: Cosine Decay. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0716',
          number: '07.16',
          slug: 'weight-decay',
          title: 'Weight Decay',
          description:
            'Planned guide: Weight Decay. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0717',
          number: '07.17',
          slug: 'gradient-clipping',
          title: 'Gradient Clipping',
          description:
            'Planned guide: Gradient Clipping. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0718',
          number: '07.18',
          slug: 'optimizer-selection',
          title: 'Optimizer Selection',
          description:
            'Planned guide: Optimizer Selection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '08',
      slug: 'training-deep-networks',
      title: 'Training Deep Networks',
      description:
        'Plan training loops, validation, checkpointing, debugging, and reproducibility.',
      introduction:
        'Plan training loops, validation, checkpointing, debugging, and reproducibility.',
      concepts: [
        {
          id: 'DL-0801',
          number: '08.01',
          slug: 'training-loop',
          title: 'Training Loop',
          description:
            'Planned guide: Training Loop. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0802',
          number: '08.02',
          slug: 'epoch',
          title: 'Epoch',
          description:
            'Planned guide: Epoch. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0803',
          number: '08.03',
          slug: 'batch',
          title: 'Batch',
          description:
            'Planned guide: Batch. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0804',
          number: '08.04',
          slug: 'iteration',
          title: 'Iteration',
          description:
            'Planned guide: Iteration. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0805',
          number: '08.05',
          slug: 'batch-size',
          title: 'Batch Size',
          description:
            'Planned guide: Batch Size. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0806',
          number: '08.06',
          slug: 'learning-rate',
          title: 'Learning Rate',
          description:
            'Planned guide: Learning Rate. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0807',
          number: '08.07',
          slug: 'training-loss',
          title: 'Training Loss',
          description:
            'Planned guide: Training Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0808',
          number: '08.08',
          slug: 'validation-loss',
          title: 'Validation Loss',
          description:
            'Planned guide: Validation Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0809',
          number: '08.09',
          slug: 'training-curves',
          title: 'Training Curves',
          description:
            'Planned guide: Training Curves. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0810',
          number: '08.10',
          slug: 'validation-curves',
          title: 'Validation Curves',
          description:
            'Planned guide: Validation Curves. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0811',
          number: '08.11',
          slug: 'early-stopping',
          title: 'Early Stopping',
          description:
            'Planned guide: Early Stopping. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0812',
          number: '08.12',
          slug: 'checkpointing',
          title: 'Checkpointing',
          description:
            'Planned guide: Checkpointing. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0813',
          number: '08.13',
          slug: 'hyperparameter-selection',
          title: 'Hyperparameter Selection',
          description:
            'Planned guide: Hyperparameter Selection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0814',
          number: '08.14',
          slug: 'debugging-training',
          title: 'Debugging Training',
          description:
            'Planned guide: Debugging Training. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0815',
          number: '08.15',
          slug: 'reproducibility',
          title: 'Reproducibility',
          description:
            'Planned guide: Reproducibility. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0816',
          number: '08.16',
          slug: 'random-seeds',
          title: 'Random Seeds',
          description:
            'Planned guide: Random Seeds. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0817',
          number: '08.17',
          slug: 'deterministic-training',
          title: 'Deterministic Training',
          description:
            'Planned guide: Deterministic Training. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '09',
      slug: 'regularization',
      title: 'Regularization',
      description:
        'Explore penalties, dropout, augmentation, and the tradeoffs in controlling model complexity.',
      introduction:
        'Explore penalties, dropout, augmentation, and the tradeoffs in controlling model complexity.',
      concepts: [
        {
          id: 'DL-0901',
          number: '09.01',
          slug: 'why-regularization',
          title: 'Why Regularization?',
          description:
            'Planned guide: Why Regularization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0902',
          number: '09.02',
          slug: 'l1-regularization',
          title: 'L1 Regularization',
          description:
            'Planned guide: L1 Regularization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0903',
          number: '09.03',
          slug: 'l2-regularization',
          title: 'L2 Regularization',
          description:
            'Planned guide: L2 Regularization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0904',
          number: '09.04',
          slug: 'weight-decay',
          title: 'Weight Decay',
          description:
            'Planned guide: Weight Decay. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0905',
          number: '09.05',
          slug: 'dropout',
          title: 'Dropout',
          description:
            'Planned guide: Dropout. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0906',
          number: '09.06',
          slug: 'dropconnect',
          title: 'DropConnect',
          description:
            'Planned guide: DropConnect. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0907',
          number: '09.07',
          slug: 'early-stopping',
          title: 'Early Stopping',
          description:
            'Planned guide: Early Stopping. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0908',
          number: '09.08',
          slug: 'data-augmentation',
          title: 'Data Augmentation',
          description:
            'Planned guide: Data Augmentation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0909',
          number: '09.09',
          slug: 'label-smoothing',
          title: 'Label Smoothing',
          description:
            'Planned guide: Label Smoothing. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0910',
          number: '09.10',
          slug: 'noise-injection',
          title: 'Noise Injection',
          description:
            'Planned guide: Noise Injection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0911',
          number: '09.11',
          slug: 'stochastic-depth',
          title: 'Stochastic Depth',
          description:
            'Planned guide: Stochastic Depth. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-0912',
          number: '09.12',
          slug: 'regularization-tradeoffs',
          title: 'Regularization Tradeoffs',
          description:
            'Planned guide: Regularization Tradeoffs. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '10',
      slug: 'normalization',
      title: 'Normalization',
      description:
        'Compare normalization methods and their placement in neural network architectures.',
      introduction:
        'Compare normalization methods and their placement in neural network architectures.',
      concepts: [
        {
          id: 'DL-1001',
          number: '10.01',
          slug: 'why-normalize-activations',
          title: 'Why Normalize Activations?',
          description:
            'Planned guide: Why Normalize Activations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1002',
          number: '10.02',
          slug: 'batch-normalization',
          title: 'Batch Normalization',
          description:
            'Planned guide: Batch Normalization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1003',
          number: '10.03',
          slug: 'layer-normalization',
          title: 'Layer Normalization',
          description:
            'Planned guide: Layer Normalization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1004',
          number: '10.04',
          slug: 'instance-normalization',
          title: 'Instance Normalization',
          description:
            'Planned guide: Instance Normalization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1005',
          number: '10.05',
          slug: 'group-normalization',
          title: 'Group Normalization',
          description:
            'Planned guide: Group Normalization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1006',
          number: '10.06',
          slug: 'rms-normalization',
          title: 'RMS Normalization',
          description:
            'Planned guide: RMS Normalization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1007',
          number: '10.07',
          slug: 'pre-norm-vs-post-norm',
          title: 'Pre-Norm vs Post-Norm',
          description:
            'Planned guide: Pre-Norm vs Post-Norm. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1008',
          number: '10.08',
          slug: 'normalization-in-cnns',
          title: 'Normalization in CNNs',
          description:
            'Planned guide: Normalization in CNNs. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1009',
          number: '10.09',
          slug: 'normalization-in-transformers',
          title: 'Normalization in Transformers',
          description:
            'Planned guide: Normalization in Transformers. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '11',
      slug: 'initialization',
      title: 'Initialization',
      description:
        'Study weight initialization choices, their relationship to activations, and common failure modes.',
      introduction:
        'Study weight initialization choices, their relationship to activations, and common failure modes.',
      concepts: [
        {
          id: 'DL-1101',
          number: '11.01',
          slug: 'why-initialization-matters',
          title: 'Why Initialization Matters',
          description:
            'Planned guide: Why Initialization Matters. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1102',
          number: '11.02',
          slug: 'zero-initialization',
          title: 'Zero Initialization',
          description:
            'Planned guide: Zero Initialization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1103',
          number: '11.03',
          slug: 'random-initialization',
          title: 'Random Initialization',
          description:
            'Planned guide: Random Initialization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1104',
          number: '11.04',
          slug: 'xavier-glorot-initialization',
          title: 'Xavier / Glorot Initialization',
          description:
            'Planned guide: Xavier / Glorot Initialization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1105',
          number: '11.05',
          slug: 'he-initialization',
          title: 'He Initialization',
          description:
            'Planned guide: He Initialization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1106',
          number: '11.06',
          slug: 'orthogonal-initialization',
          title: 'Orthogonal Initialization',
          description:
            'Planned guide: Orthogonal Initialization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1107',
          number: '11.07',
          slug: 'initialization-and-activations',
          title: 'Initialization and Activations',
          description:
            'Planned guide: Initialization and Activations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1108',
          number: '11.08',
          slug: 'initialization-failure-modes',
          title: 'Initialization Failure Modes',
          description:
            'Planned guide: Initialization Failure Modes. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
      navTitle: 'Initialization',
    },
    {
      number: '12',
      slug: 'convolutional-neural-networks',
      title: 'Convolutional Neural Networks',
      description:
        'Explore convolution, kernels, channels, receptive fields, and CNN architecture.',
      introduction:
        'Explore convolution, kernels, channels, receptive fields, and CNN architecture.',
      concepts: [
        {
          id: 'DL-1201',
          number: '12.01',
          slug: 'what-is-a-cnn',
          title: 'What is a CNN?',
          description:
            'Planned guide: What is a CNN. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1202',
          number: '12.02',
          slug: 'convolution',
          title: 'Convolution',
          description:
            'Planned guide: Convolution. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1203',
          number: '12.03',
          slug: 'filters-kernels',
          title: 'Filters / Kernels',
          description:
            'Planned guide: Filters / Kernels. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1204',
          number: '12.04',
          slug: 'feature-maps',
          title: 'Feature Maps',
          description:
            'Planned guide: Feature Maps. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1205',
          number: '12.05',
          slug: 'stride',
          title: 'Stride',
          description:
            'Planned guide: Stride. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1206',
          number: '12.06',
          slug: 'padding',
          title: 'Padding',
          description:
            'Planned guide: Padding. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1207',
          number: '12.07',
          slug: 'pooling',
          title: 'Pooling',
          description:
            'Planned guide: Pooling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1208',
          number: '12.08',
          slug: 'max-pooling',
          title: 'Max Pooling',
          description:
            'Planned guide: Max Pooling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1209',
          number: '12.09',
          slug: 'average-pooling',
          title: 'Average Pooling',
          description:
            'Planned guide: Average Pooling. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1210',
          number: '12.10',
          slug: 'receptive-field',
          title: 'Receptive Field',
          description:
            'Planned guide: Receptive Field. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1211',
          number: '12.11',
          slug: 'channels',
          title: 'Channels',
          description:
            'Planned guide: Channels. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1212',
          number: '12.12',
          slug: 'cnn-feature-hierarchy',
          title: 'CNN Feature Hierarchy',
          description:
            'Planned guide: CNN Feature Hierarchy. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1213',
          number: '12.13',
          slug: 'cnn-architecture',
          title: 'CNN Architecture',
          description:
            'Planned guide: CNN Architecture. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1214',
          number: '12.14',
          slug: '1d-convolution',
          title: '1D Convolution',
          description:
            'Planned guide: 1D Convolution. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1215',
          number: '12.15',
          slug: '2d-convolution',
          title: '2D Convolution',
          description:
            'Planned guide: 2D Convolution. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1216',
          number: '12.16',
          slug: '3d-convolution',
          title: '3D Convolution',
          description:
            'Planned guide: 3D Convolution. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1217',
          number: '12.17',
          slug: 'dilated-convolution',
          title: 'Dilated Convolution',
          description:
            'Planned guide: Dilated Convolution. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1218',
          number: '12.18',
          slug: 'depthwise-convolution',
          title: 'Depthwise Convolution',
          description:
            'Planned guide: Depthwise Convolution. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1219',
          number: '12.19',
          slug: 'separable-convolution',
          title: 'Separable Convolution',
          description:
            'Planned guide: Separable Convolution. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
      navTitle: 'CNNs',
    },
    {
      number: '13',
      slug: 'computer-vision-with-deep-learning',
      title: 'Computer Vision with Deep Learning',
      description:
        'Connect deep learning to image classification, detection, segmentation, retrieval, and vision architectures.',
      introduction:
        'Connect deep learning to image classification, detection, segmentation, retrieval, and vision architectures.',
      concepts: [
        {
          id: 'DL-1301',
          number: '13.01',
          slug: 'image-classification',
          title: 'Image Classification',
          description:
            'Planned guide: Image Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1302',
          number: '13.02',
          slug: 'multi-label-classification',
          title: 'Multi-Label Classification',
          description:
            'Planned guide: Multi-Label Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1303',
          number: '13.03',
          slug: 'object-detection',
          title: 'Object Detection',
          description:
            'Planned guide: Object Detection. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1304',
          number: '13.04',
          slug: 'bounding-boxes',
          title: 'Bounding Boxes',
          description:
            'Planned guide: Bounding Boxes. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1305',
          number: '13.05',
          slug: 'intersection-over-union',
          title: 'Intersection over Union',
          description:
            'Planned guide: Intersection over Union. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1306',
          number: '13.06',
          slug: 'non-maximum-suppression',
          title: 'Non-Maximum Suppression',
          description:
            'Planned guide: Non-Maximum Suppression. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1307',
          number: '13.07',
          slug: 'image-segmentation',
          title: 'Image Segmentation',
          description:
            'Planned guide: Image Segmentation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1308',
          number: '13.08',
          slug: 'semantic-segmentation',
          title: 'Semantic Segmentation',
          description:
            'Planned guide: Semantic Segmentation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1309',
          number: '13.09',
          slug: 'instance-segmentation',
          title: 'Instance Segmentation',
          description:
            'Planned guide: Instance Segmentation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1310',
          number: '13.10',
          slug: 'pose-estimation',
          title: 'Pose Estimation',
          description:
            'Planned guide: Pose Estimation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1311',
          number: '13.11',
          slug: 'face-recognition',
          title: 'Face Recognition',
          description:
            'Planned guide: Face Recognition. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1312',
          number: '13.12',
          slug: 'image-retrieval',
          title: 'Image Retrieval',
          description:
            'Planned guide: Image Retrieval. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1313',
          number: '13.13',
          slug: 'data-augmentation',
          title: 'Data Augmentation',
          description:
            'Planned guide: Data Augmentation. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1314',
          number: '13.14',
          slug: 'transfer-learning-for-vision',
          title: 'Transfer Learning for Vision',
          description:
            'Planned guide: Transfer Learning for Vision. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1315',
          number: '13.15',
          slug: 'resnet',
          title: 'ResNet',
          description:
            'Planned guide: ResNet. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1316',
          number: '13.16',
          slug: 'inception',
          title: 'Inception',
          description:
            'Planned guide: Inception. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1317',
          number: '13.17',
          slug: 'efficientnet',
          title: 'EfficientNet',
          description:
            'Planned guide: EfficientNet. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1318',
          number: '13.18',
          slug: 'yolo',
          title: 'YOLO',
          description:
            'Planned guide: YOLO. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1319',
          number: '13.19',
          slug: 'u-net',
          title: 'U-Net',
          description:
            'Planned guide: U-Net. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
      navTitle: 'Computer Vision',
    },
    {
      number: '14',
      slug: 'sequence-models',
      title: 'Sequence Models',
      description:
        'Frame sequence data, temporal dependencies, hidden state, and sequence-to-sequence tasks.',
      introduction:
        'Frame sequence data, temporal dependencies, hidden state, and sequence-to-sequence tasks.',
      concepts: [
        {
          id: 'DL-1401',
          number: '14.01',
          slug: 'sequence-data',
          title: 'Sequence Data',
          description:
            'Planned guide: Sequence Data. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1402',
          number: '14.02',
          slug: 'variable-length-inputs',
          title: 'Variable-Length Inputs',
          description:
            'Planned guide: Variable-Length Inputs. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1403',
          number: '14.03',
          slug: 'sequence-to-one',
          title: 'Sequence-to-One',
          description:
            'Planned guide: Sequence-to-One. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1404',
          number: '14.04',
          slug: 'one-to-sequence',
          title: 'One-to-Sequence',
          description:
            'Planned guide: One-to-Sequence. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1405',
          number: '14.05',
          slug: 'sequence-to-sequence',
          title: 'Sequence-to-Sequence',
          description:
            'Planned guide: Sequence-to-Sequence. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1406',
          number: '14.06',
          slug: 'temporal-dependencies',
          title: 'Temporal Dependencies',
          description:
            'Planned guide: Temporal Dependencies. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1407',
          number: '14.07',
          slug: 'hidden-state',
          title: 'Hidden State',
          description:
            'Planned guide: Hidden State. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1408',
          number: '14.08',
          slug: 'sequence-modeling-problems',
          title: 'Sequence Modeling Problems',
          description:
            'Planned guide: Sequence Modeling Problems. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '15',
      slug: 'rnns-lstms-grus',
      title: 'RNNs, LSTMs & GRUs',
      description:
        'Work through recurrent networks, backpropagation through time, LSTM gates, and GRUs.',
      introduction:
        'Work through recurrent networks, backpropagation through time, LSTM gates, and GRUs.',
      concepts: [
        {
          id: 'DL-1501',
          number: '15.01',
          slug: 'recurrent-neural-networks',
          title: 'Recurrent Neural Networks',
          description:
            'Planned guide: Recurrent Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'RNN',
        },
        {
          id: 'DL-1502',
          number: '15.02',
          slug: 'hidden-state',
          title: 'Hidden State',
          description:
            'Planned guide: Hidden State. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'RNN',
        },
        {
          id: 'DL-1503',
          number: '15.03',
          slug: 'recurrent-connections',
          title: 'Recurrent Connections',
          description:
            'Planned guide: Recurrent Connections. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'RNN',
        },
        {
          id: 'DL-1504',
          number: '15.04',
          slug: 'backpropagation-through-time',
          title: 'Backpropagation Through Time',
          description:
            'Planned guide: Backpropagation Through Time. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'RNN',
        },
        {
          id: 'DL-1505',
          number: '15.05',
          slug: 'vanishing-gradients-in-rnns',
          title: 'Vanishing Gradients in RNNs',
          description:
            'Planned guide: Vanishing Gradients in RNNs. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'RNN',
        },
        {
          id: 'DL-1506',
          number: '15.06',
          slug: 'exploding-gradients-in-rnns',
          title: 'Exploding Gradients in RNNs',
          description:
            'Planned guide: Exploding Gradients in RNNs. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'RNN',
        },
        {
          id: 'DL-1507',
          number: '15.07',
          slug: 'lstm',
          title: 'LSTM',
          description:
            'Planned guide: LSTM. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'LSTM',
        },
        {
          id: 'DL-1508',
          number: '15.08',
          slug: 'cell-state',
          title: 'Cell State',
          description:
            'Planned guide: Cell State. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'LSTM',
        },
        {
          id: 'DL-1509',
          number: '15.09',
          slug: 'forget-gate',
          title: 'Forget Gate',
          description:
            'Planned guide: Forget Gate. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'LSTM',
        },
        {
          id: 'DL-1510',
          number: '15.10',
          slug: 'input-gate',
          title: 'Input Gate',
          description:
            'Planned guide: Input Gate. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'LSTM',
        },
        {
          id: 'DL-1511',
          number: '15.11',
          slug: 'output-gate',
          title: 'Output Gate',
          description:
            'Planned guide: Output Gate. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'LSTM',
        },
        {
          id: 'DL-1512',
          number: '15.12',
          slug: 'gru',
          title: 'GRU',
          description:
            'Planned guide: GRU. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'GRU',
        },
        {
          id: 'DL-1513',
          number: '15.13',
          slug: 'update-gate',
          title: 'Update Gate',
          description:
            'Planned guide: Update Gate. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'GRU',
        },
        {
          id: 'DL-1514',
          number: '15.14',
          slug: 'reset-gate',
          title: 'Reset Gate',
          description:
            'Planned guide: Reset Gate. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'GRU',
        },
        {
          id: 'DL-1515',
          number: '15.15',
          slug: 'lstm-vs-gru',
          title: 'LSTM vs GRU',
          description:
            'Planned guide: LSTM vs GRU. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'GRU',
        },
        {
          id: 'DL-1516',
          number: '15.16',
          slug: 'bidirectional-rnn',
          title: 'Bidirectional RNN',
          description:
            'Planned guide: Bidirectional RNN. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-1517',
          number: '15.17',
          slug: 'stacked-rnn',
          title: 'Stacked RNN',
          description:
            'Planned guide: Stacked RNN. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-1518',
          number: '15.18',
          slug: 'encoder-decoder-rnn',
          title: 'Encoder-Decoder RNN',
          description:
            'Planned guide: Encoder-Decoder RNN. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
          group: 'Advanced',
        },
      ],
    },
    {
      number: '16',
      slug: 'attention',
      title: 'Attention',
      description:
        'Explore queries, keys, values, attention scores, masks, and multi-head attention.',
      introduction:
        'Explore queries, keys, values, attention scores, masks, and multi-head attention.',
      concepts: [
        {
          id: 'DL-1601',
          number: '16.01',
          slug: 'why-attention',
          title: 'Why Attention?',
          description:
            'Planned guide: Why Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1602',
          number: '16.02',
          slug: 'attention-intuition',
          title: 'Attention Intuition',
          description:
            'Planned guide: Attention Intuition. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1603',
          number: '16.03',
          slug: 'query',
          title: 'Query',
          description:
            'Planned guide: Query. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1604',
          number: '16.04',
          slug: 'key',
          title: 'Key',
          description:
            'Planned guide: Key. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1605',
          number: '16.05',
          slug: 'value',
          title: 'Value',
          description:
            'Planned guide: Value. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1606',
          number: '16.06',
          slug: 'attention-scores',
          title: 'Attention Scores',
          description:
            'Planned guide: Attention Scores. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1607',
          number: '16.07',
          slug: 'scaled-dot-product-attention',
          title: 'Scaled Dot-Product Attention',
          description:
            'Planned guide: Scaled Dot-Product Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1608',
          number: '16.08',
          slug: 'softmax-in-attention',
          title: 'Softmax in Attention',
          description:
            'Planned guide: Softmax in Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1609',
          number: '16.09',
          slug: 'self-attention',
          title: 'Self-Attention',
          description:
            'Planned guide: Self-Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1610',
          number: '16.10',
          slug: 'cross-attention',
          title: 'Cross-Attention',
          description:
            'Planned guide: Cross-Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1611',
          number: '16.11',
          slug: 'causal-attention',
          title: 'Causal Attention',
          description:
            'Planned guide: Causal Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1612',
          number: '16.12',
          slug: 'attention-masks',
          title: 'Attention Masks',
          description:
            'Planned guide: Attention Masks. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1613',
          number: '16.13',
          slug: 'multi-head-attention',
          title: 'Multi-Head Attention',
          description:
            'Planned guide: Multi-Head Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1614',
          number: '16.14',
          slug: 'attention-matrix',
          title: 'Attention Matrix',
          description:
            'Planned guide: Attention Matrix. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1615',
          number: '16.15',
          slug: 'computational-cost',
          title: 'Computational Cost',
          description:
            'Planned guide: Computational Cost. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1616',
          number: '16.16',
          slug: 'attention-limitations',
          title: 'Attention Limitations',
          description:
            'Planned guide: Attention Limitations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
      relatedArticleSlugs: ['attention-paper-to-product'],
    },
    {
      number: '17',
      slug: 'transformers',
      title: 'Transformers',
      description:
        'Connect attention to Transformer blocks, embeddings, position, training, and inference.',
      introduction:
        'Connect attention to Transformer blocks, embeddings, position, training, and inference.',
      concepts: [
        {
          id: 'DL-1701',
          number: '17.01',
          slug: 'why-transformers',
          title: 'Why Transformers?',
          description:
            'Planned guide: Why Transformers. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1702',
          number: '17.02',
          slug: 'transformer-architecture',
          title: 'Transformer Architecture',
          description:
            'Planned guide: Transformer Architecture. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1703',
          number: '17.03',
          slug: 'token-embeddings',
          title: 'Token Embeddings',
          description:
            'Planned guide: Token Embeddings. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1704',
          number: '17.04',
          slug: 'positional-information',
          title: 'Positional Information',
          description:
            'Planned guide: Positional Information. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1705',
          number: '17.05',
          slug: 'positional-encoding',
          title: 'Positional Encoding',
          description:
            'Planned guide: Positional Encoding. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1706',
          number: '17.06',
          slug: 'self-attention-layer',
          title: 'Self-Attention Layer',
          description:
            'Planned guide: Self-Attention Layer. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1707',
          number: '17.07',
          slug: 'feedforward-network',
          title: 'Feedforward Network',
          description:
            'Planned guide: Feedforward Network. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1708',
          number: '17.08',
          slug: 'residual-connections',
          title: 'Residual Connections',
          description:
            'Planned guide: Residual Connections. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1709',
          number: '17.09',
          slug: 'layer-normalization',
          title: 'Layer Normalization',
          description:
            'Planned guide: Layer Normalization. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1710',
          number: '17.10',
          slug: 'encoder',
          title: 'Encoder',
          description:
            'Planned guide: Encoder. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1711',
          number: '17.11',
          slug: 'decoder',
          title: 'Decoder',
          description:
            'Planned guide: Decoder. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1712',
          number: '17.12',
          slug: 'encoder-decoder-transformer',
          title: 'Encoder-Decoder Transformer',
          description:
            'Planned guide: Encoder-Decoder Transformer. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1713',
          number: '17.13',
          slug: 'decoder-only-transformer',
          title: 'Decoder-Only Transformer',
          description:
            'Planned guide: Decoder-Only Transformer. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1714',
          number: '17.14',
          slug: 'encoder-only-transformer',
          title: 'Encoder-Only Transformer',
          description:
            'Planned guide: Encoder-Only Transformer. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1715',
          number: '17.15',
          slug: 'causal-masking',
          title: 'Causal Masking',
          description:
            'Planned guide: Causal Masking. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1716',
          number: '17.16',
          slug: 'multi-head-attention',
          title: 'Multi-Head Attention',
          description:
            'Planned guide: Multi-Head Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1717',
          number: '17.17',
          slug: 'transformer-block',
          title: 'Transformer Block',
          description:
            'Planned guide: Transformer Block. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1718',
          number: '17.18',
          slug: 'context-length',
          title: 'Context Length',
          description:
            'Planned guide: Context Length. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1719',
          number: '17.19',
          slug: 'kv-cache',
          title: 'KV Cache',
          description:
            'Planned guide: KV Cache. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1720',
          number: '17.20',
          slug: 'transformer-training',
          title: 'Transformer Training',
          description:
            'Planned guide: Transformer Training. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1721',
          number: '17.21',
          slug: 'transformer-inference',
          title: 'Transformer Inference',
          description:
            'Planned guide: Transformer Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
      insight:
        'Attention changed how information moves. Transformers changed how models scale that movement.',
      relatedArticleSlugs: ['attention-paper-to-product'],
    },
    {
      number: '18',
      slug: 'representation-learning',
      title: 'Representation Learning',
      description:
        'Study learned features, embeddings, latent spaces, similarity, and representation quality.',
      introduction:
        'Study learned features, embeddings, latent spaces, similarity, and representation quality.',
      concepts: [
        {
          id: 'DL-1801',
          number: '18.01',
          slug: 'what-is-representation-learning',
          title: 'What is Representation Learning?',
          description:
            'Follow a signal through a neural network, then follow the gradient to understand what training changes.',
          level: 'intermediate',
          status: 'published',
          articleSlug: 'neural-networks-learn-representations',
        },
        {
          id: 'DL-1802',
          number: '18.02',
          slug: 'learned-features',
          title: 'Learned Features',
          description:
            'Planned guide: Learned Features. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1803',
          number: '18.03',
          slug: 'latent-representations',
          title: 'Latent Representations',
          description:
            'Planned guide: Latent Representations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1804',
          number: '18.04',
          slug: 'embeddings',
          title: 'Embeddings',
          description:
            'Planned guide: Embeddings. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1805',
          number: '18.05',
          slug: 'representation-space',
          title: 'Representation Space',
          description:
            'Planned guide: Representation Space. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1806',
          number: '18.06',
          slug: 'similarity',
          title: 'Similarity',
          description:
            'Planned guide: Similarity. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1807',
          number: '18.07',
          slug: 'metric-learning',
          title: 'Metric Learning',
          description:
            'Planned guide: Metric Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1808',
          number: '18.08',
          slug: 'contrastive-learning',
          title: 'Contrastive Learning',
          description:
            'Planned guide: Contrastive Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1809',
          number: '18.09',
          slug: 'triplet-learning',
          title: 'Triplet Learning',
          description:
            'Planned guide: Triplet Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1810',
          number: '18.10',
          slug: 'representation-quality',
          title: 'Representation Quality',
          description:
            'Planned guide: Representation Quality. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
        {
          id: 'DL-1811',
          number: '18.11',
          slug: 'visualization-of-representations',
          title: 'Visualization of Representations',
          description:
            'Planned guide: Visualization of Representations. Focus on intuition, assumptions, and a worked example.',
          level: 'intermediate',
          status: 'planned',
        },
      ],
    },
    {
      number: '19',
      slug: 'autoencoders-vaes',
      title: 'Autoencoders & VAEs',
      description:
        'Explore encoders, decoders, reconstruction, latent distributions, and variational autoencoders.',
      introduction:
        'Explore encoders, decoders, reconstruction, latent distributions, and variational autoencoders.',
      concepts: [
        {
          id: 'DL-1901',
          number: '19.01',
          slug: 'autoencoders',
          title: 'Autoencoders',
          description:
            'Planned guide: Autoencoders. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1902',
          number: '19.02',
          slug: 'encoder',
          title: 'Encoder',
          description:
            'Planned guide: Encoder. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1903',
          number: '19.03',
          slug: 'latent-space',
          title: 'Latent Space',
          description:
            'Planned guide: Latent Space. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1904',
          number: '19.04',
          slug: 'decoder',
          title: 'Decoder',
          description:
            'Planned guide: Decoder. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1905',
          number: '19.05',
          slug: 'reconstruction-loss',
          title: 'Reconstruction Loss',
          description:
            'Planned guide: Reconstruction Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1906',
          number: '19.06',
          slug: 'undercomplete-autoencoders',
          title: 'Undercomplete Autoencoders',
          description:
            'Planned guide: Undercomplete Autoencoders. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1907',
          number: '19.07',
          slug: 'sparse-autoencoders',
          title: 'Sparse Autoencoders',
          description:
            'Planned guide: Sparse Autoencoders. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1908',
          number: '19.08',
          slug: 'denoising-autoencoders',
          title: 'Denoising Autoencoders',
          description:
            'Planned guide: Denoising Autoencoders. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1909',
          number: '19.09',
          slug: 'variational-autoencoders',
          title: 'Variational Autoencoders',
          description:
            'Planned guide: Variational Autoencoders. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1910',
          number: '19.10',
          slug: 'latent-distributions',
          title: 'Latent Distributions',
          description:
            'Planned guide: Latent Distributions. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1911',
          number: '19.11',
          slug: 'reparameterization-trick',
          title: 'Reparameterization Trick',
          description:
            'Planned guide: Reparameterization Trick. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1912',
          number: '19.12',
          slug: 'vae-loss',
          title: 'VAE Loss',
          description:
            'Planned guide: VAE Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-1913',
          number: '19.13',
          slug: 'autoencoder-applications',
          title: 'Autoencoder Applications',
          description:
            'Planned guide: Autoencoder Applications. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '20',
      slug: 'generative-adversarial-networks',
      title: 'Generative Adversarial Networks',
      description:
        'Study generators, discriminators, adversarial training, evaluation, and GAN failure modes.',
      introduction:
        'Study generators, discriminators, adversarial training, evaluation, and GAN failure modes.',
      concepts: [
        {
          id: 'DL-2001',
          number: '20.01',
          slug: 'what-is-a-gan',
          title: 'What is a GAN?',
          description:
            'Planned guide: What is a GAN. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2002',
          number: '20.02',
          slug: 'generator',
          title: 'Generator',
          description:
            'Planned guide: Generator. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2003',
          number: '20.03',
          slug: 'discriminator',
          title: 'Discriminator',
          description:
            'Planned guide: Discriminator. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2004',
          number: '20.04',
          slug: 'adversarial-training',
          title: 'Adversarial Training',
          description:
            'Planned guide: Adversarial Training. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2005',
          number: '20.05',
          slug: 'gan-loss',
          title: 'GAN Loss',
          description:
            'Planned guide: GAN Loss. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2006',
          number: '20.06',
          slug: 'training-instability',
          title: 'Training Instability',
          description:
            'Planned guide: Training Instability. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2007',
          number: '20.07',
          slug: 'mode-collapse',
          title: 'Mode Collapse',
          description:
            'Planned guide: Mode Collapse. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2008',
          number: '20.08',
          slug: 'dcgan',
          title: 'DCGAN',
          description:
            'Planned guide: DCGAN. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2009',
          number: '20.09',
          slug: 'conditional-gan',
          title: 'Conditional GAN',
          description:
            'Planned guide: Conditional GAN. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2010',
          number: '20.10',
          slug: 'stylegan',
          title: 'StyleGAN',
          description:
            'Planned guide: StyleGAN. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2011',
          number: '20.11',
          slug: 'gan-evaluation',
          title: 'GAN Evaluation',
          description:
            'Planned guide: GAN Evaluation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2012',
          number: '20.12',
          slug: 'gan-limitations',
          title: 'GAN Limitations',
          description:
            'Planned guide: GAN Limitations. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
      navTitle: 'GANs',
    },
    {
      number: '21',
      slug: 'diffusion-models',
      title: 'Diffusion Models',
      description:
        'Explore diffusion processes, denoising, conditioning, sampling, training, and limitations.',
      introduction:
        'Explore diffusion processes, denoising, conditioning, sampling, training, and limitations.',
      concepts: [
        {
          id: 'DL-2101',
          number: '21.01',
          slug: 'what-is-diffusion',
          title: 'What is Diffusion?',
          description:
            'Planned guide: What is Diffusion. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2102',
          number: '21.02',
          slug: 'forward-diffusion',
          title: 'Forward Diffusion',
          description:
            'Planned guide: Forward Diffusion. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2103',
          number: '21.03',
          slug: 'noise-schedule',
          title: 'Noise Schedule',
          description:
            'Planned guide: Noise Schedule. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2104',
          number: '21.04',
          slug: 'reverse-diffusion',
          title: 'Reverse Diffusion',
          description:
            'Planned guide: Reverse Diffusion. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2105',
          number: '21.05',
          slug: 'denoising',
          title: 'Denoising',
          description:
            'Planned guide: Denoising. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2106',
          number: '21.06',
          slug: 'score-matching',
          title: 'Score Matching',
          description:
            'Planned guide: Score Matching. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2107',
          number: '21.07',
          slug: 'ddpm',
          title: 'DDPM',
          description:
            'Planned guide: DDPM. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2108',
          number: '21.08',
          slug: 'ddim',
          title: 'DDIM',
          description:
            'Planned guide: DDIM. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2109',
          number: '21.09',
          slug: 'latent-diffusion',
          title: 'Latent Diffusion',
          description:
            'Planned guide: Latent Diffusion. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2110',
          number: '21.10',
          slug: 'conditional-diffusion',
          title: 'Conditional Diffusion',
          description:
            'Planned guide: Conditional Diffusion. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2111',
          number: '21.11',
          slug: 'classifier-free-guidance',
          title: 'Classifier-Free Guidance',
          description:
            'Planned guide: Classifier-Free Guidance. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2112',
          number: '21.12',
          slug: 'diffusion-sampling',
          title: 'Diffusion Sampling',
          description:
            'Planned guide: Diffusion Sampling. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2113',
          number: '21.13',
          slug: 'diffusion-training',
          title: 'Diffusion Training',
          description:
            'Planned guide: Diffusion Training. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2114',
          number: '21.14',
          slug: 'diffusion-limitations',
          title: 'Diffusion Limitations',
          description:
            'Planned guide: Diffusion Limitations. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '22',
      slug: 'graph-neural-networks',
      title: 'Graph Neural Networks',
      description:
        'Follow graph data through message passing and aggregation into node, edge, and graph tasks.',
      introduction:
        'Follow graph data through message passing and aggregation into node, edge, and graph tasks.',
      concepts: [
        {
          id: 'DL-2201',
          number: '22.01',
          slug: 'graph-data',
          title: 'Graph Data',
          description:
            'Planned guide: Graph Data. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2202',
          number: '22.02',
          slug: 'nodes',
          title: 'Nodes',
          description:
            'Planned guide: Nodes. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2203',
          number: '22.03',
          slug: 'edges',
          title: 'Edges',
          description:
            'Planned guide: Edges. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2204',
          number: '22.04',
          slug: 'node-features',
          title: 'Node Features',
          description:
            'Planned guide: Node Features. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2205',
          number: '22.05',
          slug: 'message-passing',
          title: 'Message Passing',
          description:
            'Planned guide: Message Passing. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2206',
          number: '22.06',
          slug: 'neighborhood-aggregation',
          title: 'Neighborhood Aggregation',
          description:
            'Planned guide: Neighborhood Aggregation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2207',
          number: '22.07',
          slug: 'graph-convolutional-networks',
          title: 'Graph Convolutional Networks',
          description:
            'Planned guide: Graph Convolutional Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2208',
          number: '22.08',
          slug: 'graph-attention-networks',
          title: 'Graph Attention Networks',
          description:
            'Planned guide: Graph Attention Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2209',
          number: '22.09',
          slug: 'graphsage',
          title: 'GraphSAGE',
          description:
            'Planned guide: GraphSAGE. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2210',
          number: '22.10',
          slug: 'node-classification',
          title: 'Node Classification',
          description:
            'Planned guide: Node Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2211',
          number: '22.11',
          slug: 'link-prediction',
          title: 'Link Prediction',
          description:
            'Planned guide: Link Prediction. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2212',
          number: '22.12',
          slug: 'graph-classification',
          title: 'Graph Classification',
          description:
            'Planned guide: Graph Classification. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2213',
          number: '22.13',
          slug: 'gnn-oversmoothing',
          title: 'GNN Oversmoothing',
          description:
            'Planned guide: GNN Oversmoothing. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2214',
          number: '22.14',
          slug: 'gnn-applications',
          title: 'GNN Applications',
          description:
            'Planned guide: GNN Applications. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '23',
      slug: 'vision-transformers',
      title: 'Vision Transformers',
      description:
        'Explore image patches, embeddings, vision attention, and comparisons between CNNs and ViTs.',
      introduction:
        'Explore image patches, embeddings, vision attention, and comparisons between CNNs and ViTs.',
      concepts: [
        {
          id: 'DL-2301',
          number: '23.01',
          slug: 'why-vision-transformers',
          title: 'Why Vision Transformers?',
          description:
            'Planned guide: Why Vision Transformers. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2302',
          number: '23.02',
          slug: 'image-patches',
          title: 'Image Patches',
          description:
            'Planned guide: Image Patches. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2303',
          number: '23.03',
          slug: 'patch-embeddings',
          title: 'Patch Embeddings',
          description:
            'Planned guide: Patch Embeddings. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2304',
          number: '23.04',
          slug: 'positional-embeddings',
          title: 'Positional Embeddings',
          description:
            'Planned guide: Positional Embeddings. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2305',
          number: '23.05',
          slug: 'vision-self-attention',
          title: 'Vision Self-Attention',
          description:
            'Planned guide: Vision Self-Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2306',
          number: '23.06',
          slug: 'cls-token',
          title: 'CLS Token',
          description:
            'Planned guide: CLS Token. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2307',
          number: '23.07',
          slug: 'vit-architecture',
          title: 'ViT Architecture',
          description:
            'Planned guide: ViT Architecture. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2308',
          number: '23.08',
          slug: 'cnn-vs-vit',
          title: 'CNN vs ViT',
          description:
            'Planned guide: CNN vs ViT. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2309',
          number: '23.09',
          slug: 'hybrid-vision-architectures',
          title: 'Hybrid Vision Architectures',
          description:
            'Planned guide: Hybrid Vision Architectures. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2310',
          number: '23.10',
          slug: 'vision-transformer-scaling',
          title: 'Vision Transformer Scaling',
          description:
            'Planned guide: Vision Transformer Scaling. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '24',
      slug: 'multimodal-deep-learning',
      title: 'Multimodal Deep Learning',
      description:
        'Connect text, images, and audio through embeddings, fusion, cross-attention, and evaluation.',
      introduction:
        'Connect text, images, and audio through embeddings, fusion, cross-attention, and evaluation.',
      concepts: [
        {
          id: 'DL-2401',
          number: '24.01',
          slug: 'what-is-multimodal-learning',
          title: 'What is Multimodal Learning?',
          description:
            'Planned guide: What is Multimodal Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2402',
          number: '24.02',
          slug: 'text-image',
          title: 'Text + Image',
          description:
            'Planned guide: Text + Image. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2403',
          number: '24.03',
          slug: 'text-audio',
          title: 'Text + Audio',
          description:
            'Planned guide: Text + Audio. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2404',
          number: '24.04',
          slug: 'image-audio',
          title: 'Image + Audio',
          description:
            'Planned guide: Image + Audio. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2405',
          number: '24.05',
          slug: 'multimodal-embeddings',
          title: 'Multimodal Embeddings',
          description:
            'Planned guide: Multimodal Embeddings. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2406',
          number: '24.06',
          slug: 'contrastive-multimodal-learning',
          title: 'Contrastive Multimodal Learning',
          description:
            'Planned guide: Contrastive Multimodal Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2407',
          number: '24.07',
          slug: 'clip',
          title: 'CLIP',
          description:
            'Planned guide: CLIP. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2408',
          number: '24.08',
          slug: 'vision-language-models',
          title: 'Vision-Language Models',
          description:
            'Planned guide: Vision-Language Models. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2409',
          number: '24.09',
          slug: 'multimodal-fusion',
          title: 'Multimodal Fusion',
          description:
            'Planned guide: Multimodal Fusion. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2410',
          number: '24.10',
          slug: 'cross-attention',
          title: 'Cross-Attention',
          description:
            'Planned guide: Cross-Attention. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2411',
          number: '24.11',
          slug: 'multimodal-generation',
          title: 'Multimodal Generation',
          description:
            'Planned guide: Multimodal Generation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2412',
          number: '24.12',
          slug: 'multimodal-evaluation',
          title: 'Multimodal Evaluation',
          description:
            'Planned guide: Multimodal Evaluation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
      navTitle: 'Multimodal Learning',
    },
    {
      number: '25',
      slug: 'transfer-learning',
      title: 'Transfer Learning',
      description:
        'Plan pretraining, feature extraction, fine-tuning, and adaptation to a new domain.',
      introduction:
        'Plan pretraining, feature extraction, fine-tuning, and adaptation to a new domain.',
      concepts: [
        {
          id: 'DL-2501',
          number: '25.01',
          slug: 'what-is-transfer-learning',
          title: 'What is Transfer Learning?',
          description:
            'Planned guide: What is Transfer Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2502',
          number: '25.02',
          slug: 'pretraining',
          title: 'Pretraining',
          description:
            'Planned guide: Pretraining. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2503',
          number: '25.03',
          slug: 'fine-tuning',
          title: 'Fine-Tuning',
          description:
            'Planned guide: Fine-Tuning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2504',
          number: '25.04',
          slug: 'feature-extraction',
          title: 'Feature Extraction',
          description:
            'Planned guide: Feature Extraction. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2505',
          number: '25.05',
          slug: 'frozen-layers',
          title: 'Frozen Layers',
          description:
            'Planned guide: Frozen Layers. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2506',
          number: '25.06',
          slug: 'partial-fine-tuning',
          title: 'Partial Fine-Tuning',
          description:
            'Planned guide: Partial Fine-Tuning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2507',
          number: '25.07',
          slug: 'full-fine-tuning',
          title: 'Full Fine-Tuning',
          description:
            'Planned guide: Full Fine-Tuning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2508',
          number: '25.08',
          slug: 'domain-adaptation',
          title: 'Domain Adaptation',
          description:
            'Planned guide: Domain Adaptation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2509',
          number: '25.09',
          slug: 'catastrophic-forgetting',
          title: 'Catastrophic Forgetting',
          description:
            'Planned guide: Catastrophic Forgetting. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2510',
          number: '25.10',
          slug: 'transfer-learning-strategy',
          title: 'Transfer Learning Strategy',
          description:
            'Planned guide: Transfer Learning Strategy. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '26',
      slug: 'self-supervised-learning',
      title: 'Self-Supervised Learning',
      description:
        'Explore learning tasks constructed from data, contrastive objectives, and masked prediction.',
      introduction:
        'Explore learning tasks constructed from data, contrastive objectives, and masked prediction.',
      concepts: [
        {
          id: 'DL-2601',
          number: '26.01',
          slug: 'what-is-self-supervised-learning',
          title: 'What is Self-Supervised Learning?',
          description:
            'Planned guide: What is Self-Supervised Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2602',
          number: '26.02',
          slug: 'pretext-tasks',
          title: 'Pretext Tasks',
          description:
            'Planned guide: Pretext Tasks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2603',
          number: '26.03',
          slug: 'contrastive-learning',
          title: 'Contrastive Learning',
          description:
            'Planned guide: Contrastive Learning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2604',
          number: '26.04',
          slug: 'positive-and-negative-pairs',
          title: 'Positive and Negative Pairs',
          description:
            'Planned guide: Positive and Negative Pairs. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2605',
          number: '26.05',
          slug: 'simclr',
          title: 'SimCLR',
          description:
            'Planned guide: SimCLR. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2606',
          number: '26.06',
          slug: 'moco',
          title: 'MoCo',
          description:
            'Planned guide: MoCo. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2607',
          number: '26.07',
          slug: 'masked-prediction',
          title: 'Masked Prediction',
          description:
            'Planned guide: Masked Prediction. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2608',
          number: '26.08',
          slug: 'masked-language-modeling',
          title: 'Masked Language Modeling',
          description:
            'Planned guide: Masked Language Modeling. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2609',
          number: '26.09',
          slug: 'masked-image-modeling',
          title: 'Masked Image Modeling',
          description:
            'Planned guide: Masked Image Modeling. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2610',
          number: '26.10',
          slug: 'self-supervised-pretraining',
          title: 'Self-Supervised Pretraining',
          description:
            'Planned guide: Self-Supervised Pretraining. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2611',
          number: '26.11',
          slug: 'representation-transfer',
          title: 'Representation Transfer',
          description:
            'Planned guide: Representation Transfer. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '27',
      slug: 'model-evaluation',
      title: 'Model Evaluation',
      description:
        'Plan metrics, calibration, robustness checks, ablations, benchmarks, and human evaluation.',
      introduction:
        'Plan metrics, calibration, robustness checks, ablations, benchmarks, and human evaluation.',
      concepts: [
        {
          id: 'DL-2701',
          number: '27.01',
          slug: 'training-metrics',
          title: 'Training Metrics',
          description:
            'Planned guide: Training Metrics. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2702',
          number: '27.02',
          slug: 'validation-metrics',
          title: 'Validation Metrics',
          description:
            'Planned guide: Validation Metrics. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2703',
          number: '27.03',
          slug: 'test-metrics',
          title: 'Test Metrics',
          description:
            'Planned guide: Test Metrics. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2704',
          number: '27.04',
          slug: 'classification-metrics',
          title: 'Classification Metrics',
          description:
            'Planned guide: Classification Metrics. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2705',
          number: '27.05',
          slug: 'regression-metrics',
          title: 'Regression Metrics',
          description:
            'Planned guide: Regression Metrics. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2706',
          number: '27.06',
          slug: 'ranking-metrics',
          title: 'Ranking Metrics',
          description:
            'Planned guide: Ranking Metrics. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2707',
          number: '27.07',
          slug: 'generative-metrics',
          title: 'Generative Metrics',
          description:
            'Planned guide: Generative Metrics. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2708',
          number: '27.08',
          slug: 'calibration',
          title: 'Calibration',
          description:
            'Planned guide: Calibration. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2709',
          number: '27.09',
          slug: 'robustness-evaluation',
          title: 'Robustness Evaluation',
          description:
            'Planned guide: Robustness Evaluation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2710',
          number: '27.10',
          slug: 'distribution-shift',
          title: 'Distribution Shift',
          description:
            'Planned guide: Distribution Shift. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2711',
          number: '27.11',
          slug: 'ablation-studies',
          title: 'Ablation Studies',
          description:
            'Planned guide: Ablation Studies. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2712',
          number: '27.12',
          slug: 'benchmarking',
          title: 'Benchmarking',
          description:
            'Planned guide: Benchmarking. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2713',
          number: '27.13',
          slug: 'human-evaluation',
          title: 'Human Evaluation',
          description:
            'Planned guide: Human Evaluation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
      navTitle: 'Evaluation',
    },
    {
      number: '28',
      slug: 'interpretability',
      title: 'Interpretability',
      description:
        'Explore neural-network visualizations, attributions, probing, and the limits of interpretation.',
      introduction:
        'Explore neural-network visualizations, attributions, probing, and the limits of interpretation.',
      concepts: [
        {
          id: 'DL-2801',
          number: '28.01',
          slug: 'why-interpret-neural-networks',
          title: 'Why Interpret Neural Networks?',
          description:
            'Planned guide: Why Interpret Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2802',
          number: '28.02',
          slug: 'feature-visualization',
          title: 'Feature Visualization',
          description:
            'Planned guide: Feature Visualization. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2803',
          number: '28.03',
          slug: 'activation-visualization',
          title: 'Activation Visualization',
          description:
            'Planned guide: Activation Visualization. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2804',
          number: '28.04',
          slug: 'saliency-maps',
          title: 'Saliency Maps',
          description:
            'Planned guide: Saliency Maps. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2805',
          number: '28.05',
          slug: 'grad-cam',
          title: 'Grad-CAM',
          description:
            'Planned guide: Grad-CAM. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2806',
          number: '28.06',
          slug: 'integrated-gradients',
          title: 'Integrated Gradients',
          description:
            'Planned guide: Integrated Gradients. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2807',
          number: '28.07',
          slug: 'attention-visualization',
          title: 'Attention Visualization',
          description:
            'Planned guide: Attention Visualization. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2808',
          number: '28.08',
          slug: 'shap-for-neural-networks',
          title: 'SHAP for Neural Networks',
          description:
            'Planned guide: SHAP for Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2809',
          number: '28.09',
          slug: 'representation-probing',
          title: 'Representation Probing',
          description:
            'Planned guide: Representation Probing. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2810',
          number: '28.10',
          slug: 'interpretability-limitations',
          title: 'Interpretability Limitations',
          description:
            'Planned guide: Interpretability Limitations. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
      insight:
        'Seeing what a model attends to is not the same as proving why it decided.',
    },
    {
      number: '29',
      slug: 'efficient-deep-learning',
      title: 'Efficient Deep Learning',
      description:
        'Examine computation, memory, compression, precision, and distributed training choices.',
      introduction:
        'Examine computation, memory, compression, precision, and distributed training choices.',
      concepts: [
        {
          id: 'DL-2901',
          number: '29.01',
          slug: 'why-efficiency-matters',
          title: 'Why Efficiency Matters',
          description:
            'Planned guide: Why Efficiency Matters. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2902',
          number: '29.02',
          slug: 'parameter-count',
          title: 'Parameter Count',
          description:
            'Planned guide: Parameter Count. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2903',
          number: '29.03',
          slug: 'flops',
          title: 'FLOPs',
          description:
            'Planned guide: FLOPs. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2904',
          number: '29.04',
          slug: 'memory-usage',
          title: 'Memory Usage',
          description:
            'Planned guide: Memory Usage. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2905',
          number: '29.05',
          slug: 'quantization',
          title: 'Quantization',
          description:
            'Planned guide: Quantization. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2906',
          number: '29.06',
          slug: 'pruning',
          title: 'Pruning',
          description:
            'Planned guide: Pruning. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2907',
          number: '29.07',
          slug: 'knowledge-distillation',
          title: 'Knowledge Distillation',
          description:
            'Planned guide: Knowledge Distillation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2908',
          number: '29.08',
          slug: 'low-rank-approximation',
          title: 'Low-Rank Approximation',
          description:
            'Planned guide: Low-Rank Approximation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2909',
          number: '29.09',
          slug: 'mixed-precision',
          title: 'Mixed Precision',
          description:
            'Planned guide: Mixed Precision. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2910',
          number: '29.10',
          slug: 'gradient-accumulation',
          title: 'Gradient Accumulation',
          description:
            'Planned guide: Gradient Accumulation. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2911',
          number: '29.11',
          slug: 'model-compression',
          title: 'Model Compression',
          description:
            'Planned guide: Model Compression. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2912',
          number: '29.12',
          slug: 'efficient-architectures',
          title: 'Efficient Architectures',
          description:
            'Planned guide: Efficient Architectures. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2913',
          number: '29.13',
          slug: 'sparse-models',
          title: 'Sparse Models',
          description:
            'Planned guide: Sparse Models. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-2914',
          number: '29.14',
          slug: 'distributed-training',
          title: 'Distributed Training',
          description:
            'Planned guide: Distributed Training. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
    },
    {
      number: '30',
      slug: 'production-deep-learning',
      title: 'Production Deep Learning',
      description:
        'Follow models into serving, batching, deployment, monitoring, versioning, and rollback.',
      introduction:
        'Follow models into serving, batching, deployment, monitoring, versioning, and rollback.',
      concepts: [
        {
          id: 'DL-3001',
          number: '30.01',
          slug: 'from-training-to-serving',
          title: 'From Training to Serving',
          description:
            'Planned guide: From Training to Serving. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3002',
          number: '30.02',
          slug: 'model-serialization',
          title: 'Model Serialization',
          description:
            'Planned guide: Model Serialization. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3003',
          number: '30.03',
          slug: 'model-serving',
          title: 'Model Serving',
          description:
            'Planned guide: Model Serving. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3004',
          number: '30.04',
          slug: 'batch-inference',
          title: 'Batch Inference',
          description:
            'Planned guide: Batch Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3005',
          number: '30.05',
          slug: 'online-inference',
          title: 'Online Inference',
          description:
            'Planned guide: Online Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3006',
          number: '30.06',
          slug: 'gpu-inference',
          title: 'GPU Inference',
          description:
            'Planned guide: GPU Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3007',
          number: '30.07',
          slug: 'cpu-inference',
          title: 'CPU Inference',
          description:
            'Planned guide: CPU Inference. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3008',
          number: '30.08',
          slug: 'dynamic-batching',
          title: 'Dynamic Batching',
          description:
            'Planned guide: Dynamic Batching. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3009',
          number: '30.09',
          slug: 'inference-caching',
          title: 'Inference Caching',
          description:
            'Planned guide: Inference Caching. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3010',
          number: '30.10',
          slug: 'quantized-serving',
          title: 'Quantized Serving',
          description:
            'Planned guide: Quantized Serving. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3011',
          number: '30.11',
          slug: 'deployment',
          title: 'Deployment',
          description:
            'Planned guide: Deployment. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3012',
          number: '30.12',
          slug: 'containerization',
          title: 'Containerization',
          description:
            'Planned guide: Containerization. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3013',
          number: '30.13',
          slug: 'kubernetes',
          title: 'Kubernetes',
          description:
            'Planned guide: Kubernetes. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3014',
          number: '30.14',
          slug: 'autoscaling',
          title: 'Autoscaling',
          description:
            'Planned guide: Autoscaling. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3015',
          number: '30.15',
          slug: 'model-monitoring',
          title: 'Model Monitoring',
          description:
            'Planned guide: Model Monitoring. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3016',
          number: '30.16',
          slug: 'data-drift',
          title: 'Data Drift',
          description:
            'Planned guide: Data Drift. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3017',
          number: '30.17',
          slug: 'distribution-shift',
          title: 'Distribution Shift',
          description:
            'Planned guide: Distribution Shift. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3018',
          number: '30.18',
          slug: 'performance-monitoring',
          title: 'Performance Monitoring',
          description:
            'Planned guide: Performance Monitoring. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3019',
          number: '30.19',
          slug: 'latency-monitoring',
          title: 'Latency Monitoring',
          description:
            'Planned guide: Latency Monitoring. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3020',
          number: '30.20',
          slug: 'gpu-utilization',
          title: 'GPU Utilization',
          description:
            'Planned guide: GPU Utilization. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3021',
          number: '30.21',
          slug: 'cost-monitoring',
          title: 'Cost Monitoring',
          description:
            'Planned guide: Cost Monitoring. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3022',
          number: '30.22',
          slug: 'model-versioning',
          title: 'Model Versioning',
          description:
            'Planned guide: Model Versioning. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3023',
          number: '30.23',
          slug: 'rollback',
          title: 'Rollback',
          description:
            'Planned guide: Rollback. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3024',
          number: '30.24',
          slug: 'canary-deployment',
          title: 'Canary Deployment',
          description:
            'Planned guide: Canary Deployment. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
        {
          id: 'DL-3025',
          number: '30.25',
          slug: 'production-failure-modes',
          title: 'Production Failure Modes',
          description:
            'Planned guide: Production Failure Modes. Focus on intuition, assumptions, and a worked example.',
          level: 'production',
          status: 'planned',
        },
      ],
      insight: 'A model becomes valuable when it works outside the notebook.',
    },
    {
      number: '31',
      slug: 'advanced-architectures',
      title: 'Advanced Architectures',
      description:
        'Survey advanced network families and define the evidence needed to assess new architectural ideas.',
      introduction:
        'Survey advanced network families and define the evidence needed to assess new architectural ideas.',
      concepts: [
        {
          id: 'DL-3101',
          number: '31.01',
          slug: 'residual-networks',
          title: 'Residual Networks',
          description:
            'Planned guide: Residual Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3102',
          number: '31.02',
          slug: 'dense-networks',
          title: 'Dense Networks',
          description:
            'Planned guide: Dense Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3103',
          number: '31.03',
          slug: 'mixture-of-experts',
          title: 'Mixture of Experts',
          description:
            'Planned guide: Mixture of Experts. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3104',
          number: '31.04',
          slug: 'sparse-neural-networks',
          title: 'Sparse Neural Networks',
          description:
            'Planned guide: Sparse Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3105',
          number: '31.05',
          slug: 'memory-networks',
          title: 'Memory Networks',
          description:
            'Planned guide: Memory Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3106',
          number: '31.06',
          slug: 'neural-odes',
          title: 'Neural ODEs',
          description:
            'Planned guide: Neural ODEs. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3107',
          number: '31.07',
          slug: 'capsule-networks',
          title: 'Capsule Networks',
          description:
            'Planned guide: Capsule Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3108',
          number: '31.08',
          slug: 'state-space-models',
          title: 'State Space Models',
          description:
            'Planned guide: State Space Models. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3109',
          number: '31.09',
          slug: 'mamba-style-architectures',
          title: 'Mamba-Style Architectures',
          description:
            'Planned guide: Mamba-Style Architectures. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3110',
          number: '31.10',
          slug: 'retrieval-augmented-neural-systems',
          title: 'Retrieval-Augmented Neural Systems',
          description:
            'Planned guide: Retrieval-Augmented Neural Systems. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3111',
          number: '31.11',
          slug: 'modular-neural-networks',
          title: 'Modular Neural Networks',
          description:
            'Planned guide: Modular Neural Networks. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3112',
          number: '31.12',
          slug: 'neuro-symbolic-systems',
          title: 'Neuro-Symbolic Systems',
          description:
            'Planned guide: Neuro-Symbolic Systems. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3113',
          number: '31.13',
          slug: 'foundation-models',
          title: 'Foundation Models',
          description:
            'Planned guide: Foundation Models. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3114',
          number: '31.14',
          slug: 'scaling-laws',
          title: 'Scaling Laws',
          description:
            'Planned guide: Scaling Laws. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
        {
          id: 'DL-3115',
          number: '31.15',
          slug: 'emerging-architectures',
          title: 'Emerging Architectures',
          description:
            'Planned guide: Emerging Architectures. Focus on intuition, assumptions, and a worked example.',
          level: 'advanced',
          status: 'planned',
        },
      ],
      notice:
        'Architectures in this chapter evolve quickly. Future articles should state their review date, identify the model or paper version, and distinguish reported evidence from interpretation.',
    },
    {
      number: '32',
      slug: 'projects-experiments',
      title: 'Projects & Experiments',
      description:
        'Choose a proposed deep-learning project and plan its baseline, evaluation, and limitations.',
      introduction:
        'Choose a proposed deep-learning project and plan its baseline, evaluation, and limitations.',
      concepts: [
        {
          id: 'DL-3201',
          number: '32.01',
          slug: 'build-a-neural-network-from-scratch',
          title: 'Build a Neural Network from Scratch',
          description:
            'Proposed project: Build a Neural Network from Scratch. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'DL-3202',
          number: '32.02',
          slug: 'mnist-digit-classifier',
          title: 'MNIST Digit Classifier',
          description:
            'Proposed project: MNIST Digit Classifier. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'DL-3203',
          number: '32.03',
          slug: 'image-classifier',
          title: 'Image Classifier',
          description:
            'Proposed project: Image Classifier. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'DL-3204',
          number: '32.04',
          slug: 'simple-sentiment-classifier',
          title: 'Simple Sentiment Classifier',
          description:
            'Proposed project: Simple Sentiment Classifier. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'DL-3205',
          number: '32.05',
          slug: 'autoencoder',
          title: 'Autoencoder',
          description:
            'Proposed project: Autoencoder. Define a baseline, test procedure, and limitations.',
          level: 'beginner',
          status: 'planned',
          group: 'Beginner',
        },
        {
          id: 'DL-3206',
          number: '32.06',
          slug: 'cnn-image-classifier',
          title: 'CNN Image Classifier',
          description:
            'Proposed project: CNN Image Classifier. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'DL-3207',
          number: '32.07',
          slug: 'lstm-sequence-classifier',
          title: 'LSTM Sequence Classifier',
          description:
            'Proposed project: LSTM Sequence Classifier. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'DL-3208',
          number: '32.08',
          slug: 'attention-visualization',
          title: 'Attention Visualization',
          description:
            'Proposed project: Attention Visualization. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'DL-3209',
          number: '32.09',
          slug: 'transformer-text-classifier',
          title: 'Transformer Text Classifier',
          description:
            'Proposed project: Transformer Text Classifier. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'DL-3210',
          number: '32.10',
          slug: 'transfer-learning-project',
          title: 'Transfer Learning Project',
          description:
            'Proposed project: Transfer Learning Project. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'DL-3211',
          number: '32.11',
          slug: 'image-segmentation',
          title: 'Image Segmentation',
          description:
            'Proposed project: Image Segmentation. Define a baseline, test procedure, and limitations.',
          level: 'intermediate',
          status: 'planned',
          group: 'Intermediate',
        },
        {
          id: 'DL-3212',
          number: '32.12',
          slug: 'build-a-transformer',
          title: 'Build a Transformer',
          description:
            'Proposed project: Build a Transformer. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3213',
          number: '32.13',
          slug: 'train-a-small-language-model',
          title: 'Train a Small Language Model',
          description:
            'Proposed project: Train a Small Language Model. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3214',
          number: '32.14',
          slug: 'vision-transformer',
          title: 'Vision Transformer',
          description:
            'Proposed project: Vision Transformer. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3215',
          number: '32.15',
          slug: 'multimodal-retrieval',
          title: 'Multimodal Retrieval',
          description:
            'Proposed project: Multimodal Retrieval. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3216',
          number: '32.16',
          slug: 'diffusion-model-experiment',
          title: 'Diffusion Model Experiment',
          description:
            'Proposed project: Diffusion Model Experiment. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3217',
          number: '32.17',
          slug: 'model-quantization-experiment',
          title: 'Model Quantization Experiment',
          description:
            'Proposed project: Model Quantization Experiment. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3218',
          number: '32.18',
          slug: 'distributed-training-experiment',
          title: 'Distributed Training Experiment',
          description:
            'Proposed project: Distributed Training Experiment. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3219',
          number: '32.19',
          slug: 'production-inference-api',
          title: 'Production Inference API',
          description:
            'Proposed project: Production Inference API. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3220',
          number: '32.20',
          slug: 'gpu-serving-pipeline',
          title: 'GPU Serving Pipeline',
          description:
            'Proposed project: GPU Serving Pipeline. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
        {
          id: 'DL-3221',
          number: '32.21',
          slug: 'deep-learning-monitoring-system',
          title: 'Deep Learning Monitoring System',
          description:
            'Proposed project: Deep Learning Monitoring System. Define a baseline, test procedure, and limitations.',
          level: 'advanced',
          status: 'planned',
          group: 'Advanced',
        },
      ],
    },
  ],
  legacyHashes: {
    'start-here': 'deep-learning-foundations',
    'neural-network-fundamentals': 'neural-network-fundamentals',
    training: 'training-deep-networks',
    'improving-training': 'training-deep-networks',
    cnns: 'convolutional-neural-networks',
    'sequence-models': 'sequence-models',
    attention: 'attention',
    transformers: 'transformers',
    'generative-deep-learning': 'autoencoders-vaes',
    'advanced-architectures': 'advanced-architectures',
    'production-deep-learning': 'production-deep-learning',
    'start-here--what-is-deep-learning':
      'deep-learning-foundations/#what-is-deep-learning',
    'start-here--ml-vs-deep-learning': 'deep-learning-foundations',
    'start-here--neural-network-intuition': 'deep-learning-foundations',
    'neural-network-fundamentals--neuron': 'neural-network-fundamentals',
    'neural-network-fundamentals--weights':
      'neural-network-fundamentals/#weights',
    'neural-network-fundamentals--bias': 'neural-network-fundamentals/#bias',
    'neural-network-fundamentals--layers':
      'neural-network-fundamentals/#layers',
    'neural-network-fundamentals--activation-functions':
      'neural-network-fundamentals',
    'training--loss-functions': 'training-deep-networks',
    'training--gradient-descent': 'optimization/#gradient-descent',
    'training--backpropagation': 'training-deep-networks',
    'training--optimizers': 'training-deep-networks',
    'training--learning-rate': 'optimization/#learning-rate',
    'improving-training--regularization': 'training-deep-networks',
    'improving-training--dropout': 'regularization/#dropout',
    'improving-training--batch-normalization':
      'normalization/#batch-normalization',
    'improving-training--weight-initialization': 'training-deep-networks',
    'improving-training--early-stopping':
      'training-deep-networks/#early-stopping',
    'cnns--convolution': 'convolutional-neural-networks/#convolution',
    'cnns--filters': 'convolutional-neural-networks',
    'cnns--pooling': 'convolutional-neural-networks/#pooling',
    'cnns--image-classification':
      'computer-vision-with-deep-learning/#image-classification',
    'cnns--feature-maps': 'convolutional-neural-networks/#feature-maps',
    'sequence-models--rnn': 'sequence-models',
    'sequence-models--vanishing-gradients':
      'backpropagation/#vanishing-gradients',
    'sequence-models--lstm': 'rnns-lstms-grus/#lstm',
    'sequence-models--gru': 'rnns-lstms-grus/#gru',
    'attention--query': 'attention/#query',
    'attention--key': 'attention/#key',
    'attention--value': 'attention/#value',
    'attention--self-attention': 'attention/#self-attention',
    'attention--multi-head-attention': 'attention/#multi-head-attention',
    'transformers--encoder': 'transformers/#encoder',
    'transformers--decoder': 'transformers/#decoder',
    'transformers--positional-encoding': 'transformers/#positional-encoding',
    'transformers--transformer-blocks': 'transformers',
    'generative-deep-learning--autoencoders': 'autoencoders-vaes/#autoencoders',
    'generative-deep-learning--vaes': 'autoencoders-vaes',
    'generative-deep-learning--gans': 'autoencoders-vaes',
    'generative-deep-learning--diffusion-models': 'autoencoders-vaes',
    'advanced-architectures--vision-transformers': 'advanced-architectures',
    'advanced-architectures--graph-neural-networks': 'advanced-architectures',
    'advanced-architectures--multimodal-models': 'advanced-architectures',
    'production-deep-learning--gpu-inference':
      'production-deep-learning/#gpu-inference',
    'production-deep-learning--quantization':
      'efficient-deep-learning/#quantization',
    'production-deep-learning--batching': 'production-deep-learning',
    'production-deep-learning--serving': 'production-deep-learning',
    'production-deep-learning--optimization': 'production-deep-learning',
  },
};
