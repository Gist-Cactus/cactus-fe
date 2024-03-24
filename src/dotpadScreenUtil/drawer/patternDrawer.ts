import { Dot } from "src/types";

import { PatternFunctionProps } from "../presets/patterns/patterns";

interface PatternDrawerProps {
  start: Dot;
  end: Dot;
  pattern: (props: PatternFunctionProps) => Dot[];
  targetObjectId?: number;
  isHighlighted?: boolean;
}

const patternDrawer = ({
  start: { x: x1, y: y1 },
  end: { x: x2, y: y2 },
  pattern,
  targetObjectId,
  isHighlighted,
}: PatternDrawerProps): Dot[] => {
  const dots: Dot[] = [];

  const xDiff = x2 - x1;
  const yDiff = y2 - y1;

  const xEnd = xDiff % 2 === 0 ? xDiff : xDiff - 1;
  const yEnd = yDiff % 2 === 0 ? yDiff : yDiff - 1;

  for (let i = 0; i <= xEnd; i += 2) {
    for (let j = 0; j <= yEnd; j += 2) {
      const patternDots = pattern({
        x: x1 + i,
        y: y1 + j,
        targetObjectId,
        isHighlighted,
      });
      dots.push(...patternDots);
    }
  }

  return dots;
};

export default patternDrawer;
