import React, { FC, useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

const AddNewItem: FC<AddNewItemProps> = (props) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  const handleOnAdd = (text: string) => {
    onAdd(text);
    setShowForm(false);
  };

  if (showForm) {
    return <NewItemForm onAdd={handleOnAdd} />;
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export { AddNewItem };
