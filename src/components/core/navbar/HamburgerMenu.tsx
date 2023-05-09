import { useEffect, useState } from "react";
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
    document.querySelectorAll("#menuLanguage button").forEach((elem : any) => {
      elem.style.textDecoration = "none";
    });
    const lang_button: HTMLElement = document.getElementById(lng)!;
    lang_button.style.textDecoration = "underline";
  };

  return (
    <nav className="flex justify-between items-center p-8">
      <h1>LEAGUE OF LEGENDS</h1>
      <button
        className="h-[20px] flex flex-col justify-between duration-500 z-10"
        onClick={() => openHamburgerMenu()}
      >
        <span
          id="lineOne"
          className={`bg-[#C3A06A] w-[25px] h-[2px] block ${openMenu ? "duration-300 origin-bottom-right -rotate-45" : "duration-300 rotate-0"}`}
        ></span>
        <span
          id="lineTwo"
          className={`bg-[#C3A06A] w-[25px] h-[2px] block ${openMenu ? "duration-300 opacity-0 translate-x-[-20px]" : "duration-300 opacity-1 translate-x-0"}`}
        ></span>
        <span
          id="lineThree"
          className={`bg-[#C3A06A] w-[25px] h-[2px] block ${openMenu ? "duration-300 origin-top-right rotate-45" : "duration-300 rotate-0"}`}
        ></span>
      </button>
      <div className={`absolute top-0 w-screen h-screen bg-[#000000f1] flex flex-col justify-center items-center duration-500 ${openMenu ? "left-0" : "left-[-100%]"}`}>
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
              className="text-base text-[#ba8964]"
              onClick={() => changeLanguage("it")}
            >
              <span>IT</span>
            </button>
            <button
              id="en"
              className="text-base text-[#ba8964]"
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
