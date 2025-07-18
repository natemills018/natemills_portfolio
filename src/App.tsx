// import { useState } from 'react'

import "./App.css";
import ProjectCard from "./Components/ProjectCard";
import SkillsSection from "./Components/SkillsSection";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-base-300 shadow-2xl rounded-3xl text-base-content">
      {/* <div className="h-screen bg-gradient-to-tr"> */}
      {/* <div className="flex flex-col items-center p-4 text-white nav md:flex-row md:justify-between">
        <NavBar />
      </div> */}

      <div className="flex flex-col items-center  pt-5 text-center md:flex-row md:justify-center">
        <div className="w-32 h-32 md:w-48 md:h-48">
          <img
            src="/images/200x200v2.png"
            className="rounded-full shadow-xl"
          />
        </div>
        <div className="mt-4 md:ml-6">
          <h1 className="text-2xl font-bold backdrop-blur-2xl md:text-5xl">
            Nathaniel Mills
          </h1>
          <h2 className="text-xl md:text-3xl">Full Stack Engineer</h2>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <a
          href="/images/Nate Mills Resume 2025_1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-lg font-semibold text-base-content transition-transform bg-success rounded-lg hover:scale-105"
        >
          <img
            src="/images/nmills media_logo Concept 7.png"
            className="w-6 h-6"
          />
          Professional Resume
        </a>
      </div>
      <SkillsSection />
      <div className="container px-4 py-10 mx-auto md:px-10">
        <h1 className="text-3xl font-semibold text-center md:text-4xl">
          About Me
        </h1>
        <div className="p-5 mt-5 text-center bg-base-300 rounded-lg shadow-lg md:text-left">
          <p className="text-lg md:text-xl">
            My name is Nate Mills! Full stack web developer with a passion for
            tech and learning new frameworks. Proficient in JavaScript,
            TypeScript, React, Express, SQL and Node. I'm focused on finding
            solutions to complex problems, and creating impactful software.
            I thrive in collaborative environments and enjoy working with teams to
            bring ideas to life. When I'm not coding, you can find me exploring
            new technologies, playing video games, or spending time with my family.
          </p>
        </div>
      </div>

      {/* <MyCard /> */}

      <div className="container px-4 py-10 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center md:text-4xl">
          Check out some of these Projects!
        </h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <ProjectCard
              cardImageSrc="/images/Screenshot 2025-02-27 230844.png"
              title="Blog About It!"
              description="For this project, I'm using a framework called Astro, it's a front-end based framework that is built with React and is very fast"
              btnTitle="Visit"
            />
            <ProjectCard
              cardImageSrc="/images/House_Cure Living Room Card.png"
              title="House_MD"
              description="Built a custom UI for a Home Status database, using React, TypeScript, Daisyui and Material-UI"
              btnTitle="Visit"
            />
            <ProjectCard
              cardImageSrc="/images/Screenshot 2025-02-27 230844.png"
              title="Capstone Project"
              description="For this project, I want to build a full stack application that uses Salesforce and React"
              btnTitle="Visit"
            />
          </div>
        </div>
      </div>

      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img
            src="/images/nmills media_logo Concept 7.png"
            className="w-25 h-25"
          />
          <p>
            Nate Mills Media DBA.
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}
export default App;
