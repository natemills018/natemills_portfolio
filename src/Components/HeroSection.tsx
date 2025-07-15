const HeroSection = () => {
  return (
    <div className="hero min-h-[70vh] bg-gradient-to-br from-primary/20 via-base-300 to-secondary/20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="avatar animate-float">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/images/200x200v2.png" alt="Profile" />
          </div>
        </div>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nathaniel Mills
          </h1>
          <p className="py-6 text-xl">Full Stack Engineer transforming ideas into elegant solutions</p>
          <button className="btn btn-primary">View Projects</button>
        </div>
      </div>
    </div>
  )
}


export default HeroSection;