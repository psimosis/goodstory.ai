const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const ErrorClasses = require('../utils/error');

module.exports = class CharacterDAO {
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
            return this.db.collection('characters').find({username: username}).toArray();
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    obtener(id, username) {
        try{
            return this.db.collection('characters').findOne({id: id, username: username})
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    crear(personaje) {
        try{
            return this.db.collection('characters').insertOne(personaje);
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    update(id, username, personaje){
        try{
            return this.db.collection('characters').updateOne({ id: id, username: username },
            { $set: {
                "nombre": personaje.nombre,
                "tipo" : personaje.tipo,
                "descripcion": personaje.descripcion,
                "edad": personaje.edad,
                "habilidades": personaje.habilidades
                }
            })
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    borrar(id, username) {
        try{
            return this.db.collection('characters').findOneAndDelete({id: id, username: username})
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }
}


