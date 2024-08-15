import React from "react";
import { Grid } from "@mui/material";
import Draggable from "react-draggable";
import { ChatBar, ChatTextField, MessageContainer } from "./Components";
import { useChatState } from "../../Hooks/ChatProvider";
import { motion } from "framer-motion";
import { ResizableBox } from "react-resizable";
export const ChatApp: React.FC = () => {
  const { close } = useChatState();

  return (
    <Draggable bounds="parent">
  
        <motion.div
          animate={close ? "closed" : "open"}
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "12px",
            border: "1px solid #636363",
            background: "rgba(35, 35, 35, 0.60)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(30px)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Grid
            container
            sx={{
              width: { lg: "570px", sm: "440px" },
              height: { lg: "477px", sm: "300px" },
            }}
          >
            <ChatBar />
            <MessageContainer />
            <ChatTextField />
          </Grid>
        </motion.div>
    </Draggable>
  );
};
