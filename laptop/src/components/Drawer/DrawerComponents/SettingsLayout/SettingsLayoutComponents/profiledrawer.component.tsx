import { Grid, Box, Typography, Avatar } from "@mui/material";
import React from "react";

export const ProfileDrawer: React.FC = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Avatar
        component={"button"}
        sx={{
          cursor: "pointer",
          display: "flex",
          width: { lg: "48px", sm: "30px" },
          height: { lg: "48px", sm: "30px" },
          flexDirection: "column",
          alignItems: "flex-start2",
          gap: "10px",
          borderRadius: "12px",
          border: "2px solid rgba(217, 217, 217, 0.60)",
          background:
            " linear-gradient(207deg, rgba(217, 217, 217, 0.20) 0%, rgba(55, 55, 55, 0.20) 57.08%)",
          backdropFilter: "blur(30px)",
        }}
      ></Avatar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: { lg: "12px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          TinkyWinky
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.20)",
            fontFamily: "Inter",
            fontSize: { lg: "12px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          @tinkywinky
        </Typography>
      </Box>
      
    </Grid>
  );
};
