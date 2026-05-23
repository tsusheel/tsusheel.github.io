import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AnimatedBackground } from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        {/* Split Layout for Hero and About */}
        <div className="relative bg-white pt-20 lg:pt-0">
          <AnimatedBackground />
          <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent_80%)] pointer-events-none" />

          <div className="relative z-10 lg:grid lg:grid-cols-2 lg:min-h-screen">
            <div className="w-full flex items-center justify-center lg:justify-end">
              <HeroSection />
            </div>
            <div className="w-full bg-neutral-50/50 lg:bg-transparent lg:border-l border-neutral-100 flex items-center justify-center lg:justify-start backdrop-blur-sm lg:backdrop-blur-none py-12 lg:py-0">
              <AboutSection />
            </div>
          </div>
        </div>

        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
