import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Issue } from "../data/issues";

export default function IssueCard({ issue }: { issue: Issue }) {
  return (
    <Link to={`/issues/${issue.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-beige">
        <img
          src={issue.cover}
          alt={issue.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-coco">
        <span className="text-ink font-medium">№ {issue.number}</span>
        <span className="w-1 h-1 rounded-full bg-rose" />
        <span>{issue.category}</span>
        <span className="w-1 h-1 rounded-full bg-rose" />
        <span>{issue.readTime}</span>
      </div>
      <h3 className="mt-2 font-display text-xl md:text-2xl leading-snug group-hover:italic transition-all">
        {issue.title}
      </h3>
      <p className="mt-1 text-sm text-coco leading-relaxed line-clamp-2">{issue.excerpt}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-ink border-b border-ink/30 pb-0.5 group-hover:border-ink group-hover:gap-2 transition-all">
        Read
        <ArrowUpRight size={12} />
      </span>
    </Link>
  );
}
