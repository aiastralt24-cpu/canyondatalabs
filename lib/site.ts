export const SITE = {
  name: "Canyon Data Labs",
  url: "https://canyondatalabs.com",
  email: "hello@canyondatalabs.com",
  description:
    "Canyon Data Labs unifies your sales, supply chain, procurement and field data into one AI-first intelligence platform. Live in 6–8 weeks. Built for FMCG, Pharma, Manufacturing & Retail across India, Gulf & emerging markets.",
  tagline: "From raw data to boardroom decision.",
};

export const NAV_LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/customers", label: "Customers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export const FOOTER_NAV = {
  Platform: [
    { href: "/platform", label: "Overview" },
    { href: "/platform/sales-intelligence", label: "Sales Intelligence" },
    { href: "/platform/supply-chain", label: "Supply Chain & S&OP" },
    { href: "/platform/procurement", label: "Procurement Intelligence" },
  ],
  Solutions: [
    { href: "/solutions/fmcg", label: "FMCG" },
    { href: "/solutions/pharma", label: "Pharma" },
    { href: "/solutions/manufacturing", label: "Manufacturing" },
    { href: "/solutions/retail", label: "Retail" },
  ],
  Company: [
    { href: "/customers", label: "Customers" },
    { href: "/pricing", label: "Pricing & Engagement" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

export const MODULES = [
  {
    slug: "sales-intelligence",
    name: "Sales & Distribution Intelligence",
    short: "Sales Intelligence",
    tags: ["Distributor Health", "Secondary Sales", "Nudges & Alerts"],
    summary:
      "Distributor health scoring, secondary-sales velocity and coverage gaps surfaced live — delivered to the field as daily action nudges.",
  },
  {
    slug: "supply-chain",
    name: "Supply Chain & S&OP",
    short: "Supply Chain",
    tags: ["Demand Planning", "OTIF", "Stockout Prediction"],
    summary:
      "One version of truth from forecast to fulfilment. OTIF, IFR, stockout prediction and indent automation connected across planning, procurement and distribution.",
  },
  {
    slug: "procurement",
    name: "Procurement Intelligence",
    short: "Procurement",
    tags: ["Spend Analytics", "Vendor Mgmt", "Working Capital"],
    summary:
      "Full spend visibility — where money goes, to whom, at what price, against consumption rate. Working capital freed through smarter ordering. Built for CFO accountability.",
  },
];
