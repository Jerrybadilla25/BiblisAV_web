import React from "react";
import BoxBusqueda from './boxBusqueda';
import BoxCuerpo from './boxCuerpo';

const Cuerpo = ({ charterView, changeNavView, decks, getCharter, found, estadoFound, setEstadoFound, estado1, search }) => {
  if (charterView === null) {
    return (
      <div className="cargando">
        <h5>Cargando...</h5>
      </div>
    );
  }

  return (
    <div>
      {
        estadoFound ?
        <BoxCuerpo
        charterView={charterView}
        changeNavView={changeNavView}
        decks={decks}
        getCharter={getCharter}
        />
        :
       <BoxBusqueda
       getCharter={getCharter}
       found={found}
       setEstadoFound={setEstadoFound}
       estado1={estado1}
       search={search}
       />
      }
    </div>
  );
};

export default Cuerpo;

