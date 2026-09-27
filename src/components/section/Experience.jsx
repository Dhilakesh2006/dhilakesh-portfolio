import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { experience } from "../../data/portfolio";

export const Experience = () => {
  return (
    <LoadingOnScreen>
      <section id="experience" className="py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="Experience" title="Where I've worked" />

          <div className="relative pl-8">
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[#e4e6ee]" />

            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="relative pb-2"
              >
                <span
                  className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white"
                  style={{ borderColor: "var(--accent)" }}
                />

                <div className="panel p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="text-[#12151f] font-semibold text-lg">
                      {job.role}
                    </h3>
                    <span className="text-xs font-medium text-[#8b93a3]">
                      {job.period}
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    {job.company}
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#5b6272] leading-relaxed">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2.5">
                        <span className="text-[#cdd1de] mt-1">&#9656;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
