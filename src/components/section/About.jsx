import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { profile } from "../../data/portfolio";

export const About = () => {
  return (
    <LoadingOnScreen>
      <section id="about" className="py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="About" title="A bit about me" />

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 text-[#5b6272] leading-relaxed"
            >
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="panel p-6 h-fit"
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--accent)" }}>
                Education
              </h3>
              <p className="text-[#12151f] font-semibold">
                {profile.education.degree}
              </p>
              <p className="text-[#5b6272] text-sm mt-1">
                {profile.education.school}
              </p>
              <p className="text-[#8b93a3] text-sm mt-1">
                {profile.education.period} &middot; {profile.education.detail}
              </p>

              <div className="mt-5 pt-5 border-t border-[#e4e6ee]">
                <p className="text-xs font-semibold text-[#5b6272] mb-2">
                  Relevant coursework
                </p>
                <ul className="text-sm text-[#5b6272] space-y-1.5">
                  {profile.education.coursework.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span style={{ color: "var(--accent)" }}>&middot;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
