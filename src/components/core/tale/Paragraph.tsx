interface taleParagraph{
    tale:string[]
    chapter:string
}

function Paragraph({tale, chapter} : taleParagraph){
  return (
    <div className="lg:w-[50%] border-b border-[#C3A06A]">
      <h3 className="p-4 text-center lg:text-2xl">{chapter.toUpperCase()}</h3>
      {tale.map((paragraph: string, index: number) => {
        return (
          <p key={index} className="p-4 text-sm lg:text-base">
            {paragraph}
          </p>
        );
      })}
    </div>
  )
}

export default Paragraph