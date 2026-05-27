const items = [
  "✦ Feria mensual",
  "Bogotá · El Batán",
  "✦ Emprendedores locales",
  "Gastronomía",
  "✦ Postres & panadería",
  "Lifestyle",
  "✦ Moda artesanal",
  "Bienestar",
  "✦ Mascotas",
  "Decoración",
];

export function Marquee() {
  return (
    <div className="bg-cocoa text-bone overflow-hidden py-4 border-y border-cocoa">
      <div className="flex gap-10 whitespace-nowrap marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-lg sm:text-2xl tracking-tight">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
