# Deep Learning knowledge map

Generated from src/data/topic-sequences/deep-learning.ts. Regenerate with node scripts/write-knowledge-map.mjs, then format the generated Markdown.

The supplied canonical sequence replaces the previous 11-section outline. The top-level chapter names and complete numbered lists take precedence over abbreviated sidebar examples.

## Coverage

- Sections: 32, plus Overview.
- Concepts: 474.
- Published concept references: 2.
- Planned concepts: 472.
- Draft concepts: 0.
- Learning path: Deep Learning Engineer path at /blogs/learn/deep-learning-engineer/.

Counts are calculated from the data. Sequence numbers describe editorial order, never personal completion. Planned descriptions state intended coverage; they are not full articles or claims of completed experiments.

## Reusable architecture

TopicSequence → KnowledgeSection → KnowledgeConcept. Each concept has a stable id, display number, section-local slug, title, description, level, optional group, and published/planned/draft status. Published concepts require an articleSlug.

The shared TopicKnowledgeLayout, TopicSidebar, TopicConceptList, TopicConceptStatus, and TopicSectionPager render every registered book. TopicInsight, ConceptFlow, ArticleList, and BuildMethod are reused. Optional navTitle, notice, relatedArticleSlugs, and diagram fields support concise sidebar labels, editorial notes, published related reading, and a staged learning-cycle visual.

Related reading retains the referenced article’s original topic, type, title, URL, sources, and research attribution. It does not publish a new concept guide or duplicate an article body.

The sequence registry projects only public content and supplies the sectionsFor adapter, keeping the Topics directory count consistent. Other topics can be added to the registry without a separate topic-specific UI.

## URL convention

- Overview: /blogs/topics/deep-learning/
- Section: /blogs/topics/deep-learning/deep-learning-foundations/
- Concept: /blogs/topics/deep-learning/deep-learning-foundations/#machine-learning-vs-deep-learning
- Article: /blogs/articles/{articleSlug}/

Each chapter has a real static route, canonical metadata, breadcrumbs, previous/next links, an overview link, and the topic learning path. Concepts use anchors within chapter pages; there are no empty concept routes. Existing fragment URLs migrate through legacyHashes. Preserve those mappings when renaming sections.

## Status and publication

- published: the concept title opens an eligible published article.
- planned: show the concept with Article in preparation and no invented article link.
- draft: omit the concept from public navigation, rows, counts, and search.
- publicSequence removes draft concepts, excludes unpublished related reading, and removes article links when the target article is unavailable. The build gate flags invalid published mappings before release.
- The existing article publication-date and status filters also exclude drafts and future-dated articles. No draft body is copied into the knowledge index.

## How to add and publish articles

1. Edit src/data/topic-sequences/deep-learning.ts. Add a concept with a unique stable id and slug, the correct display number, a scope description, level, optional group, and planned status.
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
- npm run test:deep-learning: responsive layouts, themes, navigation, keyboard access, deep links, search, and accessibility.
- npm run check; npm run lint; npm run format:check.

## Published concept mappings

| ID      | Number | Concept                          | Article slug                          |
| ------- | ------ | -------------------------------- | ------------------------------------- |
| DL-0101 | 01.01  | What is Deep Learning?           | neural-networks-learn-representations |
| DL-1801 | 18.01  | What is Representation Learning? | neural-networks-learn-representations |

## Complete section and concept inventory

### 01 — Deep Learning Foundations

URL: /blogs/topics/deep-learning/deep-learning-foundations/

Build a foundation in neural networks, learned representations, training, and generalization.

| ID      | Number | Concept                                | Level    | Status    | Group |
| ------- | ------ | -------------------------------------- | -------- | --------- | ----- |
| DL-0101 | 01.01  | What is Deep Learning?                 | beginner | published | —     |
| DL-0102 | 01.02  | Machine Learning vs Deep Learning      | beginner | planned   | —     |
| DL-0103 | 01.03  | Why Neural Networks?                   | beginner | planned   | —     |
| DL-0104 | 01.04  | Biological Neuron vs Artificial Neuron | beginner | planned   | —     |
| DL-0105 | 01.05  | Deep vs Shallow Networks               | beginner | planned   | —     |
| DL-0106 | 01.06  | Representation Learning                | beginner | planned   | —     |
| DL-0107 | 01.07  | Training vs Inference                  | beginner | planned   | —     |
| DL-0108 | 01.08  | Parameters vs Hyperparameters          | beginner | planned   | —     |
| DL-0109 | 01.09  | Model Capacity                         | beginner | planned   | —     |
| DL-0110 | 01.10  | Generalization                         | beginner | planned   | —     |
| DL-0111 | 01.11  | Overfitting                            | beginner | planned   | —     |
| DL-0112 | 01.12  | Underfitting                           | beginner | planned   | —     |
| DL-0113 | 01.13  | Bias and Variance                      | beginner | planned   | —     |
| DL-0114 | 01.14  | Deep Learning Workflow                 | beginner | planned   | —     |
| DL-0115 | 01.15  | When Deep Learning Makes Sense         | beginner | planned   | —     |
| DL-0116 | 01.16  | When Not to Use Deep Learning          | beginner | planned   | —     |

### 02 — Math for Deep Learning

URL: /blogs/topics/deep-learning/math-for-deep-learning/

Work through the linear algebra, calculus, probability, and optimization mathematics used in deep learning.

| ID      | Number | Concept                        | Level    | Status  | Group                    |
| ------- | ------ | ------------------------------ | -------- | ------- | ------------------------ |
| DL-0201 | 02.01  | Scalars                        | beginner | planned | Linear Algebra           |
| DL-0202 | 02.02  | Vectors                        | beginner | planned | Linear Algebra           |
| DL-0203 | 02.03  | Matrices                       | beginner | planned | Linear Algebra           |
| DL-0204 | 02.04  | Tensors                        | beginner | planned | Linear Algebra           |
| DL-0205 | 02.05  | Vector Operations              | beginner | planned | Linear Algebra           |
| DL-0206 | 02.06  | Matrix Multiplication          | beginner | planned | Linear Algebra           |
| DL-0207 | 02.07  | Dot Product                    | beginner | planned | Linear Algebra           |
| DL-0208 | 02.08  | Transpose                      | beginner | planned | Linear Algebra           |
| DL-0209 | 02.09  | Identity Matrix                | beginner | planned | Linear Algebra           |
| DL-0210 | 02.10  | Inverse Matrix                 | beginner | planned | Linear Algebra           |
| DL-0211 | 02.11  | Eigenvalues                    | beginner | planned | Linear Algebra           |
| DL-0212 | 02.12  | Eigenvectors                   | beginner | planned | Linear Algebra           |
| DL-0213 | 02.13  | Functions                      | beginner | planned | Calculus                 |
| DL-0214 | 02.14  | Derivatives                    | beginner | planned | Calculus                 |
| DL-0215 | 02.15  | Partial Derivatives            | beginner | planned | Calculus                 |
| DL-0216 | 02.16  | Gradients                      | beginner | planned | Calculus                 |
| DL-0217 | 02.17  | Chain Rule                     | beginner | planned | Calculus                 |
| DL-0218 | 02.18  | Jacobian                       | beginner | planned | Calculus                 |
| DL-0219 | 02.19  | Hessian                        | beginner | planned | Calculus                 |
| DL-0220 | 02.20  | Probability Fundamentals       | beginner | planned | Probability              |
| DL-0221 | 02.21  | Random Variables               | beginner | planned | Probability              |
| DL-0222 | 02.22  | Probability Distributions      | beginner | planned | Probability              |
| DL-0223 | 02.23  | Expectation                    | beginner | planned | Probability              |
| DL-0224 | 02.24  | Variance                       | beginner | planned | Probability              |
| DL-0225 | 02.25  | Conditional Probability        | beginner | planned | Probability              |
| DL-0226 | 02.26  | Bayes' Theorem                 | beginner | planned | Probability              |
| DL-0227 | 02.27  | Objective Functions            | beginner | planned | Optimization Mathematics |
| DL-0228 | 02.28  | Convex vs Non-Convex Functions | beginner | planned | Optimization Mathematics |
| DL-0229 | 02.29  | Local vs Global Minima         | beginner | planned | Optimization Mathematics |
| DL-0230 | 02.30  | Gradient-Based Optimization    | beginner | planned | Optimization Mathematics |

