import {dbConection} from '../../../config/db';
import Books from '../../../model/modelbook';
import Charter from '../../../model/modelcharter';
import Verses from '../../../model/modelverse';

dbConection()

export default async function books(req, res){
    const {version, idCharter}=req.body
    let data = await Charter.findById(idCharter).populate("verses")
    res.status(200).json(data)
}