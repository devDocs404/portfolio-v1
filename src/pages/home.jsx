// import CaseStudiesSection from "@/components/case-studies-section.jsx";
import ModernHeader from "@/components/modern-header.jsx";
import { useEffect } from "react";
import ModernHero from "../components/modern-hero";
import ModernAbout from "../components/modern-about";
import ExperienceSection from "../components/experience-section";
import ModernServices from "../components/modern-services";
import ModernPortfolio from "../components/modern-portfolio";
import ModernFooter from "../components/modern-footer";

function Home() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <div className="min-h-screen bg-gray-900">
      <ModernHeader />
      <ModernHero />
      <ModernAbout />
      <ExperienceSection />
      <ModernServices />
      <ModernPortfolio />
      <ModernFooter />
    </div>
  );
}

export default Home;
