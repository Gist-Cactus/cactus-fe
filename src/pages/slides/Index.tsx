import { useHotkeys } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSlides } from "src/api/slide/slide";
import Icons from "src/assets/Icons";
import BoundedView from "src/components/boundedVIew/BoundedView";
import Dotpad from "src/components/dotpad/Dotpad";
import Loading from "src/components/loading/Loading";
import PureButton from "src/components/PureButton";
import { easeOutCubic, MAX_X, MAX_Y } from "src/defaults";
import dotRenderer from "src/dotpadScreenUtil/drawer/dotRenderer";
import LocalstorageKeys from "src/localstorage";
import Paths from "src/paths";
import { Slide } from "src/types";
import boundingBoxConverter from "src/util/boundingBoxConverter";
import boundingBoxToDotConverter from "src/util/boundingBoxToDotConverter";
import convertToDotRendererProps from "src/util/convertToDotRendererProps";
import styled, { css } from "styled-components";

import Overview from "./Overview";
import SlideView from "./SlideView";
import ViewScaleWrapper from "./ViewScaleWrapper";
import ViewSelector from "./ViewSelector";

const SlidesPage = () => {
  const navigation = useNavigate();
  const IMGAE_BASE_URL =
    "https://cactus-process.s3.ap-northeast-2.amazonaws.com";

  const { data: slidesData } = useQuery({
    queryKey: ["slides"],
    queryFn: () => {
      const presentationId = Number(
        localStorage.getItem(LocalstorageKeys.PRESENTATION_ID),
      );

      if (!presentationId) return;

      return getSlides({ presentationId });
    },
    enabled: localStorage.getItem(LocalstorageKeys.PRESENTATION_ID)
      ? true
      : false,
  });

  useEffect(() => {
    const sessionUuid = localStorage.getItem(LocalstorageKeys.SESSION_UUID);
    const presentationId = localStorage.getItem(
      LocalstorageKeys.PRESENTATION_ID,
    );
    const title = localStorage.getItem(LocalstorageKeys.TITLE);

    if (!sessionUuid || !presentationId || !title) {
      navigation(Paths.HOME);
    }
  }, []);

  const tempImageSequence = [
    {
      id: 0,
      order: 1,
      src: "https://picsum.photos/id/1/800/600",
      title: "a",
      element: [],
    },
    {
      id: 1,
      order: 2,
      src: "https://picsum.photos/id/2/800/600",
      title: "a",
      element: [],
    },
    {
      id: 2,
      order: 3,
      src: "https://picsum.photos/id/3/800/600",
      title: "a",
      element: [],
    },
    {
      id: 3,
      order: 4,
      src: "https://picsum.photos/id/4/800/600",
      title: "a",
      element: [],
    },
    {
      id: 4,
      order: 5,
      src: "https://picsum.photos/id/5/800/600",
      title: "a",
      element: [],
    },
    {
      id: 5,
      order: 6,
      src: "https://picsum.photos/id/6/800/600",
      title: "a",
      element: [],
    },
    {
      id: 6,
      order: 7,
      src: "https://picsum.photos/id/7/800/600",
      title: "a",
      element: [],
    },
    {
      id: 7,
      order: 8,
      src: "https://picsum.photos/id/8/800/600",
      title: "a",
      element: [],
    },
  ];

  const loadedSequence = slidesData?.slides.map((slide, index) => ({
    id: slide.id,
    src: `${IMGAE_BASE_URL}/${slide.title}`,
    title: slide.title,
    order: index + 1,
    element: slide.element,
  }));

  const imageSequence: Slide[] | undefined = loadedSequence;

  const [isOverviewOpen, setIsOverviewOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);

  useHotkeys([
    [
      "arrowRight",
      () => {
        if (!imageSequence) return;
        setCurrentSlide((prev) => {
          if (prev === imageSequence.length) return prev;
          return prev + 1;
        });
      },
    ],
    [
      "arrowLeft",
      () => {
        if (!imageSequence) return;
        setCurrentSlide((prev) => {
          if (prev === 1) return prev;
          return prev - 1;
        });
      },
    ],
  ]);

  const [isSlideView, setIsSlideView] = useState(true);
  const [isBoundedView, setIsBoundedView] = useState(false);
  const [isDotpadView, setIsDotpadView] = useState(false);
  const [isLayerView, setIsLayerView] = useState(false);

  const handleLayerViewClick = () => {
    setIsLayerView((prev) => !prev);
  };

  const handleClearAllClick = () => {
    const answer = confirm("Are you sure you want to clear all?");
    if (!answer) return;

    localStorage.clear();
    navigation(Paths.HOME);
  };

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
        title={localStorage.getItem(LocalstorageKeys.TITLE) ?? ""}
        sessionId={localStorage.getItem(LocalstorageKeys.SESSION_UUID) ?? ""}
        slides={imageSequence ?? []}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        isOverviewOpen={isOverviewOpen}
      />
      <SlideViewsWrapper>
        {slidesData && imageSequence ? (
          <ViewsWrapper $isLayerView={isLayerView}>
            {isSlideView && (
              <SlideView
                src={
                  imageSequence.find((item) => item.order === currentSlide)
                    ?.src ?? ""
                }
                isSmall={!(isSlideView && !isBoundedView && !isDotpadView)}
                isLayerView={isLayerView}
              />
            )}
            {isBoundedView && (
              <BoundedView
                src={
                  imageSequence.find((item) => item.order === currentSlide)
                    ?.src ?? ""
                }
                isSmall={!(!isSlideView && isBoundedView && !isDotpadView)}
                isLayerView={isLayerView}
                boundingBoxes={
                  imageSequence
                    .find((item) => item.order === currentSlide)
                    ?.element.map((item) => {
                      return boundingBoxConverter(item, 100);
                    }) ?? []
                }
              />
            )}
            {isDotpadView && (
              <ViewScaleWrapper
                isSmall={!(!isSlideView && !isBoundedView && isDotpadView)}
                scale={0.8}
                layerScale={0.75}
                isLayerView={isLayerView}
                zIndex={1}
              >
                <Dotpad
                  isLayerView={isLayerView}
                  dots={
                    dotRenderer(
                      convertToDotRendererProps(
                        imageSequence
                          .find((item) => item.order === currentSlide)
                          ?.element.map((item) => {
                            return boundingBoxToDotConverter(
                              boundingBoxConverter(item, 1),
                              MAX_X,
                              MAX_Y,
                            );
                          }) ?? [],
                      ),
                    ) ?? []
                  }
                />
              </ViewScaleWrapper>
            )}
          </ViewsWrapper>
        ) : (
          <Loading />
        )}

        <ViewSelector
          view={viewObject}
          isLayerView={isLayerView}
          onLayerViewClick={handleLayerViewClick}
        />
      </SlideViewsWrapper>

      <ClearAllWrapper>
        <Icons.Xmark onClick={handleClearAllClick} />
      </ClearAllWrapper>
    </EntireWrapper>
  );
};

const EntireWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

  ${(props) =>
    props.$isLayerView &&
    css`
      gap: -100px;
    `}

  perspective: 1000px;
`;

const ClearAllWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`;

export default SlidesPage;
