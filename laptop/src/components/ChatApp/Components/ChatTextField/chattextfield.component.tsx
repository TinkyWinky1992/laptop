import { Grid, TextField, IconButton } from "@mui/material";
import { SendIcon, ResizeIcon } from "../../../../icons";
import React, { useState } from "react";
import { useMessage } from "../../../../Hooks/ChatProvider";

export const ChatTextField: React.FC = () => {
  const { setText } = useMessage();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setText((prevText) => [...prevText, message]);

    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        padding: "2px",
        alignItems: "center",
        gap: "4px",
        borderTop: "1px solid rgba(255, 255, 255, 0.40)",
        background: "rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(30px)",
        borderBottomLeftRadius: "10px",
        WebkitBorderBottomRightRadius: "10px",
        maxHeight: "40px",
      }}
    >
      <TextField
        sx={{
          flex: "1",
          color: "rgba(255, 255, 255, 0.20)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              padding: "10px 12px",
              color: "#fff",
            },
          },
        }}
        variant="outlined"
        placeholder="Say something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          ),
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          bottom: "4px",
          right: "-4px",
        }}
      >
        <ResizeIcon />
      </IconButton>
    </Grid>
  );
};
