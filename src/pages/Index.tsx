import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <CursorSpotlight />
        <AnimatedBackground variant="gradient-orbs" />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
