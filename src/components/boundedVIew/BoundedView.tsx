import { useSetAtom } from "jotai";
import colors from "src/colors";
import { easeOutCubic } from "src/defaults";
import { hoverElementIdAtom } from "src/store";
import { BoundingBox } from "src/types";
import styled, { css } from "styled-components";

interface BoundedViewProps {
  src: string;
  isSmall: boolean;
  isLayerView: boolean;

  boundingBoxes: BoundingBox[];
}

const boundingBoxTypes = {
  text: "#FF0000",
  title: "#00b400",
  image: "#0000FF",
  diagram: "#9c9c00",
};

const BoundingBoxDrawer = ({
  boundingBox,
  onMouseEnter,
  onMouseLeave,
}: {
  boundingBox: BoundingBox;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",

        left: `${boundingBox.start.x}%`,
        top: `${boundingBox.start.y}%`,
        width: `${boundingBox.size.x}%`,
        height: `${boundingBox.size.y}%`,

        outline: `4px solid ${boundingBoxTypes[boundingBox.type]}`,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          backgroundColor: boundingBoxTypes[boundingBox.type],
          color: colors.common.white,
          fontSize: "12px",
          fontWeight: 600,
          width: "min-content",
        }}
      >
        {boundingBox.type}
      </div>
    </div>
  );
};

const BoundedView = ({
  src,
  isSmall,
  isLayerView,

  boundingBoxes,
}: BoundedViewProps) => {
  const setHoverElementId = useSetAtom(hoverElementIdAtom);

  return (
    <BoundedViewWrapper $isSmall={isSmall} $isLayerView={isLayerView}>
      <img src={src} style={{ width: "100%" }} />

      {boundingBoxes.map((boundingBox, index) => (
        <BoundingBoxDrawer
          key={index}
          boundingBox={boundingBox}
          onMouseEnter={() => {
            setHoverElementId(boundingBox.id);
            console.log(boundingBox.id);
          }}
          onMouseLeave={() => {
            setHoverElementId(null);
          }}
        />
      ))}
    </BoundedViewWrapper>
  );
};

const BoundedViewWrapper = styled.div<{
  $isLayerView: boolean;
  $isSmall: boolean;
}>`
  max-width: ${(props) => (props.$isSmall ? "450px" : "600px")};

  ${(props) =>
    props.$isLayerView &&
    css`
      transform: rotate3d(0, -1, 0, 50deg);
      margin-right: -300px;
      opacity: 0.5;
    `}

  transition: 
  transform ${easeOutCubic} 0.5s, 
  max-width ${easeOutCubic} 0.5s, 
  margin-right ${easeOutCubic} 0.5s,
  opacity 0.5s;

  position: relative;

  z-index: 3;
`;

export default BoundedView;
