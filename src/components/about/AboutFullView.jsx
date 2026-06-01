"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    id: "intro",
    content: (
      <>
        <p>
          Outside of code, I&apos;m someone who loves photography, writing, reading and sports.
          I think humans carry enormous amounts of feeling they never find the words, or the
          outlets, for. I consider myself one of the lucky ones. When something moves me, I
          write it down. When something catches my eye, I photograph it. When I need a new
          lens on the world, I read. And sports - it gives me an avenue to unleash my
          competitiveness.
        </p>
        <p className="font-medium text-primary">
          These aren&apos;t just hobbies. They&apos;re how I process being alive.
        </p>
      </>
    ),
  },
  {
    id: "writing-reading",
    label: "Writing & Reading",
    content: (
      <>
        <p>
          Writing is release. A way to take what&apos;s stored somewhere unnamed inside my
          chest and give it shape. Therapeutic doesn&apos;t quite cover it; it&apos;s closer
          to necessary.
        </p>
        <p>
          Reading is how I collect perspectives I never would have arrived at on my own.
          Every book is a borrowed life, a different angle, a quiet conversation with someone
          who saw the world differently. I get lost in stories willingly, gratefully, and
          occasionally fall asleep two pages in, which I consider a feature, not a bug. XD
        </p>
      </>
    ),
  },
  {
    id: "photography",
    label: "Photography",
    content: (
      <>
        <p>
          I don&apos;t own a camera. Not yet. But the moment something catches my eye - a
          quality of light spearing through dense leaves, a fleeting expression, the geometry
          of an ordinary street; my hand goes to my phone before my mind has caught up. I
          capture it. Then I sit with it. Edit it. Push it closer and closer to the image I
          had in my head.
        </p>
        <p>
          That gap between what the camera captures and what the eye remembers - that&apos;s
          where I live. That&apos;s the work I love.
        </p>
        <p>
          You can find some of what I&apos;ve made over here:{" "}
          <a
            href="https://www.instagram.com/rafspective"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-2"
          >
            @rafspective
          </a>{" "}
          on Instagram.
        </p>
      </>
    ),
  },
  {
    id: "sports-travel",
    label: "Sports & Travel",
    content: (
      <>
        <p>
          I love sports, especially football. I see it as a combination of a lot of things:
          art, finesse, perseverance, healthy competitiveness, and of course, real health benefits are there. 
          I believe humans are innately competitive. They want to prove themselves, to announce
          themselves as the best. Wars, perhaps, are an expression of that drive. I reckon
          sports are a scaled-down version of war - a civilised arena where people can
          unleash that innate desire to compete and prove their worth. I know that might sound
          far-fetched, but hey :D, I think it&apos;s an interesting analogy.
          <br />And for those wondering - Barcelona and Spain.
        </p>
        <p>
          Travelling is something I crave but don&apos;t yet claim. I&apos;ve seen a few
          places. I want to see more. But like the camera, it lives just beyond this current
          chapter of my life - something to be earned, anticipated, savoured when the time is
          right. I have a threshold in mind. I&apos;m working toward it.
        </p>
      </>
    ),
  },
];

export default function AboutFullView() {
  return (
    <motion.div
      className="min-h-screen bg-primary px-4 pb-24 pt-28 md:px-6 md:pt-32"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-2xl">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back to Portfolio
        </Link>

        <header className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Beyond the code
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
            More about me
          </h1>
        </header>

        <div className="mt-12 space-y-14">
          {sections.map((section, i) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {section.label && (
                <h2 className="mb-5 font-display text-xl font-bold text-accent md:text-2xl">
                  {section.label}
                </h2>
              )}
              <div className="space-y-5 text-sm leading-relaxed text-muted md:text-base">
                {section.content}
              </div>
              {i < sections.length - 1 && (
                <hr className="mt-14 border-subtle" />
              )}
            </motion.section>
          ))}

          {/* Closing card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: sections.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-subtle/60 bg-secondary/60 p-6 md:p-8"
          >
            <p className="mb-5 font-display text-lg font-semibold text-primary">
                picture
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>
                Japan. A famous Lawson convenience store. A halal onigiri in my hand. Mount Fuji
                rising in the background like it has all the time in the world. A Fujifilm X100VI
                hanging around my neck. The sun bleeding into the horizon.
              </p>
              <p>
                I&apos;m scrolling through the day&apos;s photos. Unhurried. Exactly where I&apos;m
                supposed to be. . ..
              </p>
              <p>
                That&apos;s the destination. The code, the writing, the photographs - all of it is
                pointed somewhere.
              </p>
              <p className="font-semibold text-accent">
                And I&apos;m just getting started.
              </p>
            </div>
          </motion.div>
        </div>

        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-sm text-muted mt-10 transition-colors hover:text-accent"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </motion.div>
  );
}
