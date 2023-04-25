import Container from "@/components/shared/Container";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import arcaneClip from "../../public/assets/video/arcaneClip.mp4";
import style from "./homepage.module.css";

function Homepage() {
  const { t } = useTranslation<string>();

  return (
    <>
      <div className="text-white h-[97vh]">
        <Container>
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="pb-10">
                <span className="text-sm md:tracking-[10px]">
                  - {t("explore_the_universe_of")} -
                </span>
              </div>
              <div className="flex items-center">
                <h1 className="text-5xl md:text-8xl">LEAGUE</h1>
                <span className="text-sm md:tracking-[10px]">OF</span>
              </div>
              <h1 className="text-5xl md:text-8xl">LEGENDS</h1>
            </div>
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
          </div>
        </Container>
      </div>
    </>
  );
}

export default Homepage;
