import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
