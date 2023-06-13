const { MongoClient, ServerApiVersion } = require('mongodb');

module.exports = class HabilityDAO {
    constructor() {
        const uri = "mongodb+srv://lucasmfunes:mtEJ7j524rkbAuRF@ort-tp2.pkd5kbz.mongodb.net/?retryWrites=true&w=majority";
        this.client = new MongoClient(uri)
        this.dbName = 'goodstory'
    }

    async conectar() {
        try {
          await this.client.connect()
        } catch (e) {
          throw new Error(e.message)
        }
    
        this.db = this.client.db(this.dbName)
    }
    
    listar() {
        try{
            return this.db.collection('habilities').find().toArray();
        } catch (e) {
            throw new Error(e.message)
        }
        
    }

    obtener(id) {
        try{
            return this.db.collection('habilities').findOne({tipo: id});
        } catch (e) {
            throw new Error(e.message)
        }
    }

    crear(habilidad) {
        try{
            return this.db.collection('habilities').insertOne(habilidad);
        } catch (e) {
            throw new Error(e.message)
        }
    }

    borrar(id) {
        try{
            console.log(id)
            return this.db.collection('habilities').findOneAndDelete({tipo: id})
        } catch (e) {
            throw new Error(e.message)
        }
    }
}


