import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Some of the key projects I've built and contributed to."
      className="bg-neutral-50/50"
    >
      <div className="max-w-4xl mx-auto border-t border-neutral-200">
        <div className="flex flex-col">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="py-6 md:py-8 flex flex-col md:flex-row gap-2 md:gap-8 border-b border-neutral-100 group hover:bg-white transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 sm:hover:bg-transparent"
            >
              {/* Title Sidebar */}
              <div className="md:w-1/4 shrink-0 pt-1 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-neutral-900">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-teal-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white border border-neutral-200 text-neutral-600 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
