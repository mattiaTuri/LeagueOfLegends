import { randomChampions } from "data/champions";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Champion } from "models/champion";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ImageSwiper from "./ImageSwiper";
import ArrowSwiperLeft from "./ArrowSwiperLeft";
import ArrowSwiperRight from "./ArrowSwiperRight";
import useWidth from "components/shared/useWidth";
import { useTranslation } from "react-i18next";

function ChampionsShowcase() {
  const { windowWidth } = useWidth();
  const { t } = useTranslation();
  return (
    <>
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
        {randomChampions?.map((champion: Champion) => {
          return (
            <SwiperSlide className="champions-showcase-slider" key={champion.id}>
              <ImageSwiper champion={champion} windowWidth={windowWidth} />
            </SwiperSlide>
          );
        })}
        <ArrowSwiperLeft />
        <ArrowSwiperRight />
      </Swiper>
    </>
  );
}

export default ChampionsShowcase;
