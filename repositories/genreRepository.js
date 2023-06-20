const GenreDAO = require("../dao/genreDAO");
const Usuario = require('../models/usuario')
const ErrorClasses = require('../utils/error');

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
        } catch(error){
            throw error
        }
    }

    async listar(username) {
        await this.db.conectar();
        const lista = await this.db.listar(username);
        return lista;
    }

    async obtenerGenero(id, username) {
        try {
            await this.db.conectar();
            const generoObtenido = await this.db.obtener(id, username);

            if (generoObtenido == null){
                throw new ErrorClasses.Error404()
            }
            return generoObtenido
        } catch(error){
            throw error
        }
    }

    async borrar(id, username) {
        try{
            const generoBuscado = await this.obtenerGenero(id, username)
            await this.db.conectar();
            const generoBorrado = await this.db.borrar(id, username)
            return generoBorrado.value
        } catch(error) {
            throw error
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