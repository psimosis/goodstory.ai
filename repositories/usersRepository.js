const UserDAO = require("../dao/userDAO");
const Usuario = require('../models/usuario')
const DBError = require('../utils/error');

class UserRepository {

    constructor() {
        this.db = new UserDAO();
    }

    async crearUsuario(user){
        try {
            await this.db.conectar();
            const userDB = await this.db.crear(user);
            console.log(userDB);
        } catch(e){

        }
    }

    async obtenerUsuario(username){
        try {
            await this.db.conectar();
            console.log(username);
            const user = await this.db.obtener(username);
            console.log(user);

            if(user == null){
                throw new DBError("User not found", 500);
            }
            return user;
        } catch(e){
            throw new DBError(e.message, e.statusCode);
        }
    }

    async listarUsuarios(){

            await this.db.conectar();
            const lista = await this.db.listar();
            console.log(lista)
            return lista;
    }

    async setSessionToken(user, token){
        try {
            await this.db.conectar();
            const userDoc = await this.db.obtener(user.username);  
            const userDb = new Usuario(
                userDoc.nombre, 
                userDoc.apellido,
                userDoc.username,
                userDoc.password,
                token);
            const result = await this.db.update(userDb);
    
        } catch(e){

        }
    }

    async getUsrSessionToken(valToken){
        try {
            await this.db.conectar();
            console.log("El token para obtener el usuario en el repositorio es: " + valToken);
            const user = await this.db.obtenerConToken(valToken);
            console.log("El usuario encontrado es: " + user);
            //if(user == null){
            //    throw new DBError("User not found", 500);
            //}
            return user;
        } catch(e){
            throw new DBError(e.message, e.statusCode);
        }
    }

    static getInstance() {
        if (!UserRepository.instance) {
          UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }
}

module.exports = UserRepository;

