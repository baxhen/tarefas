import React, { useState, useEffect } from "react";

import "./styles.css";

const Column = (props) => {
  const { title } = props;

  const [showAdd, setShowAdd] = useState(false);
  const [cards, setCards] = useState([]);
  const [textarea, setTextarea] = useState("");

  const handleShowAddCard = () => {
    setShowAdd(true);
  };
  const handleHideAddCard = () => {
    setShowAdd(false);
  };

  const onChange = (e) => setTextarea(e.target.value);

  const handleAddCard = () => {
    setCards((oldCards) => [
      ...oldCards,
      { id: oldCards.length + 1, name: textarea },
    ]);
    setShowAdd(false);
  };

  const handleDeleteCard = (card) => {
    setCards((oldCards) => oldCards.filter(({ id }) => id !== card.id));
  };

  //** Sempre que um estado no array de dependencias atualiza o use effect executa o callback */

  useEffect(() => {
    if (showAdd === false) {
      setTextarea("");
    }
  }, [showAdd]);

  /** Sempre que o array de dependencias estiver vazio o use effect executa 
  o callback apenas na primeira vez que o componente é renderizado */

  //   useEffect(() => {
  //     console.log("primeira renderização");
  //   }, []);

  //   /** Sempre que uma função é retornado  do callback do useEffect ela vai ser excutada na ultima renderização do componente
  //    * ou sempre depois de atualizar
  //    */

  //   useEffect(() => {
  //     return () => {
  //       console.log("sai da tela");
  //     };
  //   }, []);

  return (
    <div className="column">
      <h3>{title}</h3>
      <button onClick={handleShowAddCard}>
        Clique para adicionar um cartão
      </button>

      {showAdd ? (
        <div className="add-section">
          <textarea
            name="add-card"
            id="add-card"
            cols="25"
            rows="5"
            value={textarea}
            onChange={onChange}
          ></textarea>
          <button onClick={handleAddCard}>Adicionar um cartão</button>
          <button onClick={handleHideAddCard}>Cancelar</button>
        </div>
      ) : null}

      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <p>{card.name}</p>{" "}
            <button onClick={() => handleDeleteCard(card)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
