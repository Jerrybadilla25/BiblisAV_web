import React from "react";

const NavFhone = ({ books, changeNavView, onChangeversion, versiones, setTamanoText, tamanoText, fontText }) => {

    if(books===null){
        return(<div>hada</div>)
    }
  return (
    <div className="row">
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

