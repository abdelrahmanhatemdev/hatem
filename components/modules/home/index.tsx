"use client";
import dynamic from "next/dynamic";
// import Loading from "@/components/custom/Loading";

// const Hero = dynamic(() => import("@/components/modules/home/Hero"), {
//   loading: Loading,
//   ssr: false
// });

const About = dynamic(() => import("@/components/modules/home/About"), {
  loading: () => <></>,
  ssr: false,
});

const SelectedWorks = dynamic(() => import("@/components/modules/home/Works"), {
  loading: () => <></>,
  ssr: false,
});

// const Expertise = dynamic(() => import("@/components/modules/home/Expertise"), {
//   loading: () => <></>,
//   ssr: false,
// });

// const WorkProcess = dynamic(
//   () => import("@/components/modules/home/WorkProcess"),
//   {
//     loading: () => <></>,
//     ssr: false,
//   }
// );

const Stack = dynamic(() => import("@/components/modules/home/Stack"), {
  loading: () => <></>,
  ssr: false,
});

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      {/* <About /> */}
      <SelectedWorks/>
      {/* <Expertise /> */}
      {/* <WorkProcess /> */}
      <Stack />
    </>
  );
};
export default Home;
