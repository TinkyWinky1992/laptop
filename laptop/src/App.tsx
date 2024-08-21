//@ts-ignore
import { useEffect, useState } from "react";

import { StartOrbBtnContextProvider, DateContextProvider } from "@hooks/";
import { ChatStateProvider } from "./Hooks/ChatProvider";
import { DrawerMenu, MainAppBar } from "./Components";

import Grid from "@mui/material/Grid";
import "./App.css";
import { ChatApp, ChatAppFriendList } from "./Components/ChatApp";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [listZindex, setListZindex] = useState(100);
  const [chatZindex, setChatZindex] = useState(0);

  const handlelistindex = () => {
    setListZindex(1);
    setChatZindex(0);
  };
  const handlechatindex = () => {
    setListZindex(0);
    setChatZindex(1);
  };

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
            <ChatApp zindex={listZindex} onClick={handlechatindex} />
            <ChatAppFriendList zindex={chatZindex} onClick={handlelistindex} />
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
