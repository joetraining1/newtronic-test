import { Typography } from "@mui/material";
import React from "react";
import { Font } from "../../constant/styles";

const VimeoNote = () => {
  return (
    <React.Fragment>
      <Typography variant="body1" sx={{ ...Font, textAlign: 'center' }}>
        Disabling vimeo Download, reason blocked by CORS.
        <br/>
        <a
          href="https://help.vimeo.com/hc/en-us/articles/12427806914577-Get-video-file-and-download-links-from-the-API"
          target="blank"
        >
          click this link for further information.
        </a>
      </Typography>
    </React.Fragment>
  );
};

export default VimeoNote;
