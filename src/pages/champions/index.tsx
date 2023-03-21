import Container from "@/components/shared/Container";
import style from "./champions.module.css";
import { champions } from "../../data/champions";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
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

function Champions() {
  let windowWidth: number = 1025;

  useEffect(() => {
    windowWidth = window.innerWidth;
  }, [windowWidth]);

  return (
    <>
      <div className="text-white pt-[6.6rem]">
        <div className="h-full flex flex-col items-center">
          <div className="p-8 w-full flex justify-center items-center">
            <h1 className="text-5xl underline">CHAMPIONS</h1>
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
            {champions.map((champion, index) => {
              return (
                <SwiperSlide key={index} className="overflow-hidden">
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
                          src={champion.champions_image}
                          alt={champion.name}
                          className={style.image}
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
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="text-[#ba8964]">{champion.name}</h2>
                      <h2 className="text-[#ba8964]">{champion.title}</h2>
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
          <div className="w-full pt-8 md:flex">
            {champions.map((champion, index) => {
              return (
                <div key={index} className="w-full h-28">
                    <Image className="w-[200px]" src={champion.champions_image} alt=""></Image>
                    <div className="bg-[#111] flex justify-center items-center"><span>{champion.name}</span></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Champions;
