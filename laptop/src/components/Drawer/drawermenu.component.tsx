import { Box } from "@mui/material";
import { InstalledAppLayout, SettingsLayout } from "./DrawerComponents";
import React, { useState, useEffect } from "react";
import { useStartOrbBtnContext } from "../Buttons";
import { motion } from "framer-motion";

export const DrawerMenu: React.FC = () => {
  const { open, drawerRef } = useStartOrbBtnContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const bottomValue = windowWidth >= 960 ? 80 : 50;

  return (
    <motion.div
      ref={drawerRef}
      animate={open ? "open" : "closed"}
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {
          clipPath: "inset(100% 100% 100% 100% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
      style={{
        pointerEvents: open ? "auto" : "none",
        position: "absolute",
        bottom: bottomValue,
        left: 20,
        backgroundColor: "rgba(35, 35, 35, 0.80)",
        borderRadius: "12px",
        border: "1px solid rgba(99, 99, 99, 0.60)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { lg: "390px", sm: "195px" },
          height: { lg: "488px", sm: "244px" },
          padding: "20px",
          flexShrink: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
            flex: "1 0 0",
            alignSelf: "stretch",
          }}
        >
          <InstalledAppLayout />
          <SettingsLayout />
        </Box>
      </Box>
    </motion.div>
  );
};
