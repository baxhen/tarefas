import { useState } from "react";

import "./App.css";
import Column from "./components/Column";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Column title="Planejamento" />
        <Column title="A fazer" />
        <Column title="Fazendo" />
        <Column title="Feito" />
      </div>
    </div>
  );
}

export default App;
