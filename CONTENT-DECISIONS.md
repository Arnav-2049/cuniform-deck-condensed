# Cuniform Deck — Content Decisions & Source Log

Living record of every content decision, its source, and what's still open.
Audience context: **pitching Black Pearl Investment Group as a sole check.**
Company status: **bootstrapped · pre-revenue · design-partner-only beta · MOUs/LOIs, no paid seats yet.**

Last updated: 2026-07-25

---

## 1 · LOCKED DECISIONS

### The raise
| Item | Decision | Rationale |
|---|---|---|
| Round name | **Seed** | Avoids Series-A-level scrutiny you can't yet satisfy pre-revenue. Fixes the footer that read "SERIES A 2026". |
| Amount | **$1.5M** | Less dilution (~15% at $10M post) than the original $2M ask. |
| Valuation | **$10M post-money SAFE** | Below 2025 median seed (~$16M pre / $24M post median; AI ~$17.9M pre) — deliberately founder-friendly, a negotiating anchor with a sole investor. |
| Runway | **18 months** | AEC sales cycles run 6–9 months. A 12-month runway means re-raising before the first pilots convert. |

### Burn model (replaces placeholder roadmap figures)
$1.5M / 18 months ≈ **$83K/mo average**, ramping with hires (3 founders + 2 senior engineers):

| Phase | Team | Burn/mo | Period |
|---|---|---|---|
| M1–3 | 3 founders + 1 eng | ~$55K | $165K |
| M4–6 | + 2nd eng (GA push) | ~$78K | $234K |
| M7–12 | Full team + GTM | ~$88K | $528K |
| M13–18 | Full + expansion | ~$92K | $552K |
| **Total** | | | **~$1.48M** (+ buffer) |

Use of funds (percentages unchanged): Engineering 55% ($825K) · GTM 25% ($375K) · Pilots 12% ($180K) · G&A 8% ($120K).

### Milestones — staged, honest from a pre-revenue start
Replaces the old single "$1M ARR" headline, which was not credible from 2 non-binding MOUs.
Reframed around **few, large logos** (see §6) rather than many mid-market ones.

- **M3** — design-partner beta hardened; RAMSA + Hart Howerton on live projects
- **M6** — GA launch; free tier live; first paid conversions (~$50–100K ARR)
- **M12** — 5–8 paying firms (~$250–400K ARR); first firm-wide expansion
- **M18** — **8–12 paying firms · ~$500K ARR (base) / $1M (stretch → Series A trigger)**, reported alongside **free-tier signups as a separate top-of-funnel metric**

Land-and-expand math: a firm lands at one studio (~20–40 seats ≈ $40–60K ACV) and expands
firm-wide over 12–18 months (~$215K at RAMSA scale). 8 firms × $60K blended = $500K;
12 firms with 2–3 expanded firm-wide = $1M. In a freemium motion, showing the funnel
de-risks the pitch — if ARR lags, signup growth still evidences demand.

