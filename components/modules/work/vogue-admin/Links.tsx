import { memo } from "react";
import { fadeD1, fadeDu1D1, fadeDu1D2, fadeDu1D3 } from "@/lib/animation";
import { links } from "@/data/works/vogueAdmin";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));

const Links = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="flex justify-between flex-wrap gap-20">
        <Animate
          variants={fadeD1}
          className="flex flex-col gap-2 lg:gap-5 order-2 md:order-1"
        >
          {links.map((item, i) => {
            const valueClass =
              "text-xs lg:text-2xl tracking-widest font-medium";
            return (
              <div className="flex flex-col *:leading-6" key={i}>
                <h2 className="text-neutral-400 font-semibold">{item.title}</h2>
                {item?.href ? (
                  <a
                    target="_blank"
                    href={`${item.href}`}
                    className={valueClass}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className={valueClass}>{item.value}</p>
                )}
              </div>
            );
          })}
        </Animate>

        <div className="flex flex-col gap-5 md:text-[1.5vw] lg:text-[1.2vw] md:max-w-[40vw] order-1 md:order-2">
          <Animate element="p" variants={fadeDu1D1} className=" font-medium">
            I crafted Vogue Admin with dedication and vision, shaping every
            detail with care. It&apos;s more than just a project—it&apos;s a
            journey of constant refinement and innovation. I&apos;m always
            working to make it better, and I&apos;d love to collaborate and take
            it even further together.
          </Animate>
          <div className="flex flex-col">
            <Animate
              element="p"
              variants={fadeDu1D2}
              className="font-extrabold font-satoshi"
            >
              <span className="text-neutral-600 md:text-[1.2vw] lg:text-[1vw]">
                Abdelrahman
              </span>{" "}
              Hatem
            </Animate>
            <Animate
              element="p"
              variants={fadeDu1D3}
              className="text-base md:text-[1vw] lg:text-[0.8vw]"
            >
              Nextjs <span className="text-neutral-600">Developer</span>{" "}
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Links);
