import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-0 px-6 lg:px-12 xl:px-24 w-full">
      <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col justify-center h-full">

        <div className="flex flex-col gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="prose prose-neutral prose-lg max-w-none text-neutral-600 dark:text-neutral-400 text-center lg:text-left"
          >
            <p className="mb-6">{portfolioData.hero.intro}</p>
            <p>
              With enterprise experience building realtime systems, APIs, and complex integrations,
              I have developed a deep understanding of what it takes to build applications that scale.
              My background blends strong engineering principles with an eye for modern design.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#111111] p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm dark:shadow-none hover:shadow-md hover:border-teal-100 dark:hover:border-teal-900 transition-all group text-center lg:text-left"
              >
                <h4 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {stat.value}
                </h4>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
