import { StaticImageData } from "next/image";

export interface Region {
    id: string;
    name: string;
    icon: StaticImageData;
    region_img: StaticImageData
}