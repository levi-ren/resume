import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const comfartaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Levi Deang",
  description: "Levi Deang's resume.",
  keywords: [ "React", "NextJS", "NodeJS", "Software developer"  ]
};
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${comfartaa.className} p-2  md:py-6 min-h-screen bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600`}
      >
        {children}
      </body>
    </html>
  );
}
