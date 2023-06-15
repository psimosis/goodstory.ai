const CharacterDAO = require("../dao/characterDAO");
const personaje = require('../models/personaje')
const ErrorClasses = require('../utils/error');

class CharacterRepository {

    constructor() {
        this.db = new CharacterDAO();
    }

    async crearPersonaje(personaje){
        try {
            await this.db.conectar();
            const personajeCreado = await this.db.crear(personaje);
        } catch(e){
            throw new DBError(e.message(), 500);
        }
    }

    async obtenerPersonaje(id, username){
        try {
            await this.db.conectar();
            const personajeDB = await this.db.obtener(id, username);

            if(personajeDB == null){
                throw new ErrorClasses.Error404();
            }
            return personajeDB;
        } catch(e){
            throw e;
        }
    }

    async listarPersonajes(username){
            await this.db.conectar();
            const personajesLista = await this.db.listar(username);
            return personajesLista;
    }

    async borrar(id, username) {
        try{
            await this.db.conectar();
            const personajeEncontrado = await this.db.obtener(id, username)

            if(personajeEncontrado == null){
                throw new ErrorClasses.Error404();
            }

            const personajeBorrado = await this.db.borrar(id, username)
            return personajeBorrado.value    
        } catch(e) {
            throw e;
        }
    }



    static getInstance() {
        if (!CharacterRepository.instance) {
            CharacterRepository.instance = new CharacterRepository();
        }
        return CharacterRepository.instance;
    }
}

module.exports = CharacterRepository;

