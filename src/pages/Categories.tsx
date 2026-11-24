import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SubscribeForm from "../components/SubscribeForm";
import { categories, issues } from "../data/issues";

export default function Categories() {
  return (
    <>
      <PageHeader
        eyebrow="Categories"
        title="Six shelves,"
        accent="one library."
        line="Every letter belongs to exactly one. Pick a shelf and stay a while."
      />

      {/* Category list */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 100}>
              <Link
                to="/issues"
                className="group flex items-center justify-between gap-6 py-7 border-b border-ink/15 hover:bg-blush/30 rounded-xl px-4 -mx-4 transition-colors"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display italic text-coco text-sm">0{i + 1}</span>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl tracking-tight group-hover:italic transition-all">
                      {c.name}
                    </h2>
                    <p className="mt-1 text-sm text-coco">{c.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-coco">
                    {c.count} letters
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-coco group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Category covers */}
      <section className="bg-beige/60 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              From the <span className="italic font-light text-clay">shelves</span>
            </h2>
            <p className="mt-3 text-coco text-sm max-w-sm">One letter from six different shelves.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {issues.map((issue, i) => (
              <Reveal key={issue.slug} delay={i * 70}>
                <Link to={`/issues/${issue.slug}`} className="group block">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-beige">
                    <img
                      src={issue.cover}
                      alt={issue.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2.5 text-[9px] uppercase tracking-[0.18em] text-coco">
                    {issue.category}
                  </p>
                  <p className="text-xs font-medium leading-snug mt-0.5 line-clamp-2 group-hover:italic transition-all">
                    {issue.title}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            All shelves, <span className="italic font-light text-clay">delivered</span>
          </h2>
          <p className="mt-4 text-coco max-w-sm leading-relaxed">
            Whatever the shelf, it arrives Sunday at 7 a.m.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-8 w-full flex justify-center">
          <SubscribeForm />
        </Reveal>
      </section>
    </>
  );
}
