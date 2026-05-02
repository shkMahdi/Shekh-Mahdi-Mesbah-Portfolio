"use client";

import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

const details = [
  {
    label: "mahdisheikh1624@gmail.com",
    href: "mailto:mahdisheikh1624@gmail.com",
    Icon: Mail,
  },
  { label: "+880 1703813599", href: "tel:+8801703813599", Icon: Phone },
  {
    label: "LinkedIn: shekh-mahdi-mesbah",
    href: "https://www.linkedin.com/in/shekh-mahdi-mesbah",
    Icon: Linkedin,
  },
  { label: "GitHub: shkMahdi", href: "https://github.com/shkMahdi", Icon: Github },
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="border-t border-subtle/60 bg-primary px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          05 — Let&apos;s Talk
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted md:text-base">
          Tell me what you&apos;re building — I&apos;ll get back as soon as I can.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-5">
            {details.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring group inline-flex items-start gap-3 rounded-lg text-sm text-muted transition-colors hover:text-accent md:text-base"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent/80 group-hover:text-accent" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <form
            className="space-y-4 rounded-2xl border border-subtle bg-secondary/60 p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* TODO: connect to Formspree or EmailJS */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-medium text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="focus-ring w-full rounded-lg border border-subtle bg-secondary px-3 py-2.5 text-sm text-primary transition-colors duration-200 focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-medium text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="focus-ring w-full rounded-lg border border-subtle bg-secondary px-3 py-2.5 text-sm text-primary transition-colors duration-200 focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="focus-ring w-full resize-y rounded-lg border border-subtle bg-secondary px-3 py-2.5 text-sm text-primary transition-colors duration-200 focus:border-accent"
              />
            </div>
            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
