import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
// Using minimal lucide imports - icons defined inline
const ArrowRight = ({ size = 20, strokeWidth = 2, className = '' }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Calendar = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const Clock = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    title: 'How Enterprises Turn Data into Strategic Decisions',
    excerpt: 'Many organizations collect vast amounts of data but struggle to convert it into actionable insight. This article explores how enterprise teams can move beyond dashboards to build analytics foundations that truly support strategic decision-making.',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: '6 min read',
    slug: '/insights/how-enterprises-turn-data-into-decisions',
    tags: ['Data Strategy', 'Analytics', 'Decision-Making'],
  },
];

export default function InsightsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Insights & Articles | Data Analytics & BI Strategy | AngelAivia';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on data analytics consulting, BI strategy, data architecture, and modern analytics approaches from AngelAivia.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Expert insights on data analytics consulting, BI strategy, data architecture, and modern analytics approaches from AngelAivia.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
                Insights & Articles
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                Practical perspectives on data analytics consulting, BI strategy, and modern analytics delivery
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-16 lg:py-24 bg-neutral">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {articles.map((article, index) => (
                  <motion.article
                    key={article.slug}
                    className="bg-white rounded-xl p-8 lg:p-10 border border-gray-200 hover:border-tertiary transition-all duration-300 cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => navigate(article.slug)}
                  >
                    {/* Article Meta */}
                    <div className="flex items-center gap-4 mb-4 text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-small">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="text-small">{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h2 className="text-h2 lg:text-[2rem] font-headline font-semibold text-gray-900 mb-4 group-hover:text-tertiary transition-colors">
                      {article.title}
                    </h2>

                    {/* Article Excerpt */}
                    <p className="text-body text-gray-700 font-light leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-small font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-tertiary group-hover:gap-4 transition-all duration-200">
                      <span className="text-body font-semibold">Read the article</span>
                      <ArrowRight size={20} strokeWidth={2} />
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Optional Closing Paragraph */}
              <motion.div
                className="mt-16 bg-blue-50 rounded-xl p-8 border-l-4 border-tertiary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-body text-gray-700 font-light leading-relaxed">
                  Our insights reflect how modern organizations approach analytics strategy, BI architecture, and executive reporting. As we continue publishing, this space will highlight proven approaches to building trusted, scalable analytics capabilities.
                </p>
              </motion.div>

              {/* Internal Linking Section */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-body text-gray-700 font-light leading-relaxed mb-6">
                  Learn more about our <a href="/data-analytics-consulting" className="text-tertiary font-semibold hover:underline">data analytics consulting services</a> and how we help organizations turn data into decisions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
