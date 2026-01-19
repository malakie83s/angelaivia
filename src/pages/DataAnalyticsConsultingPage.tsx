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

export default function DataAnalyticsConsultingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update page title and meta description
    document.title = 'Data Analytics Consulting Services | BI Dashboards & Cloud Analytics | AngelAivia';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Data analytics consulting services for modern businesses. Expert BI dashboards, cloud analytics, ETL pipelines, and data architecture consulting.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Data analytics consulting services for modern businesses. Expert BI dashboards, cloud analytics, ETL pipelines, and data architecture consulting.';
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    {
      title: 'Business Intelligence & Dashboards',
      description: 'We build executive dashboards and operational reporting that make performance visible and actionable.',
    },
    {
      title: 'Data Architecture & Modeling',
      description: 'We design scalable data foundations and analytics models (star/snowflake) to ensure trusted metrics and consistent reporting.',
    },
    {
      title: 'ETL & Data Pipelines',
      description: 'We develop reliable pipelines that improve data quality, reduce latency, and support timely decision-making.',
    },
    {
      title: 'Cloud Analytics',
      description: 'We implement modern cloud analytics solutions to support scale, security, and cost efficiency.',
    },
    {
      title: 'Analytics Strategy',
      description: 'We align analytics roadmaps to business priorities—so teams focus on the highest-impact use cases.',
    },
  ];

  const whyAngelAivia = [
    'Outcome-focused consulting with measurable impact',
    'Strong engineering discipline for reliable delivery',
    'Clear communication for executive stakeholders',
    'Scalable solutions designed for long-term growth',
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
                Data Analytics Consulting Services for Modern Businesses
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
                AngelAivia is a data analytics and business intelligence consulting company helping organizations transform raw data into actionable insights. We deliver scalable analytics solutions—from reliable ETL pipelines and modern data architecture to executive dashboards and performance reporting.
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

        {/* What is Data Analytics Consulting */}
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
                  What is Data Analytics Consulting?
                </h2>
                <p className="text-body text-gray-700 font-light leading-relaxed mb-4">
                  Data analytics consulting helps organizations build scalable analytics foundations—from data architecture and ETL pipelines to cloud platforms and analytics strategy. It focuses on the infrastructure and processes that enable reliable, trusted analytics delivery.
                </p>
                <p className="text-body text-gray-700 font-light leading-relaxed">
                  For insight delivery and executive reporting, see our <a href="/business-intelligence-consulting" className="text-tertiary font-semibold hover:underline">business intelligence consulting services</a>, which focus on dashboards, KPIs, and leadership visibility.
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
                  'Enterprise teams needing scalable analytics delivery',
                  'Growing organizations seeking modern BI dashboards',
                  'Leaders requiring executive-ready reporting',
                  'Teams modernizing cloud analytics and data platforms',
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

        {/* Our Services */}
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
                Our Data Analytics Consulting Services
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

        {/* Tools & Platforms */}
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
                Tools & Platforms
              </h2>
              <p className="text-body text-gray-700 font-light leading-relaxed mb-8">
                We work across modern BI and cloud ecosystems including Tableau, Power BI, cloud analytics platforms, SQL, and data engineering frameworks.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Tableau',
                  'Power BI',
                  'AWS',
                  'Google Cloud',
                  'Azure',
                  'Snowflake',
                  'SQL',
                  'Python',
                  'Airflow',
                  'dbt',
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

        {/* Why AngelAivia */}
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
                Why AngelAivia
              </h2>
              <div className="space-y-4">
                {whyAngelAivia.map((reason, index) => (
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
                Get Started
              </h2>
              <p className="text-lg text-white/90 mb-8 font-light leading-relaxed">
                Ready to improve decision-making with trusted analytics?
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
