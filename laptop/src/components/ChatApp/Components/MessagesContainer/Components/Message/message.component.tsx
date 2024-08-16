import React from "react";

import { Grid, Typography, Box } from "@mui/material";
import { useDateDetailsContext } from "../../../../../../Hooks";
export const Message: React.FC<{ text: string }> = ({text}) => {
  const { hour, minutes } = useDateDetailsContext();
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
        

      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: { lg: "12px", sm: "8px" },
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
        }}
      >
        You
      </Typography>

      <Box
        sx={{
          
          display: "flex",
          padding: "10px 20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "2px",
          borderRadius: " 12px 12px 0px 12px",
          borderTop: "1px solid rgba(255, 255, 255, 0.70)",
          background: "rgba(255, 255, 255, 0.60)",
        }}
      >
        <Typography
          sx={{
            color: "#343434",
            fontFamily: "Inter",
            fontSize: { lg: "16px", sm: "12px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {text}
        </Typography>
        <Typography
          sx={{
            color: "rgba(52, 52, 52, 0.40)",
            textAlign: "right",
            fontFamily: "Inter",
            fontSize: { lg: "10px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {hour}:{minutes}
        </Typography>
      </Box>
    </Grid>
  );
};
