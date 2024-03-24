import { easeOutCubic } from "src/defaults";
import styled, { css } from "styled-components";

interface ViewScaleWrapperProps {
  children: React.ReactNode;
  isSmall: boolean;
  scale: number;
  layerScale: number;
  isLayerView: boolean;
  zIndex: number;
}

const ViewScaleWrapper = ({
  children,
  isSmall,
  scale,
  layerScale,
  isLayerView,
  zIndex,
}: ViewScaleWrapperProps) => {
  return (
    <ViewScaleWrap
      $isSmall={isSmall}
      $isLayerView={isLayerView}
      $scale={scale}
      $layerScale={layerScale}
      $zIndex={zIndex}
    >
      {children}
    </ViewScaleWrap>
  );
};

const ViewScaleWrap = styled.div<{
  $isSmall: boolean;
  $scale: number;
  $layerScale: number;
  $isLayerView: boolean;
  $zIndex: number;
}>`
  ${(props) =>
    props.$isSmall &&
    css`
      transform: scale(${props.$scale});
    `}

  ${(props) =>
    props.$isLayerView &&
    css`
      transform: scale(${props.$layerScale}) rotate3d(0, -1, 0, 50deg);
      opacity: 1;
    `}

  transition: transform ${easeOutCubic} 0.5s, opacity 0.5s;
  z-index: ${(props) => props.$zIndex};
`;

export default ViewScaleWrapper;
