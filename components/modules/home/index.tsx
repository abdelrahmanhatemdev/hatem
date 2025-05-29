import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/modules/home/Hero"));
const About = dynamic(() => import("@/components/modules/home/About"));
const SelectedWorks = dynamic(() => import("@/components/modules/home/Works"));
const Expertise = dynamic(() => import("@/components/modules/home/Expertise"));
const WorkProcess = dynamic(() => import("@/components/modules/home/WorkProcess"));
const Stack = dynamic(() => import("@/components/modules/home/Stack"));

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SelectedWorks />
      <Expertise />
      <WorkProcess />
      <Stack />
    </>
  );
};
export default Home;
