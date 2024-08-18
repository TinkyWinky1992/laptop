//
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CloseIcon, MinimizeIcon } from "@icons/";
import { useChatState } from "../../../../../Hooks";

export const FriendListBar: React.FC = () => {
  const { setCloseFriend } = useChatState();
  const handleClick = () => {
    setCloseFriend(true);
  };
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
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
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
            background: "rgba(69, 255, 32, 0.60)",
          }}
        />

        <Typography
          variant="caption"
          sx={{
            color: "#FFFFFF80",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "normal",
          }}
        >
          Chats
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
