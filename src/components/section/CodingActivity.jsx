import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { coding } from "../../data/portfolio";
import { CheckCircleIcon, CodeIcon } from "../icons/Icons";

export const CodingActivity = () => {
  return (
    <LoadingOnScreen>
      <section id="coding" className="py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="Coding" title="Problem solving & coding activity" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="panel p-7 sm:p-8"
          >
            <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <CodeIcon width={26} height={26} />
              </div>

              <div>
                <p className="text-[#5b6272] leading-relaxed mb-5 max-w-lg">
                  I practice Data Structures and Algorithms regularly on{" "}
                  {coding.platform} to build interview-ready problem-solving
                  skills alongside coursework and project work.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    <CheckCircleIcon width={16} height={16} />
                    
                  </span>
                  <a
                    href={coding.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--accent)" }}
                  >
                    View LeetCode Profile
                  </a>
                </div>

                <p className="text-xs font-semibold text-[#8b93a3] mb-2.5">
                  Focus areas
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {coding.focus.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-[#12151f] bg-[#f6f7fb] border border-[#e4e6ee] rounded-full px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-semibold text-[#8b93a3] mb-2.5">
                  Topics practiced
                </p>
                <div className="flex flex-wrap gap-2">
                  {coding.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs text-[#5b6272] bg-transparent border border-[#e4e6ee] rounded-full px-3 py-1"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <p className="text-[11px] text-[#b7bcc8] mt-6">
                  {coding.snapshotNote} — figures reflect a point-in-time look
                  at a public profile and aren't a live feed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
