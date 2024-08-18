import { Box, Typography } from "@mui/material";
import { useChatState } from "../../../../../Hooks/ChatProvider";
import React from "react";

type ButtonProps = {
  borderColor: string;
  backgroundColor: string;
  labelColor: string;
  label: string;
  name: string;
  id: string; 

};

export const DrawerInstallButtons: React.FC<ButtonProps> = ({
  borderColor,
  backgroundColor,
  labelColor,
  label,
  name,
  id,

}) => {
  const { setCloseFriend } = useChatState();

  const handleClick = () => {
    if(id == 'C')
    {
      setCloseFriend(false);
    }

  };

  return (
    <Box
      component={"button"}
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
      onClick={handleClick} 
    >
      <Box
        sx={{
          display: "flex",
          width: { lg: "8px", sm: "2px" },
          height: { lg: "8px", sm: "2px" },
          padding: "10px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          border: borderColor,
          background: backgroundColor,
        }}
      >
        <Typography
          sx={{
            color: labelColor,
            fontFamily: "Inter",
            fontSize: { lg: "12px", sm: "8px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {label}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: { lg: "18px", sm: "12px" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};
