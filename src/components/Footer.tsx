import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';
import FinancialDisclaimerModal from './FinancialDisclaimerModal';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isFinancialModalOpen, setIsFinancialModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
      <FinancialDisclaimerModal isOpen={isFinancialModalOpen} onClose={() => setIsFinancialModalOpen(false)} />
      <footer id="blog" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-h3 font-headline font-medium text-primary-foreground mb-6">
                AngelAivia
              </h3>
              <p className="text-body text-primary-foreground font-light leading-relaxed">
                AngelAivia is a data analytics and business intelligence consulting company delivering cloud analytics, BI dashboards, ETL pipelines, data strategy services, AI-driven analytics and analytics project delivery for enterprise teams and growing organizations.
              </p>
            </div>

            <div>
              <h4 className="text-body font-medium text-primary-foreground mb-6 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('technical-expertise')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    Technical Expertise
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('case-studies')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('clients')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    Clients
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/insights')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    Insights
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/faq')}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-body font-medium text-primary-foreground mb-6 uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-4">
                <li className="text-body text-primary-foreground font-light">Data Visualization</li>
                <li className="text-body text-primary-foreground font-light">ETL Architecture</li>
                <li className="text-body text-primary-foreground font-light">Project Management</li>
                <li className="text-body text-primary-foreground font-light">AI/ML Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="text-body font-medium text-primary-foreground mb-6 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.linkedin.com/company/angelaivia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors font-light"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-small text-primary-foreground font-light mb-2">
                © {new Date().getFullYear()} AngelAivia. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/70 font-light mb-1">
                AngelAivia is an independent consulting firm. No affiliation with third-party platforms unless explicitly stated.
              </p>
              <p className="text-xs text-primary-foreground/70 font-light">
                AngelAivia provides analytics and consulting services for informational purposes only. All financial and business decisions remain the responsibility of the client.
              </p>
            </div>
            <div className="flex gap-8">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-small text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-small text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
              >
                Terms And Conditions
              </button>
              <button
                onClick={() => setIsFinancialModalOpen(true)}
                className="text-small text-primary-foreground hover:text-tertiary transition-colors font-light cursor-pointer"
              >
                Financial Disclaimer
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
