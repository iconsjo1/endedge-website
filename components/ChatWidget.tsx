"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { CHAT_QUICK_PROMPTS } from "@/lib/chat";
import { COMPANY } from "@/lib/constants/company";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm the EndEdge assistant. Ask about our services, VPS plans, AI readiness, or how to get in touch.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, pending]);

  async function send(content: string) {
    const text = content.trim();
    if (!text || pending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setPending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.filter((m) => m.role === "user" || m.role === "assistant"),
        }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error ?? "Chat unavailable.");
      }
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply ?? "Sorry — please try again." },
      ]);
    } catch (err) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            err instanceof Error
              ? err.message
              : `Something went wrong. Email ${COMPANY.email} and we'll help.`,
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open ? (
        <div className="pointer-events-auto flex h-[min(520px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-line bg-slate-panel shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)]">
          <div className="flex items-start justify-between gap-3 border-b border-slate-line bg-ink px-4 py-3">
            <div>
              <p className="font-display text-sm font-semibold text-mist">EndEdge Assistant</p>
              <p className="mt-0.5 text-xs text-muted">Services · VPS · AI readiness</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-1 text-sm text-muted hover:bg-slate-line/40 hover:text-mist"
              aria-label="Close chat"
            >
              Close
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-orange text-white"
                    : "bg-ink text-mist/90"
                }`}
              >
                {message.content}
              </div>
            ))}
            {pending ? (
              <div className="max-w-[90%] rounded-2xl bg-ink px-3.5 py-2.5 text-sm text-muted">
                Thinking…
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <div className="space-y-2 border-t border-slate-line px-3 py-3">
            <div className="flex flex-wrap gap-1.5">
              {CHAT_QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={pending}
                  onClick={() => void send(prompt)}
                  className="rounded-full border border-slate-line px-2.5 py-1 text-[11px] text-muted transition-colors hover:border-orange hover:text-orange disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question…"
                disabled={pending}
                className="min-w-0 flex-1 rounded-xl border border-slate-line bg-ink px-3 py-2.5 text-sm text-mist placeholder:text-muted focus:border-orange focus:outline-none"
              />
              <button
                type="submit"
                disabled={pending || !input.trim()}
                className="rounded-xl bg-orange px-3.5 py-2.5 text-sm font-medium text-white hover:bg-orange-bright disabled:opacity-50"
              >
                Send
              </button>
            </form>
            <p className="px-1 text-[10px] text-muted">
              AI answers may be incomplete. For contracts or urgent help:{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-orange hover:underline">
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="pointer-events-auto inline-flex h-14 items-center gap-2 rounded-full bg-orange px-5 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(255,111,0,0.8)] transition-colors hover:bg-orange-bright"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open EndEdge assistant"}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
          {open ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                d="M4 12c0-4.4 4-8 9-8s9 3.6 9 8-4 8-9 8c-1 0-2-.1-2.9-.4L4 20l1.2-3.5C4.4 15.4 4 13.8 4 12z"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        {open ? "Close" : "Ask EndEdge"}
      </button>
    </div>
  );
}
