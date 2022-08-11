import React from "react";

const NavFhone = ({ books, changeNavView, onChangeversion, versiones, setTamanoText, tamanoText, fontText, searchWord, search, searchApi }) => {

    if(books===null){
        return(<div>hada</div>)
    }
  return (
    <div className="row">
      <div className="nav-barra">
      <div className="mx-3 mt-3"  >
        <div className="d-flex justify-content-between" >
          <input 
          defaultValue={search}
          type="text" 
          className="input-per" 
          placeholder="Digite libro, palabra, versiculo"
          name="search"
          onChange={(e)=>searchWord(e)}
          />
          <button onClick={searchApi} className="btn btn-per px-4"><i className="bi bi-search"></i></button>
        </div>
        <span>Ejm: Salmos 10 / salmos 10:2 / salmos 10:2-5 / jesus</span>
      </div>
      <div className="mx-3 mt-3">
          <select 
          className="selection-per"
          name="version"
          onChange={(e)=>onChangeversion(e)}
          >
            <option 
            defaultValue={versiones[0]} 
            className="option-per"
            >{versiones[0]}</option>
            <option 
            defaultValue={versiones[1]} 
            className="option-per"
            >{versiones[1]}</option>
          </select>
      </div>
      <div className="d-flex justify-content-between px-3 pt-3 text-per">
          <div className="d-flex justify-content-between" onClick={changeNavView} >
            <p className="mx-2">Biblia, Libros</p>
            <i className="bi bi-journal-arrow-down"></i>
          </div>
          <div className="d-flex justify-content-between" onClick={()=>setTamanoText(!tamanoText)}>
              <p className="mx-2">Tamaño fuente</p> 
              <i className="bi bi-file-font"></i>
          </div>
          {
            tamanoText===true &&
            <div className="box-text-per">
              <a onClick={()=>fontText("font-text-grande", "font-text-grande-title")} >Grande</a>
              <a onClick={()=>fontText("font-text-mediano", "font-text-mediano-title")}>Mediano</a>
              <a onClick={()=>fontText("font-text-normal", "font-text-normal-title")}>Normal</a>
              <a onClick={()=>fontText("font-text-pequeno", "font-text-pequeno-title")}>Pequeño</a>
          </div>
          }
          
      </div>
    </div>
    </div>
  );
};

export default NavFhone;

