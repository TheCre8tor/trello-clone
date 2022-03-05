import React, { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import "./App.css";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";
import { CustomDragLayer } from "./CustomDragLayer";

const App: FC = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />

      {state.lists.map((list, idx) => (
        <Column key={list.id} id={list.id} text={list.text} index={idx} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
        dark={false}
      />
    </AppContainer>
  );
};

export default App;
