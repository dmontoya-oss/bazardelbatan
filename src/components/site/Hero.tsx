import heroImg from "@/assets/hero-market.jpg";
import { ArrowRight, CalendarDays, Sparkles, Users, Ticket } from "lucide-react";

const badges = [
  { icon: Sparkles, label: "Cupos limitados" },
  { icon: Users, label: "+100 emprendedores" },
  { icon: CalendarDays, label: "Evento mensual" },
  { icon: Ticket, label: "Entrada libre" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative bunting */}
      <div className="absolute inset-x-0 top-0 h-10 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1200 60" className="w-full h-full">
          <path d="M0 0 Q600 80 1200 0" stroke="#5a3a26" strokeWidth="1.5" fill="none" opacity="0.25"/>
          {Array.from({ length: 18 }).map((_, i) => {
            const x = 40 + i * 65;
            const y = 4 + Math.sin(i / 2) * 6;
            const colors = ["#d9b3e0", "#f6d77a", "#e8a26a", "#b6c39b", "#e7c8a0"];
            return (
              <polygon
                key={i}
                points={`${x},${y} ${x + 22},${y} ${x + 11},${y + 26}`}
                fill={colors[i % colors.length]}
              />
            );
          })}
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-butter-soft border border-butter/40 text-xs font-semibold text-cocoa">
            <span className="h-2 w-2 rounded-full bg-tangerine animate-pulse"></span>
            Bogotá · Barrio El Batán
          </span>

          <h1 className="mt-5 font-display text-[44px] sm:text-6xl lg:text-7xl leading-[0.95] font-bold text-cocoa">
            Haz crecer tu <em className="not-italic text-lilac">emprendimiento</em> en <em className="not-italic">El Bazar del Batán</em>
          </h1>

          <p className="mt-6 text-lg text-cocoa-soft max-w-xl leading-relaxed">
            Una feria mensual en Bogotá donde marcas locales conectan con cientos de
            personas en un ambiente cálido, familiar y moderno.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#reservar"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cocoa text-bone font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Reservar mi stand
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#fechas"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-bone border border-cocoa/10 text-cocoa font-semibold hover:bg-lilac-soft transition-colors"
            >
              Ver próximas fechas
            </a>
          </div>

          {/* Cupos counter */}
          <div className="mt-8 inline-flex items-stretch rounded-3xl bg-bone border border-cocoa/10 p-2 shadow-sm">
            <div className="px-5 py-3 border-r border-cocoa/10">
              <p className="text-[11px] uppercase tracking-widest text-cocoa-soft">Cupos disponibles</p>
              <p className="font-display text-3xl font-bold text-cocoa leading-none mt-1">
                23<span className="text-cocoa-soft/50 text-base">/120</span>
              </p>
            </div>
            <div className="px-5 py-3 flex items-center">
              <div className="w-32 h-2 rounded-full bg-cocoa/10 overflow-hidden">
                <div className="h-full bg-tangerine" style={{ width: "80%" }} />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lilac-soft text-cocoa text-xs font-medium border border-lilac/30"
              >
                <b.icon className="size-3.5" />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: illustration */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[1638/741] w-full">
            {/* blob bg */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-6 right-6 w-72 h-72 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] bg-lilac-soft blur-2xl opacity-70" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-[60%_40%_40%_60%/60%_50%_50%_40%] bg-butter-soft blur-2xl opacity-80" />
            </div>

            <img
              src={heroImg}
              alt="Ilustración de El Bazar del Batán: feria de barrio en Bogotá con emprendedores, gastronomía y decoración"
              width={1638}
              height={741}
              className="relative w-full h-full object-contain drop-shadow-xl"
            />

            {/* floating sticker cards */}
            <div className="absolute -left-2 top-10 hidden sm:flex float-slow items-center gap-2 bg-bone rounded-2xl shadow-lg px-3 py-2 border border-cocoa/5" style={{ ['--r' as any]: '-6deg' }}>
              <div className="h-8 w-8 rounded-full bg-tangerine-soft grid place-items-center">🥐</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cocoa-soft">Gourmet</p>
                <p className="text-xs font-semibold text-cocoa">+40 marcas</p>
              </div>
            </div>
            <div className="absolute right-0 bottom-10 hidden sm:flex float-med items-center gap-2 bg-bone rounded-2xl shadow-lg px-3 py-2 border border-cocoa/5" style={{ ['--r' as any]: '5deg' }}>
              <div className="h-8 w-8 rounded-full bg-olive-soft grid place-items-center">🌿</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cocoa-soft">Wellness</p>
                <p className="text-xs font-semibold text-cocoa">Nuevas marcas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
