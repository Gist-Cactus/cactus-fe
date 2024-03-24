import { useAtomValue } from "jotai";
import React from "react";
import { hoverElementIdAtom } from "src/store";
import { Dot } from "src/types";

import SingleDot from "./SingleDot";

interface DotpadScreenProps {
  maxX: number;
  maxY: number;
  dots: Dot[];
}

const DotpadScreen = ({ maxX, maxY, dots }: DotpadScreenProps) => {
  const xArray = Array.from({ length: maxX }, (_, i) => i);
  const yArray = Array.from({ length: maxY }, (_, i) => i);

  const GAP = "4px";

  const hoveredElementId = useAtomValue(hoverElementIdAtom);

  return (
    <div style={{ display: "flex", gap: GAP, flexDirection: "column" }}>
      {yArray.map((_, y) => (
        <div key={y} style={{ display: "flex", gap: GAP }}>
          {xArray.map((_, x) => {
            const selectedDot = dots.find((dot) => dot.x === x && dot.y === y);
            if (selectedDot && !(selectedDot.enabled === false)) {
              return (
                <SingleDot
                  key={`${x},${y}`}
                  isOn={true}
                  isHighlighted={
                    (selectedDot.isHighlighted ||
                      selectedDot.targetObjectId === hoveredElementId) ??
                    false
                  }
                  onClick={() => {
                    selectedDot &&
                      console.log(
                        `Clicked on ${x},${y}, targetting ${selectedDot.targetObjectId}`,
                      );
                  }}
                />
              );
            } else {
              return (
                <SingleDot
                  key={`${x},${y}`}
                  isOn={false}
                  isHighlighted={false}
                />
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default DotpadScreen;
