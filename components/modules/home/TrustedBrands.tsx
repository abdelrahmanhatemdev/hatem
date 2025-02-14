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
      viewport={{ once: true, amount: 0.5 }}
      variants={animationVariants}
      layout
    >
      
      <div className="pt-32 h-full flex flex-col gap-10 justify-center items-center">
        <h3 className="text-4xl text-center p-4">
        Trusted By Innovative Brands
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 ">
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                ...animationVariants,
                visible: {
                  ...animationVariants.visible,
                  transition: {
                    ...animationVariants.visible.transition,
                    delay: 0.1 * (index + 1),
                  },
                },
              }}
              layout
            >
              <div className="group cursor-pointer p-4 bg-neutral-900 rounded-3xl border border-neutral-800  transition-colors duration-500 ease-in-out">
                <Image
                  src={`/assets/media/brands/${brand}.png`}
                  alt={`${brand.replaceAll("-", " ")}`}
                  width={180}
                  height={180}
                  priority={true}
                  className="transition duration-500 ease-in-out
                       brightness-0 contrast-200 invert
                       group-hover:brightness-100 group-hover:contrast-100 group-hover:invert-0
                       "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default memo(TrustedBrands);
