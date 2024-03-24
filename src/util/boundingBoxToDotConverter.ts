import patternDrawer from "src/dotpadScreenUtil/drawer/patternDrawer";
import marks from "src/dotpadScreenUtil/presets/marks/marks";
import patterns from "src/dotpadScreenUtil/presets/patterns/patterns";
import { BoundingBox, Dot } from "src/types";

export interface Output {
  pattern: Dot[];
  mark: Dot[];
}

const boundingBoxToDotConverter = (
  boundingBox: BoundingBox,
  maxX: number,
  maxY: number,
): Output => {
  const start: Dot = {
    x: Math.floor(boundingBox.start.x * maxX),
    y: Math.floor(boundingBox.start.y * maxY),
  };

  const end: Dot = {
    x: Math.floor((boundingBox.start.x + boundingBox.size.x) * maxX),
    y: Math.floor((boundingBox.start.y + boundingBox.size.y) * maxY),
  };

  const middle: Dot = {
    x: Math.floor((boundingBox.start.x + boundingBox.size.x / 2) * maxX),
    y: Math.floor((boundingBox.start.y + boundingBox.size.y / 2) * maxY),
    targetObjectId: boundingBox.id,
  };

  const pattern =
    boundingBox.type === "text"
      ? patterns.text
      : boundingBox.type === "diagram"
        ? patterns.diagram
        : boundingBox.type === "image"
          ? patterns.images
          : patterns.title;

  const mark =
    boundingBox.type === "text"
      ? marks.text(middle)
      : boundingBox.type === "diagram"
        ? marks.diagram(middle)
        : boundingBox.type === "image"
          ? marks.naturalImage(middle)
          : marks.title(middle);

  return {
    pattern: patternDrawer({
      start,
      end,
      pattern,
      targetObjectId: boundingBox.id,
    }),
    mark,
  };
};

export default boundingBoxToDotConverter;
