import { ReactNode } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  startDelay?: number;
  step?: number;
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
}

export const SplitText = ({
  text,
  className = "",
  startDelay = 0,
  step = 0.04,
  as: Tag = "span",
}: SplitTextProps) => {
  const words = text.split(" ");
  let i = 0;
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((ch, ci) => {
            const delay = startDelay + i * step;
            i++;
            return (
              <span
                key={ci}
                className="animate-letter"
                style={{ animationDelay: `${delay}s` }}
                aria-hidden="true"
              >
                {ch}
              </span>
            );
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};
