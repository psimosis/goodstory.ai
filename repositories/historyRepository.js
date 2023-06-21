const HistoryDAO = require("../dao/historyDAO");
const GenHistoryDAO = require('./genHistoryRepository')
const ErrorClasses = require('../utils/error');

class HistoryRepository {
    constructor() {
        this.db = new HistoryDAO();
        this.genHistorydb = new GenHistoryDAO();
    }

    async crearHistoria(historia) {
        try {
            await this.db.conectar();
            const historiaCreada = await this.db.crear(historia);
            if(historiaCreada.acknowledged == true){
                return historia.id
            } else{
                throw new ErrorClasses.Error500()
            }
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

    async listarHistorias(username){
        await this.db.conectar();
        const historiasLista = await this.db.listar(username);
        return historiasLista;
    }

    static getInstance() {
        if (!HistoryRepository.instance) {
            HistoryRepository.instance = new HistoryRepository();
        }
        return HistoryRepository.instance;
    }
}


module.exports = HistoryRepository;