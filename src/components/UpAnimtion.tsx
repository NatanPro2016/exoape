import React from "react";
import { motion } from "framer-motion";
const UpAnimtion = ({
  content,
  className,
  delay,
}: {
  content: string;
  className?: string;
  delay?:number
}) => {
  return (
    
    <motion.span
      initial={{ rotateZ: "20deg", opacity: 0 }}
      animate={{ rotateZ: "0deg", opacity: 1 }}
      transition={{  ease: "easeIn" , delay}}
      className={`origin-bottom-left m-0 ${className}`}
    >
      {content}
    </motion.span>
  );
};

export default UpAnimtion;
