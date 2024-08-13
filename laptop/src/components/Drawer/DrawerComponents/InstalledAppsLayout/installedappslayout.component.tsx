import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ChatButtonDrawer, JobifyButtonDrawer, NoteButtonDrawer } from "../ApplicationButtons";
import { motion, Variants } from "framer-motion";
export const InstalledAppLayout: React.FC = () => {

    const itemVariants: Variants = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    };



  return (
    <Box
      sx={{
        display: "flex",
        padding: "10px 20px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
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
        }}
      >
        Installed Apps
      </Typography>
      <Grid
        sx={{
          display: "flex",
          height: "336px",
          padding: "10px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "15px",
          alignSelf: "stretch",
        }}
      >
        <motion.li variants={itemVariants} style={{ listStyleType: "none" }}>
          <NoteButtonDrawer />
        </motion.li>

        <motion.li variants={itemVariants} style={{ listStyleType: "none" }}>
          <ChatButtonDrawer />
        </motion.li>

        <motion.li variants={itemVariants} style={{ listStyleType: "none" }}>
          <JobifyButtonDrawer />
        </motion.li>
      </Grid>
    </Box>
  );
};
