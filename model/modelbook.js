import {Schema, model, models} from 'mongoose';


const newBook = new Schema({
    nomenclatura: {type: String},
    book : {type: String},
    userCreator : {type: String},
    version: { type: String},
    testament: { type: String},
    order: { type: Number},
    like: { type: Number, default: 0},
    view: { type: Number, default: 0},
    capitulos: [{
        type: Schema.Types.ObjectId,
        ref: "charte"
    }]
});

export default models.book || model('book', newBook);