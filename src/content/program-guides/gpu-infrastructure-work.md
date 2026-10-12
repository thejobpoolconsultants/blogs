---
title: 'GPU Infrastructure Begins with Understanding the Work.'
status: draft
---

A team wants to “run AI on GPUs.” Before choosing equipment, ask what work the system must do. The answer might be training a model, serving answers or processing a collection of images. Those workloads can place different demands on storage, communication, compute and memory.

## Describe one workload in ordinary terms

Our fictional example trains a small image classifier. Images arrive from storage, a loader reads and prepares them, computation processes the examples and the job saves checkpoints. If the work is distributed, participating machines also exchange information over a network.

A graphics processing unit, or GPU, can execute suitable parallel workloads. It does not remove the need for useful data, an appropriate software implementation or a way to measure progress. The [NVIDIA DGX SuperPOD reference architecture](https://docs.nvidia.com/dgx-superpod-reference-architecture-dgx-h100.pdf) is one concrete example of compute, networking, management and storage designed together. Our illustration is a generic teaching scene.

## Distinguish the model from the infrastructure

A model is a computational system with parameters and operations. A rack, switch, storage array and cooling loop provide physical resources for executing workloads. The rack is not the model’s architecture.

Follow the data path before guessing the constraint. Slow input loading can leave compute waiting. Communication can matter when work spans devices. Memory capacity can restrict placement. Power and heat removal are physical operating constraints rather than model-quality settings.

## Calculate one memory requirement carefully

For ideal weight storage, multiply parameter count by bits per parameter and divide by eight. Seven billion parameters at sixteen bits need fourteen billion bytes: 14 GB, or about 13.04 GiB.

That number excludes runtime allocations, activations, caches, training state and quantization metadata. It is not total GPU memory. Lower-precision representation also changes numerical behavior and may need particular software or hardware support; [Hugging Face’s quantization concepts](https://huggingface.co/docs/transformers/quantization/concept_guide) explain those tradeoffs.

## Exercise: make a workload sheet

In a text editor, record the input source and size, preparation steps, computation, outputs and dependencies. Mark which numbers you know and which you still need to measure. Do not fill missing fields with a benchmark from an unrelated machine.

Then run the CPU-only profiling exercise on the deeper infrastructure page. It measures reading, parsing and arithmetic separately. Repeat it on your own machine and report the observed timings with the workload description. A local CPU exercise teaches measurement structure; it does not predict GPU training speed.

## Choose a learning path from the unanswered questions

If you cannot yet explain file loading and memory, begin with computer-system foundations. If you understand those but need to distribute work, study networking and placement. If a service responds slowly, investigate serving performance rather than assuming a larger cluster is the answer.

Program 02 introduces the infrastructure field; Program 03 explores serving measurements. Ask the team for the current detailed curriculum and entry requirements when considering either guided pathway.
