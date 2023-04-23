import { StaticImageData } from "next/image";

export interface Champion {
  id: string;
  name: string;
  region: string;
  biography: string;
  tale: string;
  champion_img: StaticImageData;
  region_img: StaticImageData;
  splash_art: ChampionSplashArt[];
  tale_img: StaticImageData;
  bgPosition: string;
  taleArtPosition: string;
}

export interface ChampionSplashArt {
  splash_art_img: StaticImageData;
}
