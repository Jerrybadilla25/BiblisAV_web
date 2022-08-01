import {Schema, model, models} from 'mongoose';




const newVersion = new Schema({
    versionBible: {type: String},
    descripcion: {type: String},
    copyright: {type: String},
    userCreator : {type: String},
    books: [{
        type: Schema.Types.ObjectId,
        ref: "book"
    }]
});

export default models.version || model('version', newVersion);