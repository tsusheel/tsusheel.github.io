import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Mail, Sun, Moon } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { FaXTwitter as XIcon } from "react-icons/fa6";
import { cn } from "../utils/cn";
import { portfolioData } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";
import { getResumeFileName } from "../utils/resume";

const navItems = [
  { name: "About", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        mobileMenuOpen
          ? "bg-white dark:bg-[#0A0A0A] py-3 border-neutral-200 dark:border-neutral-900 shadow-sm dark:shadow-none"
          : scrolled
            ? "bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md py-3 border-neutral-200 dark:border-neutral-900 shadow-sm dark:shadow-none"
            : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-white group"
        >
          <span className="text-neutral-400 dark:text-neutral-600">PQR</span>ST<span className="text-red-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === "#home") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-6 border-l border-neutral-200 dark:border-neutral-800">
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#0A66C2] dark:hover:text-[#3b82f6] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            {portfolioData.contact.x && (
              <a href={portfolioData.contact.x} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
            )}
            <a href={`mailto:${portfolioData.contact.email}`} className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              download={getResumeFileName()}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-full transition-all active:scale-95 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden block p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0A0A0A] border-b border-neutral-200 dark:border-neutral-900 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === "#home") {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }, 50);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-neutral-100 dark:border-neutral-900" />
              <div className="flex items-center flex-wrap gap-4 py-2">
                <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                {portfolioData.contact.x && (
                  <a href={portfolioData.contact.x} target="_blank" rel="noreferrer" className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300">
                    <XIcon className="w-5 h-5" />
                  </a>
                )}
                <a href={`mailto:${portfolioData.contact.email}`} className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300">
                  <Mail className="w-5 h-5" />
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
                >
                  {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
                <a 
                  href="/resume.pdf" 
                  download={getResumeFileName()}
                  className="flex-1 text-center py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
