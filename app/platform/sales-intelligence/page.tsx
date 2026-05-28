import type { Metadata } from "next";
import { FinalCTA } from "@/components/Sections";
import { CardSection, DarkGridSection, StepSection } from "@/components/DeepContent";

export const metadata: Metadata = {
  title: "Sales Intelligence",
  description:
    "Distributor health scoring, secondary sales analytics, field nudges and outlet coverage intelligence for FMCG, pharma, retail and manufacturing leaders.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">Sales Intelligence</div>
          <h1>
            Sales & Distribution <em>Intelligence.</em>
          </h1>
          <p>
            See the health of every distributor, outlet, beat, SKU and field action in
            one operating layer. Canyon Data Labs turns secondary sales, inventory,
            coverage, claims and payments into daily priorities for sales teams.
          </p>
        </div>
      </section>
      <CardSection
        label="What It Solves"
        title={
          <>
            Find the slippage <em>before the quarter slips.</em>
          </>
        }
        body="Most sales reviews explain what already happened. This layer points teams toward the accounts, territories and SKUs that need action today."
        cards={[
          {
            eyebrow: "Distributor Health",
            title: (
              <>
                Which partners are <em>quietly weakening?</em>
              </>
            ),
            body: "Each distributor is scored on velocity, stock freshness, payment behaviour, claim patterns, purchase frequency and coverage depth. Leaders see risk early; field teams get the exact next action.",
            metric: (
              <>
                Built for <strong>5,000+ distributor</strong> networks
              </>
            ),
          },
          {
            eyebrow: "Outlet Coverage",
            title: (
              <>
                Which outlets are <em>being missed?</em>
              </>
            ),
            body: "Beat compliance, outlet potential, visit productivity and order conversion are connected so coverage gaps become visible by geography, route, salesperson and channel.",
            metric: (
              <>
                Outcome: <strong>better outlet productivity</strong>
              </>
            ),
          },
          {
            eyebrow: "SKU Velocity",
            title: (
              <>
                Which SKUs need <em>intervention?</em>
              </>
            ),
            body: "SKU movement is compared against norms, seasonality, schemes, stock availability and local demand signals. Slowdowns are surfaced as specific opportunities for action.",
            metric: (
              <>
                Signal: <strong>sell-through, stock and scheme impact</strong>
              </>
            ),
          },
        ]}
      />
      <StepSection
        label="Operating Model"
        title={
          <>
            From reporting to <em>field action.</em>
          </>
        }
        steps={[
          {
            num: "01",
            title: "Unify",
            body: "Connect DMS, SFA, ERP, CRM, claims, schemes and payment data while preserving the systems your teams already use.",
          },
          {
            num: "02",
            title: "Score",
            body: "Create distributor, outlet, beat and SKU scores that update as new sales, inventory and field data comes in.",
          },
          {
            num: "03",
            title: "Prioritise",
            body: "Convert anomalies into ranked actions for ASM, RSM, ZSM and leadership reviews.",
          },
          {
            num: "04",
            title: "Activate",
            body: "Push nudges into daily workflows so teams act inside the rhythm of the market ahead of monthly reviews.",
          },
        ]}
      />
      <DarkGridSection
        label="Capabilities"
        title={
          <>
            Built for commercial teams that <em>own the number.</em>
          </>
        }
        items={[
          {
            title: "Secondary Sales Lens",
            body: "Distributor billing, outlet orders, product mix, coverage and velocity seen together instead of through disconnected downloads.",
          },
          {
            title: "Field Force Nudges",
            body: "Daily priorities for weak accounts, under-covered outlets, high-potential beats and SKUs at risk of losing momentum.",
          },
          {
            title: "Scheme Intelligence",
            body: "Measure which schemes actually changed behaviour, where leakage happened and which territories need a different push.",
          },
          {
            title: "Leadership Reviews",
            body: "Zone, region, territory and account views designed for fast Monday reviews and monthly performance calls.",
          },
        ]}
      />
      <FinalCTA />
    </>
  );
}
