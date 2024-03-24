import { BoundingBox, Element, ElementContent } from "src/types";

const boundingBoxConverter = (element: Element, scale: number): BoundingBox => {
  const elementContent: ElementContent = JSON.parse(element.content);

  return {
    id: element.id,
    start: {
      x: elementContent.Geometry.BoundingBox.Left * scale,
      y: elementContent.Geometry.BoundingBox.Top * scale,
    },
    size: {
      x: elementContent.Geometry.BoundingBox.Width * scale,
      y: elementContent.Geometry.BoundingBox.Height * scale,
    },
    type: element.type,
  };
};

export default boundingBoxConverter;
