import Link from "next/link";
import Container from "../shared/Container";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <header className="fixed w-full z-10">
      <Container>
        <nav className="w-full flex justify-between text-white pt-8">
          <div>
            <h1>TM</h1>
          </div>
          <div id="hamurgerMenu" className="md:hidden"></div>
          <ul className="hidden md:flex">
            <li className={`${style.containerLink} mr-8 relative flex`}>
              <Link href="/" data-link="HOME" className="p-2">HOME</Link>
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
