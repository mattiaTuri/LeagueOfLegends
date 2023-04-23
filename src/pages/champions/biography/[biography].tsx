import Container from "@/components/shared/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useEffect, useState } from "react";
import { champions } from "../../../data/champions";
import { easeInOut, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import style from "../tale/tale.module.css";
import HeroPage from "@/components/shared/HeroPage";
import StoryPage from "@/components/shared/StoryPage";

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

const title = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0, 0.95, 0.55, 1.15],
    },
  },
};

const author = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0, 0.95, 0.55, 1.15],
    },
  },
};

const text = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0, 0.95, 0.55, 1.15],
    },
  },
};

const name = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: easeInOut,
    },
  },
};

function Biography({ activeChampion }: any) {
  const [loadingTranslation, setLoadingTranslation] = useState<boolean>(false);
  const { t } = useTranslation();

  const biography: string[] = t(`champions:${activeChampion.id}.biography`, {
    returnObjects: true,
  });

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
          // story={t(`champions:${activeChampion?.id}.biography`)}
          story={`champions:${activeChampion?.id}.biography`}
        />
        {/* <div
          id="taleView"
          className={`h-[100vh] relative ${style.imgGradient}`}
        >
          <Image
            alt=""
            src={activeChampion.champion_img}
            className={`absolute top-0 h-full w-full object-cover z-[-1]`}
            style={{ objectPosition: activeChampion.taleArtPosition }}
          />
          <Container>
            <motion.div
              className="w-full flex flex-col justify-end items-center"
              initial="initial"
              animate="animate"
            >
              <div className="relative bottom-40">
                <motion.div
                  variants={name}
                  className="py-8 flex justify-center"
                >
                  <div className="p-2 border border-[#C3A06A]">
                    <span className="text-base lg:text-2xl">
                      {activeChampion.name}
                    </span>
                  </div>
                </motion.div>
                <div>
                  <motion.span
                    variants={text}
                    className="text-sm lg:text-base block text-center lg:text-left"
                  >
                    {t("league_of_legend_story")}
                  </motion.span>
                  <motion.h1
                    variants={title}
                    className="text-3xl md:text-5xl text-[#c4b998] text-center"
                  >
                    {t(
                      `champions:${activeChampion.id}.tale_title`
                    ).toUpperCase()}
                  </motion.h1>
                  {t(`champions:${activeChampion?.id}.tale_author`) && (
                    <motion.span
                      variants={author}
                      className="text-sm lg:text-base block text-center lg:text-right"
                    >
                      by {t(`champions:${activeChampion.id}.tale_author`)}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          </Container>
        </div> */}
      </>
    );
}

export default Biography;
