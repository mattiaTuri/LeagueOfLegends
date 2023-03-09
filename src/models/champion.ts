import { StaticImageData } from "next/image";

export interface Champion{
    id: number,
    name: string;
    title: string;
    region: string;
    lore: string;
    champions_image: StaticImageData;
}