import Link from "next/link";
import { useState } from "react";
import Container from "../shared/Container";
import style from "./navbar.module.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [language, setLanguage] = useState<string>("en");
  const { t } = useTranslation<string>();

  const changeLanguage = () => {
    language == "en" ? setLanguage("it") : setLanguage("en");
    i18next.changeLanguage(language);
  };

  return (
    <header className="w-full fixed z-10 bg-[#111] border-b border-[#ba8964]">
      <Container>
        <nav className="w-full flex items-center justify-between text-white p-8">
          <div>
            <h1>TM</h1>
          </div>
          <div id="hamurgerMenu" className="md:hidden"></div>
          <ul className="hidden md:flex">
            <li className={`${style.containerLink} mr-8 relative flex`}>
              <Link href="/" data-link="HOME" className="p-2">
                {t("home")}
              </Link>
            </li>
            <li className={`${style.containerLink} mr-8 relative flex`}>
              <Link href="/champions" data-link="CHAMPIONS" className="p-2">
                {t("champions")}
              </Link>
            </li>
            <li className={`${style.containerLink} relative flex`}>
              <Link href="/regions" data-link="REGIONS" className="p-2">
                {t("regions")}
              </Link>
            </li>
          </ul>
          <div className="flex w-[200px]">
            <div className="border border-[#ba8964] flex justify-center w-[80%]">
              <span className="text-white p-2">LANGUAGE</span>
            </div>
            <button className="bg-[#ba8964] flex justify-center w-[20%]" onClick={() => changeLanguage()}>
              <span className="text-black p-2">{language.toUpperCase()}</span>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
