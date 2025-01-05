import { memo, ReactNode } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Header = dynamic(() => import("@/components/modules/header/Header"), {
  loading: Loading,
});

function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative w-[98vw]">
      <Header />
      {children}
      <div className="mt-40">Footer</div>
    </main>
  );
}

export default memo(AppLayout);
