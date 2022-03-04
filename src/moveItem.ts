export const moveItem = <T>(array: T[], from: number, to: number) => {
  // we make sure that it’s always a positive number.
  const startIndex = to < 0 ? array.length + to : to;

  // we remove the item with the from index and store it in the item const.
  const item = array.splice(from, 1)[0];

  // we insert that item at startIndex position.
  array.splice(startIndex, 0, item);

  return array;
};