### 03 — Neural Network Fundamentals

URL: /blogs/topics/deep-learning/neural-network-fundamentals/

Explore neurons, weights, biases, activations, layers, and computational graphs.

Related reading: neural-networks-learn-representations.

| ID      | Number | Concept                           | Level    | Status  | Group |
| ------- | ------ | --------------------------------- | -------- | ------- | ----- |
| DL-0301 | 03.01  | Artificial Neuron                 | beginner | planned | —     |
| DL-0302 | 03.02  | Inputs                            | beginner | planned | —     |
| DL-0303 | 03.03  | Weights                           | beginner | planned | —     |
| DL-0304 | 03.04  | Bias                              | beginner | planned | —     |
| DL-0305 | 03.05  | Weighted Sum                      | beginner | planned | —     |
| DL-0306 | 03.06  | Activation Function               | beginner | planned | —     |
| DL-0307 | 03.07  | Layers                            | beginner | planned | —     |
| DL-0308 | 03.08  | Input Layer                       | beginner | planned | —     |
| DL-0309 | 03.09  | Hidden Layers                     | beginner | planned | —     |
| DL-0310 | 03.10  | Output Layer                      | beginner | planned | —     |
| DL-0311 | 03.11  | Dense / Fully Connected Layer     | beginner | planned | —     |
| DL-0312 | 03.12  | Network Depth                     | beginner | planned | —     |
| DL-0313 | 03.13  | Network Width                     | beginner | planned | —     |
| DL-0314 | 03.14  | Parameters                        | beginner | planned | —     |
| DL-0315 | 03.15  | Computational Graphs              | beginner | planned | —     |
| DL-0316 | 03.16  | Multi-Layer Perceptron            | beginner | planned | —     |
| DL-0317 | 03.17  | Universal Approximation Intuition | beginner | planned | —     |

### 04 — Forward Propagation

URL: /blogs/topics/deep-learning/forward-propagation/

Follow inputs through weighted transformations and activations to a network output.

Related reading: neural-networks-learn-representations.

| ID      | Number | Concept                               | Level    | Status  | Group |
| ------- | ------ | ------------------------------------- | -------- | ------- | ----- |
| DL-0401 | 04.01  | What is Forward Propagation?          | beginner | planned | —     |
| DL-0402 | 04.02  | Input Transformation                  | beginner | planned | —     |
| DL-0403 | 04.03  | Weighted Sum                          | beginner | planned | —     |
| DL-0404 | 04.04  | Activation                            | beginner | planned | —     |
| DL-0405 | 04.05  | Layer-to-Layer Flow                   | beginner | planned | —     |
| DL-0406 | 04.06  | Output Computation                    | beginner | planned | —     |
| DL-0407 | 04.07  | Batch Processing                      | beginner | planned | —     |
| DL-0408 | 04.08  | Tensor Shapes                         | beginner | planned | —     |
| DL-0409 | 04.09  | Forward Pass Example                  | beginner | planned | —     |
| DL-0410 | 04.10  | Computational Graph of a Forward Pass | beginner | planned | —     |

### 05 — Loss Functions

URL: /blogs/topics/deep-learning/loss-functions/

Compare loss functions for regression, classification, representation learning, and other objectives.

| ID      | Number | Concept                          | Level    | Status  | Group          |
| ------- | ------ | -------------------------------- | -------- | ------- | -------------- |
| DL-0501 | 05.01  | What is a Loss Function?         | beginner | planned | Fundamentals   |
| DL-0502 | 05.02  | Loss vs Metric                   | beginner | planned | Fundamentals   |
| DL-0503 | 05.03  | Objective Function               | beginner | planned | Fundamentals   |
| DL-0504 | 05.04  | Mean Squared Error               | beginner | planned | Regression     |
| DL-0505 | 05.05  | Mean Absolute Error              | beginner | planned | Regression     |
| DL-0506 | 05.06  | Huber Loss                       | beginner | planned | Regression     |
| DL-0507 | 05.07  | Binary Cross-Entropy             | beginner | planned | Classification |
| DL-0508 | 05.08  | Categorical Cross-Entropy        | beginner | planned | Classification |
| DL-0509 | 05.09  | Sparse Categorical Cross-Entropy | beginner | planned | Classification |
| DL-0510 | 05.10  | Negative Log-Likelihood          | beginner | planned | Classification |
| DL-0511 | 05.11  | Contrastive Loss                 | beginner | planned | Advanced       |
| DL-0512 | 05.12  | Triplet Loss                     | beginner | planned | Advanced       |
| DL-0513 | 05.13  | Hinge Loss                       | beginner | planned | Advanced       |
| DL-0514 | 05.14  | Focal Loss                       | beginner | planned | Advanced       |
| DL-0515 | 05.15  | KL Divergence                    | beginner | planned | Advanced       |
| DL-0516 | 05.16  | Perceptual Loss                  | beginner | planned | Advanced       |
| DL-0517 | 05.17  | Custom Loss Functions            | beginner | planned | Advanced       |

### 06 — Backpropagation

URL: /blogs/topics/deep-learning/backpropagation/

Trace loss gradients through a network and distinguish gradient computation from parameter updates.

Related reading: neural-networks-learn-representations.

