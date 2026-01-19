import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

// Inline icons
const ChevronDown = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What services does AngelAivia provide?',
        answer: 'AngelAivia provides data analytics and business intelligence consulting services, including data architecture, ETL development, BI dashboards, cloud analytics platforms, and analytics program delivery.',
      },
      {
        question: 'What industries do you work with?',
        answer: 'AngelAivia works with organizations across multiple industries, including financial services, healthcare, retail, manufacturing, technology, and e-commerce. Our expertise in data architecture, BI platforms, and analytics strategy applies to any organization looking to improve decision-making with trusted data.',
      },
      {
        question: 'Where is AngelAivia located?',
        answer: 'AngelAivia operates as a remote-first consulting firm and serves clients globally across North America, Europe, the Middle East, and Asia-Pacific.',
      },
    ],
  },
  {
    category: 'Services & Engagement',
    questions: [
      {
        question: 'What is the difference between Data Analytics Consulting and Business Intelligence Consulting?',
        answer: 'Data analytics consulting focuses on data foundations and advanced analysis, while business intelligence consulting focuses on reporting, dashboards, KPIs, and executive visibility. Business Intelligence Consulting focuses on insight delivery—executive dashboards, KPIs, Tableau/Power BI development, and leadership visibility. Both work together to create complete analytics solutions.',
      },
      {
        question: 'How long does a typical engagement last?',
        answer: 'A typical analytics engagement lasts between 4 and 12 weeks, depending on scope, data complexity, and implementation approach. Discovery assessments typically take 2-4 weeks. Dashboard and reporting projects range from 4-12 weeks. Full platform implementations (data architecture, ETL, BI) can span 3-9 months. We work in iterative phases to deliver value incrementally.',
      },
      {
        question: 'Do you offer ongoing support after project delivery?',
        answer: 'Yes, AngelAivia provides ongoing post-delivery support, including performance monitoring, optimization, troubleshooting, and team enablement. Support can be structured as retainer-based or on-demand depending on client needs.',
      },
      {
        question: 'Can you work with our existing tools and platforms?',
        answer: 'Yes, AngelAivia works with existing BI, data, and cloud platforms and adapts solutions to each client’s current technology stack. We work across modern BI and cloud ecosystems including Tableau, Power BI, AWS, Google Cloud, Azure, Snowflake, SQL databases, Python, and data engineering frameworks. We adapt to your existing technology stack.',
      },
    ],
  },
  {
    category: 'Process & Approach',
    questions: [
      {
        question: 'What does your discovery process look like?',
        answer: 'AngelAivia’s discovery process assesses current data environments, stakeholder needs, and business objectives to define a clear analytics roadmap. We typically complete discovery in 2-4 weeks, resulting in a clear roadmap and prioritized recommendations.',
      },
      {
        question: 'How do you ensure data quality and governance?',
        answer: 'AngelAivia ensures data quality and governance through validation rules, reconciliations, metric definitions, lineage tracking, and monitoring processes. We also implement monitoring and alerting to catch issues early and maintain trust in reporting.',
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Yes, AngelAivia provides hands-on training, documentation, and enablement to help teams maintain and evolve analytics solutions independently. We provide hands-on training, documentation, and ongoing support to ensure your team can maintain and evolve solutions independently.',
      },
      {
        question: 'How do you measure project success?',
        answer: 'Project success is measured against predefined KPIs such as data accuracy, time-to-insight reduction, user adoption, and stakeholder satisfaction. Common metrics include: processing time reduction, report accuracy improvement, user adoption rates, time-to-insight reduction, and stakeholder satisfaction scores.',
      },
    ],
  },
  {
    category: 'Technical & Tools',
    questions: [
      {
        question: 'What BI tools do you specialize in?',
        answer: 'AngelAivia specializes in leading BI platforms including Tableau, Power BI, Looker, QuickSight, and Excel-based reporting solutions. We also work with cloud-native BI platforms and custom visualization solutions depending on client requirements.',
      },
      {
        question: 'Do you work with cloud platforms?',
        answer: 'Yes, AngelAivia designs and implements analytics solutions on major cloud platforms including AWS, Google Cloud, Azure, and Snowflake. We help organizations design and implement cloud analytics architectures.',
      },
      {
        question: 'Can you help with AI and machine learning projects?',
        answer: 'Yes, AngelAivia delivers AI-powered analytics solutions such as predictive modeling, anomaly detection, and automated insight generation. We focus on practical AI applications that deliver measurable business value.',
      },
      {
        question: 'What programming languages do you use?',
        answer: 'AngelAivia primarily works with SQL, Python, JavaScript, VBA, and related technologies based on project requirements. Our technical stack adapts to project requirements and client environments.',
      },
    ],
  },
  {
    category: 'Pricing & Engagement',
    questions: [
      {
        question: 'How do you structure pricing?',
        answer: 'Pricing is structured as project-based or retainer-based, depending on engagement scope, duration, and delivery model. We provide transparent estimates after discovery, with fees structured by milestone, phase, or monthly retainer. A non-refundable deposit is required to initiate engagements.',
      },
      {
        question: 'Do you offer fixed-price projects?',
        answer: 'Yes, AngelAivia offers fixed-price engagements for well-defined scopes and clearly defined deliverables. After discovery, we can provide fixed-price proposals for specific deliverables such as dashboard development, ETL pipeline implementation, or data model design.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'AngelAivia’s cancellation policy outlines non-refundable deposits, payable completed work, and refunds for unearned prepaid fees when applicable. Completed work remains payable. If AngelAivia cannot complete an engagement, unearned prepaid fees will be refunded. Specific terms are outlined in individual service agreements.',
      },
    ],
  },
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I get started?',
        answer: 'Engagements begin with a discovery call to understand business goals, challenges, and timelines before defining next steps. We\'ll schedule a 30-minute intro to understand your goals, challenges, and timelines. From there, we\'ll outline next steps and provide a proposal if there\'s a good fit.',
      },
      {
        question: 'What information should I prepare for the discovery call?',
        answer: 'Preparing for a discovery call involves outlining current data challenges, business objectives, tools, team structure, and success criteria. The more context you provide, the more productive the conversation.',
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes, AngelAivia routinely signs NDAs and confidentiality agreements to protect client information. Confidentiality is standard practice for all engagements.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'FAQ - Frequently Asked Questions | AngelAivia';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about AngelAivia\'s data analytics consulting, BI services, engagement process, pricing, and technical expertise.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Frequently asked questions about AngelAivia\'s data analytics consulting, BI services, engagement process, pricing, and technical expertise.';
      document.head.appendChild(meta);
    }
  }, []);

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-primary to-secondary text-white">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                Clear answers to common questions about data analytics, business intelligence, and working with AngelAivia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24 bg-neutral">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  {/* Category Title */}
                  <h2 className="text-h2 font-headline font-semibold text-gray-900 mb-6">
                    {category.category}
                  </h2>

                  {/* Questions */}
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openItems[key];

                      return (
                        <div
                          key={questionIndex}
                          className="bg-white rounded-lg border border-gray-200 hover:border-tertiary transition-all duration-200"
                        >
                          {/* Question Button */}
                          <button
                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <span className="text-body font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              size={20}
                              className={`text-tertiary flex-shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Answer */}
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6"
                            >
                              <p className="text-body text-gray-700 font-light leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}

              {/* Still Have Questions CTA */}
              <motion.div
                className="mt-16 bg-gradient-to-r from-tertiary/10 to-blue-50 rounded-xl p-8 border-2 border-tertiary/30 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-h3 font-headline font-semibold text-gray-900 mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-body text-gray-700 font-light leading-relaxed mb-6">
                  We're here to help. Reach out to discuss your specific needs and how we can support your analytics goals.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-tertiary text-white rounded-lg font-semibold hover:bg-[hsl(194,83%,48%)] transition-colors"
                >
                  Contact Us
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
