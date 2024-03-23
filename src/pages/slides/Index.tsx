import colors from "src/colors";
import Dotpad from "src/components/dotpad/Dotpad";
import styled from "styled-components";

const SlidesPage = () => {
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
        <OverviewWrapper></OverviewWrapper>

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
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${colors.common.white};
`;

const SlideViewWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SlidesPage;
