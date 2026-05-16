import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white py-12 text-center text-neutral-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex justify-center gap-6">
          <a href={portfolioData.contact.github} className="hover:text-teal-600 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} className="hover:text-teal-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-teal-600 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="mb-2 font-medium text-neutral-900">
          ST<span className="text-red-500">.</span> {portfolioData.hero.name}
        </p>
        <p className="text-sm text-neutral-500">
          &copy; {currentYear}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
