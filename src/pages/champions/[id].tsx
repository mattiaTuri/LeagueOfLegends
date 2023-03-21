import Container from "@/components/shared/Container";
import { useRouter } from "next/router";
import { champions } from "../../data/champions";
import Image from "next/image";
import style from "./id.module.css";
import { motion } from "framer-motion";
import CustomButton from "@/components/shared/CustomButton";

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
  initial: { y: 320 },
  animate: {
    y: 0,
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
    <div className="h-full w-full flex flex-col items-center justify-center pt-[6.6rem]">
      <motion.div
        className="w-full flex justify-center items-center p-8"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {nameSplit?.map((letter: string, index: number) => {
          return (
            <motion.h1
              key={index}
              variants={item}
              className="text-5xl"
            >
              {letter}
            </motion.h1>
          );
        })}
      </motion.div>
      <motion.div
        className={`h-[500px] ${style.BoxShadow}`}
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
      <Container>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:2}} className="flex flex-col items-center">
          <div className="p-8">
            <h3 className="text-[#c4b998] text-2xl lg:text-5xl">{activeChampion?.title.toUpperCase()}</h3>
          </div>
          <div className="p-8 flex flex-col items-center">
            <p className="text-[#c4b998]">{activeChampion?.champion_quote}</p>
            <span>{activeChampion?.name}</span>
          </div>
          <div className={style.triangle}></div>
          <div className="p-8 flex flex-col items-center md:w-[50%]">
            <p className="text-center pb-8">{activeChampion?.lore}</p>
            <CustomButton href="" text="CONTINUE READING"/>
          </div>
          <div className="p-8 w-full flex flex-col items-center md:flex-row">
            <div className="md:w-[50%] flex justify-center">
              <Image src={
              activeChampion != undefined ? activeChampion.region_image : ""
            }
            alt=""></Image>
            </div>
            <div className="flex flex-col items-center justify-center md:w-[50%]">
              <span>REGION</span>
              <p className="pb-8 text-2xl lg:text-5xl">{activeChampion?.region.toUpperCase()}</p>
              <CustomButton href="" text="EXPLORE REGION"/>
            </div>
          </div>
        </motion.div >
      </Container>
    </div>
  );
}

export default ChampionPage;
