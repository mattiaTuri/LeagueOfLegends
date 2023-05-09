import Container from "components/shared/Container";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function DesktopMenu() {
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

    document.querySelectorAll("#menuLanguage button").forEach((elem:any) => {
      elem.style.color = "#ba8964"
      elem.style.background = "none"
    });

    const lang_slider: HTMLElement = document.getElementById("lang-slider")!;
    const active_lang: HTMLElement = document.getElementById(lng)!;
    active_lang.style.transitionDuration = ".5s"
    active_lang.style.color = "black"
    active_lang.style.background = "rgb(186, 137, 100)"

    lang_slider.style.transform = `translateX(${active_lang.offsetLeft}px)`;
  };

  const changeActionMenu = (elem: string) => {
    document.querySelectorAll("#menuLink a").forEach((elem:any) => {
      elem.style.color = "#ba8964"
      elem.style.background = "none"
    });

    const menu_slider: HTMLElement = document.getElementById("menu-slider")!;
    const activeLink: HTMLElement = document.getElementById(elem)!;
    activeLink.style.transitionDuration = "1s"
    activeLink.style.color = "black"
    activeLink.style.background = "rgb(186, 137, 100)"

    menu_slider.style.width = `${activeLink.offsetWidth}px`;
    menu_slider.style.transform = `translateX(${activeLink.offsetLeft}px)`;
  };

  const hoverEffect = (elem: string) => {
    const link: HTMLElement = document.getElementById(elem)!;

    if (link.style.background != "rgb(186, 137, 100)") {
      link.style.background = "#0000008b";
    }
  };

  const leaveHoverEffect = (elem: string) => {
    const link: HTMLElement = document.getElementById(elem)!;
    if (link.style.background != "rgb(186, 137, 100)") {
      link.style.background = "none";
    }  
  };

  return (
    <Container>
      <nav className="w-full p-8 flex items-center justify-between">
        <div className="flex justify-between w-[250px]">
          <div className="flex justify-start w-[50%]">
            <span className="text-sm py-2">{t("language")}</span>
          </div>
          <div id="menuLanguage" className="w-[50%] flex relative">
            <button
              id="it"
              className={`w-[50%] text-sm z-10`}
              onClick={() => changeLanguage("it")}
              onMouseOver={() => hoverEffect("it")}
              onMouseLeave={() => leaveHoverEffect("it")}
            >
              IT
            </button>
            <button
              id="en"
              className="w-[50%] text-sm z-10"
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
        <ul id="menuLink" className="hidden md:flex relative">
          <li className="z-10 flex mr-4 w-[100px]">
            <Link
              id="home"
              href="/"
              className="w-full text-sm p-2 flex justify-center items-center hover:duration-500"
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
              className="w-full text-sm p-2 flex justify-center items-center hover:duration-500"
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
              className="w-full text-sm p-2 flex justify-center items-center hover:duration-500"
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
  );
}

export default DesktopMenu;
