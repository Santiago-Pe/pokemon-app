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
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmallCard;
