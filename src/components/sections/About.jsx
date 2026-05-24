import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

const stats = [
  { label: "3+ years coding", value: "01" },
  { label: "6+ projects", value: "02" },
  { label: "5+ languages (C, C++, JS, Python, Java)", value: "03" },
  { label: "∞ curiosity", value: "04" },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="border-t border-subtle/60 bg-primary px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative">
          <div className="pointer-events-none select-none font-display text-[clamp(4rem,14vw,9rem)] font-extrabold leading-none text-accent/10">
            01
          </div>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            About Me
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted md:text-base">
            <p>
              I&apos;m Mahdi - a software engineering student and web developer
              who found his calling in building things for the internet. My
              journey into programming started with curiosity and a single
              Google search, and it hasn&apos;t stopped since. I love the process
              of turning ideas into interactive, meaningful digital experiences.
            </p>
            <p>
              I&apos;m someone who enjoys thinking through
              problems - whether it&apos;s debugging a tricky function or
              figuring out the best move in a game. I believe great software
              comes from a mix of technical skill and genuine care for the user
              experience. I&apos;m constantly learning, and I wouldn&apos;t have
              it any other way.
            </p>
            <p>
              But code is only half my story. Outside of code, I&apos;m someone who&hellip;{" "}
              <Link href="/about" className="text-accent underline-offset-2 hover:underline">
                see more
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((s) => (
            <article
              key={s.value}
              className="rounded-2xl border border-subtle bg-secondary/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <p className="font-mono text-[10px] text-accent/80">{s.value}</p>
              <p className="mt-3 font-display text-lg font-semibold text-primary md:text-xl">
                {s.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
