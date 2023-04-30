import SmarphoneViewChamp from "components/feature/champions/championsList/SmartphoneViewChamp";
import useWidth from "components/shared/useWidth";
import DesktopViewChamp from "./DesktopViewChamp";
import { useTranslation } from "react-i18next";

function ChampionsList() {
  const { windowWidth } = useWidth();
  const { t } = useTranslation();
  return (
    <>
      <div className="pt-20">
        <h1 className="text-2xl text-center md:text-5xl">{t("champions")}</h1>
      </div>
      {windowWidth > 767 ? <DesktopViewChamp /> : <SmarphoneViewChamp />}
    </>
  );
}

export default ChampionsList;
