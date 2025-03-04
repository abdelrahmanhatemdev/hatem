import { memo } from "react";
import {motion} from "framer-motion"
const Links = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="flex justify-between flex-wrap gap-20">
        <div className="flex flex-col gap-10 min-w-fit">
          <div className="flex flex-col *:leading-6">
            <h2 className="text-neutral-400 font-semibold">Link</h2>
            <a
              target="_blank"
              href="/"
              className="text-2xl tracking-widest font-medium"
            >
              Visit Site
            </a>
          </div>
          <div className="flex flex-col *:leading-6">
            <h2 className="text-neutral-400 font-semibold">Git</h2>
            <a
              target="_blank"
              href="https://github.com/abdulrahmanhatem/vogue-admin"
              className="text-2xl tracking-widest font-medium"
            >
              Visit Git
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-2xl max-w-[800px]">
          <p className=" font-medium">
            I crafted Vogue Admin with dedication and vision, shaping every
            detail with care. It’s more than just a project—it's a journey of
            constant refinement and innovation. I’m always working to make it
            better, and I’d love to collaborate and take it even further
            together.
          </p>
          <div className="flex flex-col">
            <p className="font-extrabold font-satoshi">
              <span className="text-neutral-600">Abdelrahman</span> Hatem
            </p>
            <p className="text-base">Nextjs <span className="text-neutral-600">Developer</span> </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Links);
