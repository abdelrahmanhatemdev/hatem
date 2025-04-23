
import dynamic from "next/dynamic"
import Loading from "@/components/custom/Loading"
import { Metadata } from "next"

const Project = dynamic(() => import("@/components/modules/work/youtube-api"), {loading: Loading})

const title = "Youtube API Clone"

export const metadata: Metadata = {title}

const ProjectModule = () => {
  return <Project/>
}
export default ProjectModule