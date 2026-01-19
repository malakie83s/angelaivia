import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// Using minimal lucide imports - icons defined inline
const ArrowRight = ({ size = 20, strokeWidth = 1.5, className = '' }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';
import CaseStudyModal2 from './CaseStudyModal2';
import CaseStudyModal3 from './CaseStudyModal3';
import CaseStudyModal4 from './CaseStudyModal4';

const caseStudies = [
  {
    title: 'Enterprise Data Analytics Platform',
    image: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/ai_2.png',
    alt: 'consulting discussion office',
    problem: 'Global financial institution needed to consolidate data from 50+ sources',
    solution: 'Implemented scalable ETL architecture reducing processing time by 70%',
  },
  {
    title: 'AI-Driven Analytics Automation',
    image: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/case_study_2%29ai-5.png',
    alt: 'AI-powered analytics and automation',
    problem: 'Analytics teams overwhelmed with repetitive manual tasks, spending excessive time on data validation and report generation',
    solution: 'Built AI-powered prompts and templates that automated recurring analysis tasks, achieving 30-50% time savings and enabling analysts to focus on strategic insights',
  },
  {
    title: 'Real-Time BI Dashboards',
    image: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/image_4.png',
    alt: 'F1 racing dashboard analytics',
    problem: 'Global teams lacked real-time visibility into critical performance metrics, limiting their ability to identify bottlenecks and act quickly under competitive pressure',
    solution: 'Designed and delivered real-time, performance-focused dashboards that aligned teams around actionable KPIs and increased execution efficiency by 60%, driving a #1 global (F1 Formula) outcome',
  },
  {
    title: 'Analytics Automation Tools Pack',
    image: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/case_study_3%29automation-file.png',
    alt: 'Excel VBA automation tools',
    problem: 'Teams need practical automation solutions to streamline BI workflows',
    solution: 'A curated set of automation ideas, templates, and tool tips designed to help teams test and scale their own BI workflows',
  },
];

export default function CaseStudiesSection() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);

  return (
    <>
      <CaseStudyModal isOpen={isModal1Open} onClose={() => setIsModal1Open(false)} />
      <CaseStudyModal2 isOpen={isModal2Open} onClose={() => setIsModal2Open(false)} />
      <CaseStudyModal3 isOpen={isModal3Open} onClose={() => setIsModal3Open(false)} />
      <CaseStudyModal4 isOpen={isModal4Open} onClose={() => setIsModal4Open(false)} />
      <section id="case-studies" className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-secondary-foreground mb-6 tracking-tight">
              Case Studies
            </h2>
            <p className="text-body text-secondary-foreground max-w-3xl mx-auto font-light leading-relaxed">
              These case studies highlight how our data analytics and business intelligence consulting services improve performance, automate reporting, and help teams scale decision-making with trusted data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full bg-card text-card-foreground border-gray-700 hover:border-tertiary transition-all duration-200 cursor-pointer overflow-hidden group flex flex-col"
                  onClick={() => {
                    if (index === 0) {
                      setIsModal1Open(true);
                    } else if (index === 1) {
                      setIsModal2Open(true);
                    } else if (index === 2) {
                      setIsModal3Open(true);
                    } else if (index === 3) {
                      setIsModal4Open(true);
                    }
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-h3 font-headline font-medium text-card-foreground">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <p className="text-small font-medium text-tertiary mb-2 uppercase tracking-wider">Problem</p>
                      <CardDescription className="text-body text-card-foreground font-light leading-relaxed">
                        {study.problem}
                      </CardDescription>
                    </div>
                    <div className="flex-1">
                      <p className="text-small font-medium text-tertiary mb-2 uppercase tracking-wider">Solution</p>
                      <CardDescription className="text-body text-card-foreground font-light leading-relaxed">
                        {study.solution}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-tertiary group-hover:gap-4 transition-all duration-200 pt-4 mt-auto">
                      <span className="text-small font-medium uppercase tracking-wider">View Case Study</span>
                      <ArrowRight size={20} strokeWidth={1.5} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
