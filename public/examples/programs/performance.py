"""Finite scheduling simulation, not a hardware measurement."""
import json


def simulate(batch=False, setup=4, work=1):
    arrivals = [0, 1, 2, 3]
    clock = 0
    rows = []
    for arrival in arrivals:
        start = max(arrivals) if batch else max(arrival, clock)
        finish = start + setup + (len(arrivals) if batch else 1) * work
        clock = finish
        rows.append(dict(arrival_ms=arrival, start_ms=start,
                         finish_ms=finish, wait_ms=start-arrival,
                         latency_ms=finish-arrival))
    return dict(requests=rows,
                mean_latency_ms=sum(r["latency_ms"] for r in rows)/4,
                throughput_requests_per_second=4/max(r["finish_ms"] for r in rows)*1000)


if __name__ == "__main__":
    individual, batch = simulate(), simulate(True)
    assert [r["finish_ms"] for r in individual["requests"]] == [5, 10, 15, 20]
    assert batch["mean_latency_ms"] == 9.5
    print(json.dumps({"assumptions": "one worker; setup4ms/group; work1ms/request",
                      "individual": individual, "batch": batch}, indent=2))
