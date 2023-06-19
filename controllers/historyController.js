const HistoryRepository = require('../repositories/historyRepository')
const GenreRepository = require("../repositories/genreRepository")
const Historia = require('../models/historia')
const ApiResponse = require('../helpers/ApiResponse')

async function crearHistoriaController(req, res) {
    try{
        const u = req.body
        const historia = new Historia(
            u.title,
            u.descripcion, 
            u.genero,
            u.personajes,
            req.username
            );

        const repo = HistoryRepository.getInstance();
        const historiaCreada = await repo.crearHistoria(historia);
        console.log(historiaCreada)
        return ApiResponse.sendSuccessResponse(res, 200, "Historia creada")
    }catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function generarHistoriaController(req, res) {
    try{
        const historiaId = req.body.id
    
        if (!historiaId) {
            throw new ErrorClasses.Error400()
        }

        const repo = HistoryRepository.getInstance();
        const historiaCreada = await repo.generarHistoria(historiaId, req.username);

        console.log(historiaCreada.genero)

        const repoGenero = GenreRepository.getInstance();
        const generoObtenido = await repoGenero.obtenerGenero(historiaCreada.genero, req.username);
        console.log(generoObtenido)
        return ApiResponse.sendSuccessResponse(res, 200, generoObtenido)
    }catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { crearHistoriaController, generarHistoriaController }