import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeLookFor from "@/components/WhatWeLookFor";
import WhyChooseUs from "@/components/WhyChooseUs";
import Capabilities from "@/components/Capabilities";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatWeLookFor />
      <WhyChooseUs />
      <Capabilities />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
