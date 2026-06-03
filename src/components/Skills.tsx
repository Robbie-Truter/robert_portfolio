import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "Vue",
  "React Native",
  "Node.js",
  "Express",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Vite",
  "Webpack",
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-white/40">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-matcha uppercase mb-12 flex items-center">
          <span className="w-8 h-px bg-lofi-matcha mr-4"></span>
          Toolkit
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="px-4 py-2 rounded-full border border-lofi-accent text-sm font-medium text-lofi-text/80 bg-lofi-bg/50 shadow-sm cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
