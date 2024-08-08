// src/battlelog/battlelogPage.tsx
import React from "react";
import { Typography } from "@mui/material";
import { BattleLogSection } from "../../sections";

const Battlelog = () => {
  return (
    <>
      <Typography variant="h4" component="h2">
        Battle Log
      </Typography>
      <BattleLogSection />
    </>
  );
};

export default Battlelog;
