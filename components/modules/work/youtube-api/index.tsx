"use client"
import Loading from "@/components/custom/Loading";
import dynamic from "next/dynamic";
import { memo } from "react";

const Details = dynamic(
  () => import("@/components/modules/work/youtube-api/Details"),
  {
    loading: Loading,
    ssr: false 
  }
);

const Home = dynamic(
  () => import("@/components/modules/work/youtube-api/Home"),
  {
    loading: Loading,
    ssr: false 
  }
);

const HomeMobile = dynamic(
  () => import("@/components/modules/work/youtube-api/HomeMobile"),
  {
    loading: Loading,
    ssr: false 
  }
);

const Brand = dynamic(
  () => import("@/components/modules/work/youtube-api/Brand"),
  {
    loading: Loading,
    ssr: false 
  }
);

const BigScreen = dynamic(
  () => import("@/components/modules/work/youtube-api/BigScreen"),
  {
    loading: Loading,
    ssr: false 
  }
);

const DarkCaption = dynamic(
  () => import("@/components/modules/work/youtube-api/DarkCaption"),
  {
    loading: Loading,
    ssr: false 
  }
);
const Dark = dynamic(
  () => import("@/components/modules/work/youtube-api/Dark"),
  {
    loading: Loading,
    ssr: false 
  }
);
const Features = dynamic(
  () => import("@/components/modules/work/youtube-api/Features"),
  {
    loading: Loading,
    ssr: false 
  }
);
const Links = dynamic(
  () => import("@/components/modules/work/youtube-api/Links"),
  {
    loading: Loading,
    ssr: false 
  }
);

const Work = () => {
  return (
    <div className="pt-16">
      <Details />
      <Home />
      <HomeMobile />
      <Brand />
      <BigScreen />
      <DarkCaption />
      <Dark />
      <Features />
      <Links />
    </div>
  );
};
export default memo(Work);