| ID      | Number | Concept                        | Level    | Status  | Group |
| ------- | ------ | ------------------------------ | -------- | ------- | ----- |
| DL-0601 | 06.01  | What is Backpropagation?       | beginner | planned | —     |
| DL-0602 | 06.02  | Error Signal                   | beginner | planned | —     |
| DL-0603 | 06.03  | Chain Rule in Neural Networks  | beginner | planned | —     |
| DL-0604 | 06.04  | Local Gradients                | beginner | planned | —     |
| DL-0605 | 06.05  | Gradient Flow                  | beginner | planned | —     |
| DL-0606 | 06.06  | Weight Gradients               | beginner | planned | —     |
| DL-0607 | 06.07  | Bias Gradients                 | beginner | planned | —     |
| DL-0608 | 06.08  | Backpropagation Through Layers | beginner | planned | —     |
| DL-0609 | 06.09  | Parameter Updates              | beginner | planned | —     |
| DL-0610 | 06.10  | Backpropagation Example        | beginner | planned | —     |
| DL-0611 | 06.11  | Automatic Differentiation      | beginner | planned | —     |
| DL-0612 | 06.12  | Vanishing Gradients            | beginner | planned | —     |
| DL-0613 | 06.13  | Exploding Gradients            | beginner | planned | —     |
| DL-0614 | 06.14  | Gradient Checking              | beginner | planned | —     |

### 07 — Optimization

URL: /blogs/topics/deep-learning/optimization/

Explore gradient descent, adaptive optimizers, learning-rate schedules, and gradient clipping.

| ID      | Number | Concept                         | Level        | Status  | Group |
| ------- | ------ | ------------------------------- | ------------ | ------- | ----- |
| DL-0701 | 07.01  | Optimization in Neural Networks | intermediate | planned | —     |
| DL-0702 | 07.02  | Gradient Descent                | intermediate | planned | —     |
| DL-0703 | 07.03  | Batch Gradient Descent          | intermediate | planned | —     |
| DL-0704 | 07.04  | Stochastic Gradient Descent     | intermediate | planned | —     |
| DL-0705 | 07.05  | Mini-Batch Gradient Descent     | intermediate | planned | —     |
| DL-0706 | 07.06  | Momentum                        | intermediate | planned | —     |
| DL-0707 | 07.07  | Nesterov Momentum               | intermediate | planned | —     |
| DL-0708 | 07.08  | AdaGrad                         | intermediate | planned | —     |
| DL-0709 | 07.09  | RMSProp                         | intermediate | planned | —     |
| DL-0710 | 07.10  | Adam                            | intermediate | planned | —     |
| DL-0711 | 07.11  | AdamW                           | intermediate | planned | —     |
| DL-0712 | 07.12  | Learning Rate                   | intermediate | planned | —     |
| DL-0713 | 07.13  | Learning Rate Scheduling        | intermediate | planned | —     |
| DL-0714 | 07.14  | Warmup                          | intermediate | planned | —     |
| DL-0715 | 07.15  | Cosine Decay                    | intermediate | planned | —     |
| DL-0716 | 07.16  | Weight Decay                    | intermediate | planned | —     |
| DL-0717 | 07.17  | Gradient Clipping               | intermediate | planned | —     |
| DL-0718 | 07.18  | Optimizer Selection             | intermediate | planned | —     |

### 08 — Training Deep Networks

URL: /blogs/topics/deep-learning/training-deep-networks/

Plan training loops, validation, checkpointing, debugging, and reproducibility.

| ID      | Number | Concept                  | Level        | Status  | Group |
| ------- | ------ | ------------------------ | ------------ | ------- | ----- |
| DL-0801 | 08.01  | Training Loop            | intermediate | planned | —     |
| DL-0802 | 08.02  | Epoch                    | intermediate | planned | —     |
| DL-0803 | 08.03  | Batch                    | intermediate | planned | —     |
| DL-0804 | 08.04  | Iteration                | intermediate | planned | —     |
| DL-0805 | 08.05  | Batch Size               | intermediate | planned | —     |
| DL-0806 | 08.06  | Learning Rate            | intermediate | planned | —     |
| DL-0807 | 08.07  | Training Loss            | intermediate | planned | —     |
| DL-0808 | 08.08  | Validation Loss          | intermediate | planned | —     |
| DL-0809 | 08.09  | Training Curves          | intermediate | planned | —     |
| DL-0810 | 08.10  | Validation Curves        | intermediate | planned | —     |
| DL-0811 | 08.11  | Early Stopping           | intermediate | planned | —     |
| DL-0812 | 08.12  | Checkpointing            | intermediate | planned | —     |
| DL-0813 | 08.13  | Hyperparameter Selection | intermediate | planned | —     |
| DL-0814 | 08.14  | Debugging Training       | intermediate | planned | —     |
| DL-0815 | 08.15  | Reproducibility          | intermediate | planned | —     |
| DL-0816 | 08.16  | Random Seeds             | intermediate | planned | —     |
| DL-0817 | 08.17  | Deterministic Training   | intermediate | planned | —     |

### 09 — Regularization

URL: /blogs/topics/deep-learning/regularization/

Explore penalties, dropout, augmentation, and the tradeoffs in controlling model complexity.

| ID      | Number | Concept                  | Level        | Status  | Group |
| ------- | ------ | ------------------------ | ------------ | ------- | ----- |
| DL-0901 | 09.01  | Why Regularization?      | intermediate | planned | —     |
| DL-0902 | 09.02  | L1 Regularization        | intermediate | planned | —     |
| DL-0903 | 09.03  | L2 Regularization        | intermediate | planned | —     |
| DL-0904 | 09.04  | Weight Decay             | intermediate | planned | —     |
| DL-0905 | 09.05  | Dropout                  | intermediate | planned | —     |
| DL-0906 | 09.06  | DropConnect              | intermediate | planned | —     |
| DL-0907 | 09.07  | Early Stopping           | intermediate | planned | —     |
| DL-0908 | 09.08  | Data Augmentation        | intermediate | planned | —     |
| DL-0909 | 09.09  | Label Smoothing          | intermediate | planned | —     |
| DL-0910 | 09.10  | Noise Injection          | intermediate | planned | —     |
| DL-0911 | 09.11  | Stochastic Depth         | intermediate | planned | —     |
| DL-0912 | 09.12  | Regularization Tradeoffs | intermediate | planned | —     |

### 10 — Normalization

URL: /blogs/topics/deep-learning/normalization/

Compare normalization methods and their placement in neural network architectures.

| ID      | Number | Concept                       | Level        | Status  | Group |
| ------- | ------ | ----------------------------- | ------------ | ------- | ----- |
| DL-1001 | 10.01  | Why Normalize Activations?    | intermediate | planned | —     |
| DL-1002 | 10.02  | Batch Normalization           | intermediate | planned | —     |
| DL-1003 | 10.03  | Layer Normalization           | intermediate | planned | —     |
| DL-1004 | 10.04  | Instance Normalization        | intermediate | planned | —     |
| DL-1005 | 10.05  | Group Normalization           | intermediate | planned | —     |
| DL-1006 | 10.06  | RMS Normalization             | intermediate | planned | —     |
| DL-1007 | 10.07  | Pre-Norm vs Post-Norm         | intermediate | planned | —     |
| DL-1008 | 10.08  | Normalization in CNNs         | intermediate | planned | —     |
| DL-1009 | 10.09  | Normalization in Transformers | intermediate | planned | —     |

