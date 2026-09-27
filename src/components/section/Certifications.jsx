import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import { certifications } from "../../data/portfolio";
import { BadgeIcon } from "../icons/Icons";

export const Certifications = () => {
  return (
    <LoadingOnScreen>
      <section id="certifications" className="py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="Certifications" title="Credentials" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="panel p-5 flex items-start gap-3"
              >
                <span
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <BadgeIcon width={18} height={18} />
                </span>
                <div>
                  <h3 className="text-[#12151f] font-medium text-sm leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-[#8b93a3] text-xs mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
