"use client";
import { ReactNode, useEffect, useState } from "react";
import NoInternet from "./NoInternet";
import { ReactLenis } from "lenis/react";
import AppLayout from "./AppLayout";

function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [setIsOnline]);

  return !isOnline ? (
    <NoInternet />
  ) : (
    <ReactLenis root>
      <AppLayout>{children}</AppLayout>
    </ReactLenis>
  );
}

export default MainLayout;