### 11 — Initialization

URL: /blogs/topics/deep-learning/initialization/

Study weight initialization choices, their relationship to activations, and common failure modes.

| ID      | Number | Concept                        | Level        | Status  | Group |
| ------- | ------ | ------------------------------ | ------------ | ------- | ----- |
| DL-1101 | 11.01  | Why Initialization Matters     | intermediate | planned | —     |
| DL-1102 | 11.02  | Zero Initialization            | intermediate | planned | —     |
| DL-1103 | 11.03  | Random Initialization          | intermediate | planned | —     |
| DL-1104 | 11.04  | Xavier / Glorot Initialization | intermediate | planned | —     |
| DL-1105 | 11.05  | He Initialization              | intermediate | planned | —     |
| DL-1106 | 11.06  | Orthogonal Initialization      | intermediate | planned | —     |
| DL-1107 | 11.07  | Initialization and Activations | intermediate | planned | —     |
| DL-1108 | 11.08  | Initialization Failure Modes   | intermediate | planned | —     |

### 12 — Convolutional Neural Networks

URL: /blogs/topics/deep-learning/convolutional-neural-networks/

Explore convolution, kernels, channels, receptive fields, and CNN architecture.

| ID      | Number | Concept               | Level        | Status  | Group |
| ------- | ------ | --------------------- | ------------ | ------- | ----- |
| DL-1201 | 12.01  | What is a CNN?        | intermediate | planned | —     |
| DL-1202 | 12.02  | Convolution           | intermediate | planned | —     |
| DL-1203 | 12.03  | Filters / Kernels     | intermediate | planned | —     |
| DL-1204 | 12.04  | Feature Maps          | intermediate | planned | —     |
| DL-1205 | 12.05  | Stride                | intermediate | planned | —     |
| DL-1206 | 12.06  | Padding               | intermediate | planned | —     |
| DL-1207 | 12.07  | Pooling               | intermediate | planned | —     |
| DL-1208 | 12.08  | Max Pooling           | intermediate | planned | —     |
| DL-1209 | 12.09  | Average Pooling       | intermediate | planned | —     |
| DL-1210 | 12.10  | Receptive Field       | intermediate | planned | —     |
| DL-1211 | 12.11  | Channels              | intermediate | planned | —     |
| DL-1212 | 12.12  | CNN Feature Hierarchy | intermediate | planned | —     |
| DL-1213 | 12.13  | CNN Architecture      | intermediate | planned | —     |
| DL-1214 | 12.14  | 1D Convolution        | intermediate | planned | —     |
| DL-1215 | 12.15  | 2D Convolution        | intermediate | planned | —     |
| DL-1216 | 12.16  | 3D Convolution        | intermediate | planned | —     |
| DL-1217 | 12.17  | Dilated Convolution   | intermediate | planned | —     |
| DL-1218 | 12.18  | Depthwise Convolution | intermediate | planned | —     |
| DL-1219 | 12.19  | Separable Convolution | intermediate | planned | —     |

### 13 — Computer Vision with Deep Learning

URL: /blogs/topics/deep-learning/computer-vision-with-deep-learning/

Connect deep learning to image classification, detection, segmentation, retrieval, and vision architectures.

| ID      | Number | Concept                      | Level        | Status  | Group |
| ------- | ------ | ---------------------------- | ------------ | ------- | ----- |
| DL-1301 | 13.01  | Image Classification         | intermediate | planned | —     |
| DL-1302 | 13.02  | Multi-Label Classification   | intermediate | planned | —     |
| DL-1303 | 13.03  | Object Detection             | intermediate | planned | —     |
| DL-1304 | 13.04  | Bounding Boxes               | intermediate | planned | —     |
| DL-1305 | 13.05  | Intersection over Union      | intermediate | planned | —     |
| DL-1306 | 13.06  | Non-Maximum Suppression      | intermediate | planned | —     |
| DL-1307 | 13.07  | Image Segmentation           | intermediate | planned | —     |
| DL-1308 | 13.08  | Semantic Segmentation        | intermediate | planned | —     |
| DL-1309 | 13.09  | Instance Segmentation        | intermediate | planned | —     |
| DL-1310 | 13.10  | Pose Estimation              | intermediate | planned | —     |
| DL-1311 | 13.11  | Face Recognition             | intermediate | planned | —     |
| DL-1312 | 13.12  | Image Retrieval              | intermediate | planned | —     |
| DL-1313 | 13.13  | Data Augmentation            | intermediate | planned | —     |
| DL-1314 | 13.14  | Transfer Learning for Vision | intermediate | planned | —     |
| DL-1315 | 13.15  | ResNet                       | intermediate | planned | —     |
| DL-1316 | 13.16  | Inception                    | intermediate | planned | —     |
| DL-1317 | 13.17  | EfficientNet                 | intermediate | planned | —     |
| DL-1318 | 13.18  | YOLO                         | intermediate | planned | —     |
| DL-1319 | 13.19  | U-Net                        | intermediate | planned | —     |

### 14 — Sequence Models

URL: /blogs/topics/deep-learning/sequence-models/

Frame sequence data, temporal dependencies, hidden state, and sequence-to-sequence tasks.

| ID      | Number | Concept                    | Level        | Status  | Group |
| ------- | ------ | -------------------------- | ------------ | ------- | ----- |
| DL-1401 | 14.01  | Sequence Data              | intermediate | planned | —     |
| DL-1402 | 14.02  | Variable-Length Inputs     | intermediate | planned | —     |
| DL-1403 | 14.03  | Sequence-to-One            | intermediate | planned | —     |
| DL-1404 | 14.04  | One-to-Sequence            | intermediate | planned | —     |
| DL-1405 | 14.05  | Sequence-to-Sequence       | intermediate | planned | —     |
| DL-1406 | 14.06  | Temporal Dependencies      | intermediate | planned | —     |
| DL-1407 | 14.07  | Hidden State               | intermediate | planned | —     |
| DL-1408 | 14.08  | Sequence Modeling Problems | intermediate | planned | —     |

### 15 — RNNs, LSTMs & GRUs

URL: /blogs/topics/deep-learning/rnns-lstms-grus/

Work through recurrent networks, backpropagation through time, LSTM gates, and GRUs.

