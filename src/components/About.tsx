import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-6 bg-white/40">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-matcha uppercase mb-8 flex items-center">
            <span className="w-8 h-px bg-lofi-matcha mr-4"></span>
            About Me
          </h2>

          <div className="space-y-6 text-lofi-text/80 font-light leading-loose text-lg">
            <p>
              I am a Software Developer with 4 years of experience working
              across the full stack, with a primary focus on frontend
              development using React and Vue. I specialize in building
              production web applications with TypeScript, developing responsive
              and maintainable user interfaces, and working with backend
              services where required.
            </p>
            <p>
              I am comfortable taking features from concept through to
              implementation, always maintaining a strong focus on code quality
              and user experience.
            </p>
            <p>
              Beyond the screen, I have a deep passion for traveling the world
              and exploring history. Just as I love moving around and
              discovering new places, I bring that same curiosity and
              adaptability into my work—always eager to learn new technologies
              and build resilient, modern applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
