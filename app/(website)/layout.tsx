import MainLayout from "@/components/custom/MainLayout";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: `Abdelrahman Hatem | Next.js Frontend Developer | Portfolio`,
    description: "Experienced Next.js Frontend Developer with 6+ years in building scalable, high-performance web apps. Expert in React, TypeScript, and Tailwind CSS.",
    icons:{
      icon: "/favicon.ico", 
      shortcut: "/favicon-32x32.png", 
      apple: "/apple-touch-icon"
    }, 
    manifest: "/site.webmanifest"
}

export default function Home({children}: {children: ReactNode}) {
  return (
    <MainLayout>{children}</MainLayout>
  );
}
