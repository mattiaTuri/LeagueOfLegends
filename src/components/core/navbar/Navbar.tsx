import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(1024);
  
  useEffect(() => {
    function WindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", WindowResize);
    setWindowWidth(window.innerWidth);
    
    return () => {
      removeEventListener("resize", WindowResize);
    };
  }, []);

  return (
    <header className="w-full h-[80px] fixed z-10 bg-[#111] border-b border-[#ba8964]">
      {windowWidth > 767 ? (
        <DesktopMenu/>
      ) : (
        <HamburgerMenu />
      )}
    </header>
  );
}

export default Navbar;
