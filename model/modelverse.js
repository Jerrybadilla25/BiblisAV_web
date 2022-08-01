import {Schema, model, models} from 'mongoose';




const newVerse = new Schema({
    title: { type: String},
    originCharter: { type: String},
    numero : {type: Number},
    versiculo: { type: String},
    version: { type: String},
    userCreator : {type: String},
    testament: { type: String},
    like: { type: Number, default: 0},
    view: { type: Number, default: 0},
});

export default models.verse || model('verse', newVerse);