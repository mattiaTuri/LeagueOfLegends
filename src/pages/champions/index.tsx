import "swiper/css";
import "swiper/css/navigation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "swiper/css";
import "swiper/css/navigation";
import ChampionsShowcase from "components/feature/champions/championsShowcase/ChampionsShowcase";
import ChampionsList from "components/feature/champions/championsList";
import { useEffect, useState } from "react";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "champions"])),
    },
  };
}

function Champions() {
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setLoadingPage(true);
  }, []);

  return (
    <>
      <div className="pt-[80px] pb-12">
        <div className="h-full flex flex-col items-center">
          {loadingPage && (
            <>
              <ChampionsShowcase />
              <ChampionsList />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Champions;
