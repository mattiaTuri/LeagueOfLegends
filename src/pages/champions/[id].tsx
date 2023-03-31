import Container from "@/components/shared/Container";
import { useRouter } from "next/router";
import { champions } from "../../data/champions";
import Image from "next/image";
import style from "./id.module.css";
import { motion } from "framer-motion";
import CustomButton from "@/components/shared/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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

function ChampionPage() {
  const router = useRouter();
  const championId = router.query;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [windowWidth, setWindowWidth] = useState<Number>(window.innerWidth);

  const {t} = useTranslation<string>();

  const activeChampion = champions.find((elem) => elem.id == championId.id);

  let nameSplit = activeChampion?.name.split("");

  useEffect(() => {
    function WindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", WindowResize);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center pt-[6.6rem]">
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
        className={`h-[500px] ${style.BoxShadow}`}
        initial={{ width: "50%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      >
        <div
          style={{
            backgroundImage: `url('${
              activeChampion != undefined
                ? activeChampion.champion_image.src
                : ""
            }')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionX: activeChampion?.bgPosition,
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
          <div className="p-8">
            <h3 className="text-2xl lg:text-5xl">
              {activeChampion?.title.toUpperCase()}
            </h3>
          </div>
          <div className="p-8 flex flex-col items-center">
            <figure className="text-[#c4b998] text-center">
              <blockquote>
                <p>{t("championsList.champion_quote")}</p>
              </blockquote>
              <figcaption>
                <span>~ {activeChampion?.name}</span>
              </figcaption>
            </figure>
          </div>
          <div className={style.triangle}></div>
          <div className="p-8 flex flex-col items-center lg:w-[80%]">
            <p className="text-center pb-8">{activeChampion?.lore}</p>
            <CustomButton href="" text="CONTINUE READING" />
          </div>
          <div className="p-8 w-full flex flex-col items-center md:flex-row lg:w-[80%]">
            <div className="md:w-[50%] flex justify-center">
              <Image
                src={
                  activeChampion != undefined ? activeChampion.region_image : ""
                }
                alt=""
              ></Image>
            </div>
            <div className="flex flex-col items-center justify-center md:w-[50%]">
              <span>REGION</span>
              <p className="pb-8 text-2xl lg:text-5xl">
                {activeChampion?.region.toUpperCase()}
              </p>
              <CustomButton href="" text="EXPLORE REGION" />
            </div>
          </div>
          <div className="relative w-full md:p-8">
            <div className="pb-8 text-center">
              <h3 className="text-[#c4b998] text-2xl lg:text-5xl">
                AVAILABLE SKINS
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
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Autoplay, EffectFade, FreeMode, Navigation, Thumbs]}
              >
                {activeChampion?.splash_art.map((elem, index) => {
                  return (
                    <SwiperSlide key={index} className={style.artSwiper}>
                      <Image src={elem.art} alt="" className="h-full w-full" />
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
                {activeChampion?.splash_art.map((elem, index) => {
                  return (
                    <SwiperSlide key={index} className={style.iconSwiper}>
                      <Image
                        src={elem.art}
                        alt=""
                        className="w-full h-full lg:w-[70px]"
                      />
                      <span className="hidden lg:block lg:text-sm">
                        {elem.title.toUpperCase()}
                      </span>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default ChampionPage;
function useTraslate(): { t: any; } {
  throw new Error("Function not implemented.");
}

