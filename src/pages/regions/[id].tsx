import { regions } from "@/data/regions";
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

function Region({ activeRegion }: any) {
  return <div>Region</div>;
}

export default Region;
