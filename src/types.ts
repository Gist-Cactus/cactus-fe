export interface Dot {
  x: number;
  y: number;
  enabled?: boolean;
  targetObjectId?: string;
  isHighlighted?: boolean;
}

export interface Slide {
  id: number;
  src: string;
}
