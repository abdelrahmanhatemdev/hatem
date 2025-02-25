import Image from "next/image";
import { memo } from "react";

const Brand = () => {
  return (
    <section className="p-3">
      <div className="bg-neutral-950/50 p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="pe-3">
            <div className="flex justify-center items-center bg-black aspect-square">
              <div className=" flex flex-col justify-center items-center w-full h-full p-3">
                <div className="relative flex flex-col gap-10 items-center justify-center font-satoshi border-[15px] border-neutral-950/50 p-6 aspect-square">
                  <div className="absolute right-3 top-3">
                    <Image
                      src={`/assets/media/work/vogue-admin/logo-light.png`}
                      alt="Vogue Admin Logo"
                      width={50}
                      height={30}
                    />
                  </div>
                  <h2 className="text-3xl px-6">Our Vision
                  </h2>
                  <div className="max-w-[300px] text-center">
                    <p>
                    We strive to make online store management seamless, using technology to streamline operations and drive scalability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-3">
            <div className="flex justify-center items-center bg-white aspect-square">
              <div className=" flex flex-col justify-center items-center w-full h-full p-3">
                <div className="relative flex flex-col gap-10 items-center justify-center font-satoshi border-[15px] border-neutral-200/50 p-6 aspect-square text-black">
                  <div className="absolute right-3 top-3">
                    <Image
                      src={`/assets/media/work/vogue-admin/logo.png`}
                      alt="Vogue Admin Logo"
                      width={50}
                      height={30}
                    />
                  </div>
                  <h2 className="text-3xl px-6">Our Mission </h2>
                  <div className="max-w-[300px] text-center">
                    <p>
                      We aim to simplify e-commerce management with intuitive
                      tools and real-time insights, helping brands grow
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Brand);
