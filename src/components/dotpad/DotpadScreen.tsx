import React from "react";
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

  return (
    <div style={{ display: "flex", gap: GAP, flexDirection: "column" }}>
      {yArray.map((_, y) => (
        <div key={y} style={{ display: "flex", gap: GAP }}>
          {xArray.map((_, x) => {
            const selectedDot = dots.find((dot) => dot.x === x && dot.y === y);
            if (selectedDot) {
              return (
                <SingleDot
                  key={`${x},${y}`}
                  isOn={true}
                  isHighlighted={selectedDot.isHighlighted ?? false}
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
