import { useState } from "react";
import { Check, Upload } from "lucide-react";

const sizes = [
  { id: "m", name: "Stand M", area: "1 mesa", price: "$200.000", perks: ["1 mesa", "2 sillas", "Conexión eléctrica"], popular: true },
  { id: "l", name: "Stand L", area: "Doble mesa", price: "$320.000", perks: ["2 mesas", "2 sillas", "Conexión eléctrica"] },
];

const steps = ["Evento", "Tamaño", "Datos", "Material", "Pago"];

export function Reserve() {
  const [size, setSize] = useState("m");
  const [step] = useState(2);

  return (
    <section id="reservar" className="py-20 lg:py-28 bg-bone">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-tangerine font-semibold">
            Reserva tu stand
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-cocoa">
            Cinco pasos y estás adentro.
          </h2>
        </div>

        {/* Stepper */}
        <div className="flex items-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2">
          {steps.map((s, i) => {
            const active = i + 1 === step;
            const done = i + 1 < step;
            return (
              <div key={s} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className={`h-9 w-9 rounded-full grid place-items-center text-sm font-bold border transition-colors ${
                  done ? "bg-olive text-bone border-olive"
                  : active ? "bg-cocoa text-bone border-cocoa"
                  : "bg-cream text-cocoa-soft border-cocoa/10"
                }`}>
                  {done ? <Check size={16}/> : i + 1}
                </div>
                <span className={`text-sm font-semibold ${active ? "text-cocoa" : "text-cocoa-soft"}`}>
                  {s}
                </span>
                {i < steps.length - 1 && <span className="w-6 sm:w-10 h-px bg-cocoa/15" />}
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sizes */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {sizes.map((s) => {
              const selected = size === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className={`relative text-left rounded-3xl p-6 border-2 transition-all ${
                    selected
                      ? "bg-cream border-cocoa shadow-lg -translate-y-1"
                      : "bg-cream border-cocoa/10 hover:border-cocoa/30"
                  }`}
                >
                  {s.popular && (
                    <span className="absolute -top-2.5 left-6 px-2.5 py-1 rounded-full bg-tangerine text-bone text-[10px] font-bold uppercase tracking-wider">
                      Más elegido
                    </span>
                  )}
                  <p className="font-display text-2xl font-bold text-cocoa">{s.name}</p>
                  <p className="text-sm text-cocoa-soft">{s.area}</p>
                  <p className="mt-4 font-display text-3xl font-bold text-cocoa">{s.price}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.perks.map((p) => (
                      <li key={p} className="text-sm flex items-center gap-2 text-cocoa-soft">
                        <Check className="size-3.5 text-olive" /> {p}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* Form */}
          <form className="bg-cream rounded-3xl border border-cocoa/10 p-6 lg:p-7 space-y-4">
            <h3 className="font-display text-xl font-bold text-cocoa">Tus datos</h3>
            <Field label="Nombre de la marca" placeholder="Pan de Casa" />
            <Field label="Nombre completo" placeholder="Manuela Ortiz" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Celular" placeholder="300 000 0000" />
              <Field label="Instagram" placeholder="@tu_marca" />
            </div>
            <Field label="Correo" placeholder="hola@tumarca.com" type="email" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-cocoa-soft">
                Logo / fotos
              </label>
              <div className="mt-1.5 border-2 border-dashed border-cocoa/15 rounded-2xl px-4 py-6 text-center hover:bg-bone transition-colors cursor-pointer">
                <Upload className="size-5 mx-auto text-cocoa-soft" />
                <p className="text-xs text-cocoa-soft mt-1">Arrastra o sube tus archivos</p>
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-2 px-5 py-3.5 rounded-full bg-cocoa text-bone font-semibold hover:bg-tangerine transition-colors"
            >
              Continuar al pago
            </button>
            <p className="text-[11px] text-cocoa-soft text-center">
              Pagos seguros con Wompi · Nequi · PSE · Tarjeta
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-cocoa-soft">{label}</span>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-2xl bg-bone border border-cocoa/10 px-4 py-3 text-sm text-cocoa placeholder:text-cocoa/30 focus:outline-none focus:border-cocoa focus:ring-2 focus:ring-lilac/40 transition"
      />
    </label>
  );
}
