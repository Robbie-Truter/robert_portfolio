import { motion } from "framer-motion";
import { ExternalLink, MapPin, Map, Plane, Gamepad2 } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    title: "Safe_Route_ZA",
    status: "In Development",
    desc: "A safety-focused GPS navigation app specifically designed for South Africans to plan secure travel routes.",
    icon: <MapPin className="text-lofi-matcha" size={24} />,
    github: "https://github.com/Robbie-Truter",
    tags: ["React Native", "TypeScript"],
  },
  {
    title: "Travel Blog",
    status: "Completed",
    desc: "A personalized platform to document travel experiences, explore history, and share adventures from around the globe.",
    icon: <Map className="text-lofi-amber" size={24} />,
    github: "https://github.com/Robbie-Truter",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "travel_management_app",
    status: "Completed",
    desc: "A comprehensive application designed to streamline travel itineraries, bookings, and logistical planning.",
    icon: <Plane className="text-lofi-rose" size={24} />,
    github: "https://github.com/Robbie-Truter",
    tags: ["Vue", "Node.js"],
  },
  {
    title: "game-backend-cli",
    status: "Completed",
    desc: "A command-line interface tool for managing backend game services, handling server configurations and player data.",
    icon: <Gamepad2 className="text-lofi-amber" size={24} />,
    github: "https://github.com/Robbie-Truter",
    tags: ["Node.js", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-lofi-amber uppercase mb-12 flex items-center">
          <span className="w-8 h-px bg-lofi-amber mr-4"></span>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-lofi-card/60 backdrop-blur-sm border border-lofi-accent p-8 rounded-2xl hover:border-lofi-amber/30 hover:shadow-[0_8px_30px_rgba(232,168,124,0.08)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-lofi-surface rounded-xl border border-lofi-accent/50">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lofi-muted hover:text-lofi-amber transition-colors"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-lofi-muted hover:text-lofi-amber transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-medium text-lofi-text">
                    {project.title}
                  </h3>
                  {project.status === "In Development" && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-lofi-matcha/15 text-lofi-matcha rounded-full">
                      WIP
                    </span>
                  )}
                </div>
                <p className="text-lofi-muted font-light text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-lofi-rose bg-lofi-rose/10 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
