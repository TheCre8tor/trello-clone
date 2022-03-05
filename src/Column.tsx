import React, { FC, useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { useItemDrag } from "./useItemDrag";
import { useDrop } from "react-dnd";
import { DragItem } from "./DragItem";
import { isHidden } from "./utils/isHidden";

interface ColumnProps {
  id: string;
  text: string;
  index: number;
  isPreview?: boolean;
}

const Column: FC<ColumnProps> = ({ text, index, id, isPreview }) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover(item: DragItem) {
      if (item.type === "COLUMN") {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;

        if (sourceColumn === targetColumn) {
          return;
        }

        dispatch({
          type: "MOVE_TASK",
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
        });

        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    },
  });

  console.log(state);

  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
      isPreview={isPreview}
    >
      <ColumnTitle>{text}</ColumnTitle>

      {state.lists[index].tasks.map((task, idx) => (
        <Card
          id={task.id}
          columnId={id}
          text={task.text}
          key={task.id}
          index={idx}
        />
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
