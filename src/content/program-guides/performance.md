A fictional document service receives four requests almost together. Its accelerator is powerful, but some users still wait. To understand why, separate arrival, queueing, scheduled execution and completion. Buying faster hardware does not tell you which part of that path is responsible.

## Define the measurement before comparing configurations

Latency is elapsed time for a particular request. Throughput is completed work per unit time over a stated interval. A production report should identify the workload, concurrency, input and output lengths, hardware, model, serving version and measurement method. Averages alone can hide slow requests; distributions help reveal that.

The request timeline above is explicitly a simulation. Four arrivals occur at 0, 1, 2 and 3 milliseconds. One worker incurs four milliseconds of setup per group and one millisecond per request. Individual requests complete at 5, 10, 15 and 20 milliseconds. Their latencies are 5, 9, 13 and 17 milliseconds, averaging 11.

Waiting until all four arrive allows one batch to start at 3 milliseconds and finish at 11. Its mean latency is 9.5 milliseconds, but the first user receives a response at 11 instead of 5. Throughput over the authored interval rises from 200 to about 363.64 requests per second. These values come from the model’s assumptions, not a GPU benchmark.

## Real language-model serving has more work to account for

A language-model request typically processes its input context during prefill and generates subsequent tokens during decode. Attention implementations can retain key and value information in a cache rather than recomputing everything for every generated token. Cache storage and management affect the available memory.

The [vLLM Paged Attention documentation](https://docs.vllm.ai/en/latest/design/paged_attention/) provides an implementation example of attention and cache organization. Our queue model omits token lengths, cache capacity, dynamic batching and overlapping operations. It teaches a scheduling tradeoff, not how vLLM will perform on a device.

## Exercise: hold the workload constant

Run the supplied CPU-only scheduling script. Confirm both completion sequences, per-request waits, mean latency and throughput. Then change only setup time from four to two milliseconds, keeping arrivals and per-request work fixed. Record whether batching still benefits this workload and whether the first request still waits longer.

Next design a real benchmark protocol without claiming a result. Specify a fixed prompt set, output-length constraints, concurrency levels, warm-up, repeated runs, failure handling and latency percentiles. Keep model and machine constant while comparing one serving configuration.

## Explain the constraint, not just the headline

Longer prompts, different output lengths and memory pressure can change the scheduling decision. A batch policy that suits one workload may violate another service’s response target. Report failed requests and measurement limits alongside successful completions.

The project example is a reproducible benchmark with a documented workload and tradeoffs. Read inference and profiling foundations before treating this simulated timeline as evidence for a deployment choice. Confirm the current program’s entry requirements with the team.
