import { memo, ReactNode } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/modules/header/Header"));

const CTA = dynamic(() => import("@/components/modules/cta"))

const Footer = dynamic(() => import("@/components/modules/footer/Footer"))

function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative">
      <Header />
      {children}
      <CTA/>
      <Footer />
    </main>
  );
}

export default memo(AppLayout);
