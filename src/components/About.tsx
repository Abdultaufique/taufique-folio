import { Card } from "@/components/ui/card";

const About = () => (
  <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
    <div className="max-w-6xl mx-auto">
      <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 rounded-2xl shadow-xl border-none">
        {/* Responsive Grid Layout */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          {/* Left: Portrait Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/Abdul_taufique_Create_a_realistic-_professional_portrait_of_a_young_man_standing_c0bde8d0-fdc0-4f26-967d-1eba72b4a961.jpg"
              alt="Abdul Taufique Portrait"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-200 shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center md:text-left">
              <h1 className="font-poppins text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mb-2">
                About Me
              </h1>
              <p className="text-lg font-medium text-blue-600">AI & Data Science Student</p>
            </div>

            {/* Bio */}
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Hi! I'm Abdul Taufique, an enthusiastic AI & Data Science undergraduate.
                I'm currently studying at Dr. DY Patil Vidyapeeth, Pune.
                Driven by curiosity and innovation, I love using machine learning and big data to solve real-world problems.
                Besides coding, I enjoy collaborating with teams and always look for new opportunities to learn and grow.
              </p>
            </div>

            {/* Languages Spoken */}
            <div>
              <h2 className="font-semibold text-lg text-blue-600 mb-3 flex items-center gap-2">
                <span className="text-xl">🗣️</span>
                Languages Spoken
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors">English</span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors">Hindi</span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors">Arabic</span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors">Basic German</span>
              </div>
            </div>

            {/* Currently Learning */}
            <div>
              <h2 className="font-semibold text-lg text-blue-600 mb-3 flex items-center gap-2">
                <span className="text-xl">📚</span>
                Currently Learning
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li className="hover:text-blue-600 transition-colors">Machine learning models (ML)</li>
                <li className="hover:text-blue-600 transition-colors">Pattern recognition</li>
                <li className="hover:text-blue-600 transition-colors">Big data technologies (Spark, Hadoop)</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

export default About;
