const { MongoClient } = require('mongodb');
const ServerError = require('../utils/error');

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
          throw new ServerError(e.message)
        }
        this.db = this.client.db(this.dbName)
    }

    crear(genero) {
        try{
            return this.db.collection('genres').insertOne(genero);
        } catch (e) {
            throw new ServerError(e.message, 500)
        }
    }
    
    listar() {
        try{
            return this.db.collection('genres').find().toArray();
        } catch (e) {
            throw new ServerError(e.message, 500)
        }
        
    }

    obtener(genero) {
        try{
            return this.db.collection('genres').findOne({
                nombre: genero.nombre,
                username: genero.username
            });
        } catch (e) {
            throw new ServerError(e.message, 500)
        }
    }

    update(genero){
        try{
            return this.db.collection('genres').updateOne({ "username": user.username },
            { $set: {
              "nombre": user.nombre,
              "apellido": user.apellido,
              "username": user.username,
              "password": user.password,
              "token": user.token
                }
            })
        } catch (e) {
            throw new ServerError(e.message, 500)
        }
    }

    borrar(genero) {
        try{
            return this.db.collection('genres').findOneAndDelete({nombre: genero.nombre, username: genero.username})
        } catch (e) {
            throw new ServerError(e.message, 500)
        }
    }
    
}


