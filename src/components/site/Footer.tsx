import { Instagram, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo-bazar.png";

export function Footer() {
  return (
    <footer id="contacto" className="bg-cocoa text-bone">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="El Bazar del Batán" className="h-12 w-12 rounded-full object-cover" />
            <div className="leading-none">
              <p className="font-display text-lg font-bold">El Bazar del Batán</p>
              <p className="text-xs text-bone/60 uppercase tracking-widest">
                Bogotá · Feria mensual
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-bone/70 leading-relaxed">
            Una feria de barrio premium donde marcas locales se encuentran con su público
            en un ambiente cálido, familiar y moderno.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/elbazar____/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-bone/10 grid place-items-center hover:bg-tangerine hover:text-cocoa transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-bone/10 grid place-items-center hover:bg-tangerine hover:text-cocoa transition-colors" aria-label="Mail">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-butter mb-3">Explora</p>
          <ul className="space-y-2 text-sm text-bone/80">
            <li><a href="#categorias" className="hover:text-tangerine">Categorías</a></li>
            <li><a href="#fechas" className="hover:text-tangerine">Próximas fechas</a></li>
            <li><a href="#galeria" className="hover:text-tangerine">Galería</a></li>
            <li><a href="#reservar" className="hover:text-tangerine">Reservar stand</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-butter mb-3">Ubicación</p>
          <p className="text-sm text-bone/80 flex items-start gap-2">
            <MapPin size={14} className="mt-0.5"/>
            <span>
              Carrera 50 # 122-19<br />
              💜 Esquina Morada<br />
              Bogotá, Colombia
            </span>
          </p>
          <p className="text-xs text-bone/50 mt-4">
            © {new Date().getFullYear()} El Bazar del Batán
          </p>
        </div>
      </div>
    </footer>
  );
}
