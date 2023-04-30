import Container from "components/shared/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { champions } from "../../../data/champions";
import { easeInOut, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import HeroPage from "components/shared/HeroPage";
import StoryPage from "components/shared/StoryPage";

export async function getStaticPaths({ locales }: any) {
  const paths = champions
    .map((champion) =>
      locales.map((locale: any) => ({
        params: {
          biography: champion.biography,
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
  const activeChampion: any = champions.find(
    (elem) => elem.biography == params.biography
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, ["champions", "common"])),
      activeChampion,
    },
  };
}

function Biography({ activeChampion }: any) {
  const [loadingTranslation, setLoadingTranslation] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    setLoadingTranslation(true);
  });

  if (loadingTranslation)
    return (
      <>
        <HeroPage
          name={activeChampion.name}
          title={t(`champions:${activeChampion?.id}.title`)}
          author=""
          img={activeChampion.champion_img}
          bgPosition={activeChampion.bgPosition}
        />
        <StoryPage
          id={activeChampion.id}
          name={activeChampion.name}
          title={t(`champions:${activeChampion?.id}.tale_title`)}
          story={`champions:${activeChampion?.id}.biography`}
        />
      </>
    );
}

export default Biography;
