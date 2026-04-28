import "./App.css";
import HeroSection from "./Components/HeroSection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillsSection from "./Components/SkillsSection";
import AboutSection from "./Components/AboutSection";

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col md:flex-row">
      <HeroSection />
      <div id="scroll-root" className="flex-1 flex flex-col min-h-screen md:overflow-y-auto scroll-smooth">
        <main className="flex-1">
          <ProjectsSection />
          <SkillsSection />
        </main>
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
