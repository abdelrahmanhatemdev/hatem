"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { animate } from "@/lib/animation/animate";
import dynamic from "next/dynamic";
import { workProcess } from "@/data/workProcess";
const Animate = dynamic(() => import("@/components/custom/animation/Animate"));
const fade = animate({ type: "fade" });

function WorkProcessSwiper() {
  return (
    <div className="grid gap-5 lg:gap-10 ">
          {workProcess.map((item, i) => (
            <Animate
              viewOnce={true}
              variants={{
                ...fade,
                visible: {
                  ...fade.visible,
                  transition: {
                    ...fade.visible.transition,
                    delay: 0.05 * (i + 1),
                  },
                },
              }}
              key={`${i}`}
            >
              <div className="grid lg:grid-cols-[calc(35%-1.25rem)_calc(65%-1.25rem)] gap-5 lg:gap-10 border-b border-b-neutral-800 pb-20 md:pb-12">
                <div className="flex flex-col gap-3 pt-8 lg:pt-0">
                  <h2 className="text-3xl bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent">
                    0{++i}.
                  </h2>
                  <p className="text-3xl">{item.title}</p>
                </div>
                <div className="grid gap-10">
                  <p className="text-neutral-500 text-lg font-semibold">
                    {item.details}
                  </p>

                  <Swiper
                    modules={[Autoplay]}
                    className="w-full relative"
                    breakpoints={{
                      320: {
                        slidesPerView: 3,
                        speed: 8000,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 4,
                        speed: 15000,
                        spaceBetween: 20,
                      },
                    }}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      reverseDirection: i % 2 === 0 ? true : false,
                    }}
                    speed={15000}
                  >
                    <div className="h-full w-40 bg-gradient-to-r from-black to-transparent absolute inset-0 z-10"></div>
                    {item.keywords.map((item) => (
                      <SwiperSlide key={item}>
                        <div className="flex justify-center items-center">
                          <div className="bg-gradient-to-bl from-neutral-950 to-[#202020] py-2 px-4 md:py-4 md:px-8 rounded-full flex justify-center items-center text-sm border border-neutral-900">
                            {item}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="h-full w-40 bg-gradient-to-l from-black to-transparent absolute top-0 end-0 z-10"></div>
                  </Swiper>
                </div>
              </div>
            </Animate>
          ))}
        </div>
  )
}
export default memo(WorkProcessSwiper)