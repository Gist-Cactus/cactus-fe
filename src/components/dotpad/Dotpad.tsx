import { useState } from "react";
import cactusArt from "src/assets/cactusArt";
import patternDrawer from "src/dotpadScreenUtil/drawer/patternDrawer";
import patterns from "src/dotpadScreenUtil/presets/patterns/patterns";
import brailleConverter from "src/util/brailleConverter";

import BrailleSencenceScreen from "./BrailleSentenceScreen";
import ButtonSum from "./ButtonSum";
import DotpadScreen from "./DotpadScreen";

const Dotpad = () => {
  // screen-related
  const SCREEN_MAX_X = 64;
  const SCREEN_MAX_Y = 48;

  const tempDots1 = cactusArt;
  const tempDots2 = patternDrawer({
    start: { x: 10, y: 10 },
    end: { x: 20, y: 20 },
    pattern: patterns.images,
  });

  const SLIDE_SENTENCE_GAP = "20px";

  // sentence-related
  const BRAILLE_MAX_CHARACTERS = 27;
  const tempSentence = "Team Cactus";
  const tempBrailleSentence = brailleConverter(tempSentence);

  const [page, setPage] = useState<number>(0);
  const goNextPage = () => {
    console.log("go next page");
    setPage((page) => {
      if ((page + 1) * BRAILLE_MAX_CHARACTERS >= braileSentence.length)
        return page;
      setPartialTempBraileSentence(paginationBraille(braileSentence, page + 1));

      return page + 1;
    });
  };
  const goPrevPage = () => {
    if (page <= 0) return;
    setPage((page) => {
      setPartialTempBraileSentence(paginationBraille(braileSentence, page - 1));
      return page - 1;
    });
  };

  const paginationBraille = (sentence: string, page: number) => {
    const start = page * BRAILLE_MAX_CHARACTERS;
    const end = start + BRAILLE_MAX_CHARACTERS;
    return sentence.slice(start, end);
  };

  const [braileSentence] = useState<string>(tempBrailleSentence);

  const [partialBraileSentence, setPartialTempBraileSentence] =
    useState<string>(paginationBraille(tempBrailleSentence, 0));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: SLIDE_SENTENCE_GAP,
      }}
    >
      <DotpadScreen maxX={SCREEN_MAX_X} maxY={SCREEN_MAX_Y} dots={tempDots1} />

      <ButtonSum onLeftArrowClick={goPrevPage} onRightArrowClick={goNextPage} />

      <BrailleSencenceScreen
        maxCharacters={BRAILLE_MAX_CHARACTERS}
        sentence={partialBraileSentence}
      />
    </div>
  );
};

export default Dotpad;
