const { MongoClient } = require('mongodb');
const ErrorClasses = require('../utils/error');

module.exports = class GenreDAO {
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

    crear(genero) {
        try{
            return this.db.collection('genres').insertOne(genero);
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }
    
    listar(username) {
        try{
            return this.db.collection('genres').find({username: username}).toArray();
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
        
    }

    obtener(id, username) {
        try{
            return this.db.collection('genres').findOne({
                    id: id,
                    username: username
            });
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    borrar(id, username) {
        try{
            return this.db.collection('genres').findOneAndDelete({id: id, username: username})
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }
    
}


