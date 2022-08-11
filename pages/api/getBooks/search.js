import {dbConection} from '../../../config/db';
import Books from '../../../model/modelbook';
import Charter from '../../../model/modelcharter';
import Verses from '../../../model/modelverse';

import fullRV from '../../../Biblias/versosall.json';
import fullBO from '../../../Biblias/versosall2.json';
import fullCharterRV from '../../../Biblias/ReinaValera/buscarCapituloReinaValera.json';
import fullCharterBO from '../../../Biblias/Oso/buscarCapituloOso.json';

dbConection()

export default async function books(req, res){
const {search, version}=req.body
let a = search.split(" ")
console.log(a)
let idx = a.length
let palabra = a[0]
let number = a[1]
switch (version) {
    case "Reina_Valera_1960":
        var RV = await ReinaValera(idx, palabra, number)
        res.status(200).json(RV)
        break;
    case "Biblia_del_oso_1569":
        var BO = BibliaOso(idx, palabra, number)
        res.status(200).json(BO)
        break;

    
}
}


const ReinaValera = async (idx, palabra, number)=>{
    if(idx===1){
        console.log("1")
        let dataFilter = fullRV.filter((x) =>
          x.versiculo.toUpperCase().includes(palabra.toUpperCase())
        );
        return {palabra: dataFilter}
    }
    if(idx===2){
        console.log("1 sub 1")
        let a = number.split(":")
        let idx2 = a.length
        console.log(a, idx2)
        if(idx2===1){
            console.log("1 sub 2")
            let newPalabra = palabra +" "+ number
            let filter1 = fullCharterRV.filter(x => x.charter.toUpperCase().includes(newPalabra.toUpperCase()))
            return {idCharter: filter1[0]}
        }
        if(idx2===2){
            let c = a[1].split("-")
            let idxC = c.length
            console.log(c)
            if(idxC===1){
                console.log("1 sub 3")
                let newPalabra = palabra +" "+ a[0]
                let filter1 = fullCharterRV.filter(x => x.charter.toUpperCase().includes(newPalabra.toUpperCase()))
                let charter = await Charter.findById(filter1[0]._id)
                let idxVerse = a[1]-1
                let verses = []
                let versiculo = await Verses.findById(charter.verses[idxVerse])
                verses.push(versiculo)
                let newObje = {
                    idBook: charter.idBook,
                    charter: charter.charter,
                    verses: verses
                }
                return {obj: newObje}

            }
            if(idxC===2){
                console.log("1 sub 4")
                let newPalabra = palabra +" "+ a[0]
                let filter1 = fullCharterRV.filter(x => x.charter.toUpperCase().includes(newPalabra.toUpperCase()))
                let charter = await Charter.findById(filter1[0]._id)
                let verses = []
                for(var i =c[0]-1; i<c[1]; i++){
                    let versiculo = await Verses.findById(charter.verses[i])
                    verses.push(versiculo)
                }
                let newObje = {
                    idBook: charter.idBook,
                    charter: charter.charter,
                    verses: verses
                }
                return {obj2: newObje}
            }
        }
    }
    return {msj: "No pudimos encontrar nada"}
}




const BibliaOso = async (idx, palabra, number)=>{
    if(idx===1){
        console.log("1")
        let dataFilter = fullBO.filter((x) =>
          x.versiculo.toUpperCase().includes(palabra.toUpperCase())
        );
        return {palabra: dataFilter}
    }
    if(idx===2){
        console.log("1 sub 1")
        let a = number.split(":")
        let idx2 = a.length
        console.log(a, idx2)
        if(idx2===1){
            console.log("1 sub 2")
            let newPalabra = palabra +" "+ number
            let filter1 = fullCharterBO.filter(x => x.charter.toUpperCase().includes(newPalabra.toUpperCase()))
            return {idCharter: filter1[0]}
        }
        if(idx2===2){
            let c = a[1].split("-")
            let idxC = c.length
            console.log(c)
            if(idxC===1){
                console.log("1 sub 3")
                let newPalabra = palabra +" "+ a[0]
                let filter1 = fullCharterBO.filter(x => x.charter.toUpperCase().includes(newPalabra.toUpperCase()))
                let charter = await Charter.findById(filter1[0]._id)
                let idxVerse = a[1]-1
                let verses = []
                let versiculo = await Verses.findById(charter.verses[idxVerse])
                verses.push(versiculo)
                let newObje = {
                    idBook: charter.idBook,
                    charter: charter.charter,
                    verses: verses
                }
                return {obj: newObje}

            }
            if(idxC===2){
                console.log("1 sub 4")
                let newPalabra = palabra +" "+ a[0]
                let filter1 = fullCharterBO.filter(x => x.charter.toUpperCase().includes(newPalabra.toUpperCase()))
                let charter = await Charter.findById(filter1[0]._id)
                let verses = []
                for(var i =c[0]-1; i<c[1]; i++){
                    let versiculo = await Verses.findById(charter.verses[i])
                    verses.push(versiculo)
                }
                let newObje = {
                    idBook: charter.idBook,
                    charter: charter.charter,
                    verses: verses
                }
                return {obj2: newObje}
            }
        }
    }
    return {msj: "No pudimos encontrar nada"}
}



