import { navLinks, profile } from "../data/portfolio";
import {
  CloseIcon,
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./icons/Icons";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 text-[#12151f] p-1 focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        <CloseIcon width={26} height={26} />
      </button>

      <div className="flex flex-col items-center gap-6">
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            className={`font-display text-2xl font-semibold text-[#12151f] transform transition-all duration-300
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {link.label}
          </a>
        ))}

        <a
          href={profile.resumeFile}
          download
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
          style={{ background: "var(--accent)" }}
        >
          <DownloadIcon width={16} height={16} />
          Resume
        </a>
      </div>

      <div className="flex items-center gap-6 mt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-[#5b6272] hover:text-[#12151f] transition-colors"
        >
          <GitHubIcon width={22} height={22} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-[#5b6272] hover:text-[#12151f] transition-colors"
        >
          <LinkedInIcon width={22} height={22} />
        </a>
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode profile"
          className="text-[#5b6272] hover:text-[#12151f] transition-colors"
        >
          <CodeIcon width={22} height={22} />
        </a>
      </div>
    </div>
  );
};
