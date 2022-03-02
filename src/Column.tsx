import React, { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string;
}

const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};

export { Column };
