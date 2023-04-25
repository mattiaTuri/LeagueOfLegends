import Container from "./Container";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { Trans, useTranslation } from "next-i18next";

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
      //progressContainer.style.transform = `translateY(${newScrollY}px)`; //Dopo aver cambiato i paragrafi delle storie con il component Trans scatta quando la pagina scrolla
      setScrollYContainer(newScrollY);
      const progressPercentage = getScrollPercentageProgress(newScrollY);
      scrollProgress(progressPercentage);
    } else {
      //progressContainer.style.transform = `translateY(${0}px)`;
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
          className="hidden lg:block left-0 sticky top-[100px] px-8" //sticky top-[100px] //absolute top-10
        >
          <div className="flex flex-col w-[200px] absolute top-10">
            <div className="border border-[#C3A06A] p-2 flex max-w-max">
              <span className="text-base">{name.toUpperCase()}</span>
            </div>
            <span className="py-4">{title}</span>
            <div className="bg-[#111] ">
              <div
                id="progressBar"
                className="sticky bg-[#C3A06A] h-[5px] origin-left w-0"
                style={{ width: `${scroolBarProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="lg:w-[50%] p-10">
            <Trans
              i18nKey={story}
              t={t}
              components={[
                <p key="text" className="text-sm lg:text-base p-4"></p>,
                <span
                  key="chapter"
                  className="block text-center lg:text-2xl pt-16"
                ></span>,
              ]}
              values={{
                chapter_one: "CAPITOLO 1",
                chapter_two: "CAPITOLO 2",
                chapter_three: "CAPITOLO 3",
                chapter_four: "CAPITOLO 4",
                chapter_five: "CAPITOLO 5",
                chapter_six: "CAPITOLO 6",
                chapter_seven: "CAPITOLO 7",
                chapter_eight: "CAPITOLO 8",
              }}
            />
          </div>
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
