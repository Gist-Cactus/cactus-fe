import { useState } from "react";
import cactusArt, { PieChart } from "src/assets/cactusArt";
import { MAX_X, MAX_Y } from "src/defaults";
import { Dot } from "src/types";
import brailleConverter from "src/util/brailleConverter";

import BrailleSencenceScreen from "./BrailleSentenceScreen";
import ButtonSum from "./ButtonSum";
import DotpadScreen from "./DotpadScreen";

interface DotpadProps {
  isLayerView: boolean;
  dots: Dot[];
}

const Dotpad = ({ isLayerView, dots }: DotpadProps) => {
  const [isDiagramShown, setIsDiagramShown] = useState<boolean>(false);

  // screen-related
  const SCREEN_MAX_X = MAX_X;
  const SCREEN_MAX_Y = MAX_Y;

  const tempDots1 = cactusArt;

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
      <DotpadScreen
        maxX={SCREEN_MAX_X}
        maxY={SCREEN_MAX_Y}
        dots={isDiagramShown ? PieChart : dots}
        onClick={() => {
          setIsDiagramShown(true);
        }}
      />

      {!isLayerView && (
        <>
          <ButtonSum
            onLeftArrowClick={goPrevPage}
            onRightArrowClick={goNextPage}
            onButton1Click={() => {
              setIsDiagramShown(false);
            }}
          />

          <BrailleSencenceScreen
            maxCharacters={BRAILLE_MAX_CHARACTERS}
            sentence={partialBraileSentence}
          />
        </>
      )}
    </div>
  );
};

export default Dotpad;
