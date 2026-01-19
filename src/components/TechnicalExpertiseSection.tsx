import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const expertiseCategories = [
  {
    title: 'Data Visualization',
    tools: [
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
      { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { name: 'Looker', icon: 'https://cdn.worldvectorlogo.com/logos/looker.svg' },
      { name: 'Excel/VBA', icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-excelvba.jpg' },
    ],
  },
  {
    title: 'Cloud Platforms',
    tools: [
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { name: 'Google Cloud', icon: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
      { name: 'Azure', icon: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg' },
      { name: 'Snowflake', icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-snowflake-logo.jpg' },
    ],
  },
  {
    title: 'ETL & Data Processing',
    tools: [
      { name: 'Airflow', icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-airflow.jpg' },
      { name: 'Hamerstone', icon: 'https://avatars.githubusercontent.com/u/88753590?s=200&v=4' },
      { name: 'AWS Glue', icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-glue-etl-logo.jpg' },
      { name: 'SSIS', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
    ],
  },
  {
    title: 'Databases',
    tools: [
      { name: 'PostgreSQL', icon: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
      { name: 'Redshift', icon: 'https://cdn.worldvectorlogo.com/logos/aws-redshift-logo.svg' },
      { name: 'SQL Server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
      { name: 'Access', icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-access.jpg' },
    ],
  },
  {
    title: 'Programming & Analytics',
    tools: [
      { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
      { name: 'JavaScript', icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-javascript-logo.jpg' },
      { name: 'ANSI SQL', icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
      { name: 'HTML', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    tools: [
      { name: 'ChatGPT', icon: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
      { name: 'Claude', icon: 'https://c.animaapp.com/mj1tk1o0j9U2sS/img/logo-claude-logo.jpg' },
      { name: 'Gemini', icon: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
      { name: 'Cursor', icon: 'https://www.cursor.com/brand/icon.svg' },
    ],
  },
];

export default function TechnicalExpertiseSection() {
  return (
    <section id="technical-expertise" className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-[2.5rem] font-headline font-medium text-neutral-foreground mb-6 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-body text-neutral-foreground max-w-3xl mx-auto font-light leading-relaxed">
            AngelAivia's data analytics consulting expertise spans cloud platforms, BI tools, data engineering frameworks, and modern analytics technologies. We help organizations design, build, and scale analytics solutions—from ETL pipelines and data warehousing to executive dashboards and self-service reporting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {expertiseCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full bg-card text-card-foreground border-gray-200 p-8 hover:border-tertiary transition-all duration-200">
                <h3 className="text-h3 font-headline font-medium text-card-foreground mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-neutral/50 hover:bg-tertiary/10 transition-all duration-200 cursor-pointer group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 flex items-center justify-center p-3">
                        <img
                          src={tool.icon}
                          alt={`${tool.name} logo`}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-200"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full bg-tertiary/20 rounded-lg flex items-center justify-center text-tertiary font-semibold text-small">${tool.name.substring(0, 2)}</div>`;
                            }
                          }}
                        />
                      </div>
                      <span className="text-small text-card-foreground font-medium text-center">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-h3 font-headline font-medium text-neutral-foreground mb-8">
            And Many More...
          </h3>
          <div className="max-w-7xl mx-auto px-12 space-y-2">
            {/* First Row */}
            <div className="flex justify-center gap-1.5 flex-wrap">
              {[
                'MySQL',
                'QuickSight',
                'S3',
                'Athena/Presto',
                'DataGrip',
                'Google Cloud',
                'Google Sheets',
                'PLX',
                'Looker',
                'Visual Studio Code',
                'Code Review',
                'Microsoft 365',
                'QlikView',
              ].map((tool, index) => (
                <motion.span
                  key={tool}
                  className="px-2 py-0.5 bg-card text-card-foreground rounded-full text-xs font-medium border border-gray-200 hover:border-tertiary hover:bg-tertiary/5 transition-all duration-200 cursor-pointer whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
            {/* Second Row */}
            <div className="flex justify-center gap-1.5 flex-wrap">
              {[
                'Visio',
                'BIRT',
                'IQS',
                'Trackvia',
                'ChatGPT Prompt Engineering',
                'AI-Assisted Analytics',
                'Make.com',
                'Voiceflow',
                'HeyGen',
                'Filmora AI',
                'Cloudflare',
                'Reptile',
                'Perplexity',
              ].map((tool, index) => (
                <motion.span
                  key={tool}
                  className="px-2 py-0.5 bg-card text-card-foreground rounded-full text-xs font-medium border border-gray-200 hover:border-tertiary hover:bg-tertiary/5 transition-all duration-200 cursor-pointer whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