| ID      | Number | Concept                      | Level        | Status  | Group    |
| ------- | ------ | ---------------------------- | ------------ | ------- | -------- |
| DL-1501 | 15.01  | Recurrent Neural Networks    | intermediate | planned | RNN      |
| DL-1502 | 15.02  | Hidden State                 | intermediate | planned | RNN      |
| DL-1503 | 15.03  | Recurrent Connections        | intermediate | planned | RNN      |
| DL-1504 | 15.04  | Backpropagation Through Time | intermediate | planned | RNN      |
| DL-1505 | 15.05  | Vanishing Gradients in RNNs  | intermediate | planned | RNN      |
| DL-1506 | 15.06  | Exploding Gradients in RNNs  | intermediate | planned | RNN      |
| DL-1507 | 15.07  | LSTM                         | intermediate | planned | LSTM     |
| DL-1508 | 15.08  | Cell State                   | intermediate | planned | LSTM     |
| DL-1509 | 15.09  | Forget Gate                  | intermediate | planned | LSTM     |
| DL-1510 | 15.10  | Input Gate                   | intermediate | planned | LSTM     |
| DL-1511 | 15.11  | Output Gate                  | intermediate | planned | LSTM     |
| DL-1512 | 15.12  | GRU                          | intermediate | planned | GRU      |
| DL-1513 | 15.13  | Update Gate                  | intermediate | planned | GRU      |
| DL-1514 | 15.14  | Reset Gate                   | intermediate | planned | GRU      |
| DL-1515 | 15.15  | LSTM vs GRU                  | intermediate | planned | GRU      |
| DL-1516 | 15.16  | Bidirectional RNN            | intermediate | planned | Advanced |
| DL-1517 | 15.17  | Stacked RNN                  | intermediate | planned | Advanced |
| DL-1518 | 15.18  | Encoder-Decoder RNN          | intermediate | planned | Advanced |

### 16 — Attention

URL: /blogs/topics/deep-learning/attention/

Explore queries, keys, values, attention scores, masks, and multi-head attention.

Related reading: attention-paper-to-product.

| ID      | Number | Concept                      | Level        | Status  | Group |
| ------- | ------ | ---------------------------- | ------------ | ------- | ----- |
| DL-1601 | 16.01  | Why Attention?               | intermediate | planned | —     |
| DL-1602 | 16.02  | Attention Intuition          | intermediate | planned | —     |
| DL-1603 | 16.03  | Query                        | intermediate | planned | —     |
| DL-1604 | 16.04  | Key                          | intermediate | planned | —     |
| DL-1605 | 16.05  | Value                        | intermediate | planned | —     |
| DL-1606 | 16.06  | Attention Scores             | intermediate | planned | —     |
| DL-1607 | 16.07  | Scaled Dot-Product Attention | intermediate | planned | —     |
| DL-1608 | 16.08  | Softmax in Attention         | intermediate | planned | —     |
| DL-1609 | 16.09  | Self-Attention               | intermediate | planned | —     |
| DL-1610 | 16.10  | Cross-Attention              | intermediate | planned | —     |
| DL-1611 | 16.11  | Causal Attention             | intermediate | planned | —     |
| DL-1612 | 16.12  | Attention Masks              | intermediate | planned | —     |
| DL-1613 | 16.13  | Multi-Head Attention         | intermediate | planned | —     |
| DL-1614 | 16.14  | Attention Matrix             | intermediate | planned | —     |
| DL-1615 | 16.15  | Computational Cost           | intermediate | planned | —     |
| DL-1616 | 16.16  | Attention Limitations        | intermediate | planned | —     |

### 17 — Transformers

URL: /blogs/topics/deep-learning/transformers/

Connect attention to Transformer blocks, embeddings, position, training, and inference.

Related reading: attention-paper-to-product.

| ID      | Number | Concept                     | Level        | Status  | Group |
| ------- | ------ | --------------------------- | ------------ | ------- | ----- |
| DL-1701 | 17.01  | Why Transformers?           | intermediate | planned | —     |
| DL-1702 | 17.02  | Transformer Architecture    | intermediate | planned | —     |
| DL-1703 | 17.03  | Token Embeddings            | intermediate | planned | —     |
| DL-1704 | 17.04  | Positional Information      | intermediate | planned | —     |
| DL-1705 | 17.05  | Positional Encoding         | intermediate | planned | —     |
| DL-1706 | 17.06  | Self-Attention Layer        | intermediate | planned | —     |
| DL-1707 | 17.07  | Feedforward Network         | intermediate | planned | —     |
| DL-1708 | 17.08  | Residual Connections        | intermediate | planned | —     |
| DL-1709 | 17.09  | Layer Normalization         | intermediate | planned | —     |
| DL-1710 | 17.10  | Encoder                     | intermediate | planned | —     |
| DL-1711 | 17.11  | Decoder                     | intermediate | planned | —     |
| DL-1712 | 17.12  | Encoder-Decoder Transformer | intermediate | planned | —     |
| DL-1713 | 17.13  | Decoder-Only Transformer    | intermediate | planned | —     |
| DL-1714 | 17.14  | Encoder-Only Transformer    | intermediate | planned | —     |
| DL-1715 | 17.15  | Causal Masking              | intermediate | planned | —     |
| DL-1716 | 17.16  | Multi-Head Attention        | intermediate | planned | —     |
| DL-1717 | 17.17  | Transformer Block           | intermediate | planned | —     |
| DL-1718 | 17.18  | Context Length              | intermediate | planned | —     |
| DL-1719 | 17.19  | KV Cache                    | intermediate | planned | —     |
| DL-1720 | 17.20  | Transformer Training        | intermediate | planned | —     |
| DL-1721 | 17.21  | Transformer Inference       | intermediate | planned | —     |

### 18 — Representation Learning

URL: /blogs/topics/deep-learning/representation-learning/

Study learned features, embeddings, latent spaces, similarity, and representation quality.

| ID      | Number | Concept                          | Level        | Status    | Group |
| ------- | ------ | -------------------------------- | ------------ | --------- | ----- |
| DL-1801 | 18.01  | What is Representation Learning? | intermediate | published | —     |
| DL-1802 | 18.02  | Learned Features                 | intermediate | planned   | —     |
| DL-1803 | 18.03  | Latent Representations           | intermediate | planned   | —     |
| DL-1804 | 18.04  | Embeddings                       | intermediate | planned   | —     |
| DL-1805 | 18.05  | Representation Space             | intermediate | planned   | —     |
| DL-1806 | 18.06  | Similarity                       | intermediate | planned   | —     |
| DL-1807 | 18.07  | Metric Learning                  | intermediate | planned   | —     |
| DL-1808 | 18.08  | Contrastive Learning             | intermediate | planned   | —     |
| DL-1809 | 18.09  | Triplet Learning                 | intermediate | planned   | —     |
| DL-1810 | 18.10  | Representation Quality           | intermediate | planned   | —     |
| DL-1811 | 18.11  | Visualization of Representations | intermediate | planned   | —     |

### 19 — Autoencoders & VAEs

URL: /blogs/topics/deep-learning/autoencoders-vaes/

Explore encoders, decoders, reconstruction, latent distributions, and variational autoencoders.