### Numbers
| Claim | Decision | Source |
|---|---|---|
| Code consultant fee | **$2,500–$15,000 per project** | Independent (50Pros, industry guides) + internal BIM API research doc. Both agree. The old "$10–15K" was top-of-range / large projects only. |
| Permit rejection rate | **~40% of US permits rejected on first submission** (~1.4M permits/yr) — **new Problem-slide headline** | Industry analysis. More visceral and externally sourced. |
| Cost of one rejection | **$20K+, footnoted as conservative** (redraw labor + fees only, before delay carry of $50–200K/mo) | CII IR-153 / NIST GCR 04-867 (rework = 4–12% of project value); WA builders avg $31K; carrying cost 1–3% of project cost per month of delay. Understating is a strong diligence position. |
| TAM anchor | **Building code compliance market: $8.16B (2023) → $14.73B (2030), 8.8% CAGR** — replaces "$11.7B global AEC software" | Coherent Market Insights. Cite by name (other firms range $7.5B–$15.4B). |
| Competitor: UpCodes | **$7.6M** | PitchBook. The alternate slide's "$33.5M" is wrong — delete it. |
| Competitor: CodeComply.Ai | **$2M seed** (Govo Venture Partners) | Refresh Miami. Exact. |
| Competitor: PermitFlow | **$91M raised** ($54M Series B, Dec 2025) — **add as adjacent + market validation** | TechCrunch / BusinessWire. Frame: permit-submission logistics, not in-canvas code checking. "$90M+ flowing into permitting — none of it checks code inside the model as you draw." |
| Kyle Gallatin's book | **"Machine Learning with Python Cookbook"** (2nd ed., w/ Chris Albon); also O'Reilly report "The Framework for ML Governance" | The deck's "Machine Learning in Production" is a different, older O'Reilly title. |
| "Fremium" | → **Freemium** | Typo. |
| US construction spend | **$2.1T** — keep | US Census: $2.16T (2025), $2.19T (2024). ✓ |
| 12-month pre-construction | **Keep** | Internal research doc confirms ~12 mo schematic design → CDs → bidding. ✓ |
| Permit review 4–8 weeks | **Keep** | Internal doc: 4–12 weeks for large residential/commercial. ✓ |

### Deck structure
- Condensed deck is now **9 pages**, not 8 — competition earns its own slide (given PermitFlow).

---

## 2 · WHY THE TAM ANCHOR CHANGED

Old: "$11.7B global AEC software (Mordor)."
New: **"$8.16B building code compliance market → $14.73B by 2030."**

Reasoning:
1. **It's the budget we displace.** Code compliance market breaks into plan review (~$2B), inspection (~$1.5B), **consulting (~$0.7B)**, compliance software (~$0.6B). The consulting line is literally the spend Cuniform replaces. AEC-software TAM counts rendering, structural analysis, PM — spend we'll never touch.
2. **It makes the pricing story coherent.** "Firms pay $2.5–15K per project to a consultant — a $0.7B/yr pool. We do it for $59/seat/mo, continuously."
3. **The smaller number costs nothing.** No seed investor passes on an $8B market growing 8.8%. Many discount a founder claiming a category they don't serve. At seed, credibility of the wedge >> size of TAM.
4. **Built-in expansion path:** displace consulting ($0.7B) → own compliance software ($0.6B) → expand into plan review + inspection ($3.5B) with the city product.

---

## 3 · OPEN ITEMS

| # | Item | Status |
|---|---|---|
| O1 | **Survey data** — deck says 72%/48% (n=40+); founder says actual is **~80%** | **Placeholder "80%"** pending the form. Recompute exact n, % breakdowns, and top objections when attached. |
| O2 | **IBC page count** — deck says 1,200; 2024 IBC is ~750 (~1,000+ with local amendments) | **Parked** — founder reworking this content separately. |
| O3 | ~~Market slide seat model~~ | **RESOLVED — see §6.** New pricing (freemium/$99/enterprise), large-firm beachhead, and a fully reconciled model. The old "4,500 mid-market firms" and "820K US BIM seats" are retired. |
| O4 | Joe Yatco "80+ projects"; Arnav Somani "1M+ customers, Visa/Nike/IOC" | Unverified — founder to confirm. |
| O5 | Portrait photos | Team slide still uses initials placeholders. |

---

## 6 · PRICING & BEACHHEAD (rebuilt — supersedes §4's open item O3)

### Pricing: freemium + credits + enterprise
The old flat "$59/seat/mo" was a placeholder **and underpriced**. Comparables:

| Comparable | Price/seat/mo |
|---|---|
| UpCodes (code *search* only) | $33–39 |
| **Third-party Revit plugins** | **$80–118** (€74.90 fixed / €109.90 premium) |
| Revit itself | ~$250 ($2,915/yr) |
| Archicad / Vectorworks | $234 / $128 |

