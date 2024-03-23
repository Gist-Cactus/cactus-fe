import { Dot } from "src/types";

interface DotRendererProps {
  patterns: Dot[][];
  marks: Dot[][];
}

const dotRenderer = ({ patterns, marks }: DotRendererProps): Dot[] => {
  const dotMap = new Map<string, Dot>();

  // marks 배열을 역순으로 순회하면서 dotMap에 점 정보를 저장
  for (let i = marks.length - 1; i >= 0; i--) {
    const mark = marks[i];
    for (const dot of mark) {
      const key = `${dot.x},${dot.y}`;
      if (
        !dotMap.has(key) ||
        (dotMap.get(key)?.enabled !== false && dot.enabled !== false)
      ) {
        dotMap.set(key, dot);
      }
    }
  }

  // patterns 배열을 역순으로 순회하면서 dotMap에 점 정보를 저장
  for (let i = patterns.length - 1; i >= 0; i--) {
    const pattern = patterns[i];
    for (const dot of pattern) {
      const key = `${dot.x},${dot.y}`;
      if (
        !dotMap.has(key) ||
        (dotMap.get(key)?.enabled !== false && dot.enabled !== false)
      ) {
        dotMap.set(key, dot);
      }
    }
  }

  // dotMap에서 점 정보를 추출하여 배열로 반환
  return Array.from(dotMap.values());
};

export default dotRenderer;
