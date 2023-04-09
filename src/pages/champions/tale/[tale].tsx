import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { champions } from "../../../data/champions";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/shared/Container";
import style from "./tale.module.css";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CustomButton from "@/components/shared/CustomButton";

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
  const { t } = useTranslation();
  const [loadingTransaltion, setLoadingTranslation] = useState<boolean>(false);

  useEffect(() => {
    setLoadingTranslation(true);
  });

  const tale_first_part: any[] = t(
    `champions:${activeChampion.id}.tale_first_part`,
    {
      returnObjects: true,
    }
  );

  const tale_second_part: any[] = t(
    `champions:${activeChampion.id}.tale_second_part`,
    {
      returnObjects: true,
    }
  );

  if (loadingTransaltion)
    return (
      <div className="">
        <div className={`h-[100vh] relative ${style.imgGradient}`}>
          <Image
            alt=""
            src={activeChampion.tale_img}
            className={`absolute top-0 h-full object-cover z-[-1]`}
            style={{ objectPosition: activeChampion.taleBgPosition }}
          />
          <Container>
            <div className="relative w-full flex flex-col justify-end items-center bottom-40 p-8">
              <motion.div initial="initial" animate="animate">
                <motion.div
                  variants={name}
                  className="py-8 text-center lg:text-left"
                >
                  <div className="border border-[#C3A06A] inline p-2">
                    <span className="text-base lg:text-2xl">
                      {activeChampion.name}
                    </span>
                  </div>
                </motion.div>
                <motion.span
                  variants={text}
                  className="text-sm lg:text-base block text-center lg:text-left"
                >
                  {t("league_of_legend_story")}
                </motion.span>
                <motion.h1
                  variants={title}
                  className="text-5xl lg:text-7xl text-[#c4b998] text-center"
                >
                  {t(`champions:${activeChampion.id}.tale_title`).toUpperCase()}
                </motion.h1>
                {t(`champions:${activeChampion?.id}.tale_author`) && (
                  <motion.span
                    variants={author}
                    className="text-sm lg:text-base block text-center lg:text-right"
                  >
                    by {t(`champions:${activeChampion.id}.tale_author`)}
                  </motion.span>
                )}
              </motion.div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="p-8 flex flex-col items-center">
            <div className="lg:w-[50%]">
              {tale_first_part.map((paragraph: string, index: number) => {
                return (
                  <p key={index} className="p-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
            <div className="py-16 w-[50%]">
              <span className="border border-[#C3A06A] w-full block"></span>
            </div>
            {tale_second_part.length != 0 && (
              <div className="lg:w-[50%]">
                {tale_second_part.map((paragraph: string, index: number) => {
                  return (
                    <p key={index} className="p-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            )}
            <div className="pt-8">
              <CustomButton
                href={`/champions/${activeChampion.id}`}
                text={`Back to ${activeChampion.name.toUpperCase()}`}
              />
            </div>
          </div>
        </Container>
      </div>
    );
}

export default Tale;
