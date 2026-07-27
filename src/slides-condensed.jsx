/* ──────────────────────────────────────────────────────────────
   Cuniform, CONDENSED DECK (9 pages)

   BUILT FOR EMAIL, NOT PRESENTATION.
   J.R. Chantengco reads this alone, with a low attention span.

   ── TWO RULES THAT GOVERN THIS FILE ──

   1. TYPOGRAPHY. `.serif` (Instrument Serif) is reserved for THE ONE
      TAKEAWAY on a slide, the sentence we want him to leave with, and
      the hero number when that number IS the takeaway. Everything else
      is IBM Plex Sans (no class) or `.mono` for labels, meta, and sources.
      If serif is everywhere, nothing is emphasised. Do not spread it.

   2. ONE IDEA PER SLIDE. Each slide makes a single point. Support may
      stay, but it must read as clearly secondary, smaller, quieter,
      lower contrast. The eye should find the takeaway first, always.

   Copy source of truth: SLIDE-COPY.md
   ────────────────────────────────────────────────────────────── */

const TOTAL = 9;

/* ---------- shared bits ---------- */

function SourceTag({ children, dark = true, style }) {
  return (
    <div
      className="mono"
      style={{
        fontSize: 12,
        letterSpacing: '0.18em',
        color: dark ? 'rgba(242,237,228,0.32)' : 'rgba(10,10,10,0.32)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* Small uppercase section label, always mono, never serif. */
function Eyebrow({ children, delay = 0, dark = true, style }) {
  return (
    <div
      className="mono"
      data-reveal
      style={{
        fontSize: 13,
        letterSpacing: '0.28em',
        color: 'var(--amber)',
        '--reveal-delay': `${delay}ms`,
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

/* ============ 01 · COVER ============
   ONE IDEA: Building code compliance in real time. */

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
        <div className="mono" data-reveal style={{ fontSize: 14, letterSpacing: '0.24em', '--reveal-delay': '100ms' }}>
          <span style={{ color: 'var(--amber)' }}>●</span>&nbsp;&nbsp;CUNIFORM
        </div>
        <div className="mono" data-reveal style={{ fontSize: 14, letterSpacing: '0.24em', opacity: 0.5, '--reveal-delay': '100ms' }}>
          CONFIDENTIAL
        </div>
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 52, padding: '0 120px',
      }}>
        <span data-reveal style={{ display: 'inline-block', '--reveal-delay': '200ms', '--reveal-y': '60px' }}>
          <img src="assets/Cuniform.svg" alt="Cuniform" style={{ width: 1080, height: 'auto', display: 'block' }} />
        </span>

        {/* THE TAKEAWAY, the only serif on this slide */}
        <div className="serif" data-reveal style={{
          fontSize: 82, lineHeight: 1.06, letterSpacing: '-0.02em',
          textAlign: 'center', color: 'var(--bone)',
          '--reveal-delay': '700ms',
        }}>
          Building code compliance,{' '}
          <span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>in real time.</span>
        </div>

        <div data-reveal style={{
          fontSize: 34, lineHeight: 1.3, fontWeight: 400, textAlign: 'center',
          color: 'var(--bone)', '--reveal-delay': '1100ms',
        }}>
          For everyone who touches a building before it is built.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 12 }}>
          <div className="mono" data-reveal style={{
            fontSize: 14, letterSpacing: '0.3em', color: 'var(--amber)',
            '--reveal-delay': '1500ms',
          }}>
            SEED · 2026
          </div>
          <div className="mono" data-reveal style={{
            fontSize: 13, letterSpacing: '0.26em', color: 'var(--bone-2)', opacity: 0.55,
            '--reveal-delay': '1700ms',
          }}>
            PREPARED FOR BLACK PEARL INVESTMENT GROUP
          </div>
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

/* ============ 02 · PROBLEM ============
   ONE IDEA: The check happens after the drawing is finished,
   which costs the project money and clogs the city. */

/* The rework loop. Six steps, drawn left to right, then an arc carries
   the eye back to the start so the cycle is visible rather than described.
   Rejection is the only amber node: it is the step that costs money. */
function ReworkLoop({ isActive }) {
  const STEPS = [
    { t: 'Design' },
    { t: 'Code check', s: 'by architect' },
    { t: 'Submit' },
    { t: 'Code check', s: 'by city' },
    { t: 'Rejection', hot: true },
    { t: 'Redraw' },
  ];
  const BASE = 900;

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: 124 }}>
      {/* connecting rail + loop-back arc */}
      <svg
        viewBox="0 0 1680 190"
        preserveAspectRatio="none"
        style={{ position: 'absolute', left: 0, right: 0, top: 6, width: '100%', height: 190, pointerEvents: 'none' }}
      >
        {/* the forward rail the six steps sit on */}
        <line
          x1="60" y1="8" x2="1620" y2="8"
          stroke="rgba(242,237,228,0.28)" strokeWidth="1.5"
          data-draw style={{ '--draw-len': 1560, '--reveal-delay': `${BASE}ms` }}
        />
        {/* Return path. Drops from the last step, runs back beneath the
            labels, and re-enters the first. The mid-run arrowhead is what
            makes this read as flow rather than a box around the row. */}
        <path
          d="M 1620 8 C 1664 8 1664 152 1600 152 L 80 152 C 16 152 16 8 60 8"
          fill="none" stroke="rgba(220,38,38,0.55)" strokeWidth="1.5" strokeDasharray="7 9"
          data-draw style={{ '--draw-len': 3500, '--reveal-delay': `${BASE + 1500}ms` }}
        />
      </svg>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
        {STEPS.map((st, i) => (
          <div
            key={st.t + i}
            data-reveal
            style={{
              '--reveal-delay': `${BASE + 120 + i * 150}ms`,
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
            }}
          >
            <span style={{
              width: 13, height: 13, borderRadius: '50%',
              background: st.hot ? 'var(--amber)' : 'var(--ink)',
              border: `1.5px solid ${st.hot ? 'var(--amber)' : 'rgba(242,237,228,0.5)'}`,
            }} />
            <span style={{
              fontSize: 21, fontWeight: 500, letterSpacing: '-0.01em',
              color: st.hot ? 'var(--amber)' : 'var(--bone)', textAlign: 'center',
            }}>
              {st.t}
            </span>
            {st.s && (
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--bone-2)', opacity: 0.55, marginTop: -8 }}>
                {st.s}
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        data-reveal
        className="mono"
        style={{
          '--reveal-delay': `${BASE + 2450}ms`,
          position: 'absolute', left: 0, right: 0, bottom: 2,
          textAlign: 'center', fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)',
        }}
      >
        BACK TO THE START
      </div>
    </div>
  );
}

function CondProblem({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  return (
    <Slide index={index} total={TOTAL} section="01 · The Problem" label="Problem" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Eyebrow>THE PROBLEM</Eyebrow>

        {/* THE TAKEAWAY, the only serif on this slide */}
        <h2 className="serif" style={{ fontSize: 96, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '26px 0 0', maxWidth: 1560 }}>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>Nobody checks the code</span><br />
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', paddingBottom: '0.16em', marginBottom: '-0.16em', '--reveal-delay': '560ms', fontStyle: 'italic', color: 'var(--amber)' }}>until the drawing is finished.</span>
        </h2>

        {/* Two sentences, one per line. */}
        <div data-reveal style={{
          marginTop: 26, fontSize: 28, lineHeight: 1.5, fontWeight: 300,
          color: 'var(--bone-2)', '--reveal-delay': '950ms',
        }}>
          <div>
            Firms pay <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>$700 million a year</strong> to have consultants check it by hand.
          </div>
          <div>
            Every rejection costs the project <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>$50–200K a month</strong> and re-enters a <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>4–12 week</strong> city queue.
          </div>
        </div>

        {/* The loop, drawn. Replaces the two support columns. */}
        <div style={{ paddingTop: 40, borderTop: '1px solid rgba(242,237,228,0.16)' }}>
          <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)', marginBottom: 34, '--reveal-delay': '1250ms' }}>
            THE LOOP THIS CREATES
          </div>
          <ReworkLoop isActive={isActive} />
        </div>

        <SourceTag style={{ marginTop: 26 }}>
          CODE CONSULTING SPEND · COHERENT MARKET INSIGHTS, 2023&nbsp;&nbsp;·&nbsp;&nbsp;CARRY · 1–3% OF PROJECT COST PER MONTH&nbsp;&nbsp;·&nbsp;&nbsp;REVIEW TIMES · 4–12 WEEKS
        </SourceTag>
      </div>
    </Slide>
  );
}

/* ============ 03 · DEMO ============
   ONE IDEA: It already works, inside Revit, on codes across North America. */

/* Demo player.
   Drop the recording in as `assets/demo.mp4` and it plays in place, in the
   deck, with no link-out. Until that file exists the poster still shows, so
   the slide is never broken or half-finished looking.
   The poster is also what a PDF export prints, since PDFs cannot play video. */
function DemoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && p.then) p.then(() => setPlaying(true)).catch(() => {});
    else setPlaying(true);
  };

  return (
    <div
      style={{
        position: 'relative', width: '100%', lineHeight: 0,
        borderRadius: 10, overflow: 'hidden',
        boxShadow: '0 30px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(242,237,228,0.10)',
      }}
    >
      <video
        ref={videoRef}
        src="assets/demo.mp4"
        poster="assets/Group_74.png"
        preload="none"
        playsInline
        controls={playing}
        onEnded={() => setPlaying(false)}
        style={{ width: '100%', height: 'auto', display: 'block', background: '#0A0A0A' }}
      />

      {!playing && (
        <button
          type="button"
          onClick={start}
          aria-label="Play the Cuniform walkthrough"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(10,10,10,0.28)', border: 0, cursor: 'pointer', padding: 0,
          }}
        >
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 16,
              padding: '18px 30px 18px 24px',
              background: 'var(--amber)', color: '#0A0A0A',
              borderRadius: 100, boxShadow: '0 10px 40px -8px rgba(0,0,0,0.6)',
            }}
          >
            <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
              <path d="M2 1 L18 11 L2 21 Z" fill="#0A0A0A" />
            </svg>
            <span
              className="mono"
              style={{ fontSize: 14, letterSpacing: '0.2em', fontWeight: 700, lineHeight: 1 }}
            >
              WATCH IT RUN
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function CondDemo({ index }) {
  return (
    <Slide index={index} total={TOTAL} section="02 · The Product" label="Demo" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '150px 120px 125px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>INSIDE REVIT · CODES ACROSS ALL OF NORTH AMERICA</Eyebrow>

            {/* THE TAKEAWAY, the only serif on this slide.
                NOTE: clip-path wipes drop wrapped line fragments, so each
                line must be inline-block + nowrap. Do not let these wrap. */}
            <h2 className="serif" style={{ fontSize: 76, lineHeight: 1.06, letterSpacing: '-0.02em', margin: '24px 0 0' }}>
              <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>Violations flagged</span><br />
              <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '560ms', fontStyle: 'italic', color: 'var(--amber)' }}>as the building is drawn.</span>
            </h2>
          </div>

          <div data-reveal style={{ '--reveal-delay': '900ms', fontSize: 24, lineHeight: 1.5, fontWeight: 300, color: 'var(--bone-2)', paddingTop: 42 }}>
            The drawing, the violation, and the clause that governs it, in one window.
            Nothing to export, nobody to email, no code book to go and open.
            <div style={{ marginTop: 18, color: 'var(--bone)', fontWeight: 400 }}>
              The architect never leaves the model. <strong style={{ color: 'var(--amber)', fontWeight: 500 }}>No context switching, ever.</strong>
            </div>
          </div>
        </div>

        <div data-scale-in style={{ '--reveal-delay': '600ms', paddingTop: 32 }}>
          <DemoPlayer />
        </div>
      </div>
    </Slide>
  );
}

