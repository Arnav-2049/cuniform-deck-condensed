/* ──────────────────────────────────────────────────────────────
   Cuniform — CONDENSED DECK (9 pages)

   BUILT FOR EMAIL, NOT PRESENTATION.
   J.R. Chantengco reads this alone, with a low attention span.
   Design rule: the HEADLINES ALONE must carry the whole argument.
   If he skims only the big type, he still gets the pitch.

   Copy is locked in SLIDE-COPY.md (draft 4). Do not edit copy here
   without updating that file — it is the source of truth.
   ────────────────────────────────────────────────────────────── */

const TOTAL = 9;

/* ---------- small shared bits ---------- */

function SourceTag({ children, dark = true, style }) {
  return (
    <div
      className="mono"
      style={{
        fontSize: 13,
        letterSpacing: '0.18em',
        color: dark ? 'rgba(242,237,228,0.38)' : 'rgba(10,10,10,0.38)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Logomark({ size = 28 }) {
  return (
    <img
      src="assets/Logomark.svg"
      width={size}
      height={size}
      alt="Cuniform"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}

/* ============ 01 · COVER ============ */
function CondCover({ index }) {
  const activeIdx = useActiveSlideIndex();
  const ref = useRef(null);
  const isActive = activeIdx === index;

  useEffect(() => {
    if (!ref.current) return;
    if (isActive) {
      ref.current.removeAttribute('data-active');
      void ref.current.offsetWidth;
      requestAnimationFrame(() => {
        if (ref.current && activeIdx === index) ref.current.setAttribute('data-active', '');
      });
    } else {
      ref.current.removeAttribute('data-active');
    }
  }, [isActive, activeIdx, index]);

  return (
    <section ref={ref} className="slide dark" data-label="Cover">
      <div style={{ position: 'absolute', top: 56, left: 120, right: 120, display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.24em', '--reveal-delay': '100ms' }}>
          <span style={{ color: 'var(--amber)' }}>●</span>&nbsp;&nbsp;CUNIFORM
        </div>
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.24em', opacity: 0.6, '--reveal-delay': '100ms' }}>
          CONFIDENTIAL
        </div>
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 56, padding: '0 120px',
      }}>
        <span data-reveal style={{ display: 'inline-block', '--reveal-delay': '200ms', '--reveal-y': '60px' }}>
          <img src="assets/Cuniform.svg" alt="Cuniform" style={{ width: 1180, height: 'auto', display: 'block' }} />
        </span>

        <div className="serif" data-reveal style={{
          fontSize: 76, lineHeight: 1.08, letterSpacing: '-0.02em',
          textAlign: 'center', color: 'var(--bone)',
          '--reveal-delay': '700ms',
        }}>
          Check the code while you draw.<br />
          <span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>Not after you submit.</span>
        </div>

        <div data-reveal style={{
          fontSize: 30, lineHeight: 1.5, fontWeight: 300, textAlign: 'center',
          color: 'var(--bone-2)', maxWidth: 1100, '--reveal-delay': '1100ms',
        }}>
          A code compliance engine that runs inside Revit — flagging violations
          with cited clauses <em style={{ fontStyle: 'italic' }}>while the building is being drawn.</em>
        </div>

        <div className="mono" data-reveal style={{
          fontSize: 15, letterSpacing: '0.3em', color: 'var(--amber)', marginTop: 8,
          '--reveal-delay': '1400ms',
        }}>
          —&nbsp;&nbsp;SEED · 2026&nbsp;&nbsp;—
        </div>
      </div>

      <div className="cover-footer">
        <span>Yatco · Gallatin · Somani</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
          <Logomark size={20} />&nbsp;Cuniform Tech™
        </span>
      </div>
      <div className="grain" />
    </section>
  );
}

/* ============ 02 · PROBLEM ============ */
function CondProblem({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  return (
    <Slide index={index} total={TOTAL} section="01 · The Problem" label="Problem" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column' }}>
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 26 }}>
          THE PROBLEM
        </div>

        <div className="serif" style={{ fontSize: 150, lineHeight: 0.92, letterSpacing: '-0.03em' }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>
            $<Counter to={700} duration={1300} delay={300} active={isActive} format={(n) => Math.round(n)} />M a year
          </span>
        </div>

        <div className="serif" data-reveal style={{
          fontSize: 60, lineHeight: 1.15, fontStyle: 'italic',
          color: 'var(--bone-2)', marginTop: 18, maxWidth: 1500,
          '--reveal-delay': '900ms',
        }}>
          paid to humans to check code by hand.
        </div>

        <div className="serif" data-reveal style={{
          fontSize: 64, lineHeight: 1.15, marginTop: 44, maxWidth: 1500,
          '--reveal-delay': '1300ms',
        }}>
          It still takes <span style={{ color: 'var(--amber)' }}>12 months</span> to get to permit.
          <br />And it still comes back.
        </div>

        {/* ── Rejection math, drawn as a fork: one rejection, two very
               different costs. The project's carry resolves last. ── */}
        <div style={{
          marginTop: 'auto', paddingTop: 36,
          borderTop: '1px solid rgba(242,237,228,0.18)',
          display: 'grid', gridTemplateColumns: 'auto 200px 1fr', alignItems: 'center',
        }}>
          <div data-reveal style={{ '--reveal-delay': '1700ms' }}>
            <div className="mono" style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--bone-2)', opacity: 0.7, marginBottom: 14 }}>
              EVERY REJECTION ADDS
            </div>
            <div className="serif" style={{ fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em' }}>4–8 weeks</div>
          </div>

          {/* drawn fork: rejection splits into two costs */}
          <svg width="200" height="180" viewBox="0 0 200 180" fill="none" style={{ justifySelf: 'center' }}>
            <path data-draw style={{ '--draw-len': '260', '--reveal-delay': '2000ms' }}
              d="M 8 96 L 66 96 C 112 96 112 46 158 46 L 182 46"
              stroke="rgba(242,237,228,0.35)" strokeWidth="1.5" />
            <path data-draw style={{ '--draw-len': '260', '--reveal-delay': '2200ms' }}
              d="M 8 96 L 66 96 C 112 96 112 146 158 146 L 182 146"
              stroke="var(--amber)" strokeWidth="2" />
            <polyline data-reveal style={{ '--reveal-delay': '2350ms' }}
              points="175,40 183,46 175,52" stroke="rgba(242,237,228,0.35)" strokeWidth="1.5" fill="none" />
            <polyline data-reveal style={{ '--reveal-delay': '2550ms' }}
              points="175,140 183,146 175,152" stroke="var(--amber)" strokeWidth="2" fill="none" />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, paddingLeft: 32 }}>
            <div data-reveal style={{ '--reveal-delay': '2350ms', display: 'flex', alignItems: 'baseline', gap: 28 }}>
              <div className="mono" style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--bone-2)', opacity: 0.7, width: 290, flexShrink: 0 }}>
                COSTS THE ARCHITECT
              </div>
              <div className="serif" style={{ fontSize: 40, fontStyle: 'italic', color: 'var(--bone-2)', opacity: 0.75 }}>
                a few redlines
              </div>
            </div>
            <div data-reveal style={{ '--reveal-delay': '2600ms', display: 'flex', alignItems: 'baseline', gap: 28 }}>
              <div className="mono" style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--amber)', width: 290, flexShrink: 0 }}>
                COSTS THE PROJECT
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, flexWrap: 'wrap' }}>
                <span className="serif" style={{ fontSize: 62, lineHeight: 1, color: 'var(--amber)', letterSpacing: '-0.02em' }}>
                  $50,000–$200,000
                </span>
                <span className="serif" style={{ fontSize: 34, fontStyle: 'italic', color: 'var(--amber)' }}>
                  a month in carry
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 26, display: 'flex', gap: 64 }}>
          <SourceTag>CODE CONSULTING SPEND · COHERENT MARKET INSIGHTS, 2023</SourceTag>
          <SourceTag>CARRY · 1–3% OF PROJECT COST PER MONTH OF DELAY</SourceTag>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 03 · DEMO ============ */
