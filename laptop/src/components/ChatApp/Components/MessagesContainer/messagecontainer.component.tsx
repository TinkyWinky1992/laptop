import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import { Message } from "./Components";
export const MessageContainer: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        height: { lg: "85%", sm: "75%" },
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        gap: "20px",
        flex: "1 0 0",
        alignSelf: "stretch",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "1px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Message text="שלום שלום שלום"></Message>
      <Message text="שלום שלום שלום"></Message>
    </Grid>
  );
};
