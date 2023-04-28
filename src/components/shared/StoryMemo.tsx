import { Trans } from "next-i18next";
import { memo } from "react";

const StoryMemo = memo(({ story, t }: any) => {
  return (
    <Trans
      i18nKey={story}
      components={[
        <p key="text" className="text-sm lg:text-base p-4"></p>,
        <span
          key="chapter"
          className="block text-center lg:text-2xl pt-16"
        ></span>,
        <span
          key="chapter"
          className="block text-center lg:text-2xl"
        ></span>,
      ]}
      values={{
        chapter_one: t("chapter_one"),
        chapter_two: t("chapter_two"),
        chapter_three: t("chapter_three"),
        chapter_four: t("chapter_four"),
        chapter_five: t("chapter_five"),
        chapter_six: t("chapter_six"),
        chapter_seven: t("chapter_seven"),
        chapter_eight: t("chapter_eight"),
      }}
    />
  );
});

StoryMemo.displayName = "StoryMemo";

export default StoryMemo;
