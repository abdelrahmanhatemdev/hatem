import { memo, ReactNode } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Header = dynamic(() => import("@/components/modules/header/Header"), {
  loading: Loading,
});

const Footer = dynamic(() => import("@/components/modules/footer/Footer"), {
  loading: Loading,
});

function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default memo(AppLayout);
