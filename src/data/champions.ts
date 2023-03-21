import { Champion } from "@/models/champion";
import ahri from "../../public/assets/image/ahri/ahri.jpg"
import caitlyn from "../../public/assets/image/caitlyn/caitlyn.jpg"
import evelynn from "../../public/assets/image/evelynn/evelynn.jpg"
import gwen from "../../public/assets/image/gwen/gwen.jpg"
import jinx from "../../public/assets/image/jinx/jinx.jpg"
import ksante from "../../public/assets/image/ksante/ksante.jpg"
import vex from "../../public/assets/image/vex/vex.jpg"
import ionia from "../../public/assets/image/region/ionia.png"

 export const champions: Champion[] = [
    {
        id: "ahri",
        name: "AHRI",
        title:"The nine-tailed fox",
        champion_quote: "“Human emotions can be more volatile than even the deepest magic.”",
        region:"Ionia",
        region_image: ionia,
        lore:"Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.",
        champions_image: ahri
    },
    {
        id: "caitlyn",
        name: "CAITLYN",
        title:"The sheriff of Piltover",
        champion_quote: "",
        region:"Piltover",
        region_image: ionia,
        lore:"",
        champions_image: caitlyn
    },
    {
        id: "evelynn",
        name: "EVELYNN",
        title:"Agony's embrace",
        champion_quote: "",
        region:"Runeterra",
        region_image: ionia,
        lore:"",
        champions_image: evelynn
    },
    {
        id: "gwen",
        name: "GWEN",
        title:"The hallowed seamstress",
        champion_quote: "",
        region:"Shadow isles",
        region_image: ionia,
        lore:"",
        champions_image: gwen
    },
    {
        id: "jinx",
        name: "JINX",
        title:"The loose cannon",
        champion_quote: "",
        region:"Zaun",
        region_image: ionia,
        lore:"",
        champions_image: jinx
    },
    {
        id: "ksante",
        name: "K'SANTE",
        title:"The pride of Nazumah",
        champion_quote: "",
        region:"Runeterra",
        region_image: ionia,
        lore:"",
        champions_image: ksante
    },
    {
        id: "vex",
        name: "VEX",
        title:"The gloomist",
        champion_quote: "",
        region:"Shadow isles",
        region_image: ionia,
        lore:"",
        champions_image: vex
    },
 ]