function CondDemo({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="02 · The Product" label="Demo" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'baseline' }}>
          <div>
            <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 24 }}>
              INSIDE REVIT · LIVE ON THE NEW YORK CITY CODE
            </div>
            {/* NOTE: each line is an inline-block + nowrap — clip-path wipes
                drop line fragments that wrap, so lines must never wrap. */}
            <h2 className="serif" style={{ fontSize: 78, lineHeight: 1.06, letterSpacing: '-0.02em', margin: 0 }}>
              <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>Violations flagged</span><br />
              <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '500ms', fontStyle: 'italic', color: 'var(--amber)' }}>as the building is drawn.</span>
            </h2>
          </div>
          <div data-reveal style={{ '--reveal-delay': '900ms', fontSize: 26, lineHeight: 1.5, fontWeight: 300, color: 'var(--bone-2)', paddingTop: 10 }}>
            Every flag links to the clause it came from. The architect can read it,
            argue with it, or dismiss it — and that decision is logged.
            <br /><br />
            <strong style={{ color: 'var(--bone)', fontWeight: 600 }}>
              The architect stays the author. We make sure nothing leaves the office
              that the city would bounce.
            </strong>
          </div>
        </div>

        <div
          data-scale-in
          style={{
            '--reveal-delay': '600ms',
            marginTop: 'auto', paddingTop: 40,
            borderRadius: 12,
            boxShadow: '0 30px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(242,237,228,0.10)',
            overflow: 'hidden', lineHeight: 0, alignSelf: 'center', width: '100%',
          }}
        >
          <img
            src="assets/Group_74.png"
            alt="Cuniform running inside Revit — live compliance panel with cited code violations"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* TODO: replace with a link to the recorded demo once it exists */}
        <div data-reveal className="mono" style={{
          '--reveal-delay': '1400ms', marginTop: 24, textAlign: 'center',
          fontSize: 15, letterSpacing: '0.2em', color: 'var(--amber)',
        }}>
          ▸ WATCH THE 90-SECOND WALKTHROUGH — [LINK PENDING]
        </div>
      </div>
    </Slide>
  );
}

/* ============ 04 · WHY NOW ============ */

/* Drawn icons — one per force, extensive-deck vocabulary (data-draw strokes,
   one amber accent each, resolving after the stroke work). */
