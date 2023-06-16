const HabilityRepository = require('../repositories/habilityRepository')
const Habilidad = require('../models/habilidad')
const ApiResponse = require('../helpers/ApiResponse')

async function crearHabilidadController(req, res) {
    try{
        const u = req.body
        const habilidad = new Habilidad(u.tipo, u.descripcion, req.username);
        const repo = HabilityRepository.getInstance();
        const habilidadCreada = await repo.crearHabilidad(habilidad);
        console.log(habilidadCreada)
        return ApiResponse.sendSuccessResponse(res, 200, "Habilidad creada")
    }catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}


async function obtenerHabilidadController(req, res) {
    const reqId = req.body.id
    const reqUsername = req.username

    if (!reqId) {
        return ApiResponse.sendErrorResponse(res, 400, "Datos de habilidad inválidos")
    }

    try {
        const repo = HabilityRepository.getInstance();
        const habilidad = await repo.obtenerHabilidad(reqId, reqUsername)
        return ApiResponse.sendSuccessResponse(res, 200, habilidad)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function listarHabilidadesController(req, res) {
    try {
        const repo = HabilityRepository.getInstance();
        const lista = await repo.listarHabilidades(req.username);
        
        return ApiResponse.sendSuccessResponse(res, 200, lista)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function borrarHabilidadController(req, res) {
    const reqId = req.body.id
    const reqUsername = req.username

    if (!reqId) {
        return ApiResponse.sendErrorResponse(res, 400, "Datos de habilidad inválidos")
    }

    try {
        const repo = HabilityRepository.getInstance();
        await repo.obtenerHabilidad(reqId, reqUsername)

        const habilidadBorrada = await repo.borrar(reqId, reqUsername)
        
        return ApiResponse.sendSuccessResponse(res, 200, {
            status: "Habilidad eliminada",
            genero: habilidadBorrada.value
        })
    } catch (e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { crearHabilidadController, listarHabilidadesController, obtenerHabilidadController, borrarHabilidadController };