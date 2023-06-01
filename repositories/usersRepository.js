const AppDAO = require("../dao/appDAO");

class UserRepository {

    constructor() {
        this.db = new AppDAO();
    }

    async crear(user){
        await this.db.conectar();
        const test = await this.db.crearUser(user);
        console.log(test);
    }

    async listar(){
        await this.db.conectar();
        const lista = await this.db.obtenerTodas();
        console.log(lista)
        return lista;
    }
}

module.exports = UserRepository;

