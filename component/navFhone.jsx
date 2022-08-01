import React from "react";

const NavFhone = ({ books, getCharter }) => {

    if(books===null){
        return(<div>hada</div>)
    }
  return (
    <div className="nav-barra">
      <div className="d-flex justify-content-between align-items-center barra-menu">

        <nav className="">
          <ul className="nav">
            <li className="item-menu mx-1"><a>Libros</a>
              <ul className="item-menu-1">
                {
                  books.map(x => (
                    <div key={x._id}>
                      <li><a>{x.book}</a>
                        <ul className="item-menu-2">
                          {
                            x.capitulos.map((y, m)=>(
                              <div className="number-item" onClick={()=>getCharter(y)}>
                                <li><a>{m+1}</a></li>
                              </div>
                            ))
                          }
                        </ul>
                      </li>
                    </div>
                  ))
                }
                
              </ul>
            </li>
            <li className="item-menu"><a>Version</a></li>
          </ul>
        </nav>
   


        <form className="">
          <input
            className=""
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavFhone;

