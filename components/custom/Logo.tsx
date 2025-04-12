import { cn } from "@/lib/utils";
import { memo } from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={cn("font-satoshi font-black flex gap-2 lg:text-2xl", className)}>
      <div className="relative group perspective-dramatic h-8 min-w-40">
        <div className="relative">
          <h2
            className="opacity-50 absolute inset-0 flex transition-transform duration-300 ease-in transform group-hover:rotate-x-90"
            style={{ transformOrigin: 'center' }}
          >
            <span>A</span>
            <span className="lowercase">bdelrahman</span>
          </h2>
          <h2
            className="absolute inset-0 flex transition-transform duration-300 ease-in transform -rotate-x-90 translate-y-6 group-hover:rotate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            style={{ transformOrigin: 'center' }}
          >
            <span>F</span>
            <span className="lowercase">rontend</span>
          </h2>
        </div>

        {/* The second part for 'Hatem' and 'Developer' */}
        <div className="relative">
          <h2
            className="absolute top-0 left-[7.8rem] lg:left-[10.2rem] flex transition-transform duration-300 ease-in transform group-hover:-rotate-x-90"
            style={{ transformOrigin: 'center' }}
          >
            <span>H</span>
            <span className="lowercase">atem</span>
          </h2>
          <h2
            className="opacity-50 absolute top-0 left-[7rem] flex transition-transform duration-300 ease-in transform rotate-x-90 -translate-y-6 group-hover:rotate-x-0 group-hover:translate-y-0 group-hover:opacity-50"
            style={{ transformOrigin: 'center' }}
          >
            <span>D</span>
            <span className="lowercase">eveloper</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default memo(Logo);
