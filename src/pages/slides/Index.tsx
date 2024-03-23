import { useState } from "react";
import colors from "src/colors";
import Dotpad from "src/components/dotpad/Dotpad";
import styled from "styled-components";

import SingleOverview from "./SingleOverview";

const SlidesPage = () => {
  const tempImageSequence = [
    { id: 0, src: "https://picsum.photos/id/1/800/600" },
    { id: 1, src: "https://picsum.photos/id/2/800/600" },
    { id: 2, src: "https://picsum.photos/id/3/800/600" },
    { id: 3, src: "https://picsum.photos/id/4/800/600" },
    { id: 4, src: "https://picsum.photos/id/5/800/600" },
    { id: 5, src: "https://picsum.photos/id/6/800/600" },
    { id: 6, src: "https://picsum.photos/id/7/800/600" },
    { id: 7, src: "https://picsum.photos/id/8/800/600" },
  ];

  const imageSequence = tempImageSequence;

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OverviewWrapper>
          <OverviewTitleWrapper>
            <h1 style={{ fontSize: "26px", fontWeight: "600" }}>
              Presentation Title for Blind People
            </h1>

            <p style={{ fontSize: "14px" }}>SESSION</p>
          </OverviewTitleWrapper>
          {imageSequence.map((item) => (
            <SingleOverview key={item.id} id={item.id} src={item.src} />
          ))}
        </OverviewWrapper>

        <SlideViewWrapper>
          <Dotpad />
        </SlideViewWrapper>
      </div>
    </>
  );
};

const OverviewWrapper = styled.div`
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

const SlideViewWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SlidesPage;
