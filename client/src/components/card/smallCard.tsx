import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardProps } from "./smallCard.interface";
import styles from "./smallCard.module.css"; // Importar el módulo CSS

const SmallCard: React.FC<CardProps> = ({
  name,
  imageUrl,
  onClick,
  isSelected = false,
  isDisabled = false,
}) => {
  return (
<<<<<<< Updated upstream
    <div
      onClick={isDisabled ? undefined : onClick}
      className={`${styles.cardContainer} ${
        isDisabled ? styles.cardDisabled : ""
      }`}
      style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
    >
      <Card
        className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
      >
        <img src={imageUrl} alt={name} className={styles.cardImage} />
        <CardContent className={styles.cardContent}>
          <Typography className={styles.cardTitle} gutterBottom>
=======
    <Box sx={{ maxWidth: 150 }}>
      <Card>
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "200px" }}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
>>>>>>> Stashed changes
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmallCard;
