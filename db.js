import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let db;

async function conectar() {
    try {
        await client.connect();
        db = client.db('hojadeVida');
        console.log("Conectado a la base de datos");

    } catch(error){
        console.error("Error al conectar a la base de datos", error);
    }
}

conectar();

export default {
    collection: (name) => db.collection(name)
}