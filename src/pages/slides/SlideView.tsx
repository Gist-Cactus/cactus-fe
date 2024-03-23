interface SlideViewProps {
  src: string;
  isSmall: boolean;
}

const SlideView = ({ src, isSmall }: SlideViewProps) => {
  return (
    <div style={{ maxWidth: isSmall ? "500px" : "600px" }}>
      <img src={src} style={{ width: "100%" }} />
    </div>
  );
};

export default SlideView;
