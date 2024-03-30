```markdown
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

Welcome to the source code repository for the [Apache Events website](https://events.apache.org/). This website serves as a hub for Apache-related events, providing information and resources for attendees and organizers.

To get involved or provide feedback, please reach out to the Community Development PMC using the [dev@community.apache.org](https://lists.apache.org/list.html?dev@community.apache.org) mailing list.

For the main Community Development website, visit [apache/comdev-site](https://github.com/apache/comdev-site).

## How to Publish the Website

Changes made to the `main` branch of this repository trigger the [events-site Jenkins Job](https://ci-builds.apache.org/job/Community%20Development/job/events-site/job/main/), which generates the website content and commits it to the `asf-site` branch. The ASF's gitpubsub mechanism then synchronizes this content to [https://events.apache.org/](https://events.apache.org/). Detailed information about the publication process is available in the [ASF Documentation about Project sites](https://infra.apache.org/project-site.html).

If the publication process fails, you can use the [self-service page from ASF Infra](https://selfserve.apache.org/) to trigger a resync of the git repo.

## Powered by Hugo!

The website is built using Hugo, a static website generator. Check out [their website](https://gohugo.io/) for more information on how to install and run it if needed.

Other Apache websites built with Hugo can be found by searching for the ['hugo' tag on GitHub](https://github.com/search?q=topic%3Ahugo+org%3Aapache&type=Repositories).

## Testing the Website Locally

To generate the static website, run `hugo` to generate the website under `target/content`.

During development, use `hugo server -D` to continuously (re)generate and serve the website on `localhost:1313`.