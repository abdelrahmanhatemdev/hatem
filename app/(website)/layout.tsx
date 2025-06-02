import MainLayout from "@/components/custom/MainLayout";
import { ReactNode } from "react";

export default function Home({children}: {children: ReactNode}) {
  return (
    <MainLayout>{children}</MainLayout>
  );
}
