import { motion, AnimatePresence } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface FinancialDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FinancialDisclaimerModal({ isOpen, onClose }: FinancialDisclaimerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full my-8 relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={24} className="text-gray-700" />
              </button>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <h1 className="text-h1 lg:text-[3rem] font-headline font-semibold text-gray-900 mb-6">
                  Financial Disclaimer
                </h1>
                <p className="text-small text-gray-600 mb-12">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="space-y-8 text-gray-700">
                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      General Information
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      The information provided by AngelAivia on this website is for general informational and educational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      Not Financial Advice
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      The content on this website does not constitute financial, investment, legal, or professional advice. AngelAivia is a data consulting firm specializing in data architecture, analytics, visualization, and AI/ML solutions. We do not provide financial advisory services, investment recommendations, or financial planning services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      Consulting Services Disclaimer
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      Our consulting services focus on:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Data architecture and engineering solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Business intelligence and analytics implementation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Data visualization and dashboard development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Technical project management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>AI/ML solution implementation</span>
                      </li>
                    </ul>
                    <p className="text-body font-light leading-relaxed mt-4">
                      While we may work with financial data and systems, we do not provide advice on financial decisions, investments, or financial planning.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      No Guarantees of Results
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Case studies, testimonials, and performance metrics presented on this website represent specific client engagements and outcomes. Past performance and results do not guarantee similar outcomes for future projects. Each engagement is unique and results may vary based on numerous factors including client requirements, data quality, organizational readiness, and market conditions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      Third-Party Tools and Platforms
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      AngelAivia is an independent consulting firm. References to third-party tools, platforms, or technologies (such as Tableau, Power BI, AWS, etc.) are for informational purposes only and do not imply endorsement, partnership, or affiliation unless explicitly stated. We are not responsible for the performance, availability, or policies of third-party platforms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      Professional Consultation Required
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Before making any business, technical, or financial decisions based on information from this website, you should consult with qualified professionals in the relevant fields. For financial matters, please consult with licensed financial advisors, accountants, or legal professionals as appropriate.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      Limitation of Liability
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Under no circumstances shall AngelAivia be liable for any direct, indirect, special, incidental, or consequential damages arising from the use of information on this website or from our consulting services, including but not limited to business losses, lost profits, or damages resulting from decisions made based on our recommendations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      Changes to This Disclaimer
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      We reserve the right to modify this Financial Disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of our website and services constitutes acceptance of the modified disclaimer.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      Contact Information
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      If you have any questions about this Financial Disclaimer, please contact us:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>By email: <a href="mailto:contact@angelaivia.com" className="text-tertiary hover:underline">contact@angelaivia.com</a></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Through our website contact form</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Via LinkedIn: <a href="https://www.linkedin.com/company/angelaivia/" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:underline">linkedin.com/company/angelaivia</a></span>
                      </li>
                    </ul>
                  </section>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const modalContent = document.querySelector('.max-h-\\[90vh\\]');
                      if (modalContent) {
                        modalContent.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back to Top
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-tertiary text-white rounded-lg font-semibold hover:bg-[hsl(194,83%,48%)] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
