import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./startorb.style.css";
import { useStartOrbBtnContext } from "./startorb.provider";

export const StartOrbButton: React.FC = () => {
  const { setOpen, open, drawerRef } = useStartOrbBtnContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      )
        setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  const handleClick = () => {
    if (open == false) 
        setOpen(true);
    else
      setOpen(false);
  };

  return (
    <button
      className="startOrbBtn"
      onClick={handleClick}
      style={{ border: "none", background: "transparent", padding: 0 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "3px",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="up-rectangleRight" />
        <div className="up-rectangleLeft" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "3px",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="down-rectangleLeft" />
        <div className="down-rectangleRight" />
      </Box>
    </button>
  );
};