| ID      | Number | Concept                    | Level    | Status  | Group |
| ------- | ------ | -------------------------- | -------- | ------- | ----- |
| DL-1901 | 19.01  | Autoencoders               | advanced | planned | —     |
| DL-1902 | 19.02  | Encoder                    | advanced | planned | —     |
| DL-1903 | 19.03  | Latent Space               | advanced | planned | —     |
| DL-1904 | 19.04  | Decoder                    | advanced | planned | —     |
| DL-1905 | 19.05  | Reconstruction Loss        | advanced | planned | —     |
| DL-1906 | 19.06  | Undercomplete Autoencoders | advanced | planned | —     |
| DL-1907 | 19.07  | Sparse Autoencoders        | advanced | planned | —     |
| DL-1908 | 19.08  | Denoising Autoencoders     | advanced | planned | —     |
| DL-1909 | 19.09  | Variational Autoencoders   | advanced | planned | —     |
| DL-1910 | 19.10  | Latent Distributions       | advanced | planned | —     |
| DL-1911 | 19.11  | Reparameterization Trick   | advanced | planned | —     |
| DL-1912 | 19.12  | VAE Loss                   | advanced | planned | —     |
| DL-1913 | 19.13  | Autoencoder Applications   | advanced | planned | —     |

### 20 — Generative Adversarial Networks

URL: /blogs/topics/deep-learning/generative-adversarial-networks/

Study generators, discriminators, adversarial training, evaluation, and GAN failure modes.

| ID      | Number | Concept              | Level    | Status  | Group |
| ------- | ------ | -------------------- | -------- | ------- | ----- |
| DL-2001 | 20.01  | What is a GAN?       | advanced | planned | —     |
| DL-2002 | 20.02  | Generator            | advanced | planned | —     |
| DL-2003 | 20.03  | Discriminator        | advanced | planned | —     |
| DL-2004 | 20.04  | Adversarial Training | advanced | planned | —     |
| DL-2005 | 20.05  | GAN Loss             | advanced | planned | —     |
| DL-2006 | 20.06  | Training Instability | advanced | planned | —     |
| DL-2007 | 20.07  | Mode Collapse        | advanced | planned | —     |
| DL-2008 | 20.08  | DCGAN                | advanced | planned | —     |
| DL-2009 | 20.09  | Conditional GAN      | advanced | planned | —     |
| DL-2010 | 20.10  | StyleGAN             | advanced | planned | —     |
| DL-2011 | 20.11  | GAN Evaluation       | advanced | planned | —     |
| DL-2012 | 20.12  | GAN Limitations      | advanced | planned | —     |

### 21 — Diffusion Models

URL: /blogs/topics/deep-learning/diffusion-models/

Explore diffusion processes, denoising, conditioning, sampling, training, and limitations.

| ID      | Number | Concept                  | Level    | Status  | Group |
| ------- | ------ | ------------------------ | -------- | ------- | ----- |
| DL-2101 | 21.01  | What is Diffusion?       | advanced | planned | —     |
| DL-2102 | 21.02  | Forward Diffusion        | advanced | planned | —     |
| DL-2103 | 21.03  | Noise Schedule           | advanced | planned | —     |
| DL-2104 | 21.04  | Reverse Diffusion        | advanced | planned | —     |
| DL-2105 | 21.05  | Denoising                | advanced | planned | —     |
| DL-2106 | 21.06  | Score Matching           | advanced | planned | —     |
| DL-2107 | 21.07  | DDPM                     | advanced | planned | —     |
| DL-2108 | 21.08  | DDIM                     | advanced | planned | —     |
| DL-2109 | 21.09  | Latent Diffusion         | advanced | planned | —     |
| DL-2110 | 21.10  | Conditional Diffusion    | advanced | planned | —     |
| DL-2111 | 21.11  | Classifier-Free Guidance | advanced | planned | —     |
| DL-2112 | 21.12  | Diffusion Sampling       | advanced | planned | —     |
| DL-2113 | 21.13  | Diffusion Training       | advanced | planned | —     |
| DL-2114 | 21.14  | Diffusion Limitations    | advanced | planned | —     |

### 22 — Graph Neural Networks

URL: /blogs/topics/deep-learning/graph-neural-networks/

Follow graph data through message passing and aggregation into node, edge, and graph tasks.

| ID      | Number | Concept                      | Level    | Status  | Group |
| ------- | ------ | ---------------------------- | -------- | ------- | ----- |
| DL-2201 | 22.01  | Graph Data                   | advanced | planned | —     |
| DL-2202 | 22.02  | Nodes                        | advanced | planned | —     |
| DL-2203 | 22.03  | Edges                        | advanced | planned | —     |
| DL-2204 | 22.04  | Node Features                | advanced | planned | —     |
| DL-2205 | 22.05  | Message Passing              | advanced | planned | —     |
| DL-2206 | 22.06  | Neighborhood Aggregation     | advanced | planned | —     |
| DL-2207 | 22.07  | Graph Convolutional Networks | advanced | planned | —     |
| DL-2208 | 22.08  | Graph Attention Networks     | advanced | planned | —     |
| DL-2209 | 22.09  | GraphSAGE                    | advanced | planned | —     |
| DL-2210 | 22.10  | Node Classification          | advanced | planned | —     |
| DL-2211 | 22.11  | Link Prediction              | advanced | planned | —     |
| DL-2212 | 22.12  | Graph Classification         | advanced | planned | —     |
| DL-2213 | 22.13  | GNN Oversmoothing            | advanced | planned | —     |
| DL-2214 | 22.14  | GNN Applications             | advanced | planned | —     |

### 23 — Vision Transformers

URL: /blogs/topics/deep-learning/vision-transformers/

Explore image patches, embeddings, vision attention, and comparisons between CNNs and ViTs.

| ID      | Number | Concept                     | Level    | Status  | Group |
| ------- | ------ | --------------------------- | -------- | ------- | ----- |
| DL-2301 | 23.01  | Why Vision Transformers?    | advanced | planned | —     |
| DL-2302 | 23.02  | Image Patches               | advanced | planned | —     |
| DL-2303 | 23.03  | Patch Embeddings            | advanced | planned | —     |
| DL-2304 | 23.04  | Positional Embeddings       | advanced | planned | —     |
| DL-2305 | 23.05  | Vision Self-Attention       | advanced | planned | —     |
| DL-2306 | 23.06  | CLS Token                   | advanced | planned | —     |
| DL-2307 | 23.07  | ViT Architecture            | advanced | planned | —     |
| DL-2308 | 23.08  | CNN vs ViT                  | advanced | planned | —     |
| DL-2309 | 23.09  | Hybrid Vision Architectures | advanced | planned | —     |
| DL-2310 | 23.10  | Vision Transformer Scaling  | advanced | planned | —     |

### 24 — Multimodal Deep Learning

URL: /blogs/topics/deep-learning/multimodal-deep-learning/

Connect text, images, and audio through embeddings, fusion, cross-attention, and evaluation.

