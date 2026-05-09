import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Interiors — Designing Dream Homes with Precision & Style" },
      { name: "description", content: "Premium home interior solutions in Jadcherla, Telangana. Modular kitchens, wardrobes, TV units, and turnkey designs." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <ProjectsGallery />
      <Testimonials />
      <CTA />
    </>
  );
}
