import React from "react";
import { Container, Singles } from "../constant/styles";
import Topbar from "../parts/topbar/Topbar";
import Footer from "../parts/footer/Footer";
import { color } from "../constant/colors";
import { useMediaQuery } from "react-responsive";
import { display } from "../constant/mediaWidth";

const MainLayout = ({ data, children }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });

  return (
    <div
      style={{
        ...Container,
        paddingTop: isMobile
          ? Singles.marginMobile
          : isTab
          ? Singles.marginTab
          : Singles.marginTopBody,
        backgroundColor: color.white,
        justifyContent: "flex-start",
      }}
    >
      <Topbar logo={data ? data.logo : ""} datas={data ? data.playlist : []} />
      {children}
      <Footer logo={data ? data.logo : ""} />
    </div>
  );
};

export default MainLayout;
