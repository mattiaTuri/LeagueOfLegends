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
    let url_path: string = router.asPath;
    if (url_path == "/") {
      url_path = url_path.replace("/", "home");
    } else {
      const splittedPath: string[] = url_path.split("/");
      url_path = splittedPath[1];
    }

    changeActionMenu(url_path);
  }, []);

  const changeLanguage = (lng: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lng });

    const lang_slider: HTMLElement = document.getElementById("lang-slider")!;
    const lang_button: HTMLElement = document.getElementById(lng)!;

    lang_slider.style.transform = `translateX(${lang_button.offsetLeft}px)`;
  };

  const changeActionMenu = (path: string) => {
    document.querySelectorAll("#menuLink a").forEach((elem) => {
      elem.classList.remove(style.activeLink);
    });

    path = t(`${path}`).toLowerCase();

    const menu_slider: HTMLElement = document.getElementById("menu-slider")!;
    const link: HTMLElement = document.getElementById(path)!;
    link.classList.add(style.activeLink);

    menu_slider.style.width = `${link.offsetWidth}px`;
    menu_slider.style.transform = `translateX(${link.offsetLeft}px)`;
  };

  return (
    <header className="w-full fixed z-10 bg-[#111] border-b border-[#ba8964]">
      <Container>
        <nav className="w-full flex items-center justify-between text-white p-8">
          <div className="hidden md:flex w-[250px]">
            <div className="border border-[#ba8964] flex justify-center w-[50%]">
              <span className="text-white p-2">{t("language")}</span>
            </div>
            <div className="w-[50%] flex relative">
              <button
                id="it"
                className="w-[50%] z-10 text-black hover:text-white"
                onClick={() => changeLanguage("it")}
              >
                <span className="p-2">IT</span>
              </button>
              <button
                id="en"
                className="w-[50%] z-10"
                onClick={() => changeLanguage("en")}
              >
                <span className="text-black p-2">EN</span>
              </button>
              <div
                id="lang-slider"
                className="bg-[#ba8964] absolute h-full w-[50%] duration-300 ease-in-out"
              ></div>
            </div>
          </div>
          <div id="hamurgerMenu" className="md:hidden"></div>
          <ul id="menuLink" className="hidden md:flex relative">
            <li className={`${style.containerLink} mr-8 z-10 w-[150px] flex`}>
              <Link
                id={t("home").toLowerCase()}
                href="/"
                data-link="HOME"
                className="w-full p-2 flex justify-center items-center"
                onClick={() => changeActionMenu(t("home").toLowerCase())}
              >
                {t("home")}
              </Link>
            </li>
            <li className={`${style.containerLink} mr-8 z-10 w-[150px] flex`}>
              <Link
                id={t("champions").toLowerCase()}
                href="/champions"
                data-link="CHAMPIONS"
                className="w-full p-2 flex justify-center items-center"
                onClick={() => changeActionMenu(t("champions").toLowerCase())}
              >
                {t("champions")}
              </Link>
            </li>
            <li className={`${style.containerLink} z-10 w-[150px] flex`}>
              <Link
                id={t("regions").toLowerCase()}
                href="/regions"
                data-link="REGIONS"
                className="w-full p-2 flex justify-center items-center"
                onClick={() => changeActionMenu(t("regions").toLowerCase())}
              >
                {t("regions")}
              </Link>
            </li>
            <div
              id="menu-slider"
              className="bg-[#ba8964] absolute h-full duration-300 ease-in-out"
            ></div>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
