const HabilityDAO = require("../dao/habilityDAO");
const Habilidad = require('../models/habilidad')
const DBError = require('../utils/error');

class HabilityRepository {

    constructor() {
        this.db = new HabilityDAO();
    }

    async crearHabilidad(habilidad){
        try {
            await this.db.conectar();
            const hability = await this.db.crear(habilidad);
        } catch(e){
            
        }
    }

    async obtenerHabilidad(habilidad){
        try {
            await this.db.conectar();
            const hability = await this.db.obtener(habilidad.tipo);
            if(hability == null){
                throw new DBError("Hability not found", 500);
            }

            return hability;
        } catch(e){
            throw new DBError(e.message, e.statusCode);
        }
    }

    async listarHabilidades(){
            await this.db.conectar();
            const lista = await this.db.listar();
            return lista;
    }

    async borrar(habilidad) {
        try{
            await this.db.conectar();
            const habilidadBuscada = await this.db.obtener(habilidad.tipo)
            if(habilidadBuscada == null){
                throw new Error("Habilidad no encontrada")
            }
            const habilidadBorrada = await this.db.borrar(habilidadBuscada.tipo)
            return habilidadBorrada    
        } catch(e) {
            throw new Error(e.message)
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

