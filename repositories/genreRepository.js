const GenreDAO = require("../dao/genreDao");
const Usuario = require('../models/usuario')
const DBError = require('../utils/error');

class GenreRepository {
    constructor() {
        this.db = new GenreDAO();
    }

    async crear(genero) {
        try {
            await this.db.conectar();
            const generoCreado = await this.db.crear(genero);
            console.log(generoCreado);
        } catch(e){
            throw new Error(e.message)
        }
    }

    async listar() {
        await this.db.conectar();
        const lista = await this.db.listar();
        console.log(lista)
        return lista;
    }

    async obtenerGenero(genero) {
        try {
            await this.db.conectar();
            console.log(genero);
            const generoObtenido = await this.db.obtener(genero);
            console.log(generoObtenido);

            if(generoObtenido == null){
                throw new DBError("Genre not found", 500);
            }
            return generoObtenido;
        } catch(e){
            throw new DBError(e.message, e.statusCode);
        }
    }

    async borrar(genero) {
        try{
            await this.db.conectar();
            const generoBuscado = await this.obtenerGenero({
                nombre: genero.nombre,
                username: genero.username
            })
            const generoBorrado = await this.db.borrar(generoBuscado)
            return generoBorrado
        } catch(e) {
            throw new Error(e.message)
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