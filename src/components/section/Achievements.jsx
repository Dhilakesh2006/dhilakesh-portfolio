import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { achievements } from "../../data/portfolio";
import { TrophyIcon } from "../icons/Icons";

export const Achievements = () => {
  return (
    <LoadingOnScreen>
      <section id="achievements" className="py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="Achievements" title="Recognition" />

          <div className="space-y-4">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="panel p-6 flex items-start gap-4"
              >
                <span
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <TrophyIcon width={22} height={22} />
                </span>
                <div>
                  <h3 className="text-[#12151f] font-semibold">{item.title}</h3>
                  <p className="text-[#5b6272] text-sm mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
