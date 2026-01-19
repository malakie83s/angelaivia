import { motion, AnimatePresence } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const X = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Zap = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const Lightbulb = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="9" y1="18" x2="15" y2="18"></line>
    <line x1="10" y1="22" x2="14" y2="22"></line>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
  </svg>
);

const Globe = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
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
import { useState, useRef } from 'react';

interface CaseStudyModal3Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal3({ isOpen, onClose }: CaseStudyModal3Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
                  <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-3 tracking-tight">
                    Real-Time BI Dashboards (F1 Formula)
                  </h2>
                  <p className="text-body font-medium text-gray-800 mb-4">
                    Award-Winning, Top-Ranked Global Performance Solution
                  </p>
                  <p className="text-body font-medium mb-2" style={{ color: '#42BBE9' }}>
                    Amazon Web Services • Global Analytics Competition
                  </p>
                  <p className="text-sm text-gray-600 mb-2 font-normal leading-relaxed">
                    Delivered as part of a global, judged analytics competition simulating real-world, high-pressure operational environments.
                  </p>
                  <p className="text-sm text-gray-600 mb-8 font-normal leading-relaxed">
                    <span className="font-semibold">Ideal for:</span> Performance-driven organizations, global operations teams, real-time decision environments
                  </p>
                </motion.div>

                {/* Dashboard Video */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
                    <iframe
                      src="https://drive.google.com/file/d/18mXqKb99ySsMplugfoSpbamY2BTXJ7ZZ/preview"
                      className="w-full aspect-video"
                      allow="autoplay"
                      allowFullScreen
                      title="F1 Formula Dashboard Demo"
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 italic">Dashboard Demo - Real-time Performance Analytics (F1 Formula Tableau Dashboard)</p>
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
                    In a high-stakes global analytics competition, teams needed instant visibility into performance drivers to optimize execution in real time. Existing reporting approaches were too slow, fragmented, and difficult to interpret under time pressure.
                  </p>
                  <p className="text-body text-gray-700 font-medium mb-3">This created several challenges:</p>
                  <ul className="space-y-2 text-body text-gray-600 font-normal leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>No real-time view of performance-critical KPIs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Delayed identification of bottlenecks and inefficiencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>High cognitive load caused by overly complex dashboards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Limited ability to align teams quickly around the right actions</span>
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
                    I designed and delivered a real-time performance dashboard framework optimized for speed, clarity, and decision-making under pressure, enabling teams to act immediately on performance signals.
                  </p>
                  
                  <h4 className="text-body font-semibold text-gray-900 mb-3 mt-6">Key Capabilities Delivered</h4>
                  <ul className="space-y-3 text-body text-gray-700 font-normal leading-relaxed">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Real-Time KPI Visibility:</strong> Built dashboards that surfaced the most critical metrics in near real time, allowing teams to monitor performance continuously.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Action-Oriented Metric Design:</strong> Designed KPIs to clearly indicate what action to take, not just what changed — enabling faster execution.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Optimized Data Models & Queries:</strong> Structured data models and SQL logic to ensure fast refresh cycles and consistent dashboard performance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong className="font-semibold">Executive-Grade Visualization:</strong> Applied clean, minimal visualization patterns to reduce noise and improve interpretability under competitive conditions.</span>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-200 rounded-lg p-8 text-center">
                      <img 
                        src="https://c.animaapp.com/mj1tk1o0j9U2sS/img/image_8.png" 
                        alt="Trophy" 
                        className="w-12 h-12 mx-auto mb-4 object-contain"
                      />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">Global #1</div>
                      <p className="text-small text-gray-700 font-normal">Beating F1 Champions</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-8 text-center">
                      <Zap size={48} className="text-orange-500 mx-auto mb-4" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">60%</div>
                      <p className="text-small text-gray-700 font-normal">Performance <span className="text-orange-500 font-semibold">Gains</span></p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-8 text-center">
                      <Lightbulb size={48} className="text-purple-500 mx-auto mb-4" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">Creative</div>
                      <p className="text-small text-gray-700 font-normal">Innovation under pressure</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-8 text-center">
                      <Globe size={48} className="text-blue-500 mx-auto mb-4" />
                      <div className="text-h1 font-headline font-bold text-tertiary mb-2">Global</div>
                      <p className="text-small text-gray-700 font-normal">Proven Scalability</p>
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
                      'Tableau',
                      'Advanced/Creative LOD, Calculated Fields & Functions',
                      'Advanced SQL & Query Optimization',
                      'High-Performance Data Modeling',
                      'Real-Time / Near Real-Time Analytics',
                      'Cloud BI Platforms',
                      'Dashboard Design for Decision Velocity',
                      'Data Validation & Performance Monitoring'
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

                {/* Testimony Section */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="rounded-xl p-8 border-2 border-tertiary/30" style={{ backgroundColor: '#F0F5FF' }}>
                    <img
                      src="https://c.animaapp.com/mj1tk1o0j9U2sS/img/f1-global-winner_1.png"
                      alt="Global #1 Achievement - Analyticon Viz Contest"
                      className="w-full h-auto rounded-lg mb-6"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <h3 className="text-h2 font-headline font-bold mb-4" style={{ color: '#42BBE9' }}>
                        Congratulations, AngelAvia Team!
                      </h3>
                      <p className="text-body text-gray-700 font-normal leading-relaxed italic mb-4">
                        "Please, accept our sincere CONGRATULATIONS on becoming Global Winners of this year's Analyticon Viz Contest. Your masterpiece raises the bar for what can be achieved, if one puts a lot of effort, passion and creativity to turn data into the insightful and engaging story. Thank you for making history of Analyticon in 2022!!! Viz Contest Committee"
                      </p>
                      <p className="text-small font-semibold text-gray-900">
                        — From Analyticon Judge
                      </p>
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
