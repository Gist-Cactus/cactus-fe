import Dotpad from "src/components/dotpad/Dotpad";

const SlidesPage = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dotpad />
      </div>
    </>
  );
};

export default SlidesPage;
