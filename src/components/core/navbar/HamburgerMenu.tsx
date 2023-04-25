import { useEffect, useState } from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const { locale }: any = router;

    changeLanguage(locale);
  }, []);

  const openHamburgerMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  const changeLanguage = (lng: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lng });
    document.querySelectorAll("#menuLanguage button").forEach((elem) => {
      elem.classList.remove(style.langActiveLink);
    });
    const lang_button: HTMLElement = document.getElementById(lng)!;
    lang_button.classList.add(style.langActiveLink);
  };

  return (
    <nav className="flex justify-between items-center p-8">
      <h1>LEAGUE OF LEGENDS</h1>
      <button
        className={style.hamburgerIcon}
        onClick={() => openHamburgerMenu()}
      >
        <span
          id="lineOne"
          className={`${openMenu ? style.firstLineAnim : style.firstLine}`}
        ></span>
        <span
          id="lineTwo"
          className={`${openMenu ? style.secondLineAnim : style.secondLine}`}
        ></span>
        <span
          id="lineThree"
          className={`${openMenu ? style.thirdLineAnim : style.thirdLine}`}
        ></span>
      </button>
      <div className={`${style.menu} ${openMenu && style.activeMenu}`}>
        <div className="flex flex-col items-center justify-evenly h-[25%] border-b border-[#c4b998]">
          <Link
            href="/"
            className="text-2xl"
            onClick={() => setOpenMenu(false)}
          >
            {t("home")}
          </Link>
          <Link
            href="/champions"
            className="text-2xl"
            onClick={() => setOpenMenu(false)}
          >
            {t("champions")}
          </Link>
          <Link
            href="/regions"
            className="text-2xl"
            onClick={() => setOpenMenu(false)}
          >
            {t("regions")}
          </Link>
        </div>
        <div className="h-[25%] flex flex-col items-center justify-center border-b border-[#c4b998]">
          <span className="text-[#c4b998]">{t("coming_soon")}</span>
          <Link
            href="/arcane"
            className="text-2xl pointer-events-none opacity-50"
          >
            {t("arcane")}
          </Link>
        </div>
        <div className="h-[25%] flex flex-col justify-center">
          <span className="text-2xl">{t("language")}</span>
          <div id="menuLanguage" className="flex justify-around mt-4">
            <button
              id="it"
              className={`text-base ${style.linkStyle}`}
              onClick={() => changeLanguage("it")}
            >
              <span>IT</span>
            </button>
            <button
              id="en"
              className={`text-base ${style.linkStyle}`}
              onClick={() => changeLanguage("en")}
            >
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HamburgerMenu;
