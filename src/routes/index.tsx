import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Categories } from "@/components/site/Categories";
import { Events } from "@/components/site/Events";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Reserve } from "@/components/site/Reserve";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Bazar del Batán | Feria mensual de emprendedores en Bogotá" },
      {
        name: "description",
        content:
          "Reserva tu stand en El Bazar del Batán, la feria mensual de Bogotá donde marcas locales conectan con cientos de personas en un ambiente cálido y moderno.",
      },
      { property: "og:title", content: "El Bazar del Batán" },
      {
        property: "og:description",
        content: "Feria mensual de emprendedores en el barrio El Batán, Bogotá.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream text-cocoa overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <Events />
      <Reserve />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsApp />
    </main>
  );
}
