import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Retail",
  description:
    "Retail intelligence for store performance, SKU availability, promotions, sell-through, customer cohorts, replenishment and execution control.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Retail</div>
          <h1>
            Intelligence for <em>Retail.</em>
          </h1>
          <p>
            Retail performance depends on thousands of store, SKU, promotion and customer
            signals moving together. Canyon Data Labs gives teams one view of sell-through,
            stock, execution quality and replenishment priorities.
          </p>
        </div>
      </section>
      <CardSection
        label="Retail Priorities"
        title={
          <>
            See what is happening <em>at the shelf.</em>
          </>
        }
        cards={[
          {
            eyebrow: "Store Performance",
            title: "Separate location problems from execution problems.",
            body: "Store sales, basket behaviour, inventory, staff execution and local demand are compared against peer stores and expected potential.",
          },
          {
            eyebrow: "SKU Availability",
            title: "Catch stockouts and overstock early.",
            body: "Sell-through, current stock, replenishment lead time and promotional demand are used to flag where availability or excess inventory will hurt performance.",
          },
          {
            eyebrow: "Customer & Promotion",
            title: "Understand which offers drive repeat behaviour.",
            body: "Promotion performance is connected to cohort behaviour, basket mix and post-campaign retention rather than only campaign-period sales.",
          },
        ]}
      />
      <StepSection
        label="Use Cases"
        title={
          <>
            Daily retail decisions with <em>less guesswork.</em>
          </>
        }
        steps={[
          { num: "01", title: "Store Review", body: "Rank stores by performance, potential, availability risk and execution gaps." },
          { num: "02", title: "Replenishment", body: "Recommend stock movement based on sell-through, lead time, events, promotions and store velocity." },
          { num: "03", title: "Promotion Readout", body: "Measure uplift, margin impact, cannibalisation, customer response and post-offer retention." },
          { num: "04", title: "Assortment Tuning", body: "Identify local SKU opportunities and delist candidates by store cluster and customer segment." },
        ]}
      />
      <DarkGridSection
        label="Connected Metrics"
        title={
          <>
            Retail intelligence from <em>stockroom to customer.</em>
          </>
        }
        items={[
          { title: "Store Health", body: "Sales, margin, availability, footfall, basket and execution quality." },
          { title: "SKU Movement", body: "Sell-through, stock days, replenishment risk and local assortment fit." },
          { title: "Promotion Quality", body: "Uplift, margin, cannibalisation, cohort response and repeat purchase." },
          { title: "Customer Cohorts", body: "Frequency, basket mix, churn risk, loyalty behaviour and campaign response." },
        ]}
      />
      <FinalCTA />
    </>
  );
}
