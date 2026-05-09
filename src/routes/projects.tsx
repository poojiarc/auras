import { createFileRoute } from "@tanstack/react-router";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aura Interiors" },
      { name: "description", content: "Real interior design projects delivered by Aura Interiors across Telangana." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Portfolio</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold">Our Projects</h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">Real homes. Real transformations. Crafted with care.</p>
          </Reveal>
        </div>
      </section>
      <ProjectsGallery heading={false} />
    </>
  );
}
