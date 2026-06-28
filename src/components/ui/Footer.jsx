import { Github, Linkedin, Mail } from "lucide-react";

const social = [
  {
    label: "GitHub",
    href: "https://github.com/shkMahdi",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shekh-mahdi-mesbah",
    Icon: Linkedin,
  },
  // {
  //   label: "X (Twitter)",
  //   href: "https://twitter.com",
  //   Icon: function XIcon({ className }) {
  //     return (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         fill="currentColor"
  //         className={className}
  //         aria-hidden
  //       >
  //         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //       </svg>
  //     );
  //   },
  // },
  {
    label: "Email",
    href: "mailto:mahdisheikh1624@gmail.com",
    Icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-subtle bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted md:flex-row md:px-6">
        <p className="text-center md:text-left">
          © 2025 Shekh Mahdi Mesbah
        </p>
        <div className="flex items-center gap-4">
          {social.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="focus-ring rounded-md text-muted transition-colors hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
