type LevelType = "Expert" | "Advanced" | "Intermediate" | "Beginner";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Expert" as LevelType },
        { name: "TypeScript", level: "Advanced" as LevelType },
        { name: "JavaScript", level: "Expert" as LevelType },
        { name: "HTML/CSS", level: "Expert" as LevelType },
        { name: "Tailwind", level: "Advanced" as LevelType },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced" as LevelType },
        { name: "Express", level: "Advanced" as LevelType },
        { name: "SQL", level: "Intermediate" as LevelType },
        { name: "PostgreSQL", level: "Intermediate" as LevelType },
        { name: "REST APIs", level: "Advanced" as LevelType },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: "Advanced" as LevelType },
        { name: "VS Code", level: "Expert" as LevelType },
        { name: "Figma", level: "Intermediate" as LevelType },
        { name: "Linux", level: "Intermediate" as LevelType },
        { name: "Docker", level: "Beginner" as LevelType },
      ],
    },
  ];

  const getLevelBadge = (level: LevelType) => {
    const badgeMap = {
      Expert: "badge-success",
      Advanced: "badge-info",
      Intermediate: "badge-warning",
      Beginner: "badge-error",
    };
    return badgeMap[level];
  };

  return (
    <section className="px-6 py-16 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl mb-12 text-base-content">
          Technologies & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body">
                <h3 className="card-title justify-center">
                  <span className="badge badge-primary badge-lg">{category.title}</span>
                </h3>

                <div className="space-y-3 mt-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center p-3 bg-base-300 rounded-lg hover:bg-base-100 transition-colors duration-200"
                    >
                      <span className="text-base-content font-medium">{skill.name}</span>
                      <span className={`badge badge-sm ${getLevelBadge(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
