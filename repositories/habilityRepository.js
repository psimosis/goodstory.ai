const HabilityDAO = require("../dao/habilityDAO");
const Habilidad = require('../models/habilidad')
const ErrorClasses = require('../utils/error');

class HabilityRepository {

    constructor() {
        this.db = new HabilityDAO();
    }

    async crearHabilidad(habilidad){
        try {
            await this.db.conectar();
            const hability = await this.db.crear(habilidad);
            return hability
        } catch(e){
            throw e;
        }
    }

    async obtenerHabilidad(id, username){
        try {
            await this.db.conectar();
            const hability = await this.db.obtener(id, username);

            if(hability == null){
                throw new ErrorClasses.Error404();
            }

            return hability;
        } catch(e){
            throw e;
        }
    }

    async listarHabilidades(username){
            await this.db.conectar();
            const lista = await this.db.listar(username);
            return lista;
    }

    async borrar(id, username) {
        try{
            await this.db.conectar();
            const habilidadBuscada = await this.db.obtener(id, username)
            if(habilidadBuscada == null){
                throw new ErrorClasses.Error404();
            }
            const habilidadBorrada = await this.db.borrar(id, username)
            return habilidadBorrada    
        } catch(e) {
            throw e;
        }
    }

    static getInstance() {
        if (!HabilityRepository.instance) {
            HabilityRepository.instance = new HabilityRepository();
        }
        return HabilityRepository.instance;
    }
}

module.exports = HabilityRepository;

