import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const system = `You are ELORNA AI, the concise website assistant for ELORNA.
ELORNA helps founders and small businesses through four stages:
BUILD — strategy, positioning, brand direction and a launch-ready plan.
SELL — customer journey, conversion touchpoints and a clearer route from offer to customer.
GROW — performance data, bottlenecks, priorities and AI-assisted growth tests.
CAPITAL — organizing business fundamentals and readiness information for future capital conversations; never promise funding.
Pricing is based on project scope and ELORNA provides a clear estimate before paid work begins.
Contact: contact@elorna.net. Founder: Elnaz Ghanbari.
ELORNA uses AI to reduce complexity while important business decisions remain human-approved.
Be helpful, premium, warm and brief. Answer in the same language as the visitor when possible, including English, Swedish and Persian.
Never invent clients, testimonials, results, guarantees, prices or funding outcomes.
If the request requires a human, invite the visitor to contact ELORNA.`;

function localReply(text: string) {
  const q = text.toLowerCase();
  if (/price|pricing|cost|قیمت|هزینه|pris|kost/.test(q)) return "ELORNA pricing is based on project scope. Tell me what you’re building and I can help you identify the right stage; a clear estimate is provided before paid work begins.";
  if (/build|شروع|start|börja/.test(q)) return "Start with BUILD if you’re shaping an idea, offer, positioning or launch plan. If you tell me where your business is today, I’ll point you to the most relevant ELORNA stage.";
  if (/sell|فروش|sälj/.test(q)) return "SELL focuses on the path from offer to customer: customer journey, conversion touchpoints and measurable next steps.";
  if (/grow|رشد|väx/.test(q)) return "GROW uses business data and AI-assisted analysis to identify bottlenecks, priorities and focused growth tests.";
  if (/capital|fund|سرمایه|kapital/.test(q)) return "CAPITAL helps organize business fundamentals and readiness information for future capital conversations. ELORNA does not promise funding outcomes.";
  if (/contact|email|تماس|kontakt/.test(q)) return "You can contact ELORNA at contact@elorna.net.";
  return "ELORNA connects BUILD, SELL, GROW and CAPITAL in one AI-assisted, founder-controlled journey. Tell me what you’re building or what challenge you want to solve.";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = Array.isArray(body?.messages) ? body.messages.slice(-10) : [];
    const last = String(messages.at(-1)?.content || "").slice(0, 800);
    if (!last) return NextResponse.json({ reply: "What would you like to build?" }, { status: 400 });

    const key = process.env.OPENAI_API_KEY;
    if (!key) return NextResponse.json({ reply: localReply(last), mode: "starter" });

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5-mini",
        instructions: system,
        input: messages.map((m: {role?: string; content?: string}) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: String(m.content || "").slice(0, 1200)
        })),
        max_output_tokens: 350
      })
    });

    if (!response.ok) return NextResponse.json({ reply: localReply(last), mode: "fallback" });
    const data = await response.json();
    const reply = data.output_text || data.output?.flatMap((x:any)=>x.content||[]).map((x:any)=>x.text||"").join("").trim();
    return NextResponse.json({ reply: reply || localReply(last), mode: "ai" });
  } catch {
    return NextResponse.json({ reply: "I couldn’t process that message. Please try again or contact contact@elorna.net." }, { status: 500 });
  }
}
