const { MongoClient } = require('mongodb');
const ErrorClasses = require('../utils/error');

module.exports = class HistoryDAO {

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

    crear(historia) {
        try{
            return this.db.collection('histories').insertOne(historia);
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    obtener(id, username) {
        try{
            return this.db.collection('histories').findOne({id: id, username: username})
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

}