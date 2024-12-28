"use client";
import { memo, ReactNode } from "react";

function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>;
}

export default memo(AppLayout);
