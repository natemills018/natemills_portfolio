const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "blue",
      skills: [
        { name: "React", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Expert" },
        { name: "HTML/CSS", level: "Expert" },
        { name: "Tailwind", level: "Advanced" }
      ]
    },
    {
      title: "Backend", 
      color: "green",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Others",
      color: "purple", 
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "Figma", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" },
        { name: "Docker", level: "Beginner" }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "border-blue-400/30 bg-blue-500/10 text-blue-300",
      green: "border-green-400/30 bg-green-500/10 text-green-300", 
      purple: "border-purple-400/30 bg-purple-500/10 text-purple-300"
    };
    return colorMap[color];
  };

  const getLevelColor = (level) => {
    const levelMap = {
      Expert: "text-green-300",
      Advanced: "text-blue-300", 
      Intermediate: "text-yellow-300",
      Beginner: "text-orange-300"
    };
    return levelMap[level];
  };

  return (
    <section className="px-6 py-16 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl mb-12 text-white">
          Technologies & Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className={`inline-block px-4 py-2 rounded-full border ${getColorClasses(category.color)} mb-6`}>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
