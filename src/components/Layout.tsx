import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect } from "react";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/issues", label: "Issues" },
  { to: "/categories", label: "Categories" },
  { to: "/contributors", label: "Team" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/85 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-tight leading-none">
            Sohb<span className="italic font-light">story</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    isActive ? "text-ink font-medium" : "text-coco hover:text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/subscribe"
              className="ml-1 inline-flex items-center gap-1.5 bg-ink text-cream text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-full hover:bg-coco transition-colors"
            >
              Subscribe
              <ArrowUpRight size={13} strokeWidth={2} />
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-ink/10 bg-cream">
            <nav className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-display text-2xl ${isActive ? "italic text-ink" : "text-coco"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/subscribe"
                className="mt-2 inline-flex w-fit items-center gap-1.5 bg-ink text-cream text-[11px] uppercase tracking-[0.14em] px-5 py-3 rounded-full"
              >
                Subscribe
                <ArrowUpRight size={13} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-paper border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <p className="font-display text-5xl md:text-7xl tracking-tight leading-none">
                Sohb<span className="italic font-light">story</span>
              </p>
              <p className="mt-4 text-sm text-coco max-w-xs leading-relaxed">
                A weekly letter about the small things. Written slowly, read with coffee.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-[11px] uppercase tracking-[0.18em] text-coco hover:text-ink transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-12 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-3">
            <p className="text-xs text-coco">© 2025 Sohbstory. All rights reserved.</p>
            <p className="text-xs text-coco">Designed by designorydotco</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
