import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import HomeNewSections from "@/components/HomeNewSections";
import { Arrow, FinalCTA } from "@/components/Sections";
import { DistributorHealthShell } from "@/components/Shells";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-eyebrow">The Operating Layer for Growth</p>
            <h1 className="hero-headline">
              Turn your data
              <br />
              <em>into decisions.</em>
            </h1>
            <p className="hero-sub">
              Canyon Data Labs partners with enterprises in their growth story. We
              connect data sitting in silos, contextualise it for the decisions that
              matter, and activate intelligence that helps senior leadership move faster.
            </p>
            <div className="hero-proof">
              <span className="hero-proof-stat">Anchor clients</span>
              <span className="hero-proof-divider" />
              <span className="hero-proof-text">
                Astral · Bond-it
                <br />
                From inception
              </span>
            </div>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Book a Demo <Arrow />
              </Link>
              <Link href="/platform" className="btn-secondary">
                See the platform in action
              </Link>
            </div>
            <div className="hero-industries">
              <span className="industry-pill">FMCG</span>
              <span className="industry-pill">Pharma</span>
              <span className="industry-pill">Manufacturing</span>
              <span className="industry-pill">Retail</span>
              <span className="industry-pill">CPG</span>
              <span className="industry-pill">India · Gulf · Emerging Markets</span>
            </div>
          </div>
          <div className="hero-right">
            <DistributorHealthShell />
          </div>
        </div>
      </section>

      <HomeNewSections />

      {/* PERSONA TEASER */}
      <FadeUp as="section" className="personas">
        <div className="wrap">
          <div className="section-label">Who It&rsquo;s For</div>
          <h2 className="section-title">
            Built for the people
            <br />
            <em>who own the number.</em>
          </h2>
          <p className="section-body">
            Canyon Data Labs is a purpose-built operating partner. We embed into
            operations, connect data across systems, and route intelligence to the exact
            person accountable for the decision: by role, by function, by the metric they
            own.
          </p>
          <div className="personas-grid">
            <div className="persona">
              <div className="persona-role">For the CFO / Finance</div>
              <div className="persona-pain">
                &ldquo;Where is working capital <em>actually</em> leaking?&rdquo;
              </div>
              <div className="persona-fix">
                Full spend visibility — where money goes, to whom, at what price, against
                consumption rate. Built for CFO-level accountability and early visibility.
              </div>
              <div className="persona-metric">
                Outcome: <strong>working capital freed</strong> through smarter ordering
              </div>
            </div>
            <div className="persona">
              <div className="persona-role">For the Sales / Commercial Head</div>
              <div className="persona-pain">
                &ldquo;Which distributors are <em>quietly dying</em>?&rdquo;
              </div>
              <div className="persona-fix">
                Live distributor health scoring, secondary-sales velocity and coverage
                gaps surfaced as nudges to the field — ahead of the quarter.
              </div>
              <div className="persona-metric">
                Outcome: <strong>5,000+ distributors</strong> scored &amp; ranked live
              </div>
            </div>
            <div className="persona">
              <div className="persona-role">For the Supply Chain / COO</div>
              <div className="persona-pain">
                &ldquo;How can forecast and fulfilment <em>move as one</em>?&rdquo;
              </div>
              <div className="persona-fix">
                One version of truth from forecast to fulfilment — OTIF, IFR, stockout
                prediction and indent automation connected end to end.
              </div>
              <div className="persona-metric">
                Outcome: <strong>stockouts predicted early</strong>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FinalCTA secondary={{ href: "/pricing", label: "See how engagements work" }} />
    </>
  );
}
