import { memo, ReactNode } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Header = dynamic(() => import("@/components/modules/header/Header"), {
  loading: Loading,
});

const CTA = dynamic(() => import("@/components/modules/cta"), {
  ssr: false,
  loading: Loading,
});

const Footer = dynamic(() => import("@/components/modules/footer/Footer"), {
  ssr: false,
  loading: Loading,
});

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
