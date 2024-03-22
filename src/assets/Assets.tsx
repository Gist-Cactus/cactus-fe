import colors from "src/colors";

const buttonFill = colors.button.fill;
const buttonStroke = colors.button.stroke;

export const ArrowButtonClicked = () => {
  return (
    <svg
      width="65"
      height="44"
      viewBox="0 0 65 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.237 27.298L22.4218 37.5359C20.1434 38.3454 17.75 36.6558 17.75 34.2378L17.75 13.7622C17.75 11.3442 20.1434 9.65463 22.4218 10.4641L51.237 20.702C54.3413 21.8049 54.3413 26.1951 51.237 27.298Z"
        fill={buttonFill}
        stroke={buttonStroke}
        strokeWidth="3"
      />
    </svg>
  );
};

export const ArrowButtonDefault = () => {
  return (
    <svg
      width="65"
      height="44"
      viewBox="0 0 65 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.7392 19.2885C56.1739 20.8642 56.1739 27.1358 51.7392 28.7115L22.9239 38.9493C19.6691 40.1057 16.25 37.692 16.25 34.2378L16.25 13.7622C16.25 10.308 19.6691 7.89427 22.9239 9.05069L51.7392 19.2885Z"
        fill={buttonStroke}
      />
      <rect x="50.05" y="19" width="5" height="6" rx="1" fill={buttonStroke} />
      <path
        d="M51.237 23.298L22.4218 33.5359C20.1434 34.3454 17.75 32.6558 17.75 30.2378L17.75 9.76216C17.75 7.34423 20.1434 5.65463 22.4218 6.46413L51.237 16.702C54.3413 17.8049 54.3413 22.1951 51.237 23.298Z"
        fill={buttonFill}
        stroke={buttonStroke}
        strokeWidth="3"
      />
    </svg>
  );
};

export const ButtonClicked = () => {
  return (
    <svg
      width="50"
      height="35"
      viewBox="0 0 50 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="6.5"
        width="47"
        height="27"
        rx="13.5"
        fill={buttonFill}
        stroke={buttonStroke}
        strokeWidth="3"
      />
    </svg>
  );
};

export const ButtonDefault = () => {
  return (
    <svg
      width="50"
      height="36"
      viewBox="0 0 50 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="6" width="50" height="30" rx="15" fill={buttonStroke} />
      <rect x="45" y="15" width="5" height="7" rx="1" fill={buttonStroke} />
      <rect y="15" width="5" height="7" rx="1" fill={buttonStroke} />
      <rect
        x="1.5"
        y="1.5"
        width="47"
        height="27"
        rx="13.5"
        fill={buttonFill}
        stroke={buttonStroke}
        strokeWidth="3"
      />
    </svg>
  );
};
