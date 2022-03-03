import React, { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { List, useAppState } from "./AppStateContext";
import { Card } from "./Card";

interface ColumnProps {
  id: string;
  text: string;
  index: number;
}

const Column: FC<ColumnProps> = ({ text, index, id }) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>

      {state.lists[index].tasks.map((task) => (
        <Card key={task.id} text={task.text} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { task: text, taskId: id } })
        }
        dark={true}
      />
    </ColumnContainer>
  );
};

export { Column };
