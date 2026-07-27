# Cuniform — Objection Prep

Prepared answers for the hardest questions Black Pearl can ask.
Rehearse these until they're natural. The goal is a calm, structural answer — not a defensive one.

---

## 1. "What's your accuracy rate?"

**The trap:** any single number invites "how did you measure that?" — and you don't yet have a
methodology to defend. Any hedge sounds evasive on the industry's #1 objection.

**The answer — three moves, in order:**

> **(a) Name the real state of the field.** "There is no accuracy standard for automated code
> compliance. Not for us, not for UpCodes, not for anyone in this category. Nobody publishes one,
> because nobody has defined what 'correct' means yet."
>
> **(b) Claim the category.** "So we're building it. We benchmark against **already-permitted
> projects** — where ground truth exists, because the jurisdiction already ruled. That's the only
> honest measurement in this space, and we intend to be the company that defines it. The firm that
> sets the benchmark sets the terms competitors get measured on."
>
> **(c) Give the architecture, since the number isn't ready.** "What we can tell you today is how
> correctness is *enforced*: every flag is clause-linked to a specific code section, and cross-checked
> before it surfaces. We tune for **zero false negatives on life-safety**, and accept false positives,
> because the cost asymmetry is enormous — a missed egress violation is a rejection or worse; a false
> flag costs an architect thirty seconds to dismiss."

**Do not:** invent a percentage. **Do:** commit to a date for publishing the first benchmark.

---

## 2. "Why hasn't this been done before?"

**The trap:** if the answer is only "nobody thought of it," the investor concludes someone did and it
didn't work.

**The answer:**

> "It has been *attempted* — from the wrong side. UpCodes made the code searchable in 2017 and spent
> years litigating with ICC just for the right to distribute the text. CodeComply reviews PDFs after
> design. PermitFlow, with $91M, automates the paperwork. Everyone is downstream of the drawing.
>
> Three things had to be true simultaneously, and they only converged recently:
> 1. **Reasoning models** good enough to handle conditional regulatory logic *with citations* — a demo
>    three years ago, production-grade now.
> 2. **BIM APIs** stable enough to read model geometry reliably inside the design tool.
> 3. **Permit gridlock** bad enough that firms will change workflow to fix it — backlogs stretched to
>    8–12 weeks post-2023.
>
> We're not early to the problem. We're on time for the solution."

---

## 3. "18 months and no revenue?" *(the founder's own stated worry)*

**The trap:** defending the timeline. Never defend it — reframe to slope.

**The answer:**

> "18 months, **zero outside capital**, and a CTO building nights and weekends. In that time we
> shipped a working full-IBC engine inside Revit and signed two ENR Top-500 firms — RAMSA and Hart
> Howerton — as design partners.
>
> We deliberately didn't sell. We curated the product with the firms whose names make the next fifty
> sales easier. Selling a half-built compliance tool to a firm that stakes its license on accuracy is
> how you get one customer and no second one.
>
> This raise is the first time all three of us are full-time. **You're not funding a restart. You're
> funding the removal of the constraint that's been throttling us for 18 months.**"

**Supporting facts to have ready:** capital efficiency (built on $0); Kyle full-time on close;
design-partner depth over user breadth; 60-person waitlist accumulated with no marketing spend.

---

## 4. "What if you're wrong and a building fails?"

**The trap:** getting defensive, or over-promising accuracy. Both lose.

**The answer:**

> "Two parts — the legal one and the real one.
>
> **Legally:** liability sits with the architect of record. Licensing law creates a **non-delegable
> duty** — responsibility for anything submitted under a professional seal cannot transfer to
> software, a subcontractor, or an AI. That's not our terms of service talking; that's how the
> profession is structured in the US, UK, Canada, and the EU.
>
> **But that's not the honest answer, so here's the real one:** we're a second reader, not a
> replacement. Compare us to the actual status quo, not to perfection. Today an architect checks code
> against memory while drawing, and gets a consultant's markup back weeks later — if the budget
> covered a consultant at all. **~40% of permits are rejected on first submission.** That's the
> baseline we're measured against.
>
> We add a check that didn't previously exist, at the moment it's cheapest to act on, with a citation
> trail showing exactly what was flagged and what the professional decided. The failure mode we're
> replacing isn't 'perfect human.' It's **'no check until it's too late.'**"

**Bonus, if the conversation goes toward insurance:** E&O carriers are now underwriting on AI use —
asking who reviews AI output and what documentation exists of that review. Cuniform's audit trail is
exactly that documentation. *(Keep this soft until counsel confirms — see CONTENT-DECISIONS §7.)*

---

## 5. Likely follow-ons — short answers

| Question | Answer |
|---|---|
| **"Why won't Autodesk build this?"** | They monetize the platform and acquire point solutions. Being the best plug-in is both the strategy and the exit. The hard part isn't the AI — it's jurisdictional depth across thousands of local amendments, which compounds slowly and unglamorously. |
| **"What about UpCodes?"** | They own code *search* — reading the rule book. They've never seen the model. We're in the canvas, checking geometry as it's drawn. Different product, and they spent years fighting ICC for the right to publish text. |
| **"PermitFlow raised $91M."** | Validates the category and confirms nobody's in the canvas. They automate *submission* — the paperwork after the drawing is done. $90M+ is flowing into permitting, and none of it checks code while you design. |
| **"Isn't the code data an ICC legal problem?"** | ICC sued UpCodes; UpCodes largely won on fair use, affirmed in part by the 2nd Circuit in 2022. We operate on adopted law with that precedent behind us. Worth knowing ICC's follow-on suit targeted *completeness marketing claims*, which is why we're precise about what we claim. |
| **"Only Revit?"** | Revit is where the work happens for our target firms. One integration done deeply beats three done shallowly — especially when accuracy is the product. |
| **"What stops a firm building this internally?"** | Some will try. The corpus and the jurisdictional maintenance are the moat — codes change on cycles, local amendments constantly. That's a product company's job, not a side project for a design firm. |
| **"Who's your first sales hire?"** | Founder-led through the design-partner phase — Joe is an architect selling to architects. GTM hire funded post-close, advised by Haakon Sorenson *(Procore)*. |

---

## 6. Questions to ask THEM

Turn the meeting into a conversation — and diligence a sole-check investor back.

- What does your ideal involvement look like post-close — board seat, observer, hands-off?
- Have you invested in AEC or vertical SaaS before? What did you learn?
- What would you need to see at 12 months to lead the next round yourselves?
- Who else in your network would be a useful design partner or first customer?
- What's your typical decision timeline?
