import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Existing Teal Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-100/40 dark:bg-teal-900/10 rounded-full blur-3xl" />

      {/* Big #e8ddd0 abstract hovering circle */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-20 bg-[#e8ddd0] dark:bg-neutral-800"
      />
      
      {/* A secondary filled shape for balance */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-[40%] opacity-10 bg-[#e8ddd0] dark:bg-neutral-800"
      />
    </div>
  );
}
