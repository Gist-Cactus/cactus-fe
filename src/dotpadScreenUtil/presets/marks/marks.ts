import { Dot } from "src/types";

const ANCHOR_POINT: Dot = { x: -2, y: -1 };

export interface MarkFunctionProps {
  x: number;
  y: number;
  isHighlighted?: boolean;
  targetObjectId?: number;
}

const markOutlineFunction = ({
  x,
  y,
  isHighlighted,
  targetObjectId,
}: MarkFunctionProps): Dot[] => {
  return [
    {
      x: ANCHOR_POINT.x + x + 0,
      y: ANCHOR_POINT.y + y + 0,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 0,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 0,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 0,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 4,
      y: ANCHOR_POINT.y + y + 0,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },

    {
      x: ANCHOR_POINT.x + x + 0,
      y: ANCHOR_POINT.y + y + 1,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 4,
      y: ANCHOR_POINT.y + y + 1,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },

    {
      x: ANCHOR_POINT.x + x + 0,
      y: ANCHOR_POINT.y + y + 2,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 4,
      y: ANCHOR_POINT.y + y + 2,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },

    {
      x: ANCHOR_POINT.x + x + 0,
      y: ANCHOR_POINT.y + y + 3,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 3,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 3,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 3,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 4,
      y: ANCHOR_POINT.y + y + 3,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
  ];
};

const marks = {
  text: ({ x, y, isHighlighted, targetObjectId }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },

    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 2,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 2,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
  ],

  title: ({
    x,
    y,
    isHighlighted,
    targetObjectId,
  }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 1,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },

    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
  ],

  naturalImage: ({
    x,
    y,
    isHighlighted,
    targetObjectId,
  }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },

    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 2,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
  ],

  diagram: ({
    x,
    y,
    isHighlighted,
    targetObjectId,
  }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 1,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 1,
      enabled: false,
      isHighlighted,
      targetObjectId,
    },

    {
      x: ANCHOR_POINT.x + x + 1,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 2,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
    {
      x: ANCHOR_POINT.x + x + 3,
      y: ANCHOR_POINT.y + y + 2,
      isHighlighted,
      targetObjectId,
    },
  ],
};

export default marks;
