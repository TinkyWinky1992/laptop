import { Grid, TextField, IconButton } from "@mui/material";
import { SendIcon, ResizeIcon } from "../../../../icons";
import React from "react";
import { useMessage } from "../../../../Hooks/ChatProvider";
export const ChatTextField: React.FC = () => {
   const { setText } = useMessage();
  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        padding: "4px",
        alignItems: "center",
        gap: "6px",
        borderTop: "1px solid rgba(255, 255, 255, 0.40)",
        background: "rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(30px)",
        marginTop: "-3px",
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
        InputProps={{
          endAdornment: (
            <IconButton>
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
