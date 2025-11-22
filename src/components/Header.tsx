import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
        >
          Portfolio
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-accent transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground/80 hover:text-accent transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground/80 hover:text-accent transition-colors font-medium"
          >
            Skills
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
