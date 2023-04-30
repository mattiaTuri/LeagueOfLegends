import Container from "components/shared/Container";
import { useTranslation } from "next-i18next";
import VideoPlayer from "components/feature/homePage/VideoPlayer";

function Homepage() {
  const { t } = useTranslation<string>();

  return (
    <>
      <div className="text-white h-[97vh]">
        <Container>
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="pb-10">
                <span className="text-sm md:tracking-[10px]">
                  - {t("explore_the_universe_of")} -
                </span>
              </div>
              <div className="flex items-center">
                <h1 className="text-5xl md:text-8xl">LEAGUE</h1>
                <span className="text-sm md:tracking-[10px]">OF</span>
              </div>
              <h1 className="text-5xl md:text-8xl">LEGENDS</h1>
            </div>
            <VideoPlayer />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Homepage;
