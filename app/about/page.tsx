import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Canyon Data Labs: an enterprise intelligence partner building AI-first decision platforms for sales, supply chain, procurement and field operations.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">About</div>
          <h1>
            Enterprise-grade <em>from day one.</em>
          </h1>
          <p>
            Canyon Data Labs is a boutique data solutions company: lean, experienced
            and AI-first. We embed into client operations, connect data sitting in
            silos, and deliver intelligence that directly impacts how senior leadership
            makes decisions.
          </p>
        </div>
      </section>
      <CardSection
        label="Who We Are"
        title={
          <>
            One partner. Every layer. <em>Raw data to boardroom decision.</em>
          </>
        }
        body="We move fast because the foundations are already earned: proven products, reusable connectors and domain expertise across Sales & Distribution, Supply Chain, S&OP and Procurement."
        cards={[
          {
            eyebrow: "Vision",
            title: "The most trusted intelligence partner for enterprises.",
            body: "Our vision is to become the intelligence partner enterprises trust across India and global markets, where data compounds into momentum and every decision moves the business forward.",
          },
          {
            eyebrow: "Mission",
            title: "Connect, contextualise and activate data for outcomes.",
            body: "Our mission is to connect data sitting in silos, contextualise it for the decisions that matter, and activate it as intelligence that drives measurable business outcomes.",
          },
          {
            eyebrow: "USP",
            title: "Domain depth plus engineering speed, delivered as partnership.",
            body: "We have built the products, proven the connectors and earned the domain expertise. A client engagement others spend months scoping, we can take to live proof in weeks.",
          },
        ]}
      />
      <StepSection
        label="How We Work"
        title={
          <>
            Senior, practical and <em>close to the business.</em>
          </>
        }
        steps={[
          { num: "01", title: "Map Decisions", body: "We identify the decisions that matter by role, cadence, metric and business consequence." },
          { num: "02", title: "Connect Data", body: "We integrate SAP, ERP, CRM, SFA, DMS and operational sources into a usable intelligence layer." },
          { num: "03", title: "Build The Layer", body: "We create dashboards, scores, alerts, natural-language querying and action workflows on real data." },
          { num: "04", title: "Embed Adoption", body: "We work through reviews, nudges, training and governance until the platform becomes part of the operating rhythm." },
        ]}
      />
      <DarkGridSection
        label="What Sets Us Apart"
        title={
          <>
            The Canyon Data Labs advantage is <em>practical and measurable.</em>
          </>
        }
        items={[
          { title: "Experience as Accelerator", body: "Pre-built products, domain models and integration connectors cut delivery from months to weeks." },
          { title: "AI-First Thinking", body: "We design for scale from day one, taking cues from AI at every layer so today's build can handle tomorrow's volume." },
          { title: "Open Source Foundation", body: "Flexible architecture with client control, deployable across cloud or on-premise environments." },
          { title: "Domain Depth", body: "Sales, distribution, supply chain, S&OP and procurement intelligence tuned to real operating decisions and business-specific analytics." },
          { title: "System Agnostic", body: "SAP, SFA, DMS, CRM, ERP, loyalty and production systems: we extract from whatever you run and make it work." },
          { title: "Long-Term Partner", body: "We stay as long as you need us, then hand over cleanly with documentation, training and structured knowledge transfer." },
        ]}
      />
      <FinalCTA secondary={{ href: "/customers", label: "See customer work" }} />
    </>
  );
}
