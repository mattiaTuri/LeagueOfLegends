import Container from "@/components/shared/Container";
import { champions } from "../../data/champions";
import Image from "next/image";
import style from "./id.module.css";
import { motion } from "framer-motion";
import CustomButton from "@/components/shared/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const container = {
  initial: {},
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  initial: { y: 320 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

export async function getStaticPaths({ locales }: any) {
  const paths = champions
    .map((champion) =>
      locales.map((locale: any) => ({
        params: {
          id: champion.id,
        },
        locale,
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: any) {
  const activeChampion: any = champions.find((elem) => elem.id == params.id);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["champions", "common"])),
      activeChampion,
    },
  };
}

function ChampionPage({ activeChampion }: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [windowWidth, setWindowWidth] = useState<number>(1024);
  const { t } = useTranslation();

  let nameSplit = activeChampion?.name?.toUpperCase().split("");

  useEffect(() => {
    function WindowResize() {
      setWindowWidth(window.innerWidth);
    }
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", WindowResize);
    return () => {
      removeEventListener("resize", WindowResize);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center pt-[80px]">
      <motion.div
        className="w-full flex justify-center items-center p-8"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {nameSplit?.map((letter: string, index: number) => {
          return (
            <motion.h1 key={index} variants={item} className="text-5xl">
              {letter != " " ? letter : <span>&nbsp;</span>}
            </motion.h1>
          );
        })}
      </motion.div>
      <motion.div
        className="h-[500px]"
        initial={{ width: "50%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      >
        <div
          style={{
            backgroundImage: `url('${
              activeChampion?.champion_img != undefined
                ? activeChampion?.champion_img?.src
                : ""
            }')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: activeChampion?.bgPosition,
          }}
          className="h-full"
        />
      </motion.div>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="w-full flex flex-col items-center"
        >
          <div className="p-8 pt-20 w-full text-center">
            <h3 className="text-2xl lg:text-5xl">
              {t(`champions:${activeChampion?.id}.title`).toUpperCase()}
            </h3>
          </div>
          <div className="p-8 w-full flex flex-col items-center lg:w-[80%]">
            <figure className="text-[#c4b998] text-center">
              <blockquote>
                <p>{t(`champions:${activeChampion?.id}.quote`)}</p>
              </blockquote>
              <figcaption>
                <span>~ {activeChampion?.name}</span>
              </figcaption>
            </figure>
          </div>
          <div className={style.triangle}></div>
          <div className="p-8 w-full flex flex-col items-center lg:w-[80%]">
            <p className="text-center pb-8">
              {t(`champions:${activeChampion?.id}.biography_preview`)}
            </p>
            <CustomButton href="" text={t("read_biography")} />
          </div>
          <div className="pt-20 p-8 w-full flex flex-col items-center md:flex-row lg:w-[80%]">
            <div className="flex justify-center md:w-[50%]">
              <Image
                src={
                  activeChampion != undefined ? activeChampion.region_img : ""
                }
                alt={t(`champions:${activeChampion?.id}.region`)}
              />
            </div>
            <div className="flex flex-col items-center justify-center md:w-[50%]">
              <span>{t("region")}</span>
              <p className="pb-8 text-2xl lg:text-4xl">
                {t(`champions:${activeChampion?.id}.region`).toUpperCase()}
              </p>
              <CustomButton href="" text={t("explore_region")} />
            </div>
          </div>
        </motion.div>
      </Container>
      <div className="pt-20 w-full">
        <div className="h-[500px] relative">
          <Image
            alt={t("tale")}
            src={activeChampion?.tale_img}
            className="opacity-40 object-cover h-full w-full"
            style={{ objectPosition: activeChampion.taleArtPosition }}
          />
          <div className="absolute top-0 w-full h-full flex justify-center items-center">
            <div className="w-[80%] h-[80%] flex flex-col justify-evenly items-center md:w-[50%] lg:w-[40%]">
              <span className="text-sm lg:text-base">{t("tale")}</span>
              <h3 className="text-3xl lg:text-5xl text-center">
                {t(`champions:${activeChampion?.id}.tale_title`).toUpperCase()}
              </h3>
              {t(`champions:${activeChampion?.id}.tale_author`) && (
                <span className="text-sm lg:text-base">
                  by{" "}
                  {t(
                    `champions:${activeChampion?.id}.tale_author`
                  ).toUpperCase()}
                </span>
              )}
              <p className="text-sm lg:text-base">
                {t(`champions:${activeChampion?.id}.tale_preview`)}
              </p>
              <CustomButton
                href={`/champions/tale/${activeChampion?.tale}`}
                text={t("read_tale")}
              />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="pt-20 pb-8 relative w-full">
          <div className="pb-8 text-center">
            <h3 className="text-[#c4b998] text-2xl lg:text-5xl">
              {t("available_skins")}
            </h3>
          </div>
          <div className="relative">
            <Swiper
              speed={1200}
              effect="fade"
              loop={true}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Autoplay, EffectFade, FreeMode, Navigation, Thumbs]}
            >
              {activeChampion?.splash_art.map((elem: any, index: number) => {
                return (
                  <SwiperSlide key={index} className={style.artSwiper}>
                    <Image
                      src={elem.splash_art_img}
                      alt=""
                      className="h-full w-full"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              direction={windowWidth > 1024 ? "vertical" : "horizontal"}
              spaceBetween={60}
              slidesPerView={"auto"}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={`${style.containerSwiper}`}
            >
              {activeChampion?.splash_art.map((elem: any, index: number) => {
                return (
                  <SwiperSlide key={index} className={style.iconSwiper}>
                    <Image
                      src={elem.splash_art_img}
                      alt=""
                      className="w-full h-full lg:w-[70px]"
                    />
                    <span className="hidden lg:block lg:text-sm">
                      {t(
                        `champions:${activeChampion.id}.splash_art.${index}.title`
                      ).toUpperCase()}
                    </span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ChampionPage;
