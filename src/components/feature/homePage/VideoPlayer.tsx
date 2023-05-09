import Link from "next/link";
import arcaneClip from "assets/video/arcaneClip.mp4";
import { useTranslation } from "next-i18next";

function VideoPlayer() {
  const { t } = useTranslation<string>();
  return (
    <div className="hidden lg:flex absolute bottom-10 right-0 px-8">
      <div className="w-80 h-40">
        <Link
          href=""
          className="w-full h-full flex justify-center items-center border border-[#ba8964] clip-polygon group"
        >
          <div className="w-full h-full bg-[#111] opacity-90 absolute left-0 top-0 translate-x-[-100%] duration-500 ease-[cubic-bezier(.5,1.10,.47,1.36)] z-10 clip-polygon group-hover:translate-x-0"></div>
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