**Decided model:**

| Tier | Price | Credits | Purpose |
|---|---|---|---|
| **Free** | $0 | ~10 checks/mo, 1 project, watermarked reports | Land the individual architect inside big firms |
| **Pro** | **$99/seat/mo** | ~200 checks/mo, unlimited projects, full citations + export | Small/mid firms, teams |
| **Enterprise** | **Custom (~$129/seat effective)** | Pooled/unlimited, SSO, audit logs, local amendments, support | Large firms — the beachhead |

**Credit unit = one compliance run against a model.** Maps directly to inference cost, so
gross margin stays honest as usage scales; easy for architects to reason about.

Value check: firms pay **$2,500–15,000 per project** for code review. A 30-seat firm at $99
pays $35.6K/yr — less than 3 mid-size projects' consultant spend, for unlimited projects.

### Beachhead: LARGE firms (50+ employees), 100+ segment first
**Both design partners are ~300-person firms** — RAMSA (~300 staff, $82.7M design revenue,
ENR Top 500) and Hart Howerton (~255–300, ENR Top 225). The deck's stated "15–100 person
mid-market" ICP contradicted its own traction.

AIA distribution (~19,000 member-owned firms) is top-heavy:

| Firm size | % of firms | ≈ count |
|---|---|---|
| <5 employees | 60% | ~11,400 |
| 5–14 | ~20% | ~3,800 |
| 15–49 | ~13% | ~2,470 |
| **50+** | **6.5%** | **~1,235** |
| (of which 100+) | 2.5% | ~475 |

Decisive fact: **firms with 50+ employees are 6.5% of firms but over half of all
private-practice employment and nearly half of industry revenue.**

Rationale for going large:
1. RAMSA alone ≈ 150 technical seats ≈ **$215K ARR from one logo**
2. $500K M18 target needs **~3–5 large firms**, not 25 mid-market ones
3. Fewer, bigger deals = smaller sales team = **lower burn** (critical on $1.5M)
4. Large firms have **BIM managers** — one champion drives firm-wide rollout
5. They do the complex work where consultants charge **$10–50K/project** — strongest ROI story
6. **Two are already signed**

**Freemium resolves the enterprise-sales-cycle objection:** individual architects adopt free
inside a big firm, prove it on live work, and pull us into the enterprise conversation.
Bottom-up adoption shortcuts top-down procurement.

**Positioning decision:** large firms are the stated beachhead; **mid-market stays visible as
the explicit Phase 2 volume play** (not removed from the deck).

### The rebuilt market model

| Segment | Firms | Seats/firm | Price | Value |
|---|---|---|---|---|
| 100+ employees | ~475 | ~100 | $129 | $73.5M |
| 50–99 | ~760 | ~35 | $129 | $41.2M |
| **Beachhead (SOM)** | **~1,235** | | | **~$115M** |
| 15–49 (Phase 2) | ~2,470 | ~15 | $99 | $44M |
| 5–14 (Phase 2) | ~3,800 | ~7 | $99 | $32M |
| **US architecture (SAM)** | | | | **~$190M** |
| **TAM** | Global building code compliance | | | **$8.16B → $14.73B** |

**Seats/firm basis:** derived from RAMSA — ~300 staff → ~150 technical seats (0.5 ratio,
excluding admin/support/non-modeling principals), scaled down by segment. Labeled as a
modeled assumption, not a sourced fact.

This replaces the old slide's unsupportable $270M SOM and the arithmetically wrong
"$27M ARR at 10% penetration."

---

## 4 · THE MARKET SLIDE PROBLEM (now rebuilt in §6 — kept for the record)

The original slide does not reconcile with itself:

