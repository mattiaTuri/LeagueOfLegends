import { motion } from "framer-motion";
import Link from "next/link";

interface CustomButtonProperties {
  href: string;
  text: string;
}

const button = {
  initial: {},
  hover: {
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
    <motion.button
      className={`border border-[#C3A06A] p-4 cursor-pointer`}
      type="button"
      whileHover="hover"
      variants={button}
    >
      <Link href={href}>
        <motion.span variants={buttonText}>{text}</motion.span>
      </Link>
    </motion.button>
  );
}

export default CustomButton;
