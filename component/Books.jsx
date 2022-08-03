import React, { useState, useEffect } from "react";

const Books = ({ books, changeNavView, selectBook }) => {
  const [test1, setTest1] = useState(null);
  const [test2, setTest2] = useState(null);

  const [estado, setEstado] = useState("vacio");

  useEffect(() => {
    divTest();
  }, []);

  const divTest = () => {
    let a = books.filter((x) => x.testament === "Antiguo testamento");
    let b = books.filter((x) => x.testament === "Nuevo testamento");
    setTest1(a);
    setTest2(b);
    setEstado("Books");
  };

  if (estado === "vacio") {
    return <div>vacio</div>;
  }

  if (estado === "Books") {
    return (
      <div className="contenedor-libro">
        <div className="row">
          <div className="col-sm-5">
            <h4>Antiguo testamento</h4>
            {test1.map((x) => (
              <div key={x._id} onClick={() => selectBook(x._id)}>
                <h6>{x.book}</h6>
              </div>
            ))}
          </div>
          <div className="col-sm-5">
            <h4>Nuevo testamento</h4>
            {test2.map((x) => (
              <div key={x._id} onClick={() => selectBook(x._id)}>
                <h6>{x.book}</h6>
              </div>
            ))}
          </div>
          <div className="col-sm-1 ">
            <button className="btn btn-per" onClick={changeNavView}>
              <i class="bi bi-x-lg icon-text-danger"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Books;
