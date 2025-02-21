import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const HomeModule = dynamic(() => import("@/components/modules/home"), {
  loading: Loading
})

const Home = () => {
  return <HomeModule/>
}
export default Home