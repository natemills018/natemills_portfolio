// import { useState } from 'react'

import "./App.css";
import SkillsSection from "./Components/SkillsSection";
import PortfolioBg from "./Components/BackgroundComponent";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PortfolioBg />
      <div className="relative min-h-screen text-white z-10">
      {/* <div className="h-screen bg-gradient-to-tr"> */}
      {/* <div className="flex flex-col items-center p-4 text-white nav md:flex-row md:justify-between">
        <NavBar />
      </div> */}

      <div className="flex flex-col items-center pt-8 text-center md:flex-row md:justify-between md:items-start group relative max-w-7xl mx-auto px-6">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 -z-10">
          <div className="pixel-sprite pixel-heart absolute top-4 right-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>💾</div>
          <div className="pixel-sprite pixel-star absolute top-20 left-20 animate-pulse" style={{ animationDelay: '1s', animationDuration: '2s' }}>⭐</div>
          <div className="pixel-sprite pixel-code absolute bottom-10 right-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>💻</div>
          <div className="pixel-sprite pixel-rocket absolute top-32 right-32 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>🚀</div>
          <div className="pixel-sprite pixel-gear absolute bottom-20 left-10 animate-spin" style={{ animationDelay: '1.5s', animationDuration: '8s' }}>⚙️</div>
          
          <div className="pixel-block absolute top-16 left-1/3 w-3 h-3 bg-blue-400 animate-ping" style={{ animationDelay: '3s' }}></div>
          <div className="pixel-block absolute bottom-16 right-1/4 w-2 h-2 bg-purple-400 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="pixel-block absolute top-24 right-1/3 w-4 h-4 bg-green-400 animate-bounce" style={{ animationDelay: '4s', animationDuration: '3s' }}></div>
          
          <div className="floating-pixels absolute inset-0">
            <div className="pixel-dot absolute w-1 h-1 bg-cyan-400" style={{ top: '10%', left: '15%', animation: 'float 6s ease-in-out infinite' }}></div>
            <div className="pixel-dot absolute w-1 h-1 bg-pink-400" style={{ top: '30%', right: '25%', animation: 'float 4s ease-in-out infinite 1s' }}></div>
            <div className="pixel-dot absolute w-1 h-1 bg-yellow-400" style={{ bottom: '40%', left: '30%', animation: 'float 5s ease-in-out infinite 2s' }}></div>
            <div className="pixel-dot absolute w-1 h-1 bg-red-400" style={{ bottom: '20%', right: '35%', animation: 'float 7s ease-in-out infinite 0.5s' }}></div>
          </div>
        </div>
        
        <style>{`
          .pixel-sprite {
            font-size: 1.5rem;
            filter: pixelated;
            image-rendering: pixelated;
            image-rendering: -moz-crisp-edges;
            image-rendering: crisp-edges;
            text-shadow: 2px 2px 0px rgba(0,0,0,0.3);
          }
          
          .pixel-block {
            filter: pixelated;
            image-rendering: pixelated;
            image-rendering: -moz-crisp-edges;
            image-rendering: crisp-edges;
            box-shadow: 0 0 10px currentColor;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-5px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(3px); }
          }
          
          .animate-spin {
            animation: spin 8s linear infinite;
          }
          
          .pixel-shadow-gradient {
            filter: drop-shadow(4px 0 0 #000) drop-shadow(0 4px 0 #000) drop-shadow(4px 4px 0 #000);
          }
          
          .pixel-shadow {
            text-shadow: 
              4px 0 0 #000,
              0 4px 0 #000,
              4px 4px 0 #000;
          }
          
          @media (max-width: 768px) {
            .pixel-sprite {
              font-size: 1rem;
            }
            .pixel-block {
              width: 0.5rem !important;
              height: 0.5rem !important;
            }
            .pixel-shadow {
              text-shadow: 
                2px 0 0 #000,
                0 2px 0 #000,
                2px 2px 0 #000;
            }
            .pixel-shadow-gradient {
              filter: drop-shadow(2px 0 0 #000) drop-shadow(0 2px 0 #000) drop-shadow(2px 2px 0 #000);
            }
          }
        `}</style>
        <div className="relative w-32 h-32 md:w-48 md:h-48 transition-transform duration-300 hover:scale-105 md:flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          <img
            src="/images/200x200v2.png"
            className="relative rounded-full shadow-2xl border-2 border-white/10 transition-all duration-300 hover:border-blue-400/50 hover:shadow-blue-500/25"
          />
        </div>

        <div className="mt-6 md:mt-0 md:ml-8 md:max-w-sm">
          <div className="p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl">
           
            <p className="text-gray-300 text-lg leading-relaxed">
              a software developer focused on creating impactful software solutions. I thrive in collaborative environments and enjoy bringing innovative ideas to life through code.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-8 md:flex-1 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-orange-300 font-medium">Employed</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold md:text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-300 hover:via-purple-300 hover:to-pink-300">
            Nathaniel Mills
          </h1>
          <h2 className="text-xl md:text-2xl mt-2 text-gray-300 transition-colors duration-300 hover:text-blue-300">
            Software Developer
          </h2>
          <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-3 transition-all duration-500 hover:w-full"></div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300 hover:bg-blue-500/30 transition-colors">React</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300 hover:bg-purple-500/30 transition-colors">TypeScript</span>
            <span className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-sm text-green-300 hover:bg-green-500/30 transition-colors">Node.js</span>
            <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-sm text-yellow-300 hover:bg-yellow-500/30 transition-colors">JavaScript</span>
            <span className="px-3 py-1 bg-teal-500/20 border border-teal-400/30 rounded-full text-sm text-teal-300 hover:bg-teal-500/30 transition-colors">SQL</span>
          </div>
          
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/natemills018" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group relative">
              <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/nathaniel-mills-bb1345148" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group relative">
              <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">LinkedIn</span>
            </a>
            <a href="/images/Nate Mills Resume 2025_1.pdf" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group relative">
              <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Resume</span>
            </a>
          </div>
        </div>
      </div>

      <SkillsSection />

      {/* <MyCard /> */}

      <section className="px-6 py-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center md:text-4xl mb-12 text-white">
            Featured Projects
          </h2>
          
          <div className="space-y-12">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/images/Screenshot 2025-02-27 230844.png"
                    alt="Blog About It! Project"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Blog About It!</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A modern blog platform built with Astro, a front-end framework that delivers exceptional performance. Features server-side rendering and optimized loading for the best user experience.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full text-sm text-orange-300">Astro</span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300">React</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300">TypeScript</span>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-blue-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-blue-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/images/House_Cure Living Room Card.png"
                    alt="House_MD Project"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">House_MD</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A custom home status database UI that provides real-time monitoring and management capabilities. Built with modern React patterns and a sleek, responsive design system.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300">React</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300">TypeScript</span>
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-400/30 rounded-full text-sm text-pink-300">DaisyUI</span>
                    <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-sm text-indigo-300">Material-UI</span>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-blue-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-blue-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/images/Screenshot 2025-02-27 230844.png"
                    alt="Capstone Project"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Capstone Project</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A full-stack application integrating Salesforce with React, demonstrating enterprise-level development skills and modern web architecture patterns.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300">React</span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300">Salesforce</span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-sm text-green-300">Node.js</span>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-blue-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-blue-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
export default App;
