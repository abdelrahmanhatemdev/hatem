import Image from "next/image";
import { memo } from "react";

const Logo = ({className}: {className?: string}) => {
  return (
    <Image
      src={`/assets/media/logo.png`}
      alt="Hatem Developer"
      height={100}
      width={100}
      priority={true}
      className={className}
    />
  );
};
export default memo(Logo);
