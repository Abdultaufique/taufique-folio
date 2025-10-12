import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const titles = ["AI/ML Engineer", "Web Developer", "Data Analytics Enthusiast"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText !== currentTitle) {
        // Typing
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText === currentTitle) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText !== "") {
        // Deleting
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText === "") {
        // Move to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-white">
      {/* Subtle decorative elements - beige and light blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(197,71%,73%)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[hsl(60,56%,91%)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-[hsl(197,71%,73%)] font-medium text-lg">Hello, I am</p>
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              Abdul Tauque
            </h1>
            <div className="h-8 md:h-10">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                {displayedText}
                <span className="animate-pulse text-[hsl(197,71%,73%)]">|</span>
              </p>
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            Hi, I'm Abdul Taufique, a B.Tech AI & Data Science student passionate about emerging AI technologies 
            and applying them to solve real-world problems. I specialize in machine learning, web development, 
            and data analysis.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              className="bg-[hsl(197,71%,73%)] text-black hover:bg-[hsl(197,71%,68%)] font-semibold shadow-md hover:shadow-lg transition-all"
              size="lg" 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
              <span className="ml-2">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-[hsl(197,71%,73%)] text-black hover:bg-[hsl(197,71%,73%)]/10 font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[hsl(197,71%,73%)] hover:text-[hsl(197,71%,73%)] transition-all hover:scale-110 shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[hsl(197,71%,73%)] hover:text-[hsl(197,71%,73%)] transition-all hover:scale-110 shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:abdultaufique8@gmail.com"
              className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[hsl(197,71%,73%)] hover:text-[hsl(197,71%,73%)] transition-all hover:scale-110 shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(197,71%,73%)]/20 to-[hsl(60,56%,91%)]/30 rounded-full blur-2xl"></div>
            
            {/* Main image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[hsl(197,71%,73%)]/30 shadow-xl">
              <img 
                src={profileImage} 
                alt="Abdul Tauique - AI & Data Science Student" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[hsl(197,71%,73%)] text-black rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
              AI
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[hsl(60,56%,91%)] text-black border-2 border-gray-200 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
              DS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
