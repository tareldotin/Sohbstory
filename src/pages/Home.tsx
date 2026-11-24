import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SubscribeForm from "../components/SubscribeForm";
import { issues, categories } from "../data/issues";

const latest = issues[0];

const marqueeItems = ["essays", "interviews", "rituals", "objects", "places", "notes"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-14 md:pb-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-coco">
              A weekly letter · № {latest.number} is out
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Slow stories
              <br />
              for <span className="italic font-light text-clay">busy</span> days.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-coco leading-relaxed max-w-sm">
              One letter, every Sunday. Essays, rituals, and quiet things — written to be read
              with coffee.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/subscribe"
                className="inline-flex items-center gap-2 bg-ink text-cream text-[11px] uppercase tracking-[0.14em] px-6 py-3.5 rounded-full hover:bg-coco transition-colors"
              >
                Subscribe free
                <ArrowRight size={13} />
              </Link>
              <Link
                to={`/issues/${latest.slug}`}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] border-b border-ink/30 pb-1 hover:border-ink transition-all hover:gap-3"
              >
                Read № {latest.number}
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-beige">
            <img
              src="/images/hero.jpg"
              alt="Sohbstory cover art"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 md:-left-8 bg-blush rounded-2xl px-5 py-4 shadow-sm">
            <p className="font-display italic text-lg leading-none">№ {latest.number}</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-ink/70 mt-1.5">
              {latest.date}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Marquee */}
      <div className="border-y border-ink/10 bg-paper py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-0">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex items-center text-[11px] uppercase tracking-[0.3em] text-coco"
                >
                  <span className="px-6">{item}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Latest issue */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Link to={`/issues/${latest.slug}`} className="group block">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-beige">
                <img
                  src={latest.cover}
                  alt={latest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-coco">
                The latest letter
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                {latest.title}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-coco leading-relaxed max-w-md">{latest.excerpt}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-coco">
                <span>{latest.date}</span>
                <span className="w-1 h-1 rounded-full bg-rose" />
                <span>{latest.category}</span>
                <span className="w-1 h-1 rounded-full bg-rose" />
                <span>{latest.readTime}</span>
              </div>
              <Link
                to={`/issues/${latest.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] border-b border-ink/30 pb-1 hover:border-ink transition-all hover:gap-3"
              >
                Read the letter
                <ArrowUpRight size={13} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-beige/60 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                What we <span className="italic font-light text-clay">write</span> about
              </h2>
              <Link
                to="/categories"
                className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] border-b border-ink/30 pb-1 hover:border-ink transition-all hover:gap-3"
              >
                All categories
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <Link
                  to="/categories"
                  className="group flex items-baseline justify-between py-5 border-t border-ink/15 hover:bg-blush/30 rounded-lg px-3 -mx-3 transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display italic text-coco text-sm">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl group-hover:italic transition-all">
                      {c.name}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-coco">
                    {c.count}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-28 text-center">
        <Reveal>
          <p className="font-display text-3xl md:text-5xl leading-snug tracking-tight max-w-2xl mx-auto">
            “Less noise, <span className="italic font-light text-clay">more</span> morning.”
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-coco">
            The Sohbstory promise
          </p>
        </Reveal>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-blush/60 border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-coco">Free, forever</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
              Join 12,000 slow readers
            </h2>
            <p className="mt-4 text-coco max-w-sm leading-relaxed">
              One letter a week. No noise, no ads. Unsubscribe anytime.
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
