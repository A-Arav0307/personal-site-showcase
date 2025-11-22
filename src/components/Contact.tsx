import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-background border-border"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background border-border"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-background border-border min-h-[150px]"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Send Message
            </Button>
          </form>
          
          <div className="flex justify-center gap-6">
            <a
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
