import { MenuRounded } from "@mui/icons-material";
import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { color } from "../../constant/colors";
import SidebarItem from "./SidebarItem";
import { useMediaQuery } from "react-responsive";
import { display } from "../../constant/mediaWidth";

const Sidebar = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: ${display.phone})` });
  const isTab = useMediaQuery({ query: `(max-width: ${display.tab})` });

  const handleOpen = () => {
    setIsOpen(!isOpen);
    return;
  };

  const handleClose = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button
        variant="text"
        size="small"
        sx={{
          height: "80%",
          backgroundColor: "transparent",
          color: color.white,
        }}
        onClick={() => handleOpen()}
      >
        <MenuRounded
          sx={{
            fontSize: isMobile ? "32px" : isTab ? "54px" : "2vw",
          }}
        />
      </Button>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        anchor="right"
        variant={isMobile ? "temporary" : isTab ? "temporary" : "temporary"}
        PaperProps={{
          sx: {
            width: isMobile ? "80%" : "400px",
            padding: "1vw",
          },
        }}
      >
        {menus.map((item, index) => {
          return (
            <SidebarItem
              item={item}
              key={item.id}
              onClose={() => handleClose()}
            />
          );
        })}
        <Button
          variant="contained"
          sx={{
            marginTop: "auto",
            marginBottom: "10%",
            marginX: "auto",
            width: "50%",
          }}
          onClick={() => handleClose()}
        >
          Close
        </Button>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