/* ============ 04 · WHY NOW ============
   ONE IDEA: Four things became true at once, including the human
   supply of code expertise walking out the door. */

function IconCodeBook({ d = 0 }) {
  return (
    <svg width="92" height="60" viewBox="0 0 92 60" fill="none">
      <line data-draw style={{ '--draw-len': '52', '--reveal-delay': `${d}ms` }} x1="0" y1="5" x2="52" y2="5" stroke="rgba(242,237,228,0.45)" strokeWidth="2" />
      <line data-draw style={{ '--draw-len': '44', '--reveal-delay': `${d + 120}ms` }} x1="0" y1="15" x2="44" y2="15" stroke="rgba(242,237,228,0.45)" strokeWidth="2" />
      <path data-draw style={{ '--draw-len': '42', '--reveal-delay': `${d + 300}ms` }} d="M 0 40 L 40 40" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '20', '--reveal-delay': `${d + 440}ms` }} d="M 40 40 L 54 30" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '20', '--reveal-delay': `${d + 440}ms` }} d="M 40 40 L 54 50" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <circle data-reveal style={{ '--reveal-delay': `${d + 620}ms` }} cx="62" cy="30" r="4.5" fill="var(--amber)" />
      <text data-reveal style={{ '--reveal-delay': `${d + 720}ms` }} x="73" y="35"
        fontFamily="'JetBrains Mono', monospace" fontSize="13" fill="var(--amber)">§</text>
    </svg>
  );
}

