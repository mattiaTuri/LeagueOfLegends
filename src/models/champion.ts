import { StaticImageData } from "next/image";

export interface Champion{
    id: string,
    name: string;
    title: string;
    champion_quote: string;
    region: string;
    region_image: StaticImageData
    lore: string;
    champions_image: StaticImageData;
}