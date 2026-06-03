import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background landscape image */}
      <div className="absolute inset-0">
        <img
          src="/hero-landscape.png"
          alt="Lofi landscape with a winding path at dusk"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — blends image into the dark background at the top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-lofi-bg via-lofi-bg/70 to-lofi-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-lofi-bg/60 via-transparent to-transparent" />
      </div>

      {/* Content — positioned at the bottom of the hero over the gradient */}
      <div className="relative z-10 px-6 pb-20 pt-40 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-2 text-lofi-amber mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MapPin size={18} strokeWidth={1.5} />
            <span className="text-sm tracking-[0.2em] uppercase font-light">
              Cape Town, South Africa
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-lofi-text mb-3">
            Robert Truter
          </h1>

          <h2 className="text-xl md:text-2xl font-light text-lofi-amber tracking-wide mb-8">
            Software Developer
          </h2>

          <p className="max-w-lg text-lofi-muted font-light leading-relaxed text-lg">
            Building software by day, exploring the world whenever I can. 
            I write code that works and chase sunsets that don't.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
