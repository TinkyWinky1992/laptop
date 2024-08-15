import { Typography } from "@mui/material";
import React from "react";
import { useDateDetailsContext } from "@hooks/";

export const DateWatch: React.FC = () => {
  const { day, month, year } = useDateDetailsContext();
  return (
    <Typography
      sx={{
        color: "rgba(255, 255, 255, 0.60)",
        fontFamily: "Inter",
        fontSize: {lg:"16px" ,sm:"12px"},
        fontWeight: 400,
        lineHeight: "normal",
        fontStyle: "normal",
      }}
    >
      {day}/{month}/{year}
    </Typography>
  );
};

export const TimeWatch: React.FC = () => {
  const { hour, minutes } = useDateDetailsContext();

  return (
    <Typography
      sx={{
        color: "rgba(255, 255, 255, 0.80)",
        fontFamily: "Inter",
        fontSize: { lg: "16px", sm: "12px" },
        fontWeight: 700,
        lineHeight: "normal",
        fontStyle: "normal",
      }}
    >
      {hour}:{minutes}
    </Typography>
  );
};
