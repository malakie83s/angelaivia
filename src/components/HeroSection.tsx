import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.video
          alt="digital data streams and AI visualization"
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data Analytics & Business Intelligence Consulting Company
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help organizations turn complex data into actionable insights by delivering end-to-end data analytics consulting — from scalable data platforms, BI dashboards, and reliable ETL pipelines to AI-driven analytics and expert project management.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-[1px] w-12 bg-white/50"></div>
            <p className="text-sm md:text-base text-white/80 font-light tracking-wide uppercase">
              Trusted by enterprise teams and fast-scaling organizations
            </p>
            <div className="h-[1px] w-12 bg-white/50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#4DB6E3] text-white hover:bg-[#3da0c9] font-medium text-lg px-10 py-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
