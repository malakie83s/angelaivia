import { motion } from 'framer-motion';
// Using minimal lucide-react imports - icons defined inline to reduce bundle size

const approachSteps = [
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
];

export default function ApproachSection() {
  return (
    <section id="approach" className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-neutral text-neutral-foreground relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-[2rem] font-headline font-medium text-neutral-foreground mb-4 tracking-tight">
            Our Approach
          </h2>
          <p className="text-small text-neutral-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Here is how we work with you to deliver exceptional results :
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {approachSteps.map((step, index) => {
            return (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bg-card rounded-xl p-6 border border-gray-700 hover:border-tertiary transition-all duration-300 h-full text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  {/* Number */}
                  <div className="text-xs font-semibold text-tertiary mb-2 uppercase tracking-wider">
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
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-small text-secondary-foreground font-light leading-relaxed mb-4">
            Ready to transform your data challenges into opportunities?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary text-tertiary-foreground rounded-lg font-medium hover:bg-[hsl(194,83%,48%)] transition-colors text-small"
          >
            Let's Get Started
            <svg
              width="16"
              height="16"
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
    </section>
  );
}
