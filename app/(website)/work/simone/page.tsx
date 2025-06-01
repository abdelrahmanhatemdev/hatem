
import dynamic from "next/dynamic"
import { Metadata } from "next"

const Project = dynamic(() => import("@/components/modules/work/simone"))

const title = "Paolo Simone"

export const metadata: Metadata = {title}

const ProjectModule = () => {
  return <Project/>
}
export default ProjectModule