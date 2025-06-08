import Link from "next/link";
import dynamic from "next/dynamic";
import { fade } from "@/lib/animation";

const Animate = dynamic(() => import("@/components/custom/animation/Animate"));
const AnimatedText = dynamic(
  () => import("@/components/custom/animation/animatedText/AnimatedText")
);
const AnimateTextOnHover = dynamic(
  () => import("@/components/custom/animation/animatedText/AnimateTextOnHover")
);


const Footer = () => {
  const contactDelay = 1;

  return (
    <>
      <Animate variants={fade}>
        <footer className="w-[90%] mx-auto lg:w-full mt-64 md:mt-72 mb-10 md:p-5">
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
                  Based In Cairo
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
            <Animate variants={fade}>
              <div className="grid lg:grid-cols-3 items-center border-t border-neutral-800 pt-10 gap-10">
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

                <ul className="flex justify-between gap-10 md:gap-5 font-medium order-1 xl:order-2 flex-wrap">
                  <li>
                    <a
                      href="https://github.com/abdelrahmanhatemdev"
                      target="_blank"
                      aria-label="Github"
                    >
                      <AnimateTextOnHover text="Github" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdelrahmanhatemdev/"
                      target="_blank"
                      aria-label="Linkedin"
                    >
                      <AnimateTextOnHover text="Linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stackoverflow.com/users/16331715/abdelrahman-hatem"
                      target="_blank"
                      aria-label="Stackoverflow"
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
            </Animate>
          </div>
        </footer>
      </Animate>
    </>
  );
};
export default Footer;
