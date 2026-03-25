import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import FocusAreas from "@/components/FocusAreas";
import OurEdge from "@/components/OurEdge";
import ForOwners from "@/components/ForOwners";
import ForInvestors from "@/components/ForInvestors";
import Leadership from "@/components/Leadership";
import PlatformVision from "@/components/PlatformVision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <FocusAreas />
      <OurEdge />
      <ForOwners />
      <ForInvestors />
      <Leadership />
      <PlatformVision />
      <Footer />
    </div>
  );
};

export default Index;
