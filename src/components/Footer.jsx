import { profile } from "../data/portfolio";
import { CodeIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons/Icons";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e4e6ee] py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <p className="font-display font-bold text-[#12151f]">
              {profile.name}
            </p>
            <p className="text-xs text-[#8b93a3] mt-0.5">{profile.role}</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#8b93a3] hover:text-[#12151f] transition-colors"
            >
              <GitHubIcon width={17} height={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#8b93a3] hover:text-[#12151f] transition-colors"
            >
              <LinkedInIcon width={17} height={17} />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="text-[#8b93a3] hover:text-[#12151f] transition-colors"
            >
              <CodeIcon width={17} height={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="text-[#8b93a3] hover:text-[#12151f] transition-colors"
            >
              <MailIcon width={17} height={17} />
            </a>
          </div>
        </div>

        <p className="text-xs text-[#b7bcc8] border-t border-[#e4e6ee] pt-6">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
