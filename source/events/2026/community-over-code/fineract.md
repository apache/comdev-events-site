---
title: "Apache Fineract — Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache Fineract — Hackathon

### Coordinator

* **Ádám Sághy** — adamsaghy@gmail.com

### What We're Working On

We're focusing on:

* **Curated Hackaton stories**: Find a task in the [Community Over Code 2026 hackathon stories](https://issues.apache.org/jira/issues/?jql=project%20%3D%20FINERACT%20AND%20resolution%20%3D%20Unresolved%20and%20labels%20%3D%20%22coc-2026-hackaton%22%20ORDER%20BY%20priority%20DESC%2C%20updated%20DESC). The filter lists unresolved Fineract issues with label `coc-2026-hackaton`, ordered by priority and most recent update. Note your story's key, such as `FINERACT-12345`, and coordinate your choice with the organiser.
* **Code maintainability / readability**: We have a significant number of compilation warnings due to various reasons. I believe at least half of these warnings could be easily fixed. As we work on resolving these warnings, the codebase could become safer and easier to maintain.
* **All the rest of the stories that are considered beginner friendly**: https://issues.apache.org/jira/browse/FINERACT-2489?filter=-1&jql=project%20%3D%20%22Apache%20Fineract%22%20and%20labels%20IN%20(beginner-friendly%2C%20beginner%2C%20begineer%2C%20beginners%2C%20Beginner)%20%20AND%20resolution%20%3D%20Unresolved%20order%20by%20created%20DESC
* **Bug tickets (advanced)**: https://issues.apache.org/jira/browse/FINERACT-2492?filter=-1&jql=project%20%3D%20%22Apache%20Fineract%22%20%20AND%20type%20%3D%20Bug%20%20%20AND%20resolution%20%3D%20Unresolved%20order%20by%20created%20DESC

### Apache Fineract hackathon: participant setup guide

**Community Over Code 2026 · Glasgow**  
Prepared 10 October 2026

Follow these steps before the hackathon. By the end, you will have a local Fineract API, a persistent PostgreSQL database, your own development branch, and a way to debug and test changes.

The recommended setup runs **PostgreSQL in Docker, Fineract from source on your laptop, and the Mifos web app in Docker**. This makes the Java code easy to edit, rebuild and debug, while the web app provides a banking interface. The included Postman collection creates one client and demo loan accounts to work with.

| Service | Local address |
|---|---|
| PostgreSQL | `localhost:5432` |
| Fineract backend, SSL disabled | `http://localhost:8080` |
| Mifos web app | `http://localhost:4200` |

Stop any existing services using these ports before starting. The separate Progressive Loan workshop stack uses all three ports, so stop it first if it is running.

Allow a preparation session before the event: the first clone, dependency downloads, code generation and IDE import can take considerably longer than later starts. Finish the readiness checklist at the end before arriving.

#### 1. Install the prerequisites

| Tool | What you need |
|---|---|
| Git | Install from [Git](https://git-scm.com/downloads), or your system package manager. |
| GnuPG | Install the [GPG command-line tools](https://gnupg.org/download/). All contribution commits must have a GPG signature; configure signing in step 11 before your first commit. |
| Java | **JDK 25**, including `javac`. [Azul Zulu](https://www.azul.com/downloads/?version=java-25-lts&package=jdk) or [Eclipse Temurin](https://adoptium.net/temurin/releases/?version=25) are options. Choose the package for your CPU. |
| Docker | Docker Desktop on macOS/Windows, or Docker Engine with Compose on Linux. Start it before continuing. See [Docker installation](https://docs.docker.com/get-started/get-docker/). |
| IDE | IntelliJ IDEA or Eclipse with Java 25 support. The terminal steps work without an IDE. |
| API client | `curl` for the initial checks, and [Postman](https://www.postman.com/downloads/) for the bundled demo collection. |
| Laptop | **32 GB RAM recommended** for comfortable source development. A 16 GB machine may need fewer build workers and fewer other applications running. Reserve at least 15 GB of free disk space as a practical starting allowance. |

These memory and disk figures are workshop recommendations. The pinned build gives its Gradle process a maximum heap of 12 GB, and compilation starts additional worker processes. Small laptops should pair with another participant or use an organiser-provided API instance. See the [build settings](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/gradle.properties).

**Windows:** use WSL2 with a Linux distribution, install Git and JDK 25 **inside WSL**, and enable Docker Desktop integration for that distribution. Keep the checkout in the WSL Linux filesystem, for example `~/hackathon`, and run the commands below in the WSL terminal. For IDE work, use an IDE connected to that WSL environment. See [Microsoft's WSL installation guide](https://learn.microsoft.com/en-us/windows/wsl/install) and [Docker's WSL setup](https://docs.docker.com/desktop/features/wsl/).

The commands below use Bash-compatible syntax: macOS Terminal, a Linux terminal, or WSL. Do not paste them directly into PowerShell.

Verify the installation:

```bash
git --version
java -version
javac -version
docker version
docker compose version
curl --version
gpg --version
```

Both Java commands must report **25**. `docker version` must show a working server as well as a client. Use Compose v2 or newer, invoked as `docker compose`.

On macOS, if Java 25 is installed but another JDK is selected:

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 25)
export PATH="$JAVA_HOME/bin:$PATH"
```

On Linux/WSL, set `JAVA_HOME` to your installed JDK 25 directory and put its `bin` directory first in `PATH`. Set the IDE's Gradle JVM to the same JDK. Do not install a separate Gradle: Fineract includes its wrapper.

The Java requirement comes from the [pinned Fineract toolchain](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/build.gradle). Guides written for older releases may use another Java version.

#### 2. Get the workshop setup files

Download and extract the organiser's `Fineract-Hackathon-Setup.zip`. Open a terminal in its `fineract-hackathon` directory. Keep these files together:

```text
fineract-hackathon/
  README.md
  compose.yaml
  fineract-local.env
  Progressive-Loans.postman_collection.json
  init-db/
    01-create-databases.sql
```

In the next step, you will create a `fineract/` source checkout inside this directory. The setup files stay outside that checkout so they do not accidentally become part of your contribution.

#### 3. Check out Fineract and create your branch

From `fineract-hackathon/`:

Find a task in the [Community Over Code 2026 hackathon stories](https://issues.apache.org/jira/issues/?jql=project%20%3D%20FINERACT%20AND%20resolution%20%3D%20Unresolved%20and%20labels%20%3D%20%22coc-2026-hackaton%22%20ORDER%20BY%20priority%20DESC%2C%20updated%20DESC). The filter lists unresolved Fineract issues with label `coc-2026-hackaton`, ordered by priority and most recent update. Note your story's key, such as `FINERACT-12345`, and coordinate your choice with the organiser.

```bash
git clone --branch develop https://github.com/apache/fineract.git fineract
cd fineract
git switch -c hackathon/my-first-change 4a61d7c218413eca8310d30b098722047e891bb7
git rev-parse HEAD
./gradlew --version
```

Choose your own branch name, for example `hackathon/adam-client-validation`. The revision printed by Git should be `4a61d7c218413eca8310d30b098722047e891bb7`. Gradle should report version **9.7.1** and Java **25**.

This guide pins a development revision so participants share a starting point. Use another revision only if the organiser announces one, and recheck its requirements.

**Use a normal clone with history and tags.** Fineract derives its build version from Git tags. A shallow clone can fail with `couldn't find matching tag in shallow git repository`. If you already used a shallow clone, repair it with:

```bash
git fetch --unshallow --tags
```

If you have a full clone with missing tags, use `git fetch --tags` instead.

#### 4. Start PostgreSQL

Stay in the `fineract/` source directory:

```bash
docker compose -f ../compose.yaml up -d --wait --wait-timeout 180 db
docker compose -f ../compose.yaml ps
docker compose -f ../compose.yaml exec db psql -U root -d postgres -c '\l'
```

The database container should be healthy. The database list should contain:

| Database | Purpose |
|---|---|
| `fineract_tenants` | Tenant registry and connection information |
| `fineract_default` | Business data for tenant `default` |

The bundled initialization script creates both databases on the first start. Fineract creates and migrates their tables when the backend starts. **You do not need to run `createPGDB` for this setup.**

PostgreSQL is exposed at `localhost:5432`, with database user `root` and password `postgres`. This is a disposable local development account. Port 5432 is the standard PostgreSQL port; stop a conflicting local database before starting this sandbox.

The database lives in a named Docker volume and survives a normal shutdown. The bundle uses PostgreSQL 18.3, matching the [pinned upstream PostgreSQL configuration](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/config/docker/compose/postgresql.yml). The volume mount follows the PostgreSQL 18 image's [storage layout](https://hub.docker.com/_/postgres).

#### 5. Load the local settings and start Fineract

**Recommendation**

Add the `fineract-local.env` content as environment variables for the IDE of your choosing (like IntelliJ Idea) and build and execute from there: `:fineract-provider:devRun`

**Alternative way:**
In the same terminal, still inside `fineract/`:

```bash
set -a
. ../fineract-local.env
set +a
./gradlew --max-workers=2 :fineract-provider:devRun
```

Leave this terminal running. Open a **second terminal** for API requests and other commands.

The environment file sets the backend to HTTP on port 8080 with SSL disabled, and points both Fineract database connections at the Docker database on port 5432. Load it again whenever you open a new terminal to start Fineract. Loading it in one terminal does not configure an already-open IDE.

The first start builds the application, generates required sources and runs database migrations. Wait for the log to say:

```text
APACHE FINERACT IS READY
```

Confirm readiness with the health request in step 6. The terminal stays occupied while the server runs; you do not need to wait for a final `BUILD SUCCESSFUL` message.

`devRun` speeds up development by disabling some quality checks. Run the checks in step 10 before sharing a change. This behavior is defined in the [provider build](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/fineract-provider/build.gradle).



#### 6. Verify the API

In your second terminal:

```bash
curl --fail --show-error \
  http://localhost:8080/fineract-provider/actuator/health
```

Expect a JSON response containing `"status":"UP"`. Additional health fields can vary.

Now verify authentication and the default tenant:

```bash
curl --fail --show-error \
  --user mifos:password \
  --header 'Fineract-Platform-TenantId: default' \
  http://localhost:8080/fineract-provider/api/v1/offices
```

Expect a JSON list containing the default head office. Try the clients endpoint as well:

```bash
curl --fail --show-error \
  --user mifos:password \
  --header 'Fineract-Platform-TenantId: default' \
  http://localhost:8080/fineract-provider/api/v1/clients
```

For a fresh database, expect `totalFilteredRecords` to be zero and `pageItems` to be empty. These credentials and the API check follow Fineract's [quick start](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/README.md).

| Setting | Value |
|---|---|
| API base URL | `http://localhost:8080/fineract-provider/api/v1` |
| Tenant header | `Fineract-Platform-TenantId: default` |
| API username / password | `mifos` / `password` |
| PostgreSQL host / port | `localhost` / `5432` |
| PostgreSQL username / password | `root` / `postgres` |

The local backend uses **HTTP on port 8080, with SSL disabled** by `FINERACT_SERVER_SSL_ENABLED=false`. The demo credentials and configuration are for local development only. The supplied settings bind the backend and published database port to your own machine.

#### 7. Start the web app and create demo data

##### Start the Mifos web app

Once the backend is ready, run this in your second terminal:

```bash
docker run -d --name fineract-hackathon-web-app \
  --network bridge -p 4200:80 \
  -e FINERACT_API_URL=http://localhost:8080 \
  -e FINERACT_API_URLS=http://localhost:8080 \
  -e FINERACT_PLATFORM_TENANT_IDENTIFIER=default \
  -e MIFOS_SESSION_IDLE_TIMEOUT=300000000 \
  openmf/web-app:dev
```

Open [the web app](http://localhost:4200). Use tenant `default`, username `mifos` and password `password`. The configured idle timeout is `300000000` milliseconds. The API URL points to your laptop's backend because requests are sent by your browser; Docker's bridge network does not require changing this URL to a container hostname. The upstream [web app configuration](https://github.com/openMF/web-app/blob/dev/docker-compose.yml) documents these environment variables.

Only one web app can use port 4200. If you already have the Progressive Loan workshop stack running, stop that stack before starting this setup. Its PostgreSQL and backend also occupy ports 5432 and 8080. If you previously created `fineract-hackathon-web-app`, use `docker start fineract-hackathon-web-app` to resume it, or remove that container before running the command again.

##### Explore the API

Open [local Swagger UI](http://localhost:8080/fineract-provider/swagger-ui/index.html) in a browser. The root URL is not a banking home page.

For Postman, configure a request with:

1. URL: `http://localhost:8080/fineract-provider/api/v1/offices`.
2. Authorization: **Basic Auth**, username `mifos`, password `password`.
3. Header: `Fineract-Platform-TenantId`, value `default`.
4. For JSON writes, add `Content-Type: application/json`. HTTP requests do not need certificate settings.

##### Run the Progressive Loans collection

Import the bundled [Progressive-Loans.postman_collection.json](Progressive-Loans.postman_collection.json) into Postman. Use the copy supplied with this hackathon setup; it contains the HTTP URL and client fields for the pinned revision.

Set these collection variables locally:

| Variable | Value |
|---|---|
| `baseUrl` | `http://localhost:8080/fineract-provider/api/v1` |
| `tenantId` | `default` |
| `username` | `mifos` |
| `password` | `password` |
| `officeId` | `1` |
| `clientId` | Leave blank; the collection captures the created client ID. |
| `sandboxConfirmed` | The text `true`, for this disposable local sandbox. |

Run folder **00 Preflight and synthetic borrower**, then **01 Main demo: NEXT_INSTALLMENT**, in the listed order. The collection creates one active client, a progressive loan product and a loan account, then approves, disburses and makes repayments on that loan. It saves the returned IDs in collection variables.

Folders **02–04** create additional loan products and accounts for the same client, including alternative repayment allocation policies and an interest-bearing example. You can run the whole collection in order to populate all four examples. Use one iteration in the Collection Runner.

The dated examples change the tenant's business date. The preflight also prepares the sandbox's business-date and working-day settings so the specified dates work. Run this only against the disposable local database. After running, refresh the web app's Clients page and open the created borrower to inspect their loan accounts. Repeat the clients GET request from step 6 to inspect the same records through the API.

Run the setup once per fresh sandbox. A repeat run creates more data; clear `runId` and captured client/product/loan IDs before deliberately creating another set. If you want an empty sandbox again, use the reset instructions in step 12.

#### 8. Open the code in your IDE

For IntelliJ IDEA:

1. Open the **`fineract/` repository root**, containing `settings.gradle`.
2. Import it as a Gradle project using the **Gradle wrapper**.
3. Select **JDK 25** as both the project SDK and Gradle JVM.
4. Wait for Gradle import and indexing to finish.
5. Prefer building and running through Gradle so generated sources and persistence enhancement are included.

For Eclipse, follow the [upstream IDE instructions](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/CONTRIBUTING.md). Use Java 25 there too.

A useful starting map:

| Location in the checkout | What to look for |
|---|---|
| `fineract-provider` | Application entry point, many API resources, configuration and migrations |
| `fineract-core` | Shared infrastructure and common domain components |
| `fineract-loan`, `fineract-savings` | Loan and savings functionality |
| `fineract-progressive-loan` | Progressive loan calculations and servicing |
| `fineract-security` | Authentication and access controls |
| `integration-tests` | Tests that call a running API |
| `fineract-e2e-tests-runner` | Cucumber scenarios |
| `fineract-doc` | Documentation sources |

Search for the API resource involved in your task, then follow its service calls into the relevant module. This module map reflects the [pinned project structure](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/settings.gradle).

#### 9. Attach a debugger

The simplest repeatable approach uses the same Gradle launch you have already verified.

1. Stop the running backend with **Ctrl+C**.
2. In the terminal with the local environment loaded, run:

   ```bash
   ./gradlew --max-workers=2 :fineract-provider:devRun --debug-jvm
   ```

3. The JVM waits for a debugger on port **5005** before it starts the application.
4. In IntelliJ, add a **Remote JVM Debug** configuration using host `localhost`, port `5005`, and the `fineract-provider` module. In Eclipse, use **Remote Java Application** with the same host and port.
5. Start the IDE's debug connection and wait for the API to become ready.
6. Put a breakpoint in `ClientsApiResource.retrieveAll`, then call the clients GET endpoint. Execution should stop at your breakpoint. Resume execution to let the request finish.

You can also launch `org.apache.fineract.ServerApplication` directly from the IDE. Configure its working directory as `fineract/`, use the provider module's runtime classpath, and load all values from `../fineract-local.env` into the run configuration's environment variables. Copy the non-comment `KEY=value` lines if your IDE does not support environment files. Generate and compile the project through Gradle first.

After changing code, restart `devRun` and repeat your API request. Some IDEs can replace simple method bodies while debugging; restart for structural, dependency, configuration or migration changes. Run only one backend on port 8080 at a time.

#### 10. Run a test and check your change

From `fineract/`, run a small existing test as a first exercise:

```bash
./gradlew --max-workers=2 :fineract-progressive-loan:test \
  --tests '*ProgressiveLoanRescheduleRequestDataValidatorTest'
```

It contains two unit tests and does not need the HTTP server. The first test run still needs to compile test sources. Afterwards, look at:

```text
fineract-progressive-loan/build/reports/tests/test/index.html
```

For your own change, run the relevant module and test class. Replace the module and class in the example above.

For the broader unit-test set, the upstream contribution guide uses:

```bash
./gradlew --max-workers=2 test \
  -x :integration-tests:test \
  -x :twofactor-tests:test \
  -x :oauth2-tests:test
```

**Integration tests need a running Fineract server.** With the backend running and step 6 passing, this is an example of selecting one integration test class:

```bash
BACKEND_PROTOCOL=http BACKEND_PORT=8080 ./gradlew :integration-tests:waitForFineract
BACKEND_PROTOCOL=http BACKEND_PORT=8080 \
  ./gradlew --max-workers=2 :integration-tests:test --tests '*ClientLoanIntegrationTest'
```

These tests create and change business data. Use a disposable sandbox. Tests involving additional services or other authentication modes need the matching upstream test stack; the small database bundle here does not provide every integration-test dependency. See the [integration testing chapter](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/fineract-doc/src/docs/en/chapters/testing/integration.adoc).

Before sharing a change, format and check the affected module, for example:

```bash
./gradlew :fineract-progressive-loan:spotlessApply
./gradlew --max-workers=2 :fineract-progressive-loan:check
git diff --check
git diff
```

Replace `fineract-progressive-loan` with the module you changed. Review formatting changes before committing. Add a test that demonstrates the bug or new behavior, and follow the [contribution guidelines](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/CONTRIBUTING.md).

#### 11. Save your work and prepare a contribution

##### Configure GPG signing before your first commit

Fineract requires **all commits to be signed with a GPG key**, as described in the [contribution guidelines](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/CONTRIBUTING.md#signing-your-commits). Configure this in the environment where you run Git; for the Windows route in this guide, that is WSL.

Check for an existing signing key:

```bash
gpg --list-secret-keys --keyid-format=long
```

If you do not have one, create a key with `gpg --full-generate-key`. Use a supported signing algorithm, such as RSA with 4096 bits, provide your name and a verified GitHub email address, and choose a passphrase. Then list the keys again and copy your signing key's long ID. See [GitHub's key-generation instructions](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).

Export its **public** key, replacing `YOUR_GPG_KEY_ID`:

```bash
gpg --armor --export YOUR_GPG_KEY_ID
```

Add the public key block under GitHub **Settings → SSH and GPG keys → New GPG key**. Keep the private key on your own machine. See [adding a GPG key to GitHub](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

From `fineract/`, configure Git for this checkout. Replace the name, email and key ID with your own; the email must match a key identity and be verified on GitHub:

```bash
git config user.name "Your Name"
git config user.email "your-verified-email@example.com"
git config gpg.format openpgp
git config gpg.program gpg
git config user.signingkey YOUR_GPG_KEY_ID
git config commit.gpgsign true
export GPG_TTY=$(tty)
```

Run the `GPG_TTY` export in each new interactive terminal used to commit, or add it to your shell's startup file. The settings above enable signing by default for this repository. IDE commits need access to the same GPG key and passphrase prompt. See [GitHub's signing configuration](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key).

##### Name the PR and commit subjects

Use this convention for both your **PR title** and each **commit message's first line**:

```text
FINERACT-XXXX: short description
```

Replace `XXXX` with the actual number of your Jira story. Keep the colon and a space, and start the description with a capitalised, present-tense imperative verb such as **Fix**, **Add**, **Improve** or **Update**. For example, using an illustrative issue number:

```text
FINERACT-12345: Fix progressive loan repayment validation
```

For a single-commit PR, use the same first line as the PR title. For multiple commits, keep the issue prefix on each subject and describe the specific change in that commit. Put longer explanations and the reason for the change in the commit body and PR description. This follows the project's [PR title and commit-message guidance](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/CONTRIBUTING.md#pull-requests), with a consistent issue prefix throughout this hackathon.

##### Commit and open the PR

You can work locally before creating a GitHub fork. When ready to share:

1. Fork [apache/fineract](https://github.com/apache/fineract) into your own GitHub account.
2. In `fineract/`, add your fork as another remote. Replace the username below with your own:

   ```bash
   git remote add fork https://github.com/YOUR_GITHUB_USERNAME/fineract.git
   git status
   ```

3. Stage only the files belonging to your change and create a signed commit. Replace the example paths, issue number and description:

   ```bash
   git add path/to/changed-file.java path/to/changed-test.java
   git commit -S -m "FINERACT-12345: Fix progressive loan repayment validation"
   git log -1 --show-signature
   ./scripts/verify-signed-commits.sh --strict
   git push -u fork HEAD
   ```

4. Confirm a good GPG signature locally, then check that **every commit shows Verified on GitHub**. Uppercase `-S` creates the cryptographic signature. The repository's verification script detects unsigned commits; also inspect the signature itself.
5. Open a pull request from your branch to Apache Fineract's `develop` branch. Use `FINERACT-XXXX: short description` as the PR title. Describe the problem, the resulting behavior and the tests you ran, and link the Jira story.

The example paths above are placeholders. Pushing to your fork requires GitHub authentication; use your credential manager or follow [GitHub's authentication instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github). Keep local credentials, generated build outputs and IDE settings out of your contribution. If `develop` has moved since the workshop revision, follow the organiser's or reviewer's guidance on updating your branch. Never discard uncommitted work to fix a merge conflict.

#### 12. Stop, restart or reset the sandbox

Stop the native backend with **Ctrl+C**. Gradle may print `Build cancelled while executing task` when you stop a running server; this is expected.

From `fineract/`, stop Docker services while keeping the database:

```bash
docker compose -f ../compose.yaml down
docker stop fineract-hackathon-web-app
```

To resume:

```bash
docker compose -f ../compose.yaml up -d --wait db
docker start fineract-hackathon-web-app
set -a
. ../fineract-local.env
set +a
./gradlew --max-workers=2 :fineract-provider:devRun
```

For a completely fresh sandbox, **the following command deletes this workshop's database volume and all its business data**. Stop the backend first and use it only when you want to discard that data:

```bash
docker compose -f ../compose.yaml down --volumes
docker compose -f ../compose.yaml up -d --wait db
```

Then start Fineract again. Your source checkout is preserved. Refresh the web app and clear Postman's captured IDs before running the demo collection against the fresh database. Initialization scripts and initial database passwords are applied only to an empty volume; editing the environment file does not rewrite tenant connection details already stored in an existing database.

#### Optional: run the backend in Docker too

Use this when you want to run an image built from your checkout. Stop the native server first.

**Reset the disposable database using step 12 before switching between native and container execution.** Tenant connection addresses are stored in the database: the native setup records `localhost:5432`, while the container setup needs `db:5432`. Export anything you need first. To preserve an existing database instead, its stored tenant connection settings must be updated explicitly.

From `fineract/`:

```bash
./gradlew --max-workers=2 :fineract-provider:jibDockerBuild \
  -Djib.to.image=fineract:coc2026-hackathon -x test -x cucumber
docker compose -f ../compose.yaml --profile app up -d fineract
docker compose -f ../compose.yaml logs -f fineract
```

The supplied Compose file changes the database address to `db:5432` inside Docker. Repeat the health and authenticated API checks from step 6. The source build still needs JDK 25, and skipped tests must be run separately.

Press Ctrl+C to stop following container logs; the container keeps running. Stop it with the Compose shutdown command in step 12.

After each code change, rebuild the image and recreate the backend:

```bash
./gradlew --max-workers=2 :fineract-provider:jibDockerBuild \
  -Djib.to.image=fineract:coc2026-hackathon -x test -x cucumber
docker compose -f ../compose.yaml --profile app up -d --force-recreate fineract
```

#### Troubleshooting

| Symptom | What to check |
|---|---|
| Docker cannot connect to its daemon | Start Docker Desktop/Engine. On Windows, check WSL integration. |
| Java/toolchain error or unsupported class version | Verify `java`, `javac`, `JAVA_HOME` and the IDE's Gradle JVM all select JDK 25. |
| `couldn't find matching tag in shallow git repository` | Fetch full history and tags as shown in step 3. |
| `Permission denied: ./gradlew` | Run `chmod +x gradlew`. On Windows, keep the checkout inside WSL. |
| Port 5432 or 8080 already in use | Stop the conflicting local service, or change the port and all corresponding connection settings consistently. |
| Port 4200 in use or web app container name exists | Stop the conflicting web app. Use `docker start fineract-hackathon-web-app` for an existing container; remove it before recreating it with changed environment variables. |
| Database connection refused or password failure | Check `docker compose -f ../compose.yaml ps`, then reload `fineract-local.env` in the server terminal. Both tenant registry and tenant database settings matter. |
| Missing databases | Run the database-list command in step 4. If initialization failed, inspect database logs; resetting the disposable volume reruns initialization. |
| API connection refused | Check whether the source build has finished and Fineract has started. The first build can be slow. |
| HTTPS/TLS error | Use `http://localhost:8080`, and reload the environment file so `FINERACT_SERVER_SSL_ENABLED=false` reaches the backend. |
| API returns 401 or 403 | Check Basic Auth, credentials and the `Fineract-Platform-TenantId: default` header. |
| Web app cannot reach the API | Confirm the backend health endpoint works over HTTP on port 8080, and that the web app's API URL points to `http://localhost:8080`. |
| Postman setup fails | Use the bundled collection, set all variables including `sandboxConfirmed=true`, run folders in order and inspect the first failed response before continuing. |
| `gpg failed to sign the data` | Check the signing key ID, run `export GPG_TTY=$(tty)` in the committing terminal, and make sure GPG can prompt for the key's passphrase. |
| GitHub does not show Verified | Check the public GPG key is added to GitHub and the commit email matches a key identity and verified account email. |
| Root URL returns 404 | Use the complete health/API/Swagger URL. Fineract's root is not a web app. |
| Build runs out of memory or a daemon disappears | Close heavy applications, reduce to `--max-workers=1`, and check memory limits. Do not blindly lower the Gradle heap: upstream notes that OpenAPI generation alone needs about 7 GB. |
| IDE cannot resolve generated classes | Complete the Gradle build/import first, then refresh the Gradle project. |
| Debug launch seems stuck | `--debug-jvm` waits for the IDE to attach on port 5005. |
| Client request hangs while debugging | Resume execution at the breakpoint. |
| Changes do not appear in API responses | Restart the native backend, or rebuild and recreate the Docker image. Check that your client targets port 8080. |

Database logs and an interactive SQL session:

```bash
docker compose -f ../compose.yaml logs --tail=100 db
docker compose -f ../compose.yaml exec db psql -U root -d fineract_default
```

Exit `psql` with `\q`. Investigate business behavior through the API; direct SQL writes can bypass Fineract's validation and accounting rules.

If you need help, bring your operating system, `java -version`, Git revision, command used, and the first meaningful exception with its `Caused by` chain. The [upstream memory-budget notes](https://github.com/apache/fineract/blob/4a61d7c218413eca8310d30b098722047e891bb7/.github/scripts/gradle-memory-budget.sh) explain the code-generation heap requirement.

#### Ready for the hackathon

- [ ] Java and `javac` report version 25; Docker is running.
- [ ] The checkout is on the agreed revision and your own branch.
- [ ] PostgreSQL is healthy and both databases exist.
- [ ] The health endpoint reports `UP`.
- [ ] An authenticated API request works with tenant `default`.
- [ ] The web app at port 4200 can log in to this backend.
- [ ] The Postman collection has created its client and demo loan accounts.
- [ ] Your IDE imports the project and can attach to the debugger.
- [ ] The selected unit test in step 10 passes.
- [ ] You know how to stop and restart the backend without deleting data.
- [ ] GPG signing is configured and you know the `FINERACT-XXXX: short description` naming convention.
- [ ] You have selected a story from the hackathon Jira filter.

Bring your charger and keep the downloaded dependencies available. Avoid clearing Gradle caches immediately before the event. The first build must complete while you still have a reliable internet connection.


---

* Back to the [Hackathon overview](hackathon.html)
* Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
