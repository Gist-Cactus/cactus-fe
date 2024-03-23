interface ViewScaleWrapperProps {
  children: React.ReactNode;
  isSmall: boolean;
  scale: number;
}

const ViewScaleWrapper = ({
  children,
  isSmall,
  scale,
}: ViewScaleWrapperProps) => {
  return (
    <div style={{ transform: isSmall ? `scale(${scale})` : undefined }}>
      {children}
    </div>
  );
};

export default ViewScaleWrapper;
