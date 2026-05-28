"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) {
        setShow(false);
        return;
      }
      const past = window.scrollY > window.innerHeight * 0.9;
      const docBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - window.innerHeight * 0.6;
      setShow(past && !docBottom);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <div className={`sticky-cta${show ? " show" : ""}`}>
      <div className="sticky-cta-text">
        Ready to turn your data into <span>decisions?</span>
      </div>
      <div className="sticky-cta-actions">
        <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px" }}>
          Book a Demo
        </Link>
        <button
          className="sticky-cta-close"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  );
}
