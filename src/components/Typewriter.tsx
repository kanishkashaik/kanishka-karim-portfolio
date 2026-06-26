import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export const Typewriter = ({
  words,
  className = "",
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1400,
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setSub((s) =>
          deleting ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {sub}
      <span className="inline-block w-[2px] h-[1em] align-[-0.15em] bg-primary ml-1 animate-pulse" />
    </span>
  );
};
