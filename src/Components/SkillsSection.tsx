const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Skill 1</h3>
            <p className="text-gray-700">Description of Skill 1</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Skill 2</h3>
            <p className="text-gray-700">Description of Skill 2</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Skill 3</h3>
            <p className="text-gray-700">Description of Skill 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
