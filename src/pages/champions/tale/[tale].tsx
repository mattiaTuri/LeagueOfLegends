import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { champions } from "../../../data/champions";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import HeroPage from "components/shared/heroPage/HeroPage";
import StoryPage from "components/shared/StoryPage";

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

export async function getStaticProps({ params, locale }: any) {
  const activeChampion: any = champions.find(
    (elem) => elem.tale == params.tale
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, ["champions", "common"])),
      activeChampion,
    },
  };
}

function Tale({ activeChampion }: any) {
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
          title={t(`champions:${activeChampion?.id}.tale_title`)}
          author={t(`champions:${activeChampion?.id}.tale_author`)}
          img={activeChampion.tale_img}
          bgPosition={activeChampion.taleArtPosition}
        />
        <StoryPage
          id={activeChampion.id}
          name={activeChampion.name}
          title={t(`champions:${activeChampion?.id}.tale_title`)}
          story={t(`champions:${activeChampion?.id}.tale`)}
        />
      </>
    );
}

export default Tale;
