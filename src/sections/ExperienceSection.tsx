import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey in software engineering."
    >
      <div className="max-w-4xl mx-auto border-t border-neutral-200">
        <div className="flex flex-col">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="py-6 md:py-8 flex flex-col md:flex-row gap-2 md:gap-8 border-b border-neutral-100 group hover:bg-neutral-50/50 transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 sm:hover:bg-transparent"
            >
              {/* Duration Sidebar */}
              <div className="md:w-1/4 shrink-0 pt-1">
                <p className="text-sm font-medium text-neutral-500">{exp.duration}</p>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <h3 className="text-lg font-bold text-neutral-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-teal-600 mb-3">{exp.company}</p>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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
