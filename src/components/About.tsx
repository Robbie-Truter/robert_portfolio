import { motion } from "framer-motion";

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
            className="space-y-6 text-lofi-muted font-light leading-loose text-lg relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              hidden: { opacity: 0 }
            }}
          >
            {/* Subtle floating ambient orb */}
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-lofi-rose/5 rounded-full blur-3xl pointer-events-none"
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              I am a Software Developer with 4 years of experience working
              across the full stack, with a primary focus on frontend
              development using React and Vue. I specialize in building
              production web applications with TypeScript, developing responsive
              and maintainable user interfaces, and working with backend
              services where required.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              I am comfortable taking features from concept through to
              implementation, always maintaining a strong focus on code quality
              and user experience.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              Beyond the screen, I have a deep passion for traveling the world
              and exploring history. Just as I love moving around and
              discovering new places, I bring that same curiosity and
              adaptability into my work—always eager to learn new technologies
              and build resilient, modern applications.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
