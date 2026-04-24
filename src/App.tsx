import "./App.css";
import HeroSection from "./Components/HeroSection";
import ProjectsSection from "./Components/ProjectsSection";
import AboutSection from "./Components/AboutSection";

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col md:flex-row">
      <HeroSection />
      <div className="flex-1 flex flex-col min-h-screen md:overflow-y-auto">
        <main className="flex-1">
          <ProjectsSection />
        </main>
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
