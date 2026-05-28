import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, ResourceSection } from "@/components/DeepContent";
import OfferingsArchitecture from "@/components/OfferingsArchitecture";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industry intelligence solutions for FMCG, pharma, manufacturing and retail teams operating across India, Gulf and emerging markets.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Solutions</div>
          <h1>
            Solutions by <em>industry.</em>
          </h1>
          <p>
            Canyon Data Labs adapts the same intelligence foundation to the operating
            reality of each category: distributor-led growth, regulated field teams,
            production complexity, retail execution and multi-market expansion.
          </p>
        </div>
      </section>
      <ResourceSection
        label="Industries"
        title={
          <>
            Built around the decisions <em>each market actually makes.</em>
          </>
        }
        body="The underlying platform is shared. The models, metrics, workflows and nudges are shaped around the commercial and operational rhythm of each industry."
        resources={[
          {
            tag: "FMCG",
            title: "Distributor-led growth with outlet-level visibility",
            excerpt:
              "Track distributor health, retail coverage, SKU velocity, scheme impact and market execution across dense networks.",
            meta: "Sales · DMS · SFA · Supply",
            href: "/solutions/fmcg",
          },
          {
            tag: "Pharma",
            title: "Rep productivity and channel compliance intelligence",
            excerpt:
              "Connect doctor engagement, distributor movement, territory planning, samples, stock and secondary sales into one field layer.",
            meta: "MR · Stockist · Territory · CRM",
            href: "/solutions/pharma",
          },
          {
            tag: "Manufacturing",
            title: "From demand to production to procurement control",
            excerpt:
              "Unify forecast, production, purchase, inventory, dispatch and dealer signals for better service and working capital discipline.",
            meta: "S&OP · Procurement · Plant · Dealer",
            href: "/solutions/manufacturing",
          },
          {
            tag: "Retail",
            title: "Store, SKU and customer intelligence in one layer",
            excerpt:
              "Monitor stock, promotions, sell-through, store execution, customer cohorts and replenishment across formats and markets.",
            meta: "Store · SKU · Loyalty · Replenishment",
            href: "/solutions/retail",
          },
        ]}
      />
      <OfferingsArchitecture />
      <CardSection
        label="Core Offering 1"
        title={
          <>
            Data & Analytics Intelligence. <em>Our flagship.</em>
          </>
        }
        body="For clients who already have systems and data but lack the intelligence layer to make decisions from it."
        cards={[
          {
            eyebrow: "Sales & Distribution",
            title: "Commercial intelligence connected and alive.",
            body: "Primary and secondary sales flow, distributor health scoring, territory whitespace, field effort versus outcome, retailer profiling, forecasting, scheme ROI and nudges.",
          },
          {
            eyebrow: "Supply Chain & S&OP",
            title: "One version of truth from forecast to fulfilment.",
            body: "OTIF, IFR, TAT, SLA, stockout, DOI, SLOB, indent planning, demand fidelity, fulfilment versus forecast and production visibility.",
          },
          {
            eyebrow: "Procurement",
            title: "From spend visibility to working capital control.",
            body: "Spend analysis, PO status, consumption-driven ordering, vendor performance and working capital optimisation across categories and vendors.",
          },
        ]}
      />
      <DarkGridSection
        label="Core Offering 2"
        title={
          <>
            Canyon Data Labs products that generate data <em>from day one.</em>
          </>
        }
        body="For clients starting with early-stage systems, we build and deploy the operational platforms that create the data we then turn into intelligence."
        items={[
          {
            title: "SFA Platform",
            body: "Beat planning, order management, attendance, visit effectiveness and field activity tracking for companies ready to modernise field operations.",
          },
          {
            title: "DMS Platform",
            body: "Distributor management for secondary sales, scheme management, inventory and claims processing.",
          },
          {
            title: "CRM Platform",
            body: "Customer relationship management built to the client's commercial model, developed for Bond-it and configurable for new clients.",
          },
          {
            title: "Loyalty App",
            body: "Consumer or retailer loyalty with points, redemptions, campaigns and user profiling as a source of consumer intelligence.",
          },
          {
            title: "HRMS",
            body: "HR operations such as payroll, attendance, appraisals and compliance where HR data is relevant to performance analytics.",
          },
          {
            title: "R&D / NPD",
            body: "NPD lifecycle tracking, stage-gate visibility, time-to-market benchmarking and early market signal integration.",
          },
        ]}
      />
      <CardSection
        label="The Right Sequence"
        title={
          <>
            Either path ends in <em>connected intelligence.</em>
          </>
        }
        cards={[
          {
            eyebrow: "When Systems Are Early",
            title: "Build the app, generate the data, then build intelligence.",
            body: "A growth company can start with Canyon Data Labs-built SFA, CRM or DMS, then use the data generated inside those tools to power leadership intelligence.",
          },
          {
            eyebrow: "When Systems Exist",
            title: "Connect directly and build the intelligence layer.",
            body: "For enterprises already running SAP, ERP, DMS, CRM or SFA, we integrate the current stack and build the decision layer above it.",
          },
          {
            eyebrow: "End State",
            title: "Connected data, faster decisions, measurable impact.",
            body: "Whether we build the source system or connect to yours, the goal stays the same: make data usable where the business acts.",
          },
        ]}
      />
      <FinalCTA secondary={{ href: "/platform", label: "Explore the platform" }} />
    </>
  );
}
