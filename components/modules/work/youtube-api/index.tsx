
import dynamic from "next/dynamic";
import { memo } from "react";

const Details = dynamic(
  () => import("@/components/modules/work/youtube-api/Details"));

const Home = dynamic(
  () => import("@/components/modules/work/youtube-api/Home"));

const HomeMobile = dynamic(
  () => import("@/components/modules/work/youtube-api/HomeMobile"));

const Brand = dynamic(
  () => import("@/components/modules/work/youtube-api/Brand"));

const BigScreen = dynamic(
  () => import("@/components/modules/work/youtube-api/BigScreen"));

const DarkCaption = dynamic(
  () => import("@/components/modules/work/youtube-api/DarkCaption"));
const Dark = dynamic(
  () => import("@/components/modules/work/youtube-api/Dark"));
const Features = dynamic(
  () => import("@/components/modules/work/youtube-api/Features"));
const Links = dynamic(
  () => import("@/components/modules/work/youtube-api/Links"));

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
