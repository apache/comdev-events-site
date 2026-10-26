---
title: Hackathon at Community over Code Glasgow 2026 — Retrospective
---

<style>
  .hackathon-poster-strip {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
    margin: 1rem 0 1.5rem;
  }
  .hackathon-poster-strip img {
    width: 140px;
    height: auto;
    border: 2px solid #ccc;
    border-radius: 6px;
    flex-shrink: 0;
  }
  .hackathon-poster-strip .caption {
    font-size: 0.95em;
  }
  @media (max-width: 600px) {
    .hackathon-poster-strip { flex-direction: column; }
    .hackathon-poster-strip img { width: 100px; }
  }
</style>

<div class="hackathon-poster-strip">
  <a href="/images/hackathon-poster.png"><img src="/images/hackathon-poster.png" alt="Community over Code Glasgow 2026 Hackathon poster"></a>
  <div class="caption">
    We held a hackathon at <strong>Community over Code Glasgow 2026</strong>
    (October 11–14, Hilton Glasgow). Projects brought real tasks and sat down
    together — new and experienced contributors alike — to work on them across
    the three days. This page is a retrospective of how it went.
    <a href="/images/hackathon-poster.png">View the full poster.</a>
  </div>
</div>

## What Happened

The hackathon ran throughout the conference (Monday through Wednesday) in the
Wee Dram Room, with projects sharing the space across half-day slots. The room
was busy every day, with a steady mix of focused project work and new people
wandering in to find out how to get involved. Several project leads noted that
the real value was as much in the face-to-face community time as in the code
that got written — and that new contributors turned up as a direct result.

Below is what participating projects reported afterwards. Where a project
hasn't reported yet, we'll add their notes as they come in.

## Participating Projects — What They Got Done

### Airflow

