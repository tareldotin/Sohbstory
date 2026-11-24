import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

const team = [
  {
    name: "Malavika",
    role: "Editor in Chief",
    bio: "Writes the Sunday essays. Believes in slow mornings.",
    color: "bg-rose",
    initials: "EM",
  },
  {
    name: "Jaison",
    role: "Staff Writer",
    bio: "Finds the quiet places. Collects staircases.",
    color: "bg-sand",
    initials: "JR",
  },
  {
    name: "Jibin",
    role: "Illustrator",
    bio: "Paints the covers. Owns forty-one pencils.",
    color: "bg-blush",
    initials: "AO",
  },
  {
    name: "Anju Mohandas",
    role: "Producer",
    bio: "Sends the letters. Guards the 7 a.m. schedule.",
    color: "bg-beige",
    initials: "TL",
  },
];

export default function Contributors() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="Four people, one"
        accent="slow letter."
        line="Small on purpose. We answer every email ourselves — eventually, patiently."
      />

      {/* Team grid */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="group">
                <div
                  className={`w-20 h-20 rounded-full ${p.color} flex items-center justify-center font-display text-2xl group-hover:scale-105 transition-transform duration-500`}
                >
                  {p.initials}
                </div>
                <h2 className="mt-5 font-display text-2xl tracking-tight group-hover:italic transition-all">
                  {p.name}
                </h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-clay">
                  {p.role}
                </p>
                <p className="mt-2.5 text-sm text-coco leading-relaxed">{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Join note */}
      <section className="bg-beige/60 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                Want to <span className="italic font-light text-clay">write</span> for us?
              </h2>
              <p className="mt-3 text-coco text-sm max-w-sm leading-relaxed">
                We publish two guest letters per season. Send us one quiet idea.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ink text-cream text-[11px] uppercase tracking-[0.14em] px-6 py-3.5 rounded-full hover:bg-coco transition-colors"
            >
              <Mail size={13} />
              Say hello
              <ArrowUpRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
