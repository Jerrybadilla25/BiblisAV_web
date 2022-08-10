import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "../component/Container";


import Libros from "../component/body/libros";
import Cuerpo from "../component/body/cuerpo";
import NavFhone from "../component/navFhone";
import Books from "../component/Books";
import Charter from "../component/Charter";

export default function Home() {
  //const RUTA = "http://localhost:3000";
  const RUTA = "https://bibliaav.ml"
  const [versionView, setVersionView] = useState(false);
  const [version, setVersion] = useState("Reina_Valera_1960");
  const [books, setBooks] = useState(null);
  const [charterView, setCharterView] = useState(null);
  const [numberCharter, setNumberCharter] = useState(true);

  const [decks, setDeck]=useState([
      { _id: '6274668957aefaff092e32d4', charter: 'Apocalipsis 22' },
      { _id: '62732467a09db64c94514890', charter: 'Genesis 2' }
    ]
  )

  const [charterNumber, setCharterNumber] = useState(null);

  const [navView, setNavView] = useState(true);
  const [bodyView, setBodyView] = useState(true);
  const [charterViews, setCharterViews] = useState(true);
  const [tamanoText, setTamanoText]=useState(false)

  const [font, setFont]=useState("font-text-normal")
  const [fontTitle, setFontTitle]=useState("font-text-normal-title")

  const versiones = [
    "Reina_Valera_1960", "Biblia_del_oso_1569"
  ]

  

  //document.querySelector(".input-blue-border").style.borderColor = "red";

  const fontText = (fuente, title) => {
    setFont(fuente)
    setFontTitle(title)
    var elemento = document.querySelectorAll(".myDIV");
    for (var i = 0; i < elemento.length; i++) {
      elemento[i].classList.remove(font);
      elemento[i].classList.add(fuente);
    }
    setTamanoText(!tamanoText);
  };


  const onChangeversion = (e)=>{
    setVersion(e.target.value)
  }

  useEffect(() => {
    async function getBooks (){ 
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


    getBooks();
    
  }, [version]);

  //value={firstName}   name="firstName" 

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
      console.log(res)
      if(res.data1){
        setCharterView(res.data1);
        setDeck(res.deck.deck)
      }else{
        setCharterView(res.data2);
        setDeck(res.deck1.deck)
      }
      setCharterNumber(null);
      setNavView(true);
      setCharterViews(true);
      setBodyView(true);
    } catch (error) {
      console.log(error);
    }
  };

  /*
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
  */

    return (
      <Container>
        {navView ? (
          <NavFhone 
          changeNavView={changeNavView}
          versiones={versiones}
          onChangeversion={onChangeversion}
          tamanoText={tamanoText}
          setTamanoText={setTamanoText}
          fontText={fontText}
          />
        ) : (
          <>
            {charterViews ? (
              <Books
                books={books}
                changeNavView={changeNavView}
                selectBook={selectBook}
                font={font}
              />
            ) : (
              <Charter
                charterNumber={charterNumber}
                rewCharter={rewCharter}
                getCharter={getCharter}
                changeNavView={changeNavView}
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
            {bodyView ? 
            <Cuerpo 
            charterView={charterView} 
            changeNavView={changeNavView}
            decks={decks}
            getCharter={getCharter}
            /> : <h6></h6>}
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 box-libro display-none"></div>
        </div>
      </Container>
    );
  

  
  
}

/*
 <NavHelp versionView={versionView} isVersionView={isVersionView}/>
 */
