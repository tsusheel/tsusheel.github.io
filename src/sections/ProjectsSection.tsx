import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { ExternalLink, Package, BookOpen } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="What I've Built"
      subtitle="A collection of systems, open-source packages, and frontend applications."
      className="bg-neutral-50/30 dark:bg-transparent"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full bg-white dark:bg-[#111111] border border-neutral-100 dark:border-neutral-800/80 rounded-3xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_0_30px_-10px_rgba(20,184,166,0.1)] hover:border-teal-500/20 dark:hover:border-teal-400/20 transition-all duration-300 group"
          >
            {/* Image container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800/80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Content container */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-teal-50/50 dark:bg-teal-950/10 text-teal-700 dark:text-teal-300 border border-teal-100/50 dark:border-teal-900/30 hover:bg-teal-100/50 dark:hover:bg-teal-950/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Links / Buttons */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 mt-auto">
                {/* GitHub Repo */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/80 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}

                {/* Live Demo */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 dark:bg-teal-500 rounded-xl hover:bg-teal-700 dark:hover:bg-teal-600 transition-all shadow-sm hover:shadow-teal-500/10 dark:hover:shadow-teal-500/20"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                )}

                {/* NPM Package */}
                {project.npm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-xl hover:bg-red-100/50 dark:hover:bg-red-950/30 transition-all shadow-sm"
                  >
                    <Package className="w-3.5 h-3.5" />
                    NPM
                  </a>
                )}

                {/* Docs / API reference */}
                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-xl hover:bg-amber-100/50 dark:hover:bg-amber-950/30 transition-all shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Docs
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
