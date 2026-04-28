function AboutSection() {
  return (
    <footer id="about" className="bg-secondary text-secondary-content border-t border-secondary scroll-mt-6">
      <div className="flex flex-col md:flex-row items-center gap-6 px-6 py-6 md:px-8">
        <div className="shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden ring ring-secondary-content ring-offset-secondary ring-offset-2">
            <img src="/images/200x200v2.png" alt="Nathaniel Mills" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-secondary-content/90 text-base leading-relaxed">
          Software developer specializing in AI-assisted development — I lean on Claude to build and maintain features and to keep CI/CD pipelines healthy across complex full-stack applications. Frontend is where I&rsquo;ve put in the most reps, but backend code and system architecture are where I&rsquo;m actively going deeper. Open to collaborating on ambitious full-stack work where AI tooling is part of the workflow, not an afterthought.
        </p>
      </div>
    </footer>
  );
}

export default AboutSection;
