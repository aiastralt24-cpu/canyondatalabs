import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Procurement",
  description:
    "Procurement intelligence for spend visibility, vendor performance, price variance, consumption planning and working capital control.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Procurement</div>
          <h1>
            Procurement <em>Intelligence.</em>
          </h1>
          <p>
            Move procurement from purchase-order tracking to spend control. Canyon Data
            Labs connects vendors, prices, consumption, inventory and business demand so
            finance and procurement can protect margin and working capital together.
          </p>
        </div>
      </section>
      <CardSection
        label="Spend Control"
        title={
          <>
            Every rupee needs <em>context.</em>
          </>
        }
        body="The platform shows who bought what, then connects that spend to consumption, market movement, supplier performance and the business plan."
        cards={[
          {
            eyebrow: "Spend Visibility",
            title: (
              <>
                Where is money <em>really going?</em>
              </>
            ),
            body: "Category, plant, location, vendor, business unit and buyer views make spend visible through automated consolidation.",
            metric: (
              <>
                Outcome: <strong>clean CFO visibility</strong>
              </>
            ),
          },
          {
            eyebrow: "Price Variance",
            title: (
              <>
                Which prices need <em>clear context?</em>
              </>
            ),
            body: "Track purchase price movement against contracts, last purchase rate, index trends, volume commitments and approved tolerance bands.",
            metric: (
              <>
                Signal: <strong>rate, index and contract variance</strong>
              </>
            ),
          },
          {
            eyebrow: "Consumption Planning",
            title: (
              <>
                Are we buying ahead of <em>actual use?</em>
              </>
            ),
            body: "Purchase signals are connected to production, sales and inventory movement so over-ordering and blocked working capital become visible early.",
            metric: (
              <>
                Outcome: <strong>working capital discipline</strong>
              </>
            ),
          },
        ]}
      />
      <StepSection
        label="How It Works"
        title={
          <>
            Procurement decisions with <em>finance-grade proof.</em>
          </>
        }
        steps={[
          {
            num: "01",
            title: "Connect",
            body: "Pull purchase orders, GRNs, invoices, contracts, vendor masters, inventory and production demand into one spend layer.",
          },
          {
            num: "02",
            title: "Classify",
            body: "Clean categories, suppliers, item hierarchies and cost centres so analysis is consistent across plants and entities.",
          },
          {
            num: "03",
            title: "Benchmark",
            body: "Compare vendors, price movement, terms, delivery reliability, rejection rates and payment behaviour.",
          },
          {
            num: "04",
            title: "Control",
            body: "Create alerts for unusual rates, split purchases, excess ordering, stock build-up and vendor concentration risk.",
          },
        ]}
      />
      <DarkGridSection
        label="Capabilities"
        title={
          <>
            Built for procurement, finance and <em>operations together.</em>
          </>
        }
        items={[
          {
            title: "Vendor Scorecards",
            body: "Delivery, quality, pricing, claims, payment terms and reliability scored for negotiation and allocation decisions.",
          },
          {
            title: "Category Control",
            body: "Spend grouped by business-relevant categories with drill-down to item, plant, buyer and supplier.",
          },
          {
            title: "Leakage Alerts",
            body: "Flags for price spikes, duplicate buying, contract leakage, low-volume expensive purchases and approval drift.",
          },
          {
            title: "Working Capital View",
            body: "Procurement decisions connected to inventory movement and demand so cash stays available for productive growth.",
          },
        ]}
      />
      <FinalCTA />
    </>
  );
}
