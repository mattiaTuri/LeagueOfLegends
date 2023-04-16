import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Champion } from "@/models/champion";
import ImageComponent from "@/components/shared/ImageContainer";

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

function DesktopViewChamp({ champions, windowWidth }: any) {
  return (
    <Container>
      <div className="p-8 flex flex-wrap w-full">
        {champions.map((champion: any, index: number) => {
          return (
            <ImageComponent
              key={index}
              href={`/champions/${champion.id}`}
              img={champion?.champion_img}
              name={champion?.name}
              imgPosition={champion.bgPosition}
              width="20%"
              desktop_width="20%"
              windowWidth={windowWidth}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default DesktopViewChamp;
