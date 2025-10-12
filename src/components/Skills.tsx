import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code2,
      color: "accent",
      skills: [
        { name: "Python", level: 90 },
        { name: "R Programming", level: 80 },
        { name: "C++", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
      ]
    },
    {
      title: "AI & Data Science",
      icon: Database,
      color: "accent-secondary",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis", level: 88 },
        { name: "NLP", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "Predictive Modeling", level: 82 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "accent",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git & GitHub", level: 80 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "Cisco Packet Tracer", level: 75 },
        { name: "VS Code", level: 88 },
      ]
    },
    {
      title: "Other Skills",
      icon: Lightbulb,
      color: "accent-secondary",
      skills: [
        { name: "Data Visualization", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Project Management", level: 80 },
        { name: "Team Collaboration", level: 85 },
        { name: "Technical Writing", level: 78 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">What I'm Good At</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold">My Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            const isAccent = category.color === "accent";
            
            return (
              <Card 
                key={idx}
                className="p-8 bg-card border-border hover:border-accent/50 transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-full ${isAccent ? 'bg-accent/10' : 'bg-[hsl(var(--accent-secondary))]/10'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-7 h-7 ${isAccent ? 'text-accent' : 'text-[hsl(var(--accent-secondary))]'}`} />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${isAccent ? 'bg-gradient-to-r from-accent to-accent/60' : 'bg-gradient-to-r from-[hsl(var(--accent-secondary))] to-[hsl(var(--accent-secondary))]/60'}`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'slideIn 1s ease-out forwards'
                          }}
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

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
