import React, { useState } from "react";
import { Grid, TextField, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const Search: React.FC = () => {
  const [SearchFriends, setSearchFriends] = useState(true);
  const [SearchGlobal, setSearchGlobal] = useState(false);

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        height: "3rem",
        width: "100%",
        background: "rgba(153,153,153,0.2)",
        padding: "0 5px",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: "Inter",
        }}
      >
        FRIENDS
      </Typography>

      <Grid
        item
        sx={{
          flex: 1,
          marginLeft: "10px",
        }}
      >
        <AnimatePresence mode="wait">
          {SearchFriends && (
            <motion.div
              key="friends-search"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <TextField
                sx={{
                  width: "100%",
                  height: "30px",
                  input: {
                    color: "white",
                    padding: "5px",
                  },
                  backgroundColor: "#333",

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                }}
                variant="outlined"
                placeholder="Search Friend..."
              />
            </motion.div>
          )}

          {SearchGlobal && (
            <motion.div
              key="global-search"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <TextField
                sx={{
                  width: "100%",
                  height: "30px",
                  input: {
                    color: "white",
                    padding: "5px",
                  },
                  backgroundColor: "#333",

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                }}
                variant="outlined"
                placeholder="Add Friend..."
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Grid>

      <IconButton
        sx={{
          height: { lg: "30px" },
          width: { lg: "30px" },
          marginLeft: "10px",
        }}
        onClick={() => {
          setSearchGlobal(false);
          setSearchFriends(true);
        }}
      >
        <SearchIcon
          sx={{
            color: "white",
            height: { lg: "20px" },
            width: { lg: "20px" },
          }}
        />
      </IconButton>

      <IconButton
        sx={{
          height: { lg: "30px" },
          width: { lg: "30px" },
          marginLeft: "5px",
        }}
        onClick={() => {
          setSearchGlobal(true);
          setSearchFriends(false);
        }}
      >
        <PersonAddIcon
          sx={{
            color: "white",
            height: { lg: "20px" },
            width: { lg: "20px" },
          }}
        />
      </IconButton>
    </Grid>
  );
};
