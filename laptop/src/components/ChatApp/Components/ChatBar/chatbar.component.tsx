import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CloseIcon, MinimizeIcon } from "@icons/";
import { useChatState } from "../../../../Hooks/ChatProvider";
export const ChatBar: React.FC = () => {
    const {setClose} = useChatState();
    const handleClick = () => {
        setClose(true)
    }
  return (
    <Grid
      container
      sx={{
        display: "flex",
        height: "32px",
        padding: "10px",
        alignItems: "center",
        gap: "20px",
        flexShrink: "0",
        alignSelf: "stretch",
        background: "rgba(153, 153, 153, 0.20)",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flex: "1 0 0",
          transform: "translateY(-2px)",
        }}
      >
        <Box
          sx={{
            width: { lg: "16px", sm: "12px" },
            height: { lg: "16px", sm: "12px" },
            borderRadius: "6px",
            background: "rgba(217, 217, 217, 0.60)",
          }}
        />

        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.80)",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Chatting
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.80)",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          w/
        </Typography>
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          YuvalHaGever
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          padding: "0px 2px",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
          transform: "translateY(-2px)",
        }}
      >
        <Box
          component={"button"}
          sx={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <MinimizeIcon />
        </Box>
        <Box
          component={"button"}
          onClick={handleClick}
          sx={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <CloseIcon />
        </Box>
      </Grid>
    </Grid>
  );
};
