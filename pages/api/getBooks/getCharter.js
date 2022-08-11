import { dbConection } from "../../../config/db";
import Books from "../../../model/modelbook";
import Charter from "../../../model/modelcharter";
import Verses from "../../../model/modelverse";

import RV from "../../../Biblias/ReinaValera/buscarCapituloReinaValera.json";
import BO from "../../../Biblias/Oso/buscarCapituloOso.json";

dbConection();

//0 al 1189 capitulos 

export default async function books(req, res) {
  const { version, idCharter } = req.body;
  switch (version) {
    case "Reina_Valera_1960":
        let data1 = await Charter.findById(idCharter).populate("verses");
        let idx1 = RV.findIndex((x) => x._id === idCharter);
        let result = charter(idx1)
        let ant = RV[result.ant]
        let sig = RV[result.sig]
        let deck = {deck: [ant, sig]}
        res.status(200).json({data1, deck});
      break;
    case "Biblia_del_oso_1569":
        let data2 = await Charter.findById(idCharter).populate("verses");
        let idx2 = BO.findIndex((x) => x._id === idCharter);
        let result1 = charter(idx2)
        let ant1 = BO[result1.ant]
        let sig1 = BO[result1.sig]
        let deck1 = {deck: [ant1, sig1]}
        res.status(200).json({data2, deck1});
      break;
  }
}

const charter = (idx)=>{
    let a = idx-1
    let b = idx+1
    if(a<0){
        let ant = 1188
        let sig = idx+1
        let data = {ant: ant, sig: sig}
        return data
    }
    if(b>1188){
        let ant = idx-1
        let sig = 0
        let data = {ant: ant, sig: sig}
        return data
    }else{
        let ant = idx-1
        let sig = idx+1
        let data = {ant: ant, sig: sig}
        return data
    }  
}
