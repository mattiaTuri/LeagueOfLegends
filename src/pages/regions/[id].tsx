import Container from "@/components/shared/Container";
import Image from "next/image";
import { regions } from "@/data/regions";
import { easeInOut, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

const region_title = {
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

const region_icon = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: easeInOut,
    },
  },
};

function Region({ activeRegion }: any) {
  const { t } = useTranslation();

  const region_description: string[] = t(
    `regions:${activeRegion.id}.description`,
    {
      returnObjects: true,
    }
  );

  return (
    <>
      <div className="h-screen">
        <Image
          alt=""
          src={activeRegion.region_img}
          className={`absolute top-0 h-full object-cover z-[-1]`}
        />
        <Container>
          <div className="w-full flex flex-col justify-end items-center p-8">
            <div className="relative bottom-40">
              <motion.h1
                initial="initial"
                animate="animate"
                variants={region_title}
                className="text-3xl md:text-5xl text-[#c4b998] text-center py-10"
              >
                {t(`champions:${activeRegion.id}.name`).toUpperCase()}
              </motion.h1>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="w-full flex justify-center">
          <div className="lg:w-[50%]">
            {region_description.map((paragraph: string, index: number) => {
              return (
                <p key={index} className="p-4 text-sm lg:text-base">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Region;