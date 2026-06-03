import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
      {/* Subtle ambient glow behind the content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-lofi-amber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-lofi-rose/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          className="flex justify-center mb-6 text-lofi-amber"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Compass size={44} strokeWidth={1.2} />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-lofi-text mb-4">
          Robert Truter
        </h1>
        <h2 className="text-lg md:text-xl font-light text-lofi-amber tracking-[0.3em] uppercase mb-8">
          Software Developer
        </h2>
        <p className="max-w-lg mx-auto text-lofi-muted font-light leading-relaxed text-lg">
          Crafting responsive, beautiful digital experiences with a passion for
          clean code and a curiosity for the world.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
