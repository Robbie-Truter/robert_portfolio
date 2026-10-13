import { motion } from "framer-motion";
import { Bot, Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: <Bot className="text-lofi-amber" size={20} />,
    title: "AI & Automation",
    accent: "lofi-amber",
    borderHover: "hover:border-lofi-amber/40",
    skills: [
      "Model Context Protocol (MCP)",
      "FastMCP",
      "Gemini API",
      "Claude API",
      "AI Tool Integration",
      "AI Coding CLI Tools",
      "Ollama",
      "Microsoft Copilot",
      "Power Automate",
      "n8n",
    ],
  },
  {
    icon: <Code2 className="text-lofi-rose" size={20} />,
    title: "Software Development",
    accent: "lofi-rose",
    borderHover: "hover:border-lofi-rose/40",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Vue",
      "React Native",
      "Node.js",
      "Express",
      "Python",
      "Tailwind CSS",
      "TanStack Query",
      "TanStack Table",
      "Zustand",
      "shadcn/ui",
      "Bootstrap",
    ],
  },
  {
    icon: <Database className="text-lofi-matcha" size={20} />,
    title: "Database & Infrastructure",
    accent: "lofi-matcha",
    borderHover: "hover:border-lofi-matcha/40",
    skills: ["PostgreSQL", "SQL", "Supabase", "Prisma", "MongoDB"],
  },
  {
    icon: <Wrench className="text-lofi-amber" size={20} />,
    title: "Dev Tools & Practices",
    accent: "lofi-amber",
    borderHover: "hover:border-lofi-amber/40",
    skills: ["GitHub Actions", "Git", "Azure DevOps", "Figma"],
  },
];

const tagColorMap: Record<string, string> = {
  "lofi-amber":
    "text-lofi-amber bg-lofi-amber/10 border border-lofi-amber/20 hover:border-lofi-amber/50",
  "lofi-rose":
    "text-lofi-rose bg-lofi-rose/10 border border-lofi-rose/20 hover:border-lofi-rose/50",
  "lofi-matcha":
    "text-lofi-matcha bg-lofi-matcha/10 border border-lofi-matcha/20 hover:border-lofi-matcha/50",
};

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-lofi-surface/60">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-amber uppercase mb-12 flex items-center">
          <motion.span
            className="w-8 h-px bg-lofi-amber mr-4"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.span>
          Toolkit
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className={`bg-lofi-card/60 backdrop-blur-sm border border-lofi-accent rounded-2xl p-6 ${category.borderHover} hover:shadow-[0_6px_24px_rgba(232,168,124,0.07)] transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-lofi-surface rounded-lg border border-lofi-accent/50">
                  {category.icon}
                </div>
                <h3 className="text-lofi-text font-medium text-sm tracking-wide">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.08 + idx * 0.03,
                      type: "spring",
                      stiffness: 120,
                    }}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-colors ${tagColorMap[category.accent]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
