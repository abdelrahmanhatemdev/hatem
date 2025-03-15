import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";
import { fade } from "@/lib/animation";

// const Logo = dynamic(() => import("@/components/custom/Logo"), {
//   loading: Loading,
// });

const AnimatedText = dynamic(
  () => import("@/components/custom/animation/animatedText/AnimatedText"),
  {
    loading: Loading,
  }
);

const AnimateTextOnHover = dynamic(
  () => import("@/components/custom/animation/animatedText/AnimateTextOnHover"),
  {
    loading: Loading,
  }
);

const Footer = () => {
  const contactDelay = 1;

  return (
    <>
      <motion.div initial="hidden" whileInView="visible" variants={fade} layout>
        <footer className="w-[90%] mx-auto lg:w-full mt-64 md:mt-72 mb-10">
          <div className="0 border border-neutral-800 lg:p-20 lg:pb-10 p-10 rounded-xl 2xl:w-[75%] mx-auto bg-gradient-to-r from-neutral-900 to-[#1f1f1f] flex flex-col lg:gap-20 gap-10">
            <div className="flex justify-between w-full lg:gap-20 gap-10 flex-col lg:flex-row">
              <div className="flex flex-col lg:gap-10 gap-5">
                <h2 className="text-4xl lg:text-6xl font-medium">
                  <div>
                    <AnimatedText text="Let’s " direction="vertical" />{" "}
                    <AnimatedText text="create " direction="vertical" />{" "}
                  </div>
                  <AnimatedText text="something " direction="vertical" />{" "}
                  <AnimatedText text="great " direction="vertical" />{" "}
                  <div>
                    <AnimatedText text="together" direction="vertical" />
                  </div>
                </h2>
                <div className="group text-neutral-400 uppercase lg:text-sm text-[.7rem]">
                  <AnimatedText text="Based" /> <AnimatedText text="In" />{" "}
                  <span className="group-hover:text-white transition-colors">
                    <AnimatedText text="Cairo" />
                  </span>{" "}
                  <AnimatedText text="-" /> <AnimatedText text="Working" />{" "}
                  <AnimatedText text="Worldwide" />
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-end">
                <a
                  className="text-2xl lg:text-4xl flex flex-wrap"
                  href="mailto:abdelrahmanhatemdev@gmail.com"
                  title="SEND ME AN EMAIL"
                >
                  <span>
                    <strong className="font-bold text-2xl lg:text-4xl">
                      <AnimatedText text="A" delay={contactDelay} />
                    </strong>
                    <AnimatedText
                      text="bdelrahman"
                      delay={contactDelay + 0.1}
                    />
                  </span>
                  <span>
                    <strong className="font-bold text-2xl lg:text-4xl">
                      <AnimatedText text="H" delay={contactDelay + 1.3} />
                    </strong>
                    <AnimatedText text="atem" delay={contactDelay + 1.4} />
                  </span>
                  <span>
                    <strong className="font-bold text-2xl lg:text-4xl">
                      <AnimatedText text="D" delay={contactDelay + 1.9} />
                    </strong>
                    <AnimatedText text="ev" delay={contactDelay + 2.1} />
                  </span>
                  <span className="text-neutral-700">
                    <AnimatedText
                      text="@gmail.com"
                      delay={contactDelay + 2.2}
                    />
                  </span>
                </a>
                <a
                  className="text-xl lg:text-4xl font-bold flex gap-2"
                  href="tel:00201070070745"
                  title="CALL ME NOW"
                >
                  <span className="text-neutral-700">
                    <AnimatedText text="+20" delay={contactDelay + 3} />
                  </span>
                  <span>
                    <AnimatedText
                      text="010"
                      delay={contactDelay + 3.5}
                    />
                  </span>
                  <span>
                    <AnimatedText
                      text="700"
                      delay={contactDelay + 3.7}
                    />
                  </span>
                  <span>
                    <AnimatedText
                      text="707"
                      delay={contactDelay + 3.9}
                    />
                  </span>
                  <span>
                    <AnimatedText
                      text="45"
                      delay={contactDelay + 4.1}
                    />
                  </span>
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block"
            >
              <div className="grid md:grid-cols-[25%_45%_30%] lg:grid-cols-3 items-center border-t border-neutral-800 pt-10 gap-10">
                <div className="flex justify-between items-center order-2 md:order-1 flex-wrap">
                  <Link
                    href="/"
                    className="group uppercase font-bold text-lg flex gap-2 items-center cursor-pointer relative"
                  >
                    <span className="h-full flex items-center text-2xl lg:text-5xl font-satoshi">
                      <span>H</span> <span className="lowercase">ATEM</span>
                    </span>
                  </Link>
                  <p className="flex-col md:items-end order-3 flex md:hidden">
                    <strong className="font-semibold">&copy; 2025 Hatem</strong>
                    <span className="text-sm text-neutral-500">
                      All rights reserved
                    </span>
                  </p>
                </div>

                <ul className="flex justify-between gap-10 font-medium order-1 md:order-2  flex-wrap">
                  <li>
                    <a
                      href="https://github.com/abdulrahmanhatem"
                      target="_blank"
                    >
                      <AnimateTextOnHover text="Github" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdelrahmanhatemdev/"
                      target="_blank"
                    >
                      <AnimateTextOnHover text="Linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stackoverflow.com/users/16331715/abdelrahman-hatem"
                      target="_blank"
                    >
                      <AnimateTextOnHover text="Stackoverflow" />
                    </a>
                  </li>
                </ul>

                <p className="flex-col md:items-end order-3 hidden md:flex">
                  <strong className="font-semibold">&copy; 2025 Hatem</strong>
                  <span className="text-sm text-neutral-500">
                    All rights reserved
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};
export default Footer;
