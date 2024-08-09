// src/battlelog/battlelogPage.tsx
import React from "react";
import { Link, Typography } from "@mui/material";
import { BattleLogSection } from "../../sections";
import styles from "./battleLogPage.module.css";

const Battlelog = () => {
  return (
    <section className={styles.container}>
      <Typography variant="h4" component="h2" className={styles.title}>
        Pokémon Battles Logs
      </Typography>
      <Link href="/" underline="none">
        Home
      </Link>
      <div className={styles.table}>
        <BattleLogSection />
      </div>
    </section>
  );
};

export default Battlelog;
