import { Typography } from "@mui/material";
import React from "react";
import { color } from "../../lib/constant/colors";
import { Singles, Font, FlexBasic } from "../../lib/constant/styles";
import { Titler } from "../../lib/utils/SentenceSeparator";
import { display } from "../../lib/constant/mediaWidth";
import { useMediaQuery } from "react-responsive";

const Hero = ({ data }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });
  return (
    <div
      style={{
        ...FlexBasic,
        width: "100%",
        height: "60vh",
        overflow: "hidden",
        backgroundImage: `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.2) ), url(${data.banner})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "50%",
        boxShadow: "0px 10px 10px -10px rgba(0,0,0,0.5)",
        paddingTop: isMobile ? "5vh" : isTab ? "15vh" : "5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: isMobile ? "100%" : isTab ? "100%" : display.laptop,
          height: "100%",
          gap: "10px",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            ...Font,
            color: color.white,
            textAlign: "center",
            textShadow: Singles.textShadow,
          }}
        >
          {Titler(data.title)}
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            ...Font,
            color: color.white,
            textAlign: "center",
            textShadow: Singles.textShadow,
          }}
        >
          {data.description}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
