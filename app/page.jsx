import FaqSection from "../components/FAQs-section/FaqSection";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/hero/HeroSection";
import OurColleges from "../components/our-colleges/OurColleges";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurColleges />
      <FaqSection />
      <Footer />
    </>
  );
}
