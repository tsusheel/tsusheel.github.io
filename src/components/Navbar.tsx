import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { cn } from "../utils/cn";
import { portfolioData } from "../data/portfolio";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 border-neutral-200 shadow-sm"
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
          className="text-xl font-bold tracking-tighter text-neutral-900 group"
        >
          <span className="text-neutral-400">PQR</span>ST<span className="text-red-500">.</span>
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
                  className="text-sm font-medium text-neutral-600 hover:text-teal-600 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-6 border-l border-neutral-200">
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="text-neutral-500 hover:text-teal-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-full transition-all active:scale-95 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden block p-2 text-neutral-600 relative z-50"
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
            className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
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
                  className="text-lg font-medium text-neutral-700 hover:text-teal-600"
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-neutral-100" />
              <div className="flex items-center gap-4 py-2">
                <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="p-2 bg-neutral-100 rounded-full text-neutral-700">
                  <Github className="w-5 h-5" />
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-neutral-100 rounded-full text-neutral-700">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${portfolioData.contact.email}`} className="p-2 bg-neutral-100 rounded-full text-neutral-700">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="flex-1 text-center py-2 bg-neutral-900 text-white rounded-full font-medium">
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
