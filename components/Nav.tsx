"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FOOTER_NAV, NAV_LINKS } from "@/lib/site";
import { LogoLockup } from "./Logo";
import { Arrow } from "./Sections";

type ScrollState = "top" | "collapsed" | "revealed";

const DRAWER_LINKS = [
  ...NAV_LINKS,
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [state, setState] = useState<ScrollState>("top");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastY.current;
      const delta = Math.abs(y - lastY.current);

      if (y < 36) {
        setState("top");
      } else if (goingUp && delta > 4) {
        setState("revealed");
      } else if (!goingUp && delta > 4) {
        setState("collapsed");
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  const collapsed = state === "collapsed";
  const lightLogo = state === "top";

  return (
    <>
      <header className={`nav zoox-nav state-${state}`}>
        <div className="nav-shell">
          <div className={`nav-wide${collapsed ? " hidden" : ""}`}>
            <button
              type="button"
              className="nav-menu-btn"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <span />
              <span />
            </button>

            <Link href="/" className="nav-logo" aria-label="Canyon Data Labs home">
              <LogoLockup variant={lightLogo ? "light" : "dark"} />
            </Link>

            <nav className="nav-center" aria-label="Primary navigation">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname.startsWith(link.href) ? "active" : ""}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link href="/contact" className="nav-contact">
              Book a Demo <Arrow />
            </Link>
          </div>

          <div className={`nav-chip${collapsed ? " visible" : ""}`}>
            <button
              type="button"
              className="nav-menu-btn chip-btn"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <span />
              <span />
            </button>
            <Link href="/" className="nav-mark-chip" aria-label="Canyon Data Labs home">
              <LogoLockup variant="dark" />
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`drawer-backdrop${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      <aside className={`site-drawer${drawerOpen ? " open" : ""}`} aria-label="Site menu">
        <div className="drawer-top">
          <button
            type="button"
            className="drawer-close"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            <span />
            <span />
          </button>
          <Link href="/" className="drawer-logo" aria-label="Canyon Data Labs home">
            <LogoLockup variant="dark" />
          </Link>
        </div>

        <nav className="drawer-primary" aria-label="Main menu">
          {DRAWER_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: drawerOpen ? `${120 + index * 42}ms` : "0ms" }}
            >
              <span>{link.label}</span>
              <Arrow />
            </Link>
          ))}
        </nav>

        <div className="drawer-grid">
          {Object.entries(FOOTER_NAV).map(([group, links]) => (
            <div className="drawer-group" key={group}>
              <h3>{group}</h3>
              {links.slice(0, 4).map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="drawer-foot">
          <span>Enterprise Intelligence</span>
          <Link href="/contact">hello@canyondatalabs.com</Link>
        </div>
      </aside>
    </>
  );
}
