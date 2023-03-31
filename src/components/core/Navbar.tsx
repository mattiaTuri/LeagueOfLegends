import Link from "next/link";
import { useState } from "react";
import Container from "../shared/Container";
import style from "./navbar.module.css";
import { Icon } from '@iconify/react';
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [ language, setLanguage ] = useState<string>("en");
  const {t} = useTranslation<string>();

  const changeLanguage = () => {
    language == "en" ? setLanguage("it") : setLanguage("en")
    i18next.changeLanguage(language)
  }

  return (
    <header className="w-full fixed z-10 bg-[#111] border-b border-[#ba8964]">
      <Container>
        <nav className="w-full flex items-center justify-between text-white p-8">
          <div>
            <h1>TM</h1>
          </div>
          <div id="hamurgerMenu" className="md:hidden"></div>
          <button onClick={() => changeLanguage()}>
            <Icon icon="material-symbols:language" />
          </button>
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
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
