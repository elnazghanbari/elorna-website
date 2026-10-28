import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "./data";
import "./portfolio.css";

const copy = {
  en: {
    kicker: "ELORNA / SELECTED ENGINEERING",
    title: "Three systems. One engineering mindset.",
    text: "Explore fullstack JavaScript prototypes across agricultural telemetry, international invoicing, and command interfaces.",
    demo: "Explore project",
    source: "Source code",
    prototype: "Functional prototype",
  },
  fa: {
    kicker: "ELORNA / نمونه‌کارهای مهندسی",
    title: "سه پروژه؛ یک نگاه مهندسی.",
    text: "نمونه‌های تعاملی فول‌استک در پایش کشاورزی، مدیریت فاکتورهای بین‌المللی و رابط فرمان را بررسی کنید. صفحات جزئیات به انگلیسی هستند.",
    demo: "مشاهده پروژه",
    source: "کد گیت‌هاب",
    prototype: "نمونهٔ نمایشی",
  },
  sv: {
    kicker: "ELORNA / UTVALDA PROJEKT",
    title: "Tre system. Ett tekniskt perspektiv.",
    text: "Utforska fullstackprototyper för jordbruksdata, internationella fakturor och kommandogränssnitt. Projektsidorna är på engelska.",
    demo: "Utforska projektet",
    source: "Källkod",
    prototype: "Fungerande prototyp",
  },
};
export default function ProjectShowcase({
  language = "en",
}: {
  language?: keyof typeof copy;
}) {
  const t = copy[language];
  return (
    <section
      id="engineering"
      dir={language === "fa" ? "rtl" : "ltr"}
      aria-labelledby="engineering-title"
      className={`ep ${"pf:border-y pf:border-white/10 pf:bg-[#05070c] pf:px-5 pf:py-20 pf:text-slate-100 pf:sm:px-8"}`}
    >
      <div className={"pf:mx-auto pf:max-w-6xl"}>
        <p className="ep-kicker">{t.kicker}</p>
        <h2
          id="engineering-title"
          className={
            "pf:mt-4 pf:max-w-3xl pf:text-3xl pf:font-medium pf:tracking-tight pf:sm:text-4xl"
          }
        >
          {t.title}
        </h2>
        <p
          className={
            "pf:mt-5 pf:max-w-2xl pf:text-sm pf:leading-8 pf:text-slate-400"
          }
        >
          {t.text}
        </p>
        <div className={"pf:mt-10 pf:grid pf:gap-5 pf:lg:grid-cols-3"}>
          {Object.entries(projects).map(([slug, p]) => (
            <article
              key={slug}
              style={
                { "--accent": p.accent, "--glow": p.glow } as CSSProperties
              }
              className={
                "pf:flex pf:min-w-0 pf:flex-col pf:overflow-hidden pf:rounded-2xl pf:border pf:border-white/10 pf:bg-[#0b101b]"
              }
            >
              <Link
                href={`/projects/${slug}`}
                aria-label={`${t.demo}: ${p.name}`}
              >
                <img
                  src={p.image}
                  alt={`${p.name} prototype dashboard`}
                  width={640}
                  height={400}
                  loading="lazy"
                  className={
                    "pf:aspect-[16/10] pf:h-auto pf:w-full pf:border-b pf:border-white/10 pf:object-contain"
                  }
                />
              </Link>
              <div className={"pf:flex pf:flex-1 pf:flex-col pf:p-6"}>
                <p className="ep-kicker">
                  {p.number} / {t.prototype}
                </p>
                <h3 dir="ltr" className={"pf:mt-4 pf:text-xl pf:font-medium"}>
                  {p.name}
                </h3>
                <p
                  dir="ltr"
                  className={
                    "pf:mb-7 pf:mt-4 pf:text-sm pf:leading-7 pf:text-slate-400"
                  }
                >
                  {p.description}
                </p>
                <div className={"pf:mt-auto pf:flex pf:flex-wrap pf:gap-3"}>
                  <Link href={`/projects/${slug}`} className="ep-button">
                    {t.demo} ↗
                  </Link>
                  <a
                    href={`https://github.com/elnazghanbari/${p.repo}`}
                    className="ep-button ep-button-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.source}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
