import React from "react";
import { Box, Typography } from "@mui/material";

export const SettingsLayout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "10px 50px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        alignSelf: "stretch",
        borderLeft:"2px solid rgba(255, 255, 255, 0.10)"
      }}
    >
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.60)",
          fontFamily: "Inter",
          fontSize: { lg: "16px", sm: "12px" },
          fontStyle: 400,
          lineHeight: "normal",
        }}
      >
        Settings
      </Typography>
    </Box>
  );
};
