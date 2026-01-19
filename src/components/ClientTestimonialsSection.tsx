import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
// Minimal lucide imports - using inline SVGs for icons
const Star = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);
import { useState } from 'react';

const testimonials = [
  {
    quote: "AngelAivia's strategic guidance helped us prioritize our data initiatives and achieve measurable ROI within the first quarter. Their business acumen matched their technical skills.",
    author: "Chief Technology Officer",
    company: "Financial Services",
    year: "2024",
    tags: ["Strategy", "ROI", "Business Value"],
  },
  {
    quote: "AI didn't replace our analytics team — it made them exponentially more effective. Decisions are faster, insights are clearer, and leaders trust what they see.",
    author: "Senior Executive Sponsor",
    company: "Global Organization",
    year: "2024",
    tags: ["AI Analytics", "Productivity", "Trust"],
  },
  {
    quote: "AngelAivia's expertise in data visualization transformed how we understand our business. The dashboards they created have become essential tools for our leadership team.",
    author: "Chief Data Officer",
    company: "Fortune 500 Company",
    year: "2023",
    tags: ["Data Visualization", "Dashboards", "Leadership"],
  },
  {
    quote: "AngelAivia brings rare dedication, deep expertise, and a genuine commitment to enabling others' success. Their hands-on support made a lasting impact, and their professionalism set a high standard.",
    author: "Senior BI Consultant",
    company: "Global Consulting Firm",
    year: "2025",
    tags: ["Leadership", "Mentorship", "Expertise"],
  },
  {
    quote: "AngelAivia is one of the most impactful contributors we've worked with. They adapt quickly, operate autonomously, and consistently deliver high-quality outcomes. Their documentation and knowledge sharing elevated the entire team.",
    author: "Team Lead",
    company: "Technology Consulting Team",
    year: "2022",
    tags: ["Autonomy", "Fast learning", "Documentation"],
  },
  {
    quote: "AngelAivia demonstrated exceptional ownership, adaptability, and leadership. They delivered system and analytics solutions across multiple business functions while maintaining high standards of quality and collaboration.",
    author: "Director, Quality & Ops",
    company: "Manufacturing Enterprise",
    year: "2021",
    tags: ["Cross-functional", "Systems delivery", "Collaboration"],
  },
  {
    quote: "The solution transformed our data infrastructure from a liability into a strategic asset. The new platform has enabled us to make faster, more informed decisions while significantly reducing operational costs.",
    author: "Senior Stakeholder",
    company: "Global Financial Institution",
    year: "2023",
    tags: ["Data Architecture", "ETL", "Cost Reduction"],
  },
  {
    quote: "Working with AngelAivia was a game-changer for our analytics capabilities. They not only delivered technical excellence but also trained our team to maintain and evolve the solutions independently.",
    author: "VP of Analytics",
    company: "Healthcare Provider",
    year: "2022",
    tags: ["Training", "Knowledge Transfer", "Analytics"],
  },
  {
    quote: "The ETL pipelines AngelAivia built are still running flawlessly years later. Their attention to detail and focus on scalability saved us countless hours of maintenance.",
    author: "Data Engineering Manager",
    company: "E-commerce Platform",
    year: "2020",
    tags: ["ETL", "Scalability", "Reliability"],
  },
  {
    quote: "The real-time dashboards delivered by AngelAivia gave us competitive advantage we didn't know was possible. Performance visibility improved dramatically across all teams.",
    author: "Operations Director",
    company: "Logistics Company",
    year: "2023",
    tags: ["Real-time", "Performance", "Competitive Edge"],
  },
  {
    quote: "AngelAivia's product management expertise helped us launch our data product ahead of schedule. Their user-centric approach ensured high adoption rates from day one.",
    author: "Product Manager",
    company: "SaaS Startup",
    year: "2024",
    tags: ["Product Management", "User Experience", "Adoption"],
  },
  {
    quote: "The data governance framework AngelAivia established brought order to chaos. We now have confidence in our data quality and compliance processes.",
    author: "Chief Compliance Officer",
    company: "Banking Institution",
    year: "2022",
    tags: ["Governance", "Compliance", "Data Quality"],
  },
  {
    quote: "AngelAivia's AI implementation was thoughtful and practical. They focused on real business value rather than technology for its own sake, which made all the difference.",
    author: "Head of Innovation",
    company: "Retail Enterprise",
    year: "2024",
    tags: ["AI/ML", "Innovation", "Business Value"],
  },
];

export default function ClientTestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#223246' }}>
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-body text-white max-w-3xl mx-auto font-light leading-relaxed">
            Organizations rely on AngelAivia for data analytics consulting, BI strategy, dashboard delivery, and scalable analytics foundations that leaders trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            >
              <Card className="h-full bg-card text-card-foreground border-gray-200 hover:border-tertiary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-5">
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="mb-3">
                    <img 
                      src="https://c.animaapp.com/mj1tk1o0j9U2sS/img/image_7.png" 
                      alt="quote icon" 
                      className="w-8 h-8 opacity-30"
                      loading="lazy"
                    />
                  </div>
                  
                  <p className="text-small text-card-foreground font-light leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-small font-semibold text-card-foreground mb-2">
                      {testimonial.author} • {testimonial.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {testimonial.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-xs font-medium border"
                          style={{ borderColor: '#42BBE9', color: '#42BBE9' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-tertiary text-white rounded-lg font-medium hover:bg-[hsl(194,83%,48%)] transition-colors"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                Show All
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </motion.div>

        {/* Footnote */}
        <motion.div
          className="text-center mt-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4 className="text-small font-semibold mb-2" style={{ color: '#7F7F7F' }}>
            Confidentiality & References
          </h4>
          <p className="text-xs leading-relaxed" style={{ color: '#7F7F7F' }}>
            Client testimonials featured on this website are adapted from direct stakeholder feedback across prior engagements led by AngelAivia's founding team. Individual names and, in some cases, client organizations are anonymized to respect confidentiality and contractual obligations. Full references may be provided upon request where appropriate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
