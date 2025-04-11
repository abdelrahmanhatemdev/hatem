import { cn } from "@/lib/utils";
import { memo } from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={cn("font-satosh font-black flex gap-2 lg:text-2xl", className)}>
      <div className="relative group perspective-dramatic h-8 min-w-40">
        <div>
          <h2 className="opacity-50 absolute inset-0 flex transition-all group-hover:rotate-x-90 duration-300 ease-in">
            <span>Abdelrahman</span>
          </h2>
          <h2 className="absolute inset-0 flex transition-all -rotate-x-90 translate-y-6 group-hover:rotate-x-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-in">
            <span>Frontend</span>
          </h2>
        </div>
        <div>
          <h2 className="absolute top-0 left-[7.8rem] lg:left-[10.2rem] flex transition-all group-hover:-rotate-x-90 duration-300 ease-in">
            <span>H</span>
            <span className="lowercase">atem</span>
          </h2>
          <h2 className="opacity-50 absolute itop-0 left-[7rem] flex transition-all rotate-x-90 -translate-y-6 group-hover:rotate-x-0 group-hover:translate-y-0 group-hover:opacity-50 duration-300 ease-in">
            <span>D</span>
            <span className="lowercase">eveloper</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default memo(Logo);
