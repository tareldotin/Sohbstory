import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SubscribeForm from "../components/SubscribeForm";

const faqs = [
  {
    q: "Is Sohbstory really free?",
    a: "Yes — completely. The letter is free forever. We keep it small on purpose.",
  },
  {
    q: "When does the letter arrive?",
    a: "Every Sunday at 7 a.m., wherever you are. Coffee o’clock.",
  },
  {
    q: "How long is each letter?",
    a: "About six minutes. Long enough to matter, short enough to keep.",
  },
  {
    q: "Can I unsubscribe?",
    a: "Anytime, with one click. No guilt trips — we promise.",
  },
  {
    q: "Can I write for Sohbstory?",
    a: "We publish two guest letters per season. Send one quiet idea via the contact page.",
  },
  {
    q: "Do you archive past letters?",
    a: "Yes — every letter since № 1 lives in the archive, free to read anytime.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions,"
        accent="answered."
        line="Everything readers ask us most. Still curious? Write to us — we reply slowly but surely."
      />

      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <div className="border-b border-ink/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span
                  className={`font-display text-xl md:text-2xl tracking-tight transition-all ${
                    open === i ? "italic text-ink" : "text-ink/90 group-hover:italic"
                  }`}
                >
                  {f.q}
                </span>
                <span
                  className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    open === i
                      ? "bg-rose border-rose rotate-45"
                      : "border-ink/20 text-coco group-hover:border-ink/50"
                  }`}
                >
                  <Plus size={14} />
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-12 text-sm md:text-base text-coco leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-coco">
            Still stuck?{" "}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-ink border-b border-ink/30 pb-0.5 hover:gap-2 transition-all"
            >
              Write to us
              <ArrowUpRight size={12} />
            </Link>
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-blush/60 border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              One more thing
            </h2>
            <p className="mt-4 text-coco max-w-sm leading-relaxed">
              The best way to understand Sohbstory is to receive it.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-8 w-full flex justify-center">
            <SubscribeForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
