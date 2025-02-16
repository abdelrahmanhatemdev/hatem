
import Loading from "@/components/custom/Loading";
import dynamic from "next/dynamic";
import { memo } from "react";

const Details = dynamic(() => import("@/components/modules/work/vogue-admin/Details"), {
  loading: Loading,
});

const Work = () => {
  return (
    <div className="pt-16">
      <Details/>
    </div>
  )
}
export default memo(Work)