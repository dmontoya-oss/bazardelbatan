import { Instagram, ExternalLink } from "lucide-react";

const IG_USER = "elbazar____";
const IG_URL = `https://www.instagram.com/${IG_USER}/`;

// Feed automático sin APIs ni tokens.
// Usamos InstaWidget (https://instawidget.net) que solo requiere el username
// del perfil público de Instagram en la URL del iframe.
const INSTAWIDGET_SRC = `https://instawidget.net/v/user/${IG_USER}?limit=9`;

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

        <div className="rounded-3xl overflow-hidden border border-cocoa/10 bg-bone/50 p-2 sm:p-3">
          <iframe
            src={INSTAWIDGET_SRC}
            title={`Instagram feed de @${IG_USER}`}
            scrolling="no"
            allowTransparency
            className="w-full rounded-2xl border-0 overflow-hidden block"
            style={{ minHeight: 620 }}
            loading="lazy"
          />
        </div>

        <div className="mt-8 text-center">
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
