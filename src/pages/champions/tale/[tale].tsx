import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { champions } from "../../../data/champions";
import Image from "next/image";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Container from "@/components/shared/Container";
import style from "./tale.module.css"

export async function getStaticPaths({ locales }: any) {
    const paths = champions
      .map((champion) =>
        locales.map((locale: any) => ({
          params: {
            tale: champion.tale,
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

export async function getStaticProps({params, locale }: any) {
  const activeChampion: any = champions.find((elem) => elem.tale == params.tale);
    return {
      props: {
        ...(await serverSideTranslations(locale, ["champions", "common"])),
        activeChampion,
      },
    };
  }

function Tale({ activeChampion }: any){
  const {t} = useTranslation();
    return (
      <div>
        <div className="h-screen relative">
          <Image alt="" src={activeChampion.tale_img} className={`absolute top-0 h-full object-cover ${style.boxShadow}`} style={{objectPosition: activeChampion.taleBgPosition}}/>
          <Container>
            <div className="w-full p-8">
              <span className="relative top-1/4">{activeChampion.name}</span>
              <div className="relative top-1/2 text-center">
                <h1 className="text-3xl lg:text-5xl text-[#c4b998]">{t(`champions:${activeChampion.id}.tale_title`)}</h1>
                <span className="text-[#c4b998]">{t(`champions:${activeChampion.id}.tale_author`)}</span>
              </div>        
            </div>
          </Container>
        </div>
      </div>
  )
}

export default Tale