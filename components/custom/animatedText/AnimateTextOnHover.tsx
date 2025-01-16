import { motion } from "framer-motion";
import { memo } from "react";

const AnimateTextOnHover = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const letters = text.split("");

  return (
    <>
      {letters.map((word, index) => (
        <motion.span
          key={index}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ opacity: .5, y: 10 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

export default memo(AnimateTextOnHover);
