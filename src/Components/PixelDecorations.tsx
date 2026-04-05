function PixelDecorations() {
  return (
    <>
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
    </>
  );
}

export default PixelDecorations;
