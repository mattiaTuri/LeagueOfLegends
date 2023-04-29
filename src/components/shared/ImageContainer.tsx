import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Link from "next/link";
import {
  img_scale_anim,
  img_hover_transition,
} from "../../animation/FramerMotion";

interface ImageProps {
  href: string;
  img: StaticImageData;
  name: string;
  imgPosition?: string;
  width: string;
  desktop_width: string;
  windowWidth: number;
}

function ImageComponent({
  href,
  img,
  name,
  imgPosition,
  width,
  desktop_width,
  windowWidth,
}: ImageProps) {
  return (
    <Link
      href={href}
      className="p-2 h-96"
      style={{ width: windowWidth > 1023 ? desktop_width : width }}
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
          variants={img_scale_anim}
          transition={img_hover_transition}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 bg-[#111] opacity-80 w-full h-[20%] flex flex-col justify-center items-center">
          <span className="text-sm">{name.toUpperCase()}</span>
        </div>
      </motion.div>
    </Link>
  );
}
export default ImageComponent;