function IconBIM({ d = 0 }) {
  return (
    <svg width="80" height="60" viewBox="0 0 80 64" fill="none">
      <path data-draw style={{ '--draw-len': '210', '--reveal-delay': `${d}ms` }}
        d="M12 18 L38 5 L64 18 L64 47 L38 60 L12 47 Z" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '82', '--reveal-delay': `${d + 320}ms` }}
        d="M12 18 L38 31 L64 18" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <path data-draw style={{ '--draw-len': '30', '--reveal-delay': `${d + 500}ms` }}
        d="M38 31 L38 60" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <circle data-reveal style={{ '--reveal-delay': `${d + 680}ms` }} cx="55" cy="22" r="4.5" fill="var(--amber)" />
    </svg>
  );
}

function IconGridlock({ d = 0 }) {
  return (
    <svg width="92" height="60" viewBox="0 0 92 60" fill="none">
      <line data-draw style={{ '--draw-len': '24', '--reveal-delay': `${d}ms` }} x1="0" y1="8" x2="24" y2="8" stroke="rgba(242,237,228,0.4)" strokeWidth="6" strokeLinecap="square" />
      <line data-draw style={{ '--draw-len': '36', '--reveal-delay': `${d + 140}ms` }} x1="0" y1="22" x2="36" y2="22" stroke="rgba(242,237,228,0.4)" strokeWidth="6" strokeLinecap="square" />
      <line data-draw style={{ '--draw-len': '48', '--reveal-delay': `${d + 280}ms` }} x1="0" y1="36" x2="48" y2="36" stroke="rgba(242,237,228,0.4)" strokeWidth="6" strokeLinecap="square" />
      <line data-draw style={{ '--draw-len': '62', '--reveal-delay': `${d + 420}ms` }} x1="0" y1="50" x2="62" y2="50" stroke="var(--amber)" strokeWidth="6" strokeLinecap="square" />
      <circle data-draw style={{ '--draw-len': '57', '--reveal-delay': `${d + 340}ms` }} cx="80" cy="14" r="9" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <line data-reveal style={{ '--reveal-delay': `${d + 620}ms` }} x1="80" y1="14" x2="80" y2="7" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* Code consultants retiring, the human supply of code expertise
   walking out (founder addition). Two figures fade, one stays amber. */
function IconRetiring({ d = 0 }) {
  return (
    <svg width="92" height="60" viewBox="0 0 92 60" fill="none">
      {[0, 1, 2].map((i) => (
        <g
          key={i}
          data-reveal
          style={{ '--reveal-delay': `${d + i * 150}ms` }}
          opacity={i < 2 ? 0.22 : 1}
        >
          <circle cx={12 + i * 26} cy="16" r="6"
            stroke={i < 2 ? 'rgba(242,237,228,0.45)' : 'var(--amber)'} strokeWidth="1.5" fill="none" />
          <path d={`M${4 + i * 26} 44 Q${12 + i * 26} 30 ${20 + i * 26} 44 L${20 + i * 26} 50 L${4 + i * 26} 50 Z`}
            stroke={i < 2 ? 'rgba(242,237,228,0.45)' : 'var(--amber)'} strokeWidth="1.5" fill="none" />
        </g>
      ))}
      {/* the exit arrow */}
      <path data-draw style={{ '--draw-len': '20', '--reveal-delay': `${d + 620}ms` }}
        d="M 70 30 L 88 30" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" />
      <path data-reveal style={{ '--reveal-delay': `${d + 760}ms` }}
        d="M 83 25 L 89 30 L 83 35" stroke="rgba(242,237,228,0.45)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function CondWhyNow({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  const forces = [
    { n: '01', t: 'Machine learning became auditable', b: <>Models now hold a full code book in context, reason through its conditional logic, and <strong style={{ fontWeight: 500, color: 'var(--bone)' }}>show the clause they relied on</strong>. Three years ago that was a research demo.</>, Icon: IconCodeBook },
    { n: '02', t: 'BIM opened up', b: 'We run inside the tool architects already work in all day.', Icon: IconBIM },
    { n: '03', t: 'Permits gridlocked', b: <>Post-2023 backlogs pushed review to <strong style={{ fontWeight: 500, color: 'var(--bone)' }}>4–12 weeks</strong>, long enough that firms will change how they work.</>, Icon: IconGridlock },
    { n: '04', t: 'The consultants are retiring', b: 'Code expertise is leaving the profession faster than it is replaced. A succession problem we turn into a software problem.', Icon: IconRetiring },
  ];

  return (
    <Slide index={index} total={TOTAL} section="03 · Why Now" label="Why Now" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Eyebrow>WHY NOW</Eyebrow>

        {/* THE TAKEAWAY, the only serif on this slide */}
        <h2 className="serif" style={{ fontSize: 94, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '26px 0 0' }}>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>Four things became true</span>{' '}
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '560ms', fontStyle: 'italic', color: 'var(--amber)' }}>at the same time.</span>
        </h2>

        {/* Support, sans throughout, clearly secondary */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, alignContent: 'center', marginTop: 20 }}>
          {forces.map((f, i) => (
            <div key={f.n} data-reveal style={{ '--reveal-delay': `${950 + i * 190}ms`, '--reveal-y': '32px', borderTop: '1px solid rgba(242,237,228,0.22)', paddingTop: 24 }}>
              <div style={{ minHeight: 64, marginBottom: 14 }}>
                <f.Icon d={1150 + i * 190} />
              </div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 14 }}>
                {f.n}
              </div>
              <div style={{ fontSize: 27, lineHeight: 1.2, fontWeight: 500, color: 'var(--bone)', marginBottom: 14, letterSpacing: '-0.01em' }}>
                {f.t}
              </div>
              <div style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--bone-2)', fontWeight: 300, opacity: 0.85 }}>
                {f.b}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Slide>
  );
}

