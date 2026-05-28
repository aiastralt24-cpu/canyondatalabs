import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Pharma",
  description:
    "Pharma intelligence for medical reps, territory planning, stockist performance, secondary sales, doctor engagement and channel execution.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Pharma</div>
          <h1>
            Intelligence for <em>Pharma.</em>
          </h1>
          <p>
            Pharma teams need a field layer that respects territory discipline, stockist
            movement, doctor engagement and compliance. Canyon Data Labs connects rep
            activity, secondary sales and availability into one practical operating view.
          </p>
        </div>
      </section>
      <CardSection
        label="Pharma Priorities"
        title={
          <>
            Make territory execution <em>measurable.</em>
          </>
        }
        cards={[
          {
            eyebrow: "Rep Productivity",
            title: "Know whether activity is creating movement.",
            body: "Calls, visits, samples, follow-ups and doctor segments are connected to stockist sales and product availability so productivity is judged by quality and commercial movement.",
          },
          {
            eyebrow: "Stockist & Chemist Movement",
            title: "See channel health by product and territory.",
            body: "Stockist performance, chemist coverage, secondary sales and availability are tracked against territory potential and brand priorities.",
          },
          {
            eyebrow: "Compliance-Aware Workflows",
            title: "Build intelligence with strong governance.",
            body: "Role-based access, audit trails and structured workflows keep field intelligence controlled while still giving managers timely action signals.",
          },
        ]}
      />
      <StepSection
        label="Use Cases"
        title={
          <>
            A field rhythm for <em>regulated growth.</em>
          </>
        }
        steps={[
          { num: "01", title: "Territory Planning", body: "Align doctors, stockists, chemists, brands and rep capacity into practical coverage plans." },
          { num: "02", title: "Daily Rep Focus", body: "Surface the next best visits, follow-ups and stockist checks by territory priority." },
          { num: "03", title: "Brand Availability", body: "Track product movement and availability risk before it becomes missed prescription demand." },
          { num: "04", title: "Manager Reviews", body: "Give ABM, RBM and national teams a clean view of execution quality and commercial impact." },
        ]}
      />
      <DarkGridSection
        label="Connected Metrics"
        title={
          <>
            From MR activity to <em>channel performance.</em>
          </>
        }
        items={[
          { title: "Doctor Engagement", body: "Call quality, frequency, segment priority and follow-up discipline." },
          { title: "Stockist Health", body: "Product movement, inventory, billing consistency and availability." },
          { title: "Territory Potential", body: "Market opportunity compared against coverage, sales and rep capacity." },
          { title: "Governed Access", body: "Role-based visibility, audit trails and controlled reporting paths." },
        ]}
      />
      <FinalCTA />
    </>
  );
}
