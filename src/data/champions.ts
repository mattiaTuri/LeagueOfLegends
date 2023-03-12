import { Champion } from "@/models/champion";
import ahri from "../../public/assets/image/ahri/ahri.jpg"
import caitlyn from "../../public/assets/image/caitlyn/caitlyn.jpg"
import evelynn from "../../public/assets/image/evelynn/evelynn.jpg"
import gwen from "../../public/assets/image/gwen/gwen.jpg"
import jinx from "../../public/assets/image/jinx/jinx.jpg"
import ksante from "../../public/assets/image/ksante/ksante.jpg"
import vex from "../../public/assets/image/vex/vex.jpg"

 export const champions: Champion[] = [
    {
        id: "ahri",
        name: "AHRI",
        title:"The nine-tailed fox",
        region:"Ionia",
        lore:"",
        champions_image: ahri
    },
    {
        id: "caitlyn",
        name: "CAITLYN",
        title:"The sheriff of Piltover",
        region:"Piltover",
        lore:"",
        champions_image: caitlyn
    },
    {
        id: "evelynn",
        name: "EVELYNN",
        title:"Agony's embrace",
        region:"Runeterra",
        lore:"",
        champions_image: evelynn
    },
    {
        id: "gwen",
        name: "GWEN",
        title:"The hallowed seamstress",
        region:"Shadow isles",
        lore:"",
        champions_image: gwen
    },
    {
        id: "jinx",
        name: "JINX",
        title:"The loose cannon",
        region:"Zaun",
        lore:"",
        champions_image: jinx
    },
    {
        id: "ksante",
        name: "K'SANTE",
        title:"The pride of Nazumah",
        region:"Runeterra",
        lore:"",
        champions_image: ksante
    },
    {
        id: "vex",
        name: "VEX",
        title:"The gloomist",
        region:"Shadow isles",
        lore:"",
        champions_image: vex
    },
 ]