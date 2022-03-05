export type ColumnDragItem = {
  id: string;
  type: "COLUMN";
  index: number;
  text: string;
};

export type CardDragItem = {
  id: string;
  type: "CARD";
  index: number;
  text: string;
  columnId: string;
};

export type DragItem = ColumnDragItem | CardDragItem;
