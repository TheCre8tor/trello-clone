import React, { FC } from "react";
import "./App.css";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

const App: FC = () => {
  return (
    <AppContainer>
      <Column text={"To Do"}>
        <Card text={"Generate app scaffold"} />
      </Column>

      <Column text={"In Progress"}>
        <Card text={"Learn Typescript"} />
      </Column>

      <Column text={"Done"}>
        <Card text={"Begin to use static typing"} />
      </Column>
    </AppContainer>
  );
};

export default App;
