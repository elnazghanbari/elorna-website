export const projects = {
  smartfarm: {
    number: "01",
    category: "AGTECH / TELEMETRY INTERFACES",
    name: "SmartFarm Intelligence",
    title: "From field signals.",
    highlight: "To clear decisions.",
    description:
      "A fullstack agricultural dashboard prototype that translates soil-moisture records into crop-specific status, clear thresholds, and a focused irrigation simulation.",
    accent: "#34d399",
    glow: "52 211 153",
    repo: "smartfarm-dashboard",
    image: "/projects/smartfarm.jpg",
    tags: ["Telemetry UI", "Threshold logic", "REST integration"],
    challenge:
      "Agricultural monitoring interfaces need to make changing conditions understandable at a glance. Operators need clear thresholds, consistent status signals, and an obvious next action across different crops and regions.",
    solution:
      "SmartFarm brings crop-specific moisture targets into a React dashboard backed by an Express API. Structured JSON records drive the interface, while simulated updates demonstrate the path from a reading to a visible operational response.",
    features: [
      "Crop-specific moisture targets and current readings",
      "Threshold-based health indicators",
      "REST-backed updates to stored crop records",
    ],
    boundary:
      "Prototype with sample crop records and simulated readings. No physical sensors or irrigation equipment are connected.",
    endpoints: "GET /api/crops · POST /api/sensor-data",
    model: "Crop targets, moisture readings, and calculated status.",
    next: "A production engagement would define sensor integration, access control, durable storage, and equipment-specific operating rules.",
  },
  finance: {
    number: "02",
    category: "FINTECH / BUSINESS OPERATIONS",
    name: "Global Finance Core",
    title: "Cross-border records.",
    highlight: "One focused workspace.",
    description:
      "An international invoicing prototype that brings client context, currency denominations, due dates, and follow-up states into a consistent operational view.",
    accent: "#22d3ee",
    glow: "34 211 238",
    repo: "elorna-finance-core",
    image: "/projects/finance.jpg",
    tags: ["Invoice visibility", "Multi-currency display", "Workflow UI"],
    challenge:
      "International invoice records become difficult to review when amounts, currencies, client context, and follow-up activity are scattered across disconnected views.",
    solution:
      "Finance Core organizes those records into a clear card-based interface. A React frontend retrieves invoices through an Express API and demonstrates reminder-state updates while keeping payment status and follow-up activity understandable.",
    features: [
      "Client records denominated in USD, EUR, SEK, and IRR",
      "Invoice amounts, dates, and status visibility",
      "REST-backed reminder-state demonstration",
    ],
    boundary:
      "Sample-data prototype. No payment processing, exchange-rate conversion, accounting reconciliation, or email delivery is connected. The original screenshot contains manually assigned invoice statuses.",
    endpoints: "GET /api/invoices · POST /api/remind",
    model: "Client records, amounts, currency codes, due dates, and status.",
    next: "A production engagement would define accounting rules, permissions, audited storage, and verified delivery integrations.",
  },
  ai: {
    number: "03",
    category: "AI INTERFACES / COMMAND EXPERIENCE",
    name: "Executive Cognitive Core",
    title: "A natural-language interface.",
    highlight: "A clearer next action.",
    description:
      "A command-center prototype exploring how a natural-language interface can organize business requests, categorize intent, and present a readable activity history.",
    accent: "#c084fc",
    glow: "192 132 252",
    repo: "elorna-ai-core",
    image: "/projects/ai.jpg",
    tags: ["Command UX", "Intent routing", "Activity history"],
    challenge:
      "Business command interfaces need to make requests, responses, and system activity easy to follow. The interaction must remain understandable as new services and workflows are introduced.",
    solution:
      "Executive Core combines a React command interface with an Express backend. Keyword-based routing categorizes requests and stores timestamped responses, providing an interface foundation for a future model-backed integration.",
    features: [
      "Text-command submission and response presentation",
      "Keyword-based finance and AgTech categorization",
      "Timestamped command history stored through the backend",
    ],
    boundary:
      "Rule-based prototype with predefined responses. No language model, speech recognition, financial analysis, or autonomous execution is connected. Screenshot response text is demonstration content.",
    endpoints: "GET /api/ai/logs · POST /api/ai/command",
    model: "Commands, response text, categories, and timestamps.",
    next: "A production engagement would define model integration, approved tools, evaluation criteria, and human approval for consequential actions.",
  },
} as const;

export type ProjectSlug = keyof typeof projects;
export function isProjectSlug(slug: string): slug is ProjectSlug {
  return Object.prototype.hasOwnProperty.call(projects, slug);
}
