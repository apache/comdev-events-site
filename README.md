<!--
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to You under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
# Apache Events website

This is the source code for the website of the [Apache Events website](https://events.apache.org/), hosted at:

    https://events.apache.org/

To get in touch with the Community Development PMC (responsible for the website) please use the [dev@community.apache.org](https://lists.apache.org/list.html?dev@community.apache.org) mailing list.

The repository for the main Community Development website is at https://github.com/apache/comdev-site

## How to publish the website

Changes to the `main` branch of this repository trigger the [events-site Jenkins Job](https://ci-builds.apache.org/job/Community%20Development/job/events-site/job/main/), which generates the website content and commits it to the `asf-site` branch of this repository. There's currently (April 2020) a lag of about ten minutes for the Jenkins job to start, if you commit directly to the GitHub repository.

The [ASF's gitpubsub mechanism](https://blogs.apache.org/infra/entry/git_based_websites_available) then synchronizes that content to [https://events.apache.org/](https://events.apache.org/), usually within a few seconds. More details about the publication process can be found in the [ASF Documentation about Project sites](https://infra.apache.org/project-site.html). If for some reason this process fails, you can use [the self-service page from ASF Infra](https://selfserve.apache.org/) to trigger a resync of the git repo.

### Calendar data updates

A [GitHub Action workflow](.github/workflows/getcalendar.yml) runs daily at 09:20 UTC, to fetch the Comdev calendar events and update the local JSON copy.

Any calendar changes are then committed to to main branch, which triggers a site rebuild as described above.

To update the website quickly after editing the Google calendar, the workflow can also be triggered manually using the `Run workflow` button on the ["Fetch the Google Calendar"](https://github.com/apache/comdev-events-site/actions/workflows/getcalendar.yml)  workflow page.

## Powered by Hugo!

The website uses Hugo as static website generator, see [their website](https://gohugo.io/) for more information
and for how to install and run it if needed.

Other Apache websites that are built with Hugo should be listed by [this GitHub query for the 'hugo' tag](https://github.com/search?q=topic%3Ahugo+org%3Aapache&type=Repositories).

## How to test the website and changes on your own computer

To generate the static website, execute `hugo` to generate the website under target/content.

During development, it may be useful to run an incremental build. For this to work, execute `hugo server -D` to
continuously (re)generate and serve the website on `localhost:1313`.

# How-To add a Community Over Code event promotion to your project site

All PMCs are asked to help promote Community Over Code and other major Apache
sponsored events by adding some form of img link to their homepages,
in whatever place works best for your site navigation.

The process for doing this is documented at https://apachecon.com/event-images/


# How ComDev/VP, Conferences Maintains current-event Pages

* Maintenance of current-event* files for PMC inclusion:
- update text in content/current-event.mdtext
- replace content/images/current-event-*.png files with the new versions from content/ads/ApacheCon

