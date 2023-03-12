import { StaticImageData } from "next/image";

export interface Champion{
    id: string,
    name: string;
    title: string;
    region: string;
    lore: string;
    champions_image: StaticImageData;
}