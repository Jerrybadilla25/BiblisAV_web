import {dbConection} from '../../../config/db';
import Books from '../../../model/modelbook';
import Charter from '../../../model/modelcharter';
import Verses from '../../../model/modelverse';

dbConection()

export default async function books(req, res){
let arrayBook = await Books.find({version: req.body.version}, {_id:1, book:1, order:1, capitulos:1})
let char = await Charter.findOne({version: req.body.version}).populate("verses")
//let newObject = Object.assign(char, arrayBook)
console.log()
res.status(200).json({arrayBook, char})
}