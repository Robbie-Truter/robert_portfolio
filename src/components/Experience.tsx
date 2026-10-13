import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "+OneX",
    type: "Full-time",
    period: "Mar 2024 – Present",
    bullets: [
      "Led frontend development of two production applications (RPS and TRIMS at Adams & Adams) using React and TypeScript.",
      "Built automated workflows using Copilot and Power Automate to streamline ticket logging, daily standup summaries, and alerts.",
      "Built rich user interfaces with TanStack Query, TanStack Table, ShadCN, and custom state management.",
      "Engineered client-side routing, responsive layouts, and aligned RESTful APIs with database teams.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "+OneX",
    type: "Contract",
    period: "Apr 2023 – Mar 2024",
    bullets: [
      "Developed interactive UI features and components from scratch using Vue.",
      "Maintained Node.js/Express REST APIs and optimised database schemas with SQL.",
      "Built unit test suites and integrated component libraries like Ant Design.",
    ],
  },
  {
    role: "Intern Software Developer",
    company: "+OneX",
    type: "Internship",
    period: "Apr 2022 – Apr 2023",
    bullets: [
      "Built reusable React components, resolved component bugs, and accelerated development using React Table & React Forms.",
    ],
  },
  {
    role: "Freelance CV Design",
    company: "Self-Employed",
    type: "Freelance",
    period: "Jan 2022 – Apr 2022",
    bullets: [
      "Crafted visually compelling, professional CV layouts for clients, optimising hierarchy and typography.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-amber uppercase mb-12 flex items-center">
          <motion.span
            className="w-8 h-px bg-lofi-amber mr-4"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.span>
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
              className="relative pl-8 md:pl-0 group"
            >
              <motion.div
                className="md:grid md:grid-cols-4 md:gap-8 items-baseline"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-3 md:mb-0 md:text-right">
                  <div className="text-sm font-medium text-lofi-rose uppercase tracking-wider">
                    {exp.period}
                  </div>
                  <div className="text-xs text-lofi-muted/60 mt-1 font-light">
                    {exp.type}
                  </div>
                </div>
                <div className="md:col-span-3 md:pl-8 md:border-l border-lofi-accent relative">
                  {/* Animated dot on the timeline */}
                  <div className="hidden md:block absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-lofi-accent group-hover:bg-lofi-amber transition-colors duration-300"></div>
                  <h3 className="text-xl font-medium text-lofi-text mb-1 group-hover:text-lofi-amber transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="text-lofi-amber mb-4 text-sm font-medium">
                    {exp.company}
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex gap-3 text-lofi-muted font-light leading-relaxed text-sm"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-lofi-amber/60 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
