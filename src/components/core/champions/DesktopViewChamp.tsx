import Container from "@/components/shared/Container";
import ImageComponent from "@/components/shared/ImageContainer";

function DesktopViewChamp({ champions, windowWidth }: any) {
  return (
    <Container>
      <div className="p-8 flex flex-wrap w-full">
        {champions.map((champion: any, index: number) => {
          return (
            <ImageComponent
              key={index}
              href={`/champions/${champion.id}`}
              img={champion?.champion_img}
              name={champion?.name}
              imgPosition={champion.bgPosition}
              width="20%"
              desktop_width="20%"
              windowWidth={windowWidth}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default DesktopViewChamp;
