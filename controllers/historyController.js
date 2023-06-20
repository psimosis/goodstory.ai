const HistoryRepository = require('../repositories/historyRepository')
const Historia = require('../models/historia')
const ApiResponse = require('../helpers/ApiResponse')
const {generarHistoriaService} = require('../services/historyService')


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
        const historiaCreadaId = await repo.crearHistoria(historia);
        return ApiResponse.sendSuccessResponse(res, 200, historiaCreadaId)
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

        const resultado = await generarHistoriaService(historiaId, req.username)
        
        return ApiResponse.sendSuccessResponse(res, 200, resultado)
    }catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { crearHistoriaController, generarHistoriaController }