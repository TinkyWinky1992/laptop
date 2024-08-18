import { Grid } from "@mui/material";
import React from "react";
import { Message } from "./Components";
import { useMessage } from "../../../../Hooks";
export const MessageContainer: React.FC = () => {
  const { text } = useMessage();
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
      <Message text={text}></Message>
      <Message text={text}></Message>
    </Grid>
  );
};
