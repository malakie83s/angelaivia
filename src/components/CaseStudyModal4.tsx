import { motion, AnimatePresence } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Download = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Mail = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Calendar = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
import { Button } from '@/components/ui/button';

interface CaseStudyModal4Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal4({ isOpen, onClose }: CaseStudyModal4Props) {
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
                    Analytics Automation Tools Pack
                  </h2>
                  <p className="text-body font-medium mb-2" style={{ color: '#42BBE9' }}>
                    Coding travel everywhere and in any reporting tool!
                  </p>
                  <p className="text-sm text-gray-600 mb-8 font-normal leading-relaxed">
                    <span className="font-semibold">Ideal for:</span> BI analysts, operations teams, and managers seeking quick productivity wins without engineering overhead
                  </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-body text-gray-700 font-normal leading-relaxed mb-4">
                    This bonus toolkit showcases lightweight, practical automation solutions designed to remove everyday friction from analytics and operational workflows. Built from real-world enterprise scenarios, these tools help teams save time, reduce manual effort, and improve accuracy—without requiring engineering support or complex system changes.
                  </p>
                  <p className="text-body text-gray-700 font-normal leading-relaxed mb-6">
                    Often used alongside larger BI and data platform initiatives, this toolkit accelerates adoption, boosts analyst productivity, and delivers quick wins while long-term programs are underway.
                  </p>
                </motion.div>

                {/* Tool 1: Interactive Email Automations */}
                <motion.div
                  className="mb-8 bg-gray-50 rounded-xl p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Mail size={32} className="text-tertiary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-3">
                        1) Interactive Email Automations
                      </h3>
                      <p className="text-body text-gray-700 font-normal leading-relaxed mb-3">
                        <strong>Automates recurring communications directly from Excel, ensuring consistency, speed, and zero manual follow-up.</strong>
                      </p>
                      <p className="text-body text-gray-600 font-normal leading-relaxed italic mb-4">
                        The goal of this tool is to automate the emailing process and communication directly within Excel, allowing users to just filling the information, and in 1 click button, the email will be automatically sent in the same layout and font as you made it without any single code interference.
                      </p>
                      
                      {/* Screenshot */}
                      <div className="bg-white rounded-lg p-4 border border-gray-300 mb-4">
                        <img
                          src="https://c.animaapp.com/mj1tk1o0j9U2sS/img/case_study_4%29picture-autoemail.png"
                          alt="Email Automation Tool Screenshot"
                          className="w-full h-auto rounded"
                          loading="lazy"
                        />
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h4 className="text-body font-semibold text-gray-900 mb-2">
                          Why This Tool Feels Talented or Advanced?
                        </h4>
                        <p className="text-small text-gray-700 font-normal leading-relaxed">
                          It combines <strong>smart scheduling logic with automatic email notifications</strong>, turning a simple Excel file into a mini workflow system. The tool removes manual follow-ups, email will be sent exactly as you see, prevents scheduling conflicts, and ensures that updates are instantly communicated — something traditional Excel files cannot do on their own.
                        </p>
                      </div>

                      <a
                        href="https://drive.google.com/uc?export=download&id=1O-3j7LvVDce_uWtaYPGUHVhUxgf_LC6g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          className="w-full bg-tertiary text-white hover:bg-[hsl(194,83%,48%)] font-semibold h-12 rounded-lg flex items-center justify-center gap-2"
                        >
                          <Download size={20} />
                          <span className="flex flex-col items-center">
                            <span>Download Tool</span>
                            <span className="text-xs font-normal">(Note: this file works only for Classic Outlook.)</span>
                          </span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Tool 2: Scheduling Appointment */}
                <motion.div
                  className="mb-8 bg-gray-50 rounded-xl p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Calendar size={32} className="text-tertiary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-3">
                        2) Scheduling Appointment
                      </h3>
                      <p className="text-body text-gray-700 font-normal leading-relaxed mb-3">
                        <strong>Transforms Excel into a lightweight scheduling engine with automated conflict detection, updates, and notifications.</strong>
                      </p>
                      <p className="text-body text-gray-600 font-normal leading-relaxed italic mb-4">
                        The goal of this tool is to automate scheduling and communication directly within Excel, allowing users to manage tasks, assign resources, track timelines, generate a conflict-free schedule with a single click, and automate notification system that saves time and improves accuracy.
                      </p>
                      <p className="text-small text-gray-600 font-normal leading-relaxed mb-4">
                        The macro engine analyzes dates, priorities, and dependencies to build an accurate timeline without manual effort. It also visualizes the schedule, highlights issues, and keeps everything up-to-date instantly.
                      </p>
                      
                      {/* Screenshot */}
                      <div className="bg-white rounded-lg p-4 border border-gray-300 mb-4">
                        <img
                          src="https://c.animaapp.com/mj1tk1o0j9U2sS/img/case_study_4%29picture-scheduling.png"
                          alt="Scheduling Appointment Tool Screenshot"
                          className="w-full h-auto rounded"
                          loading="lazy"
                        />
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h4 className="text-body font-semibold text-gray-900 mb-2">
                          Why This Tool Feels Talented or Advanced?
                        </h4>
                        <p className="text-small text-gray-700 font-normal leading-relaxed mb-3">
                          Because it automates what people usually do manually:
                        </p>
                        <ul className="space-y-1 text-small text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-tertiary mt-1">○</span>
                            <span>Automatically assigning resources</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-tertiary mt-1">○</span>
                            <span>Auto-calculating overlaps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-tertiary mt-1">○</span>
                            <span>Auto-coloring conflicts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-tertiary mt-1">○</span>
                            <span>Auto-refreshing timelines</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-tertiary mt-1">○</span>
                            <span>Running macro-driven scheduling logic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-tertiary mt-1">○</span>
                            <span>Reducing human error</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-tertiary mt-1">○</span>
                            <span>Producing professional insights instantly</span>
                          </li>
                        </ul>
                        <p className="text-small text-gray-700 font-normal leading-relaxed mt-3">
                          This makes the user look like they're using a mini scheduling system, not just Excel.
                        </p>
                      </div>

                      <a
                        href="https://drive.google.com/uc?export=download&id=1VF0SgsD2ev6FY27WjgOWdCozHSodCX4y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          className="w-full bg-tertiary text-white hover:bg-[hsl(194,83%,48%)] font-semibold h-12 rounded-lg flex items-center justify-center gap-2"
                        >
                          <Download size={20} />
                          Download Tool
                        </Button>
                      </a>
                    </div>
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
                    Discuss Custom Automation Needs
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
