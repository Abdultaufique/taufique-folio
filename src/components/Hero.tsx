import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--accent-secondary))]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-accent font-roboto text-lg">Hello, I'm</p>
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Abdul <span className="bg-gradient-to-r from-accent to-[hsl(var(--accent-secondary))] bg-clip-text text-transparent">Taufique</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-roboto">
              A <span className="text-accent font-semibold">B.Tech AI & Data Science</span> Student From{" "}
              <span className="text-[hsl(var(--accent-secondary))] font-semibold">Pune</span>
            </p>
          </div>

          <p className="text-base md:text-lg text-foreground/80 font-roboto max-w-xl mx-auto md:mx-0">
            Hi, I'm Abdul Taufique, a B.Tech AI & Data Science student passionate about emerging AI technologies 
            and applying them to solve real-world problems. I specialize in machine learning, web development, 
            and data analysis.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button variant="hero" size="lg" className="group" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View Portfolio
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:abdultaufique8@gmail.com"
               className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right content - Profile image with torn paper effect */}
        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-[hsl(var(--accent-secondary))]/30 rounded-full blur-2xl"></div>
            
            {/* Main image with torn paper effect */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/20 shadow-[0_0_50px_hsl(var(--accent)/0.3)]"
                 style={{ 
                   clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 95% 80%, 90% 76%, 85% 82%, 80% 78%, 75% 85%, 70% 80%, 65% 87%, 60% 82%, 55% 88%, 50% 84%, 45% 90%, 40% 85%, 35% 91%, 30% 87%, 25% 93%, 20% 88%, 15% 94%, 10% 90%, 5% 95%, 0% 90%)' 
                 }}>
              <img 
                src={profileImage} 
                alt="Abdul Taufique" 
                className="w-full h-full object-cover scale-110"
              />
            </div>

            {/* Floating tech icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
              AI
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent-secondary))] to-[hsl(var(--accent-secondary))]/50 rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              DS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
