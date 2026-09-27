import { useEffect, useState } from "react";
import { navLinks, profile } from "./data/portfolio";
import {
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
} from "./components/icons/Icons";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg border-[#e4e6ee]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-display text-base font-bold text-[#12151f] tracking-tight"
          >
            Dhilakesh<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 transition-colors duration-200"
                  style={{ color: isActive ? "var(--accent)" : "#5b6272" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute left-3 right-3 -bottom-[1px] h-[2px] rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#5b6272] hover:text-[#12151f] transition-colors"
            >
              <GitHubIcon width={18} height={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#5b6272] hover:text-[#12151f] transition-colors"
            >
              <LinkedInIcon width={18} height={18} />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="text-[#5b6272] hover:text-[#12151f] transition-colors"
            >
              <CodeIcon width={18} height={18} />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-1.5 pl-3.5 pr-4 py-2 rounded-full text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)" }}
            >
              <DownloadIcon width={14} height={14} />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-[#12151f] p-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};
