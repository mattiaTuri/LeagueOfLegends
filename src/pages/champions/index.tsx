import Container from "@/components/shared/Container";
import style from "./champions.module.css";
import { champions } from "../../data/champions";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    y: 30,
  },
  hover: {
    opacity: 1,
    y: -180,
    transition: {
      delayChildren: 0.3,
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

function Champions() {
  // const [activeElementImg, setActiveElementImg] = useState<string>(
  //   champions[0].champions_image
  // );

  const GetActiveElement = () => {
    // const elem: any = document.querySelector(".swiper-slide-active");
    // const activeChampion = champions.find(
    //   (e) => e.id == elem.swiperSlideIndex
    // )!;
    // setActiveElementImg(activeChampion.champions_image);
  };

  return (
    <>
      <div className="text-white h-screen">
        <div className="h-full flex items-center">
          {/* <Image
          src={activeElementImg}
          alt=""
          className="absolute opacity-7"
        ></Image> */}
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
            {champions.map((champion, index) => {
              return (
                <SwiperSlide key={index} className="overflow-hidden">
                  <Link href={`/champions/${champion.id}`}>
                    <motion.div
                      whileHover="hover"
                      initial="initial"
                      className="h-full"
                    >
                      <motion.div
                        className="h-full"
                        variants={championImage}
                        transition={hoverTransition}
                      >
                        <Image
                          src={champion.champions_image}
                          alt={champion.name}
                          className={style.image}
                        />
                      </motion.div>
                      <motion.div
                        className={style.championName}
                        variants={textContainer}
                      >
                        <motion.h2 variants={textMotion} className="text-8xl">
                          {champion.name}
                        </motion.h2>
                        <motion.h3 variants={textMotion} className="text-2xl">
                          - {champion.title} -
                        </motion.h3>
                      </motion.div>
                    </motion.div>
                  </Link>
                  <Link
                    href={`/champions/${champion.id}`}
                    className={style.championBox}
                  >
                    <div className="w-full h-[50%] flex">
                      <div className="w-[50%] border-r-[1px] border-b-[1px] border-[#ba8964] flex items-center justify-center">
                        <h3 className="text-xs">Darkin</h3>
                      </div>
                      <div className="w-[50%] border-b-[1px] border-[#ba8964] flex items-center justify-center">
                        <h3 className="text-xs">Runeterra</h3>
                      </div>
                    </div>
                    <div className="w-full h-[50%] flex items-center justify-center">
                      <h2 className="text-[#ba8964]">{champion.title}</h2>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
            <div
              className="swiper-button-prev"
              onClick={() => GetActiveElement()}
            >
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
            <div
              className="swiper-button-next"
              onClick={() => GetActiveElement()}
            >
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
        </div>
      </div>
    </>
  );
}

export default Champions;
