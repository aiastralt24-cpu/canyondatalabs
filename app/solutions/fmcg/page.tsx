import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "FMCG",
  description:
    "FMCG intelligence for distributor health, outlet coverage, scheme execution, secondary sales, SKU velocity and supply planning.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">FMCG</div>
          <h1>
            Intelligence for <em>FMCG.</em>
          </h1>
          <p>
            FMCG growth is won in thousands of small decisions: which distributor needs
            attention, which outlet is under-covered, which SKU is slowing down and which
            scheme actually changed behaviour. Canyon Data Labs makes those signals live.
          </p>
        </div>
      </section>
      <CardSection
        label="FMCG Priorities"
        title={
          <>
            Turn distribution complexity into <em>daily focus.</em>
          </>
        }
        cards={[
          {
            eyebrow: "Distributor Network",
            title: "Know who is growing, stalling or masking risk.",
            body: "Distributor scoring combines secondary sales, inventory, payment patterns, claims, scheme usage and coverage to reveal where performance is weakening.",
          },
          {
            eyebrow: "Outlet Execution",
            title: "See coverage quality and visit productivity.",
            body: "Beat plans, visit productivity, outlet potential, order value and assortment gaps are connected so supervisors can coach specific behaviour.",
          },
          {
            eyebrow: "SKU & Scheme Performance",
            title: "Separate real lift from pushed volume.",
            body: "The platform compares SKU velocity before, during and after schemes so teams can identify sustainable demand, channel stuffing and leakage.",
          },
        ]}
      />
      <StepSection
        label="Use Cases"
        title={
          <>
            Where FMCG teams use <em>Canyon Data Labs every week.</em>
          </>
        }
        steps={[
          {
            num: "01",
            title: "Monday Sales Review",
            body: "Leadership sees distributor health, region performance, SKU movement and field priorities before the week starts.",
          },
          {
            num: "02",
            title: "Field Coaching",
            body: "ASMs and RSMs receive account, beat and outlet-level nudges instead of broad instructions.",
          },
          {
            num: "03",
            title: "Supply Alignment",
            body: "Demand signals from secondary sales feed stockout prediction, replenishment and production planning.",
          },
          {
            num: "04",
            title: "Scheme Review",
            body: "Teams compare uplift, adoption, claims and post-scheme velocity to decide what to repeat or stop.",
          },
        ]}
      />
      <DarkGridSection
        label="Connected Metrics"
        title={
          <>
            FMCG intelligence beyond <em>sales dashboards.</em>
          </>
        }
        items={[
          { title: "Distributor Health", body: "Velocity, stock, credit, claims and consistency scored together." },
          { title: "Retail Coverage", body: "Outlet universe, beat adherence, visit quality and productive calls." },
          { title: "SKU Velocity", body: "Movement by market, channel, outlet type, scheme and inventory position." },
          { title: "Replenishment Risk", body: "Stockout and overstock alerts connected to live demand signals." },
        ]}
      />
      <FinalCTA />
    </>
  );
}
