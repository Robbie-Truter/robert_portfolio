import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-6 text-lofi-matcha">
          <Compass size={40} strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-lofi-text mb-4">
          Robert Truter
        </h1>
        <h2 className="text-lg md:text-xl font-light text-lofi-wood tracking-widest uppercase mb-8">
          Software Developer
        </h2>
        <p className="max-w-md mx-auto text-lofi-text/70 font-light leading-relaxed">
          Crafting responsive, beautiful digital experiences with a passion for
          clean code and a curiosity for the world.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
