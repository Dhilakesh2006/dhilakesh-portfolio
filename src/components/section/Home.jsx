import { LoadingOnScreen } from "../LoadingOnScreen";
import { profile } from "../../data/portfolio";
import {
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../icons/Icons";
import photo from "../../assets/profile.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full relative z-10">
        <LoadingOnScreen>
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                Open to entry-level Full Stack roles
              </span>

              <p className="text-[#5b6272] font-medium mb-2">
                Hi, I'm {profile.name.split(" ")[0]}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-bold leading-[1.08] mb-5 text-[#12151f]">
                {profile.role}
              </h1>

              <p className="text-[#5b6272] text-base sm:text-lg mb-6 max-w-md leading-relaxed">
                {profile.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mb-9">
                {profile.heroStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-[#12151f] bg-white border border-[#e4e6ee] rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ background: "var(--accent)" }}
                >
                  View Projects
                </a>
                <a
                  href={profile.resumeFile}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-[#cdd1de] text-[#12151f] hover:border-[#12151f] transition-colors duration-200"
                >
                  <DownloadIcon width={16} height={16} />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-[#5b6272] hover:text-[#12151f] transition-colors duration-200"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex items-center gap-5 mt-10">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-[#5b6272] hover:text-[#12151f] transition-colors"
                >
                  <GitHubIcon width={20} height={20} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-[#5b6272] hover:text-[#12151f] transition-colors"
                >
                  <LinkedInIcon width={20} height={20} />
                </a>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode profile"
                  className="text-[#5b6272] hover:text-[#12151f] transition-colors"
                >
                  <CodeIcon width={20} height={20} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto md:mx-0 w-full max-w-sm">
              <div className="hero-blob absolute -inset-10 rounded-[3rem] -z-10" />

              <div className="panel overflow-hidden rounded-[2rem] shadow-xl shadow-black/5">
                <img
                  src={photo}
                  alt={profile.name}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>

              <div className="panel absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl hidden sm:block">
                <p className="font-display text-2xl font-bold text-[#12151f]">
                  3+
                </p>
                <p className="text-xs text-[#5b6272] font-medium">
                  Projects shipped
                </p>
              </div>

              <div className="panel absolute -top-6 -right-4 px-4 py-3 rounded-2xl hidden sm:flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <p className="text-xs font-semibold text-[#12151f]">
                  Final-year CSE student
                </p>
              </div>
            </div>
          </div>
        </LoadingOnScreen>
      </div>
    </section>
  );
};
