export interface IconProps {
  size?: React.CSSProperties["width"];
  fill?: React.CSSProperties["fill"];
  onClick?: () => void;
  style?: React.CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Icons = ({ size, fill, onClick, style }: IconProps) => {
  return;
};

const FastArrowRight = ({ size = "24px", fill, onClick, style }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={style}
    >
      <path
        d="M13 6L19 12L13 18"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 6L11 12L5 18"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Icons.FastArrowRight = FastArrowRight;

export default Icons;
