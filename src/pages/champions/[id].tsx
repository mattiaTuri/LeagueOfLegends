import Container from "@/components/shared/Container";
import { useRouter } from "next/router";
import { champions } from "../../data/champions";
import Image from "next/image";
import style from "./id.module.css";
import { motion } from "framer-motion";

const container = {
  initial: {},
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  initial: { y: 0 },
  animate: {
    y: -250,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

function ChampionPage() {
  const router = useRouter();
  const championId = router.query;

  const activeChampion = champions.find((elem) => elem.id == championId.id);

  let nameSplit = activeChampion?.name.split("");

  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <motion.div
          className="flex absolute"
          variants={container}
          initial="initial"
          animate="animate"
        >
          {nameSplit?.map((letter: string, index: number) => {
            return (
              <motion.h1
                key={index}
                variants={item}
                className="text-5xl lg:text-8xl"
              >
                {letter}
              </motion.h1>
            );
          })}
        </motion.div>
        <motion.div
          className={`h-[50%] ${style.BoxShadow}`}
          initial={{ width: "50%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <Image
            src={
              activeChampion != undefined ? activeChampion.champions_image : ""
            }
            alt=""
            className={`relative z-[-1] h-full object-cover ${style.championImg}`}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ChampionPage;