- Claimed **SOM $270M**, but bottom-up: 4,500 firms × 30 seats × $708/yr = **$95.6M at 100% penetration**. A "serviceable obtainable" number cannot exceed the beachhead it derives from.
- Claimed **"$27M ARR at 10% penetration"**, but 450 firms × 30 × $708 = **$9.6M**. Off by ~2.8× (looks like "10% of the $270M SOM," which double-counts).
- **820K US BIM seats** is the load-bearing input for the $580M SAM but is unverified. Revit's installed base is ~300K *worldwide* per older Autodesk data; "BIM seats" is broader, but 820K US-only needs a source.

**Next step:** rebuild the whole slide from one consistent seat model, anchored on the code compliance TAM above, with every input sourced or explicitly labeled an assumption.

---

## 5 · SOURCES

- US Census — construction spending: https://www.census.gov/construction/c30/current/index.html
- Coherent Market Insights — building code compliance market ($8.16B → $14.73B, 8.8% CAGR)
- PitchBook — UpCodes ($7.64M) · Tracxn ($4.15M over 3 rounds; sources vary)
- Refresh Miami — CodeComply.Ai $2M seed, Govo Venture Partners
- TechCrunch / BusinessWire — PermitFlow $31M Series A (2024), $54M Series B (Dec 2025), $91M total
- Carta / 2025 seed benchmarks — median seed ~$16M pre / ~$24M post; AI ~$17.9M pre
- CII IR-153, NIST GCR 04-867 — construction rework = 4–12% of project value
- Mordor Intelligence — AEC software $11.11B (2025) [superseded as TAM anchor]
- O'Reilly / Amazon — Kyle Gallatin, "Machine Learning with Python Cookbook" (2nd ed.)
- Internal — `BIM API_DRAFT Market Research_20250102.pdf` (consultant fee tiers, review timelines, code compliance market breakdown)

- AIA Firm Survey / OpenAsset — US architecture firm size distribution (~19,000 member-owned firms; 60% <5 employees; 6.5% 50+; 2.5% 100+)
- ENR Top 500 / PitchBook / RocketReach — RAMSA ~300 staff, $82.7M design revenue (2024); Hart Howerton ~255-300 staff
- GetApp / up.codes — UpCodes pricing $33-39/seat/mo
- Autodesk / Revizto — Revit $2,915/yr per named user; third-party Revit plugins EUR 74.90-109.90/mo

---

## 7 · ROUND 2 — PRODUCT, LEGAL, LIABILITY, MOMENTUM

### Product truth
| Item | Reality | Deck treatment |
|---|---|---|
| Integrations | **Revit only** today (deck previously claimed Revit + AutoCAD + Rhino) | State Revit only. Focus is a strength at seed: "starts where the work happens." |
| Code coverage | **Full IBC claimed, incl. structural, MEP, energy** (founder's call, stated plainly) | Stated plainly per founder decision. **Backup prepared** — see risk note below. |
| Stage | Design-partner beta, in active testing on live work | Describe the activity, **omit the tester count**. |

**⚠️ Risk note (flagged, founder accepted):** "Full IBC incl. structural/MEP/energy" alongside
"beta / small tester group" is where credibility strain concentrates. The likely attack is not
"can the AI read code?" but **"what happens when the Revit model doesn't contain the data the
check requires?"** (MEP often lives in linked models; envelope/R-values often unmodeled in
design phases). Recommended fallback framing if probed: *"The engine is code-agnostic — it
reasons over any ingested corpus. Coverage depth follows model completeness."*

**Backup materials to prepare:** (a) per-domain confidence levels appendix, (b) live demo on a real model.

### Legal — ICC copyright exposure
- **ICC v. UpCodes (2017–2022):** ICC sued over redistribution of I-Codes. UpCodes largely won on
  **fair use**; 2nd Circuit affirmed in part (2022). ICC then filed a **second suit for false
  advertising**, targeting UpCodes' claim that customers gain a *"complete understanding"* of code.
- **Cuniform's position:** relying on the fair-use precedent.
- **Nuance to be aware of:** the fair-use win covered *displaying codes adopted into law*. Using code
  text as reference data for an AI system is arguably *more* transformative (helps) but **untested**.
