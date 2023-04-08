import { useState } from "react";
import style from "./hamburgerMenu.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  const openHamburgerMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
    const lineOne = document.getElementById("lineOne");
    const lineTwo = document.getElementById("lineTwo");
    const lineThree = document.getElementById("lineThree");

    if (openMenu) {
      lineOne?.classList.add(style.firstLineAnim);
      lineTwo?.classList.add(style.secondLineAnim);
      lineThree?.classList.add(style.thirdLineAnim);
    } else {
      lineOne?.classList.remove(style.firstLineAnim);
      lineTwo?.classList.remove(style.secondLineAnim);
      lineThree?.classList.remove(style.thirdLineAnim);
    }
  };

  return (
    <nav className="flex justify-end items-center p-8">
      <button
        className={style.hamburgerIcon}
        onClick={() => openHamburgerMenu()}
      >
        <span id="lineOne" className={style.firstLine}></span>
        <span id="lineTwo" className={style.secondLine}></span>
        <span id="lineThree" className={style.thirdLine}></span>
      </button>
      <div className={`${style.menu} ${openMenu && style.activeMenu}`}>
        <Link href="/">{t("home")}</Link>
        <Link href="/champions">{t("champions")}</Link>
        <Link href="/regions">{t("regions")}</Link>
      </div>
    </nav>
  );
}

export default HamburgerMenu;
