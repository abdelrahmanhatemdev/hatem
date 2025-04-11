"use client"
import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

// const Hero = dynamic(() => import("@/components/modules/home/Hero"), {
//   loading: Loading,
//   ssr: false 
// });

// const About = dynamic(() => import("@/components/modules/home/About"), {
//   loading: Loading,
//   ssr: false,
// });

// const SelectedWorks = dynamic(() => import("@/components/modules/home/Works"), {
//   loading: Loading,
//   ssr: false,
// });

// const Expertise = dynamic(() => import("@/components/modules/home/Expertise"), {
//   loading: Loading,
//   ssr: false,
// });

// const WorkProcess = dynamic(
//   () => import("@/components/modules/home/WorkProcess"),
//   {
//     loading: Loading,
//     ssr: false,
//   }
// );

// const Stack = dynamic(() => import("@/components/modules/home/Stack"), {
//   loading: Loading,
//   ssr: false,
// });

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      {/* <About />
      <SelectedWorks/>
      <Expertise />
      <WorkProcess /> */}
      {/* <Stack /> */}
    </>
  );
};
export default Home;
