import { DotRendererProps } from "src/dotpadScreenUtil/drawer/dotRenderer";
import { Dot } from "src/types";

import { Output } from "./boundingBoxToDotConverter";

function convertToDotRendererProps(outputs: Output[]): DotRendererProps {
  const patterns: Dot[][] = [];
  const marks: Dot[][] = [];

  for (const output of outputs) {
    patterns.push(output.pattern);
    marks.push(output.mark);
  }

  return {
    patterns,
    marks,
  };
}

export default convertToDotRendererProps;
