const HabilityDAO = require("../dao/habilityDAO");
const Habilidad = require('../models/habilidad')
const DBError = require('../utils/error');

class HabilityRepository {

    constructor() {
        this.db = new HabilityDAO();
    }

    async crearHabilidad(habilidad){
        try {
            await this.db.conectar();
            const hability = await this.db.crear(habilidad);
            console.log(hability);
        } catch(e){
            
        }
    }

    async obtenerHabilidad(habilidad){
        try {
            await this.db.conectar();
            console.log(habilidad);
            const hability = await this.db.obtener(habilidad);
            console.log(habilidad);

            if(hability == null){
                throw new DBError("Hability not found", 500);
            }

            return user;
        } catch(e){
            throw new DBError(e.message, e.statusCode);
        }
    }

    async listarHabilidades(){
            await this.db.conectar();
            const lista = await this.db.listar();
            console.log(lista)
            return lista;
    }

    // async setSessionToken(user, token){
    //     try {
    //         await this.db.conectar();
    //         const userDoc = await this.db.obtener(user.username);  
    //         const userDb = new Usuario(
    //             userDoc.nombre, 
    //             userDoc.apellido,
    //             userDoc.username,
    //             userDoc.password,
    //             token);
    //         const result = await this.db.update(userDb);
    
    //     } catch(e){

    //     }
    // }

    // async getUsrSessionToken(valToken){
    //     try {
    //         await this.db.conectar();
    //         console.log("El token para obtener el usuario en el repositorio es: " + valToken);
    //         const user = await this.db.obtenerConToken(valToken);
    //         console.log("El usuario encontrado es: " + user);
    //         //if(user == null){
    //         //    throw new DBError("User not found", 500);
    //         //}
    //         return user;
    //     } catch(e){
    //         throw new DBError(e.message, e.statusCode);
    //     }
    // }

    static getInstance() {
        if (!HabilityRepository.instance) {
            HabilityRepository.instance = new HabilityRepository();
        }
        return HabilityRepository.instance;
    }
}

module.exports = HabilityRepository;

