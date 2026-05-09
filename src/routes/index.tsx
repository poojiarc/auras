import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";


export default function Index() {
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
