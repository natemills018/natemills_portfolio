import "./App.css";
import SkillsSection from "./Components/SkillsSection";
import HeroSection from "./Components/HeroSection";
import ProjectsSection from "./Components/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
