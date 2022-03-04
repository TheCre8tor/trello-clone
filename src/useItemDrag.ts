import { DragItem } from "./DragItem";
import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();

  const [, drag] = useDrag({
    item: item,
    begin: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: item }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }),
  });

  return { drag };
};
