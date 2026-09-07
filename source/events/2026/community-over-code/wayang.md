| title | Apache Wayang — Hackathon at Community over Code Glasgow 2026 |
| ----- | ------------------------------------------------------------------ |

[![Apache](https://github.com/apache/comdev-events-site/raw/main/images/apache-oak-leaf.svg)](/apache/comdev-events-site/blob/main/images/apache-oak-leaf.svg) **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](https://github.com/apache/comdev-events-site/blob/main/source/events/2026/community-over-code/hackathon.html)

## Apache Wayang — Hackathon

### Coordinator

- **Zoi Kaoudi** (PMC, Apache Wayang) — <zkaoudi@apache.org>

### What We Are Working On

Apache Wayang is a cross-platform data processing framework that recently graduated to ASF Top-Level Project status. At the hackathon we will be mainly focusing on small extensions on the operators Wayang provides. Specifically:

- **Join Operators** — implement additional join algorithms (starting with merge join) for the Java-platform join operator (Java execution operator). Good for someone comfortable with Java and core algorithms.
- **Limit Operator** — create a new `LimitOperator` that returns the first N elements of a dataset. A great entry point for newcomers: conceptually simple, and a good way to learn Wayang's operator structure end-to-end. This requires adding a new Wayang operator and at least one execution operator on a platform the participant is more confident with.
- **Data Lake Pipeline** — build a pipeline that computes total revenue per nation, joining data across two storage layers: `lineitem` and `orders` read as Parquet files (via Wayang's `readParquet` API), joined with `customer` and `nation` read as Postgres tables, then aggregated (filter by date, join across all four, compute revenue, group by nation, sort, limit to top N). Register at least two platforms (e.g. Java/Spark + Postgres) so the optimizer has a real choice — see `Query3Hybrid.scala` in `wayang-benchmark` as a starting template. Good for someone who wants to play with Wayang's API and build a concrete, TPC-H-adjacent task showing cross-source, cross-platform execution.
- **Documentation improvements** — walk through the getting-started guide as a newcomer and fix the points where you get stuck.

### Resources

- [Getting started](https://wayang.apache.org/docs/guide/getting-started)
- [Adding operators in Wayang](https://wayang.apache.org/docs/guide/adding-operators)
- [Developing in Wayang](https://wayang.apache.org/docs/guide/developing-in-wayang)
- [Wayang Javadocs](https://wayang.apache.org/docs/api/javadocs/1.1.1/)
- [Contribution guide](https://wayang.apache.org/docs/community/contribute)
- [GitHub issues](https://github.com/apache/wayang/issues)
- [Slack channel](https://the-asf.slack.com/archives/C01H1CPE8KU)
- Dev environment setup with docker: Coming up!

### Who's Planning to Attend

- Zoi Kaoudi (PMC, Apache Wayang)

### Getting Started Before the Event

To make the most of hackathon time, we recommend:

1. Clone the repo, get the build working, and run the WordCount. 
2. Browse the issue list and pick a task — Hackathon tasks listed above will be pre-tagged for the event
3. Introduce yourself on the dev@wayang list or Slack channel before the event

---

- Back to the [Hackathon overview](https://github.com/apache/comdev-events-site/blob/main/source/events/2026/community-over-code/hackathon.html)
- Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
