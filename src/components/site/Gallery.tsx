import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g3 from "@/assets/gal-3.jpg";
import g4 from "@/assets/gal-4.jpg";
import g5 from "@/assets/gal-5.jpg";
import g6 from "@/assets/gal-6.jpg";

const shots = [
  { src: g1, alt: "Stand de cerámica artesanal", h: "row-span-2" },
  { src: g2, alt: "Pastelería y café" },
  { src: g3, alt: "Visitantes en la feria" },
  { src: g4, alt: "Accesorios y joyería hecha a mano", h: "row-span-2" },
  { src: g5, alt: "Plantas y decoración" },
  { src: g6, alt: "Banderines y luces del bazar" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-tangerine font-semibold">
            Postales del Batán
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-cocoa">
            Así se vive nuestra feria
          </h2>
          <p className="mt-4 text-cocoa-soft">
            Una experiencia para sentarse a comer, descubrir marcas, y volverse parte del barrio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl border border-cocoa/10 ${s.h ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-bone text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {s.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
