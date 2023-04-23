import { motion } from "framer-motion";
import Container from "./Container";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { useTranslation } from "next-i18next";
import Paragraph from "../core/tale/Paragraph";

interface StoryPageProps {
  id: string;
  name: string;
  title: string;
  story: string;
}

function StoryPage({ id, name, title, story }: StoryPageProps) {
  const [scroolBarProgress, setScrollBarProgress] = useState<number>(0);
  const [scrollYContainer, setScrollYContainer] = useState<number>(0);
  const [taleHeigth, setTaleHeigth] = useState<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", taleScrollProgress);
    return () => {
      window.removeEventListener("scroll", taleScrollProgress);
    };
  }, [scrollYContainer, taleHeigth]);

  const taleScrollProgress = () => {
    if (taleHeigth == 0) {
      const tale = document.getElementById("tale")!.offsetHeight;
      const talePreview = document.getElementById("taleView")!.offsetHeight;
      const newTaleHeight = tale - talePreview;

      setTaleHeigth(newTaleHeight);
    }
    const progressContainer = document.getElementById("progressContainer")!;
    const talePreview = document.getElementById("taleView")!;
    const actualScrollView = window.scrollY + 80;
    if (actualScrollView > talePreview.offsetHeight) {
      const newScrollY = actualScrollView - talePreview.offsetHeight;
      progressContainer.style.transform = `translateY(${newScrollY}px)`;
      setScrollYContainer(newScrollY);
      const progressPercentage = getScrollPercentageProgress(newScrollY);
      scrollProgress(progressPercentage);
    } else {
      progressContainer.style.transform = `translateY(${0}px)`;
      setScrollBarProgress(0);
    }
  };

  const getScrollPercentageProgress = (newScrollY: number) => {
    /*
        Calcolare la percentuale:
        Es: 500: 100 = 80 : x --> dove 500 è il totale
        x = (80 x 100) / 500  = 16 %   
        */
    return (newScrollY * 100) / taleHeigth;
  };

  const scrollProgress = (progressPercentage: number) => {
    progressPercentage >= 100
      ? setScrollBarProgress(100)
      : setScrollBarProgress(progressPercentage);
  };

  return (
    <Container>
      <div id="tale" className="relative pb-12 w-full">
        <div
          id="progressContainer"
          className="hidden lg:block absolute left-0 top-10 px-8"
        >
          <div className="flex flex-col w-[200px]">
            <div className="border border-[#C3A06A] p-2 flex max-w-max">
              <span className="text-base">{name.toUpperCase()}</span>
            </div>
            <span className="py-4">{title}</span>
            <div className="bg-[#111] ">
              <motion.div
                id="progressBar"
                className="sticky bg-[#C3A06A] h-[5px] origin-left w-0"
                style={{ width: `${scroolBarProgress}%` }}
              ></motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Paragraph tale={story} chapter={t("chapter_one")} />

          {/* <Paragraph tale={tale_chapter_one} chapter={t("chapter_one")} />
          {tale_chapter_two.length != 0 && (
            <Paragraph tale={tale_chapter_two} chapter={t("chapter_two")} />
          )}
          {tale_chapter_three.length != 0 && (
            <Paragraph tale={tale_chapter_three} chapter={t("chapter_three")} />
          )}
          {tale_chapter_four.length != 0 && (
            <Paragraph tale={tale_chapter_four} chapter={t("chapter_four")} />
          )}
          {tale_chapter_five.length != 0 && (
            <Paragraph tale={tale_chapter_five} chapter={t("chapter_five")} />
          )}
          {tale_chapter_six.length != 0 && (
            <Paragraph tale={tale_chapter_six} chapter={t("chapter_six")} />
          )}
          {tale_chapter_seven.length != 0 && (
            <Paragraph tale={tale_chapter_seven} chapter={t("chapter_seven")} />
          )}
          {tale_chapter_eight.length != 0 && (
            <Paragraph tale={tale_chapter_eight} chapter={t("chapter_eight")} />
          )} */}
          <div className="pt-8">
            <CustomButton
              href={`/champions/${id}`}
              text={`${t("back_to_champion")} ${name.toUpperCase()}`}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default StoryPage;
