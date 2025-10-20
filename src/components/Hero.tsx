import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const titles = ["AI/ML Student", "Web Developer", "Data Analytics Enthusiast"];
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
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              Hello, I'm <span className="text-[hsl(197,71%,73%)]">Abdul Taufique</span>
            </h1>
            <div className="h-8 md:h-10">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                {displayedText}
                <span className="animate-pulse text-[hsl(197,71%,73%)]">|</span>
              </p>
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            Currently pursuing B.Tech in AI & Data Science, passionate about machine learning, 
            web development, and using emerging technologies to solve real-world problems.
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
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-[hsl(197,71%,73%)] text-black hover:bg-[hsl(197,71%,73%)]/10 font-medium"
            >
              <a href="/Abdul_Taufique_Resume_intern.pdf" target="_blank" rel="noopener noreferrer" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a 
              href="https://github.com/Abdultaufique" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[hsl(197,71%,73%)] hover:text-[hsl(197,71%,73%)] transition-all hover:scale-110 shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdul-taufique-6803622a7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[hsl(197,71%,73%)] hover:text-[hsl(197,71%,73%)] transition-all hover:scale-110 shadow-sm"
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
                src="/Abdul_taufique_Create_a_realistic-_professional_portrait_of_a_young_man_standing_c0bde8d0-fdc0-4f26-967d-1eba72b4a961.jpg" 
                alt="Abdul Taufique - AI & Data Science Student" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Animated floating icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[hsl(197,71%,73%)] rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-4.5-1.11-7.5-5.55-7.5-10.5V8.24l7.5-3.75 7.5 3.75V10c0 4.95-3 9.39-7.5 10.5zM9.5 16l-3-3 1.41-1.41L9.5 13.17l5.59-5.59L16.5 9l-7 7z"/>
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[hsl(197,71%,73%)] to-[hsl(197,71%,85%)] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
