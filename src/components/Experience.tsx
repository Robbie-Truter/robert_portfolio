import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "+OneX",
    period: "Oct 2023 - Present",
    desc: "Lead frontend development of two production web applications using React and TypeScript. Owned the frontend from initial concept to successful launch, focusing on clean architecture and responsive design.",
  },
  {
    role: "Junior Software Developer",
    company: "+OneX (Contract)",
    period: "April 2023 - Sept 2023",
    desc: "Developed interactive UI features from scratch using Vue. Optimized and refactored code to improve performance and usability.",
  },
  {
    role: "Intern Software Developer",
    company: "+OneX (Internship)",
    period: "April 2022 - April 2023",
    desc: "Developed reusable UI components using React, contributing to core product updates and delivering a highly stable, error-free user experience.",
  },
  {
    role: "Freelance Web Design",
    company: "Self-Employed",
    period: "Jan 2022 - April 2022",
    desc: "Designed visually compelling and professional UI layouts for freelance clients, optimizing information hierarchy and readability.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-matcha uppercase mb-12 flex items-center">
          <span className="w-8 h-px bg-lofi-matcha mr-4"></span>
          Journey
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                <div className="mb-2 md:mb-0 text-sm font-medium text-lofi-wood uppercase tracking-wider md:text-right">
                  {exp.period}
                </div>
                <div className="md:col-span-3 md:pl-8 md:border-l border-lofi-accent">
                  <h3 className="text-xl font-medium text-lofi-text mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-lofi-matcha mb-4 text-sm font-medium">
                    {exp.company}
                  </div>
                  <p className="text-lofi-text/70 font-light leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
