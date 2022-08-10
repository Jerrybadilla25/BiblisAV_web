import React from "react";

const Cuerpo = ({ charterView, changeNavView, decks, getCharter, fontText }) => {
  if (charterView === null) {
    return (
      <div className="cargando">
        <h5>Cargando...</h5>
      </div>
    );
  }

  return (
    <div className="row">
      <div>
        <div className="d-flex justify-content-evenly box-social ">
          <h6 className="social-1">
            <span className="mx-2">Vistas</span> {charterView.like}
          </h6>
          <h6 className="social-1">
            <span className="mx-2">Likes</span>
            {charterView.view}
          </h6>
        </div>
      </div>
      <div>
        {decks && (
          <div className="d-flex justify-content-evenly box-deck">
            <h6  onClick={() => getCharter(decks[0]._id)}>
              <i className="bi bi-caret-left"></i> <span className="">{decks[0].charter}</span>
            </h6>

            <h6 className="" onClick={changeNavView}>
              {charterView.charter} <i className="bi bi-caret-down-fill"></i>{" "}
            </h6>

            <h6  onClick={() => getCharter(decks[1]._id)}>
              {" "}
              <span className="">
                {decks[1].charter}
              </span> <i className="bi bi-caret-right"></i>{" "}
            </h6>
          </div>
        )}
      </div>

      <div className="body-per-1">
        
        <h1 className="text-1 mb-5 myDIV1">{charterView.charter}</h1>
        
        {charterView.verses.map((x) => (
          <div key={x._id}>
            <p className="text-verses myDIV">
              {" "}
              <span className="me-2 text-2 myDIV">{x.numero}</span> {x.versiculo}
            </p>
          </div>
        ))}
        <div className='box-like'>
          <div className="d-flex justify-content-center">
            <h6 className="myDIV">Me gusta</h6>
            <i className="bi bi-heart"></i>
          </div>
        </div>
        <h2 className="text-2 text-center py-3 myDIV">{charterView.testament}</h2>
        <p className="text-center">{charterView.version}</p>
      </div>
    </div>
  );
};

export default Cuerpo;
