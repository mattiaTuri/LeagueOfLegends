import Link from "next/link";
import Image from "next/image";
import { champions } from "../../../data/champions";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";

const championBox = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
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
              className="p-2 w-[20%] relative"
            >
              <motion.div
                className="h-96 relative"
                whileHover="hover"
                variants={championBox}
              >
                <div
                  style={{
                    backgroundImage: `url('${champion.champions_image[0].src}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: champion.bgPosition,
                  }}
                  className="h-full"
                />
                <div className="absolute bottom-0 bg-[#111] opacity-80 w-full h-[20%] flex flex-col justify-center items-center">
                  <span className="text-sm">{champion.name}</span>
                  <span className="text-sm text-white">{champion.region}</span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default DesktopViewChamp;
