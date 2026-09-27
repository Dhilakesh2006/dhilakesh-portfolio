import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { skills } from "../../data/portfolio";

export const Skills = () => {
  return (
    <LoadingOnScreen>
      <section id="skills" className="py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="Skills" title="What I work with" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`panel p-5 ${
                  group.category === "Core Computer Science"
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <h3 className="text-[#12151f] font-semibold mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-[#12151f] bg-[#f6f7fb] border border-[#e4e6ee] rounded-full px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
