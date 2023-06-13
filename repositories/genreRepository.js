const GenreDAO = require("../dao/genreDao");
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
                throw new ErrorClasses.Error404()
            }
            return generoObtenido
        } catch(error){
            throw error
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