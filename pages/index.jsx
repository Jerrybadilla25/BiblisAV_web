import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "../component/Container";

import NavHelp from "../component/navhelp";
import Libros from "../component/body/libros";
import Cuerpo from "../component/body/cuerpo";
import NavFhone from "../component/navFhone";
import Books from "../component/Books";
import Charter from "../component/Charter";

export default function Home() {
  //const RUTA = "http://localhost:3000";
  const RUTA = "http://bibliaav"
  const [versionView, setVersionView] = useState(false);
  const [version, setVersion] = useState("Reina_Valera_1960");
  const [books, setBooks] = useState(null);
  const [charterView, setCharterView] = useState(null);
  const [numberCharter, setNumberCharter] = useState(true);

  const [charterNumber, setCharterNumber] = useState(null);

  const [navView, setNavView] = useState(true);
  const [bodyView, setBodyView] = useState(true);
  const [charterViews, setCharterViews] = useState(true);

  React.useEffect(() => {
    getBooks();
  }, []);

  const isVersionView = () => {
    setVersionView(!versionView);
  };

  const selectBook = (id) => {
    let data = books.find((x) => x._id === id);
    setCharterNumber(data);
    setCharterViews(false);
  };

  const atras = () => {
    setCharterNumber(null);
  };

  const rewCharter = () => {
    setCharterViews(true);
  };

  const changeNavView = () => {
    setNavView(!navView);
    setBodyView(!bodyView);
  };

  const getCharter = async (id) => {
    try {
      const data = await fetch(`${RUTA}/api/getBooks/getCharter`, {
        method: "POST",
        body: JSON.stringify({ version: version, idCharter: id }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const res = await data.json();
      setCharterView(res);
      setCharterNumber(null);
      setNavView(!navView);
      setCharterViews(true);
      setBodyView(!bodyView);
    } catch (error) {
      console.log(error);
    }
  };

  const getBooks = async () => {
    try {
      const data = await fetch(`${RUTA}/api/getBooks/getbook`, {
        method: "POST",
        body: JSON.stringify({ version: version }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const res = await data.json();
      setBooks(res.arrayBook);
      setCharterView(res.char);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {navView ? (
        <NavFhone changeNavView={changeNavView} />
      ) : (
        <>
          {charterViews ? (
            <Books
              books={books}
              changeNavView={changeNavView}
              selectBook={selectBook}
            />
          ) : (
            <Charter
              charterNumber={charterNumber}
              rewCharter={rewCharter}
              getCharter={getCharter}
            />
          )}
        </>
      )}

      <div className="row">
        <div className="col-sm-12 col-md-3 col-xl-2 display-none">
          <Libros
            books={books}
            selectBook={selectBook}
            charterNumber={charterNumber}
            atras={atras}
            getCharter={getCharter}
          />
        </div>
        <div className="col-sm-12 col-md-7 col-xl-8 body-per">
          {bodyView ? <Cuerpo charterView={charterView} /> : <h6></h6>}
        </div>
        <div className="col-sm-12 col-md-2 col-xl-2 box-libro display-none"></div>
      </div>
    </Container>
  );
}

/*
 <NavHelp versionView={versionView} isVersionView={isVersionView}/>
 */
