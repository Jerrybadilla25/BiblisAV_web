import React from "react";

const Cuerpo = ({ charterView, changeNavView, decks, getCharter }) => {
  if (charterView === null) {
    return <div>vacio</div>;
  }

  return (
    <div>
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
            <h6 onClick={() => getCharter(decks[0]._id)}>
              <i class="bi bi-caret-left"></i> <span>{decks[0].charter}</span>
            </h6>

            <h6 className="text-1" onClick={changeNavView}>
              {charterView.charter} <i class="bi bi-caret-down-fill"></i>{" "}
            </h6>

            <h6 onClick={() => getCharter(decks[1]._id)}>
              {" "}
              <span>
                {decks[1].charter}
              </span> <i class="bi bi-caret-right"></i>{" "}
            </h6>
          </div>
        )}
      </div>

      <div className="body-per-1">
        <h1 className="text-1 mb-5">{charterView.charter}</h1>
        
        {charterView.verses.map((x) => (
          <div key={x._id}>
            <p className="text-verses">
              {" "}
              <span className="me-2 text-2">{x.numero}</span> {x.versiculo}
            </p>
          </div>
        ))}
        <div className='box-like'>
          <div className="d-flex justify-content-center">
            <h6>Me gusta</h6>
            <i class="bi bi-heart"></i>
          </div>
        </div>
        <h2 className="text-2 text-center py-3">{charterView.testament}</h2>
      </div>
    </div>
  );
};

export default Cuerpo;
