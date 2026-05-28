import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Canyon Data Labs, enterprise intelligence builds, integrations, deployment, AI, pricing and adoption.",
};

const faqs = [
  {
    q: "What does Canyon Data Labs actually build?",
    a: "We build enterprise intelligence platforms that connect operational systems such as SAP, ERP, CRM, SFA, DMS and spreadsheets into one decision layer. The output can include dashboards, health scores, AI querying, alerts, nudges, workflows and role-specific review views.",
  },
  {
    q: "Do we need perfect data before starting?",
    a: "You can start with imperfect data. A discovery workshop identifies source systems, data quality issues, ownership gaps and the use cases that can create value quickly. We then design the first build around the cleanest high-impact decision path.",
  },
  {
    q: "How fast can a platform go live?",
    a: "Focused pilots can usually be live in 6-8 weeks when data access and decision ownership are clear. Larger rollouts depend on the number of integrations, user roles, governance needs and adoption depth.",
  },
  {
    q: "Can you work with our existing SAP, SFA, DMS or CRM?",
    a: "Yes. The platform is system-agnostic and is designed to sit above existing enterprise systems rather than force a rip-and-replace project. Where a company lacks a needed system, we can also build SFA, CRM or DMS modules.",
  },
  {
    q: "Is the AI grounded in our company data?",
    a: "Yes. Plain-language answers are designed around governed, connected enterprise data, defined metrics and role-based access. The goal is traceable intelligence that leaders can use in real reviews.",
  },
  {
    q: "Can this run on-premise or in our cloud?",
    a: "Yes. Deployment depends on enterprise requirements. We can work with cloud, private cloud or on-premise constraints, with security, access control and audit trails planned into the architecture.",
  },
  {
    q: "Who usually owns the project internally?",
    a: "The strongest projects have an executive sponsor and functional owners from the areas being improved: sales, supply chain, procurement, finance, IT or operations. We help define ownership during discovery.",
  },
  {
    q: "How is pricing decided?",
    a: "Pricing depends on scope, integrations, data complexity, user roles, rollout depth and ongoing support. We normally recommend starting with a discovery workshop so the build scope and commercial model are grounded in the real operating need.",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">FAQ</div>
          <h1>
            Questions, <em>answered.</em>
          </h1>
          <p>
            Practical answers about how Canyon Data Labs engagements work: data access,
            integrations, AI, deployment, adoption, timelines and pricing.
          </p>
        </div>
      </section>
      <section className="personas">
        <div className="wrap">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">
            Before we build, teams usually ask <em>these.</em>
          </h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.q} open={index === 0}>
                <summary className="faq-q">
                  {faq.q}
                  <span className="faq-q-icon">+</span>
                </summary>
                <div className="faq-a">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CardSection
        label="Still Deciding?"
        title={
          <>
            The fastest answer is usually <em>a workshop.</em>
          </>
        }
        cards={[
          {
            eyebrow: "For Business Leaders",
            title: "Bring the decisions you want to improve.",
            body: "We map the metrics, owners, cadence and consequences before discussing screens or technology.",
          },
          {
            eyebrow: "For IT Teams",
            title: "Bring the systems and access constraints.",
            body: "We review source systems, integration options, security needs and deployment boundaries early.",
          },
          {
            eyebrow: "For Finance Teams",
            title: "Bring the value hypothesis.",
            body: "We identify where better intelligence could improve revenue, service, working capital, leakage or adoption.",
          },
        ]}
      />
      <FinalCTA />
    </>
  );
}
