import React from "react";

import logoDnc from "../../assets/dnc-logo.jpg";

import "./styles.css";

const Header = () => {
  return (
    <header>
      <img src={logoDnc} alt="dnc-logo" />
      <h1>Lista de Tarefas</h1>
    </header>
  );
};

export default Header;
