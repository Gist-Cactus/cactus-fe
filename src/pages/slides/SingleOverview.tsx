import colors from "src/colors";
import styled, { css } from "styled-components";

interface SingleOverviewProps {
  src: string;
  id: number;
  isSelected: boolean;
  onClick?: () => void;
}

const SingleOverview = ({
  src,
  id,
  isSelected,
  onClick,
}: SingleOverviewProps) => {
  return (
    <SingleOverviewWrapper onClick={onClick}>
      <OverviewImage src={src} $isSelected={isSelected} />

      <p
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: isSelected ? colors.dots.highlighted : undefined,
        }}
      >
        {id}
      </p>
    </SingleOverviewWrapper>
  );
};

const SingleOverviewWrapper = styled.div`
  width: 100%;
  padding: 20px 0;

  display: flex;
  gap: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const OverviewImage = styled.img<{ $isSelected: boolean }>`
  width: 180px;
  ${(props) =>
    props.$isSelected &&
    css`
      outline: 4px solid ${colors.dots.highlighted};
    `}
`;

export default SingleOverview;
