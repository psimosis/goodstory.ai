const { MongoClient, ServerApiVersion } = require('mongodb');


module.exports = class AppDAO {
    constructor() {
        const uri = "mongodb+srv://lucasmfunes:mtEJ7j524rkbAuRF@ort-tp2.pkd5kbz.mongodb.net/?retryWrites=true&w=majority";
        this.client = new MongoClient(uri)
        this.dbName = 'goodstory'
    }

    async conectar() {
        try {
          await this.client.connect()
        } catch (e) {
          console.log("No se pudo conectar a MongoDB")
        }
    
        this.db = this.client.db(this.dbName)
    }
    
    obtenerTodas() {
        return this.db.collection('users').find().toArray();
    }

    crearUser(user) {
        return this.db.collection('users').insertOne(user);
    }
}


