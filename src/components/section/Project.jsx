import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { projects } from "../../data/portfolio";
import { ExternalLinkIcon, GitHubIcon } from "../icons/Icons";

import foodDeliveryImg from "../../assets/projects/food-delivery.jpg";
import jarvisChatbotImg from "../../assets/projects/jarvis-chatbot.jpg";
import productApiImg from "../../assets/projects/product-api.jpg";

const IMAGES = {
  "food-delivery": foodDeliveryImg,
  "jarvis-chatbot": jarvisChatbotImg,
  "product-api": productApiImg,
};

const ICON_PATHS = {
  food: "M4 11h16M4 11a8 8 0 0 1 16 0M4 11v2a8 8 0 0 0 16 0v-2M9 5V3M12 5V3M15 5V3",
  chat: "M4 5h16v10H8l-4 4V5Z",
  api: "M4 6h16v4H4zM4 14h16v4H4zM8 8h.01M8 16h.01",
  cart: "M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6",
};

const Thumbnail = ({ thumbnail, title }) => {
  if (!thumbnail) return null;

  if (thumbnail.type === "image") {
    return (
      <img
        src={IMAGES[thumbnail.key]}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
    );
  }

  return (
    <div
      className="w-full h-40 rounded-xl mb-4 flex items-center justify-center"
      style={{ background: `${thumbnail.color}1a` }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke={thumbnail.color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={ICON_PATHS[thumbnail.icon] || ICON_PATHS.api} />
      </svg>
    </div>
  );
};

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
                <Thumbnail thumbnail={project.thumbnail} title={project.title} />

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