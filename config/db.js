import{ connect, connection } from 'mongoose';
require('dotenv').config();




const conn = {
    isConnected : false
}

export async function dbConection(){
    if (conn.isConnected) return;

    const db = await connect(process.env.URI, {
        useNewUrlParser: true, useUnifiedTopology: true,
        autoIndex: false
    })
    conn.isConnected= db.connections[0].readyState
    console.log(db.connection.db.databaseName)

}

connection.on("connected", ()=>{
    console.log("Mongo is enable")
})

connection.on("error", (err)=>{
    console.log(err)
})

