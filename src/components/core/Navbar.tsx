import Link from "next/link";
import Container from "../shared/Container";
import style from "./navbar.module.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Navbar() {
  const { t } = useTranslation<string>();

  const router = useRouter();

  useEffect(() => {
    const { locale, asPath }: any = router;
    let path: string = "";

    if (asPath == "/") {
      path = asPath.replace("/", "home");
    } else {
      const splittedPath: string[] = asPath.split("/");
      path = splittedPath[1];
    }

    changeLanguage(locale);
    changeActionMenu(path);
  }, []);

  const changeLanguage = (lng: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lng });

    document.querySelectorAll("#menuLanguage button").forEach((elem) => {
      elem.classList.remove(style.activeLink);
    });

    const lang_slider: HTMLElement = document.getElementById("lang-slider")!;
    const lang_button: HTMLElement = document.getElementById(lng)!;

    lang_button.classList.add(style.activeLink);

    lang_slider.style.transform = `translateX(${lang_button.offsetLeft}px)`;
  };

  const changeActionMenu = (elem: string) => {
    document.querySelectorAll("#menuLink a").forEach((elem) => {
      elem.classList.remove(style.activeLink);
    });

    const menu_slider: HTMLElement = document.getElementById("menu-slider")!;
    const link: HTMLElement = document.getElementById(elem)!;
    link.classList.add(style.activeLink);

    menu_slider.style.width = `${link.offsetWidth}px`;
    menu_slider.style.transform = `translateX(${link.offsetLeft}px)`;
  };

  const hoverEffect = (elem: string) => {
    const link: HTMLElement = document.getElementById(elem)!;

    if (!link.classList.contains(style.activeLink)) {
      link.style.background = "#0000008b";
    }
  };

  const leaveHoverEffect = (elem: string) => {
    const link: HTMLElement = document.getElementById(elem)!;
    link.style.background = "transparent";
  };

  return (
    <header className="w-full fixed z-10 bg-[#111] border-b border-[#ba8964]">
      <Container>
        <nav className="w-full flex items-center justify-between text-white p-8">
          <div className="hidden md:flex justify-between w-[250px]">
            <div className="border border-[#ba8964] flex justify-center w-[50%]">
              <span className="text-white text-sm p-2">{t("language")}</span>
            </div>
            <div id="menuLanguage" className="w-[50%] flex relative">
              <button
                id="it"
                className={`w-[50%] text-sm z-10 ${style.linkStyle}`}
                onClick={() => changeLanguage("it")}
                onMouseOver={() => hoverEffect("it")}
                onMouseLeave={() => leaveHoverEffect("it")}
              >
                IT
              </button>
              <button
                id="en"
                className={`w-[50%] text-sm z-10 ${style.linkStyle}`}
                onClick={() => changeLanguage("en")}
                onMouseOver={() => hoverEffect("en")}
                onMouseLeave={() => leaveHoverEffect("en")}
              >
                EN
              </button>
              <div
                id="lang-slider"
                className="bg-[#ba8964] absolute h-full w-[50%] duration-500 ease-[cubic-bezier(0,.95,.55,1.15)]"
              ></div>
            </div>
          </div>
          <div id="hamurgerMenu" className="md:hidden"></div>
          <ul id="menuLink" className="hidden md:flex relative">
            <li className="z-10 flex mr-4 w-[100px]">
              <Link
                id="home"
                href="/"
                data-link="HOME"
                className={`w-full text-sm p-2 flex justify-center items-center ${style.linkStyle}`}
                onClick={() => changeActionMenu("home")}
                onMouseOver={() => hoverEffect("home")}
                onMouseLeave={() => leaveHoverEffect("home")}
              >
                {t("home")}
              </Link>
            </li>
            <li className="z-10 flex w-[100px] mr-4">
              <Link
                id="champions"
                href="/champions"
                data-link="CHAMPIONS"
                className={`w-full text-sm p-2 flex justify-center items-center ${style.linkStyle}`}
                onClick={() => changeActionMenu("champions")}
                onMouseOver={() => hoverEffect("champions")}
                onMouseLeave={() => leaveHoverEffect("champions")}
              >
                {t("champions")}
              </Link>
            </li>
            <li className="z-10 flex w-[100px]">
              <Link
                id="regions"
                href="/regions"
                data-link="REGIONS"
                className={`w-full text-sm p-2 flex justify-center items-center ${style.linkStyle}`}
                onClick={() => changeActionMenu("regions")}
                onMouseOver={() => hoverEffect("regions")}
                onMouseLeave={() => leaveHoverEffect("regions")}
              >
                {t("regions")}
              </Link>
            </li>
            <div
              id="menu-slider"
              className="bg-[#ba8964] absolute h-full duration-500 ease-[cubic-bezier(0,.95,.55,1.15)]"
            ></div>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
