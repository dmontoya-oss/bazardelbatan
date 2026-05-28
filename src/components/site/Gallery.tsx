import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g3 from "@/assets/gal-3.jpg";
import g4 from "@/assets/gal-4.jpg";
import g5 from "@/assets/gal-5.jpg";
import g6 from "@/assets/gal-6.jpg";

const IG_USER = "elbazar____";
const IG_URL = `https://www.instagram.com/${IG_USER}/`;

// Mientras se conecta la Instagram Graph API, mostramos posts curados
// que enlazan directamente al perfil oficial.
const posts = [
  { src: g1, alt: "Stand de cerámica artesanal", likes: 342, comments: 18 },
  { src: g2, alt: "Pastelería y café del bazar", likes: 521, comments: 34 },
  { src: g3, alt: "Visitantes disfrutando la feria", likes: 287, comments: 12 },
  { src: g4, alt: "Accesorios y joyería hecha a mano", likes: 463, comments: 27 },
  { src: g5, alt: "Plantas y decoración natural", likes: 198, comments: 9 },
  { src: g6, alt: "Banderines y luces del bazar", likes: 612, comments: 41 },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-tangerine font-semibold">
              Postales del Batán
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-cocoa">
              Así se vive nuestra feria
            </h2>
            <p className="mt-4 text-cocoa-soft">
              Síguenos en Instagram para ver el día a día del bazar, marcas invitadas y próximas fechas.
            </p>
          </div>

          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cocoa text-bone font-semibold hover:bg-tangerine transition-colors shadow-sm"
          >
            <Instagram size={18} />
            @{IG_USER}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {posts.map((p, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-3xl border border-cocoa/10 block"
              aria-label={`Ver publicación en Instagram: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* IG overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                <div className="flex items-center gap-5 text-bone font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Heart size={18} className="fill-bone" /> {p.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle size={18} className="fill-bone" /> {p.comments}
                  </span>
                </div>
              </div>
              {/* IG corner badge */}
              <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-bone/90 backdrop-blur grid place-items-center text-cocoa opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram size={14} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cocoa underline underline-offset-4 hover:text-tangerine"
          >
            Ver más en Instagram <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
