import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3 && email.includes("@")) {
      setDone(true);
    }
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 bg-cream border border-ink/10 rounded-full px-6 py-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose shrink-0">
          <Check size={15} strokeWidth={2.5} />
        </span>
        <div>
          <p className="font-display text-lg leading-tight">You’re in.</p>
          <p className="text-xs text-coco">First letter arrives Sunday.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-cream border border-ink/10 rounded-full p-2 sm:p-1.5 sm:pl-6 max-w-md"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-transparent outline-none text-sm placeholder:text-coco/70 py-2.5 sm:py-2 min-w-0"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-ink text-cream text-[11px] uppercase tracking-[0.14em] px-6 py-3 rounded-full hover:bg-coco transition-colors shrink-0"
      >
        Subscribe
        <ArrowRight size={13} />
      </button>
    </form>
  );
}
