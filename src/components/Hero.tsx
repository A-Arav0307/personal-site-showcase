import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[hsl(var(--glow-primary))] rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-[hsl(var(--glow-secondary))] rounded-full mix-blend-screen filter blur-[128px] opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-[hsl(var(--glow-tertiary))] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-slide-up tracking-tight">
          Hi, I'm <span className="text-accent drop-shadow-[0_0_25px_hsl(var(--accent)/0.5)]">Alex Johnson</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up animate-delay-200">
          Creative Developer & Designer crafting beautiful digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-400">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 shadow-[0_0_30px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)] transition-all duration-300"
          >
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border/50 text-foreground hover:bg-secondary hover:border-accent/50 text-lg px-8 backdrop-blur-sm"
          >
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
