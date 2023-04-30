import Container from "components/shared/Container";
import Image from "next/image";
import { regions } from "data/regions";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import style from "./region.module.css";
import CustomButton from "components/shared/CustomButton";
import { title_anim, region_icon_anim } from "animation/FramerMotion";

export async function getStaticPaths({ locales }: any) {
  const paths = regions
    .map((region) =>
      locales.map((locale: any) => ({
        params: {
          id: region.id,
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
  const activeRegion: any = regions.find((elem) => elem.id == params.id);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["regions", "common"])),
      activeRegion,
    },
  };
}

function Region({ activeRegion }: any) {
  const { t } = useTranslation();

  return (
    <>
      <div className={`h-screen ${style.bgLinearGradient}`}>
        <Image
          src={activeRegion.region_img}
          alt=""
          className={`absolute top-0 h-full w-full z-[-1] object-cover`}
        />
        <Container>
          <div className="w-full flex flex-col justify-end items-center p-8">
            <motion.div
              className="relative bottom-40"
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="flex justify-center"
                variants={region_icon_anim}
              >
                <Image
                  src={activeRegion.icon}
                  alt={t(`regions:${activeRegion.id}.name`)}
                  className={`w-${activeRegion.width}`}
                />
              </motion.div>
              <motion.h1
                variants={title_anim}
                className="text-3xl md:text-5xl text-[#c4b998] pt-10"
              >
                {t(`regions:${activeRegion.id}.name`).toUpperCase()}
              </motion.h1>
            </motion.div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-center p-10 w-full">
          <div className="w-full lg:w-[50%] flex flex-col items-center">
            <Trans
              i18nKey={t(`regions:${activeRegion.id}.description`)}
              components={[
                <p key="text" className="text-sm lg:text-base p-4"></p>,
              ]}
            />
            <div className="pt-8">
              <CustomButton href="/regions" text={t("back_to_region_menu")} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Region;