function IconCodeBook({ d = 0 }) {
  return (
    <svg width="96" height="68" viewBox="0 0 96 68" fill="none">
      {/* code-book text lines */}
      <line data-draw style={{ '--draw-len': '56', '--reveal-delay': `${d}ms` }} x1="0" y1="6" x2="56" y2="6" stroke="rgba(242,237,228,0.5)" strokeWidth="2" />
      <line data-draw style={{ '--draw-len': '48', '--reveal-delay': `${d + 120}ms` }} x1="0" y1="17" x2="48" y2="17" stroke="rgba(242,237,228,0.5)" strokeWidth="2" />
      <line data-draw style={{ '--draw-len': '52', '--reveal-delay': `${d + 240}ms` }} x1="0" y1="28" x2="52" y2="28" stroke="rgba(242,237,228,0.5)" strokeWidth="2" />
      {/* if-this-then-that branch */}
      <path data-draw style={{ '--draw-len': '48', '--reveal-delay': `${d + 380}ms` }} d="M 0 52 L 44 52" stroke="rgba(242,237,228,0.5)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '22', '--reveal-delay': `${d + 520}ms` }} d="M 44 52 L 60 40" stroke="rgba(242,237,228,0.5)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '22', '--reveal-delay': `${d + 520}ms` }} d="M 44 52 L 60 64" stroke="rgba(242,237,228,0.5)" strokeWidth="1.5" />
      {/* the cited clause */}
      <circle data-reveal style={{ '--reveal-delay': `${d + 700}ms` }} cx="68" cy="40" r="5" fill="var(--amber)" />
      <text data-reveal style={{ '--reveal-delay': `${d + 800}ms` }} x="80" y="45"
        fontFamily="'JetBrains Mono', monospace" fontSize="14" fill="var(--amber)">§</text>
    </svg>
  );
}

function IconBIM({ d = 0 }) {
  return (
    <svg width="84" height="68" viewBox="0 0 84 72" fill="none">
      <path data-draw style={{ '--draw-len': '230', '--reveal-delay': `${d}ms` }}
        d="M14 20 L42 6 L70 20 L70 52 L42 66 L14 52 Z" stroke="rgba(242,237,228,0.5)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '90', '--reveal-delay': `${d + 350}ms` }}
        d="M14 20 L42 34 L70 20" stroke="rgba(242,237,228,0.5)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '34', '--reveal-delay': `${d + 550}ms` }}
        d="M42 34 L42 66" stroke="rgba(242,237,228,0.5)" strokeWidth="1.5" />
      <circle data-reveal style={{ '--reveal-delay': `${d + 750}ms` }} cx="60" cy="25" r="5" fill="var(--amber)" />
    </svg>
  );
}

