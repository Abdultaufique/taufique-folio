import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(197,71%,73%)] border-t-4 border-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-poppins text-2xl font-bold text-black mb-2">
              Abdul<span className="text-white">.</span>
            </h3>
            <p className="text-gray-800">
              AI & Data Science enthusiast creating innovative solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Portfolio", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-800 hover:text-black font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-black text-lg mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abdultaufique8@gmail.com"
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t-2 border-white/30 text-center">
          <p className="flex items-center justify-center gap-2 text-gray-800 font-medium">
            © {currentYear} Abdul Taufique. Made with <Heart className="w-4 h-4 text-black fill-black" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
