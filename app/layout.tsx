import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap"
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-satoshi",
  display: "swap"
});

const ogg = localFont({
  src: [
    {
      path: "./fonts/ogg/Ogg-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/ogg/Ogg-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ogg/Ogg-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ogg/Ogg-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ogg/Ogg-Black.otf",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-ogg",
});

export const metadata: Metadata = {
  title: "Hatem",
  description: "Generated by Hatem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interTight.className} ${interTight.variable} ${satoshi.variable} ${ogg.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
