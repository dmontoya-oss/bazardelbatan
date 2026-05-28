import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-bazar.png";

const links = [
  { label: "Categorías", href: "#categorias" },
  { label: "Próximas fechas", href: "#fechas" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/70 border-b border-cocoa/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="El Bazar del Batán"
            className="h-11 w-11 rounded-full object-cover shadow-sm group-hover:rotate-[-6deg] transition-transform"
          />
          <div className="leading-none">
            <p className="font-display text-[15px] font-bold text-cocoa">El Bazar</p>
            <p className="font-display text-[11px] text-cocoa-soft tracking-widest uppercase">
              del Batán
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-cocoa/80 hover:text-cocoa hover:bg-lilac-soft transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="#fechas"
            className="px-4 py-2 rounded-full text-sm font-semibold text-cocoa hover:bg-butter-soft transition-colors"
          >
            Iniciar sesión
          </a>
          <a
            href="#reservar"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-cocoa text-bone hover:bg-cocoa-soft transition-all hover:-translate-y-0.5 shadow-sm"
          >
            Reservar stand
          </a>
        </div>

        <button
          className="lg:hidden h-10 w-10 grid place-items-center rounded-full bg-lilac-soft text-cocoa"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cocoa/5 bg-cream/95">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm font-medium text-cocoa hover:bg-lilac-soft"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold bg-cocoa text-bone"
            >
              Reservar stand
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
