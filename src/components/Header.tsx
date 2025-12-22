import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
        >
          Portfolio
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/about"
            className={`transition-colors font-medium ${
              isActive("/about") 
                ? "text-accent" 
                : "text-foreground/80 hover:text-accent"
            }`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`transition-colors font-medium ${
              isActive("/projects") 
                ? "text-accent" 
                : "text-foreground/80 hover:text-accent"
            }`}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={`transition-colors font-medium ${
              isActive("/skills") 
                ? "text-accent" 
                : "text-foreground/80 hover:text-accent"
            }`}
          >
            Skills
          </Link>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