function IconGridlock({ d = 0 }) {
  return (
    <svg width="96" height="68" viewBox="0 0 96 68" fill="none">
      {/* review queue, growing */}
      <line data-draw style={{ '--draw-len': '26', '--reveal-delay': `${d}ms` }} x1="0" y1="10" x2="26" y2="10" stroke="rgba(242,237,228,0.45)" strokeWidth="7" strokeLinecap="square" />
      <line data-draw style={{ '--draw-len': '40', '--reveal-delay': `${d + 140}ms` }} x1="0" y1="25" x2="40" y2="25" stroke="rgba(242,237,228,0.45)" strokeWidth="7" strokeLinecap="square" />
      <line data-draw style={{ '--draw-len': '54', '--reveal-delay': `${d + 280}ms` }} x1="0" y1="40" x2="54" y2="40" stroke="rgba(242,237,228,0.45)" strokeWidth="7" strokeLinecap="square" />
      <line data-draw style={{ '--draw-len': '68', '--reveal-delay': `${d + 420}ms` }} x1="0" y1="55" x2="68" y2="55" stroke="var(--amber)" strokeWidth="7" strokeLinecap="square" />
      {/* the clock it burns */}
      <circle data-draw style={{ '--draw-len': '63', '--reveal-delay': `${d + 350}ms` }} cx="84" cy="16" r="10" stroke="rgba(242,237,228,0.5)" strokeWidth="1.5" />
      <line data-reveal style={{ '--reveal-delay': `${d + 650}ms` }} x1="84" y1="16" x2="84" y2="8" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
      <line data-reveal style={{ '--reveal-delay': `${d + 650}ms` }} x1="84" y1="16" x2="90" y2="18" stroke="rgba(242,237,228,0.6)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CondWhyNow({ index }) {
  const forces = [
    { n: '01', t: 'The AI can finally read a code book', b: 'If-this-then-that logic, with the clause cited. A demo three years ago. Production now.', Icon: IconCodeBook },
    { n: '02', t: 'BIM opened up', b: 'We run inside the tool architects already work in all day.', Icon: IconBIM },
    { n: '03', t: 'Permits gridlocked', b: 'Post-2023 backlogs pushed review to 4–12 weeks — long enough that firms will change how they work.', Icon: IconGridlock },
  ];

  return (
    <Slide index={index} total={TOTAL} section="03 · Why Now" label="Why Now" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column' }}>
        <h2 className="serif" style={{ fontSize: 104, lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Why this is</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms', fontStyle: 'italic', color: 'var(--amber)' }}>happening now.</span>
        </h2>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56, alignContent: 'center' }}>
          {forces.map((f, i) => (
            <div key={f.n} data-reveal style={{ '--reveal-delay': `${800 + i * 220}ms`, '--reveal-y': '40px', borderTop: '2px solid var(--amber)', paddingTop: 26 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div className="mono" style={{ fontSize: 14, letterSpacing: '0.3em', color: 'var(--amber)', paddingTop: 6 }}>
                  {f.n}
                </div>
                <f.Icon d={1100 + i * 220} />
              </div>
              <div className="serif" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.015em', marginBottom: 20, minHeight: 97 }}>
                {f.t}
              </div>
              <div style={{ fontSize: 23, lineHeight: 1.5, color: 'var(--bone-2)', fontWeight: 300 }}>
                {f.b}
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="serif" style={{
          fontSize: 42, fontStyle: 'italic', color: 'var(--bone)',
          '--reveal-delay': '2100ms',
        }}>
          We're not early to the problem. <span style={{ color: 'var(--amber)' }}>We're on time for the solution.</span>
        </div>

        <SourceTag style={{ marginTop: 20 }}>REVIEW TIMES · 4–12 WEEKS, LARGE RESIDENTIAL / COMMERCIAL</SourceTag>
      </div>
    </Slide>
  );
}

/* ============ 05 · TRACTION ============ */
function CondTraction({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);
  const partners = [
    { name: 'RAMSA', sub: 'Robert A.M. Stern Architects' },
    { name: 'Hart Howerton', sub: 'Architecture · Planning · Landscape' },
  ];
  const talking = ['Selldorf Architects', 'Arquitectonica', 'FXCollaborative', 'Notre Dame School of Architecture'];

  return (
    <Slide index={index} total={TOTAL} section="04 · Traction" label="Traction" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px', display: 'flex', flexDirection: 'column' }}>
        <h2 className="serif" style={{ fontSize: 100, lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Six people. Eighteen months.</span><br />
          <span data-wipe style={{ '--reveal-delay': '600ms', fontStyle: 'italic', color: 'var(--amber)' }}>Zero dollars.</span>
        </h2>

        <div data-reveal style={{
          marginTop: 36, fontSize: 30, lineHeight: 1.5, fontWeight: 300,
          color: 'var(--bone-2)', maxWidth: 1400, '--reveal-delay': '1000ms',
        }}>
          Two ENR-ranked firms came on board as design partners — both around 300 people,
          both testing Cuniform on live work today. Built on no outside capital, by a team
          that hasn't been paid.
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 48, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72 }}>
          <div>
            <div className="mono" data-reveal style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--amber)', marginBottom: 22, '--reveal-delay': '1300ms' }}>
              DESIGN PARTNERS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {partners.map((p, i) => (
                <div key={p.name} data-reveal style={{
                  '--reveal-delay': `${1400 + i * 150}ms`, '--reveal-y': '20px',
                  border: '1px solid rgba(242,237,228,0.14)',
                  background: 'rgba(242,237,228,0.03)',
                  padding: '28px 26px',
                }}>
                  <div className="serif" style={{ fontSize: 40, lineHeight: 1, letterSpacing: '-0.015em' }}>{p.name}</div>
                  <div style={{ fontSize: 17, color: 'var(--bone-2)', opacity: 0.7, marginTop: 10, fontWeight: 300 }}>{p.sub}</div>
                </div>
              ))}
            </div>

            {/* Integrity disclosure — intent is VERBAL only, nothing countersigned.
                On-slide because an email reader cannot ask, and "signed?" is the
                first question a 30-year operator asks about "design partners." */}
            <div
              className="mono"
              data-reveal
              style={{
                '--reveal-delay': '1650ms',
                marginTop: 18, fontSize: 12, letterSpacing: '0.18em',
                color: 'var(--bone-2)', opacity: 0.55,
              }}
            >
              VERBAL COMMITMENTS · TESTING ON LIVE WORK NOW · NOTHING COUNTERSIGNED
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 }}>
              <div data-reveal style={{ '--reveal-delay': '1800ms' }}>
                <div className="serif" style={{ fontSize: 64, lineHeight: 1 }}>
                  <Counter to={60} duration={1100} delay={1900} active={isActive} format={(n) => Math.round(n)} />
                </div>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.2em', color: 'var(--bone-2)', opacity: 0.7, marginTop: 12 }}>
                  ON THE WAITLIST · NO MARKETING
                </div>
              </div>
              <div data-reveal style={{ '--reveal-delay': '1950ms' }}>
                <div className="serif" style={{ fontSize: 64, lineHeight: 1, color: 'var(--amber)' }}>Live</div>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.2em', color: 'var(--bone-2)', opacity: 0.7, marginTop: 12 }}>
                  IN ACTIVE TESTING AT BOTH FIRMS
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(242,237,228,0.12)', paddingLeft: 56 }}>
            <div className="mono" data-reveal style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--amber)', opacity: 0.8, marginBottom: 24, '--reveal-delay': '1600ms' }}>
              IN CONVERSATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {talking.map((n, i) => (
                <div key={n} data-reveal style={{ '--reveal-delay': `${1700 + i * 120}ms`, fontSize: 24, color: 'var(--bone)', fontWeight: 300 }}>
                  {n}
                </div>
              ))}
            </div>
            <div data-reveal className="serif" style={{
              marginTop: 40, paddingTop: 28, borderTop: '1px solid rgba(242,237,228,0.12)',
              fontSize: 30, fontStyle: 'italic', lineHeight: 1.3, color: 'var(--bone)',
              '--reveal-delay': '2200ms',
            }}>
              That's what we did with nothing.<br />
              <span style={{ color: 'var(--amber)' }}>This raise is what we do with something.</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 06 · MARKET ============ */
function CondMarket({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  // Proportions (of $14.73B track width): today = 8.16/14.73, wedge = 0.7/14.73
  const TODAY_W = '55.4%';
  const WEDGE_W = '4.75%';

  return (
    <Slide index={index} total={TOTAL} section="05 · Market" label="Market" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '150px 120px 130px', display: 'flex', flexDirection: 'column' }}>
        <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 24 }}>
          MARKET
        </div>
        <div className="serif" style={{ fontSize: 110, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>
            $<Counter to={8.16} duration={1200} delay={300} active={isActive} format={(n) => n.toFixed(2)} />B
          </span>
          <span className="serif" style={{ fontSize: 56, color: 'var(--bone-2)', margin: '0 20px' }}>→</span>
          <span data-wipe style={{ '--reveal-delay': '700ms', color: 'var(--amber)', fontStyle: 'italic' }}>$14.73B</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 40, marginTop: 18 }}>
          <div data-reveal style={{ fontSize: 29, color: 'var(--bone-2)', fontWeight: 300, '--reveal-delay': '1000ms' }}>
            Global building code compliance, growing 8.8% a year to 2030.
          </div>
          <SourceTag>COHERENT MARKET INSIGHTS, 2023</SourceTag>
        </div>

        {/* ── The wedge, to scale: full market → the consultant line item ── */}
        <div style={{ marginTop: 'auto', marginBottom: 'auto', paddingTop: 24 }}>
          {/* Track 1 — the market */}
          <div style={{ position: 'relative', height: 44, background: 'rgba(242,237,228,0.06)', border: '1px solid rgba(242,237,228,0.14)' }}>
            <div className="bar-with" style={{
              '--bar-w': TODAY_W, '--bar-delay': '600ms',
              position: 'absolute', left: 0, top: 0, bottom: 0,
              background: 'rgba(242,237,228,0.26)',
            }} />
            <div className="mono" data-reveal style={{
              '--reveal-delay': '1200ms',
              position: 'absolute', left: `calc(${TODAY_W} - 8px)`, top: -26, transform: 'translateX(-100%)',
              fontSize: 12, letterSpacing: '0.2em', color: 'var(--bone-2)', opacity: 0.7,
            }}>
              TODAY
            </div>
            <div className="mono" data-reveal style={{
              '--reveal-delay': '1200ms',
              position: 'absolute', right: 0, top: -26,
              fontSize: 12, letterSpacing: '0.2em', color: 'var(--bone-2)', opacity: 0.7,
            }}>
              2030
            </div>
          </div>

          {/* Track 2 — the wedge we take */}
          <div style={{ position: 'relative', height: 110, marginTop: 16 }}>
            <div className="bar-with" style={{
              '--bar-w': WEDGE_W, '--bar-delay': '1500ms',
              position: 'absolute', left: 0, top: 0, height: 44,
              background: 'var(--amber)',
            }} />
            <div data-reveal style={{ '--reveal-delay': '1800ms', position: 'absolute', left: `calc(${WEDGE_W} + 36px)`, top: -4 }}>
              <div className="serif" style={{ fontSize: 38, lineHeight: 1.25, letterSpacing: '-0.015em' }}>
                ~$700M a year goes to outside code consultants.
              </div>
              <div className="serif" style={{ fontSize: 38, lineHeight: 1.25, fontStyle: 'italic', color: 'var(--amber)' }}>
                That's the line item we replace.
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 36, borderTop: '1px solid rgba(242,237,228,0.18)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
          <div data-reveal style={{ '--reveal-delay': '2200ms' }}>
            <div className="mono" style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--amber)', marginBottom: 16 }}>
              PHASE ONE · THE BEACHHEAD
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
              <div className="serif" style={{ fontSize: 68, lineHeight: 1, letterSpacing: '-0.02em' }}>
                <Counter to={1235} duration={1200} delay={2300} active={isActive} format={(n) => Math.round(n).toLocaleString()} />
              </div>
              <div className="mono" style={{ fontSize: 13, letterSpacing: '0.2em', color: 'var(--bone-2)', opacity: 0.75 }}>
                US FIRMS · 50+ PEOPLE
              </div>
            </div>
            {/* firms vs. employment — the asymmetry, drawn */}
            <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '300px 1fr', rowGap: 10, columnGap: 20, alignItems: 'center' }}>
              <div style={{ position: 'relative', height: 10, background: 'rgba(242,237,228,0.08)' }}>
                <div className="bar-with" style={{ '--bar-w': '6.5%', '--bar-delay': '2500ms', position: 'absolute', left: 0, top: 0, bottom: 0, background: 'rgba(242,237,228,0.6)' }} />
              </div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--bone-2)', opacity: 0.7 }}>6.5% OF FIRMS</div>
              <div style={{ position: 'relative', height: 10, background: 'rgba(242,237,228,0.08)' }}>
                <div className="bar-with" style={{ '--bar-w': '52%', '--bar-delay': '2650ms', position: 'absolute', left: 0, top: 0, bottom: 0, background: 'rgba(242,237,228,0.6)' }} />
              </div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--bone-2)', opacity: 0.7 }}>MORE THAN HALF OF PRIVATE-PRACTICE EMPLOYMENT</div>
            </div>
            <div style={{ marginTop: 18, fontSize: 24, lineHeight: 1.45, fontWeight: 300, color: 'var(--bone)' }}>
              It's where the complex projects are, and where our
              design partners already are.
            </div>
            <SourceTag style={{ marginTop: 12 }}>AIA FIRM SURVEY</SourceTag>
          </div>

          <div data-reveal style={{ '--reveal-delay': '2400ms' }}>
            <div className="mono" style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--amber)', marginBottom: 16 }}>
              PHASE TWO · THE CITIES
            </div>
            <div style={{ fontSize: 26, lineHeight: 1.5, fontWeight: 300, color: 'var(--bone)' }}>
              Every submission that leaves a Cuniform firm arrives <strong style={{ fontWeight: 600 }}>pre-checked
              and cited.</strong> Jurisdictions that accept pre-checked submissions move projects to ground
              months faster — <em style={{ fontStyle: 'italic' }}>it costs them nothing and requires no procurement.</em>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 07 · COMPETITION ============ */
