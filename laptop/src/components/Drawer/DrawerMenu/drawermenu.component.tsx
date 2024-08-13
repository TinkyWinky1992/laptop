import { Box } from "@mui/material";
import React from "react";
import { useStartOrbBtnContext } from "../../Buttons";

export const DrawerMenu: React.FC = () => {
    const { open } = useStartOrbBtnContext();
  return (
    open && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { lg: "390px", sm: "195px" },
          height: { lg: "488px", sm: "244px" },
          padding: "20px",
          flexShrink: "0",
          borderRadius: "12px",
          border: "1px solid rgba(99, 99, 99, 0.60)",
          background: "rgba(35, 35, 35, 0.80)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(10px)",
          position: "absolute",
          bottom: 70,
          left: 20,
        }}
      ></Box>
    )
  );
};
