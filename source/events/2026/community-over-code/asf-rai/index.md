---
title: "Apache RAI Hackathon: LLMAO Quick Start"
---

<style>
#content > h1.title { display: none; }
</style>

<div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap; margin-bottom:1rem;">
  <div style="width:200px; flex:none;">{{< image src="rai-logo-apache.png" alt="Apache Responsible AI Initiative" >}}</div>
  <h1 style="margin:0;">Apache RAI Hackathon: LLMAO Quick Start</h1>
</div>

A short guide for joining the Apache Responsible AI (RAI) hackathon and contributing to **LLMAO** ([apache/tooling-llmao](https://github.com/apache/tooling-llmao)).

---

## 1. Connect to llm.apache.org

1. Go to [https://llm.apache.org/fleet](https://llm.apache.org/fleet) and log in.

   Use your ASF LDAP (committer) username and password on the ASF OAuth page:

   {{< image src="asf-oauth-login.png" alt="ASF OAuth login page for llm.apache.org" >}}

   Once you log in, the landing page (Fleet) will look like the one below:

   {{< image src="llmao-fleet-landing.png" alt="LLMAO Fleet landing page showing available models" >}}

2. Create a key.

   Go to **My Keys** in the top menu and click **+ Create key**. The secret is shown only once, when you create the key.

   {{< image src="llmao-my-keys.png" alt="LLMAO My Keys page with the Create key button" >}}

   Once the key is created, you'll see the confirmation below. Click **Copy** right away, because the secret will not be shown again.

   {{< image src="llmao-key-created.png" alt="Personal API key created confirmation with the Copy button" >}}

3. Copy the key and keep it somewhere safe. You will need it in step 4.2.
4. For agents:
   1. Follow the instructions in [Connecting your agent](https://github.com/apache/tooling-llmao#connecting-your-agent).
   2. Set the environment variables, using the key from step 3.

**Tip:** Treat the key like a password. Don't commit it to a repo or paste it into Slack.

---

## 2. Contribute

1. Browse and pick up open issues: [github.com/apache/tooling-llmao/issues](https://github.com/apache/tooling-llmao/issues)
2. Join the conversation on Slack in [#llm-a-o](https://the-asf.slack.com/archives/C0BAJ4D7V4Y).
3. Learn more ways to get involved with Apache RAI: [rai.apache.org/get-involved.html](https://rai.apache.org/get-involved.html)

---

## Quick links

| Resource | Link |
|---|---|
| LLM Fleet (log in, create key) | https://llm.apache.org/fleet |
| Agent setup guide | https://github.com/apache/tooling-llmao#connecting-your-agent |
| Issues | https://github.com/apache/tooling-llmao/issues |
| Slack channel | [#llm-a-o](https://the-asf.slack.com/archives/C0BAJ4D7V4Y) |
| Apache RAI: Get Involved | https://rai.apache.org/get-involved.html |