Three first-time contributors joined the Airflow session, and one small
contribution came out of it:
[apache/airflow#74585](https://github.com/apache/airflow/pull/74585). The
team's own takeaway: come better prepared next time, with more small,
ready-to-implement issues.

### Fluss

Around 10–12 people came by, including contributors from other Apache
projects and engineers trying Fluss for the first time. Six PRs were opened
during or right after the hackathon:

- Flink integration: [#4630](https://github.com/apache/fluss/pull/4630),
  [#4634](https://github.com/apache/fluss/pull/4634),
  [#4635](https://github.com/apache/fluss/pull/4635)
- Python client and user guides: [#4631](https://github.com/apache/fluss/pull/4631)
- Elixir client: [#4628](https://github.com/apache/fluss/pull/4628),
  [#4633](https://github.com/apache/fluss/pull/4633)

The team said the most valuable part was collaboration across Apache
projects. Flink contributors reviewed Fluss's
[VARIANT implementation](https://github.com/apache/fluss/pull/2981) (and
caught a correctness issue) and its
[materialized table integration](https://github.com/apache/fluss/pull/3596).
Those conversations also led to an
[upstream Flink proposal](https://issues.apache.org/jira/browse/FLINK-40987)
that lets queries override or disable watermarks, motivated by the Fluss
connector work, so the fix can help other connectors too. There was also
discussion of a native Apache Doris–Fluss integration built on fluss-rust,
the project's Rust SDK. Engineers from several companies spent time building
with Fluss and gave feedback on the getting-started experience.

### Magpie

Three users and three new contributors attended. Several users applied
Magpie's security skills to their own projects. That surfaced gaps for older,
SVN-based projects and a handful of "first-time gotchas," which have all
since been fixed. The session also tested using LLMAO with Magpie, and
confirmed that optimizing token usage is essential for people without
frontier-model subscriptions. Details and links are in the
[Magpie dev@ wrap-up](https://lists.apache.org/thread.html/2qhj5hd3z0yk6qd988zckdoy1kgq6mh2).

### Mahout

The session brought in users and one first-time contributor, covering
how-tos and getting people acclimated, and some PRs are on the way.

### NuttX

Around 17 active participants (of ~20 planned), 7 of whom were new faces who
first heard about NuttX at the conference. The session had a concrete goal:
port the 1993 open-source release of *Doom* to the Sony Spresense IoT board —
and they pulled it off during the event. There's even
[a video of the result](https://youtu.be/ikh1EEGco8Q). A great example of a
focused, demoable hackathon project that doubled as outreach for the NuttX
RTOS.

### Responsible AI (LLMAO)

The LLMAO session drew users and newcomers for how-tos and getting started,
and came away with a to-do list shaped by user feedback.

### Sourcelume

A small, productive group of 5 — including 2 new contributors whose first PRs
were accepted after the conference. They built a demo exercising all of the
project's functionality as of the conference, and started on end-user tooling
to make Sourcelume easier to adopt. Much of the surrounding work carried on
over the dev lists afterwards, and the project has since made significant
progress on two of its key modules. See the
[Sourcelume demo](https://github.com/apache/sourcelume-registry/tree/main/examples/simple-demo),
referenced from the [Registry page](https://sourcelume.apache.org/registry.html).

### Tomcat

A compact group — 3 in person plus 3 joining remotely via a Slack huddle —
who used the time to work through several proposals for improvements. Being
able to discuss these synchronously was valuable, and the team noted that the
hackathon time also set up their Thursday security day nicely: the non-security
topics got aired in the hackathon, so the security day could stay focused on
security. A good reminder that "time together as a community" is a legitimate
and useful hackathon outcome in its own right. Follow-on discussion continued
on the dev list.

### Tooling (Apache Trusted Releases)

The ATR session brought in users and newcomers for how-tos and onboarding,
and left with a to-do list driven by their feedback.

### Other participating projects

Nineteen projects booked hackathon slots in all. We haven't yet heard from
Apache Search, Arrow, Doris, Fineract, Gluten, Groovy & Grails, Impala,
Spark, Superset, or Wayang. We'll add their write-ups as they come in.

## Lessons Learned

Notes for whoever runs the hackathon in future years. These are deliberately
general — they're about the format and the room, not about any one project or
person.

- **Watch the room acoustics.** With several projects sharing one room, noise
  from neighboring tables can be a distraction for groups trying to have a
  focused technical discussion. Consider more space between tables, a larger
  room, or a quieter corner for discussion-heavy groups.
- **Keep the space usable.** Unattended laptops and belongings left on tables
  took up room that active participants needed, and people were reluctant to
  move someone else's gear. A simple norm — hand abandoned items to the hotel
  as lost property, and label or clear tables between slots — would help.
- **Check the physical basics early.** At least one group lost the use of
  power outlets in their part of the room. Confirm power, seating, and
  connectivity in every section of the room before the event starts, and have
  a venue contact on call to fix problems quickly.
- **"Just being together" is a real outcome.** More than one project got as
  much value from synchronous, face-to-face discussion as from merged code.
  Set expectations accordingly — a successful hackathon table doesn't have to
  produce a pile of PRs to be worthwhile.
- **A concrete, demoable goal works well.** The sessions that set a single
  clear target going in had an easy time showing what they accomplished and
  used it as outreach afterwards. Encourage projects to come with a
  well-defined, achievable goal (and ideally something they can demo).
- **New contributors do show up.** Several projects connected with first-time
  contributors who found them at the conference. Have good "first task" and
  onboarding material ready so that interest converts into contribution.
- **Come prepared with small, ready-to-go issues.** Groups that arrived with
  a short list of small, well-scoped tasks found it easier to get newcomers
  contributing quickly. Several teams said they'd prepare more next time.
- **The event motivates maintainers too.** Having a date on the calendar got
  maintainers to finish work before the event, and user feedback during the
  session produced a concrete to-do list afterward.
- **Cross-project collaboration is a big win.** Some of the most valuable
  results came from contributors of *other* Apache projects reviewing work
  and spotting improvements upstream. Seating related projects near each
  other, or scheduling them in the same slot, could encourage more of this.
- **Make it easy to track outcomes.** Many valuable discussions don't turn
  into PRs right away, especially across projects. A simple shared way to
  record outcomes and follow-ups would help capture them.
- **The work continues after the event.** A lot of the real progress happened
  on the dev lists in the days and weeks afterward. Build follow-up into the
  plan rather than treating the hackathon as a one-off.

## Coordinate / Follow Up

- Post-event coordination continues on the
  [planners@apachecon.com](mailto:planners@apachecon.com) mailing list and in
  the **#hackathon** channel on [apachecon.slack.com](http://s.apache.org/apachecon-slack).
- Submit your photos to [photos.apachecon.com](https://photos.apachecon.com).
- Want an informal evening discussion format instead? See the
  [Birds of a Feather (BoF) sessions](bof.html).
- Projects can update this page by submitting a PR to the
  [comdev-events-site repository](https://github.com/apache/comdev-events-site).
