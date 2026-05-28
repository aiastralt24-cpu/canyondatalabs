import Link from "next/link";

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3 3 7-7"
        stroke="#D4784E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <div className="showcase-list">
      {items.map((it) => (
        <div className="showcase-list-item" key={it}>
          <Check />
          {it}
        </div>
      ))}
    </div>
  );
}

export function FinalCTA({
  title,
  sub,
  secondary,
}: {
  title?: React.ReactNode;
  sub?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="final-cta">
      <div className="final-cta-inner">
        <h2 className="final-cta-title">
          {title ?? (
            <>
              Stop reporting the past.
              <br />
              <em>Start deciding the future.</em>
            </>
          )}
        </h2>
        <p className="final-cta-sub">
          {sub ??
            "Every engagement begins with a structured Discovery Workshop on your real data."}
        </p>
        <div className="final-cta-actions">
          <Link href="/contact" className="btn-primary">
            Book a Demo <Arrow />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-secondary">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
