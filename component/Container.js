import React from 'react';

import Head from 'next/head';
import Header from '../component/header';
import Script from 'next/script'



const Container = (props) => {
    return (
        <div>
            <Head>
                <title>Biblia AV</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"></link>
               <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
               <link rel="preconnect" href="https://fonts.googleapis.com"></link>
             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Oswalddisplay=swap" rel="stylesheet"></link>

            
                
            </Head>
            <Header/>
            <div>
                {props.children}
            </div>
            
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"/>
                
        </div>
    );
}

export default Container;