import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Dev",
      icon: Code2,
      color: "light-blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "C++", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "AI & Data Science",
      icon: Database,
      color: "light-blue",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Data Analysis", level: 92 },
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "Predictive Models", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "light-blue",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter", level: 90 },
        { name: "Cisco Tools", level: 80 },
        { name: "Data Viz Tools", level: 85 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "light-blue",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Communication", level: 88 },
        { name: "Technical Writing", level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[hsl(197,71%,73%)] font-semibold text-lg mb-2">What I'm Good At</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black">My Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            
            return (
              <Card key={idx} className="p-8 bg-white border-2 border-gray-200 hover:border-[hsl(197,71%,73%)] transition-all hover:shadow-lg group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[hsl(197,71%,73%)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-[hsl(197,71%,73%)]" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-black">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-black">{skill.name}</span>
                        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[hsl(197,71%,73%)] to-[hsl(197,71%,85%)] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
