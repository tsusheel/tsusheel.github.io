import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#0A0A0A] py-12 text-center text-neutral-600 dark:text-neutral-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex justify-center gap-6">
          <a href={portfolioData.contact.github} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="mb-2 font-medium text-neutral-900 dark:text-white">
          <span className="text-neutral-400 dark:text-neutral-600">PQR</span><span className="text-red-500">.</span> {portfolioData.hero.name}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {currentYear} Built with React
        </p>
        <div className="mt-6 text-xs text-neutral-400 dark:text-neutral-500 italic max-w-xs mx-auto">
          <p className="mb-1">You miss 100% of the shots you don’t take.</p>
          <p className="text-[10px] not-italic text-neutral-500 dark:text-neutral-600 font-medium">~ <span className="line-through">Wayne Gretzky</span> Michael Scott</p>
        </div>
      </div>
    </footer>
  );
}
