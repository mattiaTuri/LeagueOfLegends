import { StaticImageData } from "next/image";

export interface Champion{
    id: string;
    name:string;
    champion_img: StaticImageData;
    region_img: StaticImageData;
    splash_art: ChampionSplashArt[];
    story_img:StaticImageData;
    bgPosition: string;
}

export interface ChampionSplashArt{
    splash_art_img: StaticImageData
}