import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[hsl(60,56%,91%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-fade-in">
          <p className="text-[hsl(197,71%,73%)] font-semibold text-lg mb-2">Get To Know Me</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="p-8 bg-white border-2 border-gray-200 hover:border-[hsl(197,71%,73%)] transition-all hover:shadow-lg group scroll-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[hsl(197,71%,73%)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-[hsl(197,71%,73%)]" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-black">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[hsl(197,71%,73%)] pl-4 py-2">
                <h4 className="font-semibold text-lg text-black">Bachelor of Technology (B.Tech)</h4>
                <p className="text-gray-700 font-medium">Artificial Intelligence and Data Science</p>
                <p className="text-gray-600 text-sm mt-1">Dr. D.Y. Patil Vidyapeeth, Pune</p>
                <div className="mt-3 space-y-1">
                  <p className="text-sm text-[hsl(197,71%,73%)] font-medium">2023 - 2027 (Expected)</p>
                  <p className="text-sm font-semibold text-black">First Year (FE 2024): 9.41 CGPA</p>
                  <p className="text-sm font-semibold text-black">Second Year (SE 2025): 9.14 CGPA</p>
                  <p className="text-xs text-gray-600 mt-2 italic">Currently in 3rd year, focusing on machine learning, data analytics, and emerging AI technologies</p>
                </div>
              </div>

              <div className="border-l-4 border-[hsl(197,71%,73%)] border-opacity-60 pl-4 py-2">
                <h4 className="font-semibold text-lg text-black">Senior Secondary (Class 12)</h4>
                <p className="text-gray-700">CBSE, DAV Public School, Chirimiri</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-[hsl(197,71%,73%)] font-medium">2023</p>
                  <p className="text-sm font-semibold text-black">81%</p>
                </div>
              </div>

              <div className="border-l-4 border-[hsl(197,71%,73%)] border-opacity-60 pl-4 py-2">
                <h4 className="font-semibold text-lg text-black">Secondary (Class 10)</h4>
                <p className="text-gray-700">CBSE, DAV Public School, Chirimiri</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-[hsl(197,71%,73%)] font-medium">2021</p>
                  <p className="text-sm font-semibold text-black">87%</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements Card */}
          <Card className="p-8 bg-white border-2 border-gray-200 hover:border-[hsl(197,71%,73%)] transition-all hover:shadow-lg group scroll-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[hsl(197,71%,73%)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-[hsl(197,71%,73%)]" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-black">Achievements</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-black mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(197,71%,73%)] mt-1 font-bold">▸</span>
                    <span>Developed multiple AI-ML projects with real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(197,71%,73%)] mt-1 font-bold">▸</span>
                    <span>Proficient in full-stack web development & data analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(197,71%,73%)] mt-1 font-bold">▸</span>
                    <span>Expert in machine learning algorithms and data modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(197,71%,73%)] mt-1 font-bold">▸</span>
                    <span>Experience in network design & IoT systems</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t-2 border-gray-200">
                <h4 className="font-semibold text-lg text-black mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {["AI Research", "Machine Learning", "Web Dev", "Data Science", "Innovation"].map((interest) => (
                    <span key={interest} className="px-4 py-2 bg-[hsl(197,71%,73%)]/10 text-[hsl(197,71%,73%)] font-medium rounded-full text-sm border-2 border-[hsl(197,71%,73%)]/20">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto scroll-fade-in">
          <p className="text-gray-700 text-lg leading-relaxed">
            As a passionate technology enthusiast and AI/ML student, I'm dedicated to exploring artificial intelligence 
            and data science. My journey is driven by curiosity and a desire to create innovative solutions 
            that solve real-world problems through emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
