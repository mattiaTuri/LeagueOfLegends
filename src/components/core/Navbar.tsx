import Link from "next/link";
import Container from "../shared/Container";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <header className="w-full z-10 bg-[#111] border-b border-[#ba8964]">
      <Container>
        <nav className="w-full flex items-center justify-between text-white p-8">
          <div>
            <h1>TM</h1>
          </div>
          <div id="hamurgerMenu" className="md:hidden"></div>
          <ul className="hidden md:flex">
            <li className={`${style.containerLink} mr-8 relative flex`}>
              <Link href="/" data-link="HOME" className="p-2">
                HOME
              </Link>
            </li>
            <li className={`${style.containerLink} mr-8 relative flex`}>
              <Link href="/champions" data-link="CHAMPIONS" className="p-2">
                CHAMPIONS
              </Link>
            </li>
            <li className={`${style.containerLink} relative flex`}>
              <Link href="/regions" data-link="REGIONS" className="p-2">
                REGIONS
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
