import { motion, AnimatePresence } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const TrendingUp = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const Users = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const Clock = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// Simple CheckCircle component to reduce lucide-react imports
const CheckCircle = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
import { Button } from '@/components/ui/button';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
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
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-4 tracking-tight">
                    Enterprise Data Analytics Platform
                  </h2>
                  <p className="text-body font-medium mb-2" style={{ color: '#42BBE9' }}>
                    Global Financial Institution
                  </p>
                  <p className="text-small text-gray-500 mb-8">
                    <span className="font-semibold">Ideal for:</span> Financial institutions, regulated environments, executive reporting
                  </p>
                </motion.div>

                {/* Challenge */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-body text-gray-600 font-normal leading-relaxed mb-4">
                    The Credit Card organization needed a single, trusted source of truth to support executive decision-making, customer segmentation, marketing performance, and regulatory reporting. Data was fragmented across multiple operational systems, which slowed reporting and limited visibility.
                  </p>
                  <ul className="space-y-2 text-body text-gray-600 font-normal leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Inconsistent metrics across teams (risk, finance, marketing, and operations)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Manual weekly reporting cycle that delayed leadership decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Limited segmentation and targeting capability for campaigns and customer growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>High effort to reconcile balances, KPIs, and scorecards across systems</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Solution */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-body text-gray-600 font-normal leading-relaxed mb-4">
                    We designed and built a centralized Credit Card database and reporting layer that unified all credit card data, enabled advanced segmentation, and powered executive dashboards and automated reporting at scale.
                  </p>
                  <ul className="space-y-3 text-body text-gray-700 font-normal leading-relaxed">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Centralized Credit Card Data Mart:</strong> Consolidated customer, card, transaction, billing, payments, limits, and balances into a single governed model.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Segmentation & Targeting Layer:</strong> Enabled customer segmentation for acquisition, activation, retention, cross-sell, and win-back campaigns.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Executive & CEO Reporting:</strong> Built leadership-ready dashboards for portfolio health, spend, revolvers/transactors, delinquency, and profitability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Automated Balance Scorecards:</strong> Delivered periodic scorecards and KPI packs with consistent definitions, reducing reconciliation and rework.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Reporting Factory:</strong> Built a scalable reporting pipeline generating scheduled + ad-hoc outputs for stakeholders across the financial sector.</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Results */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-6">
                    The Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-200 rounded-lg p-6 text-center">
                      <TrendingUp size={40} className="text-tertiary mx-auto mb-3" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">70%</div>
                      <p className="text-small text-gray-700 font-normal">Reduction in Processing Time</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-6 text-center">
                      <Clock size={40} className="text-tertiary mx-auto mb-3" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">4 hours</div>
                      <p className="text-small text-gray-700 font-normal">From 5 Days to Real-time</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-6 text-center">
                      <Users size={40} className="text-tertiary mx-auto mb-3" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">1,500+</div>
                      <p className="text-small text-gray-700 font-normal">Users Empowered Daily<br/><span className="text-xs">(Credit, Marketing, Branches, etc.)</span></p>
                    </div>
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'SQL (Advanced)',
                      'Data Modeling (Star Schema)',
                      'ETL / SSIS',
                      'Data Quality & Reconciliation',
                      'Text files (csv, txt,etc...)',
                      'Microsoft SQL Server',
                      'Excel / VBA',
                      'Cognos',
                      'Excelcius Dashboard'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full text-small font-medium"
                        style={{ backgroundColor: '#E6F7FF', color: '#42BBE9' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    onClick={() => {
                      onClose();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 bg-tertiary text-white hover:bg-[hsl(194,83%,48%)] font-semibold h-12 rounded-lg"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="flex-1 h-12 rounded-lg border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-100"
                  >
                    View More Case Studies
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
