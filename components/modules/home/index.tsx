import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Hero = dynamic(() => import("@/components/modules/home/Hero"), {
  loading: Loading,
});

const About = dynamic(() => import("@/components/modules/home/About"), {
  loading: Loading,
});

const Home = () => {
  return (
    <>
      <Hero />
      {/* <div>Images</div> */}
      <About/>
      {/* <div>Projects</div>
      <div>Images</div>
      <div>Area of Expertise</div> */}


    </>
  );
};
export default Home;
