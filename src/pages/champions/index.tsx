import Container from "@/components/shared/Container";
import style from "./champions.module.css";
import { champions } from "../../data/champions";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { JsxElement } from "typescript";
import Link from "next/link";

function Champions() {
  const [activeElementImg, setActiveElementImg] = useState<StaticImageData>(
    champions[0].champions_image
  );

  const GetActiveElement = () => {
    // const elem: any = document.querySelector(".swiper-slide-active");
    // const activeChampion = champions.find(
    //   (e) => e.id == elem.swiperSlideIndex
    // )!;
    // setActiveElementImg(activeChampion.champions_image);
  };

  return (
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
              <SwiperSlide key={index}>
                <Image
                  src={champion.champions_image}
                  alt=""
                  className={style.image}
                />
                <div className={style.championName}>
                  <h1>{champion.name}</h1>
                </div>
                <Link href="" className={style.championBox}>
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
  );
}

export default Champions;
