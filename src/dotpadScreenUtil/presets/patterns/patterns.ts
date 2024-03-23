import { Dot } from "src/types";

export interface PatternFunctionProps {
  x: number;
  y: number;
}

const patterns = {
  // 대각선
  images: ({ x, y }: PatternFunctionProps): Dot[] => [
    { x, y },
    { x: x + 1, y, enabled: false },
    { x, y: y + 1, enabled: false },
    { x: x + 1, y: y + 1 },
  ],

  // 가로
  text: ({ x, y }: PatternFunctionProps): Dot[] => [
    { x, y },
    { x: x + 1, y },
    { x, y: y + 1, enabled: false },
    { x: x + 1, y: y + 1, enabled: false },
  ],

  // 세로
  title: ({ x, y }: PatternFunctionProps): Dot[] => [
    { x, y },
    { x: x + 1, y, enabled: false },
    { x, y: y + 1 },
    { x: x + 1, y: y + 1, enabled: false },
  ],

  // 모두 채우기
  diagram: ({ x, y }: PatternFunctionProps): Dot[] => [
    { x, y },
    { x: x + 1, y },
    { x, y: y + 1 },
    { x: x + 1, y: y + 1 },
  ],
};

export default patterns;
