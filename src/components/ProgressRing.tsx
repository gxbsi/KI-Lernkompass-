type Props = {
  value: number;
  size?: number;
  stroke?: number;
};

export function ProgressRing({ value, size = 120, stroke = 10 }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.min(1, Math.max(0, value)));

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="text-[var(--color-gold)]"
      aria-hidden
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgb(226 232 240)"
        strokeWidth={stroke}
      />
      <circle
        className="ring-progress"
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeDasharray={`${c} ${c}`}
        strokeDashoffset={offset}
      />
    </svg>
  );
}
