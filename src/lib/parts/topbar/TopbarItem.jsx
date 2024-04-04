import React from "react";
import { FlexBasic, Font, Singles } from "../../constant/styles";
import { Button } from "@mui/material";
import { color } from "../../constant/colors";
import { Splitter } from "../../utils/SentenceSeparator";

const TopbarItem = ({ menus }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: Singles.height,
        width: Singles.width,
        paddingRight: "1vw",
        gap: "10px",
      }}
    >
      {menus
        ? menus.map((item, index) => {
            const eleId = Splitter(item.title);
            const element = document.getElementById(eleId);
            return (
              <Button
                key={item.id}
                variant="text"
                sx={{
                  height: "80%",
                  ...Font,
                  color: color.white,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.title}
              </Button>
            );
          })
        : null}
    </div>
  );
};

export default TopbarItem;
