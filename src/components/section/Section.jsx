import React from "react";
import { display } from "../../lib/constant/mediaWidth";
import { FlexBasic, Font } from "../../lib/constant/styles";
import { Button, Typography } from "@mui/material";
import { Splitter, Titler } from "../../lib/utils/SentenceSeparator";
import ReactPlayer from "react-player";
import VimeoPlayer from "react-player/vimeo";
import VimeoFrame from "../../lib/parts/vimeoFrame/VimeoFrame";
import { fileDownloader } from "../../lib/utils/Downloader";
import VimeoNote from "../../lib/parts/vimeoNote/VimeoNote";
import { useMediaQuery } from "react-responsive";

const Section = ({ data }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });
  return (
    <div
      id={Splitter(data.title)}
      style={{
        width: isMobile ? "100%" : isTab ? "100%" : display.laptop,
        height: isMobile ? "100%" : "100vh",
        ...FlexBasic,
        flexDirection: "column",
        gap: isMobile ? "1em" : "1vw",
      }}
    >
      <Typography
        style={{
          ...Font,
          fontWeight: "700",
        }}
        variant="h5"
      >
        {Titler(data.title)}
      </Typography>
      <Typography
        style={{
          ...Font,
          textAlign: 'center'
        }}
        variant={isMobile ? "body1" : "h6"}
      >
        {`"${data.description}"`}
      </Typography>
      <div
        className="lib-image-container"
        style={{
          width: isMobile ? "90%" : isTab ? "80%" : "60%",
          overflow: "hidden",
          height: "auto",
        }}
      >
        {data.type === "image" ? (
          <img
            src={data.url}
            className="lib-image"
            style={{
              width: "100%",
              objectFit: "contain",
              transition: "all 0.2s ease-in-out",
            }}
          />
        ) : null}
        {data.type === "video" ? <VimeoFrame url={data.url} /> : null}
      </div>
      {data.type === "image" ? (
        <Button
          variant="contained"
          sx={{ ...Font }}
          onClick={() =>
            fileDownloader(data.url, `${Splitter(data.title)}.png}`)
          }
        >
          {`unduh gambar`}
        </Button>
      ) : (
        <VimeoNote />
      )}
    </div>
  );
};

export default Section;
