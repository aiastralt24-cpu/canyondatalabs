/* Reusable product UI mockups — pure presentational, server-renderable */

export function ShellChrome({
  title,
  live = false,
  children,
}: {
  title: string;
  live?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="platform-shell">
      <div className="shell-titlebar">
        <div className="shell-dots">
          <span className="shell-dot red" />
          <span className="shell-dot yellow" />
          <span className="shell-dot green" />
        </div>
        <span className="shell-title">{title}</span>
        {live && (
          <div style={{ marginLeft: "auto" }}>
            <div className="shell-status">
              <span className="status-dot" />
              Live
            </div>
          </div>
        )}
      </div>
      <div className="shell-main">{children}</div>
    </div>
  );
}

export function DistributorHealthShell() {
  const rows = [
    ["Rajkot — Zone A", 92, "#2AC46B"],
    ["Vadodara — Zone D", 85, "#2AC46B"],
    ["Surat — Zone B", 78, "#C4A12A"],
    ["Ahmedabad — Zone C", 61, "#C4572A"],
    ["Bhavnagar — Zone E", 54, "#C4572A"],
  ] as const;
  return (
    <ShellChrome title="Canyon Data Labs — Distributor Health" live>
      <div className="chart-panel-label">
        Health Score · Top Zones <span>Updated 2m ago</span>
      </div>
      <div className="dist-list">
        {rows.map(([name, pct, color]) => (
          <div className="dist-row" key={name}>
            <span className="dist-name">{name}</span>
            <div className="dist-score">
              <div
                className="dist-score-fill"
                style={{ width: `${pct}%`, background: color }}
              />
            </div>
            <span className="dist-pct">{pct}</span>
          </div>
        ))}
      </div>
      <div className="shell-note">⚡ NUDGE — 2 zones below threshold. Field reps notified.</div>
    </ShellChrome>
  );
}

export function AskAIShell() {
  return (
    <ShellChrome title="Canyon Data Labs — Ask Intelligence">
      <div className="ai-chat" style={{ minHeight: 260 }}>
        <div className="ai-msg user">Why did secondary sales dip in Zone C last week?</div>
        <div className="ai-msg bot">
          Zone C dropped <strong>14% WoW</strong>. Driver: <strong>3 of top-10 distributors</strong>{" "}
          had stockouts on the fast-moving 110mm SKU. Indent was raised late by 6 days.
        </div>
        <div className="ai-msg bot">
          I&rsquo;ve flagged the indent gap to the SCM team and pushed a re-order nudge to those 3
          distributors. Want the SKU-level breakdown?
        </div>
        <div className="ai-typing">
          <span /> <span /> <span />
        </div>
      </div>
    </ShellChrome>
  );
}

export function DemandFunnelShell() {
  const rows = [
    ["Forecast", 100],
    ["Indent raised", 88],
    ["Produced", 81],
    ["Dispatched", 74],
    ["Fulfilled OTIF", 67],
  ] as const;
  return (
    <ShellChrome title="Canyon Data Labs — Demand Fidelity" live>
      <div className="chart-panel-label">
        Forecast → Fulfilment Funnel <span>This quarter</span>
      </div>
      <div className="mini-funnel">
        {rows.map(([label, pct]) => (
          <div className="mini-funnel-row" key={label}>
            <span className="mini-funnel-label">{label}</span>
            <div className="mini-funnel-bar" style={{ width: `${pct}%` }}>
              {pct}%
            </div>
          </div>
        ))}
      </div>
      <div className="shell-note">
        ⚠ 33% demand lost between forecast &amp; shelf — biggest drop at dispatch.
      </div>
    </ShellChrome>
  );
}

export function SpendShell() {
  const rows = [
    ["Polymer / Resin", "₹42.6Cr", "up"],
    ["Packaging", "₹11.2Cr", "down"],
    ["Logistics", "₹8.9Cr", "up"],
    ["Additives", "₹5.4Cr", "neutral"],
  ] as const;
  return (
    <ShellChrome title="Canyon Data Labs — Spend Intelligence" live>
      <div className="kpi-grid">
        <div className="kpi-tile">
          <div className="kpi-label">Annual Spend</div>
          <div className="kpi-value">₹68Cr</div>
          <div className="kpi-delta up">↑ tracked live</div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-label">Vendors</div>
          <div className="kpi-value">312</div>
          <div className="kpi-delta neutral">42 critical</div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-label">Working Capital</div>
          <div className="kpi-value">₹4.1Cr</div>
          <div className="kpi-delta up">↑ freed</div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-label">Price Variance</div>
          <div className="kpi-value">3.8%</div>
          <div className="kpi-delta down">↓ vs index</div>
        </div>
      </div>
      <div className="chart-panel" style={{ marginTop: 4 }}>
        <div className="chart-panel-label">
          Spend by Category <span>Live</span>
        </div>
        <div className="dist-list">
          {rows.map(([cat, val, d]) => (
            <div className="dist-row" key={cat}>
              <span className="dist-name">{cat}</span>
              <span className={`kpi-delta ${d}`} style={{ marginLeft: "auto" }}>
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ShellChrome>
  );
}
