import { Champion } from "models/champion";

export interface ChampionProps {
  name: string;
  title: string;
  author: string;
  img: StaticImageData;
  bgPosition: string;
}

export interface ImageSwiper {
  champion: Champion;
  windowWidth: number;
}
