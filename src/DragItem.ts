export type ColumnDragItem = {
  id: string;
  type: "COLUMN";
  index: number;
  text: string;
};

export type DragItem = ColumnDragItem;
