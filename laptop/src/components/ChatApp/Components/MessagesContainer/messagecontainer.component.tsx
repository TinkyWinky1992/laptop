import { Box } from "@mui/material";
import React from "react";
import { Message } from "./Components";
import { useMessage } from "../../../../Hooks";

export const MessageContainer: React.FC = () => {
  const { text } = useMessage();

  return (
    <Box
      sx={{
        height: { lg: "85%", sm: "75%" },
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "10px",
        flex: "1 0 0",
        alignSelf: "stretch",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "5px",
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
      {text.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Message text={message} />
        </Box>
      ))}
    </Box>
  );
};
