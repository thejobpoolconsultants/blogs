---
title: 'How to Build and Protect a Platform for AI Applications.'
status: draft
---

A fictional procedure assistant has three jobs: receive a user request, read approved information and return an answer. Operating it means deciding who may call it, which operation they may perform, how services communicate and what happens when a dependency fails.

## Start with a request and its boundaries

The example gateway validates the caller’s identity. An authorization middleware then checks the operation against an application policy: employees may read procedures, while only publishers may update them. A permitted read reaches the procedure service and model-facing application. Logs record the access decision and service outcome.

Authentication establishes an identity; authorization decides whether that identity may perform a particular operation. A caller can pass the first check and fail the second. The [Kubernetes authorization documentation](https://kubernetes.io/docs/reference/access-authn-authz/authorization/) describes authorization for its application programming interface (API). That is a different enforcement surface from our application's procedure policy.

## Containers and orchestration do not remove application responsibilities

A container packages a process and its dependencies. Kubernetes manages workloads and related resources, but application behavior, permissions and data quality remain engineering decisions. The [Kubernetes basics tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/) introduces deployment, service exposure, scaling and updating.

Infrastructure as code records intended infrastructure in versioned definitions. Observability supplies evidence about actual behavior through appropriate logs, metrics and traces. Define the service owner, sensitive-data handling and recovery action before relying on a diagram of connected boxes.

Our artwork emphasizes separate workloads, a gateway and an access boundary. A visible lock is a metaphor, not proof of security. The dependency map shows the example’s relationships; it does not imply production compliance.

## Exercise: run a scoped local service in a container

You need Docker with its daemon running, permission to run local containers and an available port 8080. Download the supplied standard-library Python example as platform_service.py. From its directory, in PowerShell run:

```powershell
docker run --rm -p 127.0.0.1:8080:8080 --mount "type=bind,source=$($PWD.Path),target=/work,readonly" -w /work python:3.12-slim python platform_service.py
```

The image download needs network access. First run `python platform_service.py --self-test` to check policy without Docker. With the container running, use these commands in a second terminal:

```powershell
curl.exe -i http://127.0.0.1:8080/procedures
curl.exe -i -H "Authorization: Bearer demo-employee" http://127.0.0.1:8080/procedures
curl.exe -i -X POST -H "Authorization: Bearer demo-employee" http://127.0.0.1:8080/procedures
```

Expect 401, 200 and 403 respectively. Rename the downloaded cloud.py file to platform_service.py before following these commands. [Docker's port-publishing documentation](https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/) explains the host-loopback binding used here.

The fixed token is an exercise fixture, not production identity. The service returns a deterministic sample procedure rather than running an AI model. An extension can call a model after the same checks, but it must preserve the boundaries.

## Keep the operating plan reviewable

Record container version, entry point, service route, application policy, logs, recovery procedure and cleanup. Stop the foreground container with Ctrl+C; the --rm option removes that exercise container.

A program project can extend this into an AI service with infrastructure automation and recovery evidence. Confirm current course requirements before treating the example as its official curriculum.
