import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { Arrow, CheckList, FinalCTA } from "@/components/Sections";
import { CardSection } from "@/components/DeepContent";
import OfferingsArchitecture from "@/components/OfferingsArchitecture";
import { MODULES } from "@/lib/site";
import {
  DistributorHealthShell,
  AskAIShell,
  DemandFunnelShell,
  SpendShell,
} from "@/components/Shells";

export const metadata: Metadata = {
  title: "Platform — One Connected Intelligence Layer",
  description:
    "The Canyon Data Labs platform unifies SAP, SFA, DMS and CRM into one AI-first intelligence layer: Sales & Distribution, Supply Chain & S&OP, Procurement, and agentic AI. Connected by design.",
};

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">The Platform</div>
          <h1>
            One platform.
            <br />
            <em>Connected by design.</em>
          </h1>
          <p>
            We strengthen the systems you already have by making them work together. SAP,
            SFA, DMS, CRM, ERP, loyalty, production and planning data converge into one
            intelligent layer for the right person at the moment a decision is made.
          </p>
        </div>
      </section>

      <CardSection
        label="In Plain Language"
        title={
          <>
            Every business runs on decisions. <em>Most data is trapped.</em>
          </>
        }
        body="Information lives in SAP, a distributor system, a field app, a procurement portal, a production file or a spreadsheet someone emailed last Tuesday. Each system works on its own; the business needs them to speak together."
        cards={[
          {
            eyebrow: "The Problem",
            title: "Reports arrive after the moment to act has passed.",
            body: "Leadership waits for teams to compile, reconcile and explain the numbers. By the time the report lands, the field, supply chain or procurement decision has already moved on.",
          },
          {
            eyebrow: "The Canyon Data Labs Layer",
            title: "A single intelligent layer above existing systems.",
            body: "We connect all available enterprise data into a unified, queryable model that keeps source systems intact while making the business view coherent.",
          },
          {
            eyebrow: "The Outcome",
            title: "The right signal reaches the right owner in time.",
            body: "The output can be a dashboard, alert, nudge, score, AI answer or automated workflow. The measure is whether the decision gets better and faster.",
          },
        ]}
      />

      {/* The four-step approach */}
      <FadeUp as="section" className="personas" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <div className="section-label">Data Usability Strategy</div>
          <h2 className="section-title">
            Connect. Contextualise. <em>Activate.</em>
          </h2>
          <div className="personas-grid" style={{ marginTop: 48 }}>
            <div className="persona">
              <div className="persona-role">01 — Connect</div>
              <div className="persona-pain" style={{ fontSize: 21 }}>
                Every source, one layer.
              </div>
              <div className="persona-fix">
                SAP, SFA, DMS, CRM, ERP, Loyalty and Production — connected into a unified,
                queryable layer. Every system included, every data source connected.
              </div>
            </div>
            <div className="persona">
              <div className="persona-role">02 — Contextualise</div>
              <div className="persona-pain" style={{ fontSize: 21 }}>
                Data structured around decisions.
              </div>
              <div className="persona-fix">
                Raw data becomes intelligence only when structured around the decisions
                that need to be made — by domain, by function, by role.
              </div>
            </div>
            <div className="persona">
              <div className="persona-role">03 — Activate</div>
              <div className="persona-pain" style={{ fontSize: 21 }}>
                Built to be acted on.
              </div>
              <div className="persona-fix">
                Nudges, alerts, dashboards and automated decisions designed to change what
                someone does immediately — ready for action inside the workflow.
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <OfferingsArchitecture />

      {/* Live showcase */}
      <section className="showcase on-dark">
        <div className="showcase-head">
          <div className="section-label">See It Working</div>
          <h2 className="section-title">
            Four modules.
            <br />
            <em>One ecosystem.</em>
          </h2>
          <p className="section-body">
            Each module feeds the others. Sales signals inform supply chain; procurement
            informs both. The intelligence compounds.
          </p>
        </div>

        <div className="showcase-row">
          <div className="showcase-copy">
            <div className="showcase-num">01 — Sales & Distribution</div>
            <div className="showcase-title">
              Distributor health, <em>ranked live.</em>
            </div>
            <p className="showcase-desc">
              Distributor health scoring, secondary-sales velocity and coverage gaps
              surfaced live and pushed to the field as nudges.
            </p>
            <CheckList
              items={[
                "Real-time health scores across 5,000+ distributors",
                "Automated nudges pushed to the field",
                "Zone, region and SKU drill-down in one click",
              ]}
            />
            <Link href="/platform/sales-intelligence" className="showcase-link">
              Deep dive: Sales Intelligence <Arrow />
            </Link>
          </div>
          <div className="showcase-visual">
            <DistributorHealthShell />
          </div>
        </div>

        <div className="showcase-row reverse">
          <div className="showcase-copy">
            <div className="showcase-num">02 — Agentic Intelligence</div>
            <div className="showcase-title">
              Ask your data <em>a question.</em>
            </div>
            <p className="showcase-desc">
              Plain-language queries across every connected system, answered with the
              numbers and the chart — grounded in your enterprise data.
            </p>
            <CheckList
              items={[
                "Plain-language queries across SAP, SFA, DMS & CRM",
                "Answers grounded in your data",
                "Proactive — surfaces the “why” before you ask",
              ]}
            />
          </div>
          <div className="showcase-visual">
            <AskAIShell />
          </div>
        </div>

        <div className="showcase-row">
          <div className="showcase-copy">
            <div className="showcase-num">03 — Supply Chain & S&OP</div>
            <div className="showcase-title">
              Forecast to fulfilment, <em>one truth.</em>
            </div>
            <p className="showcase-desc">
              Demand fidelity tracked at every stage, with stockout prediction and indent
              automation across planning, procurement and distribution.
            </p>
            <CheckList
              items={[
                "Stockout prediction before it hits the shelf",
                "Indent automation across the planning chain",
                "OTIF & IFR tracked against demand fidelity",
              ]}
            />
            <Link href="/platform/supply-chain" className="showcase-link">
              Deep dive: Supply Chain <Arrow />
            </Link>
          </div>
          <div className="showcase-visual">
            <DemandFunnelShell />
          </div>
        </div>

        <div className="showcase-row reverse">
          <div className="showcase-copy">
            <div className="showcase-num">04 — Procurement Intelligence</div>
            <div className="showcase-title">
              Every rupee, <em>accounted for.</em>
            </div>
            <p className="showcase-desc">
              Full spend visibility against consumption — where money goes, to whom, at
              what price — with working capital freed through smarter ordering.
            </p>
            <CheckList
              items={[
                "Spend analytics across every category and vendor",
                "Price-variance tracking against index",
                "Working capital freed through smarter ordering",
              ]}
            />
            <Link href="/platform/procurement" className="showcase-link">
              Deep dive: Procurement <Arrow />
            </Link>
          </div>
          <div className="showcase-visual">
            <SpendShell />
          </div>
        </div>
      </section>

      {/* Own platforms callout */}
      <FadeUp as="section" className="personas">
        <div className="wrap">
          <div className="section-label">Starting With Limited Data?</div>
          <h2 className="section-title">
            We build the systems that <em>generate</em> the data.
          </h2>
          <p className="section-body">
            For companies that lack the systems to generate data in the first place, we
            deploy our own Canyon Data Labs-built SFA, CRM and Distributor Management System — in 6–8
            weeks, purpose-built to feed directly into the intelligence layer on top.
          </p>
          <div className="personas-grid" style={{ marginTop: 48 }}>
            <div className="persona">
              <div className="persona-role">SFA — Field Force</div>
              <div className="persona-fix" style={{ marginTop: 0 }}>
                Beat planning, outlet visits, order capture and field nudges — generating
                the data that feeds intelligence on day one.
              </div>
            </div>
            <div className="persona">
              <div className="persona-role">CRM — Relationships</div>
              <div className="persona-fix" style={{ marginTop: 0 }}>
                B2B and B2C alike — customer journeys, pipeline visibility and engagement
                intelligence across every channel.
              </div>
            </div>
            <div className="persona">
              <div className="persona-role">DMS — Distribution</div>
              <div className="persona-fix" style={{ marginTop: 0 }}>
                Order management, stock visibility, claim processing and scheme execution
                across the distributor network.
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Security */}
      <FadeUp as="section" className="security on-dark">
        <div className="security-inner">
          <div className="security-head">
            <div className="section-label">Enterprise-Ready</div>
            <h2 className="security-title">
              Your data stays <em>yours.</em>
            </h2>
            <p className="security-sub">
              Built for the governance, security and flexibility large enterprises
              actually require — with none of the legacy lock-in.
            </p>
          </div>
          <div className="security-grid">
            {[
              ["Secure by Design", "HMAC auth, role-based access and audit trails. Cloud or on-premise — your call, your perimeter."],
              ["Open Ecosystem", "System-agnostic and open-source at the core. Plugs into SAP, SFA, DMS, CRM and ERP for smooth adoption."],
              ["Client-Owned Path", "When you're ready to bring it in-house, we run a clean, structured knowledge transfer. You own the IP path."],
              ["Built to Scale", "Architected for growth from day one. Evolves as your business does, across markets and brands."],
            ].map(([t, b]) => (
              <div className="security-item" key={t}>
                <div className="security-item-title">{t}</div>
                <div className="security-item-body">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <FinalCTA
        title={
          <>
            See the platform
            <br />
            <em>on your own data.</em>
          </>
        }
        secondary={{ href: "/solutions", label: "Explore by industry" }}
      />
    </>
  );
}
