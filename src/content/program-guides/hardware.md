---
title: 'What Happens Inside an AI Accelerator.'
status: draft
---

A matrix operation describes a result, but hardware must arrange computation and move the operands needed to produce it. Studying an accelerator means following both paths. A fast compute array can still wait for data.

## Follow one operation from software to hardware

Consider multiplying two small matrices. Software represents the operation, a compiler or runtime organizes work, memory supplies operands, compute units execute arithmetic and the result is stored. The particular mapping depends on the implementation and device.

The illustration is an exploded conceptual assembly: compute array, memory hierarchy, interconnect and host interface. Its layout is not the floorplan of a commercial chip. Semiconductor engineering involves deeper device, fabrication and physical-design constraints that this teaching cutaway does not reproduce.

The editable mechanism below multiplies a two-by-two matrix by an identity matrix. An identity multiplication returns the original matrix; it is a transparent example for tracing operands, not evidence of accelerator performance.

## The data source determines the intensity

Operational intensity counts floating-point operations per byte transferred from a specified memory level. Reusing an operand before fetching it again can change that count. You must state which transfers you count; “memory bandwidth” without a boundary is ambiguous.

The [Roofline model](https://amcr.lbl.gov/departments/computer-science-department/ppan/roofline-performance-model/) relates intensity to compute and bandwidth ceilings. Our calculated graph assumes a hypothetical 100 GFLOP/s peak and 10 GB/s external-memory bandwidth. The ceiling is the smaller of 100 and ten times intensity.

At four FLOP per byte, the bandwidth ceiling is forty GFLOP/s. At ten, the two ceilings meet. Above that point the compute ceiling is lower. These are bounds under authored assumptions, not achieved measurements or specifications of a real device. Actual execution can be lower because of access patterns, synchronization and other effects.

## Exercise: calculate before benchmarking

Run the supplied CPU-only architecture script. It performs a small matrix multiplication and calculates the same hypothetical ceilings. Change the matrices, hand-check one output cell and confirm the script’s result. It requires Python 3.10 or later and no external package.

Then compare two hypothetical data-movement counts for the same operation count. Label the counted memory boundary and calculate intensity as operations divided by bytes. Explain how reuse changes the bound without claiming that your Python loop reaches it.

For a fuller project, document a software operation, a proposed work mapping, memory transfers and the assumptions that could invalidate the analysis. Separate a compiler’s organization of work from a device’s physical structure; the [MLIR project](https://mlir.llvm.org/) provides an example of compiler infrastructure for representing and transforming operations.

## Choose the next level of study deliberately

Computer architecture foundations help connect instruction execution, memory and parallel work. Device physics and fabrication require their own study. The course title spans those areas, but no detailed current curriculum or admission requirement is published in the verified source; request it from the team.
