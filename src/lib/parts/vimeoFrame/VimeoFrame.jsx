import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { display } from "../../constant/mediaWidth";

const VimeoFrame = ({ url }) => {
  const [video, setVideo] = useState({});
  
  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });

  return (
    <iframe
      src={url}
      width={"100%"}
      height={isMobile ? "200" : "500"}
      frameborder="0"
      border="0"
      cellspacing="0"
    />
  );
};

export default VimeoFrame;
