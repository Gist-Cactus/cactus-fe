import { Dot } from "src/types";

const ANCHOR_POINT: Dot = { x: 0, y: 0 };

export interface MarkFunctionProps {
  x: number;
  y: number;
}

const markOutlineFunction = ({ x, y }: MarkFunctionProps): Dot[] => {
  return [
    { x: ANCHOR_POINT.x + x + 0, y: ANCHOR_POINT.y + y + 0, enabled: false },
    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 0, enabled: false },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 0, enabled: false },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 0, enabled: false },
    { x: ANCHOR_POINT.x + x + 4, y: ANCHOR_POINT.y + y + 0, enabled: false },

    { x: ANCHOR_POINT.x + x + 0, y: ANCHOR_POINT.y + y + 1, enabled: false },
    { x: ANCHOR_POINT.x + x + 4, y: ANCHOR_POINT.y + y + 1, enabled: false },

    { x: ANCHOR_POINT.x + x + 0, y: ANCHOR_POINT.y + y + 2, enabled: false },
    { x: ANCHOR_POINT.x + x + 4, y: ANCHOR_POINT.y + y + 2, enabled: false },

    { x: ANCHOR_POINT.x + x + 0, y: ANCHOR_POINT.y + y + 3, enabled: false },
    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 3, enabled: false },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 3, enabled: false },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 3, enabled: false },
    { x: ANCHOR_POINT.x + x + 4, y: ANCHOR_POINT.y + y + 3, enabled: false },
  ];
};

const marks = {
  text: ({ x, y }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 1 },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 1 },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 1 },

    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 2, enabled: false },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 2 },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 2, enabled: false },
  ],

  title: ({ x, y }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 1 },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 1, enabled: false },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 1 },

    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 2 },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 2 },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 2 },
  ],

  naturalImage: ({ x, y }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 1 },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 1 },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 1 },

    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 2 },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 2, enabled: false },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 2 },
  ],

  diagram: ({ x, y }: MarkFunctionProps): Dot[] => [
    ...markOutlineFunction({ x, y }),
    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 1 },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 1 },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 1, enabled: false },

    { x: ANCHOR_POINT.x + x + 1, y: ANCHOR_POINT.y + y + 2 },
    { x: ANCHOR_POINT.x + x + 2, y: ANCHOR_POINT.y + y + 2 },
    { x: ANCHOR_POINT.x + x + 3, y: ANCHOR_POINT.y + y + 2 },
  ],
};

export default marks;
