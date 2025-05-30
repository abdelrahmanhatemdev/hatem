
import dynamic from "next/dynamic"
import { Metadata } from "next"

const Project = dynamic(() => import("@/components/modules/work/vogue-admin"))

const title = "Vogue Admin"

export const metadata: Metadata = {title}

const ProjectModule = () => {
  return <Project/>
}
export default ProjectModule