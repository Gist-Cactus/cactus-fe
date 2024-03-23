import Icons from "src/assets/Icons";
import colors from "src/colors";
import styled from "styled-components";

interface View {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

interface ViewSelectorProps {
  view: View[];

  isLayerView: boolean;
  onLayerViewClick: () => void;
}

const SelectorItem = ({
  name,
  isSelected,
  onClick,
  icon,
}: View & { icon?: React.ReactNode }) => {
  return (
    <SelectorWrapper onClick={onClick}>
      {icon ? (
        icon
      ) : isSelected ? (
        <Icons.CheckboxChecked />
      ) : (
        <Icons.CheckboxUnchecked />
      )}

      <div style={{ fontSize: "16px", fontWeight: 600 }}>{name}</div>
    </SelectorWrapper>
  );
};

const VLine = styled.div`
  height: 20px;
  width: 1px;
  background-color: #4f4f4f;
  margin: 0 10px;
`;

const ViewSelector = ({
  view,
  isLayerView,
  onLayerViewClick,
}: ViewSelectorProps) => {
  return (
    <ViewSelectorWrapper>
      {view.map((item) => (
        <>
          <SelectorItem key={item.name} {...item} />
          <VLine />
        </>
      ))}
      <SelectorItem
        name="Layers"
        isSelected={isLayerView}
        onClick={onLayerViewClick}
        icon={<Icons.Perspective />}
      />
    </ViewSelectorWrapper>
  );
};

const SelectorWrapper = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 150px;
  padding: 10px 0;
  border-radius: 5px;

  background-color: transparent;
  outline: none;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: "#3D3D3D";
  }

  &:active {
    transform: scale(0.95);
  }

  transition: 0.2s;
`;

const ViewSelectorWrapper = styled.div`
  background-color: ${colors.common.background};
  border-radius: 10px 10px 0 0;

  padding: 10px 10px 10px 20px;

  display: flex;
  align-items: center;
`;

export default ViewSelector;
