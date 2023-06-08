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

    async login(user, token){
        try {
            await this.db.conectar();
            const userDoc = await this.db.obtener(user.username);
    
            // console.log(userDb[0].password)
            // console.log(user.password)
            
            if(userDoc.password == user.password){
                console.log("La pass es correcta")
            }else{
                console.log("La pass es incorrecta")
            }
    
    
            const userDb = new Usuario(
                userDoc.nombre, 
                userDoc.apellido,
                userDoc.username,
                userDoc.password,
                token);
    
            console.log(userDb)
    
            const result = await this.db.update(userDb);
    
            console.log(result)
            //return lista;
        } catch(e){

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

