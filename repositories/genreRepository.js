const GenreDAO = require("../dao/genreDao");
const Usuario = require('../models/usuario')
const ClientError = require('../utils/error');
const ServerError = require('../utils/error');

class GenreRepository {
    constructor() {
        this.db = new GenreDAO();
    }

    async crear(genero) {
        try {
            await this.db.conectar();
            const generoCreado = await this.db.crear(genero);
            return generoCreado
            //if genero ya esta creado, throw new ClientError
        } catch(e){
            if (e instanceof ClientError) {
                throw e;
            } else {
                throw new ServerError("Internal server error", 500);
            }
        }
    }

    async listar() {
        await this.db.conectar();
        const lista = await this.db.listar();
        return lista;
    }

    async obtenerGenero(genero) {
        try {
            await this.db.conectar();
            const generoObtenido = await this.db.obtener(genero);

            if (generoObtenido == null){
                throw new ClientError("Genre not found", 404);
            }
            return generoObtenido
        } catch(e){
            //throw new ServerError(e.message, e.statusCode);
            if (e instanceof ClientError) {
                throw e;
            } else {
                throw new ServerError("Internal server error", 500);
            }
        }
    }

    async borrar(genero) {
        try{
            const generoBuscado = await this.obtenerGenero({
                nombre: genero.nombre,
                username: genero.username
            })
            await this.db.conectar();
            const generoBorrado = await this.db.borrar(generoBuscado)
            console.log("Género borrado: " + generoBorrado)
            console.log("Género borrado: " + generoBorrado.value)
            
            return generoBorrado.value
        } catch(e) {
            if (e instanceof ClientError) {
                throw e;
            } else {
                throw new ServerError("Internal server error", 500);
            }
        }
    }

    static getInstance() {
        if (!GenreRepository.instance) {
            GenreRepository.instance = new GenreRepository();
        }
        return GenreRepository.instance;
    }
}

module.exports = GenreRepository;