const CharacterRepository = require('../repositories/characterRepository')
const Personaje = require('../models/personaje')
const ErrorClasses = require('../utils/error');
const ApiResponse = require('../helpers/ApiResponse');

async function crearPersonajeController(req, res) {
    console.log(req.username)
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
    res.status(200)
    res.json({
        "status": "Character created"
    }).send
}

async function obtenerPersonajeController(req, res) {

    const personajeId = req.body.id
    const username = req.username
    console.log(username)

    if (!personajeId || !username) {
        return res.status(400).json({
            "status": "Datos de personaje inválido"
        });
    }
    try {
        const repo = CharacterRepository.getInstance();
        const personajeEncontrado = await repo.obtenerPersonaje(personajeId, username)
        return ApiResponse.sendSuccessResponse(res, 200, personajeEncontrado)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function listarPersonajesController(req, res) {
    try {
        const repo = CharacterRepository.getInstance();
        const listaPersonajes = await repo.listarPersonajes(req.username);
        
        res.status(200)
        res.send(listaPersonajes)
    } catch(e) {
        res.status(500)
        res.json({
            "status": "Internal server error"
        }).send()
    }
}

async function borrarPersonajeController(req, res) {
    const id = req.body.id

    if (!id) {
        return res.status(400).json({
            "status": "Datos de personaje inválidos"
        });
    }

    try {
        const repo = CharacterRepository.getInstance();
        const personajeBorrado = await repo.borrar(id, req.username)
        console.log(personajeBorrado)
        return ApiResponse.sendSuccessResponse(res, 200, personajeBorrado)
    } catch (e) {
        return res.status(500).json({
            "status": e.message
        });
    }
}

module.exports = { crearPersonajeController, obtenerPersonajeController, listarPersonajesController, borrarPersonajeController };