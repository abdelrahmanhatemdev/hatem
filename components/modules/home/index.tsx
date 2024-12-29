import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Hero = dynamic(() => import("@/components/modules/home/Hero"), {
  loading: Loading,
});

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default Home;
