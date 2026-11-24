import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SubscribeForm from "../components/SubscribeForm";
import { CalendarHeart, Mail, ShieldCheck, Coffee } from "lucide-react";

const perks = [
  { icon: Mail, title: "One email a week", text: "Sunday, 7 a.m. Never more." },
  { icon: ShieldCheck, title: "No noise", text: "No ads, no tracking, no spam." },
  { icon: Coffee, title: "Six minutes", text: "Long enough to matter, short enough to keep." },
  { icon: CalendarHeart, title: "Free forever", text: "The letter was always meant to be free." },
];

const quotes = [
  {
    q: "The only email I open every single week.",
    a: "Marta L., reader since № 3",
  },
  {
    q: "Feels like a letter from a calm friend.",
    a: "Daniel R., reader since № 11",
  },
];

export default function Subscribe() {
  return (
    <>
      <PageHeader
        eyebrow="Subscribe"
        title="One letter. Every"
        accent="Sunday."
        line="Join 12,000 readers who start their week slowly. Free forever — no noise, ever."
      />

      {/* Form hero */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="bg-blush/70 border border-ink/10 rounded-[2rem] p-8 md:p-14 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-tight">
              Your inbox deserves <span className="italic font-light text-clay">better</span>
            </h2>
            <p className="mt-4 text-coco max-w-sm mx-auto leading-relaxed">
              Six minutes of quiet, delivered weekly.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-8 flex justify-center">
            <SubscribeForm />
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-5 text-xs text-coco">Unsubscribe anytime. We won’t take it personally.</p>
          </Reveal>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="border-t border-ink/20 pt-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-rose mb-4">
                  <p.icon size={16} strokeWidth={2} />
                </span>
                <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-sm text-coco leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-beige/60 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 120}>
              <div>
                <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight">
                  “{q.q}”
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-coco">{q.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
