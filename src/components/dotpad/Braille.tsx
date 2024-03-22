import brailleDict from "src/brailleDict";

import DotpadScreen from "./DotpadScreen";

interface BrailleProps {
  brailleChar: keyof typeof brailleDict;
}

const Braille = ({ brailleChar }: BrailleProps) => {
  const BRAILE_MAX_X = 2;
  const BRAILE_MAX_Y = 3;

  const brailleCharDots = brailleDict[brailleChar];

  return (
    <>
      <DotpadScreen
        maxX={BRAILE_MAX_X}
        maxY={BRAILE_MAX_Y}
        dots={brailleCharDots}
      />
    </>
  );
};

export default Braille;
