import Container from "@/components/shared/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { regions } from "../../data/regions";
import { useTranslation } from "next-i18next";
import ImageComponent from "@/components/shared/ImageContainer";
import { useEffect, useState } from "react";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["regions", "common"])),
  },
});

function Region() {
  const [windowWidth, setWindowWidth] = useState<number>(1024);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  useEffect(() => {
    function WindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", WindowResize);
    setWindowWidth(innerWidth);
    setLoading(false);
    return () => {
      removeEventListener("resize", WindowResize);
    };
  }, []);

  if (!loading)
    return (
      <Container>
        <div className="pt-[80px] w-full p-8">
          <div className="text-center py-8">
            <h1 className="text-2xl md:text-5xl">{t("regions")}</h1>
          </div>
          <div className="w-full flex flex-wrap">
            {regions.map((region, index: number) => {
              return (
                <ImageComponent
                  key={index}
                  href={`/regions/${region.id}`}
                  img={region?.region_img}
                  name={t(`regions:${region.id}.name`)}
                  imgPosition={region.bgPosition}
                  width="100%"
                  desktop_width="50%"
                  windowWidth={windowWidth}
                />
              );
            })}
          </div>
        </div>
      </Container>
    );
}

export default Region;
