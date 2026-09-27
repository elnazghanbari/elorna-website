"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const welcome: Message = {
  role: "assistant",
  content: "Hi — I’m ELORNA AI. Ask me about BUILD, SELL, GROW, CAPITAL, pricing, or the best next step for your business."
};

export default function ElornaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [diagnostic, setDiagnostic] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, loading]);

  async function send(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-10) })
      });
      const data = await res.json();
      setMessages(m => [...m, { role: "assistant", content: data.reply || "Please try again." }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", content: "I couldn’t connect right now. You can reach ELORNA at contact@elorna.net." }]);
    } finally {
      setLoading(false);
    }
  }

  function chooseDiagnostic(answer: string) {
    setInput(`Business diagnostic: ${answer}. Recommend which ELORNA stage I should start with and give me 3 practical next steps.`);
    setDiagnostic(false);
  }

  return <div className="elornaChat">
    {open && <section className="chatPanel" aria-label="ELORNA AI Assistant">
      <header className="chatHead">
        <div><span className="chatOrb">✦</span><div><strong>ELORNA AI</strong><small>AI-assisted • Human-approved</small></div></div>
        <button onClick={() => setOpen(false)} aria-label="Close chat">×</button>
      </header>
      <div className="chatMessages">
        {messages.map((m,i)=><div key={i} className={`chatMsg ${m.role}`}>{m.content}</div>)}
        {loading && <div className="chatMsg assistant typing">Thinking<span>…</span></div>}
        <div ref={endRef}/>
      </div>
      {diagnostic ? <div className="diagnosticBox"><strong>What best describes you right now?</strong><div className="diagnosticChoices">{["I have an idea","I need more sales","I want to grow","I’m preparing for capital"].map(x=><button key={x} onClick={()=>chooseDiagnostic(x)}>{x}</button>)}</div></div> : <div className="chatQuick"><button className="diagnosticStart" onClick={()=>setDiagnostic(true)}>✦ Find my starting point</button>{["What can ELORNA do?","How does pricing work?"].map(q=><button key={q} onClick={()=>setInput(q)}>{q}</button>)}</div>}
      <form onSubmit={send} className="chatForm">
        <input value={input} onChange={e=>setInput(e.target.value)} maxLength={800} placeholder="Ask ELORNA AI…" aria-label="Message ELORNA AI"/>
        <button type="submit" disabled={loading || !input.trim()} aria-label="Send">↑</button>
      </form>
      <p className="chatNote">AI can make mistakes. Important business decisions should be verified.</p>
    </section>}
    <button className="chatLauncher" onClick={()=>setOpen(v=>!v)} aria-label={open ? "Close ELORNA AI" : "Open ELORNA AI"}>
      <span>✦</span><b>ELORNA AI</b>
    </button>
  </div>;
}
