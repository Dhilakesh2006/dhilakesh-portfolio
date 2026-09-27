export const SectionHeading = ({ kicker, title, align = "center" }) => {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col mb-12 ${alignment}`}>
      {kicker && (
        <span
          className="text-sm font-semibold mb-3"
          style={{ color: "var(--accent)" }}
        >
          {kicker}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#12151f]">
        {title}
      </h2>
    </div>
  );
};
