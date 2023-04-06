import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["champions", "common"])),
  },
});

function Region() {
  return <div className="text-white">Region</div>;
}

export default Region;