/* ============ 05 · TRACTION ============
   ONE IDEA: Demand is pulling us, we never went looking for it.
   (Founder note: the "six people, zero dollars" framing was not landing
   here; capital efficiency now lives on the Team slide where it reads as
   conviction rather than as an excuse.) */
function CondTraction({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  const partners = [
    { name: 'RAMSA', sub: 'Robert A.M. Stern Architects' },
    { name: 'Hart Howerton', sub: 'Architecture · Planning · Landscape' },
  ];
  const talking = ['Selldorf Architects', 'Arquitectonica', 'FXCollaborative', 'Notre Dame School of Architecture'];

  return (
    <Slide index={index} total={TOTAL} section="04 · Momentum" label="Momentum" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Eyebrow>MOMENTUM</Eyebrow>

        {/* THE TAKEAWAY, the only serif on this slide */}
        <h2 className="serif" style={{ fontSize: 96, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '26px 0 0' }}>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>The firms that set the standard</span><br />
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '560ms', fontStyle: 'italic', color: 'var(--amber)' }}>are already at the table.</span>
        </h2>

        <div data-reveal style={{
          marginTop: 28, fontSize: 28, lineHeight: 1.45, fontWeight: 300,
          color: 'var(--bone-2)', maxWidth: 1400, '--reveal-delay': '950ms',
        }}>
          Two firms have testing dates on the calendar. Four more are in conversation.
        </div>

        {/* Support: the pull, quantified. Sans throughout. */}
        <div style={{ paddingTop: 46, display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 76 }}>
          <div>
            <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)', marginBottom: 20, '--reveal-delay': '1250ms' }}>
              TESTING SCHEDULED · DATES SET
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
              {partners.map((p, i) => (
                <div key={p.name} data-reveal style={{
                  '--reveal-delay': `${1350 + i * 150}ms`, '--reveal-y': '18px',
                  border: '1px solid rgba(242,237,228,0.14)',
                  background: 'rgba(242,237,228,0.03)',
                  padding: '26px 24px',
                }}>
                  <div style={{ fontSize: 34, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 500, color: 'var(--bone)' }}>{p.name}</div>
                  <div style={{ fontSize: 16, color: 'var(--bone-2)', opacity: 0.65, marginTop: 8, fontWeight: 300 }}>{p.sub}</div>
                </div>
              ))}
            </div>

            <div className="mono" data-reveal style={{
              '--reveal-delay': '1620ms', marginTop: 16,
              fontSize: 11, letterSpacing: '0.18em', color: 'var(--bone-2)', opacity: 0.5,
            }}>
              COMMITMENTS ARE VERBAL · NOTHING COUNTERSIGNED
            </div>

            <div style={{ display: 'flex', gap: 64, marginTop: 34 }}>
              <div data-reveal style={{ '--reveal-delay': '1750ms' }}>
                <div style={{ fontSize: 58, lineHeight: 1, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--bone)' }}>
                  <Counter to={60} duration={1100} delay={1850} active={isActive} format={(n) => Math.round(n)} />
                </div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--bone-2)', opacity: 0.6, marginTop: 10 }}>
                  WAITLIST · UNPROMOTED
                </div>
              </div>
              <div data-reveal style={{ '--reveal-delay': '1880ms' }}>
                <div style={{ fontSize: 58, lineHeight: 1, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--amber)' }}>
                  <Counter to={4} duration={900} delay={1980} active={isActive} format={(n) => Math.round(n)} />
                </div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--bone-2)', opacity: 0.6, marginTop: 10 }}>
                  FIRMS IN CONVERSATION
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(242,237,228,0.12)', paddingLeft: 52 }}>
            <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)', opacity: 0.8, marginBottom: 22, '--reveal-delay': '1500ms' }}>
              IN CONVERSATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              {talking.map((n, i) => (
                <div key={n} data-reveal style={{ '--reveal-delay': `${1600 + i * 110}ms`, fontSize: 22, color: 'var(--bone)', fontWeight: 300 }}>
                  {n}
                </div>
              ))}
            </div>

            {/* The rate statement: what changed, and how fast. */}
            <div data-reveal style={{
              marginTop: 34, paddingTop: 26, borderTop: '1px solid rgba(242,237,228,0.12)',
              fontSize: 21, lineHeight: 1.45, color: 'var(--bone-2)', fontWeight: 300,
              '--reveal-delay': '2150ms',
            }}>
              Eighteen months from idea to an enterprise-level product — no outside funding.
              <strong style={{ color: 'var(--bone)', fontWeight: 500 }}> The waitlist built itself while we were heads-down.</strong>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============ 06 · MARKET ============
   ONE IDEA: We replace a $700M line item firms already pay every year.
   (Founder notes: the arrow animation was glitchy, removed. The row
   bars said nothing, replaced with a single proportional figure that
   shows the replaceable slice inside the whole market.) */
