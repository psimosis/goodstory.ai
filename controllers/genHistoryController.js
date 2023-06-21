const GenHistoryRepository = require('../repositories/genHistoryRepository')
const ApiResponse = require('../helpers/ApiResponse')

async function listarHistoriasGeneradas(req, res) {
    try {
        const repo = GenHistoryRepository.getInstance();
        const listaHistorias = await repo.listar(req.username);
        
        return ApiResponse.sendSuccessResponse(res, 200, listaHistorias)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { listarHistoriasGeneradas }