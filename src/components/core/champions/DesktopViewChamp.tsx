import Link from "next/link";
import Image from "next/image";
import { champions } from "../../../data/champions";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";

const hoverTransition = {
  duration: 1,
  ease: [0.25, 1, 0.5, 1],
};

const championImage = {
  initial: {},
  hover: {
    scale: 1.1,
  },
};

const championName = {
  initial: {},
  hover: {},
};

function DesktopViewChamp() {
  return (
    <Container>
      <div className="p-8 flex flex-wrap w-full">
        {champions.map((champion, index) => {
          return (
            <Link
              key={index}
              href={`/champions/${champion.id}`}
              className="p-2 w-[20%] h-96 relative"
            >
              <motion.div
                className="h-full w-full relative overflow-hidden"
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  style={{
                    backgroundImage: `url('${champion.champion_image.src}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: champion.bgPosition,
                  }}
                  variants={championImage}
                  transition={hoverTransition}
                  className="h-full w-full relative"
                />
                <motion.div
                  className="absolute bottom-0 bg-[#111] opacity-80 w-full h-[20%] flex flex-col justify-center items-center"
                  variants={championName}
                  transition={hoverTransition}
                >
                  <span className="text-sm">{champion.name}</span>
                  <span className="text-sm text-white">{champion.region}</span>
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default DesktopViewChamp;
