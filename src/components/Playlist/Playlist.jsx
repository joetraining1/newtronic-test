import { Typography } from "@mui/material";
import React from "react";
import { Titler } from "../../lib/utils/SentenceSeparator";
import Section from "../section/Section";
import { useMediaQuery } from "react-responsive";
import { display } from "../../lib/constant/mediaWidth";

const Playlist = ({ data }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        padding: isMobile || isTab ? "10% 0" : 0,
        gap: isMobile || isTab ? "2em" : 0,
        alignItems: 'center'
      }}
    >
      {data.map((item, index) => {
        return <Section key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Playlist;
