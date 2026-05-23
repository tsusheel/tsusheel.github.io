import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { useIsMobile } from "../utils/useIsMobile";

export function ExperienceSection() {
  const isMobile = useIsMobile();
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey in software engineering."
    >
      <div className="max-w-4xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={isMobile ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="py-4 flex flex-col md:flex-row gap-1 md:gap-4 border-b border-neutral-100 dark:border-neutral-800 group hover:bg-neutral-50/50 dark:hover:bg-[#111111] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 sm:hover:bg-transparent dark:sm:hover:bg-transparent"
            >
              {/* Duration Sidebar */}
              <div className="md:w-1/4 shrink-0 pt-0.5">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{exp.duration}</p>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-teal-600 dark:text-teal-400 mb-1.5">{exp.company}</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2.5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-[10px] font-medium rounded"
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