function CondCompetition({ index }) {
  const COLS = '250px 1fr 200px';
  // barW: raised, proportional within a 160px track ($91M = full track)
  const rows = [
    { name: 'UpCodes', what: 'Code search. Reads the rule book.', raised: '$7.6M', barW: 14 },
    { name: 'CodeComply.Ai', what: 'Reviews PDFs after design is done.', raised: '$2M', barW: 4 },
    { name: 'PermitFlow', what: 'Automates the submission paperwork.', raised: '$91M', barW: 160 },
    { name: 'Archistar · CivCheck · Symbium', what: 'Help city reviewers review faster.', raised: '—', barW: 0 },
  ];

  return (
    <Slide index={index} total={TOTAL} section="06 · Competition" label="Competition" tone="paper">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 140px', display: 'flex', flexDirection: 'column' }}>
        <h2 className="serif" style={{ fontSize: 100, lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0, color: 'var(--ink)' }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Nobody is</span>{' '}
          <span data-wipe style={{ '--reveal-delay': '500ms', fontStyle: 'italic', color: 'var(--amber)' }}>inside the model.</span>
        </h2>

        <div style={{ marginTop: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: COLS, gap: 28, paddingBottom: 14, borderBottom: '1.5px solid var(--ink)' }}>
            {['COMPANY', 'WHAT THEY DO', 'RAISED'].map((c) => (
              <div key={c} className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'rgba(10,10,10,0.4)' }}>{c}</div>
            ))}
          </div>

          {rows.map((r, i) => (
            <div key={r.name} data-reveal style={{
              '--reveal-delay': `${800 + i * 130}ms`,
              display: 'grid', gridTemplateColumns: COLS, gap: 28,
              padding: '22px 0', borderBottom: '1px solid rgba(10,10,10,0.1)', alignItems: 'center',
            }}>
              <div style={{ fontSize: 24, fontWeight: 500, color: 'var(--ink)' }}>{r.name}</div>
              <div style={{ fontSize: 23, color: 'rgba(10,10,10,0.65)', fontWeight: 300 }}>{r.what}</div>
              <div>
                <div className="serif tnum" style={{ fontSize: 26, fontStyle: 'italic', color: 'rgba(10,10,10,0.55)' }}>{r.raised}</div>
                {r.barW > 0 && (
                  <div style={{ position: 'relative', height: 5, width: 160, background: 'rgba(10,10,10,0.07)', marginTop: 8 }}>
                    <div className="bar-with" style={{
                      '--bar-w': `${r.barW}px`, '--bar-delay': `${1100 + i * 130}ms`,
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      background: 'rgba(10,10,10,0.45)',
                    }} />
                  </div>
                )}
              </div>
            </div>
          ))}

          <div data-reveal style={{
            '--reveal-delay': '1350ms',
            display: 'grid', gridTemplateColumns: COLS, gap: 28,
            padding: '24px 24px', margin: '0 -24px', alignItems: 'center', background: 'var(--ink)',
          }}>
            <div className="serif" style={{ fontSize: 28, fontStyle: 'italic', color: 'var(--amber)' }}>Cuniform</div>
            <div style={{ fontSize: 23, color: 'var(--bone)', fontWeight: 400 }}>
              Inside the model, while it's being drawn.
            </div>
            <div className="serif" style={{ fontSize: 26, fontStyle: 'italic', color: 'rgba(242,237,228,0.4)' }}>—</div>
          </div>
        </div>

        <div data-reveal className="serif" style={{
          marginTop: 'auto', paddingTop: 44, fontSize: 44, lineHeight: 1.25,
          color: 'var(--ink)', maxWidth: 1500, '--reveal-delay': '1700ms',
        }}>
          A hundred million dollars has gone into this problem — and
          <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}> none of it checks the code while you draw.</span>
        </div>

        <SourceTag dark={false} style={{ marginTop: 20 }}>FUNDING · PITCHBOOK, TECHCRUNCH, BUSINESSWIRE</SourceTag>
      </div>
    </Slide>
  );
}

