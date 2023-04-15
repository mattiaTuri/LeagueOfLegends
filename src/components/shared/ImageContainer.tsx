import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Link from "next/link";

const hoverTransition = {
  duration: 1,
  ease: [0.25, 1, 0.5, 1],
};

const championImage = {
  initial: {},
  hover: {
    scale: 1.1,
  },
};

interface ImageProps {
  href: string;
  img: StaticImageData;
  name: string;
  imgPosition?: string;
  width: string;
  desktop_width?: string;
}

function ImageComponent({
  href,
  img,
  name,
  imgPosition,
  width,
  desktop_width,
}: ImageProps) {
  return (
    <Link
      href={href}
      className={`p-2 w-${width} h-96 relative lg:w-${desktop_width}`}
    >
      <motion.div
        className="h-full w-full relative overflow-hidden"
        whileHover="hover"
        initial="initial"
      >
        <motion.div
          style={{
            backgroundImage: `url('${img.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: imgPosition,
          }}
          variants={championImage}
          transition={hoverTransition}
          className="h-full w-full relative"
        />
        <div className="absolute bottom-0 bg-[#111] opacity-80 w-full h-[20%] flex flex-col justify-center items-center">
          <span className="text-sm">{name.toUpperCase()}</span>
        </div>
      </motion.div>
    </Link>
  );
}
export default ImageComponent;
