import { motion } from 'framer-motion';

const clientBrands = [
  {
    name: 'Relteck',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-relteck_1.jpg',
  },
  {
    name: 'AWS',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-aws_1.jpg',
  },
  {
    name: 'Google Cloud',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-google_2.jpg',
  },
  {
    name: 'TATA',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-tata_1.jpg',
  },
  {
    name: 'Lake Cable',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-lakecable_1.jpg',
  },
  {
    name: 'NCB',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-ncb_2.jpg',
  },
  {
    name: 'Bank AlJazira',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-bankaljazira_1.jpg',
  },
  {
    name: 'Educational Institution',
    logo: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-co-school_2.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="clients" className="py-24 lg:py-32 bg-white text-gray-900 overflow-hidden">
      <div className="w-full px-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-gray-900 mb-6 tracking-tight">
            Trusted By Industry Leaders
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            We've partnered with leading organizations to deliver transformative data solutions
          </p>
        </motion.div>

        {/* Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {/* First set of logos */}
            {clientBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-1`}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-6 border border-gray-300 hover:border-tertiary transition-all duration-300 w-72 h-40 flex items-center justify-center group hover:scale-105 hover:shadow-lg">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientBrands.map((brand) => (
              <div
                key={`${brand.name}-2`}
                className="flex-shrink-0"
              >
                <div className="bg-white rounded-lg p-6 border border-gray-300 hover:border-tertiary transition-all duration-300 w-72 h-40 flex items-center justify-center group hover:scale-105 hover:shadow-lg">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-body text-gray-600 font-light leading-relaxed">
            Join the growing list of organizations that trust AngelAivia for their data transformation needs
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
