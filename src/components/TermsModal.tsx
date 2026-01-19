import { motion, AnimatePresence } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
                  Terms and Conditions
                </h1>
                <p className="text-small text-gray-600 mb-12">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="space-y-8 text-gray-700">
                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      1. Agreement to Terms
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      By accessing or using AngelAivia's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      2. Services Description
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      AngelAivia provides data consulting services including but not limited to:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Data architecture and modeling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>ETL development and data engineering</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Data visualization and business intelligence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>AI and machine learning solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Project management and strategic consulting</span>
                      </li>
                    </ul>
                    <p className="text-body font-light leading-relaxed mt-4">
                      All services are provided on a best-effort, professional basis and are tailored to each client engagement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      3. No Guarantee of Results
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      While we apply industry best practices and professional expertise, AngelAivia does not guarantee specific business, financial, or performance outcomes. Results depend on multiple factors outside our control.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      4. Intellectual Property Rights
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      Unless otherwise indicated, the website and all content, features, and functionality are owned by AngelAivia and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                    <p className="text-body font-light leading-relaxed">
                      Clients retain ownership of their own data. Custom deliverables are governed by the terms defined in individual client agreements.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      5. User Responsibilities
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      When using our services, you agree to:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Provide accurate and complete information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Maintain the confidentiality of any account credentials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Use our services only for lawful purposes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Not interfere with or disrupt our services</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      6. Service Engagement Terms
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Specific terms for consulting engagements will be outlined in separate service agreements or statements of work. These Terms and Conditions serve as the general framework for all interactions with AngelAivia.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      7. Financial Commitment
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-body font-semibold text-gray-900 mb-2">Non-Refundable Deposit</h4>
                        <p className="text-body font-light leading-relaxed">
                          A non-refundable deposit is required to initiate any engagement.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-body font-semibold text-gray-900 mb-2">Advance Payments</h4>
                        <p className="text-body font-light leading-relaxed">
                          Fees are paid in advance by milestone, phase, or retainer.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-body font-semibold text-gray-900 mb-2">Client Cancellation</h4>
                        <p className="text-body font-light leading-relaxed">
                          Deposits are non-refundable. Completed work remains payable.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-body font-semibold text-gray-900 mb-2">AngelAivia Cancellation</h4>
                        <p className="text-body font-light leading-relaxed">
                          Unearned prepaid fees will be refunded if AngelAivia cannot complete the engagement.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      8. Confidentiality
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      Both parties agree to maintain confidentiality of proprietary information shared during the course of any engagement. Specific confidentiality terms will be detailed in individual service agreements.
                    </p>
                    <p className="text-body font-light leading-relaxed mb-2">
                      AngelAivia treats all client information as confidential and will not disclose it to third parties except:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>With client consent</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>As required by law</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>To trusted partners strictly for service delivery</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      9. Limitation of Liability
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      To the maximum extent permitted by law, AngelAivia shall not be liable for:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Indirect, incidental, consequential damages, or punitive damages resulting from your use of or inability to use our services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Loss of data, profits, or business opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>Decisions made by clients based on consulting outputs</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      10. Third-Party Tools & Links
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Our services may integrate or reference third-party platforms (e.g., cloud providers, BI tools). AngelAivia is not responsible for third-party availability, performance, or policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      11. Disclaimer of Warranties
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      12. Termination
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of these Terms and Conditions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      13. Governing Law
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      These Terms and Conditions shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      14. Changes to Terms
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      15. Contact Information
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      If you have any questions about these Terms and Conditions, please contact us:
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
