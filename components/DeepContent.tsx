import type { ReactNode } from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { Arrow } from "@/components/Sections";

type Card = {
  eyebrow: string;
  title: ReactNode;
  body: string;
  metric?: ReactNode;
};

type Step = {
  num: string;
  title: string;
  body: string;
  note?: string;
};

type DarkItem = {
  title: string;
  body: string;
};

type Resource = {
  tag: string;
  title: string;
  excerpt: string;
  meta: string;
  href?: string;
};

export function CardSection({
  label,
  title,
  body,
  cards,
}: {
  label: string;
  title: ReactNode;
  body?: string;
  cards: Card[];
}) {
  return (
    <FadeUp as="section" className="personas">
      <div className="wrap">
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        {body && <p className="section-body">{body}</p>}
        <div className="personas-grid">
          {cards.map((card) => (
            <div className="persona" key={card.eyebrow}>
              <div className="persona-role">{card.eyebrow}</div>
              <div className="persona-pain">{card.title}</div>
              <div className="persona-fix">{card.body}</div>
              {card.metric && <div className="persona-metric">{card.metric}</div>}
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export function StepSection({
  label,
  title,
  body,
  steps,
}: {
  label: string;
  title: ReactNode;
  body?: string;
  steps: Step[];
}) {
  return (
    <FadeUp as="section" className="personas" style={{ paddingTop: 100 }}>
      <div className="wrap">
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        {body && <p className="section-body">{body}</p>}
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-body">{step.body}</div>
              {step.note && <div className="step-price">{step.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export function DarkGridSection({
  label,
  title,
  body,
  items,
}: {
  label: string;
  title: ReactNode;
  body?: string;
  items: DarkItem[];
}) {
  return (
    <FadeUp as="section" className="security on-dark">
      <div className="security-inner">
        <div className="security-head">
          <div className="section-label">{label}</div>
          <h2 className="security-title">{title}</h2>
          {body && <p className="security-sub">{body}</p>}
        </div>
        <div className="security-grid">
          {items.map((item) => (
            <div className="security-item" key={item.title}>
              <div className="security-item-title">{item.title}</div>
              <div className="security-item-body">{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export function ResourceSection({
  label,
  title,
  body,
  resources,
}: {
  label: string;
  title: ReactNode;
  body?: string;
  resources: Resource[];
}) {
  return (
    <FadeUp as="section" className="personas">
      <div className="wrap">
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        {body && <p className="section-body">{body}</p>}
        <div className="resource-grid">
          {resources.map((resource) => {
            const content = (
              <>
                <div className="resource-card-top">
                  <div className="resource-tag">{resource.tag}</div>
                </div>
                <div className="resource-card-body">
                  <div className="resource-title">{resource.title}</div>
                  <div className="resource-excerpt">{resource.excerpt}</div>
                  <div className="resource-meta">{resource.meta}</div>
                </div>
              </>
            );

            return resource.href ? (
              <Link className="resource-card" href={resource.href} key={resource.title}>
                {content}
              </Link>
            ) : (
              <div className="resource-card" key={resource.title}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </FadeUp>
  );
}

export function LinkCTA({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="showcase-link">
      {label} <Arrow />
    </Link>
  );
}
