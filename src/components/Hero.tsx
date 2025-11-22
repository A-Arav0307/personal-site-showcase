import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Hi, I'm <span className="text-accent">Alex Johnson</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200">
          Creative Developer & Designer crafting beautiful digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-400">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
