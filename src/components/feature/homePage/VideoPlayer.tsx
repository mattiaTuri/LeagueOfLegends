import Link from "next/link";
import arcaneClip from "assets/video/arcaneClip.mp4";
import style from "./homepage.module.css";
import { useTranslation } from "next-i18next";

function VideoPlayer() {
  const { t } = useTranslation<string>();
  return (
    <div className="hidden lg:flex absolute bottom-10 right-0 px-8">
      <div className="w-80 h-40">
        <Link
          href=""
          className={`w-full h-full flex justify-center items-center border border-[#ba8964] ${style.link}`}
        >
          <div className={style.backdrop}></div>
          <div className="absolute z-10 flex flex-col items-center">
            <span className="text-[#c4b998]">{t("coming_soon")}</span>
            <h2 className="text-5xl text-[#ba8964]">ARCANE</h2>
          </div>
          <video
            className="object-fill h-full w-full"
            preload="auto"
            loop
            autoPlay
          >
            <source src={arcaneClip} type="video/mp4" />
          </video>
        </Link>
      </div>
    </div>
  );
}

export default VideoPlayer;
