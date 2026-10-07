---
title: "Apache SIS — Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache SIS — Hackathon

### Coordinator

* **Martin Desruisseaux** — martin.desruisseaux@geomatys.com

### What We're Working On

The focus will depend on the interest of the participants.
One Apache SIS characteristic is its strong commitment in
[OGC/ISO international standards](https://sis.apache.org/standards.html).
Therefore, contributing to Apache SIS is a way to become more familiar with these standards.
Some proposed tasks are:

* **Improvement of the developer guide** —
  not necessarily with new material (while it would be helpful), it can also be reorganization.
  The [developer guide](https://sis.apache.org/book/en/developer-guide.html) is written directly
  in HTML for better semantic.
* **Replacement of JAXB** —
  the JAXB dependency was introduced at a time when it was bundled in the JDK.
  But now, it became an external dependency imposed to all Apache SIS users
  for XML formats that tend to be replaced by newer JSON formats.
  Furthermore, Apache SIS internal mechanic evolved to a point where
  it could continue to support the same XML formats without JAXB.
  Removing the JAXB dependency (after replacement by internal mechanic)
  would not only reduce the size and the number of dependencies of Apache SIS,
  but also prepare the ground for JSON formats.
* **JSON encoding for Coordinate Reference Systems (CRS)** —
  this standard is under development in the Open Geospatial Consortium (OGC)
  and a draft is [available online](https://docs.ogc.org/DRAFTS/26-009.html).
  We plan to continue the development of this international standard on OGC GitHub repository
  together with the development of a Prof Of Concept implementation with Apache SIS.


### Resources

* [Dev mailing list thread about the hackathon](https://lists.apache.org/thread/x5pyd9cwjhyc8lpgsgfnvpy8g72l91c9)
* [Project website](https://sis.apache.org/)
* [GitHub issues](https://github.com/apache/sis/issues)

### Getting Started Before the Event

To make the most of hackathon time, we recommend:

1. Clone the repo and get the build working
2. Browse the issue list and pick one that interests you
3. Introduce yourself on the dev@ list

---

* Back to the [Hackathon overview](hackathon.html)
* Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
