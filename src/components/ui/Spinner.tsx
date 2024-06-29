import { CSSProperties } from "react";
import { FadeLoader } from "react-spinners";

const Spninner = () => {
  const loaderStyles: CSSProperties = {
    position: "relative",
    zIndex: 0,
    aspectRatio: "16 / 9",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={loaderStyles}>
      <FadeLoader color="#000000" />
    </div>
  );
};

export default Spninner;
