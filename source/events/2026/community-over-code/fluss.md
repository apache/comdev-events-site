---
title: "Apache Fluss — Hackathon at Community over Code Glasgow 2026"
---

<img src="/images/apache-oak-leaf.svg" alt="Apache" style="height:1.4em; vertical-align:middle;"> **[Community over Code 2026](https://communityovercode.org) — Glasgow, UK, October 11–14**

**[Register now](https://communityovercode.apache.org/events/glasgow-2026/register)** | [Event website](https://communityovercode.org) | [Hackathon overview](hackathon.html)

## Apache Fluss — Hackathon

Fluss is a streaming storage system for real-time analytics. A table is stored as
a log, optionally with a key-value index beside it, and older data is tiered into
Iceberg, Paimon or Lance so a single query can read both the lake and the fresh
log tail. There is a Java client, a Rust client, and Python, C++ and Elixir
bindings built on the Rust one.

**Where and when:** Wee Dram Room, Tuesday 13 October, 15:00–18:40.

### Coordinator

* **Anton Borisov** (PMC member) — borzoniusy@gmail.com

### Before you arrive

Conference wifi is not where you want to download a Maven repository, a Rust
toolchain and a gigabyte of container images. Half an hour at home buys you the
whole session.

**Docs tasks** — clone the repository and you are ready.

```bash
git clone https://github.com/apache/fluss.git
```

**Rust, Python, Elixir or Go tasks** — a Rust toolchain, plus
[uv](https://docs.astral.sh/uv/) for Python or Erlang and Elixir for the BEAM
side. Build once at home so the dependencies are already on disk:

```bash
cd fluss/fluss-rust
cargo build --workspace
cd bindings/python && uv sync --all-extras && uv run maturin develop
cd ../elixir && mix deps.get && mix compile
```

**Java tasks** — follow the [building guide](https://fluss.apache.org/community/dev/building/)
and run a full build before you travel. CI compiles the tree in about four
minutes, but the first build downloads a lot of Maven artifacts.

```bash
./mvnw clean install -DskipTests -T 1C
```

**A cluster to run against** — most client tasks need one. Either pull the images
in advance and let the test harness start a cluster for you:

```bash
docker pull apache/fluss:0.9.1-incubating
docker pull zookeeper:3.9.2
```

or skip Docker and point your client at the cluster I will have running in the
room:

```bash
export FLUSS_BOOTSTRAP_SERVERS=<address on the whiteboard>
```

### Tasks

A first list, to give you something to look at before October. It will be
refined closer to the event, and anything already fixed by then comes off it.

Several tasks link to issues on `apache/fluss-rust`, which is where the Rust
client was developed before it moved into the main repository. They are being
ported across under a `hackathon` label; the description is accurate either way.

#### Track A — first contribution, no build needed

| Task | Done looks like |
|------|-----------------|
| **Document the Elixir binding** ([#465](https://github.com/apache/fluss-rust/issues/465)). Sixteen modules carry five `@doc` attributes between them, and `website/docs/apis/` has pages for C++, Java, Python and Rust but nothing for Elixir. The tests show how every module is meant to be used. | `@doc` on the public modules, and a first Elixir page on the website |
| **Correct the client support matrix.** The [matrix](https://fluss.apache.org/docs/apis/client-support-matrix/) says the Python client cannot upsert a row, look one up, or create a database. It can do all three, and Rust and C++ have wrong rows too. Check each cell against the client code and its examples. | One docs PR, and a note of any cell you could not settle |
| **Walk the quickstart and fix what trips you.** Follow the [Flink quickstart](https://fluss.apache.org/docs/quickstart/flink/) from a clean checkout and write down every place you had to guess. Related: [#3038](https://github.com/apache/fluss/issues/3038), broken website anchors. | A docs PR, or issues precise enough for someone else to act on |

#### Track B — the Rust client and its bindings

The Rust client carries the features; Python, C++ and Elixir are bindings over
it. So a gap here is almost never missing logic, it is a call that nobody has
wrapped yet, and the binding already contains a dozen worked examples of how to
wrap one.

| Task | Done looks like |
|------|-----------------|
| **Wrap more of the admin API in Python or Elixir.** `Admin` on the Rust client has 45 methods. Python exposes 17 of them and Elixir 12, and 27 are missing from both — rebalancing and server tags, ACLs, cluster configs, KV snapshot metadata and leases, producer offsets, table statistics, `alter_table`, `alter_database`. Pick a group that hangs together, say the three ACL calls or the four rebalance ones, and wrap it end to end. Each call is independent of the others, so several people can work through this at once without colliding, and the seventeen that already exist show you the shape. Filed for Elixir as [#457](https://github.com/apache/fluss-rust/issues/457) and [#458](https://github.com/apache/fluss-rust/issues/458). | A PR wrapping one coherent group, with a test each and the matrix rows ticked |
| **Elixir: primary-key lookup** ([#462](https://github.com/apache/fluss-rust/issues/462)). A lookup fetches the current row for a primary key, which is the whole point of a PrimaryKey Table, and the Elixir binding cannot do it — there is no lookup NIF and no `kv` source file at all. The Rust core has `lookup` and `prefix_lookup` ready to call. This is the smallest way into the binding: one NIF, one Elixir module, one integration test, following `append_writer.rs` and `lib/fluss/append_writer.ex` exactly. | `Fluss.Lookuper`, or the equivalent on `Fluss.Table`, with an integration test |
| **Elixir: UpsertWriter with partial update** ([#461](https://github.com/apache/fluss-rust/issues/461)). The write half of the same hole. `AppendWriter` can only append to a Log Table; nothing in the binding can upsert a row into a PrimaryKey Table or delete one, and partial update — writing some columns and leaving the rest — needs the target column set passed through to the Rust writer. Bigger than the lookup task and built on the same pattern, so the two pair naturally. | `Fluss.UpsertWriter` with upsert, delete and partial update, plus tests |
| **Python: the prefix-lookup example.** A prefix lookup returns every row whose bucket key starts with a given prefix, so you can fetch all of a customer's orders without scanning. Rust and C++ each have an example page for it on the website; Python has none, although `lookup_by()` has worked for a while. Write the example next to `pk_table.py`, the docs page beside the Rust and C++ ones, and register it in `test_examples.py` so it runs in CI instead of rotting. | An example, a docs page and a passing test |
| **Introduce a `SchemaId` newtype** ([#528](https://github.com/apache/fluss-rust/issues/528)). Schema ids travel through the client as bare `i32` and `i16`, so nothing stops a table id, a bucket number or a plain count being passed where a schema id belongs, and the compiler will not say a word. Wrapping it in a newtype moves that class of mistake from runtime to compile time. Self-contained, mechanical, and a good way to read a lot of the client quickly. | The newtype, the call sites moved over, and the conversions where it meets the wire |

#### Track C — tiering and historical partitions

Tiering moves older data out of Fluss and into the lake. Historical partitions,
[FIP-28](https://github.com/apache/fluss/issues/3631), let you keep reading and
writing a partition after Fluss has expired it, by resolving the request against
the lake table instead.

| Task | Done looks like |
|------|-----------------|
| **[#3766](https://github.com/apache/fluss/issues/3766) — historical lookups can starve normal ones.** Both kinds share one semaphore in `LookupSender`, and a lake lookup is far slower than a local one, so a burst of historical requests can hold every permit. The spot is marked with a `TODO` in the code. | A `client.lookup.historical-inflight-ratio` option, the split, rounding for small limits, and a test showing normal lookups proceed while historical ones are slow |
| **[#2439](https://github.com/apache/fluss/issues/2439) — tiering is almost unmonitored.** `TieringMetrics` registers exactly one metric, bytes read, plus its rate. Nothing counts records, files, or anything on the write side. The counter-plus-meter pattern is there to copy. | Write-side and record or file metrics, with tests |

FIP-28 also has three deeper follow-ups still being designed —
[#4159](https://github.com/apache/fluss/issues/4159) on incremental cleanup of
local KV state, [#4161](https://github.com/apache/fluss/issues/4161) on
server-authoritative partition status, and
[#4166](https://github.com/apache/fluss/issues/4166) on rerouting writes already
in flight when a partition retires. Too large to finish in an afternoon, but if
one interests you, come and argue about the design. That is worth as much as a
patch.

#### Track D — stretch

| Task | Done looks like |
|------|-----------------|
| **Prototype a Go client.** Fluss has bindings for Python, C++ and Elixir, and each writes its own bridge — PyO3, `cxx::bridge`, rustler — so none leaves a C ABI that cgo can call. Paimon solved this by adding a `bindings/c` crate and then a Go package over it, two days apart, and the result is only tens of kilobytes of Go. Read [paimon-rust/bindings](https://github.com/apache/paimon-rust/tree/main/bindings) and do the same for Fluss. | A `bindings/c` skeleton and a Go package that connects and does one round-trip, plus a write-up of what the C ABI still needs. The write-up is the deliverable; the prototype is evidence |

#### Track E — bring your own

Using Fluss and something bothers you, or you want to see how the log and the KV
index fit together — come and say so. Half the value of a room like this is the
conversation.

### Resources

* [Contribution guide](https://fluss.apache.org/community/how-to-contribute/contribute-code/)
* [Building Fluss](https://fluss.apache.org/community/dev/building/)
* [Rust client development guide](https://github.com/apache/fluss/blob/main/fluss-rust/DEVELOPMENT.md)
* [Python binding development guide](https://github.com/apache/fluss/blob/main/fluss-rust/bindings/python/DEVELOPMENT.md)
* [Dev mailing list thread about the hackathon](https://lists.apache.org/thread/kh2fosjfd11bwprdph684zy0793sqxts)
* [Fluss on Slack](https://join.slack.com/t/apache-fluss/shared_invite/zt-473vgmvjr-cmIma~_iAA4cN02o5u2pDQ)

### Who's planning to attend

* Anton Borisov — Rust, Python, C++ and Elixir clients, server internals, lake tiering

If you are coming and can help mentor, mail dev@fluss.apache.org and I will add
you here.

---

* Back to the [Hackathon overview](hackathon.html)
* Questions? Join **#hackathon** on [apachecon.slack.com](http://s.apache.org/apachecon-slack)
