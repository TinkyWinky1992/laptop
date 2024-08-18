import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Rnd } from "react-rnd";
import { useChatState } from "../../../Hooks";
import { motion } from "framer-motion";
import { FriendListBar, Profile } from "./components";
export const ChatAppFriendList: React.FC = () => {
  const { closeFriend } = useChatState();
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    if (closeFriend) setKey((prevKey) => prevKey + 1);
  }, [closeFriend]);

  return (
    <motion.div
      key={key}
      animate={
        closeFriend ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
      }
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Rnd
        bounds="parent"
        default={{
          x: 0,
          y: 0,
          width: "416px",
          height: "599px",
        }}
        minWidth="300px"
        minHeight="450px"
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "12px",
          border: "1px solid #636363",
          background: "rgba(35, 35, 35, 0.60)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
            backdropFilter: "blur(30px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FriendListBar />
          <Profile/>
        </Grid>
         
      </Rnd>
    </motion.div>
  );
};
