import { useState } from "react";
import Icons from "src/assets/Icons";
import Dotpad from "src/components/dotpad/Dotpad";
import PureButton from "src/components/PureButton";
import { easeOutCubic } from "src/defaults";
import { Slide } from "src/types";
import styled from "styled-components";

import Overview from "./Overview";
import SlideView from "./SlideView";
import ViewScaleWrapper from "./ViewScaleWrapper";
import ViewSelector from "./ViewSelector";

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

  const imageSequence: Slide[] = tempImageSequence;

  const [isOverviewOpen, setIsOverviewOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isSlideView, setIsSlideView] = useState(true);
  const [isBoundedView, setIsBoundedView] = useState(false);
  const [isDotpadView, setIsDotpadView] = useState(false);
  const [isLayerView, setIsLayerView] = useState(false);

  const viewObject = [
    {
      name: "Slide",
      isSelected: isSlideView,
      onClick: () => {
        setIsSlideView((prev) => !prev);
      },
    },
    {
      name: "Bounded",
      isSelected: isBoundedView,
      onClick: () => {
        setIsBoundedView((prev) => !prev);
      },
    },
    {
      name: "Dotpad",
      isSelected: isDotpadView,
      onClick: () => {
        setIsDotpadView((prev) => !prev);
      },
    },
  ];

  return (
    <>
      <EntireWrapper>
        <ToggleButton
          $isOverviewOpen={isOverviewOpen}
          onClick={() => {
            setIsOverviewOpen((prev) => !prev);
          }}
        >
          <ToggleOverviewIconWrapper $isOverviewOpen={isOverviewOpen}>
            <Icons.FastArrowRight />
          </ToggleOverviewIconWrapper>
        </ToggleButton>

        <Overview
          title="Presentation Title for Blind People"
          sessionId="SESSION_KEY"
          slides={imageSequence}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          isOverviewOpen={isOverviewOpen}
        />
        <SlideViewsWrapper>
          <ViewsWrapper $isLayerView={isLayerView}>
            {isSlideView && (
              <SlideView
                src={
                  imageSequence.find((item) => item.id === currentSlide)?.src ??
                  ""
                }
                isSmall={!(isSlideView && !isBoundedView && !isDotpadView)}
                isLayerView={isLayerView}
              />
            )}
            {isDotpadView && (
              <ViewScaleWrapper
                isSmall={!(!isSlideView && !isBoundedView && isDotpadView)}
                scale={0.8}
              >
                <Dotpad />
              </ViewScaleWrapper>
            )}
          </ViewsWrapper>

          <ViewSelector
            view={viewObject}
            isLayerView={isLayerView}
            onLayerViewClick={() => {
              setIsLayerView((prev) => !prev);
            }}
          />
        </SlideViewsWrapper>
      </EntireWrapper>
    </>
  );
};

const EntireWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleButton = styled(PureButton)<{ $isOverviewOpen: boolean }>`
  position: absolute;
  top: 0;
  left: ${(props) => (props.$isOverviewOpen ? "300px" : "0")};
  padding: 10px;

  transition: left ${easeOutCubic} 0.5s;
  z-index: 1;
`;

const ToggleOverviewIconWrapper = styled.div<{ $isOverviewOpen: boolean }>`
  transform: rotate(${(props) => (props.$isOverviewOpen ? "-180deg" : "0")});
  transition: transform ${easeOutCubic} 0.5s;
`;

const SlideViewsWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const ViewsWrapper = styled.div<{ $isLayerView: boolean }>`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  perspective: 1000px;
`;

export default SlidesPage;
