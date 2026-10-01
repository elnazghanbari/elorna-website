import { NextRequest, NextResponse } from "next/server";
import { ChatMessage, chatLanguage, chatPrices, contactIntent, guideReply } from "../../../lib/chat";
import { hasRedis } from "../../../lib/storage";
export const runtime = "nodejs";
export const maxDuration = 30;
const system = `You are ELORNA's concise, warm website assistant. Answer the latest question in the visitor's language and use the full supplied conversation; do not repeat a generic introduction. ELORNA is based in Sweden, founder Elnaz Ghanbari, contact@elorna.net. BUILD: strategy, positioning and launch. SELL: customer journey and conversion. GROW: analytics and growth tests. CAPITAL: readiness, never guaranteed funding. Web development and AI automation are scoped services. ${chatPrices}
The five studio studies Nord Bloom, Luma Studio, Saffron Table, KindPath and Founder Desk are fictional concepts, not clients or delivered products. No verified testimonials are currently published. Never invent endorsements or results.
You cannot save contact data, send emails, book meetings or operate the CRM. Never say an enquiry has been saved or a person will contact the visitor. For contact or quotes, ask them to use the Request contact form and approve their details and consent. Only the server can confirm storage. Do not solicit sensitive information. Acknowledge details already shared and avoid asking for them again. Answer directly, then at most one relevant follow-up question. Keep answers under 150 words.`;
export async function POST(req: NextRequest) {
  let messages: ChatMessage[] = [];
  let language: "en" | "sv" | "fa" = "en";
  try {
    if (Number(req.headers.get("content-length") || 0) > 120000) return NextResponse.json({ error: "Message too large" }, { status: 413 });
    const raw = await req.text();
    if (raw.length > 120000) return NextResponse.json({error:"Message too large"},{status:413});
    const body = JSON.parse(raw);
    messages = Array.isArray(body?.messages) ? body.messages.slice(-60).filter((m: unknown): m is ChatMessage => Boolean(m && typeof m === "object" && "role" in m && "content" in m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")).map((m: ChatMessage) => ({role:m.role,content:m.content.slice(0,1200)})) : [];
    language = chatLanguage(messages, body.language);
    if (messages.at(-1)?.role !== "user" || !messages.at(-1)?.content.trim()) return NextResponse.json({ error: "A user message is required" }, { status: 400 });
    const last = messages.at(-1)!.content;
    const metadata = { language, showContact: contactIntent(last), leadCaptureAvailable: hasRedis() };
    const fallback = (reason: string) => {
      console.warn("ELORNA chat service guide:", reason);
      return NextResponse.json({reply:guideReply(messages,language),mode:"guide",...metadata});
    };
    // Contact actions always use explicit consent and verified server storage, not model text.
    if (contactIntent(last)) return NextResponse.json({reply:guideReply(messages,language),mode:"guide",...metadata});
    const key = process.env.OPENAI_API_KEY;
    if (!key) return fallback("not configured");
    const model = process.env.OPENAI_MODEL || "gpt-5-mini";
    try {
      const response = await fetch("https://api.openai.com/v1/responses", {
        method:"POST", signal:AbortSignal.timeout(20000),
        headers:{"Content-Type":"application/json",Authorization:`Bearer ${key}`},
        body:JSON.stringify({model,instructions:system + `\nReply in ${language}.`,input:messages,max_output_tokens:1600,store:false,...(/^gpt-5/.test(model) ? {reasoning:{effort:"low"}} : {})})
      });
      if (!response.ok) return fallback(`provider status ${response.status}`);
      const data = await response.json();
      const reply = typeof data.output_text === "string" ? data.output_text.trim() : (data.output || []).filter((item: {type?:string}) => item.type === "message").flatMap((item: {content?:{type?:string;text?:string}[]}) => item.content || []).filter((item: {type?:string;text?:string}) => item.type === "output_text" && typeof item.text === "string").map((item:{text:string}) => item.text).join("\n").trim();
      if (!reply || data.status === "incomplete") return fallback("empty or incomplete provider output");
      return NextResponse.json({reply,mode:"ai",...metadata});
    } catch { return fallback("provider timeout or unavailable"); }
  } catch {
    return NextResponse.json({reply:guideReply(messages,language),mode:"guide",showContact:false},{status:400});
  }
}
