import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardProps } from "./smallCard.interface";

// To Do: customize class
const SmallCard: React.FC<CardProps> = ({ name, imageUrl }) => {
  return (
    <Box sx={{ maxWidth: 150 }}>
      <Card>
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "100px" }}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SmallCard;
