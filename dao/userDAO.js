const { MongoClient, ServerApiVersion } = require('mongodb');
const ErrorClasses = require('../utils/error');

module.exports = class UserDAO {
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
    
    listar() {
        try{
            return this.db.collection('users').find().toArray();
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
        
    }

    obtener(username) {
        try{
            return this.db.collection('users').findOne({username: username});
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    obtenerConToken(token) {
        try{
            console.log("El token del usuario en DAO a obtener es: " + token);
            return this.db.collection('users').findOne({token: token});
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    update(user){
        try{
            return this.db.collection('users').updateOne({ "username": user.username },
            { $set: {
              "nombre": user.nombre,
              "apellido": user.apellido,
              "username": user.username,
              "password": user.password,
              "token": user.token
                }
            })
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    crear(user) {
        try{
            return this.db.collection('users').insertOne(user);
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }
}


