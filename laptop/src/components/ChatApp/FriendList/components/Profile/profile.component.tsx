import { Grid, Avatar, Typography } from "@mui/material";
import React from "react";

export const Profile: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        height: "20%",
        width: "100%",
        backdropFilter: "blur(30px)",
        flexDirection: "row",
        borderBottom: "1px solid #636363",
        gap: "10px",
        padding: "10px",
        background:
          "linear-gradient(135deg, rgba(32,248, 255,0.2), rgba(19,149,153,0))",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          width: { lg: "70px", sm: "45px" },
          height: { lg: "70px", sm: "45px" },
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
          width: { lg: "70px", sm: "45px" },
          height: { lg: "70px", sm: "45px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ color: "#3498db", fontWeight: "bold" }}>
          Tanker
        </Typography>
        <Typography sx={{ color: "#76c7c0", fontSize: "12px" }}>
          online
        </Typography>
      </Grid>
    </Grid>
  );
};
