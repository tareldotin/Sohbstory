import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SubscribeForm from "../components/SubscribeForm";

const principles = [
  { n: "01", title: "Slow over fast", text: "We publish when it’s ready. Usually Sunday." },
  { n: "02", title: "Less over more", text: "One idea per letter. Nothing else." },
  { n: "03", title: "Warm over loud", text: "Written like a note to a friend." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A slow letter about the"
        accent="small things."
        line="Sohbstory began in 2023 as a note between two friends. It is now read in forty countries — and still written the same way."
      />

      {/* Image + intro */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-beige">
            <img
              src="/images/about.jpg"
              alt="Stack of Sohbstory letters"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={100}>
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight">
              We believe the internet has enough <span className="italic font-light text-clay">loud</span>.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-coco leading-relaxed max-w-md">
              Sohbstory is our answer: a weekly letter about quiet mornings, kept objects, slow
              places, and the people who make things by hand.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="text-coco leading-relaxed max-w-md">
              Every Sunday morning, one letter arrives. It takes about six minutes to read and,
              we hope, a little longer to forget.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <Link
              to="/issues"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] border-b border-ink/30 pb-1 hover:border-ink transition-all hover:gap-3"
            >
              Browse the archive
              <ArrowUpRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-beige/60 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              Three <span className="italic font-light text-clay">rules</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-10">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="border-t border-ink/20 pt-6">
                  <p className="font-display italic text-clay">{p.n}</p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-coco leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-3 gap-6 text-center md:text-left">
          {[
            { n: "24", l: "Letters published" },
            { n: "12k", l: "Slow readers" },
            { n: "6 min", l: "Average read" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <p className="font-display text-4xl md:text-6xl tracking-tight">{s.n}</p>
              <p className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-coco">
                {s.l}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush/60 border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Read along, <span className="italic font-light text-clay">slowly</span>
            </h2>
            <p className="mt-4 text-coco max-w-sm leading-relaxed">
              The next letter leaves Sunday at 7 a.m.
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
