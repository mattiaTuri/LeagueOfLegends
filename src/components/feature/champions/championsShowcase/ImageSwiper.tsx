import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { ImageSwiper } from "components/types";
import { motion } from "framer-motion";
import {
  img_scale_anim,
  img_hover_transition,
  champ_slider_title_container,
  text_motion_anim,
} from "animation/FramerMotion";
import { useTranslation } from "next-i18next";

function ImageSwiper({ champion, windowWidth }: ImageSwiper) {
  const { t } = useTranslation();
  const { id, name, champion_img, bgPosition } = champion;

  return (
    <>
      <Link href={`/champions/${id}`}>
        <motion.div
          whileHover={windowWidth > 1024 ? "hover" : ""}
          initial="initial"
          className="h-full"
        >
          <motion.div
            className="h-full"
            variants={img_scale_anim}
            transition={img_hover_transition}
          >
            <Image
              src={champion_img}
              alt={name}
              className="h-full relative object-cover"
              style={{ objectPosition: bgPosition }}
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 h-full w-full flex flex-col justify-center items-center"
            variants={champ_slider_title_container}
          >
            <motion.h2
              variants={text_motion_anim}
              className="text-5xl lg:text-5xl"
            >
              {name.toUpperCase()}
            </motion.h2>
            <motion.h3 variants={text_motion_anim} className="text-2xl">
              - {t(`champions:${id}.title`)} -
            </motion.h3>
          </motion.div>
        </motion.div>
      </Link>
      <Link href={`/champions/${id}`} className="bg-[#0000008b] w-full h-[20%] absolute bottom-0 flex flex-col justify-center items-center border border-[#C3A06A] lg:hidden">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[#ba8964]">{name.toUpperCase()}</h2>
          <h3 className="text-[#ba8964] text-base">
            - {t(`champions:${id}.title`)} -
          </h3>
        </div>
      </Link>
    </>
  );
}

export default ImageSwiper;
