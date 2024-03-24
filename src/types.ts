export interface Dot {
  x: number;
  y: number;
  enabled?: boolean;
  targetObjectId?: number;
  isHighlighted?: boolean;
}

export interface Slide {
  id: number;
  src: string;
  title: string;
  order: number;
  element: Element[];
}

export interface Element {
  id: number;
  slideId: number;
  type: BoundingBoxType;
  content: string;
}

export interface ElementContent {
  Name: string;
  Confidence: number;
  Geometry: {
    BoundingBox: {
      Width: number;
      Height: number;
      Left: number;
      Top: number;
    };
  };
}

export interface SlideResponse {
  id: number;
  title: string;
  presentationId: number;
  element: Element[];
}

export interface Point {
  x: number;
  y: number;
}

type BoundingBoxType = "text" | "title" | "image" | "diagram";

export interface BoundingBox {
  id: number;
  start: Point;
  size: Point;
  type: BoundingBoxType;
}
