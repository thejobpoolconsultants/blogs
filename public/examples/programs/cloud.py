"""Application policy fixture. Rename to platform_service.py for Docker command."""
import json
import sys
import threading
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from http.server import BaseHTTPRequestHandler, HTTPServer


def authorize(token, method):
    if token not in ("Bearer demo-employee", "Bearer demo-publisher"):
        return 401
    return 200 if method == "GET" or token == "Bearer demo-publisher" else 403


class Handler(BaseHTTPRequestHandler):
    def respond(self, method):
        status = 404 if self.path != "/procedures" else authorize(
            self.headers.get("Authorization", ""), method)
        data = json.dumps({"status": status, "procedure": "Fictional policy: manager review required."
                           if status == 200 else None}).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        self.respond("GET")

    def do_POST(self):
        self.respond("POST")


if __name__ == "__main__":
    assert authorize("", "GET") == 401
    assert authorize("Bearer demo-employee", "GET") == 200
    assert authorize("Bearer demo-employee", "POST") == 403
    assert authorize("Bearer demo-publisher", "POST") == 200
    if "--self-test" in sys.argv:
        server = HTTPServer(("127.0.0.1", 0), Handler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            address = f"http://127.0.0.1:{server.server_port}/procedures"
            for token, method, expected in [
                ("", "GET", 401), ("Bearer demo-employee", "GET", 200),
                ("Bearer demo-employee", "POST", 403),
                ("Bearer demo-publisher", "POST", 200)
            ]:
                request = Request(address, headers={"Authorization": token}, method=method)
                try:
                    response = urlopen(request)
                except HTTPError as error:
                    response = error
                with response:
                    assert response.status == expected
                    payload = json.loads(response.read())
                    assert (payload["procedure"] is not None) == (expected == 200)
        finally:
            server.shutdown()
            server.server_close()
            thread.join()
        print("Actual HTTP checks passed: identity401, permitted200, denied403, publisher200.")
    else:
        print("Local exercise server on port8080; stop with Ctrl+C.", flush=True)
        HTTPServer(("0.0.0.0", 8080), Handler).serve_forever()
