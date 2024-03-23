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
  max-width: ${(props) => (props.$isSmall ? "500px" : "600px")};

  ${(props) =>
    props.$isLayerView &&
    css`
      transform: rotate3d(0, -1, 0, 50deg);
    `}

  transition: transform ${easeOutCubic} 0.5s;
`;

export default SlideView;
