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

import { useState } from "react";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // YOU MUST REPLACE THIS WITH YOUR ACCESS KEY FROM https://web3forms.com/
    const ACCESS_KEY = "fb7d7dad-292f-4e70-bbeb-6a00caf7c4e0";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Submission failed",
          description: result.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not connect to the server. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="bg-background border-border"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="bg-background border-border"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="bg-background border-border min-h-[150px]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-all duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  <div className="flex justify-center gap-6">
                    <a
                      href="mailto:@ag332@rice.edu"
                      className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={24} />
                    </a>
                    <a
                      href="https://github.com/A-Arav0307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aarav-rajeev-gupta-909b172aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://twitter.com/"
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
