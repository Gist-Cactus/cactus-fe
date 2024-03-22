import colors from "src/colors";

interface SingleDotProps {
  isOn: boolean;
  isHighlighted: boolean;
  onClick?: () => void;
}

const SingleDot = ({ isOn, isHighlighted, onClick }: SingleDotProps) => {
  const SIZE = "4px";

  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        backgroundColor: isOn
          ? isHighlighted
            ? colors.dots.highlighted
            : colors.dots.enabled
          : colors.dots.disabled,
      }}
      onClick={onClick}
    />
  );
};

export default SingleDot;