/* ============ 08 · TEAM ============ */
function CondTeam({ index }) {
  const founders = [
    { name: 'Joe Yatco', role: 'CEO', bio: '[BIO PENDING]' },
    { name: 'Kyle Gallatin', role: 'CTO', bio: 'Production ML at Pfizer, Etsy, and Handshake. O’Reilly author. Full-time on close.' },
    { name: 'Arnav Somani', role: 'CDO', bio: '[BIO PENDING]' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="07 · Team" label="Team" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '140px 120px 120px', display: 'flex', flexDirection: 'column' }}>
        <h2 className="serif" style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0 }}>
          <span data-wipe style={{ '--reveal-delay': '200ms' }}>Built by an architect</span><br />
          <span data-wipe style={{ '--reveal-delay': '550ms', fontStyle: 'italic', color: 'var(--amber)' }}>who lived the problem.</span>
        </h2>

        <div data-reveal style={{
          marginTop: 26, fontSize: 27, lineHeight: 1.5, fontWeight: 300,
          color: 'var(--bone-2)', maxWidth: 1450, '--reveal-delay': '900ms',
        }}>
          Most AEC software is built by technologists who studied the industry from the outside.
          Joe spent ten years watching projects lose months to code review, then built the tool he needed.
          That shows up most in what we chose <em style={{ fontStyle: 'italic' }}>not</em> to build —
          <strong style={{ color: 'var(--bone)', fontWeight: 600 }}> no auto-fix, no generated drawings.
          The architect's stamp stays the architect's.</strong>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 52 }}>
          {founders.map((f, i) => (
            <div key={f.name} data-reveal style={{
              '--reveal-delay': `${1200 + i * 200}ms`, '--reveal-y': '36px',
              borderTop: '2px solid var(--amber)', paddingTop: 24,
            }}>
              <div style={{
                width: '36%', aspectRatio: '1', marginBottom: 20,
                background: 'linear-gradient(135deg, #1C1C1C, #0A0A0A)',
                border: '1px solid rgba(242,237,228,0.14)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div className="serif" style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 84, fontStyle: 'italic', color: 'var(--amber)', opacity: 0.22, letterSpacing: '-0.04em',
                }}>
                  {f.name.split(' ').map((s) => s[0]).join('')}
                </div>
              </div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 12 }}>
                {f.role}
              </div>
              <div className="serif" style={{ fontSize: 38, lineHeight: 1, letterSpacing: '-0.015em', marginBottom: 14 }}>
                {f.name}
              </div>
              <div style={{ fontSize: 19, lineHeight: 1.45, color: 'var(--bone-2)', fontWeight: 300 }}>
                {f.bio}
              </div>
            </div>
          ))}
        </div>

        <div data-reveal style={{
          marginTop: 36, paddingTop: 24, borderTop: '1px solid rgba(242,237,228,0.14)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 40,
          '--reveal-delay': '1900ms',
        }}>
          <div className="mono" style={{ fontSize: 13, letterSpacing: '0.24em', color: 'var(--bone-2)', opacity: 0.75 }}>
            + TWO ENGINEERS · ONE PRODUCT DESIGNER · ALL UNPAID FOR 18 MONTHS
          </div>
          <div className="serif" style={{ fontSize: 26, fontStyle: 'italic', color: 'var(--bone)', textAlign: 'right', maxWidth: 780 }}>
            The software can be copied. <span style={{ color: 'var(--amber)' }}>The relationships can't be rushed.</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 09 · THE ASK ============ */
