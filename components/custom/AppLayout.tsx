import { memo, ReactNode } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/modules/header/Header"), {
  ssr: false,
  loading: () => <></>
});

const CTA = dynamic(() => import("@/components/modules/cta"), {
  ssr: false,
  loading: () => <></>,
});

const Footer = dynamic(() => import("@/components/modules/footer/Footer"), {
  ssr: false,
  loading: () => <></>,
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
