import { motion, AnimatePresence } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Zap = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
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

// Simple CheckCircle component to reduce lucide-react imports
const CheckCircle = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
import { Button } from '@/components/ui/button';

interface CaseStudyModal2Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal2({ isOpen, onClose }: CaseStudyModal2Props) {
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
                    AI-Driven Analytics Automation
                  </h2>
                  <p className="text-body font-medium mb-2" style={{ color: '#42BBE9' }}>
                    Enterprise Analytics Transformation • Global Organization
                  </p>
                  <p className="text-small text-gray-500 mb-8">
                    <span className="font-semibold">Ideal for:</span> Enterprise analytics teams, executive reporting functions, organizations scaling AI responsibly
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
                    As data volumes and business complexity increased, leadership teams struggled to keep pace with insight demand. Analytics teams were overwhelmed with repetitive requests, manual validation, and time-consuming analysis cycles, while executives needed faster, clearer, and more predictive insights.
                  </p>
                  <p className="text-body text-gray-700 font-medium mb-3">Key challenges included:</p>
                  <ul className="space-y-2 text-body text-gray-600 font-normal leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>High analyst effort spent on repetitive validation, reconciliation, and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Slow turnaround from business question to actionable insight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Inconsistent interpretation of metrics across teams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Limited ability to anticipate trends and risks proactively</span>
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
                    We designed and delivered an <strong>AI-powered analytics layer</strong> that augmented traditional BI with <strong>automation, intelligence, and guided insight generation</strong>, while preserving governance and trust.
                  </p>
                  <p className="text-body text-gray-600 font-normal leading-relaxed mb-4">
                    The approach focused on <strong>AI as an accelerator</strong>, not a replacement for analytics rigor.
                  </p>
                  
                  <h4 className="text-body font-semibold text-gray-900 mb-3 mt-6">Key Capabilities Delivered</h4>
                  <ul className="space-y-3 text-body text-gray-700 font-normal leading-relaxed">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">AI-Assisted Analytics Workflows:</strong> Integrated AI to automate repetitive tasks such as data validation, anomaly detection, metric explanations, and insight summarization.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Intelligent Metric Interpretation:</strong> Enabled AI-generated narratives to explain KPI movements, trends, and outliers in clear business language for executives and stakeholders.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Decision Intelligence Layer:</strong> Combined historical trends, real-time signals, and contextual business logic to support faster, more informed decision-making.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Governed AI Usage:</strong> Applied guardrails to ensure AI outputs aligned with verified metrics, trusted datasets, and approved business definitions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Analytics Team Productivity Enablement:</strong> Freed analysts from manual tasks, allowing focus on strategic analysis, stakeholder partnership, and value creation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Analytics Productivity Enablement:</strong> Shifted teams from reactive reporting to proactive decision support.</span>
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
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">30-50%</div>
                      <p className="text-small text-gray-700 font-normal">Time Saved on Recurring Analysis Tasks</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-6 text-center">
                      <Zap size={40} className="text-yellow-600 mx-auto mb-3" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">Faster</div>
                      <p className="text-small text-gray-700 font-normal">Insight turnaround reduced from days to hours</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-6 text-center">
                      <Users size={40} className="text-purple-600 mx-auto mb-3" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">Strategic</div>
                      <p className="text-small text-gray-700 font-normal">Analytics Teams Focus on High-Value Work</p>
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
                      'Generative AI & LLM-Based Analytics Assistants',
                      'Advanced SQL & Semantic Modeling',
                      'AI-Assisted Data Validation & QA',
                      'Narrative Analytics & Insight Automation',
                      'Cloud BI Platforms',
                      'Governed Metrics & Data Quality Frameworks'
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
