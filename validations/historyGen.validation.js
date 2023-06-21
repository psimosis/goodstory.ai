const ApiResponse = require('../helpers/ApiResponse')
const isNumeric = require("isnumeric");

const historyCreateValidate = (req, res, next) => {
    if (!req.body.title) {
        ApiResponse.sendErrorResponse(res, 400, "Nombre es un campo requerido")
        return;
    }
    if (!req.body.descripcion) {
        ApiResponse.sendErrorResponse(res, 400, "Descripcion es un campo requerido")
        return;
    }
    if (!req.body.genero) {
        ApiResponse.sendErrorResponse(res, 400, "Tipo es un campo requerido")
        return;
    }
    next();
};

const historyGenerateGetValidate = (req, res, next) => {
    if (!req.body.id) {
        ApiResponse.sendErrorResponse(res, 400, "El ID es un campo requerido")
        return;
    }
    next();
}


module.exports = {historyCreateValidate, historyGenerateGetValidate}
