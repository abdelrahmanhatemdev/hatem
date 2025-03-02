import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Hero = dynamic(() => import("@/components/modules/home/Hero"), {
  loading: Loading,
});

const About = dynamic(() => import("@/components/modules/home/About"), {
  loading: Loading,
});

const SelectedWorks = dynamic(() => import("@/components/modules/home/Works"), {
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

const Stack = dynamic(() => import("@/components/modules/home/Stack"), {
  loading: Loading,
});

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SelectedWorks/>
      <Expertise />
      <WorkProcess />
      <Stack />
    </>
  );
};
export default Home;
