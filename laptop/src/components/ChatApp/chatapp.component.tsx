import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { Rnd } from "react-rnd";
import { ChatBar, ChatTextField, MessageContainer } from "./Components";
import { useChatState, MessageStateProvider } from "../../Hooks/ChatProvider";
import { motion } from "framer-motion";

export const ChatApp: React.FC<{ zindex: number; onClick: () => void }> = ({
  zindex,
  onClick,
}) => {
  const { close } = useChatState();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (close) setKey((prevKey) => prevKey + 1);
  }, [close]);

  return (
    <motion.div
      onClick={onClick}
      key={key}
      animate={close ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        zIndex: zindex,
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
          width: "570px",
          height: "477px",
        }}
        minWidth="440px"
        minHeight="350px"
        style={{
          position: "absolute",
          zIndex: zindex,
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
          <ChatBar />
          <MessageStateProvider>
            <Box sx={{ flex: 1, overflowY: "auto" }}>
              <MessageContainer />
            </Box>
            <Box sx={{ flexShrink: 0 }}>
              <ChatTextField />
            </Box>
          </MessageStateProvider>
        </Grid>
      </Rnd>
    </motion.div>
  );
};
