import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
// Using minimal lucide imports - icons defined inline
const ArrowRight = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Simple CheckCircle component
const CheckCircle = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
import { useNavigate } from 'react-router-dom';

export default function BusinessIntelligenceConsultingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Business Intelligence Consulting Services | Executive Dashboards & KPIs | AngelAivia';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Business intelligence consulting services focused on executive dashboards, KPIs, and leadership visibility. Expert Tableau, Power BI, and BI strategy consulting.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Business intelligence consulting services focused on executive dashboards, KPIs, and leadership visibility. Expert Tableau, Power BI, and BI strategy consulting.';
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    {
      title: 'Executive Dashboards & KPIs',
      description: 'We design leadership-ready dashboards that surface the right metrics at the right time—enabling faster, more confident decisions.',
    },
    {
      title: 'Tableau & Power BI Consulting',
      description: 'We build high-performance dashboards in Tableau, Power BI, and modern BI platforms—optimized for clarity, speed, and adoption.',
    },
    {
      title: 'Semantic Models & Metrics Governance',
      description: 'We establish consistent business logic and metric definitions that prevent confusion and ensure alignment across teams.',
    },
    {
      title: 'Self-Service Analytics Enablement',
      description: 'We empower business users to explore data independently—reducing analyst bottlenecks and improving time-to-insight.',
    },
    {
      title: 'BI Strategy & Roadmap',
      description: 'We align BI investments to business priorities—ensuring teams focus on high-impact reporting and analytics use cases.',
    },
  ];

  const whyChooseUs = [
    'Decision-focused dashboards, not just data displays',
    'Executive-grade visualization and storytelling',
    'Scalable BI architecture for long-term growth',
    'Clear communication with leadership stakeholders',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-secondary text-white">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 tracking-tight">
                Business Intelligence Consulting Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
                AngelAivia delivers business intelligence consulting focused on executive dashboards, KPIs, and leadership visibility. We help organizations turn data into decision-support systems—with Tableau, Power BI, and modern BI platforms that leaders trust and teams rely on daily.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-tertiary text-white hover:bg-[hsl(194,83%,48%)] font-semibold text-lg px-10 py-6"
              >
                Request a Discovery Call
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What is Business Intelligence Consulting */}
        <section className="py-16 lg:py-24 bg-neutral">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-6">
                What is Business Intelligence Consulting?
              </h2>
              <p className="text-body text-gray-700 font-light leading-relaxed mb-4">
                Business intelligence (BI) consulting helps organizations design and deliver reporting systems that improve leadership visibility and decision-making. It focuses on dashboards, KPIs, semantic models, and executive reporting—ensuring that the right insights reach the right people at the right time.
              </p>
              <p className="text-body text-gray-700 font-light leading-relaxed">
                Unlike broader <a href="/data-analytics-consulting" className="text-tertiary font-semibold hover:underline">data analytics consulting</a> (which includes data architecture, ETL pipelines, and platform strategy), BI consulting centers on insight delivery—dashboards, metrics, and reporting that drive action.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-8">
                Who We Help
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Executive teams needing clear, actionable KPIs',
                  'Organizations modernizing BI dashboards and reporting',
                  'Leaders seeking trusted metrics and consistent definitions',
                  'Teams enabling self-service analytics for business users',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle size={24} className="text-tertiary flex-shrink-0 mt-1" />
                    <p className="text-body text-gray-700 font-light leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our BI Consulting Services */}
        <section className="py-16 lg:py-24 bg-neutral">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-12 text-center">
                Our Business Intelligence Consulting Services
              </h2>
              <div className="space-y-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-xl p-8 border border-gray-200 hover:border-tertiary transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-body text-gray-700 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* BI Tools & Platforms */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-6">
                BI Tools & Platforms We Work With
              </h2>
              <p className="text-body text-gray-700 font-light leading-relaxed mb-8">
                We deliver BI solutions across leading platforms including Tableau, Power BI, Looker, and cloud-native analytics tools.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Tableau',
                  'Power BI',
                  'Looker',
                  'QuickSight',
                  'Cognos',
                  'Excel',
                  'Google Sheets',
                  'Snowflake',
                  'BigQuery',
                  'Redshift',
                ].map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-small font-medium border border-gray-200 hover:border-tertiary hover:bg-tertiary/5 transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose AngelAivia */}
        <section className="py-16 lg:py-24 bg-neutral">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-8">
                Why Choose AngelAivia for BI Consulting
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle size={24} className="text-tertiary flex-shrink-0 mt-1" />
                    <p className="text-body text-gray-700 font-light leading-relaxed">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How BI Consulting Complements Data Analytics */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-gray-900 mb-6">
                How BI Consulting Complements Data Analytics
              </h2>
              <p className="text-body text-gray-700 font-light leading-relaxed mb-6">
                Business intelligence consulting and <a href="/data-analytics-consulting" className="text-tertiary font-semibold hover:underline">data analytics consulting</a> work together to deliver complete analytics solutions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-tertiary">
                  <h3 className="text-body font-semibold text-gray-900 mb-3">
                    Data Analytics Consulting
                  </h3>
                  <p className="text-small text-gray-700 font-light leading-relaxed mb-3">
                    Focuses on foundations, platforms, pipelines, and analytics strategy:
                  </p>
                  <ul className="space-y-2 text-small text-gray-700 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary mt-1">→</span>
                      <span>Data architecture & modeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary mt-1">→</span>
                      <span>ETL pipelines & data engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary mt-1">→</span>
                      <span>Cloud analytics platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary mt-1">→</span>
                      <span>Analytics strategy & roadmaps</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-body font-semibold text-gray-900 mb-3">
                    Business Intelligence Consulting
                  </h3>
                  <p className="text-small text-gray-700 font-light leading-relaxed mb-3">
                    Focuses on insight delivery, dashboards, and executive visibility:
                  </p>
                  <ul className="space-y-2 text-small text-gray-700 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span>Executive dashboards & KPIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span>Tableau & Power BI development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span>Semantic models & metrics governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span>Self-service analytics enablement</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-body text-gray-700 font-light leading-relaxed mt-6">
                Together, they create complete analytics solutions—from reliable data foundations to executive-ready insights.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary to-primary text-white">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold mb-6">
                Get Started with BI Consulting
              </h2>
              <p className="text-lg text-white/90 mb-8 font-light leading-relaxed">
                Ready to improve leadership visibility with trusted dashboards and KPIs?
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-tertiary text-white hover:bg-[hsl(194,83%,48%)] font-semibold text-lg px-10 py-6"
              >
                Request a Discovery Call
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
