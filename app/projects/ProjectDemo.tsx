"use client";

import { useState, type FormEvent } from "react";
import { type ProjectSlug } from "./data";

const initialFields = [
  { name: "Utah Sweet Corn", region: "United States", target: 60, value: 45 },
  { name: "Nordic Barley", region: "Sweden", target: 55, value: 57 },
  { name: "Basmati Rice", region: "India", target: 80, value: 75 },
];
const invoices = [
  {
    id: 1,
    client: "Sample US account",
    amount: 4500,
    currency: "USD",
    due: "2026-11-15",
    paid: true,
  },
  {
    id: 2,
    client: "Sample EU account",
    amount: 3200,
    currency: "EUR",
    due: "2026-11-01",
    paid: false,
  },
  {
    id: 3,
    client: "Sample Swedish account",
    amount: 25000,
    currency: "SEK",
    due: "2026-11-20",
    paid: false,
  },
  {
    id: 4,
    client: "Sample Thai account",
    amount: 1500,
    currency: "USD",
    due: "2026-10-25",
    paid: false,
  },
];
// A fixed scenario date keeps the example reproducible and avoids hydration drift.
const scenarioDate = "2026-10-28";
type Log = { id: number; command: string; response: string };

export default function ProjectDemo({ slug }: { slug: ProjectSlug }) {
  const [fields, setFields] = useState(initialFields);
  const [reminded, setReminded] = useState<number[]>([]);
  const [command, setCommand] = useState("");
  const [logs, setLogs] = useState<Log[]>([]);
  const [notice, setNotice] = useState("");
  function reset() {
    setFields(initialFields);
    setReminded([]);
    setCommand("");
    setLogs([]);
    setNotice("Demo reset.");
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = command.trim();
    if (!text) return;
    const response =
      /\b(water|moisture|farm|crop|irrigation|hydration)\b/i.test(text)
        ? "AgTech intent identified. This preview categorizes your request; it does not retrieve live sensor readings or operate irrigation."
        : /\b(finance|financial|invoice|invoices|money|ledger|payment|payments)\b/i.test(
              text,
            )
          ? "Finance intent identified. This preview categorizes your request; it does not analyze accounts, assess risk, or send reminders."
          : "General request captured. This interface demonstrates keyword routing and activity history using predefined responses.";
    setLogs((current) =>
      [
        { id: (current[0]?.id ?? 0) + 1, command: text, response },
        ...current,
      ].slice(0, 5),
    );
    setCommand("");
    setNotice("Command added to the local activity history.");
  }
  return (
    <div
      className={
        "pf:overflow-hidden pf:rounded-2xl pf:border pf:border-white/10 pf:bg-[#080d16]"
      }
    >
      <div
        className={
          "pf:flex pf:flex-wrap pf:items-center pf:justify-between pf:gap-3 pf:border-b pf:border-white/10 pf:bg-white/[0.025] pf:px-5 pf:py-4"
        }
      >
        <span className="ep-kicker">ELORNA / INTERACTIVE PREVIEW</span>
        <span
          className={
            "pf:text-[10px] pf:uppercase pf:tracking-widest pf:text-slate-500"
          }
        >
          SAMPLE DATA · LOCAL SIMULATION
        </span>
      </div>
      <div className={"pf:p-5 pf:sm:p-8"}>
        {slug === "smartfarm" && (
          <div className={"pf:grid pf:gap-4 pf:md:grid-cols-3"}>
            {fields.map((field, index) => {
              const healthy = field.value >= field.target;
              return (
                <article
                  key={field.name}
                  className={
                    "pf:min-w-0 pf:rounded-xl pf:border pf:border-white/10 pf:bg-[#0c1523] pf:p-5"
                  }
                >
                  <p className={"pf:text-xs pf:text-slate-500"}>
                    {field.region}
                  </p>
                  <h3 className={"pf:mt-2 pf:text-base pf:font-medium"}>
                    {field.name}
                  </h3>
                  <p
                    className={
                      "pf:mt-7 pf:text-4xl pf:font-light pf:tabular-nums pf:text-[var(--accent)]"
                    }
                  >
                    {field.value}
                    <span className={"pf:ml-1 pf:text-lg pf:text-slate-500"}>
                      %
                    </span>
                  </p>
                  <p className={"pf:mt-2 pf:text-xs pf:text-slate-400"}>
                    Target moisture: {field.target}%
                  </p>
                  <meter
                    min={0}
                    max={100}
                    value={field.value}
                    aria-label={`${field.name} moisture`}
                    className={
                      "pf:mt-5 pf:h-3 pf:w-full pf:accent-[var(--accent)]"
                    }
                  />
                  <p className={"pf:mb-5 pf:mt-4 pf:text-xs pf:text-slate-300"}>
                    {healthy ? "Target reached" : "Below target"}
                  </p>
                  <button
                    type="button"
                    disabled={healthy}
                    className="ep-button ep-button-secondary"
                    onClick={() => {
                      setFields((current) =>
                        current.map((item, position) =>
                          position === index
                            ? { ...item, value: item.target }
                            : item,
                        ),
                      );
                      setNotice(
                        `${field.name}: simulated moisture updated to ${field.target}%. No equipment was operated.`,
                      );
                    }}
                  >
                    {healthy ? "Target reached" : "Simulate irrigation"}
                  </button>
                </article>
              );
            })}
          </div>
        )}
        {slug === "finance" && (
          <>
            <p className={"pf:mb-5 pf:text-xs pf:text-slate-500"}>
              Scenario date: 28 October 2026 · Due status calculated against
              this fixed date.
            </p>
            <div
              className={"pf:grid pf:gap-4 pf:sm:grid-cols-2 pf:lg:grid-cols-4"}
            >
              {invoices.map((invoice) => {
                const overdue = !invoice.paid && invoice.due < scenarioDate;
                const sent = reminded.includes(invoice.id);
                return (
                  <article
                    key={invoice.id}
                    className={
                      "pf:min-w-0 pf:rounded-xl pf:border pf:border-white/10 pf:bg-[#0c1523] pf:p-5"
                    }
                  >
                    <p className={"pf:text-xs pf:text-slate-500"}>
                      SAMPLE / 00{invoice.id}
                    </p>
                    <h3 className={"pf:mt-2 pf:text-base pf:font-medium"}>
                      {invoice.client}
                    </h3>
                    <p
                      className={
                        "pf:mt-7 pf:break-words pf:text-2xl pf:font-light pf:text-[var(--accent)]"
                      }
                    >
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: invoice.currency,
                        maximumFractionDigits: 0,
                      }).format(invoice.amount)}
                    </p>
                    <p className={"pf:mt-3 pf:text-xs pf:text-slate-500"}>
                      Due: {invoice.due}
                    </p>
                    <p
                      className={"pf:mb-5 pf:mt-4 pf:text-xs pf:text-slate-300"}
                    >
                      {invoice.paid
                        ? "Paid"
                        : overdue
                          ? "Overdue"
                          : "Awaiting payment"}
                      {sent ? " · Reminder simulated" : ""}
                    </p>
                    <button
                      type="button"
                      disabled={!overdue || sent}
                      className="ep-button ep-button-secondary"
                      onClick={() => {
                        setReminded((current) => [...current, invoice.id]);
                        setNotice(
                          "Reminder simulated locally. No email or message was sent.",
                        );
                      }}
                    >
                      {invoice.paid
                        ? "Paid"
                        : sent
                          ? "Simulated"
                          : overdue
                            ? "Simulate reminder"
                            : "Not yet due"}
                    </button>
                  </article>
                );
              })}
            </div>
          </>
        )}
        {slug === "ai" && (
          <div className={"pf:mx-auto pf:max-w-3xl"}>
            <form onSubmit={submit}>
              <label
                htmlFor="project-command"
                className={"pf:text-sm pf:font-medium"}
              >
                Explore a business command
              </label>
              <div
                className={
                  "pf:mt-3 pf:flex pf:flex-col pf:gap-3 pf:sm:flex-row"
                }
              >
                <input
                  id="project-command"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  maxLength={500}
                  placeholder="Try: Review farm moisture"
                  className={
                    "pf:min-h-12 pf:min-w-0 pf:flex-1 pf:rounded-xl pf:border pf:border-white/15 pf:bg-[#05070c] pf:px-4 pf:py-3 pf:text-sm pf:text-white pf:placeholder:text-slate-500"
                  }
                />
                <button
                  type="submit"
                  disabled={!command.trim()}
                  className="ep-button"
                >
                  Run demo command ↗
                </button>
              </div>
            </form>
            <div className={"pf:mt-4 pf:flex pf:flex-wrap pf:gap-2"}>
              {["Review farm moisture", "Review unpaid invoices"].map(
                (example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setCommand(example)}
                    className={
                      "pf:rounded-lg pf:border pf:border-white/10 pf:bg-transparent pf:px-3 pf:py-2 pf:text-xs pf:text-slate-400"
                    }
                  >
                    {example}
                  </button>
                ),
              )}
            </div>
            <p className={"pf:mt-4 pf:text-xs pf:leading-6 pf:text-slate-500"}>
              Keyword routing with predefined responses. No language model or
              external service is called.
            </p>
            <div
              role="log"
              aria-label="Command activity"
              aria-live="polite"
              aria-relevant="additions"
              className={"pf:mt-6 pf:space-y-3"}
            >
              {logs.length === 0 && (
                <p
                  className={
                    "pf:rounded-xl pf:border pf:border-dashed pf:border-white/10 pf:p-6 pf:text-sm pf:text-slate-500"
                  }
                >
                  Your command history will appear here.
                </p>
              )}
              {logs.map((log) => (
                <article
                  key={log.id}
                  className={
                    "pf:rounded-xl pf:border pf:border-white/10 pf:bg-[#0c1523] pf:p-5"
                  }
                >
                  <h3 className={"pf:break-words pf:text-sm pf:font-medium"}>
                    {log.command}
                  </h3>
                  <p
                    className={
                      "pf:mt-3 pf:text-sm pf:leading-7 pf:text-slate-400"
                    }
                  >
                    {log.response}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}
        <div
          className={
            "pf:mt-7 pf:flex pf:flex-wrap pf:items-center pf:justify-between pf:gap-4 pf:border-t pf:border-white/10 pf:pt-5"
          }
        >
          <p
            role="status"
            className={"pf:max-w-2xl pf:text-xs pf:leading-6 pf:text-slate-400"}
          >
            {notice ||
              "Explore the controls. Changes last until you leave or reload this page."}
          </p>
          <button
            type="button"
            onClick={reset}
            className={
              "pf:rounded-sm pf:border-0 pf:bg-transparent pf:p-2 pf:text-xs pf:text-slate-400 pf:underline pf:underline-offset-4"
            }
          >
            Reset demo
          </button>
        </div>
      </div>
    </div>
  );
}
