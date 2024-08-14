import React from "react";
import { Box, Typography } from "@mui/material";
import { ProfileDrawer } from "./SettingsLayoutComponents";
import { EraseButtonDrawer } from "../ApplicationButtons";
import { motion } from "framer-motion";
import { itemVariants, hoverEffect } from "../drawerutils";

export const SettingsLayout: React.FC = () => {

  return (
    <Box
      sx={{
        display: "flex",
        padding: { lg: "10px 40px", sm: "10px 30px" },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        alignSelf: "stretch",
        borderLeft: "2px solid rgba(255, 255, 255, 0.10)",
      }}
    >
      <ProfileDrawer />
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.60)",
          fontFamily: "Inter",
          fontSize: { lg: "16px", sm: "12px" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        Quick Actions
      </Typography>

      <motion.li variants={itemVariants} whileHover={hoverEffect} style={{ listStyleType: "none" }}
       >
        <EraseButtonDrawer />
      </motion.li>


    </Box>
  );
};
