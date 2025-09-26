
const PortfolioBg = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/20 to-slate-700/60" />
      
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioBg;