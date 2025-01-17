import { motion } from "framer-motion";
import { memo } from "react";

const AnimatedText = ({
  text,
  delay = 0,
  direction = "horizontal"
}: {
  text: string;
  delay?: number;
  direction?: "horizontal" | "vertical"
}) => {
  const letters = text.split("");

  return (
    <>
        {letters.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: direction === "horizontal" ? -10 : 0,  y: direction === "vertical" ? -10 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: delay + index * 0.1 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
    </>
  );
};

export default memo(AnimatedText);
