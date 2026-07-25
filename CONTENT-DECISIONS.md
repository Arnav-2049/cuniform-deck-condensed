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

- **M3** — design-partner beta hardened; RAMSA + Hart Howerton on live projects
- **M6** — GA launch; first paid conversions (~$50–100K ARR)
- **M12** — 8–12 paying firms (~$250–400K ARR); first firm-wide expansion
- **M18** — 20–25 firms · **~$500K ARR (base case, what the raise buys) / $1M (stretch → Series A trigger)**

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
| O3 | **Market slide seat model** — $59/seat, 30 seats/firm, 4,500 mid-market firms, 820K US BIM seats | **All confirmed placeholders. Rebuild from scratch.** See §4. |
| O4 | Joe Yatco "80+ projects"; Arnav Somani "1M+ customers, Visa/Nike/IOC" | Unverified — founder to confirm. |
| O5 | Portrait photos | Team slide still uses initials placeholders. |

---

## 4 · THE MARKET SLIDE PROBLEM (to rebuild)

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
