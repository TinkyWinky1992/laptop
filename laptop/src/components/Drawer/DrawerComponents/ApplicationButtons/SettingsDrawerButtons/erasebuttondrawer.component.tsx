import { Box, Typography } from "@mui/material";
import React from "react";
import { Erase } from "../../../../../icons";
export const EraseButtonDrawer: React.FC = () => {
  return (
    <Box
      component={"button"}
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <Erase />
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: { lg: "14px", sm: "10px" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        Erase All Data
      </Typography>
    </Box>
  );
};
