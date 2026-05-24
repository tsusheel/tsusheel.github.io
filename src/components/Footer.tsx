import { useState } from "react";
import { Mail, Share2 } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { FaXTwitter as XIcon } from "react-icons/fa6";
import { portfolioData } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Sushil Thakur | Full Stack Developer",
      text: "Check out Sushil's developer portfolio!",
      url: window.location.origin || "https://tsusheel.com",
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Error sharing:", error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#0A0A0A] py-12 text-center text-neutral-600 dark:text-neutral-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 flex flex-col gap-1 items-center">
          <span>Say hello at</span>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="font-medium text-neutral-800 dark:text-neutral-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            {portfolioData.contact.email}
          </a>
        </div>
        <div className="mb-8 flex justify-center items-center gap-6">
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          {portfolioData.contact.x && (
            <a href={portfolioData.contact.x} target="_blank" rel="noreferrer" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <XIcon className="w-5 h-5" />
            </a>
          )}
          <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handleShare}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer flex items-center justify-center p-0 bg-transparent border-none outline-none"
              aria-label="Share portfolio"
            >
              <Share2 className="w-5 h-5" />
            </button>
            {copied && (
              <span className="absolute bottom-full mb-2 px-2.5 py-1 text-[10px] font-medium text-white bg-neutral-900 dark:bg-neutral-850 rounded-lg shadow-lg whitespace-nowrap z-50 transition-all duration-200">
                Link copied!
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {currentYear} | tsusheel
        </p>
        <div className="mt-6 text-xs text-neutral-400 dark:text-neutral-500 italic max-w-xs mx-auto">
          <p className="mb-1">You miss 100% of the shots you don’t take.</p>
          <p className="text-[10px] not-italic text-neutral-500 dark:text-neutral-600 font-medium">~ Michael Scott</p>
        </div>
      </div>
    </footer>
  );
}
