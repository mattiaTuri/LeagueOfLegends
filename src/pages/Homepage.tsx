import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import arcaneClip from "../../public/assets/video/arcaneClip.mp4";
import style from "./homepage.module.css";

function Homepage() {
  return (
    <>
      <div className="text-white h-screen">
        <Container>
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="pb-10">
                <span className="text-sm md:tracking-[10px]">
                  - EXPLORE THE UNIVERS OF -
                </span>
              </div>
              <div className="flex items-center">
                <h1 className="text-5xl md:text-8xl">LEAGUE</h1>
                <span className="text-sm md:tracking-[10px]">OF</span>
              </div>
              <h1 className="text-5xl md:text-8xl">LEGENDS</h1>
            </div>
            <div className="hidden lg:flex absolute bottom-10 right-0 px-8">
              <div className="w-96 h-48">
                <Link
                  href="/arcane"
                  className={`w-full h-full flex justify-center items-center border border-[#ba8964] ${style.link}`}
                >
                  <div className={style.backdrop}></div>
                  <div className="absolute z-10">
                    <h2 className="text-5xl text-[#ba8964]">ARCANE</h2>
                  </div>
                  <video
                    className="object-fill h-full w-full"
                    preload="auto"
                    loop
                    autoPlay
                  >
                    <source src={arcaneClip} type="video/mp4" />
                  </video>
                </Link>
              </div>
            </div>
            {/* <div>
              <div className="absolute flex bottom-10 right-0 px-8">
                <div className="w-64 h-32">
                  <Link
                    href="/arcane"
                    className={`w-full h-full flex items-center justify-center `}
                  >
                    <div className={`absolute w-full h-full text-white`}>
                      <h3 data-link="ARCANE">ARCANE</h3>
                    </div>
                    <video
                      className="h-full w-full object-cover absolute"
                      preload="auto"
                      loop
                      autoPlay
                    >
                      <source src={arcaneClip} type="video/mp4" />
                    </video>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Homepage;
