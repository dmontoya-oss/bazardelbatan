import { Star } from "lucide-react";

const items = [
  {
    quote: "Vendimos todo el primer día. El público es exactamente el que buscábamos para la marca.",
    name: "Manuela Ortiz",
    brand: "Pan de Casa",
    color: "bg-lilac-soft",
  },
  {
    quote: "El ambiente fue increíble, súper familiar y bien organizado. Volveremos cada mes.",
    name: "Andrés Mejía",
    brand: "Café Cumbre",
    color: "bg-butter-soft",
  },
  {
    quote: "Conseguimos muchos clientes nuevos y aliados. El Batán cambió nuestro negocio.",
    name: "Laura & Cami",
    brand: "Estudio Olivo",
    color: "bg-olive-soft",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-cocoa text-bone relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-tangerine/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-lilac/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-10 relative">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-butter font-semibold">
            Historias del bazar
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Marcas que se hicieron acá.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <figure
              key={i}
              className={`${t.color} text-cocoa rounded-3xl p-7 flex flex-col gap-5 hover:-translate-y-1 transition-transform border border-bone/10`}
            >
              <div className="flex gap-0.5 text-tangerine">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-tangerine" />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-cocoa/10">
                <p className="font-semibold text-cocoa">{t.name}</p>
                <p className="text-sm text-cocoa-soft">{t.brand}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
