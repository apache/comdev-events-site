---
title: "Apache Mahout — Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache Mahout — Hackathon

### Coordinator

* **Krishna Dave** — krishnadave@apache.org
* **Andrew Musselman** — akm@apache.org

### What We're Working On

Apache Mahout is a quantum computing project focused on two major components:

* **Qumat** — QuMat is a high level Python library for interfacing with multiple quantum computing backends. It is designed to be easy to use and to abstract the particularities of each backend, so that you may write once, run anywhere.

## Installing Qumat and QDP

Install Qumat from PyPI:
```
pip install qumat
```
Install with QDP (Quantum Data Plane) support:
```
pip install qumat[qdp]
```


```python
from qumat import QuMat

qumat = QuMat({
    "backend_name": "qiskit",
    "backend_options": {"simulator_type": "aer_simulator"},
})
qumat.create_empty_circuit(num_qubits=2)
qumat.apply_hadamard_gate(0)
```

Change `backend_name` to `cirq` or `amazon_braket` and the same code runs
elsewhere. Pure Python — it needs no special hardware.
* **QDP (Quantum Data Plane)** — QDP (Quantum Data Plane) is a GPU-accelerated library for encoding classical data into quantum states. It ships as part of the Apache Mahout qumat package and exposes a single QdpEngine facade with explicit backend selection for NVIDIA CUDA and AMD ROCm.

QDP is where the systems programming lives: memory layout, kernel
performance, streaming pipelines, `unsafe` audits. It needs Linux and an
NVIDIA GPU to run.

**Useful background that can help:**

