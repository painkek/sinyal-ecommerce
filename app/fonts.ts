import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const gothicFont = localFont({
  src: "../public/fonts/copperplategothic_bold.woff",
  weight: "700",
  variable: "--font-copperplate-gothic",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
