import { Grid, Box, Typography, Avatar } from "@mui/material";
import React, { useState } from "react";

export const ProfileDrawer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <label htmlFor="avatar-upload">
        <Avatar
          component={"span"}
          sx={{
            cursor: "pointer",
            display: "flex",
            width: { lg: "48px", sm: "30px" },
            height: { lg: "48px", sm: "30px" },
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            borderRadius: "12px",
            border: "2px solid rgba(217, 217, 217, 0.60)",
            background:
              "linear-gradient(207deg, rgba(217, 217, 217, 0.20) 0%, rgba(55, 55, 55, 0.20) 57.08%)",
            backdropFilter: "blur(30px)",
          }}
          src={selectedImage || undefined}
        />
      </label>
      <input
        type="file"
        id="avatar-upload"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: { lg: "12px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          TinkyWinky
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.20)",
            fontFamily: "Inter",
            fontSize: { lg: "12px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          @tinkywinky
        </Typography>
      </Box>
    </Grid>
  );
};
