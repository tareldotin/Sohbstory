import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  accent?: string;
  line?: string;
}

export default function PageHeader({ eyebrow, title, accent, line }: PageHeaderProps) {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10 md:pb-14">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-coco">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          {title} {accent && <span className="italic font-light text-clay">{accent}</span>}
        </h1>
        {line && <p className="mt-5 text-coco max-w-md leading-relaxed">{line}</p>}
      </Reveal>
    </section>
  );
}
