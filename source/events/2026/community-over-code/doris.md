---
title: "Apache Doris — Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache Doris — Hackathon

Apache Doris is an open-source, real-time database for modern analytics
and AI. It answers sub-second queries under high concurrency at petabyte
scale; it treats structured, text and vector data as first-class citizens
in the same engine, so a single SQL statement can combine a filter, a
BM25 text match and a nearest-neighbour search over embeddings; it
queries Iceberg, Delta Lake and Hudi tables in place, with no copy, which
makes it an acceleration layer over an open lakehouse rather than yet
another silo; and increasingly it serves as the store agents run
on — columnar JSON for tool-call traces, BM25 retrieval for RAG and agent
memory, MCP for access.

That range is the reason Doris is an interesting codebase to spend an
afternoon in. Query execution, index structures, storage formats,
connectors and SQL semantics all live in one repository, so whichever of
those you find interesting, there is a task here that touches it.

**Session:** Tuesday 13 October, Early slot (11:20–15:00), Wee Dram Room

### Coordinator

* **Mingyu Chen** — morningman@apache.org

### What We're Working On

We'll bring tasks in five areas. A curated task list with specific issues
will be published on this page closer to the event; in the meantime, the
directions below should tell you whether there's something here for you.

* **Multi-modal lakehouse support** *(the deepest end — some C++ or Java
  expected)* — extending what Doris can read and push down across open
  table formats, and broadening the range of data types it handles
  natively. Good if you want to work on connectors, scan layers or type
  systems.
* **Documentation** *(no C++ or Java required)* — filling gaps, fixing
  examples that no longer match the current release, and making the
  getting-started path shorter. The most useful thing a newcomer can do,
  because you still remember which parts were confusing.
* **Visualization and tooling** *(front-end friendly)* — improving the
  web UI and the tooling people use to observe and operate a Doris
  cluster. A good fit if you'd rather write TypeScript than C++.
* **New SQL functions** *(the easiest first PR)* — implementing functions
  that other engines have and Doris doesn't. Each one is small,
  self-contained, and has a reference implementation elsewhere to compare
  against, which makes it a clean way to learn the build, the test
  harness and the review process in one sitting.
* **Something built on Doris** *(any language, no engine internals
  required)* — not a change to Doris itself, but an application that
  shows what it can do: a hybrid search demo combining BM25 text
  retrieval with vector similarity over the same table, an agent that
  uses Doris as its memory, a dashboard over a lakehouse table. Demos
  are how most people discover a feature exists, so a good one is worth
  as much to the project as a patch — and this is the option to pick if
  you'd rather build with Doris than in it.

### Resources

* [Join Doris Slack](https://doris.apache.org/slack)
* [Quick start](https://doris.apache.org/docs/gettingStarted/quick-start) — get a Doris running in minutes, no build needed
* [How to contribute](https://doris.apache.org/community/how-to-contribute/)
* [Building Doris with Docker](https://doris.apache.org/community/source-install/compilation-with-docker) — the fastest route to a working build
* [GitHub issues](https://github.com/apache/doris/issues)
* [Subscribe to the mailing lists](https://doris.apache.org/community/subscribe-mail-list)

### Getting Started Before the Event

What to prepare depends on which direction you pick:

1. **If you plan to change Doris** — get a build working ahead of time
   using the
   [official development Docker image](https://doris.apache.org/community/source-install/compilation-with-docker).
   Doris is a large C++ and Java codebase, a first full build takes a
   while, and building inside the image saves you from assembling the
   third-party dependencies by hand. Start this the day before at the
   latest, not on the morning of the hackathon.
2. **If you plan to build something on Doris** — you don't need to
   compile anything. Follow the
   [quick start](https://doris.apache.org/docs/gettingStarted/quick-start)
   to get a cluster running locally, and bring whatever language and
   client you're comfortable with.
3. **Decide roughly which direction interests you** from the five above,
   so we can point you at a matching task on the day.
4. **Say hello** on [Slack](https://doris.apache.org/slack) or the dev@
   list so we know to look out for you.

If none of that works out, come anyway — documentation needs nothing but
a text editor, and we can sort out builds and clusters in the room.

---

* Back to the [Hackathon overview](hackathon.html)
* Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
