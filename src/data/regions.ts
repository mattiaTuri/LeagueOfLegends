import { Region } from "@/models/region";

import bandle_city from "../../public/assets/images/regions/splash/bandle_city_splash.jpg";
import bilgewater from "../../public/assets/images/regions/splash/bilgewater_splash.jpg";
import demacia from "../../public/assets/images/regions/splash/demacia_splash.jpeg";
import freljord from "../../public/assets/images/regions/splash/freljord_splash.jpg";
import ionia from "../../public/assets/images/regions/splash/ionia_splash.jpg";
import ixtal from "../../public/assets/images/regions/splash/ixtal_splash.jpg";
import noxus from "../../public/assets/images/regions/splash/noxus_splash.jpg";
import piltover from "../../public/assets/images/regions/splash/piltover_splash.jpg";
import shadow_isles from "../../public/assets/images/regions/splash/shadow_isles_splash.jpg";
import shurima from "../../public/assets/images/regions/splash/shurima_splash.jpg";
import targon from "../../public/assets/images/regions/splash/targon_splash.jpg";
import void_unknowable from "../../public/assets/images/regions/splash/void_unknowable.jpg";
import zaun from "../../public/assets/images/regions/splash/zaun_splash.jpeg";

/* ICONS */
import bandle_city_icon from "../../public/assets/images/regions/icons/bandle_city_icon.png";
import bilgewater_icon from "../../public/assets/images/regions/icons/bilgewater_icon.png";
import demacia_icon from "../../public/assets/images/regions/icons/demacia_icon.png";
import freljord_icon from "../../public/assets/images/regions/icons/freljord_icon.png";
import ionia_icon from "../../public/assets/images/regions/icons/iona_icon.png";
import ixtal_icon from "../../public/assets/images/regions/icons/ixtal_icon.png";
import noxus_icon from "../../public/assets/images/regions/icons/noxus_icon.png";
import piltover_icon from "../../public/assets/images/regions/icons/piltover_icon.png";
import shadow_isles_icon from "../../public/assets/images/regions/icons/shurima_icon.png";
import shurima_icon from "../../public/assets/images/regions/icons/shurima_icon.png";
import targon_icon from "../../public/assets/images/regions/icons/targon_icon.png";
import void_unknowable_icon from "../../public/assets/images/regions/icons/void_icon.png";
import zaun_icon from "../../public/assets/images/regions/icons/zaun_icon.png";


export const regions: Region[] = [
    {
        id: "bandle_city",
        name: "Bandle City",
        icon: bandle_city_icon,       
        region_img: bandle_city,
    },
    {
        id: "bilgewater",
        name: "Bilgewater",
        icon: bilgewater_icon,
        region_img: bilgewater,
    },
    {
        id: "demacia",
        name: "Demacia",
        icon: demacia_icon,
        region_img: demacia,
    },
    {
        id: "freljord",
        name: "Freljord",
        icon: freljord_icon,
        region_img: freljord,
    },
    {
        id: "ionia",
        name: "Ionia",
        icon: ionia_icon,
        region_img: ionia,
    },
    {
        id: "ixtal",
        name: "Ixtal",
        icon: ixtal_icon,
        region_img: ixtal,
    }, 
    {
        id: "noxus",
        name: "Noxus",
        icon: noxus_icon,
        region_img: noxus,
    }, 
    {
        id: "piltover",
        name: "Piltover",
        icon: piltover_icon,
        region_img: piltover,
    }, 
    {
        id: "shadow_isles",
        name: "Shadow Isles",
        icon: shadow_isles_icon,
        region_img: shadow_isles,
    }, 
    {
        id: "shurima",
        name: "Shurima",
        icon: shurima_icon,
        region_img: shurima,
    }, 
    {
        id: "targon",
        name: "Targon",
        icon: targon_icon,
        region_img: targon,
    },
    {
        id: "void",
        name: "Void",
        icon: void_unknowable_icon,
        region_img: void_unknowable,
    }, 
    {
        id: "zaun",
        name: "Zaun",
        icon: zaun_icon,
        region_img: zaun,
    }, 
]