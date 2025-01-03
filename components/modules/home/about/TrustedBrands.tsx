import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const brands = [
  "roasting-house",
  "camel-step",
  "ccit",
  "fg-sports",
  "menu-app",
  "ajlan",
  "mystation",
  "al-zowayed",
  "bullet",
  "wow",
  "asasiat",
  "codecube",
  "coming",
  "crossedlink",
];

const TrustedBrands = () => {

  

  const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0.8 },
  };
  return (
      
          <motion.div
            initial="hidden"
            whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} variants={animationVariants}
            layout
          >
            <div className="bg-gradient-to-r from-neutral-900 to-[#1f1f1f] rounded-3xl border pt-10 border-neutral-800 h-full flex flex-col gap-10 justify-center items-center">
              <h3 className="md:text-xl font-semibold text-center p-4">
                Relied on by leaders across enterprises, growing scale-ups, and
                innovative startups
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-7 px-4 lg:px-20 gap-4 lg:gap-x-10">
                {brands.map((brand) => (
                  <Image
                    key={`${brand}`}
                    src={`/assets/media/brands/${brand}.png`}
                    alt={`${brand.replaceAll("-", " ")}`}
                    width={180}
                    height={180}
                    priority={true}
                    className="transition duration-1000 ease-in-out cursor-pointer
                       brightness-0 contrast-200 invert
                       hover:brightness-100 hover:contrast-100 hover:invert-0
                       "
                  />
                ))}
              </div>
            </div>
          </motion.div>
       
  );
};
export default memo(TrustedBrands);
