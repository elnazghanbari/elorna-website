import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://elorna.net";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: base + "/sv", changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/fa", changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/about", changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/crm", changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/studio", changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/insights", changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/book", changeFrequency: "weekly", priority: 0.9 },
    { url: base + "/how-it-works", changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/privacy", changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/terms", changeFrequency: "yearly", priority: 0.4 }
  ];
}
