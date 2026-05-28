"use client";

import { useState } from "react";

const offerings = [
  {
    number: "01",
    name: "Canyon Systems",
    action: "Capture the data",
    headline: "The foundation. Right systems, right data.",
    summary:
      "Operational platforms that generate clean, structured data from day one. Built for teams ready to move field, customer and distributor workflows into a reliable system of record.",
    includes: ["SFA for field operations", "CRM for customer workflows", "DMS for distributor operations"],
    proof:
      "A growth-stage company can deploy SFA in 6-8 weeks, start capturing field and order data, and give leadership live visibility within one quarter.",
    tone: "systems",
  },
  {
    number: "02",
    name: "Canyon Edge",
    action: "Understand the data",
    headline: "The decision layer. Your data, made useful.",
    summary:
      "Domain models, dashboards, scores, alerts and AI-assisted workflows that sit above enterprise data and turn operating signals into daily decisions.",
    includes: ["Commercial decision views", "Supply chain planning layers", "Procurement and margin control"],
    proof:
      "Teams see distributor health, fulfilment risk, forecast drift and working-capital signals in the same operating rhythm they already use.",
    tone: "edge",
  },
  {
    number: "03",
    name: "Canyon Grid",
    action: "Trust the data",
    headline: "The trust layer. Every number stays accountable.",
    summary:
      "Monitoring, reconciliation and data-quality controls that keep leadership confident in the numbers behind reviews, nudges and automated actions.",
    includes: ["Automated reconciliation", "Quality and freshness checks", "Exception monitoring"],
    proof:
      "Finance, sales and operations can work from aligned numbers because gaps, delays and mismatches surface as controlled exceptions.",
    tone: "grid",
  },
];

export default function OfferingsArchitecture() {
  const [active, setActive] = useState(0);
  const current = offerings[active];

  return (
    <section className="offerings-arch">
      <div className="wrap offerings-wrap">
        <div className="offerings-head">
          <div>
            <div className="section-label">Our Three Offerings</div>
            <h2 className="section-title">
              Three connected layers.
              <br />
              <em>One operating architecture.</em>
            </h2>
          </div>
          <p className="section-body">
            Canyon Data Labs organises enterprise transformation into three integrated
            offerings: capture clean data, shape it into decisions, and keep every number
            trusted as the business scales.
          </p>
        </div>

        <div className="offerings-flow" aria-label="Canyon Data Labs offering architecture">
          {offerings.map((offering, index) => (
            <button
              className={`offering-card ${offering.tone} ${active === index ? "active" : ""}`}
              key={offering.name}
              onClick={() => setActive(index)}
              type="button"
              aria-pressed={active === index}
            >
              <span className="offering-num">{offering.number}</span>
              <span className="offering-name">{offering.name}</span>
              <span className="offering-action">{offering.action}</span>
              <span className="offering-line" />
              <span className="offering-mini">
                {offering.includes.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </span>
            </button>
          ))}
        </div>

        <div className={`offering-detail ${current.tone}`}>
          <div className="detail-copy">
            <div className="detail-kicker">{current.name}</div>
            <h3>{current.headline}</h3>
            <p>{current.summary}</p>
          </div>
          <div className="detail-panel">
            <div className="detail-panel-title">What it includes</div>
            <div className="detail-list">
              {current.includes.map((item) => (
                <div className="detail-item" key={item}>
                  <span />
                  {item}
                </div>
              ))}
            </div>
            <div className="detail-proof">
              <span>In practice</span>
              {current.proof}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
