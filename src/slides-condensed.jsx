/* ──────────────────────────────────────────────────────────────
   Cuniform — CONDENSED DECK (8 pages)
   Standard-investor cut of the extensive 15-slide deck.

   ⚠ SCAFFOLD ONLY. Each slide below is a placeholder stub that
   renders its title, its source slide(s) from the extensive deck,
   and the key points to include. Replace the <Stub> body of each
   with the real, designed layout when we build the slides out.

   Framework globals (from primitives.jsx): Slide, ChromeBottom,
   Counter, SplitChars, useActiveSlideIndex, useSlideActive.
   ────────────────────────────────────────────────────────────── */

const TOTAL = 8;

/* ---- Shared scaffold placeholder body ---------------------------- */
function Stub({ title, from, points, accent = 'var(--amber)' }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      padding: '160px 120px 140px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40,
    }}>
      <div>
        <div className="mono" style={{ fontSize: 14, letterSpacing: '0.3em', color: accent, marginBottom: 20, opacity: 0.85 }}>
          SCAFFOLD · TO BUILD
        </div>
        <div className="serif" style={{ fontSize: 104, lineHeight: 0.98, letterSpacing: '-0.02em', fontStyle: 'italic', color: 'var(--bone)' }}>
          {title}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, maxWidth: 1400 }}>
        <div>
          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--bone-2)', opacity: 0.55, marginBottom: 16 }}>
            CONDENSED FROM
          </div>
          <div style={{ fontSize: 22, lineHeight: 1.5, color: 'var(--bone-2)', fontWeight: 300 }}>
            {from}
          </div>
        </div>
        <div>
          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--bone-2)', opacity: 0.55, marginBottom: 16 }}>
            KEY POINTS
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {points.map((p, i) => (
              <li key={i} style={{ fontSize: 20, lineHeight: 1.4, color: 'var(--bone)', display: 'flex', gap: 14 }}>
                <span style={{ color: accent }}>—</span>
                <span style={{ fontWeight: 300 }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ============ 01 · COVER ============ */
function CondCover({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="01 · Cover" label="Cover" tone="dark">
      <Stub
        title="Cover"
        from="Extensive slide 01 (Cover)"
        points={[
          'Cuniform wordmark + one-line positioning',
          '“Real-time code compliance for everyone who touches a building before it’s built.”',
          'Seed round · 2026 · founders line',
        ]}
      />
    </Slide>
  );
}

/* ============ 02 · PROBLEM ============ */
function CondProblem({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="02 · Problem" label="Problem" tone="paper">
      <Stub
        title="The Problem"
        from="Extensive slides 02–04 (Thesis · Industry · Rework Loop), merged"
        points={[
          'AEC firms sell time; compliance rework is the biggest tax on it',
          'Industry figures: $2.1T spend · 12mo pre-con · $10–15K consultant · 3–4× loops',
          'The 6-step rework loop — code checked only after design is done',
        ]}
        accent="var(--amber-deep)"
      />
    </Slide>
  );
}

/* ============ 03 · SOLUTION ============ */
function CondSolution({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="03 · Solution" label="Solution" tone="paper">
      <Stub
        title="The Solution"
        from="Extensive slide 06 (Solution / Product)"
        points={[
          '“Check code while you design. Not after.”',
          'Inline · Linked (exact IBC/IECC clause) · Verifiable (2nd model)',
          'Product screenshot — live compliance panel inside Revit',
        ]}
        accent="var(--amber-deep)"
      />
    </Slide>
  );
}

/* ============ 04 · WHY NOW + VALIDATION ============ */
function CondWhyNow({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="04 · Why Now" label="Why Now" tone="dark">
      <Stub
        title="Why Now"
        from="Extensive slides 05 + 07 (Validation + Why Now), merged"
        points={[
          'Validation: 72% of 40+ architects want it, 48% “very useful”',
          'Three forces: reasoning LLMs · open BIM APIs · permit gridlock',
          'The one blocker — accuracy — engineered in from day one',
        ]}
      />
    </Slide>
  );
}

/* ============ 05 · MARKET ============ */
function CondMarket({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="05 · Market" label="Market" tone="dark">
      <Stub
        title="Market"
        from="Extensive slide 09 (Market)"
        points={[
          'SOM $270M wedge → SAM $580M → TAM $11.7B',
          'Beachhead: 4,500 US mid-market firms · $59/seat/mo',
          '20× expansion path (engineers, GCs) without changing the product',
        ]}
      />
    </Slide>
  );
}

/* ============ 06 · TRACTION ============ */
function CondTraction({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="06 · Traction" label="Traction" tone="dark">
      <Stub
        title="Traction"
        from="Extensive slide 11 (Design Partners)"
        points={[
          'RAMSA + Hart Howerton — MOUs signed',
          'In conversation: Selldorf, Arquitectonica, FXCollaborative, Notre Dame',
          '60 waitlist signups · MVP complete, 30 days to GA',
        ]}
      />
    </Slide>
  );
}

/* ============ 07 · TEAM ============ */
function CondTeam({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="07 · Team" label="Team" tone="dark">
      <Stub
        title="Team"
        from="Extensive slide 12 (Team)"
        points={[
          'Joe Yatco — CEO (architect, ex-RAMSA)',
          'Kyle Gallatin — CTO (ML, ex-Pfizer/Etsy/Handshake)',
          'Arnav Somani — CDO (design, ex-Visa/Nike/Olympics)',
        ]}
      />
    </Slide>
  );
}

/* ============ 08 · THE ASK ============ */
function CondAsk({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="08 · The Ask" label="The Ask" tone="dark">
      <Stub
        title="The Ask"
        from="Extensive slide 14 (The Ask) + close"
        points={[
          '$2M SAFE · $10M post-money',
          'Use of funds: 55% eng · 25% GTM · 12% pilots · 8% G&A',
          'Gets to 25 firms · $500K ARR · first city pilot — contact / close',
        ]}
      />
    </Slide>
  );
}

/* ---- Export the 8 condensed slides, in order --------------------- */
window.CONDENSED_SLIDES = [
  { key: 'cover',     C: CondCover },
  { key: 'problem',   C: CondProblem },
  { key: 'solution',  C: CondSolution },
  { key: 'whynow',    C: CondWhyNow },
  { key: 'market',    C: CondMarket },
  { key: 'traction',  C: CondTraction },
  { key: 'team',      C: CondTeam },
  { key: 'ask',       C: CondAsk },
];

Object.assign(window, {
  TOTAL,
  CondCover, CondProblem, CondSolution, CondWhyNow,
  CondMarket, CondTraction, CondTeam, CondAsk,
});
