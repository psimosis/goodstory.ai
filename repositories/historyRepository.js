const HistoryDAO = require("../dao/historyDAO");
const ErrorClasses = require('../utils/error');

class HistoryRepository {
    constructor() {
        this.db = new HistoryDAO();
    }

    async crearHistoria(historia) {
        try {
            await this.db.conectar();
            const historiaCreada = await this.db.crear(historia);
            return historiaCreada
            //if historia ya esta creado, throw new ClientError
        } catch(error){
            throw error
        }
    }

    async generarHistoria(id, username){
        try {
            await this.db.conectar();
            const history = await this.db.obtener(id, username);

            if(history == null){
                throw new ErrorClasses.Error404();
            }

            return history;
        } catch(e){
            throw e;
        }
    }

    static getInstance() {
        if (!HistoryRepository.instance) {
            HistoryRepository.instance = new HistoryRepository();
        }
        return HistoryRepository.instance;
    }
}


module.exports = HistoryRepository;