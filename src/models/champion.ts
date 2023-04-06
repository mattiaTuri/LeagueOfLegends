import { StaticImageData } from "next/image";

export interface Champion{
    id: string,
    name:string,
    champion_image: StaticImageData;
    region_image: StaticImageData
    splash_art: ChampionSplashArt[];
    bgPosition: string;
}

export interface ChampionSplashArt{
    splash_art_img: StaticImageData
}