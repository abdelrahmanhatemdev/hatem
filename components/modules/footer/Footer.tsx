import Link from "next/link";

import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Logo = dynamic(() => import("@/components/custom/Logo"), {
  loading: Loading,
});

const Footer = () => {
  return (
    <footer className="w-full mt-72 px-10 mb-10">
      <div className="0 border border-neutral-800 lg:p-20 lg:pb-10 p-10  rounded-xl 2xl:w-[70vw] mx-auto bg-gradient-to-r from-neutral-900 to-[#1f1f1f] flex flex-col lg:gap-20 gap-10">
        <div className="flex justify-between w-full lg:gap-20 gap-10 flex-col lg:flex-row">
          <div className="flex flex-col lg:gap-10 gap-5">
            <h2 className="text-4xl lg:text-6xl max-w-64 lg:max-w-96 font-medium">
              Let’s create something great together
            </h2>
            <p className="text-neutral-400 uppercase lg:text-sm text-[.7rem]">
              Based In Cairo - Working Worldwide
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-end">
            <a
              className="text-2xl lg:text-4xl flex flex-wrap"
              href="mailto:abdelrahmanhatem.dev@gmail.com"
              title="SEND ME AN EMAIL"
            >
              <span>
                {" "}
                <strong className="font-bold text-2xl lg:text-4xl">A</strong>
                bdelrahman
              </span>
              <span className="text-neutral-400">.</span>
              <span>
                {" "}
                <strong className="font-bold text-2xl lg:text-4xl">H</strong>
                atem
              </span>
              <span className="text-neutral-400">.</span>
              <span>
                {" "}
                <strong className="font-bold text-2xl lg:text-4xl">D</strong>ev
              </span>
              <span className="text-neutral-700">@gmail.com</span>
            </a>
            <a
              className="text-xl lg:text-4xl font-bold"
              href="tel:00201070070745"
              title="CALL ME NOW"
            >
              <span className="text-neutral-700">002</span>
              <span>01070070745</span>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-[25%_45%_30%] lg:grid-cols-3 items-center border-t border-neutral-800 pt-10 gap-10">
          <div className="flex justify-between items-center order-2 md:order-1 flex-wrap">
            <Link
              href="/"
              className="group uppercase font-bold text-lg flex gap-2 items-center cursor-pointer relative"
            >
              <Logo className="w-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 h-full flex items-center text-sm md:text-2xl lg:text-5xl">
                HATEM
              </span>
            </Link>
            <p className="flex-col md:items-end order-3 flex md:hidden">
              <strong className="font-semibold">&copy; 2025 Hatem</strong>{" "}
              <span className="text-sm text-neutral-500">All rights reserved</span>
            </p>
          </div>

          <ul className="flex justify-between gap-10 font-medium order-1 md:order-2  flex-wrap">
            <li>
              <a href="https://github.com/abdulrahmanhatem" target="_blank">
                Github
              </a>{" "}
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdelrahmanhatemdev/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/16331715/abdelrahman-hatem"
                target="_blank"
              >
                Stackoverflow
              </a>
            </li>
          </ul>

          <p className="flex-col md:items-end order-3 hidden md:flex">
            <strong className="font-semibold">&copy; 2025 Hatem</strong>{" "}
            <span className="text-sm text-neutral-500">All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
