import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SubscribeForm from "../components/SubscribeForm";
import { issues } from "../data/issues";

export default function IssueDetail() {
  const { slug } = useParams();
  const issue = issues.find((i) => i.slug === slug);

  if (!issue) {
    return (
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-24 text-center">
        <p className="font-display text-4xl tracking-tight">Letter not found.</p>
        <Link
          to="/issues"
          className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] border-b border-ink/30 pb-1"
        >
          Back to the archive
          <ArrowUpRight size={13} />
        </Link>
      </section>
    );
  }

  const next = issues.find((i) => i.number === issue.number - 1) ?? issues[issues.length - 1];

  return (
    <>
      {/* Header */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-10">
        <Reveal>
          <Link
            to="/issues"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-coco hover:text-ink transition-colors"
          >
            <ArrowLeft size={13} />
            Archive
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-coco">
            <span className="text-ink font-medium">Issue № {issue.number}</span>
            <span className="w-1 h-1 rounded-full bg-rose" />
            <span>{issue.date}</span>
            <span className="w-1 h-1 rounded-full bg-rose" />
            <span>{issue.readTime}</span>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            {issue.title}
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-6 font-display italic text-xl text-coco leading-relaxed">
            {issue.excerpt}
          </p>
        </Reveal>
      </section>

      {/* Cover */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 pb-12 md:pb-16">
        <Reveal delay={150}>
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-beige">
            <img src={issue.cover} alt={issue.title} className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Body */}
      <section className="max-w-2xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">{issue.body.heading}</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 text-base md:text-lg leading-[1.9] text-ink/90">
            <span className="font-display float-left text-6xl leading-[0.85] pr-3 pt-1 text-clay">
              {issue.body.paragraphs[0].charAt(0)}
            </span>
            {issue.body.paragraphs[0].slice(1)}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-base md:text-lg leading-[1.9] text-ink/90">
            {issue.body.paragraphs[1]}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="my-12 py-8 border-y border-ink/15 text-center">
            <p className="font-display italic text-2xl md:text-3xl leading-snug tracking-tight">
              “{issue.body.pullQuote}”
            </p>
          </blockquote>
        </Reveal>

        {issue.body.paragraphs[2] && (
          <Reveal delay={150}>
            <p className="text-base md:text-lg leading-[1.9] text-ink/90">
              {issue.body.paragraphs[2]}
            </p>
          </Reveal>
        )}

        <Reveal delay={150}>
          <p className="mt-6 text-base md:text-lg leading-[1.9] text-ink/90 font-display italic">
            {issue.body.closing}
          </p>
        </Reveal>

        {/* Author */}
        <Reveal delay={100}>
          <div className="mt-14 flex items-center gap-4 bg-paper border border-ink/10 rounded-2xl p-5">
            <div className="w-12 h-12 rounded-full bg-rose flex items-center justify-center font-display text-lg shrink-0">
              {issue.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-medium">{issue.author}</p>
              <p className="text-xs text-coco">{issue.authorRole} · Sohbstory</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Next issue */}
      <section className="border-y border-ink/10 bg-paper">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <Link to={`/issues/${next.slug}`} className="group flex items-center justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-coco">Next letter</p>
                <p className="mt-2 font-display text-2xl md:text-3xl tracking-tight group-hover:italic transition-all">
                  № {next.number} — {next.title}
                </p>
              </div>
              <span className="w-12 h-12 rounded-full bg-ink text-cream flex items-center justify-center shrink-0 group-hover:bg-coco group-hover:rotate-45 transition-all">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush/60">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Enjoyed this one?
            </h2>
            <p className="mt-4 text-coco max-w-sm leading-relaxed">
              The next letter is free too. It arrives Sunday at 7 a.m.
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
