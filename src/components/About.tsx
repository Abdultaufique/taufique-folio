import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">Get To Know More</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-poppins text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-accent/30 pl-4 py-2">
                <h4 className="font-semibold text-lg">B.Tech in Artificial Intelligence and Data Science</h4>
                <p className="text-muted-foreground">Dr. D.Y. Patil Vidyapeeth, Pune</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-accent">2022 - 2026</p>
                  <p className="text-sm font-semibold">CGPA: 8.5/10</p>
                </div>
              </div>

              <div className="border-l-2 border-accent/30 pl-4 py-2">
                <h4 className="font-semibold text-lg">Higher Secondary (12th)</h4>
                <p className="text-muted-foreground">Science Stream</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-accent">2020 - 2022</p>
                  <p className="text-sm font-semibold">85%</p>
                </div>
              </div>

              <div className="border-l-2 border-accent/30 pl-4 py-2">
                <h4 className="font-semibold text-lg">Secondary (10th)</h4>
                <p className="text-muted-foreground">CBSE Board</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-accent">2019 - 2020</p>
                  <p className="text-sm font-semibold">90%</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements & Interests Card */}
          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[hsl(var(--accent-secondary))]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-[hsl(var(--accent-secondary))]" />
              </div>
              <h3 className="font-poppins text-2xl font-semibold">Achievements & Interests</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Developed multiple AI/ML projects with real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Proficient in full-stack web development and database management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Strong foundation in data analysis and machine learning algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Experience with network simulation and IoT systems</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-lg mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">AI Research</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Web Development</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Data Science</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Tech Innovation</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-foreground/80 leading-relaxed">
            As a passionate technology enthusiast, I'm dedicated to exploring the frontiers of artificial intelligence 
            and data science. My journey in tech is driven by curiosity and a desire to create innovative solutions 
            that make a real impact. I believe in continuous learning and staying updated with the latest technological 
            advancements to build smarter, more efficient systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
