import Container from "@/components/shared/Container";
import style from "./champions.module.css";
import { champions, randomChampions } from "../../data/champions";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SmarphoneViewChamp from "@/components/core/champions/SmartphoneViewChamp";
import DesktopViewChamp from "@/components/core/champions/DesktopViewChamp";
import { Champion } from "@/models/champion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

const textContainer = {
  initial: {},
  hover: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const textMotion = {
  initial: {
    opacity: 0,
    y: 180,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "champions"])),
      randomChampions,
      champions,
    },
  };
}

function Champions({ randomChampions, champions }: any) {
  const [windowWidth, setWindowWidth] = useState<number>(1024);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  useEffect(() => {
    function WindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", WindowResize);
    setWindowWidth(innerWidth);
    setLoading(false);
    return () => {
      removeEventListener("resize", WindowResize);
    };
  }, []);

  if (!loading)
    return (
      <>
        <div className="pt-[80px]">
          <div className="h-full pb-8 flex flex-col items-center">
            <div className="p-8 w-full flex justify-center items-center">
              <h1 className="text-2xl text-center md:text-5xl">
                {t("champions_showcase")}
              </h1>
            </div>
            <Swiper
              speed={1200}
              slidesPerView={"auto"}
              effect={"coverflow"}
              loop={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 0,
                depth: 100,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              modules={[EffectCoverflow, Navigation]}
            >
              {randomChampions != undefined &&
                randomChampions.map((champion: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className={style.championSlider}>
                      <Link href={`/champions/${champion.id}`}>
                        <motion.div
                          whileHover={windowWidth > 1024 ? "hover" : ""}
                          initial="initial"
                          className="h-full"
                        >
                          <motion.div
                            className="h-full"
                            variants={championImage}
                            transition={hoverTransition}
                          >
                            <Image
                              src={champion.champion_img}
                              alt={champion.name}
                              className={style.image}
                              style={{ objectPosition: champion.bgPosition }}
                            />
                          </motion.div>
                          <motion.div
                            className={style.championName}
                            variants={textContainer}
                          >
                            <motion.h2
                              variants={textMotion}
                              className="text-5xl lg:text-5xl"
                            >
                              {champion.name.toUpperCase()}
                            </motion.h2>
                            <motion.h3
                              variants={textMotion}
                              className="text-2xl"
                            >
                              - {t(`champions:${champion.id}.title`)} -
                            </motion.h3>
                          </motion.div>
                        </motion.div>
                      </Link>
                      <Link
                        href={`/champions/${champion.id}`}
                        className={`${style.championBox}`}
                      >
                        <div className="flex flex-col items-center justify-center">
                          <h2 className="text-[#ba8964]">{champion.name}</h2>
                          <h3 className="text-[#ba8964] text-base">
                            {t(`champions:${champion.id}.title`)}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              <div className="swiper-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ba8964"
                    d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6Z"
                  />
                </svg>
              </div>
              <div className="swiper-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ba8964"
                    d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z"
                  />
                </svg>
              </div>
            </Swiper>
            <div className="pt-8">
              <h1 className="text-2xl text-center md:text-5xl">
                {t("champions")}
              </h1>
            </div>
            {windowWidth > 767 ? (
              <DesktopViewChamp champions={champions} />
            ) : (
              <SmarphoneViewChamp />
            )}
          </div>
        </div>
      </>
    );
}

export default Champions;
