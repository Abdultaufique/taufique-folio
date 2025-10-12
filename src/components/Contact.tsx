import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_kfpa8kj85',
        'template_fspxlps',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'abdultaufique8@gmail.com'
        },
        'KOTPBAZ_xVxm8N4jg8I3PlQ'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email failed:", error);
      toast({
        title: "Failed to Send",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdultaufique8@gmail.com",
      href: "mailto:abdultaufique8@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXX-XXX-XXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/yourusername"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[hsl(60,56%,91%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[hsl(197,71%,73%)] font-semibold text-lg mb-2">Get In Touch</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black">Contact Me</h2>
          <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-poppins text-2xl font-bold text-black mb-6">Contact Information</h3>
            
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <Card key={idx} className="p-5 bg-white border-2 border-gray-200 hover:border-[hsl(197,71%,73%)] transition-all hover:shadow-md group">
                  <a 
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-[hsl(197,71%,73%)]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-[hsl(197,71%,73%)]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                      <p className="text-black font-semibold">{info.value}</p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white border-2 border-gray-200">
            <h3 className="font-poppins text-2xl font-bold text-black mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white border-2 border-gray-200 focus:border-[hsl(197,71%,73%)] text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white border-2 border-gray-200 focus:border-[hsl(197,71%,73%)] text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Subject</label>
                <Input
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-white border-2 border-gray-200 focus:border-[hsl(197,71%,73%)] text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white border-2 border-gray-200 focus:border-[hsl(197,71%,73%)] text-black resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[hsl(197,71%,73%)] text-black hover:bg-[hsl(197,71%,68%)] font-semibold shadow-md hover:shadow-lg transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
