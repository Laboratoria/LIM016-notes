import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Principal = () => {
  return (
    <div className="header">
      <div className="titulo">
        <h1 className="title">LABNOTES</h1>
        <img className="logo2" src="/img/notas.png" alt=""/>
      </div>
      <div className="search-icon">
        <input type="search" placeholder="Buscar  " id="search"></input>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Principal;
