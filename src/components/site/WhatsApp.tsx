import { MessageCircle } from "lucide-react";

export function WhatsApp() {
  return (
    <a
      href="https://wa.me/573000000000?text=Hola%21%20Quiero%20información%20del%20Bazar%20del%20Batán"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group inline-flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-olive text-bone shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
      aria-label="Escríbenos por WhatsApp"
    >
      <span className="h-8 w-8 rounded-full bg-bone/20 grid place-items-center">
        <MessageCircle size={16} />
      </span>
      <span className="text-sm font-semibold hidden sm:inline">
        Escríbenos
      </span>
    </a>
  );
}
