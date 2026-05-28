"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

type BlockType = "admin" | "prep" | "customer" | "rox" | "free";
type DayBlock = { label: string; type: BlockType; span: number };
type DayRow = { time: string; before: DayBlock[]; with: DayBlock[] };
type DayKey = "pharma" | "fmcg" | "mfg";

const DAYS: Record<
  DayKey,
  {
    label: string;
    hLeft: string;
    rows: DayRow[];
    leftK: string;
    leftL: string;
    rightK: string;
    rightL: string;
  }
> = {
  pharma: {
    label: "Pharma · Medical Rep",
    hLeft: "the day disappears",
    rows: [
      { time: "8-9", before: [{ label: "Email + CRM logging", type: "admin", span: 1 }], with: [{ label: "Visit plan ready", type: "rox", span: 0.5 }, { label: "Doctor calls", type: "customer", span: 1 }] },
      { time: "9-10", before: [{ label: "Manual call planning", type: "prep", span: 1 }], with: [{ label: "Doctor calls", type: "customer", span: 1.5 }] },
      { time: "10-11", before: [{ label: "Doctor call", type: "customer", span: 1 }], with: [{ label: "Doctor calls", type: "customer", span: 1.5 }] },
      { time: "11-12", before: [{ label: "Sample reconciliation", type: "admin", span: 1 }], with: [{ label: "Doctor calls", type: "customer", span: 1.5 }] },
      { time: "1-2", before: [{ label: "RCPA data entry", type: "admin", span: 1 }], with: [{ label: "Auto-logged by Canyon", type: "rox", span: 0.6 }, { label: "Chemist visits", type: "customer", span: 1 }] },
      { time: "2-3", before: [{ label: "Travel + expense forms", type: "admin", span: 1 }], with: [{ label: "Chemist visits", type: "customer", span: 1.5 }] },
      { time: "3-4", before: [{ label: "Chemist visit", type: "customer", span: 1 }], with: [{ label: "Key-account focus", type: "customer", span: 1.5 }] },
      { time: "4-5", before: [{ label: "EOD report + next-day plan", type: "admin", span: 1 }], with: [{ label: "Tomorrow auto-planned", type: "rox", span: 0.6 }, { label: "Freed time", type: "free", span: 1 }] },
    ],
    leftK: "~30%",
    leftL: "of the day actually spent with doctors & chemists",
    rightK: "~65%",
    rightL: "customer-facing once Canyon logs, plans & reconciles",
  },
  fmcg: {
    label: "FMCG · Sales Officer",
    hLeft: "buried in the DMS",
    rows: [
      { time: "8-9", before: [{ label: "Order punching in DMS", type: "admin", span: 1 }], with: [{ label: "Beat auto-sequenced", type: "rox", span: 0.6 }, { label: "Outlet visits", type: "customer", span: 1 }] },
      { time: "9-10", before: [{ label: "Beat planning by hand", type: "prep", span: 1 }], with: [{ label: "Outlet visits", type: "customer", span: 1.5 }] },
      { time: "10-11", before: [{ label: "Outlet visit", type: "customer", span: 1 }], with: [{ label: "Outlet visits", type: "customer", span: 1.5 }] },
      { time: "11-12", before: [{ label: "Stock & scheme reconciliation", type: "admin", span: 1 }], with: [{ label: "Outlet visits", type: "customer", span: 1.5 }] },
      { time: "1-2", before: [{ label: "Distributor follow-up calls", type: "prep", span: 1 }], with: [{ label: "Auto-nudged by Canyon", type: "rox", span: 0.6 }, { label: "New outlet onboarding", type: "customer", span: 1 }] },
      { time: "2-3", before: [{ label: "Competitor price logging", type: "admin", span: 1 }], with: [{ label: "Outlet visits", type: "customer", span: 1.5 }] },
      { time: "3-4", before: [{ label: "Outlet visit", type: "customer", span: 1 }], with: [{ label: "Priority outlets", type: "customer", span: 1.5 }] },
      { time: "4-5", before: [{ label: "EOD sales report", type: "admin", span: 1 }], with: [{ label: "Auto-reported", type: "rox", span: 0.6 }, { label: "Freed time", type: "free", span: 1 }] },
    ],
    leftK: "~25%",
    leftL: "of the day actually spent at outlets",
    rightK: "~70%",
    rightL: "in-market selling once Canyon runs orders & beats",
  },
  mfg: {
    label: "Manufacturing · Plant Head",
    hLeft: "chasing spreadsheets",
    rows: [
      { time: "8-9", before: [{ label: "Reconcile night-shift logs", type: "admin", span: 1 }], with: [{ label: "Auto-summarised", type: "rox", span: 0.6 }, { label: "Shop-floor walk", type: "customer", span: 1 }] },
      { time: "9-10", before: [{ label: "Chase indent status calls", type: "prep", span: 1 }], with: [{ label: "Production review", type: "customer", span: 1.5 }] },
      { time: "10-11", before: [{ label: "Production review", type: "customer", span: 1 }], with: [{ label: "Production review", type: "customer", span: 1.5 }] },
      { time: "11-12", before: [{ label: "Stockout firefighting", type: "admin", span: 1 }], with: [{ label: "Predicted & pre-ordered", type: "rox", span: 0.6 }, { label: "Vendor meeting", type: "customer", span: 1 }] },
      { time: "1-2", before: [{ label: "Manual OTIF tracking", type: "admin", span: 1 }], with: [{ label: "Auto-tracked", type: "rox", span: 0.6 }, { label: "Line optimisation", type: "customer", span: 1 }] },
      { time: "2-3", before: [{ label: "Procurement price checks", type: "prep", span: 1 }], with: [{ label: "Quality & process", type: "customer", span: 1.5 }] },
      { time: "3-4", before: [{ label: "Cross-checking dispatch", type: "admin", span: 1 }], with: [{ label: "Strategic planning", type: "customer", span: 1.5 }] },
      { time: "4-5", before: [{ label: "Compile MIS for management", type: "admin", span: 1 }], with: [{ label: "Auto-compiled MIS", type: "rox", span: 0.6 }, { label: "Freed time", type: "free", span: 1 }] },
    ],
    leftK: "~35%",
    leftL: "of the day on the floor solving real problems",
    rightK: "~75%",
    rightL: "on production & strategy once Canyon tracks the rest",
  },
};

