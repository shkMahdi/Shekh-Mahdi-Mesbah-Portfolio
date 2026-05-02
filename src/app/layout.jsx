import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Shekh Mahdi Mesbah | Web Developer",
  description:
    "Frontend-focused developer and problem solver building modern web experiences with React and Next.js.",
  openGraph: {
    title: "Shekh Mahdi Mesbah | Web Developer",
    description:
      "Frontend-focused developer and problem solver building modern web experiences with React and Next.js.",
    url: "/",
    siteName: "Shekh Mahdi Mesbah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shekh Mahdi Mesbah | Web Developer",
    description:
      "Frontend-focused developer and problem solver building modern web experiences with React and Next.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-primary text-primary">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
