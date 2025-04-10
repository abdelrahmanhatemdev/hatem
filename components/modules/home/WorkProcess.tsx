"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { fade } from "@/lib/animation";
import LazyAnimation from "@/components/custom/animation/LazyAnimation";

const list = [
  {
    title: "Discovery and Planning",
    details: `I start every project by taking the time to understand your goals, your audience, and your unique requirements. Together, we'll collaborate closely to create a well-defined roadmap that ensures the project is built on a solid foundation and aligns with your long-term objectives.`,
    keywords: [
      "Discovery",
      "Planning",
      "Goals",
      "Audience",
      "Vision",
      "Research",
    ],
  },
  {
    title: "Researching and Brainstorming",
    details: `I dive into market trends, analyze your competitors, and
                  explore user behaviors to uncover opportunities for
                  innovation. This isn't just about following best practices; I
                  actively seek creative and original ideas that will make your
                  project stand out. My goal is to deliver something unique and
                  effective, inspired by a deep understanding of your industry.`,
    keywords: ["Trends", "Ideas", "Market", "Users", "Insights", "Innovation"],
  },
  {
    title: "Building and Developing",
    details: `Here's where I turn ideas into reality. Using Next.js, I
                  personally build every aspect of your application. From
                  setting up robust APIs to crafting reusable components, I
                  ensure that your application is high-performing, scalable, and
                  visually appealing. I pay attention to every detail to create
                  a product that is both functional and delightful to use.`,
    keywords: ["Coding", "Nextjs ", "APIs", "Scalable", "Design", "Responsive"],
  },
  {
    title: "Testing for Perfection",
    details: `Once the development is complete, I rigorously test every
                  element of your application. I go beyond basic checks,
                  examining usability, accessibility, and performance across
                  devices and browsers. I ensure your application is smooth,
                  fast, and free of errors, so you can launch with confidence.`,
    keywords: ["Testing", "QA", "Usability", "Performance", "Bugs", "Access"],
  },
  {
    title: "Deploying and Optimizing",
    details: `After final testing, I handle the deployment process myself,
                  using platforms like Vercel or netlify for seamless delivery.
                  Post-launch, I continue to monitor and fine-tune the
                  application, ensuring it adapts perfectly to real-world usage
                  and delivers exceptional performance for your users.`,
    keywords: [
      "Deploy",
      "Launch",
      "Hosting",
      "Monitor",
      "Optimize",
      "Analysis",
    ],
  },
];

const WorkProcess = () => {
  return (
    <section className="w-full mt-32">
      <div className="2xl:w-[70%] w-[90%] mx-auto flex flex-col gap-10">
        <h2 className="text-4xl md:text-6xl text-center p-4">
          My Work Process
        </h2>
        <div className="grid gap-5 lg:gap-10 ">
          {list.map((item, i) => (
            <LazyAnimation key={`${i}`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
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
              </motion.div>
            </LazyAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
export default memo(WorkProcess);
