"use client";
import { memo } from "react";

import { motion } from "framer-motion";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const WorkProcess = () => {
  const animationVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <section className="w-full mt-32 px-10">
      <div className="2xl:w-[70vw] mx-auto flex flex-col gap-10">
        <h2 className="text-3xl md:text-6xl  text-center p-4">My Work Process</h2>
        <div className="grid gap-5 lg:gap-10 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
            layout
          >
            <div className="grid lg:grid-cols-[calc(35%-1.25rem)_calc(65%-1.25rem)] gap-5 lg:gap-10 border-b border-b-neutral-800 pb-20 md:pb-12">
              <div className="flex flex-col gap-3 pt-8 lg:pt-0">
                <h2 className="text-3xl bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  01.
                </h2>
                <p className="text-3xl">Discovery and Planning</p>
              </div>
              <div className="grid gap-10">
                <p className="text-neutral-500 text-lg font-semibold">
                  I start every project by taking the time to understand your
                  goals, your audience, and your unique requirements. Together,
                  we’ll collaborate closely to create a well-defined roadmap
                  that ensures the project is built on a solid foundation and
                  aligns with your long-term objectives.
                </p>

                <Swiper
                  modules={[Autoplay]}
                  className="w-full relative"
                  breakpoints={{
                    320: { slidesPerView: 3, speed: 8000, spaceBetween: 10 },
                    768: { slidesPerView: 4, speed: 15000, spaceBetween: 20 },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={15000}
                >
                  <div className="h-full w-40 bg-gradient-to-r from-black to-transparent absolute inset-0 z-10"></div>
                  {[
                    "Discovery",
                    "Planning",
                    "Goals",
                    "Audience",
                    "Vision",
                    "Research",
                  ].map((item) => (
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
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
            layout
          >
            <div className="grid lg:grid-cols-[calc(35%-1.25rem)_calc(65%-1.25rem)] gap-5 lg:gap-10 border-b border-b-neutral-800 pb-20 md:pb-12">
              <div className="flex flex-col gap-3 pt-8 lg:pt-0">
                <h2 className="text-3xl bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  02.
                </h2>
                <p className="text-3xl">Researching and Brainstorming</p>
              </div>
              <div className="grid gap-10">
                <p className="text-neutral-500 text-lg font-semibold">
                  I dive into market trends, analyze your competitors, and
                  explore user behaviors to uncover opportunities for
                  innovation. This isn’t just about following best practices; I
                  actively seek creative and original ideas that will make your
                  project stand out. My goal is to deliver something unique and
                  effective, inspired by a deep understanding of your industry.
                </p>

                <Swiper
                  modules={[Autoplay]}
                  className="w-full relative"
                  breakpoints={{
                    320: { slidesPerView: 3, speed: 8000, spaceBetween: 10 },
                    768: { slidesPerView: 4, speed: 15000, spaceBetween: 20 },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                  }}
                >
                  <div className="h-full w-40 bg-gradient-to-r from-black to-transparent absolute inset-0 z-10"></div>
                  {[
                    "Trends",
                    "Ideas",
                    "Market",
                    "Users",
                    "Insights",
                    "Innovation",
                  ].map((item) => (
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
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
            layout
          >
            <div className="grid lg:grid-cols-[calc(35%-1.25rem)_calc(65%-1.25rem)] gap-5 lg:gap-10 border-b border-b-neutral-800 pb-20 md:pb-12">
              <div className="flex flex-col gap-3 pt-8 lg:pt-0">
                <h2 className="text-3xl bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  03.
                </h2>
                <p className="text-3xl">Building and Developing</p>
              </div>
              <div className="grid gap-10">
                <p className="text-neutral-500 text-lg font-semibold">
                  Here’s where I turn ideas into reality. Using Next.js, I
                  personally build every aspect of your application. From
                  setting up robust APIs to crafting reusable components, I
                  ensure that your application is high-performing, scalable, and
                  visually appealing. I pay attention to every detail to create
                  a product that is both functional and delightful to use
                </p>

                <Swiper
                  modules={[Autoplay]}
                  className="w-full relative"
                  breakpoints={{
                    320: { slidesPerView: 3, speed: 8000, spaceBetween: 10 },
                    768: { slidesPerView: 4, speed: 15000, spaceBetween: 20 },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                >
                  <div className="h-full w-40 bg-gradient-to-r from-black to-transparent absolute inset-0 z-10"></div>
                  {[
                    "Coding",
                    "Nextjs ",
                    "APIs",
                    "Scalable",
                    "Design",
                    "Responsive",
                  ].map((item) => (
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
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
            layout
          >
            <div className="grid lg:grid-cols-[calc(35%-1.25rem)_calc(65%-1.25rem)] gap-5 lg:gap-10 border-b border-b-neutral-800 pb-20 md:pb-12">
              <div className="flex flex-col gap-3 pt-8 lg:pt-0">
                <h2 className="text-3xl bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  04.
                </h2>
                <p className="text-3xl">Testing for Perfection</p>
              </div>
              <div className="grid gap-10">
                <p className="text-neutral-500 text-lg font-semibold">
                  Once the development is complete, I rigorously test every
                  element of your application. I go beyond basic checks,
                  examining usability, accessibility, and performance across
                  devices and browsers. I ensure your application is smooth,
                  fast, and free of errors, so you can launch with confidence.
                </p>

                <Swiper
                  modules={[Autoplay]}
                  className="w-full relative"
                  breakpoints={{
                    320: { slidesPerView: 3, speed: 8000, spaceBetween: 10 },
                    768: { slidesPerView: 4, speed: 15000, spaceBetween: 20 },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                  }}
                >
                  <div className="h-full w-40 bg-gradient-to-r from-black to-transparent absolute inset-0 z-10"></div>
                  {[
                    "Testing",
                    "QA",
                    "Usability",
                    "Performance",
                    "Bugs",
                    "Access",
                  ].map((item) => (
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
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
            layout
          >
            <div className="grid lg:grid-cols-[calc(35%-1.25rem)_calc(65%-1.25rem)] gap-5 lg:gap-10 border-b border-b-neutral-800 pb-20 md:pb-12">
              <div className="flex flex-col gap-3 pt-8 lg:pt-0">
                <h2 className="text-3xl bg-gradient-to-b from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  05.
                </h2>
                <p className="text-3xl">Deploying and Optimizing</p>
              </div>
              <div className="grid gap-10">
                <p className="text-neutral-500 text-lg font-semibold">
                  After final testing, I handle the deployment process myself,
                  using platforms like Vercel or netlify for seamless delivery.
                  Post-launch, I continue to monitor and fine-tune the
                  application, ensuring it adapts perfectly to real-world usage
                  and delivers exceptional performance for your users.
                </p>

                <Swiper
                  modules={[Autoplay]}
                  className="w-full relative"
                  breakpoints={{
                    320: { slidesPerView: 3, speed: 8000, spaceBetween: 10 },
                    768: { slidesPerView: 4, speed: 15000, spaceBetween: 20 },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                >
                  <div className="h-full w-40 bg-gradient-to-r from-black to-transparent absolute inset-0 z-10"></div>
                  {[
                    "Deploy",
                    "Launch",
                    "Hosting",
                    "Monitor",
                    "Optimize",
                    "Analysis",
                  ].map((item) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default memo(WorkProcess);
