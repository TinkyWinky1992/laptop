//@ts-ignore
import { useEffect, useState } from "react";

import {
  StartOrbBtnContextProvider,
  DateContextProvider,
} from "@hooks/";
import { ChatStateProvider } from "./Hooks/ChatProvider";
import { DrawerMenu, MainAppBar } from "./Components";

import Grid from "@mui/material/Grid";
import "./App.css";
import { ChatApp } from "./Components/ChatApp";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "ui") {
        const { action } = event.data;
        console.log("Received message action:", event.data);
        setIsOpen(action);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Grid container className="App">
      <Grid
        item
        className="test"
        sx={{
          width: {
            lg: "100rem",
            xs: "50rem",
          },
          height: {
            lg: "50rem",
            xs: "30rem",
          },
          borderRadius: "12px",
          border: "2px solid #515151",
          position: "relative",
        }}
      >
        <ChatStateProvider>
          <DateContextProvider>
            
            <StartOrbBtnContextProvider>
              <MainAppBar />
              <DrawerMenu />
            </StartOrbBtnContextProvider>

            <ChatApp />
          </DateContextProvider>
        </ChatStateProvider>
      </Grid>
    </Grid>
  );
}
//DetailsContext

/*

    isOpen && (
      <Grid container className="App">
        <Grid
          item
          className="test"
          sx={{
            width: {
              lg: "100rem",
              xs: "50rem",
            },
            height: {
              lg: "50rem",
              xs: "30rem",
            },
            borderRadius: "12px",
            border: "2px solid #515151",
            position: "relative",
          }}
        >
          <DateContextProvider>
            <StartOrbBtnContextProvider>
              <MainAppBar />
              <DrawerMenu />
            </StartOrbBtnContextProvider>
          </DateContextProvider>
        </Grid>
      </Grid>
    )


      */
