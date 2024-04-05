import React from "react";
import { FlexBasic, Singles } from "../../constant/styles";
import { useMediaQuery } from "react-responsive";
import { display } from "../../constant/mediaWidth";

const Logos = ({ url }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });
  return (
    <div
      style={{
        ...FlexBasic,
        height: Singles.height,
        width: isMobile ? "35%" : isTab ? "30%" : "15%",
        cursor: 'pointer',
      }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }}
    >
      <img
        src={url}
        style={{
          width: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Logos;
