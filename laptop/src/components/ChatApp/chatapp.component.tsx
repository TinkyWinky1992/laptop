import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Rnd } from "react-rnd";
import { ChatBar, ChatTextField, MessageContainer } from "./Components";
import { useChatState, MessageStateProvider } from "../../Hooks/ChatProvider";
import { motion } from "framer-motion";

export const ChatApp: React.FC = () => {
  const { close } = useChatState();
  const [key, setKey] = useState(0);


  useEffect(() => {
    if (close) setKey((prevKey) => prevKey + 1);
  }, [close]);

  return (
    <motion.div
      key={key}
      animate={close ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
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
          width: "570px",
          height: "477px",
        }}
        minWidth="440px"
        minHeight="300px"
        style={{
          borderRadius: "12px",
          border: "1px solid #636363",
          background: "rgba(35, 35, 35, 0.60)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
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
            display: "flex ",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            container
            sx={{
              height: "100%",
              width: "100%",
              backdropFilter: "blur(30px)",
            }}
          >
            <ChatBar />

            <MessageStateProvider>
              <MessageContainer />
              <ChatTextField />
            </MessageStateProvider>
          </Grid>
        </motion.div>
      </Rnd>
    </motion.div>
  );
};
/*


            </MessageStateProvider>
*/