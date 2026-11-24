import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import IssueCard from "../components/IssueCard";
import SubscribeForm from "../components/SubscribeForm";
import { issues } from "../data/issues";

export default function Issues() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(issues.map((i) => i.category)))];
  const filtered = filter === "All" ? issues : issues.filter((i) => i.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="The archive"
        title="Every letter, kept"
        accent="safely."
        line="Twenty-four letters and counting. Start anywhere — they don’t expire."
      />

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-10">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-full border transition-all ${
                  filter === c
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/20 text-coco hover:border-ink/50 hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filtered.map((issue, i) => (
            <Reveal key={issue.slug} delay={(i % 3) * 100}>
              <IssueCard issue={issue} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush/60 border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Missing any?
            </h2>
            <p className="mt-4 text-coco max-w-sm leading-relaxed">
              Subscribe and every future letter lands in your inbox, Sunday at 7 a.m.
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
