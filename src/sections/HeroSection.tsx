import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="home" className="py-20 lg:py-0 px-6 lg:px-12 xl:px-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-neutral-200/50 relative z-10 bg-white">
            <img
              src="/profile.png"
              alt="Sushil Thakur Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <span className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-700 text-sm font-semibold shadow-sm">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 text-balance"
        >
          Hi, I'm <span className="md:whitespace-nowrap">{portfolioData.hero.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-xl text-balance"
        >
          {portfolioData.hero.role}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-medium transition-all flex items-center gap-2 active:scale-95 shadow-md shadow-neutral-900/20"
          >
            Download Resume <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
