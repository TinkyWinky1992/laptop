import { Grid, Box, Typography } from "@mui/material";
import React from "react";

export const MessageContainer: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        height: {lg:"85%", sm:"75%"},
        display: "flex",
        padding: "20px",
        flexDirection: "row",
        alignItems: "flex-start",
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
      {Array.from({ length: 20 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            maxWidth: "80%",
          }}
        >
          <Typography variant="body1">
            Message {index + 1}: This is a sample message to test scrolling in
            the message container.
          </Typography>
        </Box>
      ))}
    </Grid>
  );
};
