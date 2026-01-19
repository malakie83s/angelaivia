import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-databaseengineer.png',
    title: 'Data Architecture & Modeling Consulting',
    description: 'Design scalable data architectures and analytics models (star/snowflake) that support trusted reporting, self-service analytics, and long-term growth.',
  },
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-erp.png',
    title: 'ERP Analytics UI & Reporting Design',
    description: 'Create intuitive ERP analytics experiences that improve adoption—streamlining workflows, reporting visibility, and decision-making across teams.',
  },
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-etl.png',
    title: 'ETL & Data Pipeline Development',
    description: 'Build reliable ETL pipelines that improve data quality, integrity, and timeliness. Reduce failure rates, latency, and reconciliation overhead.',
  },
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-bi-vizulization.png',
    title: 'BI Dashboards & Data Visualization Consulting',
    description: 'Deliver executive-ready dashboards in Tableau, Power BI, and modern BI tools—turning complex metrics into clear, actionable insights.',
  },
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-dataanalysis.png',
    title: 'Business Intelligence (BI) Consulting Services',
    description: 'Establish BI standards, semantic layers, and reporting governance that enable consistent metrics, trusted insights, and scalable analytics delivery.',
  },
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-ai-white.jpg',
    title: 'AI-Driven Analytics & Automation',
    description: 'Automate repetitive analytics and validation tasks using AI-assisted workflows, templates, and intelligent processes—improving speed and productivity.',
  },
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-project-management.png',
    title: 'Analytics Project & Delivery Management',
    description: 'Lead analytics delivery end-to-end with stakeholder alignment, structured execution, and outcomes-focused project management.',
  },
  {
    icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/image_3.png',
    title: 'Data Strategy & Analytics Consulting',
    description: 'Define analytics roadmaps aligned to business goals—prioritizing high-value use cases, platform direction, and measurement frameworks.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-neutral-foreground mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-body text-neutral-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive consulting solutions tailored to your data, analytics, and technology needs—built for scalability, quality, and measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card text-card-foreground border-gray-200 hover:border-tertiary transition-all duration-200 cursor-pointer hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4 mx-auto p-4">
                    <img 
                      src={service.icon} 
                      alt={`${service.title} icon`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-tertiary/20 rounded-lg flex items-center justify-center text-tertiary font-semibold text-small">${service.title.substring(0, 2)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <CardTitle className="text-body font-headline font-medium text-card-foreground text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-small text-card-foreground font-light leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
