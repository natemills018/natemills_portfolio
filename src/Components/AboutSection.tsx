function AboutSection() {
  return (
    <footer className="bg-secondary text-secondary-content border-t border-secondary">
      <div className="flex flex-col md:flex-row items-center gap-6 px-6 py-6 md:px-8">
        <div className="avatar shrink-0">
          <div className="w-20 rounded-full ring ring-secondary-content ring-offset-secondary ring-offset-2">
            <img src="/images/200x200v2.png" alt="Nathaniel Mills" />
          </div>
        </div>

        <p className="text-secondary-content/90 text-base leading-relaxed">
          A software developer focused on creating impactful software solutions. I thrive in collaborative environments and enjoy bringing innovative ideas to life through code.
        </p>
      </div>
    </footer>
  );
}

export default AboutSection;
