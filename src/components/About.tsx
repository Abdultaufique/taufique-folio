import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 bg-white border-2 border-blue-100 shadow-sm">
        {/* Portrait Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/Abdul_taufique_Create_a_realistic-_professional_portrait_of_a_young_man_standing_c0bde8d0-fdc0-4f26-967d-1eba72b4a961.jpg"
            alt="Abdul Taufique Portrait"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow"
          />
        </div>
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-poppins text-3xl font-bold text-blue-700 mb-2">
            About Me
          </h1>
          <p className="text-lg text-blue-500">AI & Data Science Student</p>
        </div>
        {/* Bio */}
        <div className="text-gray-700 leading-relaxed mb-8">
          <p>
            Hi! I'm Abdul Taufique, a passionate BTech AI & Data Science student excited by the power of technology to solve real-world problems. My journey centers around machine learning, big data, and practical applications of AI. I love exploring new ideas, collaborating with teams, and continuously learning to keep pace with the evolving tech world.
          </p>
        </div>
        {/* Languages Spoken */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg text-blue-600 mb-2">Languages Spoken</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">English</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Hindi</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Arabic</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Basic German</span>
          </div>
        </div>
        {/* Currently Learning */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg text-blue-600 mb-2">Currently Learning</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Machine learning models (ML)</li>
            <li>Pattern recognition</li>
            <li>Big data technologies (Spark, Hadoop)</li>
          </ul>
        </div>
        {/* Resume Download */}
        <div className="mb-4 flex justify-center">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <a
              href="/Abdul_Taufique_Resume_intern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </Card>
    </div>
  </section>
);

export default About;
