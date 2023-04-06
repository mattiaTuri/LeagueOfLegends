import Link from "next/link";
import Image from "next/image";

import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Champion } from "@/models/champion";

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

function DesktopViewChamp({ champions }: any) {
  return (
    <Container>
      <div className="p-8 flex flex-wrap w-full">
        {champions.map((champion: any, index: number) => {
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
                    backgroundPosition: champion.bgPosition,
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
