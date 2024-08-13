import { Box, Typography } from "@mui/material";
import React from "react";

export const JobifyButtonDrawer: React.FC = () => {
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
          width: { lg: "8px", sm: "14px" },
          height: { lg: "8px", sm: "14px" },
          padding: "10px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "4px",
          border: "1px solid rgba(255, 88, 148, 0.80)",
          background: "rgba(255, 88, 148, 0.40)",
        }}
      >
        <Typography
          sx={{
            color: "#FF5894",
            fontFamily: "Inter",
            fontSize: { lg: "12px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          J
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: { lg: "18px", sm: "16px" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        Jobify
      </Typography>
    </Box>
  );
};
