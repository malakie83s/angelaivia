import { motion } from 'framer-motion';
// Icons removed - not used in current implementation
import { useState, useRef } from 'react';

export default function VideoIntroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Video rotation system - rotates every 1st of the month starting Feb 1, 2025
  const getVideoId = () => {
    const now = new Date();
    const startDate = new Date('2025-02-01');
    
    // If before Feb 1, 2025, show Avatar 1 (Woman Pink)
    if (now < startDate) {
      return '1qMK1o5S0ta9pjJ4CyiOlu1RaTRQjI0l2'; // Avatar(1)-WomanPink.mp4
    }
    
    // Calculate months since Feb 1, 2025
    const monthsSinceStart = (now.getFullYear() - startDate.getFullYear()) * 12 + 
                             (now.getMonth() - startDate.getMonth());
    
    // Rotate through 2 videos (0, 1)
    const videoIndex = monthsSinceStart % 2;
    
    const videoIds = [
      '1qMK1o5S0ta9pjJ4CyiOlu1RaTRQjI0l2', // Avatar(1)-WomanPink.mp4 - Feb, Apr, Jun, Aug, Oct, Dec
      '15OXufZ6LPGyp_Pdkn7_dT7BDK49mcS09', // Avatar(2)-ManReal.mp4 - Mar, May, Jul, Sep, Nov, Jan
    ];
    
    return videoIds[videoIndex];
  };

  const currentVideoId = getVideoId();

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary opacity-50" />
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-primary-foreground mb-6 tracking-tight">
            Discover AngelAivia
          </h2>
          <p className="text-body text-primary-foreground max-w-2xl mx-auto font-light leading-relaxed">
            See how we transform data challenges into measurable outcomes—through analytics strategy, scalable architecture, and executive-ready dashboards.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-video">
              <iframe
                key={currentVideoId}
                src={`https://drive.google.com/file/d/${currentVideoId}/preview`}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title="Discover AngelAivia - Company Introduction"
                style={{ border: 'none' }}
              />
              {/* Transparent overlay to block Google Drive "open in new tab" button */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-transparent cursor-default" style={{ pointerEvents: 'auto' }} onClick={(e) => e.preventDefault()} />
            </div>
          </div>

          {/* Video Script */}
          <motion.div
            className="mt-8 bg-secondary/50 rounded-lg p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-body text-primary-foreground font-light leading-relaxed text-center">
              AngelAivia helps teams modernize analytics—from data architecture and modeling to BI dashboards and automation. We deliver high-quality analytics solutions that improve decision-making, reduce manual effort, and create clarity at every level of the organization.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-secondary/30 rounded-lg backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300">
            <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-h3 font-headline font-semibold text-tertiary">01</span>
            </div>
            <h3 className="text-body font-medium text-primary-foreground mb-2">Data Architecture & Modeling</h3>
            <p className="text-small text-primary-foreground/80 font-light">
              Building robust foundations and intuitive ERP UI design for your success
            </p>
          </div>

          <div className="text-center p-6 bg-secondary/30 rounded-lg backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300">
            <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-h3 font-headline font-semibold text-tertiary">02</span>
            </div>
            <h3 className="text-body font-medium text-primary-foreground mb-2">ETL & Project Management</h3>
            <p className="text-small text-primary-foreground/80 font-light">
              Robust ETL processes with expert project management delivering reliable results
            </p>
          </div>

          <div className="text-center p-6 bg-secondary/30 rounded-lg backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300">
            <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-h3 font-headline font-semibold text-tertiary">03</span>
            </div>
            <h3 className="text-body font-medium text-primary-foreground mb-2">Data Visualization</h3>
            <p className="text-small text-primary-foreground/80 font-light">
              Bringing data to life with Tableau, Power BI, and expert visualization tools
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