function CondAsk({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  return (
    <Slide index={index} total={TOTAL} section="08 · The Ask" label="The Ask" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '150px 120px 130px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 80, alignItems: 'start', flex: 1 }}>
          <div>
            <div className="mono" data-reveal style={{ fontSize: 15, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 24 }}>
              THE ASK
            </div>
            <div className="serif" data-reveal style={{
              fontSize: 190, lineHeight: 0.9, letterSpacing: '-0.04em',
              '--reveal-delay': '300ms', '--reveal-y': '50px',
            }}>
              $<Counter to={1.5} duration={1100} delay={400} active={isActive} format={(n) => n.toFixed(1)} />M
            </div>
            <div data-reveal style={{ fontSize: 32, marginTop: 22, color: 'var(--bone-2)', fontWeight: 300, '--reveal-delay': '650ms' }}>
              SAFE · <span style={{ color: 'var(--amber)' }}>$12M post-money</span> · 18 months
            </div>
            <div data-reveal style={{ fontSize: 23, marginTop: 18, color: 'var(--bone-2)', fontWeight: 300, opacity: 0.8, maxWidth: 620, lineHeight: 1.45, '--reveal-delay': '800ms' }}>
              Eighteen months is sized to how long enterprise sales actually take in this
              industry — six to nine months a deal.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36, paddingTop: 14 }}>
            <div>
              <div className="mono" data-reveal style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--amber)', marginBottom: 22, '--reveal-delay': '1000ms' }}>
                WHERE IT GOES
              </div>
              <div data-reveal style={{ '--reveal-delay': '1100ms', display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 24, rowGap: 20, alignItems: 'baseline' }}>
                <div className="serif" style={{ fontSize: 28, fontStyle: 'italic', color: 'var(--amber)' }}>01</div>
                <div style={{ fontSize: 27, fontWeight: 300, color: 'var(--bone)', lineHeight: 1.4 }}>
                  It converts a <strong style={{ fontWeight: 600 }}>volunteer team into a full-time one.</strong>
                </div>
                <div className="serif" style={{ fontSize: 28, fontStyle: 'italic', color: 'var(--amber)' }}>02</div>
                <div style={{ fontSize: 27, fontWeight: 300, color: 'var(--bone)', lineHeight: 1.4 }}>
                  It buys <strong style={{ fontWeight: 600 }}>enterprise readiness</strong> —
                  <span style={{ display: 'inline-flex', gap: 10, marginLeft: 14, verticalAlign: 'middle' }}>
                    {['SOC 2', 'SINGLE SIGN-ON', 'ADMIN CONTROLS'].map((c) => (
                      <span key={c} className="mono" style={{
                        fontSize: 13, letterSpacing: '0.16em', color: 'var(--bone)',
                        border: '1px solid rgba(242,237,228,0.3)', padding: '7px 12px', whiteSpace: 'nowrap',
                      }}>{c}</span>
                    ))}
                  </span>
                </div>
              </div>
              <div data-reveal style={{ '--reveal-delay': '1300ms', marginTop: 20, fontSize: 22, lineHeight: 1.45, fontWeight: 300, color: 'var(--bone-2)', opacity: 0.85 }}>
                That's what any firm this size requires before they can buy, and it's the last
                thing standing between our design partners and a contract.
              </div>
            </div>

            <div data-reveal style={{ '--reveal-delay': '1500ms', paddingTop: 30, borderTop: '1px solid rgba(242,237,228,0.16)' }}>
              <div className="mono" style={{ fontSize: 13, letterSpacing: '0.26em', color: 'var(--amber)', marginBottom: 18 }}>
                WHERE IT GETS US
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
                <div className="serif" style={{ fontSize: 72, lineHeight: 1, letterSpacing: '-0.02em' }}>
                  ~$<Counter to={500} duration={1100} delay={1700} active={isActive} format={(n) => Math.round(n)} />K
                </div>
                <div style={{ fontSize: 24, color: 'var(--bone-2)', fontWeight: 300 }}>ARR at 18 months.</div>
              </div>
              {/* ARR bar — solid to $500K, dashed upside to $1M */}
              <div style={{ position: 'relative', height: 14, marginTop: 22, background: 'rgba(242,237,228,0.07)' }}>
                <div className="bar-with" style={{
                  '--bar-w': '50%', '--bar-delay': '1900ms',
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  background: 'var(--bone)',
                }} />
                <div data-reveal style={{
                  '--reveal-delay': '2300ms',
                  position: 'absolute', left: '50%', right: 0, top: 0, bottom: 0,
                  border: '1px dashed rgba(242,237,228,0.4)', borderLeft: 'none',
                }} />
              </div>
              <div data-reveal className="mono" style={{
                '--reveal-delay': '2300ms', marginTop: 12, textAlign: 'right',
                fontSize: 12, letterSpacing: '0.18em', color: 'var(--bone-2)', opacity: 0.75,
              }}>
                UPSIDE $1M, VIA FIRM-WIDE EXPANSION
              </div>
            </div>
          </div>
        </div>

        <div data-reveal className="serif" style={{
          marginTop: 44, paddingTop: 44, borderTop: '2px solid var(--amber)',
          fontSize: 62, lineHeight: 1.1, letterSpacing: '-0.02em',
          '--reveal-delay': '2600ms',
        }}>
          Check the code while you draw.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Not after you submit.</span>
        </div>

        <div data-reveal style={{
          marginTop: 28, display: 'flex', gap: 56, alignItems: 'baseline',
          '--reveal-delay': '2800ms',
        }}>
          <div className="mono" style={{ fontSize: 14, letterSpacing: '0.24em', color: 'var(--bone-2)', opacity: 0.8 }}>
            JOE@CUNIFORM.TECH
          </div>
          <div className="mono" style={{ fontSize: 14, letterSpacing: '0.24em', color: 'var(--bone-2)', opacity: 0.8 }}>
            CUNIFORM.TECH
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---- Export the 9 condensed slides, in order --------------------- */
window.CONDENSED_SLIDES = [
  { key: 'cover',       C: CondCover },
  { key: 'problem',     C: CondProblem },
  { key: 'demo',        C: CondDemo },
  { key: 'whynow',      C: CondWhyNow },
  { key: 'traction',    C: CondTraction },
  { key: 'market',      C: CondMarket },
  { key: 'competition', C: CondCompetition },
  { key: 'team',        C: CondTeam },
  { key: 'ask',         C: CondAsk },
];

Object.assign(window, {
  TOTAL, Logomark,
  CondCover, CondProblem, CondDemo, CondWhyNow, CondTraction,
  CondMarket, CondCompetition, CondTeam, CondAsk,
});
