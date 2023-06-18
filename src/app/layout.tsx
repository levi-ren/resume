import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfartaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const description =
  "Welcome to my online resume. A digital document providing a summary of my work experience, skills, projects, and other relevant qualifications.";

export const metadata: Metadata = {
  title: "Levi Deang | Senior Software Engineer | Resume",
  description,
  keywords: [
    "React",
    "NextJS",
    "NodeJS",
    "Software developer",
    "Resume",
    "CV",
    "Front-end developer",
    "Developer",
    "Frontend",
  ],
  alternates: {
    canonical: "https://resume.levideang.dev",
  },
  applicationName: "Resume V3",
  openGraph: {
    title: "Levi Deang - Resume",
    description,
    url: "https://resume.levideang.dev/",
    images: "/resume.png",
  },
  twitter: {
    title: "Levi Deang - Resume",
    description,
    card: "summary_large_image",
    site: "https://resume.levideang.dev/",
    images: "/resume.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${comfartaa.className} p-2 md:py-6 min-h-screen bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
