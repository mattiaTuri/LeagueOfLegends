import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";
import style from "./heropage.module.css";
import { useTranslation } from "next-i18next";
import {
  title_anim,
  author_anim,
  text_anim,
  champ_name_anim,
  arrow_anim,
  arrow_container,
} from "../../animation/FramerMotion";

interface ChampionProps {
  name: string;
  title: string;
  author: string;
  img: StaticImageData;
  bgPosition: string;
}

function HeroPage({ name, title, author, img, bgPosition }: ChampionProps) {
  const { t } = useTranslation();
  return (
    <div id="taleView" className={`h-[100vh] relative ${style.imgGradient}`}>
      <Image
        alt={title}
        src={img}
        className={`absolute top-0 h-full w-full object-cover z-[-1] pt-[80px]`}
        style={{ objectPosition: bgPosition }}
      />

      <Container>
        <motion.div
          className="w-full flex flex-col justify-end items-center"
          initial="initial"
          animate="animate"
        >
          <div className="relative bottom-32">
            <motion.div
              variants={champ_name_anim}
              className="py-8 flex justify-center"
            >
              <div className="p-2 border border-[#C3A06A]">
                <span className="text-base lg:text-2xl">{name}</span>
              </div>
            </motion.div>
            <div>
              <motion.span
                variants={text_anim}
                className="text-sm lg:text-base block text-center lg:text-left"
              >
                {t("league_of_legend_story")}
              </motion.span>
              <motion.h1
                variants={title_anim}
                className="text-3xl md:text-5xl text-[#c4b998] text-center"
              >
                {title.toUpperCase()}
              </motion.h1>
              {author && (
                <motion.span
                  variants={author_anim}
                  className="text-sm lg:text-base block text-center lg:text-right"
                >
                  by {author}
                </motion.span>
              )}
            </div>
            <motion.div
              variants={arrow_container}
              className="pt-8 flex justify-center"
            >
              <motion.div
                variants={arrow_anim}
                className={style.triangle}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default HeroPage;
