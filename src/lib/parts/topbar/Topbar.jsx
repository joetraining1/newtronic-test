import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { color } from "../../constant/colors";
import { AppBar } from "@mui/material";
import { FlexBasic, Singles } from "../../constant/styles";
import Logos from "../logos/Logos";
import TopbarItem from "./TopbarItem";
import { useMediaQuery } from "react-responsive";
import { display } from "../../constant/mediaWidth";

const Topbar = ({ logo, datas }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });
  return (
    <AppBar
      sx={{
        ...FlexBasic,
        width: "100%",
        height: isMobile ? Singles.marginMobile : Singles.marginTopBody,
        background: color.newtronic,
        color: color.white,
        boxShadow: "0px 10px 20px 5px rgba(0,0,0,0.5)",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : isTab ? "100%" : "1280px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${isMobile || isTab ? '5%' : 0}`
        }}
      >
        <Logos url={logo} />
        {isMobile || isTab ? null : <TopbarItem menus={datas} />}
        <Sidebar menus={datas} />
      </div>
    </AppBar>
  );
};

export default Topbar;
