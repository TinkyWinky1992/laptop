import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ChatButtonDrawer, JobifyButtonDrawer, NoteButtonDrawer, VendettaButtonDrawer } from "../ApplicationButtons";
import { motion  } from "framer-motion";
import { itemVariants, hoverEffect } from "../drawerutils";
export const InstalledAppLayout: React.FC = () => {




  return (
    <Box
      sx={{
        display: "flex",
        padding: "10px 20px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        flex: "1 0 0",
        alignSelf: "stretch",
        borderLeft: "1px rgba(255, 255, 255, 0.20)",
      }}
    >
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.60)",
          fontFamily: "Inter",
          fontSize: { lg: "16px", sm: "12px" },
          fontStyle: 400,
          lineHeight: "normal",
          position: "relative",
          left: { lg: "0px", sm: "20px" },
        }}
      >
        Installed Apps
      </Typography>
      <Grid
        sx={{
          display: "flex",
          padding: "10px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "15px",
          alignSelf: "stretch",
          position: { lg: "", sm: "relative" },
          left: { lg: "0px", sm: "20px" },
        }}
      >
        <motion.li variants={itemVariants} whileHover={hoverEffect} style={{ listStyleType: "none" }}>
          <VendettaButtonDrawer />
        </motion.li>
        <motion.li variants={itemVariants}  whileHover={hoverEffect} style={{ listStyleType: "none" }}>
          <NoteButtonDrawer />
        </motion.li>

        <motion.li variants={itemVariants} whileHover={hoverEffect} style={{ listStyleType: "none" }}>
          <ChatButtonDrawer />
        </motion.li>

        <motion.li variants={itemVariants} whileHover={hoverEffect} style={{ listStyleType: "none" }}>
          <JobifyButtonDrawer />
        </motion.li>
      </Grid>
    </Box>
  );
};
