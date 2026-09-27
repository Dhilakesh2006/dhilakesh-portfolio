import { useState } from "react";
import { LoadingOnScreen } from "../LoadingOnScreen";
import { SectionHeading } from "../SectionHeading";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import {
  CodeIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "../icons/Icons";

const SERVICE_ID = "service_6br8jks";
const TEMPLATE_ID = "template_fdf3kq9";
const PUBLIC_KEY = "tMI1yc-BBQfpphqS6";

const contactLinks = [
  {
    icon: MailIcon,
    label: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: PhoneIcon,
    label: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPinIcon,
    label: profile.location,
    href: null,
  },
  {
    icon: GitHubIcon,
    label: "github.com/Dhilakesh2006",
    href: profile.github,
  },
  {
    icon: LinkedInIcon,
    label: "linkedin.com/in/Dhilakesh2006",
    href: profile.linkedin,
  },
  {
    icon: CodeIcon,
    label: "LeetCode Profile",
    href: profile.leetcode,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <LoadingOnScreen>
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <SectionHeading kicker="Contact" title="Let's talk" />

          <p className="text-[#5b6272] text-center max-w-lg mx-auto -mt-6 mb-10">
            Open to entry-level Software Developer and Java Full Stack roles.
            Feel free to reach out directly or send a message below.
          </p>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {contactLinks.map(({ icon: Icon, label, href }) => {
                const content = (
                  <>
                    <span
                      className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon width={16} height={16} />
                    </span>
                    <span className="text-sm text-[#12151f] break-all">
                      {label}
                    </span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="panel flex items-center gap-3 p-4 hover:border-[#cdd1de] transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="panel flex items-center gap-3 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="panel p-6"
            >
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="p-3 rounded-lg bg-[#f6f7fb] border border-[#e4e6ee] focus:border-[color:var(--accent)] outline-none text-sm text-[#12151f] placeholder:text-[#8b93a3]"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="p-3 rounded-lg bg-[#f6f7fb] border border-[#e4e6ee] focus:border-[color:var(--accent)] outline-none text-sm text-[#12151f] placeholder:text-[#8b93a3]"
                  required
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="p-3 rounded-lg bg-[#f6f7fb] border border-[#e4e6ee] focus:border-[color:var(--accent)] outline-none text-sm text-[#12151f] placeholder:text-[#8b93a3] resize-none"
                  required
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="py-3 rounded-full font-semibold text-sm text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  style={{ background: "var(--accent)" }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                  <p className="text-sm text-center" style={{ color: "var(--accent)" }}>
                    Message sent — thanks for reaching out!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-center text-red-500">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </LoadingOnScreen>
  );
};
