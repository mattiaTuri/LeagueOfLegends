import Link from "next/link";
import Container from "../shared/Container";
import style from "./navbar.module.css";
import anime from "animejs";

function Navbar() {
  return (
    <header className="fixed w-full z-10">
      <Container>
        <nav className="w-full flex justify-between text-white pt-8">
          <div>
            <h1>TM</h1>
          </div>
          <div id="hamurgerMenu" className="md:hidden"></div>
          <div className="hidden md:flex">
            <Link href="/">HOME</Link>
            <Link href="/champions" className="ml-8">
              CHAMPIONS
            </Link>
            <Link href="/regions" className="ml-8">
              REGIONS
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
