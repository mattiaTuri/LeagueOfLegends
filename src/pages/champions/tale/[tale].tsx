import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { champions } from "../../../data/champions";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/shared/Container";
import style from "./tale.module.css";
import { easeInOut, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import Paragraph from "@/components/core/tale/Paragraph";
import HeroPage from "@/components/shared/HeroPage";
import StoryPage from "@/components/shared/StoryPage";

// const title = {
//   initial: { y: 100, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       ease: [0, 0.95, 0.55, 1.15],
//     },
//   },
// };

// const author = {
//   initial: { y: 100, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       duration: 1,
//       ease: [0, 0.95, 0.55, 1.15],
//     },
//   },
// };

// const text = {
//   initial: { y: 100, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 1,
//       duration: 1,
//       ease: [0, 0.95, 0.55, 1.15],
//     },
//   },
// };

// const name = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       delay: 1.5,
//       duration: 1,
//       ease: easeInOut,
//     },
//   },
// };

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
  // const [scroolBarProgress, setScrollBarProgress] = useState<number>(0);
  // const [scrollYContainer, setScrollYContainer] = useState<number>(0);
  const [loadingTranslation, setLoadingTranslation] = useState<boolean>(false);
  // const [taleHeigth, setTaleHeigth] = useState<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    setLoadingTranslation(true);
  });

  const tale_chapter_one: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_one`,
    {
      returnObjects: true,
    }
  );

  const tale_chapter_two: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_two`,
    {
      returnObjects: true,
    }
  );

  const tale_chapter_three: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_three`,
    {
      returnObjects: true,
    }
  );

  const tale_chapter_four: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_four`,
    {
      returnObjects: true,
    }
  );

  const tale_chapter_five: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_five`,
    {
      returnObjects: true,
    }
  );

  const tale_chapter_six: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_six`,
    {
      returnObjects: true,
    }
  );

  const tale_chapter_seven: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_seven`,
    {
      returnObjects: true,
    }
  );

  const tale_chapter_eight: string[] = t(
    `champions:${activeChampion.id}.tale_chapter_eight`,
    {
      returnObjects: true,
    }
  );

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
          story={}
        />

        {/* <Container>
          <div id="tale" className="relative pb-12">
            <div
              id="progressContainer"
              className="hidden lg:block absolute left-0 top-10 px-8"
            >
              <div className="flex flex-col w-[200px]">
                <div className="border border-[#C3A06A] p-2 flex max-w-max">
                  <span className="text-base">
                    {activeChampion.name.toUpperCase()}
                  </span>
                </div>
                <span className="py-4">
                  {t(`champions:${activeChampion.id}.tale_title`)}
                </span>
                <div className="bg-[#111] ">
                  <motion.div
                    id="progressBar"
                    className="sticky bg-[#C3A06A] h-[5px] origin-left w-0"
                    style={{ width: `${scroolBarProgress}%` }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Paragraph tale={tale_chapter_one} chapter={t("chapter_one")} />
              {tale_chapter_two.length != 0 && (
                <Paragraph tale={tale_chapter_two} chapter={t("chapter_two")} />
              )}
              {tale_chapter_three.length != 0 && (
                <Paragraph
                  tale={tale_chapter_three}
                  chapter={t("chapter_three")}
                />
              )}
              {tale_chapter_four.length != 0 && (
                <Paragraph
                  tale={tale_chapter_four}
                  chapter={t("chapter_four")}
                />
              )}
              {tale_chapter_five.length != 0 && (
                <Paragraph
                  tale={tale_chapter_five}
                  chapter={t("chapter_five")}
                />
              )}
              {tale_chapter_six.length != 0 && (
                <Paragraph tale={tale_chapter_six} chapter={t("chapter_six")} />
              )}
              {tale_chapter_seven.length != 0 && (
                <Paragraph
                  tale={tale_chapter_seven}
                  chapter={t("chapter_seven")}
                />
              )}
              {tale_chapter_eight.length != 0 && (
                <Paragraph
                  tale={tale_chapter_eight}
                  chapter={t("chapter_eight")}
                />
              )}
              <div className="pt-8">
                <CustomButton
                  href={`/champions/${activeChampion.id}`}
                  text={`${t(
                    "back_to_champion"
                  )} ${activeChampion.name.toUpperCase()}`}
                />
              </div>
            </div>
          </div>
        </Container> */}
      </>
    );
}

export default Tale;