| ID      | Number | Concept                         | Level    | Status  | Group |
| ------- | ------ | ------------------------------- | -------- | ------- | ----- |
| DL-2401 | 24.01  | What is Multimodal Learning?    | advanced | planned | —     |
| DL-2402 | 24.02  | Text + Image                    | advanced | planned | —     |
| DL-2403 | 24.03  | Text + Audio                    | advanced | planned | —     |
| DL-2404 | 24.04  | Image + Audio                   | advanced | planned | —     |
| DL-2405 | 24.05  | Multimodal Embeddings           | advanced | planned | —     |
| DL-2406 | 24.06  | Contrastive Multimodal Learning | advanced | planned | —     |
| DL-2407 | 24.07  | CLIP                            | advanced | planned | —     |
| DL-2408 | 24.08  | Vision-Language Models          | advanced | planned | —     |
| DL-2409 | 24.09  | Multimodal Fusion               | advanced | planned | —     |
| DL-2410 | 24.10  | Cross-Attention                 | advanced | planned | —     |
| DL-2411 | 24.11  | Multimodal Generation           | advanced | planned | —     |
| DL-2412 | 24.12  | Multimodal Evaluation           | advanced | planned | —     |

### 25 — Transfer Learning

URL: /blogs/topics/deep-learning/transfer-learning/

Plan pretraining, feature extraction, fine-tuning, and adaptation to a new domain.

| ID      | Number | Concept                    | Level    | Status  | Group |
| ------- | ------ | -------------------------- | -------- | ------- | ----- |
| DL-2501 | 25.01  | What is Transfer Learning? | advanced | planned | —     |
| DL-2502 | 25.02  | Pretraining                | advanced | planned | —     |
| DL-2503 | 25.03  | Fine-Tuning                | advanced | planned | —     |
| DL-2504 | 25.04  | Feature Extraction         | advanced | planned | —     |
| DL-2505 | 25.05  | Frozen Layers              | advanced | planned | —     |
| DL-2506 | 25.06  | Partial Fine-Tuning        | advanced | planned | —     |
| DL-2507 | 25.07  | Full Fine-Tuning           | advanced | planned | —     |
| DL-2508 | 25.08  | Domain Adaptation          | advanced | planned | —     |
| DL-2509 | 25.09  | Catastrophic Forgetting    | advanced | planned | —     |
| DL-2510 | 25.10  | Transfer Learning Strategy | advanced | planned | —     |

### 26 — Self-Supervised Learning

URL: /blogs/topics/deep-learning/self-supervised-learning/

Explore learning tasks constructed from data, contrastive objectives, and masked prediction.

| ID      | Number | Concept                           | Level    | Status  | Group |
| ------- | ------ | --------------------------------- | -------- | ------- | ----- |
| DL-2601 | 26.01  | What is Self-Supervised Learning? | advanced | planned | —     |
| DL-2602 | 26.02  | Pretext Tasks                     | advanced | planned | —     |
| DL-2603 | 26.03  | Contrastive Learning              | advanced | planned | —     |
| DL-2604 | 26.04  | Positive and Negative Pairs       | advanced | planned | —     |
| DL-2605 | 26.05  | SimCLR                            | advanced | planned | —     |
| DL-2606 | 26.06  | MoCo                              | advanced | planned | —     |
| DL-2607 | 26.07  | Masked Prediction                 | advanced | planned | —     |
| DL-2608 | 26.08  | Masked Language Modeling          | advanced | planned | —     |
| DL-2609 | 26.09  | Masked Image Modeling             | advanced | planned | —     |
| DL-2610 | 26.10  | Self-Supervised Pretraining       | advanced | planned | —     |
| DL-2611 | 26.11  | Representation Transfer           | advanced | planned | —     |

### 27 — Model Evaluation

URL: /blogs/topics/deep-learning/model-evaluation/

Plan metrics, calibration, robustness checks, ablations, benchmarks, and human evaluation.

| ID      | Number | Concept                | Level    | Status  | Group |
| ------- | ------ | ---------------------- | -------- | ------- | ----- |
| DL-2701 | 27.01  | Training Metrics       | advanced | planned | —     |
| DL-2702 | 27.02  | Validation Metrics     | advanced | planned | —     |
| DL-2703 | 27.03  | Test Metrics           | advanced | planned | —     |
| DL-2704 | 27.04  | Classification Metrics | advanced | planned | —     |
| DL-2705 | 27.05  | Regression Metrics     | advanced | planned | —     |
| DL-2706 | 27.06  | Ranking Metrics        | advanced | planned | —     |
| DL-2707 | 27.07  | Generative Metrics     | advanced | planned | —     |
| DL-2708 | 27.08  | Calibration            | advanced | planned | —     |
| DL-2709 | 27.09  | Robustness Evaluation  | advanced | planned | —     |
| DL-2710 | 27.10  | Distribution Shift     | advanced | planned | —     |
| DL-2711 | 27.11  | Ablation Studies       | advanced | planned | —     |
| DL-2712 | 27.12  | Benchmarking           | advanced | planned | —     |
| DL-2713 | 27.13  | Human Evaluation       | advanced | planned | —     |

### 28 — Interpretability

URL: /blogs/topics/deep-learning/interpretability/

Explore neural-network visualizations, attributions, probing, and the limits of interpretation.

| ID      | Number | Concept                        | Level    | Status  | Group |
| ------- | ------ | ------------------------------ | -------- | ------- | ----- |
| DL-2801 | 28.01  | Why Interpret Neural Networks? | advanced | planned | —     |
| DL-2802 | 28.02  | Feature Visualization          | advanced | planned | —     |
| DL-2803 | 28.03  | Activation Visualization       | advanced | planned | —     |
| DL-2804 | 28.04  | Saliency Maps                  | advanced | planned | —     |
| DL-2805 | 28.05  | Grad-CAM                       | advanced | planned | —     |
| DL-2806 | 28.06  | Integrated Gradients           | advanced | planned | —     |
| DL-2807 | 28.07  | Attention Visualization        | advanced | planned | —     |
| DL-2808 | 28.08  | SHAP for Neural Networks       | advanced | planned | —     |
| DL-2809 | 28.09  | Representation Probing         | advanced | planned | —     |
| DL-2810 | 28.10  | Interpretability Limitations   | advanced | planned | —     |

### 29 — Efficient Deep Learning

URL: /blogs/topics/deep-learning/efficient-deep-learning/

Examine computation, memory, compression, precision, and distributed training choices.

| ID      | Number | Concept                 | Level    | Status  | Group |
| ------- | ------ | ----------------------- | -------- | ------- | ----- |
| DL-2901 | 29.01  | Why Efficiency Matters  | advanced | planned | —     |
| DL-2902 | 29.02  | Parameter Count         | advanced | planned | —     |
| DL-2903 | 29.03  | FLOPs                   | advanced | planned | —     |
| DL-2904 | 29.04  | Memory Usage            | advanced | planned | —     |
| DL-2905 | 29.05  | Quantization            | advanced | planned | —     |
| DL-2906 | 29.06  | Pruning                 | advanced | planned | —     |
| DL-2907 | 29.07  | Knowledge Distillation  | advanced | planned | —     |
| DL-2908 | 29.08  | Low-Rank Approximation  | advanced | planned | —     |
| DL-2909 | 29.09  | Mixed Precision         | advanced | planned | —     |
| DL-2910 | 29.10  | Gradient Accumulation   | advanced | planned | —     |
| DL-2911 | 29.11  | Model Compression       | advanced | planned | —     |
| DL-2912 | 29.12  | Efficient Architectures | advanced | planned | —     |
| DL-2913 | 29.13  | Sparse Models           | advanced | planned | —     |
| DL-2914 | 29.14  | Distributed Training    | advanced | planned | —     |

