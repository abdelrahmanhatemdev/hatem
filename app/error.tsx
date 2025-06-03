"use client";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const ErrorPage = dynamic(() => import("@/components/custom/ErrorPage"));

export const metadata: Metadata = {
  title: "Something Wrong!",
};

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorPage title="Something went wrong!" description={`${error.message}`} />
  );
}
