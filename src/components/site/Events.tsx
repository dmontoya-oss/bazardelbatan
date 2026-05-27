import { MapPin, Clock, Users } from "lucide-react";

type Status = "Disponible" | "Últimos cupos" | "Agotado";

const events: {
  date: string; month: string; weekday: string;
  title: string; address: string; time: string;
  price: string; left: number; total: number; status: Status;
}[] = [
  { date: "16", month: "Ene", weekday: "Sábado", title: "Bazar de Año Nuevo", address: "Parque El Batán, Bogotá", time: "10:00 - 19:00", price: "$180.000", left: 23, total: 120, status: "Disponible" },
  { date: "20", month: "Feb", weekday: "Sábado", title: "Bazar de Enamorados", address: "Parque El Batán, Bogotá", time: "10:00 - 19:00", price: "$200.000", left: 7, total: 120, status: "Últimos cupos" },
  { date: "19", month: "Mar", weekday: "Sábado", title: "Bazar de Otoño Andino", address: "Parque El Batán, Bogotá", time: "10:00 - 19:00", price: "$200.000", left: 0, total: 120, status: "Agotado" },
  { date: "16", month: "Abr", weekday: "Sábado", title: "Bazar de Primavera", address: "Parque El Batán, Bogotá", time: "10:00 - 19:00", price: "$210.000", left: 64, total: 120, status: "Disponible" },
];

const statusStyles: Record<Status, string> = {
  "Disponible": "bg-olive-soft text-olive border-olive/30",
  "Últimos cupos": "bg-tangerine-soft text-tangerine border-tangerine/40",
  "Agotado": "bg-cocoa/10 text-cocoa-soft border-cocoa/10",
};

export function Events() {
  return (
    <section id="fechas" className="relative py-20 lg:py-28 bg-bone">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-tangerine font-semibold">
              Próximas fechas
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-cocoa">
              Asegura tu lugar
            </h2>
          </div>
          <a href="#reservar" className="text-sm font-semibold text-cocoa underline underline-offset-4 hover:text-tangerine">
            Ver calendario completo →
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {events.map((e) => (
            <article
              key={e.date + e.month}
              className="group relative bg-cream rounded-3xl border border-cocoa/10 p-5 sm:p-6 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* Date block */}
              <div className="flex-shrink-0 w-20 sm:w-24 rounded-2xl bg-lilac text-cocoa text-center py-4 px-2 border border-cocoa/10">
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-80">
                  {e.weekday}
                </p>
                <p className="font-display text-4xl sm:text-5xl font-bold leading-none mt-1">
                  {e.date}
                </p>
                <p className="text-xs font-semibold uppercase mt-1">{e.month}</p>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-cocoa">
                    {e.title}
                  </h3>
                  <span className={`inline-flex flex-shrink-0 items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${statusStyles[e.status]}`}>
                    {e.status}
                  </span>
                </div>

                <div className="mt-3 space-y-1.5 text-sm text-cocoa-soft">
                  <p className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-cocoa/60" /> {e.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="size-3.5 text-cocoa/60" /> {e.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="size-3.5 text-cocoa/60" />
                    {e.status === "Agotado" ? "Sin cupos" : `${e.left} cupos restantes`}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-dashed border-cocoa/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cocoa-soft">Stand desde</p>
                    <p className="font-display text-xl font-bold text-cocoa">{e.price}</p>
                  </div>
                  <button
                    disabled={e.status === "Agotado"}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold bg-cocoa text-bone hover:bg-tangerine transition-colors disabled:bg-cocoa/20 disabled:text-cocoa-soft disabled:cursor-not-allowed"
                  >
                    {e.status === "Agotado" ? "Lista de espera" : "Reservar stand"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
