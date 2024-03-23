import { useEffect, useState } from "react";
import brailleDict from "src/brailleDict";
import colors from "src/colors";
import { Dot } from "src/types";

import DotpadScreen from "../dotpad/DotpadScreen";

const LoadingBrailleSequence: Dot[][] = [
  brailleDict["⠟"],
  brailleDict["⠯"],
  brailleDict["⠷"],
  brailleDict["⠾"],
  brailleDict["⠽"],
  brailleDict["⠻"],
];

const Loading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % LoadingBrailleSequence.length,
      );
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        padding: "5px",
        borderRadius: "5px",
        backgroundColor: colors.common.background,
      }}
    >
      <DotpadScreen
        maxX={2}
        maxY={3}
        dots={LoadingBrailleSequence[currentIndex]}
      />
    </div>
  );
};

export default Loading;
