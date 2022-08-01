import {Schema, model, models} from 'mongoose';




const newCharte = new Schema({
    idBook: {type: String},
    charter : {type: String},
    order : {type: Number},
    version: { type: String},
    userCreator : {type: String},
    testament: { type: String},
    like: { type: Number, default: 0},
    view: { type: Number, default: 0},
    verses: [{
        type: Schema.Types.ObjectId,
        ref: "verse"
    }]
});


export default models.charte || model('charte', newCharte);