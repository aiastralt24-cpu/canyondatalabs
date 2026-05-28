import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { ResourceSection, CardSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Field notes, guides and operating frameworks for enterprise intelligence, distributor analytics, supply chain planning and AI adoption.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Resources</div>
          <h1>
            Field notes on <em>enterprise intelligence.</em>
          </h1>
          <p>
            Practical thinking for leaders turning fragmented enterprise data into
            better decisions: sales reviews, S&OP, procurement control, AI querying,
            adoption and governance.
          </p>
        </div>
      </section>
      <ResourceSection
        label="Featured Thinking"
        title={
          <>
            Guides for teams building <em>decision infrastructure.</em>
          </>
        }
        resources={[
          {
            tag: "Playbook",
            title: "How to design a distributor health score that sales teams trust",
            excerpt:
              "The inputs, weights, exceptions and adoption rituals that make distributor scoring useful in weekly reviews.",
            meta: "Sales Intelligence · 8 min read",
          },
          {
            tag: "Framework",
            title: "From forecast accuracy to demand fidelity",
            excerpt:
              "Why S&OP teams need to track where demand signal quality degrades between market, forecast, plan and fulfilment.",
            meta: "Supply Chain · 10 min read",
          },
          {
            tag: "Guide",
            title: "Procurement dashboards need decision workflows for working capital control",
            excerpt:
              "A practical model for connecting spend, consumption, stock, vendor performance and finance accountability.",
            meta: "Procurement · 7 min read",
          },
          {
            tag: "AI Operations",
            title: "What enterprise AI needs before plain-language questions work",
            excerpt:
              "The data modelling, access controls, lineage and metric definitions required before leaders can safely ask questions of company data.",
            meta: "Agentic Intelligence · 9 min read",
          },
          {
            tag: "Adoption",
            title: "Why dashboards need operating cadence to drive adoption",
            excerpt:
              "How to embed intelligence into Monday reviews, field nudges, planning calls and finance governance.",
            meta: "Operating Model · 6 min read",
          },
          {
            tag: "Checklist",
            title: "Readiness checklist for a 6-8 week intelligence pilot",
            excerpt:
              "The data, people, decisions and success criteria to prepare before starting an enterprise intelligence build.",
            meta: "Discovery · 5 min read",
          },
        ]}
      />
      <CardSection
        label="Themes"
        title={
          <>
            What we keep writing <em>and building around.</em>
          </>
        }
        cards={[
          {
            eyebrow: "Decision Design",
            title: "Metrics need owners and consequences.",
            body: "Good intelligence starts by naming who owns the decision, how often they make it and what changes when the answer is clear.",
          },
          {
            eyebrow: "Data Trust",
            title: "AI is only useful when the business trusts the layer beneath it.",
            body: "Metric definitions, lineage, permissions and exception handling decide whether leaders use AI answers in real reviews.",
          },
          {
            eyebrow: "Adoption",
            title: "The best platform is the one used in the operating rhythm.",
            body: "Dashboards matter less than the review, alert, nudge and workflow patterns that turn insight into action.",
          },
        ]}
      />
      <FinalCTA secondary={{ href: "/contact", label: "Request a workshop" }} />
    </>
  );
}
