"""Tiny fictional keyword prototype with executable acceptance checks."""
import unittest

DOCUMENTS = [
    {"id": "procedure-returns-1", "text": "Returns require an inspection.", "role": "employee"},
    {"id": "procedure-remote-1", "text": "Remote work requires manager review.", "role": "employee"},
    {"id": "procedure-payroll-1", "text": "Payroll records are restricted.", "role": "payroll"},
]


def find(question, role="employee"):
    words = set(question.lower().strip("?").split())
    for doc in DOCUMENTS:
        if doc["role"] == role and words.intersection(doc["text"].lower().strip(".").split()):
            return {"answer": doc["text"], "reference": doc["id"]}
    return {"answer": "No permitted supporting section found.", "reference": None}


class Acceptance(unittest.TestCase):
    def test_supported(self):
        self.assertEqual(find("returns?")["reference"], "procedure-returns-1")

    def test_missing(self):
        self.assertIsNone(find("overseas?")["reference"])

    def test_denied_document(self):
        self.assertIsNone(find("payroll?")["reference"])


if __name__ == "__main__":
    unittest.main()
