import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Customer work from Canyon Data Labs across enterprise CRM, distributor intelligence, field operations and decision platforms.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Customers</div>
          <h1>
            Clients we&rsquo;re <em>building with.</em>
          </h1>
          <p>
            Canyon Data Labs launches with two anchor clients from day one and a mandate
            to add a minimum of three new clients in Year 1. Anchor clients consume
            approximately 85% of team capacity, with 15% dedicated to new business
            development and onboarding.
          </p>
        </div>
      </section>
      <section className="personas">
        <div className="wrap">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">
            Enterprise platforms with <em>real operating use.</em>
          </h2>
          <p className="section-body">
            These examples focus on the nature of the work: live systems, adoption,
            decision workflows and the kind of measurable operating intelligence we build.
          </p>
          <div className="clients-grid">
            <div className="client-card">
              <div className="client-card-head">
                <div className="client-name">Astral</div>
                <div className="client-badge">3-Year Engagement</div>
              </div>
              <div className="client-card-body">
                <div className="client-stat-row">
                  <div>
                    <div className="client-stat-val">5,000+</div>
                    <div className="client-stat-lbl">Distributors</div>
                  </div>
                  <div>
                    <div className="client-stat-val">2L+</div>
                    <div className="client-stat-lbl">Outlets</div>
                  </div>
                </div>
                <p className="client-desc">
                  Full commercial intelligence platform with SAP, SFA and DMS
                  integrated. Sales, SCM, marketing and procurement intelligence live,
                  with 5,000+ distributors scored, 2 lakh outlets profiled and 50-70%
                  daily active usage.
                </p>
                <div className="step-price">
                  Allocation: ~50% of Canyon Data Labs team · Rs.1 Cr annual retainer · Ongoing
                  managed partnership
                </div>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-head">
                <div className="client-name">Bond-it</div>
                <div className="client-badge">CRM Platform</div>
              </div>
              <div className="client-card-body">
                <div className="client-stat-row">
                  <div>
                    <div className="client-stat-val">6-8</div>
                    <div className="client-stat-lbl">Week Build</div>
                  </div>
                  <div>
                    <div className="client-stat-val">Live</div>
                    <div className="client-stat-lbl">Data Layer</div>
                  </div>
                </div>
                <p className="client-desc">
                  Canyon Data Labs is building a CRM platform for Bond-it, demonstrating full-stack
                  capability where we build the system of record and the intelligence
                  layer on top of it.
                </p>
                <div className="step-price">
                  Allocation: ~35% of Canyon Data Labs team · Milestone-based contract · Intelligence
                  retainer potential post-CRM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardSection
        label="What Clients Come For"
        title={
          <>
            The problems are familiar. <em>The execution is distinctive.</em>
          </>
        }
        cards={[
          { eyebrow: "Commercial Visibility", title: "Sales leaders need live distributor truth.", body: "They want to see which partners, outlets, regions and SKUs need attention before targets are missed." },
          { eyebrow: "Operational Alignment", title: "COOs need forecast, stock and fulfilment to agree.", body: "They need one layer that joins planning, production, procurement and dispatch decisions." },
          { eyebrow: "New Business", title: "Year 1 growth moves from discovery to POC to long-form.", body: "The target is three new clients, each qualified through a focused workshop, converted into paid proof of value and expanded into a recurring partnership." },
        ]}
      />
      <DarkGridSection
        label="Year 1 Priorities"
        title={
          <>
            Anchor work expands while <em>new clients onboard.</em>
          </>
        }
        items={[
          { title: "Astral: Production & BOM", body: "Expand into production and BOM data to unlock margin intelligence." },
          { title: "Astral: Advanced S&OP", body: "Advance demand fidelity, fulfilment tracking, agentic nudges and field intelligence." },
          { title: "Bond-it: CRM Completion", body: "Complete CRM development through milestone-based delivery and connect CRM data into the intelligence layer." },
          { title: "Bond-it: Retainer Path", body: "Expand into sales and distribution analytics post-CRM and convert to a long-form intelligence retainer." },
        ]}
      />
      <FinalCTA secondary={{ href: "/pricing", label: "See engagement model" }} />
    </>
  );
}
