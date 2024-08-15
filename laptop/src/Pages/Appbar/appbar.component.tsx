//@ts-ignore
import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { BellIcon, FlowbiteIcon, VolumeIcon, WifiIcon } from "@icons/";
//import { useDateDetailsContext } from "@hooks";
//import { timeDto } from "../../Dto";
//import { test } from "../../service";
import { DateWatch, TimeWatch } from "@components/watch";

import { StartOrbButton } from "@components/";
export const MainAppBar: React.FC = () => {
  /*
  const { setHour, setMinutes } = useDateDetailsContext();

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const time: timeDto | undefined = await test();
        if (time != undefined) {
          const formattedHour = formatTime(time.hour);
          const formattedMinutes = formatTime(time.minutes);
          setHour(formattedHour);
          setMinutes(formattedMinutes);
        }

        fetchTime();
      } catch (error) {
        console.log(error);
      }
    };
    fetchTime();
  }, [setHour, setMinutes]);
*/
  return (
    <Grid
      container
      sx={{
        display: "flex",
        width: "100%",
        height: "7%",
        flexShrink: 0,
        backgroundColor: "rgba(35, 35, 35, 0.40)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        zIndex: 10,
        borderTop: "1px solid #515151",
        bottom: 0,
        left: 0,
        right: 0,

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "inherit",
          backdropFilter: "blur(30px)",
          zIndex: -1,
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          flex: "1 0 0",
          alignSelf: "stretch",
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
          paddingRight: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingLeft: "20px",
            alignItems: "center",
            gap: "20px",
            borderLeft: " 2px rgba(255, 255, 255, 0.10)",
          }}
        >
          <StartOrbButton />

          <Typography
            sx={{
              color: "#F2F2F2",
              fontFamily: "Inter",
              fontSize: { lg:"16px", sm:"12px"},
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Start Menu
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          paddingRight: "2rem",
        }}
      >
        <FlowbiteIcon />
        <VolumeIcon />
        <WifiIcon />
        <TimeWatch />
        <DateWatch />
        <BellIcon />
      </Box>
    </Grid>
  );
};
