import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Pages
import IndexPage from "@/routes/index";
import AboutPage from "@/routes/about";
import ContactPage from "@/routes/contact";
import ProjectsPage from "@/routes/projects";
import ServicesPage from "@/routes/services/index";
import ServiceDetailPage from "@/routes/services/ServiceDetail";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground">
          Go home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
