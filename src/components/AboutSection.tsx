import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - 2007;

const stats = [
  { value: yearsExperience, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-h1 lg:text-[3rem] font-headline font-medium text-neutral-foreground">
      {count}
      {suffix}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-8 lg:px-16">
        {/* About AngelAivia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://c.animaapp.com/mj1tk1o0j9U2sS/img/ai_2.png"
              alt="consulting discussion office"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-neutral-foreground mb-8 tracking-tight">
              About AngelAivia
            </h2>
            <p className="text-body text-neutral-foreground mb-8 font-light leading-relaxed">
              AngelAivia is a data analytics and business intelligence consulting company helping organizations unlock measurable value from their data. We combine deep technical expertise in cloud analytics, data architecture, and BI platforms with strong business context to deliver scalable, high-impact analytics solutions.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border-l-4 border-tertiary">
              <h3 className="text-h3 font-headline font-medium text-neutral-foreground mb-4">
                What Sets Us Apart?
              </h3>
              <p className="text-body text-neutral-foreground font-light leading-relaxed">
                We don't just deliver analytics solutions — we build foundations that last. Our work is designed with durability, clarity, and scalability in mind, so teams continue to rely on it long after delivery. Even as organizations evolve and new hires join, our dashboards, data models, and documentation remain trusted reference points — a testament to the quality and longevity of our work.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-body text-neutral-foreground font-light mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-body text-neutral-foreground font-light leading-relaxed mt-8">
              Our approach combines technical excellence with business acumen, ensuring that every solution we deliver drives measurable impact and sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Our Approach */}
        <div className="mt-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-neutral-foreground mb-6 tracking-tight">
              Our Approach
            </h2>
            <p className="text-body text-neutral-foreground font-light leading-relaxed mb-4">
              Our approach combines technical excellence with business acumen, ensuring that every solution we deliver drives measurable impact and sustainable growth.
            </p>
            <p className="text-body text-neutral-foreground font-light leading-relaxed">
              Here is how we work with you to deliver exceptional results:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: '💡',
                number: '01',
                title: 'Discovery & Assessment',
                description: 'Understanding your business objectives, data landscape, and pain points to identify opportunities and define success metrics.',
              },
              {
                icon: '👥',
                number: '02',
                title: 'Strategy & Design',
                description: 'Developing comprehensive roadmaps with scalable architectures, data models, and validated prototypes.',
              },
              {
                icon: '🚀',
                number: '03',
                title: 'Implementation & Delivery',
                description: 'Executing with agility in iterative sprints, ensuring quality through continuous testing and knowledge transfer.',
              },
              {
                icon: '📈',
                number: '04',
                title: 'Optimization & Support',
                description: 'Monitoring performance, gathering feedback, and providing ongoing support for continuous improvement.',
              }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-tertiary transition-all duration-300 h-full text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  {/* Number */}
                  <div className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#42BBE9' }}>
                    Step {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-body font-headline font-medium text-card-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-small text-card-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-body text-neutral-foreground font-light leading-relaxed mb-6">
              Ready to transform your data challenges into opportunities?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-tertiary text-white rounded-lg font-semibold hover:bg-[hsl(194,83%,48%)] transition-colors"
            >
              Let's Get Started
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
