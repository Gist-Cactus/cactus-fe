import { Dot } from "src/types";

export interface PatternFunctionProps {
  x: number;
  y: number;
  targetObjectId?: number;
  isHighlighted?: boolean;
}

const patterns = {
  // 대각선
  images: ({
    x,
    y,
    targetObjectId,
    isHighlighted,
  }: PatternFunctionProps): Dot[] => [
    { x, y, targetObjectId, isHighlighted },
    { x: x + 1, y, enabled: false, targetObjectId, isHighlighted },
    { x, y: y + 1, enabled: false, targetObjectId, isHighlighted },
    { x: x + 1, y: y + 1, targetObjectId, isHighlighted },
  ],

  // 가로
  text: ({
    x,
    y,
    targetObjectId,
    isHighlighted,
  }: PatternFunctionProps): Dot[] => [
    { x, y, targetObjectId, isHighlighted },
    { x: x + 1, y, targetObjectId, isHighlighted },
    { x, y: y + 1, enabled: false, targetObjectId, isHighlighted },
    { x: x + 1, y: y + 1, enabled: false, targetObjectId, isHighlighted },
  ],

  // 세로
  title: ({
    x,
    y,
    targetObjectId,
    isHighlighted,
  }: PatternFunctionProps): Dot[] => [
    { x, y, targetObjectId, isHighlighted },
    { x: x + 1, y, enabled: false, targetObjectId, isHighlighted },
    { x, y: y + 1, targetObjectId, isHighlighted },
    { x: x + 1, y: y + 1, enabled: false, targetObjectId, isHighlighted },
  ],

  // 모두 채우기
  diagram: ({
    x,
    y,
    targetObjectId,
    isHighlighted,
  }: PatternFunctionProps): Dot[] => [
    { x, y, targetObjectId, isHighlighted },
    { x: x + 1, y, targetObjectId, isHighlighted },
    { x, y: y + 1, targetObjectId, isHighlighted },
    { x: x + 1, y: y + 1, targetObjectId, isHighlighted },
  ],
};

export default patterns;
