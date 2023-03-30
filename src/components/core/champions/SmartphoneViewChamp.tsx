import Link from "next/link";
import Image from "next/image";
import { champions } from "../../../data/champions";

function SmarphoneViewChamp() {
  return (
    <div className="w-full pt-8">
      {champions.map((champion, index) => {
        return (
          <Link
            key={index}
            href={`/champions/${champion.id}`}
            className="w-full h-24 bg-[#111] border border-[#ba8964] flex"
          >
            <div className="flex">
              <Image
                className="w-[250px]"
                src={champion.champion_image}
                alt=""
              ></Image>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col justify-center pl-4">
                <span className="text-sm">{champion.name}</span>
                <span className="text-sm text-white">{champion.region}</span>
              </div>
              <div className="pr-4 flex justify-center items-center">
                <span className="text-sm tracking-widest">EXPLORE</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SmarphoneViewChamp;
