import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, isProjectSlug } from "../data";
import ProjectDemo from "../ProjectDemo";
import "../portfolio.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isProjectSlug(slug)) return { title: "Project not found" };
  const p = projects[slug];
  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${p.name} | ELORNA`,
      description: p.description,
      url: `/projects/${slug}`,
      images: [{ url: p.image, alt: `${p.name} prototype interface` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} | ELORNA`,
      description: p.description,
      images: [p.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!isProjectSlug(slug)) notFound();
  const p = projects[slug];
  const theme = { "--accent": p.accent, "--glow": p.glow } as CSSProperties;
  const architecture = [
    [
      "Presentation",
      "React / JavaScript",
      "State-driven interfaces, focused controls, and clear operational feedback.",
    ],
    [
      "Application",
      "Node.js / Express",
      "Request handling and application logic behind a dedicated backend.",
    ],
    ["Integration", "REST APIs / JSON", p.endpoints],
    ["Persistence", "JSON file models", p.model],
  ];
  return (
    <main
      style={theme}
      className={`ep ${"pf:min-h-screen pf:bg-[#05070c] pf:text-slate-100"}`}
    >
      <div className="ep-glow">
        <div
          className={"pf:mx-auto pf:max-w-7xl pf:px-5 pf:sm:px-8 pf:lg:px-12"}
        >
          <header
            className={
              "pf:flex pf:flex-wrap pf:items-center pf:justify-between pf:gap-5 pf:border-b pf:border-white/10 pf:py-7"
            }
          >
            <Link
              href="/"
              className={"pf:text-sm pf:font-semibold pf:tracking-[0.3em]"}
            >
              ELORNA
              <span className={"pf:ml-3 pf:text-slate-500"}>/ ENGINEERING</span>
            </Link>
            <nav
              aria-label="Project navigation"
              className={
                "pf:flex pf:flex-wrap pf:gap-5 pf:text-xs pf:text-slate-400"
              }
            >
              {Object.entries(projects).map(([key, item]) => (
                <Link
                  key={key}
                  href={`/projects/${key}`}
                  aria-current={slug === key ? "page" : undefined}
                  style={slug === key ? { color: p.accent } : undefined}
                  className={"pf:rounded-sm pf:hover:text-white"}
                >
                  {item.number} /{" "}
                  {key === "ai"
                    ? "AI Core"
                    : key === "finance"
                      ? "Finance"
                      : "SmartFarm"}
                </Link>
              ))}
            </nav>
          </header>
          <section
            className={
              "pf:grid pf:gap-12 pf:pb-16 pf:pt-16 pf:sm:pt-24 pf:lg:grid-cols-[1.4fr_0.6fr] pf:lg:items-end pf:lg:pb-24"
            }
          >
            <div>
              <p className="ep-kicker">
                SELECTED PROJECT {p.number} — {p.category}
              </p>
              <h1
                className={
                  "pf:mt-7 pf:max-w-4xl pf:text-5xl pf:font-medium pf:leading-[1.06] pf:tracking-[-0.055em] pf:sm:text-6xl pf:lg:text-7xl"
                }
              >
                {p.title}
                <span className={"pf:mt-2 pf:block pf:text-[var(--accent)]"}>
                  {p.highlight}
                </span>
              </h1>
              <p
                className={
                  "pf:mt-7 pf:max-w-2xl pf:text-base pf:leading-8 pf:text-slate-400 pf:sm:text-lg"
                }
              >
                {p.description}
              </p>
              <div className={"pf:mt-7 pf:flex pf:flex-wrap pf:gap-2"}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={
                      "pf:rounded-full pf:border pf:border-white/10 pf:bg-white/[0.025] pf:px-3 pf:py-2 pf:text-xs pf:text-slate-300"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className={
                  "pf:mt-9 pf:flex pf:flex-col pf:gap-3 pf:sm:flex-row"
                }
              >
                <a href="#demo" className="ep-button">
                  Explore interactive demo <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#architecture"
                  className="ep-button ep-button-secondary"
                >
                  System architecture <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <aside
              className={
                "pf:rounded-2xl pf:border pf:border-white/10 pf:bg-[#0b101b]/70 pf:p-7"
              }
            >
              <p className="ep-kicker">PROJECT BRIEF</p>
              <dl
                className={"pf:mt-5 pf:divide-y pf:divide-white/10 pf:text-xs"}
              >
                {[
                  ["Delivery", "Fullstack JavaScript"],
                  ["Stage", "Functional prototype"],
                  ["Based in", "Sweden"],
                  ["Collaboration", "International / Remote"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className={"pf:flex pf:justify-between pf:gap-4 pf:py-4"}
                  >
                    <dt className={"pf:text-slate-500"}>{label}</dt>
                    <dd className={"pf:text-right pf:text-slate-200"}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p
                className={"pf:mt-5 pf:text-xs pf:leading-6 pf:text-slate-500"}
              >
                Designed and built by Elnaz Ghanbari, founder of ELORNA.
              </p>
            </aside>
          </section>
          <figure
            className={
              "pf:overflow-hidden pf:rounded-2xl pf:border pf:border-white/10 pf:bg-[#080d16] pf:shadow-[0_25px_100px_#0006]"
            }
          >
            <div
              className={
                "pf:flex pf:flex-wrap pf:items-center pf:justify-between pf:gap-3 pf:border-b pf:border-white/10 pf:px-5 pf:py-4 pf:text-[10px] pf:uppercase pf:tracking-[0.2em] pf:text-slate-400"
              }
            >
              <span>ELORNA / {p.name}</span>
              <span className={"pf:text-[var(--accent)]"}>
                ORIGINAL PROTOTYPE CAPTURE
              </span>
            </div>
            <div className="ep-grid">
              <img
                src={p.image}
                alt={`${p.name}: original dashboard screenshot with demonstration data`}
                width={
                  slug === "smartfarm" ? 1280 : slug === "finance" ? 1098 : 1120
                }
                height={
                  slug === "smartfarm" ? 769 : slug === "finance" ? 713 : 727
                }
                fetchPriority="high"
                className={
                  "pf:mx-auto pf:max-h-[640px] pf:w-full pf:object-contain"
                }
              />
            </div>
            <figcaption
              className={
                "pf:border-t pf:border-white/10 pf:px-5 pf:py-4 pf:text-xs pf:leading-6 pf:text-slate-500"
              }
            >
              Original project screenshot · Sample data and demonstration
              content. Explore the updated browser simulation below.
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={"pf:mx-auto pf:max-w-7xl pf:px-5 pf:sm:px-8 pf:lg:px-12"}>
        <section
          id="architecture"
          aria-labelledby="architecture-title"
          className={"pf:scroll-mt-8 pf:py-20"}
        >
          <p className="ep-kicker">UNDER THE INTERFACE</p>
          <h2
            id="architecture-title"
            className={
              "pf:mt-4 pf:text-3xl pf:font-medium pf:tracking-tight pf:sm:text-4xl"
            }
          >
            System architecture.
          </h2>
          <p
            className={
              "pf:mt-4 pf:max-w-2xl pf:text-sm pf:leading-7 pf:text-slate-400"
            }
          >
            Four clear responsibilities. One focused application stack.
          </p>
          <div
            className={
              "pf:mt-9 pf:grid pf:gap-4 pf:sm:grid-cols-2 pf:lg:grid-cols-4"
            }
          >
            {architecture.map(([title, technology, detail], i) => (
              <article
                key={title}
                className={
                  "pf:rounded-2xl pf:border pf:border-white/10 pf:bg-[#0b101b] pf:p-6"
                }
              >
                <span className={"pf:text-xs pf:text-slate-600"}>
                  0{i + 1} /
                </span>
                <h3 className={"pf:mt-7 pf:text-lg pf:font-medium"}>{title}</h3>
                <p className={"pf:mt-3 pf:text-xs pf:text-[var(--accent)]"}>
                  {technology}
                </p>
                <p
                  className={
                    "pf:mt-4 pf:break-words pf:text-sm pf:leading-7 pf:text-slate-400"
                  }
                >
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section
          id="demo"
          aria-labelledby="demo-title"
          className={"pf:scroll-mt-8 pf:border-t pf:border-white/10 pf:py-20"}
        >
          <p className="ep-kicker">TRY THE WORKFLOW</p>
          <h2
            id="demo-title"
            className={
              "pf:mb-4 pf:mt-4 pf:text-3xl pf:font-medium pf:tracking-tight pf:sm:text-4xl"
            }
          >
            An interface you can explore.
          </h2>
          <p
            className={
              "pf:mb-8 pf:max-w-3xl pf:text-sm pf:leading-7 pf:text-slate-400"
            }
          >
            This portfolio simulation runs in your browser with sample data.
            Actions do not send messages, operate equipment, or call an AI
            provider.
          </p>
          <ProjectDemo key={slug} slug={slug} />
          <p
            className={
              "pf:mt-5 pf:max-w-4xl pf:text-xs pf:leading-6 pf:text-slate-500"
            }
          >
            {p.boundary}
          </p>
        </section>
        <section
          aria-labelledby="case-title"
          className={"pf:border-t pf:border-white/10 pf:py-20"}
        >
          <p className="ep-kicker">CASE STUDY / {p.number}</p>
          <h2
            id="case-title"
            className={
              "pf:mt-4 pf:text-3xl pf:font-medium pf:tracking-tight pf:sm:text-4xl"
            }
          >
            The problem. The implementation.
          </h2>
          <div className={"pf:mt-9 pf:grid pf:gap-5 pf:lg:grid-cols-2"}>
            <article
              className={
                "pf:rounded-2xl pf:border pf:border-white/10 pf:bg-white/[0.02] pf:p-7 pf:sm:p-9"
              }
            >
              <p
                className={
                  "pf:text-xs pf:uppercase pf:tracking-widest pf:text-slate-500"
                }
              >
                01 / THE CHALLENGE
              </p>
              <h3 className={"pf:mt-5 pf:text-2xl pf:font-medium"}>
                Reduce operational friction.
              </h3>
              <p
                className={"pf:mt-5 pf:text-sm pf:leading-8 pf:text-slate-400"}
              >
                {p.challenge}
              </p>
            </article>
            <article
              className={
                "pf:rounded-2xl pf:border pf:border-[rgb(var(--glow)/0.25)] pf:bg-[rgb(var(--glow)/0.04)] pf:p-7 pf:sm:p-9"
              }
            >
              <p className="ep-kicker">02 / THE ELORNA SOLUTION</p>
              <h3 className={"pf:mt-5 pf:text-2xl pf:font-medium"}>
                Make the workflow visible.
              </h3>
              <p
                className={"pf:mt-5 pf:text-sm pf:leading-8 pf:text-slate-400"}
              >
                {p.solution}
              </p>
              <ul className={"pf:mt-6 pf:list-none pf:space-y-3 pf:p-0"}>
                {p.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      "pf:flex pf:gap-3 pf:text-sm pf:leading-7 pf:text-slate-300"
                    }
                  >
                    <span
                      aria-hidden="true"
                      className={"pf:text-[var(--accent)]"}
                    >
                      ↗
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p
            className={
              "pf:mt-6 pf:max-w-4xl pf:text-xs pf:leading-7 pf:text-slate-500"
            }
          >
            {p.next}
          </p>
        </section>
        <section
          className={
            "pf:mb-16 pf:rounded-3xl pf:border pf:border-white/10 pf:bg-[#0b101b] pf:px-6 pf:py-14 pf:text-center pf:sm:px-12"
          }
        >
          <p className="ep-kicker">INSPECT THE WORK</p>
          <h2
            className={
              "pf:mx-auto pf:mt-5 pf:max-w-2xl pf:text-3xl pf:font-medium pf:tracking-tight pf:sm:text-4xl"
            }
          >
            Explore the system.
            <br />
            Review the implementation.
          </h2>
          <p
            className={
              "pf:mx-auto pf:mt-5 pf:max-w-xl pf:text-sm pf:leading-7 pf:text-slate-400"
            }
          >
            Open-source implementation. Transparent project scope. A direct
            conversation about your next product.
          </p>
          <div
            className={
              "pf:mt-8 pf:flex pf:flex-col pf:justify-center pf:gap-3 pf:sm:flex-row"
            }
          >
            <a
              className="ep-button"
              href={`https://github.com/elnazghanbari/${p.repo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code on GitHub ↗
            </a>
            <a className="ep-button ep-button-secondary" href="#demo">
              ▷ Watch Interactive System Demo
            </a>
          </div>
        </section>
        <footer
          className={
            "pf:flex pf:flex-wrap pf:justify-between pf:gap-5 pf:border-t pf:border-white/10 pf:py-8 pf:pb-24 pf:text-xs pf:text-slate-500"
          }
        >
          <Link href="/projects">← All engineering projects</Link>
          <Link href="/#contact">Discuss a remote project →</Link>
        </footer>
      </div>
    </main>
  );
}
