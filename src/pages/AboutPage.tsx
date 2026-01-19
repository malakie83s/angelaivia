import { useEffect } from "react";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malak Saad",
    jobTitle: "Founder & Data Analytics Consultant",
    url: "https://angelaivia.com/about",
    worksFor: {
      "@type": "Organization",
      name: "AngelAivia",
      url: "https://angelaivia.com"
    },
    sameAs: ["https://www.linkedin.com/company/angelaivia"],
    knowsAbout: [
      "Data Analytics",
      "Business Intelligence",
      "Data Architecture",
      "ETL & ELT",
      "Cloud Analytics",
      "Executive Dashboards"
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <Header />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
