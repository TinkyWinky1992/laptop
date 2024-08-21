import { Button, Grid, Avatar, Typography } from "@mui/material";
import React from "react";
import { Search } from "../SearchLayout";
import { useChatState } from "../../../../../Hooks";
const Profile: React.FC = () => {
  const { setClose } = useChatState();
  const handleClick = () => {
    setClose(false);
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          padding: "5px",
          gap: "5px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            borderRadius: "12px",
            border: "2px solid rgba(217, 217, 217, 0.60)",
            background:
              "linear-gradient(207deg, rgba(217, 217, 217, 0.20) 0%, rgba(55, 55, 55, 0.20) 57.08%)",
            backdropFilter: "blur(30px)",
          }}
        />
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: "10px",
          }}
        >
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "12px" }}
          >
            Tanker
          </Typography>
          <Typography sx={{ color: "#76c7c0", fontSize: "12px" }}>
            online
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export const ChatList: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        gap: "10px",
        width: "100%",
      }}
    >
      <Search />
      <Grid
        item
        sx={{
          padding: "10px",
          width: "100%",
          flexDirection: "column",
          height: "370px",
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
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </Grid>
    </Grid>
  );
};
