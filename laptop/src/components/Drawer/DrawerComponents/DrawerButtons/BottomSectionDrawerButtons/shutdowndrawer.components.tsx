import { Button, Typography } from "@mui/material";
import React from "react";
import { ShutdownIcon } from "@icons/";
export const ShutDownButtonDrawer: React.FC = () => {
  return (
    <Button
      sx={{
        display: "flex",
        height: { lg: "40px", sm: "30px" },
        width: { lg: "150px", sm: "5.06rem" },
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: { lg: "6px", sm: "2px" },
        padding: { lg: "6px 16px", sm: "6px 13px" },
        borderRadius: "8px",
        border: "1px solid rgba(189, 189, 189, 0.40)",
        backgroundColor: "rgba(189, 189, 189, 0.40)",
        textTransform: "none",
      }}
    >
      <ShutdownIcon />
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: { lg: "12px", sm: "8px" },
          fontWeight: 400,
        }}
      >
        Shut Down
      </Typography>
    </Button>
  );
};
