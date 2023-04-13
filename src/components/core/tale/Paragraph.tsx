interface taleParagraph {
  tale: string[];
  chapter: string;
}

function Paragraph({ tale, chapter }: taleParagraph) {
  return (
    <div className="lg:w-[50%] pt-10">
      <span className="p-4 block text-center lg:text-2xl">
        {chapter.toUpperCase()}
      </span>
      {tale.map((paragraph: string, index: number) => {
        return (
          <p key={index} className="p-4 text-sm lg:text-base">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

export default Paragraph;
