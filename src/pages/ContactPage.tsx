import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <CursorSpotlight />
        <AnimatedBackground variant="bubbles" />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <section className="py-24 bg-section-bg-alt">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Get In Touch
                  </h1>
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
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-all duration-300"
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
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
