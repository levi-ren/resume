import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfartaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "Levi Deang",
  description: "Levi Deang's resume",
};
// bg-gradient-to-tr from-green-500 via-blue-600 to-blue
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${comfartaa.className} px-2 bg-zinc-700 py-6 -700 min-h-screen `}
      >
        {children}
      </body>
    </html>
  );
}
