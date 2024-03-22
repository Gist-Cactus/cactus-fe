import React from "react";
import {
  ArrowButtonClicked,
  ArrowButtonDefault,
  ButtonClicked,
  ButtonDefault,
} from "src/assets/Assets";
import styled from "styled-components";

const PureButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
`;

interface StyleToggleButtonProps {
  onClick?: () => void;
  activeElement: React.ReactNode;
  defaultElement: React.ReactNode;
}

const StyleToggleButton = ({
  onClick,
  activeElement,
  defaultElement,
}: StyleToggleButtonProps) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
    if (onClick) {
      onClick();
    }
  };
  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <PureButton
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {isActive ? activeElement : defaultElement}
    </PureButton>
  );
};

interface ButtonProps {
  onClick?: () => void;
}

const ArrowButton = ({ onClick }: ButtonProps) => {
  return (
    <StyleToggleButton
      onClick={onClick}
      activeElement={<ArrowButtonClicked />}
      defaultElement={<ArrowButtonDefault />}
    />
  );
};

const RoundedButton = ({ onClick }: ButtonProps) => {
  return (
    <StyleToggleButton
      onClick={onClick}
      activeElement={<ButtonClicked />}
      defaultElement={<ButtonDefault />}
    />
  );
};

interface ButtonSumProps {
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;

  onButton1Click?: () => void;
  onButton2Click?: () => void;
  onButton3Click?: () => void;
  onButton4Click?: () => void;
}

const ButtonSum = ({
  onLeftArrowClick,
  onRightArrowClick,
  onButton1Click,
  onButton2Click,
  onButton3Click,
  onButton4Click,
}: ButtonSumProps) => {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div style={{ transform: "scaleX(-1)" }}>
        <ArrowButton onClick={onLeftArrowClick} />
      </div>

      <RoundedButton onClick={onButton1Click} />
      <RoundedButton onClick={onButton2Click} />
      <RoundedButton onClick={onButton3Click} />
      <RoundedButton onClick={onButton4Click} />

      <ArrowButton onClick={onRightArrowClick} />
    </div>
  );
};

export default ButtonSum;
