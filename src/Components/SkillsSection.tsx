import { Card, CardBody, CardTitle } from "./Card";
import { Badge } from "./Badge";

type LevelType = "Expert" | "Advanced" | "Intermediate" | "Beginner";
type LevelVariant = "success" | "info" | "warning" | "error";

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

  const levelVariant: Record<LevelType, LevelVariant> = {
    Expert: "success",
    Advanced: "info",
    Intermediate: "warning",
    Beginner: "error",
  };

  return (
    <section id="skills" className="px-6 py-16 md:px-12 scroll-mt-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl mb-12 text-base-content">
          Technologies & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardBody>
                <CardTitle className="justify-center">
                  <Badge variant="primary" size="lg">{category.title}</Badge>
                </CardTitle>

                <div className="space-y-3 mt-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center p-3 bg-base-300 rounded-lg hover:bg-base-100 transition-colors duration-200"
                    >
                      <span className="text-base-content font-medium">{skill.name}</span>
                      <Badge variant={levelVariant[skill.level]} size="sm">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
