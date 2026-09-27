import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { projects } from "../../data/portfolio";
import { ExternalLinkIcon, GitHubIcon } from "../icons/Icons";

export const Project = () => {
  return (
    <LoadingOnScreen>
      <section id="projects" className="py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="Projects" title="Selected work" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`panel p-6 flex flex-col ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-lg font-bold text-[#12151f] mb-2 font-display">
                  {project.title}
                </h3>
                {project.status && (
                  <span
                    className="inline-block w-fit text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    {project.status}
                  </span>
                )}
                <p className="text-[#5b6272] text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 text-sm text-[#5b6272] mb-5">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className="text-[#cdd1de] mt-1">&#9656;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-[#12151f] bg-[#f6f7fb] border border-[#e4e6ee] rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-[#e4e6ee]">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#12151f] hover:text-[color:var(--accent)] transition-colors"
                    >
                      <GitHubIcon width={16} height={16} />
                      Source Code
                    </a>
                  ) : (
                    <span className="text-xs text-[#8b93a3]">
                      repository private
                    </span>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#12151f] hover:text-[color:var(--accent)] transition-colors"
                    >
                      <ExternalLinkIcon width={16} height={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
