---
title: "Apache Doris — Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache Doris — Hackathon

Apache Doris is a real-time analytical database built around an MPP query
engine and a columnar storage format. If you're curious about how a modern
OLAP engine executes a query — vectorized execution, cost-based
optimization, materialized views — the hackathon is a good way to get your
hands on the code with someone sitting next to you.

**Session:** Tuesday 13 October, Early slot (11:20–15:00), Wee Dram Room

### Coordinator

* **Mingyu Chen** — morningman@apache.org

### What We're Working On

Tasks are grouped by how much Doris background they need, so you can pick
one that matches where you are:

* **Implement a SQL function** *(easiest first PR — no prior Doris
  knowledge needed)* — we're working through the functions that MySQL,
  PostgreSQL, Trino, Hive and ClickHouse have and Doris doesn't. Each one
  is small, self-contained, and comes with a clear reference
  implementation to compare against. Pick an unchecked box from
  [issue #48203](https://github.com/apache/doris/issues/48203).
* **Documentation** *(no C++ or Java required)* — the
  [doris-website repository](https://github.com/apache/doris-website/issues)
  tracks documentation gaps, broken examples, and pages that need a
  rewrite. Good if you'd rather read and write than compile.
* **Good first issues** — [issues labeled "good first
  issue"](https://github.com/apache/doris/issues?q=is%3Aissue+state%3Aopen+label%3A%22good+first+issue%22)
  in the main repository.
* **Bug fixes with mentoring** *(some C++ or Java helps)* — we'll bring a
  curated set of open bugs that are approachable in an afternoon, and
  we'll walk you through the part of the codebase each one lives in.

### Resources

* [How to contribute](https://doris.apache.org/community/how-to-contribute/)
* [Building Doris with Docker](https://doris.apache.org/community/source-install/compilation-with-docker) — the fastest route to a working build
* [GitHub issues](https://github.com/apache/doris/issues)
* [Doris Slack](https://doris.apache.org/slack)
* [Subscribe to the mailing lists](https://doris.apache.org/community/subscribe-mail-list)

### Getting Started Before the Event

Doris is a large C++ and Java codebase and a first full build takes a
while, so please don't leave it until the morning of the hackathon:

1. **Get a build working ahead of time** using the
   [official development Docker image](https://doris.apache.org/community/source-install/compilation-with-docker).
   Building inside the image saves you from assembling the third-party
   dependencies by hand. Start this the day before at the latest.
2. **Pick a task** from the lists above and comment on the issue so nobody
   duplicates your work.
3. **Say hello** on [Slack](https://doris.apache.org/slack) or the dev@
   list so we know to look out for you.

If you can't get a build running, come anyway — documentation tasks need
nothing but a text editor, and we can pair on the build in the room.

---

* Back to the [Hackathon overview](hackathon.html)
* Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
