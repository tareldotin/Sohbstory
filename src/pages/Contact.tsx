import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Camera, AtSign } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim() && form.email.includes("@") && form.message.trim()) {
      setSent(true);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say"
        accent="hello."
        line="Questions, ideas, or a story about your street — we read everything, usually with coffee."
      />

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 grid md:grid-cols-5 gap-12 md:gap-16">
        {/* Form */}
        <div className="md:col-span-3">
          <Reveal>
            {sent ? (
              <div className="bg-blush/70 border border-ink/10 rounded-2xl p-8 md:p-10 text-center">
                <span className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-rose">
                  <Check size={18} strokeWidth={2.5} />
                </span>
                <h2 className="mt-5 font-display text-3xl tracking-tight">Message received.</h2>
                <p className="mt-3 text-sm text-coco">
                  We reply slowly, but we always reply — usually within a day or two.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-coco mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Appleseed"
                    className="w-full bg-transparent border border-ink/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-ink transition-colors placeholder:text-coco/60"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-coco mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@email.com"
                    className="w-full bg-transparent border border-ink/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-ink transition-colors placeholder:text-coco/60"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-coco mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us something quiet…"
                    className="w-full bg-transparent border border-ink/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-ink transition-colors resize-none placeholder:text-coco/60"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-ink text-cream text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full hover:bg-coco transition-colors"
                >
                  Send message
                  <ArrowRight size={13} />
                </button>
              </form>
            )}
          </Reveal>
        </div>

        {/* Info */}
        <div className="md:col-span-2 space-y-8">
          <Reveal delay={100}>
            <div className="border-t border-ink/20 pt-5">
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-coco">
                <Mail size={13} /> Email
              </span>
              <p className="mt-2 font-display text-xl">hello@sohbstory.com</p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="border-t border-ink/20 pt-5">
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-coco">
                <MapPin size={13} /> Studio
              </span>
              <p className="mt-2 font-display text-xl">Copenhagen, Denmark</p>
              <p className="text-sm text-coco mt-1">Above a bakery, most days.</p>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="border-t border-ink/20 pt-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-coco">Elsewhere</p>
              <div className="mt-3 flex gap-3">
                {[Camera, AtSign].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-coco hover:bg-rose hover:text-ink hover:border-rose transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
