import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  shortQuote: string;
  fullTestimonial: string;
  initials: string;
  accentColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Hendri Le Grange",
    role: "Database Developer",
    company: "Adams & Adams · RPS & TRIMS",
    initials: "HL",
    accentColor: "lofi-amber",
    shortQuote:
      "Robert and I worked together for about two years and eight months across RPS and every iteration of TRIMS — he built the front end, I built the database. He's very good at what he does, with a real feel for the user, and he's curious enough to want to understand the database side too.",
    fullTestimonial: `Robert and I worked together for about two years and eight months across RPS and every iteration of TRIMS — he built the front end, I built the database. He's very good at what he does, with a real feel for the user, and he's curious enough to want to understand the database side too.

On RPS, Robert carried the entire front end largely on his own for a long stretch. He took ownership of it in a way that went beyond just writing code — he understood the flow of the system, asked the right questions about the data, and made decisions that held up well as the project grew.

When we moved into TRIMS 2.0, he took the time to write proper handoff documentation so that whoever came in next would have something to work with. That kind of thinking — about the people who come after you — is not something you always see, and it says a lot about how he approaches his work.

He also has a genuine interest in how things work end to end. He would occasionally ask about the database side not because he had to, but because he wanted to understand the full picture. That cross-stack curiosity made collaboration much easier and the end result better.

I'd trust him with any front end, and I'd gladly work with him again.`,
  },
  {
    name: "Mathys Basson",
    role: "Frontend Developer",
    company: "Adams & Adams · TRIMS",
    initials: "MB",
    accentColor: "lofi-rose",
    shortQuote:
      "Robert thinks visually in a way I have not seen in anyone else. I watched him read through a Spark workflow specification and wireframe the entire interface without pausing — it was already structured in his head before he touched a tool.",
    fullTestimonial: `Robert thinks visually in a way I have not seen in anyone else. I watched him read through a Spark workflow specification and wireframe the entire interface without pausing — it was already structured in his head before he touched a tool.

His technical instincts are just as sharp. Early in our time on TRIMS, we had a subtle but disruptive styling issue that had been bothering the team for a while. Robert traced it back to a circular Tailwind import — something most people would have spent days debugging. He found it quickly, explained it clearly, and fixed it without any drama.

He also built a shared design library for the project that standardised how components looked and behaved across the application. It was not glamorous work, but it reduced inconsistencies and made everyone else's job easier. He did it because it was the right thing to do.

What stands out to me most, though, is how he handles pressure. He stays calm, he stays focused, and he does not let stress affect the people around him. That kind of steadiness matters more than most people realise when you are working on something complex and deadline-driven.

Robert brings a combination of visual intelligence, technical ability, and genuine professionalism that I think is rare. I would work with him again without hesitation.`,
  },
];

const Testimonials = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="py-24 px-6 bg-lofi-surface/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-amber uppercase mb-12 flex items-center">
            <motion.span
              className="w-8 h-px bg-lofi-amber mr-4"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.span>
            Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => {
              const isExpanded = expanded[idx] ?? false;
              const isAmber = t.accentColor === "lofi-amber";

              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`group bg-lofi-card/60 backdrop-blur-sm border border-lofi-accent rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                    isAmber
                      ? "hover:border-lofi-amber/30 hover:shadow-[0_8px_30px_rgba(232,168,124,0.08)]"
                      : "hover:border-lofi-rose/30 hover:shadow-[0_8px_30px_rgba(204,153,153,0.08)]"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-semibold text-sm shrink-0 border ${
                        isAmber
                          ? "bg-lofi-amber/10 border-lofi-amber/30 text-lofi-amber"
                          : "bg-lofi-rose/10 border-lofi-rose/30 text-lofi-rose"
                      }`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <h3 className="text-lofi-text font-medium text-base">
                        {t.name}
                      </h3>
                      <p className="text-lofi-muted text-sm font-light">
                        {t.role}
                      </p>
                      <p
                        className={`text-xs font-medium mt-0.5 ${isAmber ? "text-lofi-amber/70" : "text-lofi-rose/70"}`}
                      >
                        {t.company}
                      </p>
                    </div>
                    <div className="ml-auto shrink-0">
                      <Quote
                        size={20}
                        className={`${isAmber ? "text-lofi-amber/30" : "text-lofi-rose/30"}`}
                      />
                    </div>
                  </div>

                  {/* Quote body */}
                  <div className="relative flex-1">
                    <AnimatePresence initial={false} mode="wait">
                      {!isExpanded ? (
                        <motion.p
                          key="short"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-lofi-muted font-light leading-relaxed text-sm italic"
                        >
                          "{t.shortQuote}"
                        </motion.p>
                      ) : (
                        <motion.div
                          key="full"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          {t.fullTestimonial
                            .split("\n\n")
                            .map((paragraph, pIdx) => (
                              <p
                                key={pIdx}
                                className="text-lofi-muted font-light leading-relaxed text-sm italic mb-4 last:mb-0"
                              >
                                {pIdx === 0 ? `"${paragraph}` : paragraph}
                                {pIdx ===
                                  t.fullTestimonial.split("\n\n").length - 1
                                  ? `"`
                                  : ""}
                              </p>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expand / Collapse button */}
                  <motion.button
                    onClick={() => toggle(idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors self-start ${
                      isAmber
                        ? "text-lofi-amber/70 hover:text-lofi-amber"
                        : "text-lofi-rose/70 hover:text-lofi-rose"
                    }`}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp size={14} />
                        Collapse
                      </>
                    ) : (
                      <>
                        <ChevronDown size={14} />
                        Read Full Testimonial
                      </>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
