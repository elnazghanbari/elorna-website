import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { hasRedis, appendPersistentLead, allowPublicLead } from "../../../lib/storage";
export const runtime = "nodejs";
export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    const hosts = new Set([req.nextUrl.host, process.env.VERCEL_URL, process.env.VERCEL_PROJECT_PRODUCTION_URL, "elorna.net", "www.elorna.net"]);
    if (origin && !hosts.has(new URL(origin).host)) return NextResponse.json({error:"Invalid origin"},{status:403});
    if (Number(req.headers.get("content-length") || 0) > 12000) return NextResponse.json({error:"Too large"},{status:413});
    const raw = await req.text();
    if (raw.length > 12000) return NextResponse.json({error:"Too large"},{status:413});
    const b = JSON.parse(raw);
    if (b.website) return NextResponse.json({error:"Invalid request"},{status:400});
    const name=String(b.name||"").trim(),email=String(b.email||"").trim(),phone=String(b.phone||"").trim(),note=String(b.note||"").trim();
    if (!name || name.length>120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length>180 || phone.length>40 || !note || note.length>1000 || b.consent !== true || !/^[a-f0-9-]{36}$/.test(String(b.requestId||""))) return NextResponse.json({error:"Invalid details"},{status:400});
    if (!hasRedis()) return NextResponse.json({error:"Contact storage unavailable",code:"STORAGE_UNAVAILABLE"},{status:503});
    const ip=createHash("sha256").update(req.headers.get("x-forwarded-for")?.split(",")[0]||"unknown").digest("hex").slice(0,24);
    if (!await allowPublicLead(ip)) return NextResponse.json({error:"Please wait before trying again"},{status:429});
    const now=new Date().toISOString();
    const reference=await appendPersistentLead({id:b.requestId,name,email,phone,note,stage:"New",source:"Website chat",consentedAt:now,createdAt:now});
    return NextResponse.json({saved:true,reference},{status:201});
  } catch { return NextResponse.json({error:"Could not store enquiry",code:"STORAGE_UNAVAILABLE"},{status:503}); }
}
