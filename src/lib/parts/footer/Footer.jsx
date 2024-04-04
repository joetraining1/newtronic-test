import React from "react";
import { color } from "../../constant/colors";
import { FlexBasic, Font } from "../../constant/styles";
import { display } from "../../constant/mediaWidth";
import { Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const Footer = ({ logo }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });
  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "25vh" : isTab ? "15vh" : "10vh",
        backgroundColor: color.offblue,
        ...FlexBasic,
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : isTab ? "100%" : display.laptop,
          height: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: isMobile ? "column" : 'row',
          gap: "1vw",
        }}
      >
        <img
          src={logo}
          style={{
            width: isMobile ? "45%" : "15%",
            objectFit: "contain",
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
        />
        <Typography
          sx={{
            ...Font,
            color: color.white,
            textAlign: 'center',
            fontSize: isMobile ? "12px" :'1em',
            padding: '10px'
          }}
        >
          Hak Cipta © 2024 CV Newtronic Solution. Semua hak cipta dilindungi
          oleh undang-undang.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
