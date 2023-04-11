interface taleParagraph{
    tale:string[]
    chapter:string
}

function Paragraph({tale, chapter} : taleParagraph){
  return (
    <div className="lg:w-[50%]">
      <h3 className="p-4">{chapter}</h3>
      {tale.map((paragraph: string, index: number) => {
        return (
          <p key={index} className="p-4">
            {paragraph}
          </p>
        );
      })}
    </div>
  )
}

export default Paragraph