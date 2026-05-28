"use client";

import { useMemo, useState } from "react";
import { Arrow } from "@/components/Sections";

const industries = ["FMCG", "Pharma", "Manufacturing", "Retail", "CPG", "Agri"];
const challenges = [
  "Sales & Distribution visibility",
  "Supply Chain & S&OP",
  "Procurement Intelligence",
  "SFA / CRM / DMS build",
  "Multiple areas",
  "Discovery Workshop",
];
const timelines = ["This month", "This quarter", "Planning ahead"];
const budgets = ["Workshop", "POC", "Long-form"];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [industry, setIndustry] = useState("FMCG");
  const [challenge, setChallenge] = useState("Sales & Distribution visibility");
  const [timeline, setTimeline] = useState("This quarter");
  const [budget, setBudget] = useState("POC");
  const [message, setMessage] = useState("");

  const readiness = useMemo(() => {
    let score = 35;
    if (industry) score += 15;
    if (challenge) score += 20;
    if (timeline === "This month") score += 15;
    if (budget === "Long-form") score += 15;
    if (message.trim().length > 20) score += 15;
    return Math.min(score, 100);
  }, [industry, challenge, timeline, budget, message]);

  return (
    <section className="contact" style={{ paddingTop: 150 }}>
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">
          Build your
          <br />
          <em>Discovery Workshop.</em>
        </h2>

        <div className="contact-grid interactive-contact">
          <div className="contact-left">
            <p className="contact-intro">
              Shape the first conversation as you fill the form. Canyon Data Labs uses
              your selections to prepare a focused workshop around systems, decisions,
              data owners and measurable outcomes.
            </p>

            <div className="contact-preview">
              <div className="preview-top">
                <div>
                  <div className="contact-detail-label">Workshop Focus</div>
                  <div className="preview-title">{challenge}</div>
                </div>
                <div className="readiness-ring" style={{ "--score": `${readiness}%` } as React.CSSProperties}>
                  <span>{readiness}</span>
                </div>
              </div>
              <div className="preview-meter">
                <span style={{ width: `${readiness}%` }} />
              </div>
              <div className="preview-grid">
                <div><span>Industry</span>{industry}</div>
                <div><span>Timeline</span>{timeline}</div>
                <div><span>Engagement</span>{budget}</div>
                <div><span>First output</span>Decision map</div>
              </div>
              <p className="preview-note">
                Suggested start: map source systems, decision owners and 2-3 live use
                cases before the workshop.
              </p>
            </div>

            <div className="contact-details compact">
              <div className="contact-detail">
                <div className="contact-detail-icon">AHD</div>
                <div>
                  <div className="contact-detail-label">Base</div>
                  <div className="contact-detail-value">Ahmedabad · India · Gulf</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">@</div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">hello@canyondatalabs.com</div>
                </div>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="fn">First Name</label>
                <input className="form-input" id="fn" type="text" placeholder="Rahul" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="ln">Last Name</label>
                <input className="form-input" id="ln" type="text" placeholder="Sharma" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="em">Work Email</label>
              <input className="form-input" id="em" type="email" placeholder="rahul@company.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="co">Company</label>
              <input className="form-input" id="co" type="text" placeholder="Company name" required />
            </div>

            <ChoiceGroup label="Industry" items={industries} value={industry} onChange={setIndustry} />
            <ChoiceGroup label="Primary Challenge" items={challenges} value={challenge} onChange={setChallenge} />

            <div className="form-row">
              <ChoiceGroup label="Timeline" items={timelines} value={timeline} onChange={setTimeline} compact />
              <ChoiceGroup label="Engagement" items={budgets} value={budget} onChange={setBudget} compact />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="msg">Context</label>
              <textarea
                className="form-input"
                id="msg"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us which systems, teams or decisions you want to connect..."
              />
            </div>

            <div className="form-bottom">
              <p className="form-note">
                We respond within 1 business day. All conversations are confidential.
              </p>
              <button
                type="submit"
                className="form-submit"
                style={sent ? { background: "#657F4E", pointerEvents: "none" } : undefined}
              >
                {sent ? "Workshop Request Sent" : <>Send Workshop Brief <Arrow /></>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ChoiceGroup({
  label,
  items,
  value,
  onChange,
  compact = false,
}: {
  label: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
  compact?: boolean;
}) {
  return (
    <div className="form-group">
      <div className="form-label">{label}</div>
      <div className={`choice-grid${compact ? " compact" : ""}`}>
        {items.map((item) => (
          <button
            type="button"
            className={`choice-chip${value === item ? " active" : ""}`}
            key={item}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
