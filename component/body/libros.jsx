import React from "react";

const Libros = ({ books, selectBook, charterNumber, atras, getCharter }) => {


  if(charterNumber===null){
    return (
      <div className="box-libro">
        {books && (
          <div>
            <h5 className="text-center text-2">Libros</h5>
            <ul className="ul-libro">
            {books.map((x) => (
                <div key={x._id} className="ul-div">
                  <li onClick={() => selectBook(x._id)} className="list-per">
                    {" "}
                    <span className="text-charter"></span>
                    {x.book}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="box-libro pt-3">
      <h5 className="text-center ">{charterNumber.book}</h5>
      <div className="d-flex justify-content-between">
        <div className="px-3 d-flex align-items-center">
          <i className="bi bi-arrow-left icon20" onClick={atras}></i>
        </div>
        <div className="px-3">
          
          <h6 className="text-center text-2">Capitulos</h6>
        </div>
      </div>
      
      
     
      
      <div className="d-flex-charter">
        {
          charterNumber.capitulos.map((x, idx)=>(
            <div key={x} className="charter-item" onClick={()=>getCharter(x)} >
              <h6>{idx+1}</h6>
            </div>
          ))
        }
      </div>
    </div>
  )
  
};

export default Libros;
