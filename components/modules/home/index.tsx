import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Hero = dynamic(() => import("@/components/modules/home/Hero"), {
  loading: Loading,
});

const About = dynamic(() => import("@/components/modules/home/About"), {
  loading: Loading,
});

const Expertise = dynamic(() => import("@/components/modules/home/Expertise"), {
  loading: Loading,
});

const WorkProcess = dynamic(
  () => import("@/components/modules/home/WorkProcess"),
  {
    loading: Loading,
  }
);

const StartProject = dynamic(
  () => import("@/components/modules/home/StartProject"),
  {
    loading: Loading,
  }
);

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <WorkProcess />
      <StartProject />
      
    </>
  );
};
export default Home;
