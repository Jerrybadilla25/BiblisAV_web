import React from 'react';

import Head from 'next/head';
import Header from '../component/header';
import Script from 'next/script'
import Footer from '../component/footer/footer';



const Container = (props) => {
    return (
        <div className='row'>
            <Head>
                <title>BibliaAV</title>
                <meta name="description" content="Leer capitulos y versiculos completos de la Biblia Reina Valera 1960" />
                <meta name="description" content="Leer capitulos y versiculos completos de la Biblia del Oso 1906" />
                <meta name="keywords" content="Biblia Reina Valera Del Oso 1906 1960"/>
                <meta name="author" content="Biblia Aliento de Vida"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"></link>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            

            
                
            </Head>
            <Header/>
            <div >
                {props.children}
            </div>
            <Footer/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"/>
                
        </div>
    );
}

export default Container;