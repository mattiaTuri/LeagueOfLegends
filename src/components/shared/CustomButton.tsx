import { motion } from "framer-motion";
import Link from "next/link";

interface CustomButtonProperties {
  href: string;
  text: string;
}

const button = {
  initial: {},
  hover: {
    width: "16rem",
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const buttonText = {
  initial: {},
  hover: {
    letterSpacing: "3px",
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

function CustomButton({ href, text }: CustomButtonProperties) {
  return (
    <Link href={href}>
      <motion.button
        className={`border border-[#C3A06A] w-48 h-16`}
        type="button"
        whileHover="hover"
        variants={button}
      >
        <motion.span variants={buttonText}>{text}</motion.span>
      </motion.button>
    </Link>
  );
}

export default CustomButton;
