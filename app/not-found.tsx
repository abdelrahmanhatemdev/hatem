const ErrorPage = dynamic(() => import("@/components/custom/ErrorPage"));

import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "404 Page",
};

export default function NotFound() {
  return <ErrorPage title="404" description="Not Found!" />;
}