### 30 — Production Deep Learning

URL: /blogs/topics/deep-learning/production-deep-learning/

Follow models into serving, batching, deployment, monitoring, versioning, and rollback.

| ID      | Number | Concept                  | Level      | Status  | Group |
| ------- | ------ | ------------------------ | ---------- | ------- | ----- |
| DL-3001 | 30.01  | From Training to Serving | production | planned | —     |
| DL-3002 | 30.02  | Model Serialization      | production | planned | —     |
| DL-3003 | 30.03  | Model Serving            | production | planned | —     |
| DL-3004 | 30.04  | Batch Inference          | production | planned | —     |
| DL-3005 | 30.05  | Online Inference         | production | planned | —     |
| DL-3006 | 30.06  | GPU Inference            | production | planned | —     |
| DL-3007 | 30.07  | CPU Inference            | production | planned | —     |
| DL-3008 | 30.08  | Dynamic Batching         | production | planned | —     |
| DL-3009 | 30.09  | Inference Caching        | production | planned | —     |
| DL-3010 | 30.10  | Quantized Serving        | production | planned | —     |
| DL-3011 | 30.11  | Deployment               | production | planned | —     |
| DL-3012 | 30.12  | Containerization         | production | planned | —     |
| DL-3013 | 30.13  | Kubernetes               | production | planned | —     |
| DL-3014 | 30.14  | Autoscaling              | production | planned | —     |
| DL-3015 | 30.15  | Model Monitoring         | production | planned | —     |
| DL-3016 | 30.16  | Data Drift               | production | planned | —     |
| DL-3017 | 30.17  | Distribution Shift       | production | planned | —     |
| DL-3018 | 30.18  | Performance Monitoring   | production | planned | —     |
| DL-3019 | 30.19  | Latency Monitoring       | production | planned | —     |
| DL-3020 | 30.20  | GPU Utilization          | production | planned | —     |
| DL-3021 | 30.21  | Cost Monitoring          | production | planned | —     |
| DL-3022 | 30.22  | Model Versioning         | production | planned | —     |
| DL-3023 | 30.23  | Rollback                 | production | planned | —     |
| DL-3024 | 30.24  | Canary Deployment        | production | planned | —     |
| DL-3025 | 30.25  | Production Failure Modes | production | planned | —     |

### 31 — Advanced Architectures

URL: /blogs/topics/deep-learning/advanced-architectures/

Survey advanced network families and define the evidence needed to assess new architectural ideas.

Architectures in this chapter evolve quickly. Future articles should state their review date, identify the model or paper version, and distinguish reported evidence from interpretation.

| ID      | Number | Concept                            | Level    | Status  | Group |
| ------- | ------ | ---------------------------------- | -------- | ------- | ----- |
| DL-3101 | 31.01  | Residual Networks                  | advanced | planned | —     |
| DL-3102 | 31.02  | Dense Networks                     | advanced | planned | —     |
| DL-3103 | 31.03  | Mixture of Experts                 | advanced | planned | —     |
| DL-3104 | 31.04  | Sparse Neural Networks             | advanced | planned | —     |
| DL-3105 | 31.05  | Memory Networks                    | advanced | planned | —     |
| DL-3106 | 31.06  | Neural ODEs                        | advanced | planned | —     |
| DL-3107 | 31.07  | Capsule Networks                   | advanced | planned | —     |
| DL-3108 | 31.08  | State Space Models                 | advanced | planned | —     |
| DL-3109 | 31.09  | Mamba-Style Architectures          | advanced | planned | —     |
| DL-3110 | 31.10  | Retrieval-Augmented Neural Systems | advanced | planned | —     |
| DL-3111 | 31.11  | Modular Neural Networks            | advanced | planned | —     |
| DL-3112 | 31.12  | Neuro-Symbolic Systems             | advanced | planned | —     |
| DL-3113 | 31.13  | Foundation Models                  | advanced | planned | —     |
| DL-3114 | 31.14  | Scaling Laws                       | advanced | planned | —     |
| DL-3115 | 31.15  | Emerging Architectures             | advanced | planned | —     |

### 32 — Projects & Experiments

URL: /blogs/topics/deep-learning/projects-experiments/

Choose a proposed deep-learning project and plan its baseline, evaluation, and limitations.

| ID      | Number | Concept                             | Level        | Status  | Group        |
| ------- | ------ | ----------------------------------- | ------------ | ------- | ------------ |
| DL-3201 | 32.01  | Build a Neural Network from Scratch | beginner     | planned | Beginner     |
| DL-3202 | 32.02  | MNIST Digit Classifier              | beginner     | planned | Beginner     |
| DL-3203 | 32.03  | Image Classifier                    | beginner     | planned | Beginner     |
| DL-3204 | 32.04  | Simple Sentiment Classifier         | beginner     | planned | Beginner     |
| DL-3205 | 32.05  | Autoencoder                         | beginner     | planned | Beginner     |
| DL-3206 | 32.06  | CNN Image Classifier                | intermediate | planned | Intermediate |
| DL-3207 | 32.07  | LSTM Sequence Classifier            | intermediate | planned | Intermediate |
| DL-3208 | 32.08  | Attention Visualization             | intermediate | planned | Intermediate |
| DL-3209 | 32.09  | Transformer Text Classifier         | intermediate | planned | Intermediate |
| DL-3210 | 32.10  | Transfer Learning Project           | intermediate | planned | Intermediate |
| DL-3211 | 32.11  | Image Segmentation                  | intermediate | planned | Intermediate |
| DL-3212 | 32.12  | Build a Transformer                 | advanced     | planned | Advanced     |
| DL-3213 | 32.13  | Train a Small Language Model        | advanced     | planned | Advanced     |
| DL-3214 | 32.14  | Vision Transformer                  | advanced     | planned | Advanced     |
| DL-3215 | 32.15  | Multimodal Retrieval                | advanced     | planned | Advanced     |
| DL-3216 | 32.16  | Diffusion Model Experiment          | advanced     | planned | Advanced     |
| DL-3217 | 32.17  | Model Quantization Experiment       | advanced     | planned | Advanced     |
| DL-3218 | 32.18  | Distributed Training Experiment     | advanced     | planned | Advanced     |
| DL-3219 | 32.19  | Production Inference API            | advanced     | planned | Advanced     |
| DL-3220 | 32.20  | GPU Serving Pipeline                | advanced     | planned | Advanced     |
| DL-3221 | 32.21  | Deep Learning Monitoring System     | advanced     | planned | Advanced     |
