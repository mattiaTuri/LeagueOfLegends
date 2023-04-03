import { StaticImageData } from "next/image";

export interface Champion{
    id: string,
    name: string;
    title: string;
    quote: string;
    champion_image: StaticImageData;
    region: string;
    region_image: StaticImageData
    lore: string;
    splash_art: ChampionSplashArt[];
    bgPosition: string;
}

export interface ChampionSplashArt{
    title: string;
    art: StaticImageData
}