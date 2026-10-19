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

### NuttX

Around 17 active participants (of ~20 planned), 7 of whom were new faces who
first heard about NuttX at the conference. The session had a concrete goal:
port the 1993 open-source release of *Doom* to the Sony Spresense IoT board —
and they pulled it off during the event. There's even
[a video of the result](https://youtu.be/ikh1EEGco8Q). A great example of a
focused, demoable hackathon project that doubled as outreach for the NuttX
RTOS.

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

### Other participating projects

Nineteen projects booked hackathon slots in all (Apache Search, Sourcelume,
Fineract, Airflow, Spark, Responsible AI, Impala, Arrow, Tooling, Gluten,
Magpie, Doris, Mahout, Groovy & Grails, Tomcat, Fluss, Wayang, NuttX, and
Superset). As more of them send in their numbers and highlights, we'll add
their write-ups here.

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
