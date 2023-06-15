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
            throw new ErrorClasses.Error500();
        }
    
        this.db = this.client.db(this.dbName)
    }
    
    listar(username) {
        try{
            return this.db.collection('habilities').find({username: username}).toArray();
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
        
    }

    obtener(id, username) {
        try{
            return this.db.collection('habilities').findOne({tipo: id, username: username});
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    crear(habilidad) {
        try{
            return this.db.collection('habilities').insertOne(habilidad);
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    borrar(id, username) {
        try{
            console.log(id)
            return this.db.collection('habilities').findOneAndDelete({tipo: id, username: username})
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }
}


