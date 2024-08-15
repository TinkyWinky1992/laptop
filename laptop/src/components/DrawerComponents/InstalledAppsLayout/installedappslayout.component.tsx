import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { DrawerInstallButtons } from "@components/DrawerComponents/DrawerButtons/InstalledAppsDrawerButtons/";
import { motion  } from "framer-motion";
import { itemVariants, hoverEffect } from "@utils/";

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
        <motion.li
          variants={itemVariants}
          whileHover={hoverEffect}
          style={{ listStyleType: "none" }}
        >
          <DrawerInstallButtons
            borderColor="1px solid rgba(255, 218, 88, 0.80)"
            backgroundColor="rgba(255, 218, 88, 0.40)"
            label="V"
            labelColor="#FFDA58"
            name="Vendetta"
          />
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={hoverEffect}
          style={{ listStyleType: "none" }}
        >
          <DrawerInstallButtons
            borderColor="1px solid rgba(112, 142, 245, 0.80)"
            backgroundColor="rgba(112, 142, 245, 0.40)"
            label="N"
            labelColor="#708EF5"
            name="Notes"
          />
        </motion.li>

        <motion.li
          variants={itemVariants}
          whileHover={hoverEffect}
          style={{ listStyleType: "none" }}
        >
          <DrawerInstallButtons
            borderColor=" 1px solid rgba(74, 255, 190, 0.80)"
            backgroundColor="rgba(74, 255, 190, 0.40)"
            label="C"
            labelColor="#4AFFBE"
            name="Chat"
          />
        </motion.li>

        <motion.li
          variants={itemVariants}
          whileHover={hoverEffect}
          style={{ listStyleType: "none" }}
        >
          <DrawerInstallButtons
            borderColor="1px solid rgba(255, 88, 148, 0.80)"
            backgroundColor="rgba(255, 88, 148, 0.40)"
            label="J"
            labelColor="#FF5894"
            name="Jobify"
          />
        </motion.li>
      </Grid>
    </Box>
  );
};
