import { cn } from "@/lib/utils";

interface AvailableBadgeProps {
  className: string;
  activate?: boolean;
}

function AvailableBadge({ className, activate = true }: AvailableBadgeProps) {
  return (
    <div
      className={cn(
        "flex gap-3 items-end text-sm font-medium text-green-600 ",
        activate ? "" : "hidden",
        className
      )}
    >
      <p className="flex gap-2 items-center ">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
        </span>
        <span className="animate-pulse">Available Now</span>
      </p>
      <p>
        <span className="text-sm text-green-600 font-medium duration-1000">From $1200 </span>
        <span className="text-md text-green-500 font-extrabold">/ mo</span>
      </p>
    </div>
  );
}

export default AvailableBadge;
