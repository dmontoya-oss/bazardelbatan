import bakery from "@/assets/cat-bakery.png";
import food from "@/assets/cat-food.png";
import deco from "@/assets/cat-deco.png";
import fashion from "@/assets/cat-fashion.png";
import pets from "@/assets/cat-pets.png";
import wellness from "@/assets/cat-wellness.png";
import crafts from "@/assets/cat-crafts.png";

const categories = [
  { name: "Gastronomía", desc: "Sabores locales y cocina autor.", img: food, bg: "bg-tangerine-soft", ring: "ring-tangerine/30" },
  { name: "Postres & panadería", desc: "Dulces de barrio, recetas de casa.", img: bakery, bg: "bg-butter-soft", ring: "ring-butter/40" },
  { name: "Lifestyle & decoración", desc: "Objetos con alma para el hogar.", img: deco, bg: "bg-lilac-soft", ring: "ring-lilac/30" },
  { name: "Moda", desc: "Diseñadores y marcas independientes.", img: fashion, bg: "bg-[oklch(0.93_0.03_55)]", ring: "ring-cocoa-soft/20" },
  { name: "Mascotas", desc: "Productos hechos con amor peludo.", img: pets, bg: "bg-butter-soft", ring: "ring-butter/40" },
  { name: "Bienestar", desc: "Cuidado natural y rituales conscientes.", img: wellness, bg: "bg-olive-soft", ring: "ring-olive/30" },
  { name: "Artesanías", desc: "Hecho a mano, hecho con tiempo.", img: crafts, bg: "bg-lilac-soft", ring: "ring-lilac/30" },
];

export function Categories() {
  return (
    <section id="categorias" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-tangerine font-semibold">
              Nuestras categorías
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-cocoa">
              Todo lo bueno del barrio,<br/>en un mismo lugar.
            </h2>
          </div>
          <p className="text-cocoa-soft max-w-md">
            Curamos cada feria con marcas que tienen historia, calidad y propósito.
            Encuentra la categoría que te representa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((c, idx) => (
            <article
              key={c.name}
              className={`group relative ${c.bg} rounded-3xl p-5 sm:p-6 border border-cocoa/5 ring-1 ${c.ring} hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden ${
                idx === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div className="aspect-square w-full grid place-items-center">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="max-h-[78%] w-auto object-contain wiggle group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-display text-xl font-bold text-cocoa leading-tight">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-cocoa-soft leading-snug">{c.desc}</p>
              </div>
              <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-bone/80 backdrop-blur grid place-items-center text-cocoa opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
