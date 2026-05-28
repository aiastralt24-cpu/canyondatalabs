import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Manufacturing intelligence for demand planning, dealer networks, production, procurement, inventory, dispatch and working capital.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Manufacturing</div>
          <h1>
            Intelligence for <em>Manufacturing.</em>
          </h1>
          <p>
            Manufacturing leaders need demand, production, procurement, inventory and
            dealer movement to agree. Canyon Data Labs creates one operating layer from
            market demand to plant planning and working capital control.
          </p>
        </div>
      </section>
      <CardSection
        label="Manufacturing Priorities"
        title={
          <>
            Connect the plant to <em>the market.</em>
          </>
        }
        cards={[
          {
            eyebrow: "Dealer & Channel Demand",
            title: "Understand real demand before production locks in.",
            body: "Dealer sales, enquiries, secondary movement and market signals are connected to production planning so the plant sees what the market is pulling.",
          },
          {
            eyebrow: "Production & Inventory",
            title: "Control shortages, excess and ageing stock.",
            body: "Inventory health, dispatch plans, production schedules and order demand are tracked together to expose service risk and cash trapped in slow stock.",
          },
          {
            eyebrow: "Procurement Alignment",
            title: "Buy against demand signals.",
            body: "Purchase planning is tied to consumption, lead times, vendor performance and production needs so teams reduce avoidable stock build-up.",
          },
        ]}
      />
      <StepSection
        label="Use Cases"
        title={
          <>
            Intelligence across <em>the operating chain.</em>
          </>
        }
        steps={[
          { num: "01", title: "Demand Review", body: "Compare dealer pull, forecast, open orders and dispatch capacity before production decisions." },
          { num: "02", title: "Plant Planning", body: "Surface SKU-location demand, inventory constraints and production trade-offs in one review view." },
          { num: "03", title: "Vendor Control", body: "Score suppliers on delivery, quality, price movement and dependency risk." },
          { num: "04", title: "Working Capital", body: "Identify where cash is locked in inventory, over-ordering or poor demand alignment." },
        ]}
      />
      <DarkGridSection
        label="Connected Metrics"
        title={
          <>
            Manufacturing intelligence that joins <em>commercial and operations.</em>
          </>
        }
        items={[
          { title: "Dealer Signals", body: "Market demand, orders, pipeline, dispatch and channel health." },
          { title: "Inventory Health", body: "Slow-moving, excess, ageing, constrained and high-risk stock." },
          { title: "Production Fidelity", body: "Forecast, plan, schedule, output and dispatch tracked together." },
          { title: "Vendor Performance", body: "Lead time, quality, price variance and supply reliability." },
        ]}
      />
      <FinalCTA />
    </>
  );
}
