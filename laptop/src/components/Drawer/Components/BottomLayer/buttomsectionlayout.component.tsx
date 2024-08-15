import { Box, Grid, Typography } from "@mui/material";
import { ShutDownButtonDrawer } from "../Buttons";
import { SolarMenu } from "@icons/";
import React from "react";

export const BottomSectionLayout: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        display:"flex",
        height: { lg: "43px", sm: "35px" },
        padding: "4px",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf:"stretch",
        flexShrink:"0",
        gap: "20px", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          height:{lg:"40px", sm:"30px"},
          width: { lg: "188px", sm: "150px" }, 
          padding: "0px 10px",
          alignItems: "center",
          borderRight: "1px solid rgba(255, 255, 255, 0.40)",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.60)",
            textShadow: "0px 1px 4px rgba(0, 0, 0, 0.50)",
            fontFamily: "Inter",
            fontSize: { lg: "14px", sm: "12px" },
            fontWeight: 400,
            marginRight: "4px",
          }}
        >
          Licensed to
        </Typography>
        <SolarMenu/>
      </Box>
      <ShutDownButtonDrawer />
    </Grid>
  );
};
