// src/interfaces/card.interface.ts
export interface CardProps {
  name: string;
  imageUrl: string;
  onClick: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
}
