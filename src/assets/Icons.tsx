import colors from "src/colors";

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

const FastArrowRight = ({
  size = "24px",
  fill = colors.common.white,
  onClick,
  style,
}: IconProps) => {
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

const CheckboxChecked = ({
  size = "24px",
  fill = colors.common.white,
  onClick,
  style,
}: IconProps) => {
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
        d="M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M6.8999 13L9.9999 16.1L17.7499 8.35"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CheckboxUnchecked = ({
  size = "24px",
  fill = colors.common.white,
  onClick,
  style,
}: IconProps) => {
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
        d="M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3Z"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  );
};

const Perspective = ({
  size = "24px",
  fill = colors.common.white,
  onClick,
  style,
}: IconProps) => {
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
      <g clipPath="url(#clip0_599_42)">
        <path
          d="M21 23L3 19.8571L3 4.14286L21 0.999997L21 23Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 22L16.5 2"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21L12 3"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 20L7.5 4"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12L21 12"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 16L20.5 17.5"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 8L20.5 6.5"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_599_42">
          <rect
            width={size}
            height={size}
            fill={fill}
            transform="translate(0 24) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

Icons.FastArrowRight = FastArrowRight;

Icons.CheckboxChecked = CheckboxChecked;
Icons.CheckboxUnchecked = CheckboxUnchecked;

Icons.Perspective = Perspective;

export default Icons;
