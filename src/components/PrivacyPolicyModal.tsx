import { motion, AnimatePresence } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
                  Privacy Policy
                </h1>
                <p className="text-small text-gray-600 mb-12">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="space-y-8 text-gray-700">
                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      1. Introduction
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      AngelAivia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      2. Information We Collect
                    </h2>
                    <p className="text-body font-semibold leading-relaxed mb-4">
                      We do not sell, rent, or trade personal information.
                    </p>
                    <p className="text-body font-light leading-relaxed mb-4">
                      We may collect information about you in a variety of ways, including:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span><strong>Personal Data:</strong> Name, email address, company name, and other contact information you provide when filling out forms on our website.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to track activity on our website and hold certain information.</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      3. How We Use Your Information
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>To respond to your inquiries and provide customer support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>To send you marketing communications (with your consent)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>To improve our website and services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>To analyze usage patterns and trends</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>To comply with legal obligations</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      4. Disclosure of Your Information
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      We may share your information in the following situations:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition of all or a portion of our business.</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      5. Cookies & Analytics
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Our website may use cookies or analytics tools to understand usage patterns and improve user experience. You can disable cookies via your browser settings.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      6. Data Security
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                    <p className="text-body font-light leading-relaxed">
                      We retain personal data only for as long as necessary to fulfill the purpose for which it was collected.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      7. Your Data Protection Rights
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      Depending on your location, you may have the following rights:
                    </p>
                    <ul className="space-y-2 text-body font-light leading-relaxed ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>The right to access, update, or delete your personal information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>The right to rectification of inaccurate data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>The right to object to processing of your personal data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>The right to data portability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-tertiary mt-1">•</span>
                        <span>The right to withdraw consent</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      8. Third-Party Links
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      9. Children's Privacy
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      10. Changes to This Privacy Policy
                    </h2>
                    <p className="text-body font-light leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-4">
                      11. Contact Us
                    </h2>
                    <p className="text-body font-light leading-relaxed mb-4">
                      If you have any questions about this Privacy Policy, please contact us:
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
