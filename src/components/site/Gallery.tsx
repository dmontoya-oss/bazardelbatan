import { useState } from "react";
import { Instagram, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

import gal1 from "../../assets/gal-1.jpg";
import gal2 from "../../assets/gal-2.jpg";
import gal3 from "../../assets/gal-3.jpg";
import gal4 from "../../assets/gal-4.jpg";
import gal5 from "../../assets/gal-5.jpg";

const IG_USER = "elbazar____";
const IG_URL = `https://www.instagram.com/${IG_USER}/`;

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  className: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: gal1,
    alt: "Deliciosa torta de limón y repostería artesanal",
    caption: "Repostería Artesanal",
    className: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto h-full"
  },
  {
    src: gal2,
    alt: "Pizza artesanal recién horneada con arúgula y queso",
    caption: "Gastronomía Local",
    className: "md:col-span-5 aspect-[4/3]"
  },
  {
    src: gal3,
    alt: "Mascota visitante disfrutando de la feria",
    caption: "Pet Friendly",
    className: "md:col-span-5 aspect-[4/3]"
  },
  {
    src: gal4,
    alt: "Productos de cuidado capilar y belleza natural",
    caption: "Cuidado Personal",
    className: "md:col-span-6 aspect-square md:aspect-[16/10]"
  },
  {
    src: gal5,
    alt: "Frascos de miel orgánica en estante de madera",
    caption: "Productos Orgánicos",
    className: "md:col-span-6 aspect-square md:aspect-[16/10]"
  }
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % galleryImages.length);
    }
  };

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
              Síguenos para no perderte ninguna edición.
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm border border-cocoa/5 bg-bone transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${image.className}`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-[0.15em] text-butter font-semibold">
                  {image.caption}
                </span>
                <p className="text-bone text-sm mt-1 line-clamp-2">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa/95 backdrop-blur-md transition-opacity duration-300 p-4"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-bone hover:text-tangerine transition-colors p-2 bg-cocoa/50 rounded-full"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-bone hover:text-tangerine transition-colors p-3 bg-cocoa/50 rounded-full"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-bone hover:text-tangerine transition-colors p-3 bg-cocoa/50 rounded-full"
            aria-label="Siguiente"
          >
            <ChevronRight size={28} />
          </button>

          {/* Active Image and Info */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl animate-fade-in"
            />
            <div className="mt-4 text-center text-bone max-w-xl px-4">
              <span className="text-xs uppercase tracking-[0.2em] text-butter font-semibold">
                {galleryImages[activeIndex].caption}
              </span>
              <p className="mt-2 text-sm md:text-base text-bone/90">
                {galleryImages[activeIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

