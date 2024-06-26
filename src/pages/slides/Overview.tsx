import colors from "src/colors";
import { easeOutCubic } from "src/defaults";
import { Slide } from "src/types";
import styled from "styled-components";

import SingleOverview from "./SingleOverview";

interface OverviewProps {
  title: string;
  sessionId: string;
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;

  isOverviewOpen: boolean;
}

const Overview = ({
  title,
  sessionId,
  slides,
  currentSlide,
  setCurrentSlide,
  isOverviewOpen,
}: OverviewProps) => {
  return (
    <OverviewWrapper $isOverviewOpen={isOverviewOpen}>
      <OverviewTitleWrapper>
        <h1
          style={{ fontSize: "26px", fontWeight: "600", lineBreak: "anywhere" }}
        >
          {title}
        </h1>

        <p style={{ fontSize: "12px" }}>
          SESSION{" "}
          <span style={{ textDecoration: "underline", color: "#707070" }}>
            {sessionId}
          </span>
        </p>
      </OverviewTitleWrapper>
      {slides.map((item) => (
        <SingleOverview
          key={item.id}
          id={item.order}
          src={item.src}
          isSelected={currentSlide === item.order}
          onClick={() => {
            setCurrentSlide(item.order);
          }}
        />
      ))}
    </OverviewWrapper>
  );
};

const OverviewWrapper = styled.div<{ $isOverviewOpen: boolean }>`
  position: relative;

  width: 300px;
  height: 100%;

  box-sizing: border-box;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;

  border-right: 2px solid ${colors.common.white};

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  margin-left: ${(props) => (props.$isOverviewOpen ? "0" : "-300px")};

  transition: margin-left ${easeOutCubic} 0.5s;
`;

const OverviewTitleWrapper = styled.div`
  width: 100%;
  background-color: ${colors.common.background};

  box-sizing: border-box;
  padding: 12px 30px 30px 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-bottom: 2px solid ${colors.common.white};

  margin-bottom: 40px;
`;

export default Overview;