* [Quantum computing primer](https://mahout.apache.org/docs/learning/) — from scratch, no physics assumed
* [Basic gates](https://mahout.apache.org/docs/qumat/basic-gates/) — the gates Qumat supports
* [QDP concepts](https://mahout.apache.org/docs/qdp/concepts/)


## Pre-installs that can save time in the hackathon

**Read this before installing anything.**

QDP requires **Linux + an NVIDIA GPU + the CUDA toolkit**. We might not be able to run those tasks as many of us is going to be with a mac only. 
## Setup

Do this **before** you arrive if you can. Half an hour at home saves you an
hour in the room.

### Everyone: base setup

**Requirements:** Python **3.10, 3.11, or 3.12** (not 3.13 — see
`requires-python` in `pyproject.toml`), git, and
[`uv`](https://docs.astral.sh/uv/).

```bash
# 1. Install uv if you don't have it
pip install uv

# 2. Clone and install
git clone https://github.com/apache/mahout.git
cd mahout
uv sync --group dev

# 3. Install the pre-commit hooks (formatting and lint run automatically)
pre-commit install
```

**Verify it worked:**

```bash
make test_python
```


| Track | What | Hardware | Languages |
|---|---|---|---|
| **A** | Qumat — circuits and quantum ML | **Any laptop** | Python |
| **B** | Docs, examples, website | **Any laptop** | Markdown, JS |
| **C** | QDP internals — refactors and review | **Any laptop** (compiles, cannot run) | Rust |
| **D** | QDP GPU work | **Linux + NVIDIA GPU + CUDA** | Rust, CUDA, Python |

**If you have a Mac or Windows laptop:** Tracks A, B, and C. All three have
real, mergeable work in them.



During the hackathon we will focus on:

* Installing and building the project
* Learn about Qumat and QDP
* Choose an appropriate task
* Submit contributions and pull requests

### Hackathon Tracks

### Track A — Qumat · Python · any laptop

| | Task | Level |
|---|---|---|
| **A1** | **Backend parity sweep.** Pick a gate or feature and check it behaves identically on Qiskit, Cirq, and Braket. Fix or document what differs. Self-contained, and a genuinely good first PR. | **[new]** |
| **A2** | [#749](https://github.com/apache/mahout/issues/749) — Parameter optimization utilities for parameterized quantum circuits | **[some]** |
| **A3** | [#1409](https://github.com/apache/mahout/issues/1409) — Qumat `QMLTrainer`, a training loop for quantum ML models | **[some]** |
| **A4** | [#456](https://github.com/apache/mahout/issues/456) — Quantum kernel methods research spike, and [#458](https://github.com/apache/mahout/issues/458) on downstream kernel calculations. The mathematical end. | **[deep]** |

### Track B — Docs, examples, website · any laptop

| | Task | Level |
|---|---|---|
| **B1** | **Break our quickstart.** Follow [Getting Started](https://mahout.apache.org/docs/qumat/getting-started/) on your own machine and file an issue for every step that fails or confuses you. This sounds trivial; it is not. You can only see those problems once, and we cannot see them at all any more. No code required, and one of the most valuable things you can do. | **[new]** |
| **B2** | [#1432](https://github.com/apache/mahout/issues/1432) — Document `Preprocessor` in the `qumat_qdp` public API | **[new]** |
| **B3** | [#723](https://github.com/apache/mahout/issues/723) — NumPy input documentation and more tests | **[new]** |
| **B4** | **Add a worked example.** [`examples/`](https://github.com/apache/mahout/tree/main/examples) is thin. A clear, well-commented notebook is very welcome. | **[new]** |
| **B5** | [#1359](https://github.com/apache/mahout/issues/1359) — Document the API docs contributor workflow | **[some]** |
| **B6** | [#1308](https://github.com/apache/mahout/issues/1308) — Replace `website/scripts/sync-docs.js` with Docusaurus-native content loading. JavaScript; good for web developers. | **[some]** |

To preview the website locally: `cd website && npm run start`.

### Track C — QDP internals · Rust · any laptop

| | Task | Level |
|---|---|---|
| **C0** | **Verify the no-GPU build.** Run `cargo check -p qdp-core` on a machine with no CUDA toolkit, confirm whether the stub fallback works, and document the result in `qdp/DEVELOPMENT.md`. Small, and it unblocks every future contributor without a GPU. | **[new]** |
| **C1** | [#1331](https://github.com/apache/mahout/issues/1331) — Many QDP tests construct a `QdpEngine` or use `device="cuda"` with no GPU guard. **Our pick of the list:** not having a GPU is exactly what lets you verify the fix, and you make the project easier for the next person in your position. | **[new]** |
| **C2** | [#1436](https://github.com/apache/mahout/issues/1436) — `StreamingProducer`: use `VecDeque` for O(1) buffer advance | **[some]** |
| **C3** | [#1433](https://github.com/apache/mahout/issues/1433) — `KernelElem` trait to deduplicate the f32/f64 stubs | **[some]** |
| **C4** | [#1434](https://github.com/apache/mahout/issues/1434) — Unify `PipelineIterator` constructors with a `Source` enum · [#1435](https://github.com/apache/mahout/issues/1435) — Unify batch producers via `AdapterBackedProducer` | **[some]** |
| **C5** | [#787](https://github.com/apache/mahout/issues/787) — NumPy file size check to prevent OOM | **[some]** |
| **C6** | [#1009](https://github.com/apache/mahout/issues/1009) — Audit and reduce `unsafe` usage in QDP. Ongoing; reviewing it teaches you the codebase fast. | **[deep]** |

### Resources

* [Apache Mahout GitHub Repository](https://github.com/apache/mahout)
* [Apache Mahout Website](https://mahout.apache.org/)
* [Contributor Guide](https://github.com/apache/mahout/blob/main/CONTRIBUTING.md)
* [Apache Mahout Issues](https://github.com/apache/mahout/issues)
* [Apache Mahout dev@ Mailing List](mailto:dev@mahout.apache.org)
* [Quantum Computing Primer](https://mahout.apache.org/docs/learning/quantum-computing-primer/)
* [Qumat Documentation](https://mahout.apache.org/docs/qumat/)

### Who Should Join?

We welcome:

* Python developers
* Rust developers
* Documentation contributors
* Machine learning practitioners
* Quantum computing enthusiasts

Prior experience with quantum computing is **not required**. Most tasks involve standard Python, Rust, JavaScript, documentation, and software engineering skills.


* Review the issue tracker and identify an area of interest
* Join the dev@ mailing list and introduce yourself if you'd like to discuss ideas beforehand

## Submitting Your Pull Request

Full detail is in
[CONTRIBUTING.md](https://github.com/apache/mahout/blob/main/CONTRIBUTING.md)
and the [PR policy](pr-policy-and-review-guidelines.md). The short version:

```bash
git checkout -b your-feature-name
# ... make your changes ...
git add .
git commit -m "Description of your changes"   # pre-commit hooks run here
git push origin your-feature-name
```

Then open the PR against `apache/mahout` and fill in the
[template](https://github.com/apache/mahout/blob/main/.github/PULL_REQUEST_TEMPLATE).

**What reviewers will look for:**

* **Link the issue** you were working on.
* **One concern per PR.** A focused refactor beats a PR that also fixes a
  typo and bumps a dependency.
* **Explain why and how** in the description, not just what.
* **Tests for behaviour changes**, docs for user-visible ones.
* **Green CI.** Run `make pre-commit` before pushing to catch formatting.

Tests live in `testing/qumat/`, `testing/qdp/`, and `testing/utils/`.


**Your PR does not have to be finished by 18:40.** Nobody expects a
completed feature in one afternoon. An open draft PR with a clear
description, or even a well-written issue documenting what you found, is a
real contribution. Plenty of people carry on after the conference.

## Getting Help
* **On the Day:** We would be there to help
* **Before or after:** [dev@mahout.apache.org](mailto:dev@mahout.apache.org)
  (subscribe by emailing `dev-subscribe@mahout.apache.org`)
* **Event chat:** `#hackathon` on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
* **Hackathon overview:** [all participating projects](https://events.apache.org/events/2026/community-over-code/hackathon.html)

*Turning up with a laptop and some curiosity is enough. See you in Glasgow.*