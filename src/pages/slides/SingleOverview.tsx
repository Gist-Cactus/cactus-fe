import colors from "src/colors";
import styled from "styled-components";

interface SingleOverviewProps {
  src: string;
  id: number;
  onClick?: () => void;
}

const SingleOverview = ({ src, id, onClick }: SingleOverviewProps) => {
  return (
    <SingleOverviewWrapper onClick={onClick}>
      <OverviewImage src={src} />

      <p
        style={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {id + 1}
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
`;

const OverviewImage = styled.img`
  width: 180px;
`;

export default SingleOverview;
