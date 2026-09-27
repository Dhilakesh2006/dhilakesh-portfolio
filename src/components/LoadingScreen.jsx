import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + 4, 100);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600);
          }, 250);
        }
        return next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#f6f7fb] flex flex-col items-center justify-center transition-opacity duration-600
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <p className="font-display text-lg font-semibold text-[#12151f] mb-5">
        Dhilakesh<span style={{ color: "var(--accent)" }}>.</span>
      </p>

      <div className="w-[160px] h-1 bg-[#e4e6ee] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%`, background: "var(--accent)" }}
        />
      </div>
    </div>
  );
};
