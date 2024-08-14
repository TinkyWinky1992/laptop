import { Box, Typography } from "@mui/material";
import React from "react";

export const NoteButtonDrawer: React.FC = () => {
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
      <Box
        sx={{
          display: "flex",
          width: { lg: "8px", sm: "2px" },
          height: { lg: "8px", sm: "2px" },
          padding: "10px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          border: "1px solid rgba(112, 142, 245, 0.80)",
          background: "rgba(112, 142, 245, 0.40)",
        }}
      >
        <Typography
          sx={{
            color: "#708EF5",
            fontFamily: "Inter",
            fontSize: { lg: "12px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          N
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: { lg: "18px", sm: "12px" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        Notes
      </Typography>
    </Box>
  );
};
