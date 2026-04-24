function PixelDecorations() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <div className="pixel-sprite pixel-heart absolute animate-bounce" style={{ top: '5%', right: '15%', animationDelay: '0s', animationDuration: '3s' }}>💾</div>
        <div className="pixel-sprite pixel-star absolute animate-pulse" style={{ top: '22%', left: '12%', animationDelay: '1s', animationDuration: '2s' }}>⭐</div>
        <div className="pixel-sprite pixel-rocket absolute animate-pulse" style={{ top: '38%', right: '20%', animationDelay: '0.5s', animationDuration: '3s' }}>🚀</div>
        <div className="pixel-sprite pixel-code absolute animate-bounce" style={{ top: '55%', left: '18%', animationDelay: '2s', animationDuration: '4s' }}>💻</div>
        <div className="pixel-sprite pixel-gear absolute animate-spin" style={{ top: '72%', right: '12%', animationDelay: '1.5s', animationDuration: '8s' }}>⚙️</div>
        <div className="pixel-sprite absolute animate-pulse" style={{ top: '88%', left: '20%', animationDelay: '2.5s', animationDuration: '3s' }}>🎮</div>

        <div className="pixel-block absolute w-3 h-3 bg-blue-400 animate-ping" style={{ top: '15%', left: '45%', animationDelay: '3s' }}></div>
        <div className="pixel-block absolute w-2 h-2 bg-purple-400 animate-pulse" style={{ top: '32%', right: '40%', animationDelay: '2.5s' }}></div>
        <div className="pixel-block absolute w-4 h-4 bg-green-400 animate-bounce" style={{ top: '48%', right: '35%', animationDelay: '4s', animationDuration: '3s' }}></div>
        <div className="pixel-block absolute w-2 h-2 bg-orange-400 animate-pulse" style={{ top: '65%', left: '40%', animationDelay: '1s' }}></div>
        <div className="pixel-block absolute w-3 h-3 bg-teal-400 animate-ping" style={{ top: '82%', right: '45%', animationDelay: '3.5s' }}></div>

        <div className="floating-pixels absolute inset-0">
          <div className="pixel-dot absolute w-1 h-1 bg-cyan-400" style={{ top: '10%', left: '30%', animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="pixel-dot absolute w-1 h-1 bg-pink-400" style={{ top: '28%', right: '30%', animation: 'float 4s ease-in-out infinite 1s' }}></div>
          <div className="pixel-dot absolute w-1 h-1 bg-yellow-400" style={{ top: '45%', left: '35%', animation: 'float 5s ease-in-out infinite 2s' }}></div>
          <div className="pixel-dot absolute w-1 h-1 bg-red-400" style={{ top: '62%', right: '28%', animation: 'float 7s ease-in-out infinite 0.5s' }}></div>
          <div className="pixel-dot absolute w-1 h-1 bg-lime-400" style={{ top: '78%', left: '32%', animation: 'float 5s ease-in-out infinite 1.5s' }}></div>
          <div className="pixel-dot absolute w-1 h-1 bg-fuchsia-400" style={{ top: '92%', right: '38%', animation: 'float 6s ease-in-out infinite 3s' }}></div>
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
    </>
  );
}

export default PixelDecorations;
