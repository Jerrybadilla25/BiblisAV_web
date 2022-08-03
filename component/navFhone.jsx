import React from "react";

const NavFhone = ({ books, getCharter, changeNavView }) => {

    if(books===null){
        return(<div>hada</div>)
    }
  return (
    <div className="nav-barra">
      <div className="mx-3 mt-3"  >
        <form action="" className="d-flex justify-content-between" >
          <input 
          type="text" 
          className="input-per" 
          placeholder="Digite libro, palabra, versiculo"
          />
          <button className="btn btn-per px-4"><i className="bi bi-search"></i></button>
        </form>
      </div>
      <div className="mx-3 mt-3">
          <select className="selection-per">
            <option value="" className="option-per">Reina Valera 1960</option>
            <option value="" className="option-per">Version del Oso 1906</option>
          </select>
      </div>
      <div className="d-flex justify-content-between px-3 pt-3">
          <div className="d-flex justify-content-between" onClick={changeNavView} >
            <p className="mx-2">Biblia, Libros</p>
            <i className="bi bi-journal-arrow-down"></i>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mx-2">Tamaño fuente</p> 
            <i className="bi bi-file-font"></i>
          </div>
      </div>
    </div>
  );
};

export default NavFhone;

