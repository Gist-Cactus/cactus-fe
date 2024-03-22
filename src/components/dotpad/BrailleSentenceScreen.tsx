import brailleDict from "src/brailleDict";

import Braille from "./Braille";

interface BrailleSencenceScreenProps {
  maxCharacters: number;
  sentence: string;
}

const BrailleSencenceScreen = ({
  maxCharacters,
  sentence,
}: BrailleSencenceScreenProps) => {
  const CHAR_GAP = "7px";

  const xArray = Array.from({ length: maxCharacters }, (_, i) => i);

  return (
    <div style={{ display: "flex", gap: CHAR_GAP }}>
      {xArray.map((_, x) => {
        const brailleChar = (
          sentence.length > x ? sentence[x] : " "
        ) as keyof typeof brailleDict;

        return <Braille key={x} brailleChar={brailleChar} />;
      })}
    </div>
  );
};

export default BrailleSencenceScreen;
