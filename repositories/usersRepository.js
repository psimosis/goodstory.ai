const UserDAO = require("../dao/userDAO");
const Usuario = require('../models/usuario')
const ErrorClasses = require('../utils/error');

class UserRepository {

    constructor() {
        this.db = new UserDAO();
    }

    async crearUsuario(user){
        try {
            await this.db.conectar();
            const userDB = await this.db.crear(user);
        } catch(e){
            throw e
        }
    }

    async obtenerUsuario(username){
        try {
            await this.db.conectar();
            const user = await this.db.obtener(username);
            if(user == null){
                throw new ErrorClasses.Error404()
            }
            return user;
        } catch(e){
            throw e
        }
    }

    async listarUsuarios(){
            await this.db.conectar();
            const lista = await this.db.listar();
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
            throw e
        }
    }

    async getUsrSessionToken(valToken){
        try {
            await this.db.conectar();
            const user = await this.db.obtenerConToken(valToken);
            //if(user == null){
            //    throw new DBError("User not found", 500);
            //}
            return user;
        } catch(e){
            throw e
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

