---
title: "Apache Gluten - Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) - Glasgow, UK, October 11-14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache Gluten - Hackathon

This page is focused on **Velox backend** and **common runtime/config** tasks.
ClickHouse-specific tasks are intentionally excluded.

### Coordinator

* **Yuan Zhou** — yuan.zhou@ibm.com

### What We're Working On

We're focusing on:

* **Good first issues** that can be completed during the hackathon
* **Docs and test alignment** where support tables lag behind real code/test coverage
* **Small Velox/Common code improvements** with clear scope and acceptance criteria

### Curated Task List for Hackathon

The items below are curated examples. Participants are also welcome to pick other suitable tasks from the [Gluten good first issues](https://github.com/apache/gluten/issues?q=is%3Aissue+state%3Aopen+label%3A%22good+first+issue%22).

#### 1) Docs and support-table cleanup (easy)

* Issue: [#10275 - document unsupported cases for complicated functions](https://github.com/apache/gluten/issues/10275)
* Focus: add clear SQL examples for JSON/regex/base64 limitations, and align the support matrix with current Velox test behavior (for example: `sequence`, `map_from_arrays`, `to_date`, `to_timestamp`, `ln`, `radians`, `sin`, `try_divide`).
* Output: one concise docs PR (optional: add minimal validation tests).

#### 2) Object storage integration tests (medium)

* Issue: [#9184 - integration tests for S3/HDFS/GCS/ABFS](https://github.com/apache/gluten/issues/9184)
* Focus: implement one backend-focused test improvement, with a practical split such as [#9619 - HDFS](https://github.com/apache/gluten/issues/9619) or [#9620 - ABFS](https://github.com/apache/gluten/issues/9620).
* Output: one backend-focused test improvement, or an ABFS feasibility note with reproducible findings.

#### 3) ANSI mode sub-tasks (medium)

* Issue: [#10134 - ANSI mode support tracker](https://github.com/apache/gluten/issues/10134)
* Focus: pick one small sub-area (cast, arithmetic, datetime, or validation tests).
* Output: one focused Velox PR and one focused Gluten PR for the selected ANSI sub-area, with test coverage.

#### 4) TIMESTAMP_NTZ sub-tasks (medium)

* Issue: [#11622 - [VL] Support TIMESTAMP_NTZ Type](https://github.com/apache/gluten/issues/11622)
* Focus: pick one small sub-area (cast behavior, function validation, or fallback/compatibility tests).
* Output: one focused Velox PR and one focused Gluten PR that improve TIMESTAMP_NTZ support coverage.

#### 5) Timestamp cast corner-case fixes (medium)

* Issue: [#8984 - fix corner cases for casting varchar to timestamp](https://github.com/apache/gluten/issues/8984)
* Focus: align `CAST(varchar AS timestamp)` corner-case behavior with Spark and add regression coverage.
* Output: one focused Velox PR and one focused Gluten PR with validation tests.

### Resources

* [Gluten contribution guide](https://github.com/apache/gluten/blob/main/CONTRIBUTING.md)
* [Velox backend limitations](https://github.com/apache/gluten/blob/main/docs/velox-backend-limitations.md)
* [Velox scalar function support matrix](https://github.com/apache/gluten/blob/main/docs/velox-backend-scalar-function-support.md)

### Getting Started Before the Event

To make the most of hackathon time, we recommend:

1. Clone the repo and get the build working: [Velox getting started](https://github.com/apache/gluten/blob/main/docs/get-started/Velox.md), [Build guide](https://github.com/apache/gluten/blob/main/docs/get-started/build-guide.md)
2. Browse the issue list and pick one that interests you: [Gluten issues](https://github.com/apache/gluten/issues)
3. Introduce yourself on the dev@ list

---

* Back to the [Hackathon overview](hackathon.html)
* Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
