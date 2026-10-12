"""Exact matrix result and hypothetical Roofline ceilings; no benchmark."""
import json

A = [[1, 2], [3, 4]]
B = [[1, 0], [0, 1]]
result = [[sum(A[i][k] * B[k][j] for k in range(2))
           for j in range(2)] for i in range(2)]
assert result == A
intensities = [1, 4, 8, 10, 16, 32]
print(json.dumps({"matrix_result": result,
                  "assumptions": "hypothetical peak100GFLOP/s; bandwidth10GB/s",
                  "ceilings": [{"intensity_FLOP_per_byte": i,
                                "ceiling_GFLOP_per_second": min(100, 10*i)}
                               for i in intensities]}, indent=2))