- **The live risk is the second suit, not the first:** ICC has demonstrated it will attack
  **completeness/accuracy marketing claims**. This directly constrains how Cuniform words its
  accuracy and coverage claims in-product and in-market.

### Liability — structurally favorable
1. **Non-delegable duty.** Under US/UK/CA/EU licensing law, the licensed professional is responsible
   for everything submitted under their seal; this **cannot** be transferred to software or AI.
   "If an AI tool produces an error that leads to a claim, the design professional bears the
   liability, not the AI vendor." Standard practice: clickthrough terms disclaiming output liability.
2. **Emerging standard of care validates the positioning.** Professionals are expected to *"verify AI
   output as they would verify a junior employee's work."* Cuniform's **"AI second-reader"** framing
   maps precisely onto this. Use that language.
3. **E&O + AI landscape — decided: use SOFTLY.**
   - Headwind: Verisk standardized AI exclusion forms **CG 40 47 / CG 40 48, effective Jan 1 2026**,
     defining generative AI broadly ("any machine-based learning system trained on data and capable
     of creating content — text, images, audio, video, or **code**"). **Berkley** has an absolute AI
     exclusion; **Philadelphia Insurance** and **Hamilton Select** exclude AI claims; **AIG, Great
     American, WR Berkley** filing for approval.
   - Opportunity: most carriers are **underwriting**, not excluding. Renewal forms ask *who reviews
     AI output* and *what documentation exists of that review* — **which is literally the product**.
   - Unused-but-available positioning: *"We don't create content. We create evidence."* Cuniform
     verifies rather than generates, which may sit outside the Verisk definition.
   - **Caveat:** whether Cuniform falls inside/outside the exclusion is a **legal question**. Get a
     broker/counsel opinion before making it a headline claim. Decision for now: **mention the audit
     trail as supporting E&O compliance; make no claims about exclusion status.**
- **AIA publishes an "AI Firm Toolkit"** and an A&E AI standard-of-care framework exists — worth
  referencing to signal alignment with professional norms.

### Moat
**Decided framing: Autodesk is a partner/acquirer, not a competitor.** They monetize the platform and
acquire point solutions; being the best plug-in is both the strategy and the exit path.
(Available to reinforce: jurisdictional depth of local amendments compounds slowly and unglamorously;
accepted/dismissed flag data compounds with usage.)

### Traction — what is actually true
| Claim | Reality |
|---|---|
| RAMSA / Hart Howerton | **Design partners first, paid later. VERBAL intent to convert** — not written. Product being curated for them. Do **not** imply contracted revenue. |
| Waitlist | **60 individuals** |
| Usage | In active testing on live work — **state activity, not the count** |
| Elapsed | **18 months** (idea through full build), **bootstrapped, zero outside capital** |

### Team
- **Joe (CEO) and Arnav (CDO) full-time; Kyle (CTO) part-time → FULL-TIME ON CLOSE.**
- This is the single most important fact in the momentum narrative. State the transition explicitly.

### Momentum — the core narrative problem, and the reframe
**Founder's stated #1 concern: Black Pearl pushing back on momentum.** The raw arithmetic
(18 months · $0 revenue · small tester group · verbal intent · part-time CTO) reads as slow.

**Decided reframe — placed on the TRACTION slide (not the cover):**

> "In 18 months, on **zero outside capital**, with our CTO working nights and weekends, we built a
> working full-IBC compliance engine inside Revit and signed two ENR Top-500 firms as design
> partners. That's what we did with nothing. This raise is what we do with something."

This inverts each weakness: 18 months + $0 raised → **capital efficiency**; part-time CTO → **proof
of constrained achievement + the raise is the unlock**; small beta → **deliberate design-partner-led
development**. Investors fund **slope, not position** — this framing makes the slope the story.
Kyle going full-time on close is the concrete inflection point that makes it credible.
