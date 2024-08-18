import { Button, Grid, Avatar, Typography } from "@mui/material";
import React from "react";
import { Search } from "../SearchLayout";

const Profile: React.FC = () => {
  return (
    <Button
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
