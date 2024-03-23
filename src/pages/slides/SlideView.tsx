import { easeOutCubic } from "src/defaults";
import styled, { css } from "styled-components";

interface SlideViewProps {
  src: string;
  isSmall: boolean;
  isLayerView: boolean;
}

const SlideView = ({ src, isSmall, isLayerView }: SlideViewProps) => {
  return (
    <SlideViewWrapper $isSmall={isSmall} $isLayerView={isLayerView}>
      <img src={src} style={{ width: "100%" }} />
    </SlideViewWrapper>
  );
};

const SlideViewWrapper = styled.div<{
  $isLayerView: boolean;
  $isSmall: boolean;
}>`
  max-width: ${(props) => (props.$isSmall ? "450px" : "600px")};

  ${(props) =>
    props.$isLayerView &&
    css`
      transform: rotate3d(0, -1, 0, 50deg);
      margin-right: -300px;
      opacity: 0.7;
    `}

  transition: 
  transform ${easeOutCubic} 0.5s, 
  max-width ${easeOutCubic} 0.5s, 
  margin-right ${easeOutCubic} 0.5s,
  opacity 0.5s;

  z-index: 4;
`;

export default SlideView;
