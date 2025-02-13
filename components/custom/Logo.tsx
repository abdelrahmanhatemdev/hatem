import Image from "next/image";
import { memo } from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className="font-satoshi flex gap-2 text-2xl">
      <div className="size-60 perspective-dramatic ">
        <h2>Abdelrahman</h2>
        <p className="rotate-">Frontend</p>
      </div>
      <div>
        <h2>Hatem</h2>
        <p>Developer</p>
      </div>
    </div>
  );
};
export default memo(Logo);
