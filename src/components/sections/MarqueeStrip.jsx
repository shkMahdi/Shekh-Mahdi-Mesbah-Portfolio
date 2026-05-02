const items =
  "Web Developer · Problem Solver · Frontend · React · Next.js · ";

export default function MarqueeStrip() {
  const track = (
    <span className="flex shrink-0 items-center gap-10 pr-10 font-mono text-[11px] uppercase tracking-[0.35em] text-muted sm:text-xs">
      {Array(6)
        .fill(items)
        .map((chunk, i) => (
          <span key={i} className="whitespace-nowrap">
            {chunk}
          </span>
        ))}
    </span>
  );

  return (
    <div className="relative z-10 border-y border-subtle bg-secondary/35 py-3">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {track}
          <span aria-hidden className="flex">
            {track}
          </span>
        </div>
      </div>
    </div>
  );
}
