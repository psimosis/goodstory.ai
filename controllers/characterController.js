const CharacterRepository = require('../repositories/characterRepository')
const Personaje = require('../models/personaje')
const ErrorClasses = require('../utils/error');
const ApiResponse = require('../helpers/ApiResponse');

async function crearPersonajeController(req, res) {
    try {
        const body = req.body
        const personaje = new Personaje(
                body.nombre,
                body.tipo,
                body.descripcion,
                body.edad,
                req.username
            );
        const repo = CharacterRepository.getInstance();
        repo.crearPersonaje(personaje);
        return ApiResponse.sendSuccessResponse(res, 200, "Personaje creado")
    } catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function obtenerPersonajeController(req, res) {

    const personajeId = req.body.id
    const username = req.username

    if (!personajeId || !username) {
        throw new ErrorClasses.Error400()
    }
    try {
        const repo = CharacterRepository.getInstance();
        const personajeEncontrado = await repo.obtenerPersonaje(personajeId, username)
        return ApiResponse.sendSuccessResponse(res, 200, personajeEncontrado)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function anadirHabilidadController(req, res) {
    try {
        const id = req.body.id
        const habilidad = req.body.habilidad
        const repo = CharacterRepository.getInstance();
        const resultado = await repo.anadirHabilidad(id, req.username, habilidad);

        if(resultado.acknowledged == true){
            return ApiResponse.sendSuccessResponse(res, 200, "Habilidad agregada")
        }else{
            return ApiResponse.sendErrorResponse(res, 500, "No se pudo actualizar")
        }
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function listarPersonajesController(req, res) {
    try {
        const repo = CharacterRepository.getInstance();
        const listaPersonajes = await repo.listarPersonajes(req.username);
        
        return ApiResponse.sendSuccessResponse(res, 200, listaPersonajes)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function borrarPersonajeController(req, res) {
    const id = req.body.id

    if (!id) {
        throw new ErrorClasses.Error400()
    }

    try {
        const repo = CharacterRepository.getInstance();
        const personajeBorrado = await repo.borrar(id, req.username)
        console.log(personajeBorrado)
        return ApiResponse.sendSuccessResponse(res, 200, {
            status: "Personaje eliminado",
            genero: personajeBorrado.value
        })
    } catch (e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { crearPersonajeController, obtenerPersonajeController, 
    listarPersonajesController, borrarPersonajeController, anadirHabilidadController };