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
            const user = await this.db.obtener(genero);
            console.log(user);

            if(user == null){
                throw new DBError("User not found", 500);
            }

            return user;
        } catch(e){
            throw new DBError(e.message, e.statusCode);
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