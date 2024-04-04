import { Button } from "@mui/material";
import React from "react";
import { Font } from "../../constant/styles";
import { Splitter } from "../../utils/SentenceSeparator";
import { color } from "../../constant/colors";
import { useMediaQuery } from "react-responsive";
import { display } from "../../constant/mediaWidth";

const SidebarItem = ({ item, onClose }) => {
  const eleId = Splitter(item.title);
  const element = document.getElementById(eleId);

  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });

  return (
    <Button
      variant="text"
      sx={{
        height: isMobile ? "10%" : "20%",
        width: "100%",
        ...Font,
        color: color.prime,
      }}
      onClick={(e) => {
        e.preventDefault();
        onClose();
        element?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      {item.title}
    </Button>
  );
};

export default SidebarItem;
