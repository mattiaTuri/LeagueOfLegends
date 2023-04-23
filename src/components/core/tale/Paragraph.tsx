import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "react-i18next";

interface taleParagraph {
  tale: string;
  chapter: string;
}

function Paragraph({ tale, chapter }: taleParagraph) {
  const { t } = useTranslation();
  console.log(tale);
  return (
    <div className="lg:w-[50%] p-10 text-white">
      <span className="p-4 block text-center lg:text-2xl">
        {chapter.toUpperCase()}
      </span>
      <Trans
        i18nKey={tale}
        t={t}
        components={[<br />, <h1></h1>]}
        values={{ test: "Disty" }}
      />

      {/* {tale.map((paragraph: string, index: number) => {
        return (
          <p key={index} className="p-4 text-sm lg:text-base">
            {paragraph}
          </p>
        );
      })} */}
    </div>
  );
}

export default Paragraph;
