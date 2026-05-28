import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Supply Chain",
  description:
    "Supply Chain and S&OP intelligence for demand planning, OTIF, IFR, stockout prediction, indent automation and forecast-to-fulfilment visibility.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Supply Chain</div>
          <h1>
            Supply Chain <em>& S&OP.</em>
          </h1>
          <p>
            Bring forecast, production, procurement, warehouse, distributor and outlet
            signals into one planning truth. Canyon Data Labs helps teams predict
            stockouts, control service levels and connect S&OP to execution.
          </p>
        </div>
      </section>
      <CardSection
        label="Planning Reality"
        title={
          <>
            Forecasts fail when every function has <em>its own truth.</em>
          </>
        }
        body="The platform tracks demand fidelity from forecast to fulfilment, showing exactly where plans distort and what needs intervention."
        cards={[
          {
            eyebrow: "Demand Fidelity",
            title: (
              <>
                Where did the plan <em>start breaking?</em>
              </>
            ),
            body: "Compare forecast, sales orders, production plans, dispatches and actual demand by SKU, plant, depot and channel to isolate the stage where signal quality drops.",
            metric: (
              <>
                Outcome: <strong>cleaner S&OP decisions</strong>
              </>
            ),
          },
          {
            eyebrow: "Service Levels",
            title: (
              <>
                Which commitments are <em>at risk?</em>
              </>
            ),
            body: "OTIF, IFR, fill-rate and stock availability are monitored against live demand, so planners can intervene before a miss becomes visible to customers.",
            metric: (
              <>
                Signal: <strong>OTIF, IFR and fill rate</strong>
              </>
            ),
          },
          {
            eyebrow: "Stockout Prediction",
            title: (
              <>
                Which SKU-market pairs will <em>run dry?</em>
              </>
            ),
            body: "Stock, consumption, lead time, replenishment cadence and seasonality are combined to flag locations likely to face availability risk.",
            metric: (
              <>
                Built for <strong>SKU-location granularity</strong>
              </>
            ),
          },
        ]}
      />
      <StepSection
        label="Workflow"
        title={
          <>
            Make planning <em>operational.</em>
          </>
        }
        steps={[
          {
            num: "01",
            title: "Sense",
            body: "Capture forecast, order, inventory, production, dispatch, purchase and consumption signals across the planning chain.",
          },
          {
            num: "02",
            title: "Compare",
            body: "Show variance between forecast, plan, allocation and actual demand at the level where decisions are made.",
          },
          {
            num: "03",
            title: "Predict",
            body: "Identify likely stockouts, overstock, ageing stock, lead-time pressure and fulfilment risk before teams feel the impact.",
          },
          {
            num: "04",
            title: "Orchestrate",
            body: "Turn risk into recommended indents, replenishment actions, escalation paths and planning-review priorities.",
          },
        ]}
      />
      <DarkGridSection
        label="Capabilities"
        title={
          <>
            S&OP intelligence that connects <em>boardroom and warehouse.</em>
          </>
        }
        items={[
          {
            title: "Forecast Variance",
            body: "SKU, depot, plant, channel and region views that make forecast drift visible early enough to correct.",
          },
          {
            title: "Indent Automation",
            body: "Recommended indents based on demand, stock, lead time, safety stock and service commitments.",
          },
          {
            title: "Inventory Health",
            body: "Ageing, slow-moving, excess and constrained stock tracked with the business impact beside every flag.",
          },
          {
            title: "Exception Reviews",
            body: "Planning meetings focused on the few exceptions that move service, cost and working capital.",
          },
        ]}
      />
      <FinalCTA />
    </>
  );
}
