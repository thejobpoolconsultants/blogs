"""CPU profiling exercise; observed timings are not GPU benchmarks."""
import json
import tempfile
from pathlib import Path
from time import perf_counter


def main():
    with tempfile.TemporaryDirectory() as folder:
        file = Path(folder) / "synthetic.json"
        file.write_text(json.dumps(list(range(100_000))), encoding="utf-8")
        start = perf_counter()
        raw = file.read_text(encoding="utf-8")
        loaded = perf_counter()
        values = json.loads(raw)
        parsed = perf_counter()
        result = sum(x * x for x in values)
        finished = perf_counter()
        assert result == 333328333350000
        print(json.dumps({
            "workload": "100000 synthetic integers; sum of squares",
            "load_seconds": loaded - start,
            "parse_seconds": parsed - loaded,
            "compute_seconds": finished - parsed,
            "result": result,
            "limits": "CPU Python; cached file reads; no GPU or cluster measurement"
        }, indent=2))


if __name__ == "__main__":
    main()
