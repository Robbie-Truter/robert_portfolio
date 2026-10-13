import { motion } from "framer-motion";
import { Cpu, Globe, Code2 } from "lucide-react";

const pillars = [
  {
    icon: <Code2 className="text-lofi-amber" size={20} />,
    title: "Engineering Core",
    body: "4 years of professional experience across frontend and backend, specialising in React, TypeScript, and modern frontend architecture. Proven track record taking features from concept to production.",
  },
  {
    icon: <Cpu className="text-lofi-rose" size={20} />,
    title: "AI & Tool Integration Focus",
    body: "Actively upskilling in AI engineering, FastMCP, Model Context Protocol, and LLM APIs (Gemini & Claude) to build context-aware applications that interact with real-world tools.",
  },
  {
    icon: <Globe className="text-lofi-matcha" size={20} />,
    title: "Global Perspective",
    body: "An avid traveller, I bring adaptability, cross-cultural curiosity, and strong visual thinking to every problem — assets that translate directly into thoughtful, user-centred software.",
  },
];

const About = () => {
  return (
    <section className="py-24 px-6 bg-lofi-surface/60">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-amber uppercase mb-8 flex items-center">
            <motion.span
              className="w-8 h-px bg-lofi-amber mr-4"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.span>
            About Me
          </h2>

          <motion.div
            className="space-y-6 text-lofi-muted font-light leading-loose text-lg relative mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              hidden: { opacity: 0 },
            }}
          >
            {/* Subtle floating ambient orb */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-lofi-rose/5 rounded-full blur-3xl pointer-events-none"
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              I am a Software Developer with 4 years of professional experience
              working across the full stack, with a primary focus on frontend
              development. I specialise in React and TypeScript, building
              production web applications with clean architecture, responsive
              layouts, and meaningful user experiences.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Beyond traditional development, I am actively investing in AI
              engineering — building MCP servers with FastMCP, integrating
              Gemini and Claude APIs, and designing tools that bridge the gap
              between language models and real-world systems.
            </motion.p>
          </motion.div>

          {/* Pillar cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              hidden: { opacity: 0 },
            }}
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-lofi-card/60 backdrop-blur-sm border border-lofi-accent rounded-2xl p-6 hover:border-lofi-amber/30 hover:shadow-[0_6px_24px_rgba(232,168,124,0.07)] transition-all duration-300"
              >
                <div className="mb-3 p-2 w-fit bg-lofi-surface rounded-lg border border-lofi-accent/50">
                  {p.icon}
                </div>
                <h3 className="text-lofi-text font-medium text-sm mb-2">
                  {p.title}
                </h3>
                <p className="text-lofi-muted text-sm font-light leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