function CondMarket({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  return (
    <Slide index={index} total={TOTAL} section="05 · Market" label="Market" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Eyebrow>MARKET</Eyebrow>

        {/* THE TAKEAWAY, the only serif on this slide.
            The hero is the replaceable line item, not the market size. */}
        <h2 className="serif" style={{ fontSize: 96, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '26px 0 0' }}>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>Firms already pay </span>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '480ms', fontStyle: 'italic', color: 'var(--amber)' }}>$700M a year</span><br />
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '820ms' }}>for this. We replace it.</span>
        </h2>

        {/* Proportional figure: the replaceable slice inside the market.
            One idea, drawn to scale, no decorative arrow. */}
        <div style={{ marginTop: 52 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--bone-2)', opacity: 0.6 }}>
              GLOBAL BUILDING CODE COMPLIANCE · $8.16B TODAY
            </div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--bone-2)', opacity: 0.45 }}>
              $14.73B BY 2030 · 8.8% CAGR
            </div>
          </div>

          {/* full-market track, with the ~$700M consultant slice to scale (8.6%) */}
          <div style={{ position: 'relative', height: 56, width: '100%', border: '1px solid rgba(242,237,228,0.18)' }}>
            <div
              className="fw-bar"
              style={{
                '--fw-w': '8.6%', '--fw-delay': '1150ms',
                position: 'absolute', left: 0, top: 0, bottom: 0,
                background: 'var(--amber)',
              }}
            />
            <div
              className="fw-bar"
              style={{
                '--fw-w': '55.4%', '--fw-delay': '1350ms',
                position: 'absolute', left: '8.6%', top: 0, bottom: 0,
                background: 'rgba(242,237,228,0.10)',
              }}
            />
          </div>

          <div data-reveal style={{ '--reveal-delay': '1600ms', display: 'flex', gap: 14, alignItems: 'baseline', marginTop: 16 }}>
            <span style={{ width: 26, height: 10, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ fontSize: 24, color: 'var(--bone)', fontWeight: 400 }}>
              <strong style={{ fontWeight: 500 }}>~$700M</strong> paid to outside code consultants. The line item we replace.
            </span>
          </div>
        </div>

        {/* Support, two phases, sans, clearly secondary */}
        <div style={{ paddingTop: 44, borderTop: '1px solid rgba(242,237,228,0.16)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 76 }}>
          <div data-reveal style={{ '--reveal-delay': '1800ms' }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)', marginBottom: 16 }}>
              PHASE ONE · ARCHITECTS
            </div>
            <div style={{ fontSize: 23, lineHeight: 1.45, fontWeight: 300, color: 'var(--bone-2)' }}>
              <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>1,235 US firms</strong> have 50 or more
              people. That is <strong style={{ fontWeight: 500, color: 'var(--bone)' }}>6.5% of firms</strong>, but <strong style={{ fontWeight: 500, color: 'var(--bone)' }}>more than half</strong> of everyone in private practice, where the
              complex projects are and where our design partners already are.
            </div>
          </div>
          <div data-reveal style={{ '--reveal-delay': '1950ms' }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)', marginBottom: 16 }}>
              PHASE TWO · CITIES
            </div>
            <div style={{ fontSize: 23, lineHeight: 1.45, fontWeight: 300, color: 'var(--bone-2)' }}>
              Every submission from a Cuniform firm arrives <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>pre-checked
              and cited</strong>. Jurisdictions clear them faster, at no cost to them and with no procurement.
            </div>
          </div>
        </div>

        <SourceTag style={{ marginTop: 22 }}>MARKET · COHERENT MARKET INSIGHTS, 2023&nbsp;&nbsp;·&nbsp;&nbsp;FIRM COUNTS · AIA FIRM SURVEY</SourceTag>
      </div>
    </Slide>
  );
}

