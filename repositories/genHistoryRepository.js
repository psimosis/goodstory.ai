const GenHistoryDAO = require("../dao/genHistoryDAO");
const ErrorClasses = require('../utils/error');

class GenHistoryRepository {
    constructor() {
        this.db = new GenHistoryDAO();
    }

    async crearGenHistoria(genHistoria) {
        try {
            await this.db.conectar();
            const historiaCreada = await this.db.crear(genHistoria);
            return historiaCreada
        } catch(error){
            throw error
        }
    }

    static getInstance() {
        if (!GenHistoryRepository.instance) {
            GenHistoryRepository.instance = new GenHistoryRepository();
        }
        return GenHistoryRepository.instance;
    }
}


module.exports = GenHistoryRepository;