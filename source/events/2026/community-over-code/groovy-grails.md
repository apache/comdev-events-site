---
title: "Apache Groovy & Apache Grails — Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache Groovy & Apache Grails — Hackathon

Groovy and Grails are running a **joint hackathon session**. The two
communities overlap heavily, and quite a few of the interesting topics
(application generation, CLI ergonomics, compiler and AST behaviour,
documentation) sit right on the boundary between the projects — so we're
sharing a table and encouraging cross-pollination rather than splitting
into two rooms. Come along if you're interested in either project; you
don't need to have contributed before.

### Coordinators

* **Groovy** — See attendees below
* **Grails** — See attendees below

### What We're Working On

#### Grails — one application generator, one CLI

Our main goal is the **Grails Forge / Grails Profiles intersection**:
combining them, deprecating one in favour of the other, or some mix of
the two. Specifically, we'd like to come away with a plan (and as much
code as we can manage) for a *single* Grails application generator
instead of two, plus an agreed CLI command structure going forward.

Existing issues that cover part of this — the list isn't exhaustive, and
we expect to write more during the event:

* [grails-core#15301](https://github.com/apache/grails-core/issues/15301) — Unify and simplify CLI command architecture
* [grails-core#14081](https://github.com/apache/grails-core/issues/14081) — Make profiles optional for the Grails-Shell CLI
* [grails-core#14944](https://github.com/apache/grails-core/issues/14944) — Forge vs profile dependencies for `plugin` and `web-plugin`

Alongside that, there's plenty of smaller, well-scoped work for anyone
who'd rather start with something self-contained:

* [Issues labelled "info: good first issue"](https://github.com/apache/grails-core/issues?q=is%3Aissue+state%3Aopen+label%3A%22info%3A+good+first+issue%22)
* [Issues labelled "relates-to: grails-forge"](https://github.com/apache/grails-core/issues?q=is%3Aissue+state%3Aopen+label%3A%22relates-to%3A+grails-forge%22)
* Documentation and guide updates for the Apache-era Grails releases

#### Groovy

We'll be running a HackerGarten-style session in the spirit of the ones
GR8Conf used to host, where the aim is to get people to their *first*
merged contribution as much as it is to move big-ticket items along.
Indicative areas:

* **Good first issues** — small, self-contained JIRA tickets with a
  committer on hand to mentor:
  [GROOVY issues labelled "contrib"](https://issues.apache.org/jira/issues/?jql=project%20%3D%20GROOVY%20AND%20resolution%20%3D%20Unresolved%20AND%20labels%20%3D%20contrib)
* **Documentation and examples** — the Groovy docs are a large surface
  area and improvements here are always welcome and easy to review
* **Static type checking and compiler edge cases** — bring a
  reproducer, leave with a test case (and hopefully a fix)
* **Bring your own bug** — if you have a Groovy issue that's been
  bugging you, this is the ideal time to sit down with a committer and
  work through it
* Ask about anything from DSLs, extension methods, type-checking extensions to theorem provers!

### Where the topic lists live

Rather than maintaining topic lists on this page, we're keeping them in
the projects' own issue trackers so they stay current:

* **Groovy** — [Apache JIRA, GROOVY project](https://issues.apache.org/jira/browse/GROOVY)
* **Grails** — [GitHub issues on apache/grails-core](https://github.com/apache/grails-core/issues)

Suggestions for topics are very welcome on either dev@ list before the
event — see below.

### Resources

**Groovy**

* [Groovy project home](https://groovy.apache.org/)
* [Contribution guide](https://github.com/apache/groovy/blob/master/CONTRIBUTING.md)
* [Building from source](https://github.com/apache/groovy/blob/master/README.adoc#building-from-source)
* [Mailing lists](https://groovy-lang.org/mailing-lists.html)
* [Groovy community Slack](http://groovycommunity.com/)
* [Dev mailing list thread about the hackathon](https://lists.apache.org/thread/tccmxmq6tkmrct1g2cltr58td7m3sq8j)

**Grails**

* [Grails project home](https://grails.apache.org/)
* [Contribution guide](https://github.com/apache/grails-core/blob/7.0.x/CONTRIBUTING.md)
* [Documentation](https://grails.apache.org/documentation.html)
* [Community, mailing lists and Slack](https://grails.apache.org/community.html)
* [Grails Forge](https://github.com/apache/grails-forge) and
  [Grails Profiles](https://github.com/apache/grails-profiles) repositories
* [Dev mailing list thread about the hackathon](https://lists.apache.org/thread/bg3kl3bz7fg083tj4h316t7x695jcg3d)

### Who's Planning to Attend

<!-- Confirm this list before the event; add anyone else who's coming. -->

* Paul King (Groovy PMC)
* Søren Berg Glasius (Groovy PMC)
* James Fredley (Grails PMC)
* James Daugherty (Grails PMC)
* Additional committers from both projects TBC

### Getting Started Before the Event

To make the most of the hackathon time, we recommend arriving with a
working build — downloading dependencies over conference wifi is not the
best use of the session:

1. Clone and build whichever project interests you:
   * Groovy — `git clone https://github.com/apache/groovy.git` then
     `./gradlew clean dist` ([details](https://github.com/apache/groovy/blob/master/README.adoc#building-from-source))
   * Grails — `git clone https://github.com/apache/grails-core.git`
     ([contributing guide](https://github.com/apache/grails-core/blob/7.0.x/CONTRIBUTING.md));
     for the generator work, also grab
     [grails-forge](https://github.com/apache/grails-forge) and
     [grails-profiles](https://github.com/apache/grails-profiles)
2. Browse the issue links above and pick something that interests you —
   or come with a problem of your own
3. Introduce yourself on the relevant dev@ list or chat channel so we
   know what to expect

---

* Back to the [Hackathon overview](hackathon.html)
* Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