const FEATURES = [
  {
    id: "distributor",
    title: "Distributor Intelligence",
    body: "Every distributor scored live on velocity, coverage, payment behaviour and stock health, surfaced as a ranked list your field force acts on the same morning.",
    link: "Explore Sales Intelligence",
  },
  {
    id: "ask",
    title: "Ask Your Data",
    body: "Anyone, from the field officer to the MD, asks a question in plain language and gets an answer grounded in your real numbers, with the chart to back it.",
    link: "See agentic AI live",
  },
  {
    id: "supply",
    title: "Supply Chain & S&OP",
    body: "Watch demand fidelity erode from forecast to shelf, and catch the drop before it becomes a stockout. OTIF, IFR and indent automation, end to end.",
    link: "Explore Supply Chain",
  },
  {
    id: "procure",
    title: "Procurement Intelligence",
    body: "Full spend visibility against consumption: where money goes, to whom, at what price. Working capital freed through smarter, data-led ordering.",
    link: "Explore Procurement",
  },
] as const;

type FeatureId = (typeof FEATURES)[number]["id"];

function DayGrid({ rows, variant }: { rows: DayRow[]; variant: "before" | "with" }) {
  return (
    <div className="dayGrid">
      {rows.map((row) => (
        <div className="dayGrid-row" key={row.time}>
          <div className="timeCell">{row.time}</div>
          <div className="track">
            {row[variant].map((block) => (
              <div
                className={`blk ${block.type}`}
                key={`${row.time}-${block.label}`}
                style={{ flex: block.span }}
              >
                {block.label}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureVisual({ id }: { id: string }) {
  if (id === "ask") {
    return (
      <div className="mock">
        <MockBar label="canyon / ask" />
        <div className="mock-body">
          <div className="chat">
            <div className="msg u">Why did secondary sales dip in Zone C last week?</div>
            <div className="msg b">
              Zone C dropped <strong>14% WoW</strong>. Driver: <strong>3 of the top-10 distributors</strong> hit stockouts on the 110mm SKU.
            </div>
            <div className="msg b">I have nudged those distributors and flagged the indent gap to SCM.</div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "supply") {
    const rows = [["Forecast", 100], ["Indent raised", 88], ["Produced", 81], ["Dispatched", 74], ["Fulfilled OTIF", 67]] as const;
    return (
      <div className="mock">
        <MockBar label="canyon / demand-fidelity" />
        <div className="mock-body">
          <div className="mock-h">Forecast to Fulfilment</div>
          {rows.map(([name, pct]) => (
            <div className="mrow" key={name}>
              <span className="nm wide">{name}</span>
              <span className="bar-mini fill"><i style={{ width: `${pct}%` }} /></span>
              <span className="sc">{pct}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "procure") {
    return (
      <div className="mock">
        <MockBar label="canyon / spend" />
        <div className="mock-body">
          <div className="kpis">
            <div className="kpi"><div className="l">Annual Spend</div><div className="v">Rs.68Cr</div><div className="d up">tracked live</div></div>
            <div className="kpi"><div className="l">Working Capital</div><div className="v">Rs.4.1Cr</div><div className="d up">freed</div></div>
            <div className="kpi"><div className="l">Price Variance</div><div className="v">3.8%</div><div className="d down">vs index</div></div>
          </div>
          {["Polymer / Resin", "Packaging", "Logistics"].map((name, i) => (
            <div className="mrow" key={name}>
              <span className="nm">{name}</span>
              <span className="sc muted">{["Rs.42.6Cr", "Rs.11.2Cr", "Rs.8.9Cr"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const rows = [["Rajkot - Zone A", 92, "#6E8C5A"], ["Vadodara - Zone D", 85, "#6E8C5A"], ["Surat - Zone B", 78, "#C4A12A"], ["Ahmedabad - Zone C", 61, "#C4572A"], ["Bhavnagar - Zone E", 54, "#C4572A"]] as const;
  return (
    <div className="mock">
      <MockBar label="canyon / distributor-health" />
      <div className="mock-body">
        <div className="mock-h">Distributor Health · Live</div>
        {rows.map(([name, pct, color]) => (
          <div className="mrow" key={name}>
            <span className="nm">{name}</span>
            <span className="bar-mini"><i style={{ width: `${pct}%`, background: color }} /></span>
            <span className="sc" style={{ color }}>{pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockBar({ label }: { label: string }) {
  return (
    <div className="mock-bar">
      <span className="mock-dot red" />
      <span className="mock-dot yellow" />
      <span className="mock-dot green" />
      <span className="mock-url">{label}</span>
    </div>
  );
}

export default function HomeNewSections() {
  const [dayKey, setDayKey] = useState<DayKey>("pharma");
  const [split, setSplit] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [feature, setFeature] = useState<FeatureId>(FEATURES[0].id);
  const day = DAYS[dayKey];

  const splitStyle = useMemo(() => ({ "--split": `${split}%` } as CSSProperties), [split]);

  function setFromClientX(clientX: number, currentTarget: HTMLDivElement) {
    const rect = currentTarget.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.max(6, Math.min(94, pct)));
  }

  return (
    <>
      <section className="daySection">
        <div className="wrap">
          <div className="dayHead">
            <div>
              <div className="section-label">A Day In The Field</div>
              <h2 className="section-title">
                The same day.
                <br />
                <em>Before and with Canyon.</em>
              </h2>
            </div>
            <p className="section-body">
              Drag the divider. The left shows today&rsquo;s admin-heavy workflow. The right
              shows the same day once Canyon handles the busywork.
            </p>
          </div>

          <div className="segTabs">
            {(Object.keys(DAYS) as DayKey[]).map((key) => (
              <button
                className={`segTab${dayKey === key ? " active" : ""}`}
                key={key}
                onClick={() => setDayKey(key)}
                type="button"
              >
                {DAYS[key].label}
              </button>
            ))}
          </div>

          <div className="legend">
            <span className="legend-item"><span className="legend-dot customer" />Customer / value-creating</span>
            <span className="legend-item"><span className="legend-dot admin" />Admin & CRM</span>
            <span className="legend-item"><span className="legend-dot prep" />Prep & planning</span>
            <span className="legend-item"><span className="legend-dot rox" />Handled by Canyon</span>
            <span className="legend-item"><span className="legend-dot free" />Freed time</span>
          </div>

          <div className="compare">
            <div className="compare-headrow">
              <div className="ch spacer" />
              <div className="ch before">Before Canyon - {day.hLeft}</div>
              <div className="ch with">With Canyon <span className="pill">AUTOPILOT</span></div>
            </div>
            <div
              className="compare-body"
              style={splitStyle}
              onMouseMove={(e) => dragging && setFromClientX(e.clientX, e.currentTarget)}
              onMouseUp={() => setDragging(false)}
              onMouseLeave={() => setDragging(false)}
              onClick={(e) => setFromClientX(e.clientX, e.currentTarget)}
            >
              <DayGrid rows={day.rows} variant="before" />
              <div className="withPanel">
                <DayGrid rows={day.rows} variant="with" />
              </div>
              <div className="divider" onMouseDown={(e) => { e.preventDefault(); setDragging(true); }}>
                <button
                  className="handle"
                  type="button"
                  aria-label="Drag to compare"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(split)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowLeft") setSplit((v) => Math.max(6, v - 4));
                    if (e.key === "ArrowRight") setSplit((v) => Math.min(94, v + 4));
                  }}
                >
                  <span>‹</span><span>›</span>
                </button>
              </div>
            </div>
            <div className="daySummary">
              <div className="daySum left"><span className="daySum-k">{day.leftK}</span><span className="daySum-l">{day.leftL}</span></div>
              <div className="daySum right"><span className="daySum-k">{day.rightK}</span><span className="daySum-l">{day.rightL}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="featSection">
        <div className="wrap">
          <div className="featHead">
            <div className="section-label">See It Working</div>
            <h2 className="section-title">
              See what <em>Canyon can do</em> with your data.
            </h2>
            <p className="section-body">
              From scattered systems to a single decision. Pick a capability and see what
              your team actually opens.
            </p>
          </div>
          <div className="featGrid">
            <div className="accordion">
              {FEATURES.map((item) => (
                <div className={`accItem${feature === item.id ? " open" : ""}`} key={item.id}>
                  <button className="accBtn" type="button" onClick={() => setFeature(item.id)}>
                    <span className="t">{item.title}</span>
                    <span className="ico">+</span>
                  </button>
                  <div className="accBody">
                    <div className="accBody-inner">
                      <p>{item.body}</p>
                      <span className="accLink">{item.link} →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="featStage">
              <div className="featVisual active">
                <FeatureVisual id={feature} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
