import React, { ChangeEvent, FC, useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm: FC<NewItemFormProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setText(value);
  };

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={handleChange} />

      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export { NewItemForm };