/* ============ 07 · LANDSCAPE ============
   ONE IDEA: Everyone works after the drawing is done. Nobody is in the model. */
function CondCompetition({ index }) {
  const COLS = '230px 1fr 96px 150px';
  const rows = [
    { name: 'UpCodes', what: 'Code search. Reads the rule book.', raised: '$7.6M', w: 8 },
    { name: 'CodeComply.Ai', what: 'Reviews PDFs after design is done.', raised: '$2M', w: 2 },
    { name: 'PermitFlow', what: 'Automates the submission paperwork.', raised: '$91M', w: 100 },
    { name: 'Archistar · CivCheck · Symbium', what: 'Help city reviewers review faster.', raised: '\u2013', w: 0 },
  ];

  return (
    <Slide index={index} total={TOTAL} section="06 · Landscape" label="Landscape" tone="paper">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 120px 130px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Eyebrow style={{ color: 'var(--amber)' }}>LANDSCAPE</Eyebrow>

        {/* THE TAKEAWAY, the only serif on this slide */}
        <h2 className="serif" style={{ fontSize: 96, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '26px 0 0', color: 'var(--ink)' }}>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>A hundred million dollars in.</span><br />
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '560ms', fontStyle: 'italic', color: 'var(--amber)' }}>Nobody is inside the model.</span>
        </h2>

        {/* Support, the table, sans throughout */}
        <div style={{ marginTop: 46 }}>
          <div style={{ display: 'grid', gridTemplateColumns: COLS, gap: 26, paddingBottom: 12, borderBottom: '1.5px solid var(--ink)' }}>
            {['COMPANY', 'WHAT THEY DO', 'RAISED', ''].map((c, i) => (
              <div key={i} className="mono" style={{ fontSize: 11, letterSpacing: '0.24em', color: 'rgba(10,10,10,0.4)' }}>{c}</div>
            ))}
          </div>

          {rows.map((r, i) => (
            <div key={r.name} data-reveal style={{
              '--reveal-delay': `${1000 + i * 130}ms`,
              display: 'grid', gridTemplateColumns: COLS, gap: 26,
              padding: '20px 0', borderBottom: '1px solid rgba(10,10,10,0.1)', alignItems: 'center',
            }}>
              <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.2 }}>{r.name}</div>
              <div style={{ fontSize: 21, color: 'rgba(10,10,10,0.6)', fontWeight: 300 }}>{r.what}</div>
              <div style={{ fontSize: 22, color: 'rgba(10,10,10,0.45)', fontWeight: 400 }}>{r.raised}</div>
              <div style={{ height: 8, background: 'rgba(10,10,10,0.07)', position: 'relative' }}>
                {r.w > 0 && (
                  <div
                    className="fw-bar"
                    style={{
                      '--fw-w': `${r.w}%`, '--fw-delay': `${1150 + i * 130}ms`,
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      background: 'rgba(10,10,10,0.42)',
                    }}
                  />
                )}
              </div>
            </div>
          ))}

          <div data-reveal style={{
            '--reveal-delay': '1580ms',
            display: 'grid', gridTemplateColumns: COLS, gap: 26,
            padding: '22px 24px', margin: '0 -24px', alignItems: 'center', background: 'var(--ink)',
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--amber)' }}>Cuniform</div>
            <div style={{ fontSize: 21, color: 'var(--bone)', fontWeight: 400 }}>
              Inside the model, while it is being drawn.
            </div>
            <div style={{ fontSize: 22, color: 'rgba(242,237,228,0.35)' }}>&ndash;</div>
            <div />
          </div>
        </div>

        <div data-reveal style={{
          paddingTop: 38, fontSize: 27, lineHeight: 1.4,
          color: 'rgba(10,10,10,0.75)', fontWeight: 300, maxWidth: 1400, '--reveal-delay': '1750ms',
        }}>
          Every one of them works on the drawing after it is finished, or on the paperwork around it.
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}> None of them check the code while you draw.</strong>
        </div>

        <SourceTag dark={false} style={{ marginTop: 18 }}>FUNDING · PITCHBOOK, TECHCRUNCH, BUSINESSWIRE</SourceTag>
      </div>
    </Slide>
  );
}

