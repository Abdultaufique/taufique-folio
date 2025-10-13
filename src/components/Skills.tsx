import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      ]
    },
    {
      category: "AI & Data Science",
      skills: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white scroll-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[hsl(197,71%,73%)] font-semibold text-lg mb-2">What I Can Do</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black">My Skills</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Frontend developer with solid knowledge of backend technologies and strong expertise in AI/ML
          </p>
        </div>

        <div className="space-y-12">
          {skillsData.map((category, idx) => (
            <div key={idx} className="scroll-fade-in">
              <h3 className="font-poppins text-2xl font-bold text-black mb-6 text-center md:text-left">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <Card 
                    key={skillIdx} 
                    className="p-6 bg-gradient-to-br from-white to-[hsl(60,56%,96%)] border-2 border-gray-200 hover:border-[hsl(197,71%,73%)] transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <p className="text-sm font-semibold text-black text-center">{skill.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
