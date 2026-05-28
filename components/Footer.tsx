import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/site";
import { LogoLockup } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-row">
              <LogoLockup variant="light" className="footer-logo" />
            </div>
            <p className="footer-tagline">&ldquo;From raw data to boardroom decision.&rdquo;</p>
          </div>

          {Object.entries(FOOTER_NAV).map(([heading, links]) => (
            <div className="footer-col" key={heading}>
              <h4>{heading}</h4>
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {SITE.name} · Ahmedabad · India · Gulf · Emerging Markets
          </p>
          <p className="footer-copy">{SITE.email}</p>
        </div>
      </div>
    </footer>
  );
}