/* ============ 08 · TEAM ============
   ONE IDEA: Built by an architect who lived the problem.
   (Capital efficiency moved here from Traction, as conviction, not excuse.) */
function CondTeam({ index }) {
  const founders = [
    { name: 'Joe Yatco', role: 'CEO', bio: 'Ten years in architecture. Lived the code-compliance problem across 80+ projects at RAMSA and East Horizon.', photo: 'assets/joe-yatco.png' },
    { name: 'Kyle Gallatin', role: 'CTO', bio: 'Production ML at Pfizer, Etsy, and Handshake. O’Reilly author. Full-time on close.', photo: 'assets/kyle-gallatin.png' },
    { name: 'Arnav Somani', role: 'SENIOR DESIGNER', bio: 'Led design at Smartmedia Tech. Enterprise tools used across Visa, Nike, and the IOC.', photo: 'assets/arnav-somani.png' },
  ];

  /* Design lead and advisor. Al's line is drawn from his public profile
     (Google, prior AWS design leadership, Rice). Haakon's Procore title is
     still unconfirmed, so his line states only what is publicly visible. */
  const support = [
    { name: 'Al Deliallisi', role: 'PRODUCT DESIGN', bio: 'Design at Google. Previously led design for a major AWS service. Rice University.' },
    { name: 'Haakon Sorensen', role: 'CSO', bio: 'Construction-tech go-to-market. Procore certified. Currently at Shippeo.' },
  ];

  return (
    <Slide index={index} total={TOTAL} section="07 · Team" label="Team" tone="dark">
      <div style={{ position: 'absolute', inset: 0, padding: '132px 120px 118px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Eyebrow>TEAM</Eyebrow>

        {/* THE TAKEAWAY, the only serif on this slide */}
        <h2 className="serif" style={{ fontSize: 78, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '20px 0 0' }}>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>Built by an architect</span>{' '}
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '560ms', fontStyle: 'italic', color: 'var(--amber)' }}>who lived the problem.</span>
        </h2>

        <div data-reveal style={{
          marginTop: 20, fontSize: 23, lineHeight: 1.45, fontWeight: 300,
          color: 'var(--bone-2)', maxWidth: 1420, '--reveal-delay': '900ms',
        }}>
          Most AEC software is built by technologists who studied the industry from outside.
          Joe spent ten years losing months to code review, then built the tool he needed.
          <strong style={{ color: 'var(--bone)', fontWeight: 500 }}> Eighteen months, no outside
          funding, an enterprise-ready product. Built by the team that proves it can be done.</strong>
        </div>

        <div style={{ paddingTop: 30, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {founders.map((f, i) => (
            <div key={f.name} data-reveal style={{
              '--reveal-delay': `${1200 + i * 180}ms`, '--reveal-y': '30px',
              borderTop: '1px solid rgba(242,237,228,0.22)', paddingTop: 24,
            }}>
              <div style={{
                width: 64, height: 64, marginBottom: 14,
                background: '#0A0A0A',
                border: '1px solid rgba(242,237,228,0.14)',
                position: 'relative', overflow: 'hidden',
              }}>
                <img
                  src={f.photo}
                  alt={f.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    display: 'block', filter: 'grayscale(1)',
                  }}
                />
              </div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.28em', color: 'var(--amber)', marginBottom: 12 }}>
                {f.role}
              </div>
              <div style={{ fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 500, color: 'var(--bone)', marginBottom: 10 }}>
                {f.name}
              </div>
              <div style={{ fontSize: 17, lineHeight: 1.4, color: 'var(--bone-2)', fontWeight: 300, opacity: 0.85 }}>
                {f.bio}
              </div>
            </div>
          ))}
        </div>

        {/* Design lead and advisor, one tier down from the founders. */}
        <div style={{
          marginTop: 22, paddingTop: 20, borderTop: '1px solid rgba(242,237,228,0.14)',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, alignItems: 'start',
        }}>
          {support.map((p, i) => (
            <div key={p.name} data-reveal style={{ '--reveal-delay': `${1780 + i * 150}ms` }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.26em', color: 'var(--amber)', opacity: 0.85, marginBottom: 10 }}>
                {p.role}
              </div>
              <div style={{ fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.015em', fontWeight: 500, color: 'var(--bone)', marginBottom: 7 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 16, lineHeight: 1.4, color: 'var(--bone-2)', fontWeight: 300, opacity: 0.8 }}>
                {p.bio}
              </div>
            </div>
          ))}

          <div data-reveal style={{ '--reveal-delay': '2080ms' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.26em', color: 'var(--amber)', opacity: 0.85, marginBottom: 10 }}>
              PLATFORM TECH LEAD
            </div>
            <div style={{ fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.015em', fontWeight: 500, color: 'var(--bone)', marginBottom: 7 }}>
              Michael Gallatin
            </div>
            <div style={{ fontSize: 16, lineHeight: 1.4, color: 'var(--bone-2)', fontWeight: 300, opacity: 0.8 }}>
              Staff software engineer. Machine-learning systems at Etsy and Pfizer.
            </div>
          </div>
        </div>

      </div>
    </Slide>
  );
}

/* ============ 09 · THE ASK ============
   ONE IDEA: $1.5M buys 18 months and gets us to $1M ARR.
   (Founder decision: lead with $1M, not $500K. At 8–12x ARR multiples a
   $12M post requires ~$1M+ ARR to justify a flat next round, and 78% of
   vertical-AI Series A rounds happen under $1.2M ARR, so $1M is both the
   fundable number and the one this valuation implies.) */
function CondAsk({ index }) {
  const innerRef = useRef(null);
  const isActive = useSlideActive(innerRef);

  return (
    <Slide index={index} total={TOTAL} section="08 · The Ask" label="The Ask" tone="dark">
      <div ref={innerRef} style={{ position: 'absolute', inset: 0, padding: '150px 120px 125px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Eyebrow>THE ASK</Eyebrow>

        {/* THE TAKEAWAY, the only serif on this slide */}
        <h2 className="serif" style={{ fontSize: 96, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '26px 0 0' }}>
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '200ms' }}>$1.5M for eighteen months,</span><br />
          <span data-wipe style={{ display: 'inline-block', whiteSpace: 'nowrap', '--reveal-delay': '560ms', fontStyle: 'italic', color: 'var(--amber)' }}>to reach $1M in ARR.</span>
        </h2>

        <div data-reveal style={{
          marginTop: 26, fontSize: 27, lineHeight: 1.45, fontWeight: 300,
          color: 'var(--bone-2)', maxWidth: 1400, '--reveal-delay': '950ms',
        }}>
          SAFE at <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>$12M post-money</strong>.
          Eighteen months is sized to this industry’s sales cycle of <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>six to nine months</strong> a deal.
        </div>

        {/* Support, sans, two columns, clearly secondary */}
        <div style={{ paddingTop: 46, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 76 }}>
          <div data-reveal style={{ '--reveal-delay': '1250ms' }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)', marginBottom: 20 }}>
              WHERE IT GOES
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.5, fontWeight: 300, color: 'var(--bone-2)' }}>
              <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>It converts a volunteer team into a full-time one</strong>,
              and buys the enterprise readiness firms this size require before they can buy.
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {['SOC 2', 'SINGLE SIGN-ON', 'ADMIN CONTROLS'].map((c, i) => (
                <span key={c} data-reveal className="mono" style={{
                  '--reveal-delay': `${1450 + i * 100}ms`,
                  fontSize: 11, letterSpacing: '0.18em',
                  border: '1px solid rgba(242,237,228,0.22)', padding: '8px 14px',
                  color: 'var(--bone-2)',
                }}>{c}</span>
              ))}
            </div>
          </div>

          <div data-reveal style={{ '--reveal-delay': '1450ms' }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--amber)', marginBottom: 20 }}>
              WHERE IT GETS US
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 18 }}>
              <div style={{ fontSize: 72, lineHeight: 1, fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--bone)' }}>
                $<Counter to={1} duration={900} delay={1600} active={isActive} format={(n) => n.toFixed(0)} />M
              </div>
              <div style={{ fontSize: 22, color: 'var(--bone-2)', fontWeight: 300, lineHeight: 1.35 }}>
                ARR at month 18,<br />across 20–25 firms.
              </div>
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--bone-2)', fontWeight: 300, opacity: 0.8 }}>
              Two or three firms adopting Cuniform firm-wide gets us there.
              Our design partners are already on that path.
            </div>
          </div>
        </div>

        <div data-reveal style={{
          marginTop: 40, paddingTop: 26, borderTop: '2px solid var(--amber)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 40,
          '--reveal-delay': '1900ms',
        }}>
          <div style={{ fontSize: 26, color: 'var(--bone)', fontWeight: 400 }}>
            Building code compliance, <span style={{ color: 'var(--amber)' }}>in real time.</span>
          </div>
          <div className="mono" style={{ fontSize: 13, letterSpacing: '0.24em', color: 'var(--bone-2)', opacity: 0.75 }}>
            JOE@CUNIFORM.TECH&nbsp;&nbsp;·&nbsp;&nbsp;CUNIFORM.TECH
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---- The 9 slides, in order --------------------- */
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
  TOTAL, Logomark, SourceTag, Eyebrow,
  IconCodeBook, IconBIM, IconGridlock, IconRetiring,
  CondCover, CondProblem, CondDemo, CondWhyNow, CondTraction,
  CondMarket, CondCompetition, CondTeam, CondAsk,
});
