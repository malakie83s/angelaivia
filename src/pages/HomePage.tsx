import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoIntroSection from "../components/VideoIntroSection";
import ServicesSection from "../components/ServicesSection";
import TechnicalExpertiseSection from "../components/TechnicalExpertiseSection";
import ApproachSection from "../components/ApproachSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import AboutSection from "../components/AboutSection";
import ClientTestimonialsSection from "../components/ClientTestimonialsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logoUrl =
    "https://c.animaapp.com/mj1tk1o0j9U2sS/img/angelaivia-logo-only-(black-horizontal)_2.jpg";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AngelAivia",
    url: "https://angelaivia.com",
    logo: logoUrl,
    description:
      "AngelAivia provides data analytics and business intelligence consulting, including data architecture, ETL/ELT pipelines, cloud analytics platforms, dashboards, KPIs, and AI-powered analytics.",
    sameAs: ["https://www.linkedin.com/company/angelaivia"]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AngelAivia",
    url: "https://angelaivia.com",
    image: logoUrl,
    description:
      "Remote-first data analytics and business intelligence consulting firm serving global organizations across North America, Europe, the Middle East, and Asia-Pacific.",
    areaServed: [
      "North America",
      "Europe",
      "Middle East",
      "Asia-Pacific"
    ],
    serviceType: [
      "Data Analytics Consulting",
      "Business Intelligence Consulting",
      "Data Architecture",
      "ETL & ELT Development",
      "Dashboarding & KPI Design",
      "Cloud Analytics",
      "AI-Powered Analytics"
    ],
    sameAs: ["https://www.linkedin.com/company/angelaivia"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://angelaivia.com/contact",
      availableLanguage: ["en"]
    }
  };

  return (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
    </Helmet>

    <Header />
    <main>
      <HeroSection />
      <VideoIntroSection />
      <ServicesSection />
      <TechnicalExpertiseSection />
      <ApproachSection />
      <CaseStudiesSection />
      <AboutSection />
      <ClientTestimonialsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

}
