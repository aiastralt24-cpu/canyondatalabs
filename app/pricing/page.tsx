import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Canyon Data Labs engagement model: discovery workshop, rapid platform build, rollout, adoption and long-term intelligence partnership.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Pricing</div>
          <h1>
            How every <em>engagement</em> works.
          </h1>
          <p>
            Every Canyon Data Labs engagement follows a four-step model designed to
            reduce client risk, demonstrate value fast and build long-term recurring
            partnerships.
          </p>
        </div>
      </section>
      <StepSection
        label="Engagement Path"
        title={
          <>
            Start focused. <em>Scale with proof.</em>
          </>
        }
        steps={[
          {
            num: "01",
            title: "Discovery Workshop",
            body: "A structured 1-3 day workshop with your functional heads. We map your data landscape, identify decision gaps and confirm the scope of deliverables.",
            note: "Output: signed-off discovery document",
          },
          {
            num: "02",
            title: "Paid POC",
            body: "A time-boxed, paid proof of concept on a specific agreed use case. You see real intelligence on your real data before committing long-term.",
            note: "Typical timeline: 4-8 weeks",
          },
          {
            num: "03",
            title: "Long-Form Partnership",
            body: "A structured contract with defined milestones, deliverables and timelines. Scope is use-case and resource driven.",
            note: "Milestone-based delivery",
          },
          {
            num: "04",
            title: "Intelligence Partnership",
            body: "Canyon Data Labs remains embedded as your intelligence partner, evolving the platform as your business grows and handing over cleanly when you are ready.",
            note: "Documentation, training, knowledge transfer",
          },
        ]}
      />
      <CardSection
        label="What Shapes Scope"
        title={
          <>
            Pricing follows the <em>real complexity.</em>
          </>
        }
        cards={[
          {
            eyebrow: "Data Landscape",
            title: "How many systems need to speak to each other?",
            body: "SAP, ERP, CRM, SFA, DMS, spreadsheets, warehouse systems and custom tools all affect integration depth and governance effort.",
          },
          {
            eyebrow: "Decision Surface",
            title: "How many roles need tailored intelligence?",
            body: "A CFO view, sales head review, field nudge system and planner cockpit are different surfaces with different adoption requirements.",
          },
          {
            eyebrow: "Rollout Depth",
            title: "How far into the operation should the platform go?",
            body: "Leadership dashboards are simpler than daily field workflows, automated alerts, SSO, mobile use cases and change management.",
          },
        ]}
      />
      <DarkGridSection
        label="Costing Philosophy"
        title={
          <>
            Pricing is use-case and <em>timeline driven.</em>
          </>
        }
        body="The number of people deployed is the key variable in maintaining delivery quality and Canyon Data Labs margins. Final commercials depend on scope, team allocation, integrations and use cases."
        items={[
          { title: "Discovery Workshop", body: "Rs.1-3L fixed fee for a structured workshop, data landscape review and signed-off scope document." },
          { title: "Paid POC", body: "Rs.5-15L for a focused 4-8 week proof of concept on real data and an agreed use case." },
          { title: "Long-Form Contracts", body: "Rs.30-120L per year depending on scope, team allocation, milestones and use cases." },
          { title: "App Development", body: "Project-based and milestone-billed for SFA, CRM, DMS, loyalty, HRMS or other operational systems." },
        ]}
      />
      <FinalCTA sub="Share your use case and we will recommend the right starting scope: Discovery Workshop, Paid POC, long-form partnership or app build." />
    </>
  );
}
