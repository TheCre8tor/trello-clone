import React, { FC } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  text: string;
}

const Card: FC<CardProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};

export { Card };
